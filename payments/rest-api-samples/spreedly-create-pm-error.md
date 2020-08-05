# Spreedly Payments Rest API - Error Example
This sample sets the bare minimum fields to create a card (debit or credit) Payment Method and Transaction record in Salesforce and charge it. The response payload shows an example of a requests that resulted in a error and an un-successful charge.


- **Method:** POST
- **Endpoint:** `{sf_domain}/services/apexrest/bt_stripe/v1`


## Request Payload
```
 {
 	"action":"createPaymentMethodSpreedly",
 	"paymentGatewayId":"a0K4T0000001Nde",
 	"token":"MyqAcmraqhTGOAyVTM6qGJAjInN",
 	"transactionList":[
 					{
 						"transactionSource":"Mobile",
 						"amount":15.0,
 						"transactionId":""
 					}
 				]
 }
```

## Response Payload
```
{
    "transactionList": null,
    "success": false,
    "scaRequired": false,
    "paypalLinks": null,
    "paymentScheduleId": null,
    "paymentMethodList": null,
    "errorParam": "cvc",
    "errorMessage": "Your card's security code is incorrect.",
    "defaultPublishableKey": "pk_publishable_key",
    "defaultGatewayId": "a0K4T0000001NdeUAE",
    "customerList": null,
    "clientSecret": null
}
```
