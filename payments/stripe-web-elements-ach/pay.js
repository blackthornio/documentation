'use strict';
/*
get this value from the Payment Gateway - Gateway Public Key field.
It will be different for test and live Payment Gateways.
*/
var publishableKey = 'pk_test_JaW3gRm7yo57hInDNH4mREYR00JgVjOstq';
var stripe = Stripe(publishableKey);

/*
This is setup to submit to a Salesforce Site. The recommended approach is to oauth to Salesforce
and call our Payments Rest API as an authenticated user. It adds an extra layer of security to
your checkout.

If you oauth to Salesforce, your endpoint will be: <SF_DOMAIN>/services/apexrest/bt_stripe/v1
*/
var paymentsRestEndpoint = 'https://fieldservicemobilepay.secure.force.com/webhooks/services/apexrest/bt_stripe/v1';

function registerElements(exampleName) {
	var formClass = '.' + exampleName;
	var example = document.querySelector(formClass);

	var form = example.querySelector('form');
	var resetButton = example.querySelector('a.reset');
	var error = form.querySelector('.error');

	function enableInputs() {
		Array.prototype.forEach.call(
			form.querySelectorAll(
				"input[type='text'], input[type='email'], input[type='tel']"
			),
			function(input) {
				input.removeAttribute('disabled');
			}
		);
	}

	function disableInputs() {
		Array.prototype.forEach.call(
			form.querySelectorAll(
				"input[type='text'], input[type='email'], input[type='tel']"
			),
			function(input) {
				input.setAttribute('disabled', 'true');
			}
		);
	}

	function triggerBrowserValidation() {
		// The only way to trigger HTML5 form validation UI is to fake a user submit event
		var submit = document.createElement('input');
		submit.type = 'submit';
		submit.style.display = 'none';
		form.appendChild(submit);
		submit.click();
		submit.remove();
	}

	resetButton.addEventListener('click', function(e) {
		e.preventDefault();
		// Resetting the form (instead of setting the value to `''` for each input)
		// helps us clear webkit autofill styles.
		form.reset();

		// Reset error state as well.
		error.classList.remove('visible');

		// Resetting the form does not un-disable inputs, so we need to do it separately:
		enableInputs();
		example.classList.remove('submitted');
	});

	// Listen on the form's 'submit' handler - here's where all the magic happens
	form.addEventListener('submit', function(e) {
		e.preventDefault();

		// Trigger HTML5 validation UI on the form if any of the inputs fail validation
		var plainInputsValid = true;
		Array.prototype.forEach.call(form.querySelectorAll('input'), function(input) {
			if (input.checkValidity && !input.checkValidity()) {
				plainInputsValid = false;
				return;
			}
		});
		if (!plainInputsValid) {
			triggerBrowserValidation();
			return;
		}

		// Show a loading screen...
		example.classList.add('submitting');

		// Disable all inputs.
		disableInputs();

		// Gather additional customer data we may have collected in our form.
		var name = form.querySelector('#' + exampleName + '-name');
		var routing_number = form.querySelector('#' + exampleName + '-routing-number');
		var account_number = form.querySelector('#' + exampleName + '-account-number');
		var account_holder_type = form.querySelector('#' + exampleName + '-selectoptions');

		var bankAccountData = {
			country: 'US',
			currency: 'usd',
			routing_number: routing_number.value,
			account_number: account_number.value,
			account_holder_name: name.value,
			account_holder_type: account_holder_type.value,
		};

		// Use Stripe.js to create a token. We only need to pass in one Element
		// from the Element group in order to create a token. We can also pass
		// in the additional customer data we collected in our form.
		stripe.createToken('bank_account', bankAccountData).then(function(result) {
			if (result.token) {
				// If we received a token, show the token ID
				example.querySelector('.token').innerText = result.token.id;

				// here's where we call the Blackthorn Payments Rest API
				sendTokenBlackthornPaymentsAPI(result.token, example);
			} else {
				example.classList.remove('submitting');
				// Otherwise, un-disable inputs.
				enableInputs();
			}
		});
	});
}

function sendTokenBlackthornPaymentsAPI(stripeToken, example) {
	console.log('stripeToken: ' + JSON.stringify(stripeToken));

	var form = example.querySelector('form');

	// build the payload for the Payments Rest API - lots of attributes can be set here
	// we're only creating a Payment Method for the Bank Account because Stripe requires
	// the customer verify with micro deposits before the Bank Account can be charged
	var payload = {
		stripePayload : JSON.stringify(stripeToken),
		email : form.querySelector('#' + exampleName + '-email'),
		action : "createPaymentMethod",
		isDefault : true,
		publishableKey : publishableKey
	};


	// this makes a rest call to our Payments API - feel free to use JQuery to make this call
	var xhr = new XMLHttpRequest(); // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	xhr.open('POST', paymentsRestEndpoint);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('paymentsRestAPIResponse: ' + xhr.responseText);

			var response = JSON.parse(xhr.responseText);
			console.log('response.success: ' + response.success);
			var msg;
			if (response.success == true) { // see if success
				msg = 'Blackthorn Payments API create a Payment Method: ' + response.paymentMethodList[0].paymentMethodId;
			} else {
				msg = 'Error from Blackthorn Payments Rest API: ' + response.errorMessage;
			}

			document.getElementById('salesforce_message').innerText = msg;

			// Stop loading!
			example.classList.remove('submitting');

			// todo: figure out how to show error below form instead of on success page
			example.classList.add('submitted');
		}
	};
	xhr.send(JSON.stringify(payload));
}

(function() {
	'use strict';

	// Floating labels
	var inputs = document.querySelectorAll('.cell.example.example2 .input');
	Array.prototype.forEach.call(inputs, function(input) {
		input.addEventListener('focus', function() {
			input.classList.add('focused');
		});
		input.addEventListener('blur', function() {
			input.classList.remove('focused');
		});
		input.addEventListener('keyup', function() {
			if (input.value.length === 0) {
				input.classList.add('empty');
			} else {
				input.classList.remove('empty');
			}
		});
	});

	registerElements('example2');
})();
