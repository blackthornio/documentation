# TouchNet API -- REST
The additional attributes being set in the request payload will get set on the Payment Method or Transaction record that get created in Salesforce. The response payload shows an example of a requests that resulted in a successful response.

- **Method:** POST
- **Endpoint:** `{sf_domain}/services/apexrest/bt_stripe/v1`

###  Request Payload
```
{
	"paymentGatewayId": "a0M5j0000004ZkFEAU",
	"accountHolderName": "test",
	"lastFour": "1111",
	"currencyISO": "USD",
	"typeId": "Card",
	"paymentMethodId": "064145",
	"cardBrand": "Visa",
	"cardExpiryMonth": "03",
	"cardExpiryYear": "2022",
	"cardCVVCheck": "Pass",
	"postalCodeCheck": "Fail",
	"addressCheck": "Fail",
	"paymentMethodStatus": "One-Time",
	"action": "createPaymentMethodTouchnet",
}
```
### Payload

* __paymentGatewayId__ : required. The SF Id of your Payment Gateway. This represents your TouchNet Account.
* __accountHolderName__ name of Payment Method.
* __lastFour__ last four numbers of card number.
* __currencyISO__ ISO currency code is the three-letter alphabetic codes that represent the various currencies.
* __typeId__ Type of payment method(ACH or Card)
* __paymentMethodId__ Unique Gateway-generated value.
* __cardBrand__ Card brand, such as Visa or Mastercard, which can be used for payments.
*  __cardExpiryMonth__ Credit cards expire at the end of the month written on the card.
*  __cardExpiryYear__ Credit cards expire at the end of the year written on the card.
*  __paymentMethodStatus__ Availibale payment method statuses(Pending, Valid, Invalid, Expired, One, Deleted from Payment Gateway, Validated, Verified, Verification Failed, Errored).
*  __action__ Action that will be call in Salesforce.

###  Response Payload
```
{
    "transactionList": Transaction[],
    "success": boolean,
    "paymentMethodList": PaymentMethod[],
    "errorParam": string,
    "errorMessage": string,
    "defaultGatewayId": string,
    "defaultPublishableKey": string,
    "customerList": Customer[]
}
```