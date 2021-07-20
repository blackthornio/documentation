# Payments Rest API - Success Example
This sample sets the bare minimum fields to create a card (debit or credit) Payment Method and Transaction record in Salesforce and charge it. The response payload shows an example of a requests that resulted in a successful charge.


- **Method:** POST
- **Endpoint:** `{sf_domain}/services/apexrest/bt_stripe/checkout/v1/createPaymentMethod`


## Request Payload
```
{
    "action" : "createPaymentMethod",
    "paymentGatewayId" : "a0K4T0000001Nde",
    "isDefault" : true,
    "contactId" : "0034T000006AuEz",
    "accountId" : "0014T00000470Si",
    "addressStreet":"test street",
    "addressCity":"New York",
    "addressState":"New York",
    "addressCountry":"USA",
    "addressPostalCode":"11022",
    "transactionList": [
    ],
    "paymentMethodData": {
        "name": "test1",
        "email": "someone3@blackthorn.io",
        "opaqueData": {
           "dataDescriptor": "COMMON.ACCEPT.INAPP.PAYMENT",
           "dataValue": "eyJjb2RlIjoiNTBfMl8wNjAwMDUzNzZDQkFBQzJFRDY0RUFCQ0VCMkU0NEQxRTc1NkI4NjJFMEQ2QjkyQkQxMjk0Qjc2OUU5RThFQzVBMjJBMUUxNEE3QTJGMzM5NTJDMzAwNEVEQUU2QzE2ODJBREYyNkQwIiwidG9rZW4iOiI5NTU5NTU5ODE2MzkxMTM2NTAzNTAyIiwidiI6IjEuMSJ9"
        }
    }
}
```

## Response Payload
```
{
    "transactionList": null,
    "success": true,
    "scaRequired": false,
    "paypalLinks": null,
    "paymentScheduleId": null,
    "paymentMethodList": [
        {
            "transactionList": null,
            "stripePayload": null,
            "stripeId": null,
            "status": "Valid",
            "publishableKey": null,
            "paymentMethodId": "a0N4T000000ovgaUAA",
            "paymentGatewayId": "a0K4T0000001NdeUAE",
            "matchByEmail": null,
            "lead": null,
            "last4": "4242",
            "holderName": "sdada",
            "expYear": "2021",
            "expMonth": "6",
            "errorType": null,
            "errorMessage": null,
            "errorCode": null,
            "email": "someone3@blackthorn.io",
            "customFieldMap": null,
            "customerId": "a0W4T0000006GktUAE",
            "contact": {
                "salutation": "Ms.",
                "otherStreet": null,
                "otherState": null,
                "otherPostalCode": null,
                "otherCountry": null,
                "otherCity": null,
                "name": "Jane Grey",
                "mailingStreet": "888 N Euclid \nHallis Center, Room 501\nTucson, AZ 85721\nUnited States",
                "mailingState": null,
                "mailingPostalCode": null,
                "mailingCountry": null,
                "mailingCity": null,
                "lastName": "Grey",
                "id": "0034T000006AuEzQAK",
                "firstName": "Jane",
                "email": "jane_gray@uoa.edu",
                "accountId": "0014T00000470SiQAI"
            },
            "brand": "Visa",
            "addressStreet": "",
            "addressState": null,
            "addressPostalCode": null,
            "addressCountry": null,
            "addressCity": null,
            "account": {
                "shippingStreet": "888 N Euclid \nHallis Center, Room 501\nTucson, AZ 85721\nUnited States",
                "shippingState": null,
                "shippingPostalCode": null,
                "shippingCountry": null,
                "shippingCity": null,
                "phone": "(520) 773-9050",
                "name": "University of Arizona",
                "id": "0014T00000470SiQAI",
                "billingStreet": "888 N Euclid \nHallis Center, Room 501\nTucson, AZ 85721\nUnited States",
                "billingState": "AZ",
                "billingPostalCode": null,
                "billingCountry": null,
                "billingCity": "Tucson"
            }
        }
    ],
    "errorParam": null,
    "errorMessage": null,
    "defaultPublishableKey": "pk_test_ijs3P3CLjq7uvdyYWJc16MSm00newxHxIE",
    "defaultGatewayId": "a0K4T0000001NdeUAE",
    "customerList": null,
    "clientSecret": null
}
```
