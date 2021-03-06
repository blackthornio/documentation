# Payments Rest API - Get Transactions Example
This sample sets the params that allows to fetch the transaction details. 
You can also set `transactionStatus` to filter transaction by Status ,`paymentStatus` to filter by Payment Status `paymentMethodId` to fetch  transaction for that payment method Id. `dueDate` filter trasaction whose dueDate is the date passed.

- **Method:** POST
- **Endpoint:** `{sf_domain}/services/apexrest/bt_stripe/checkout/v1`


## Request Payload
```
{
  "action": "getTransactions",
  "transactionStatus": null,
  "transactionId": [
    "a0f2w00000tQTT1"
  ],
  "paymentStatus": null,
  "paymentMethodId": null,
  "dueDate":null
}

```

## Response Payload
```
{
  "transactionList": [
    {
      "transactionStatus": "Open",
      "transactionSource": null,
      "transactionId": "a0f2w00000tQTT1AAO",
      "refundAmount": null,
      "publishableKey": "pk_test_51C2iC8Ahwjjz1xViygyLvW4V48AlLugS5bgCfj7RP3yjTOyzeci0GnXlIkdUamNAO5Sv9ZRX7HXBrh6z1LGzoUb600PoryOD7l",
      "processedDate": null,
      "paymentStatus": null,
      "paymentMethodId": "a0P2w0000015FvEEAU",
      "paymentMethod": {
        "transactionList": null,
        "stripePayload": null,
        "stripeId": "ba_1HJwnPAhwjjz1xVibeKjcBGW",
        "status": "Verified",
        "routingNumber": "110000000",
        "publishableKey": null,
        "paymentMethodId": "a0P2w0000015FvEEAU",
        "paymentGatewayId": "a0M2w000001E7CwEAK",
        "matchByEmail": null,
        "lead": null,
        "last4": "6789",
        "holderName": "Test Plaid1",
        "expYear": null,
        "expMonth": null,
        "errorType": null,
        "errorMessage": null,
        "errorCode": null,
        "email": null,
        "customFieldMap": null,
        "customerId": "a0Y2w000000wvm4EAA",
        "contact": null,
        "brand": null,
        "bankName": "STRIPE TEST BANK",
        "addressStreet": "312 Constitution Place Austin, TX 78767 USA",
        "addressState": "TX",
        "addressPostalCode": null,
        "addressCountry": null,
        "addressCity": "Austin",
        "account": {
          "shippingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
          "shippingState": null,
          "shippingPostalCode": null,
          "shippingCountry": null,
          "shippingCity": null,
          "phone": "(512) 757-6000",
          "name": "Edge Communications",
          "id": "0012w00000KMGjVAAX",
          "billingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
          "billingState": "TX",
          "billingPostalCode": null,
          "billingCountry": null,
          "billingCity": "Austin"
        }
      },
      "paymentGatewayId": "a0M2w000001E7CwEAK",
      "openOnly": true,
      "name": "TR-000000",
      "lead": null,
      "forceCapture": null,
      "errorMessage": null,
      "dueDate": null,
      "description": null,
      "customFieldMap_p": null,
      "customer": {
        "paymentMethods": [
          {
            "transactionList": null,
            "stripePayload": null,
            "stripeId": "ba_1HJwnPAhwjjz1xVibeKjcBGW",
            "status": "Verified",
            "routingNumber": "110000000",
            "publishableKey": null,
            "paymentMethodId": "a0P2w0000015FvEEAU",
            "paymentGatewayId": "a0M2w000001E7CwEAK",
            "matchByEmail": null,
            "lead": null,
            "last4": "6789",
            "holderName": "Test Plaid1",
            "expYear": null,
            "expMonth": null,
            "errorType": null,
            "errorMessage": null,
            "errorCode": null,
            "email": null,
            "customFieldMap": null,
            "customerId": "a0Y2w000000wvm4EAA",
            "contact": null,
            "brand": null,
            "bankName": "STRIPE TEST BANK",
            "addressStreet": "312 Constitution Place Austin, TX 78767 USA",
            "addressState": "TX",
            "addressPostalCode": null,
            "addressCountry": null,
            "addressCity": "Austin",
            "account": {
              "shippingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
              "shippingState": null,
              "shippingPostalCode": null,
              "shippingCountry": null,
              "shippingCity": null,
              "phone": "(512) 757-6000",
              "name": "Edge Communications",
              "id": "0012w00000KMGjVAAX",
              "billingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
              "billingState": "TX",
              "billingPostalCode": null,
              "billingCountry": null,
              "billingCity": "Austin"
            }
          },
          {
            "transactionList": null,
            "stripePayload": null,
            "stripeId": null,
            "status": null,
            "routingNumber": null,
            "publishableKey": null,
            "paymentMethodId": "a0P2w0000015FvJEAU",
            "paymentGatewayId": "a0M2w000001E7CwEAK",
            "matchByEmail": null,
            "lead": null,
            "last4": null,
            "holderName": "fdgdfgfd",
            "expYear": null,
            "expMonth": null,
            "errorType": "invalid_request_error",
            "errorMessage": "A bank account with that routing number and account number already exists for this customer.",
            "errorCode": "bank_account_exists",
            "email": null,
            "customFieldMap": null,
            "customerId": "a0Y2w000000wvm4EAA",
            "contact": null,
            "brand": null,
            "bankName": null,
            "addressStreet": "312 Constitution Place Austin, TX 78767 USA",
            "addressState": "TX",
            "addressPostalCode": null,
            "addressCountry": null,
            "addressCity": "Austin",
            "account": {
              "shippingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
              "shippingState": null,
              "shippingPostalCode": null,
              "shippingCountry": null,
              "shippingCity": null,
              "phone": "(512) 757-6000",
              "name": "Edge Communications",
              "id": "0012w00000KMGjVAAX",
              "billingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
              "billingState": "TX",
              "billingPostalCode": null,
              "billingCountry": null,
              "billingCity": "Austin"
            }
          }
        ],
        "paymentGatewayId": null,
        "name": "Test Plaid1",
        "leadId": null,
        "email": null,
        "customerId": "a0Y2w000000wvm4EAA",
        "createdDate": null,
        "contactId": null,
        "accountId": null
      },
      "currencyISO": "USD",
      "contact": null,
      "authOnly": false,
      "amount": 10,
      "account": {
        "shippingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
        "shippingState": null,
        "shippingPostalCode": null,
        "shippingCountry": null,
        "shippingCity": null,
        "phone": "(512) 757-6000",
        "name": "Edge Communications",
        "id": "0012w00000KMGjVAAX",
        "billingStreet": "312 Constitution Place\nAustin, TX 78767\nUSA",
        "billingState": "TX",
        "billingPostalCode": null,
        "billingCountry": null,
        "billingCity": "Austin"
      }
    }
  ],
  "success": true,
  "scaRequired": false,
  "paypalLinks": null,
  "paymentScheduleId": null,
  "paymentMethodList": null,
  "errorParam": null,
  "errorMessage": null,
  "defaultPublishableKey": "pk_test_51C2iC8Ahwjjz1xViygyLvW4V48AlLugS5bgCfj7RP3yjTOyzeci0GnXlIkdUamNAO5Sv9ZRX7HXBrh6z1LGzoUb600PoryOD7l",
  "defaultGatewayId": "a0M2w000001E7CwEAK",
  "customerList": null,
  "clientSecret": null
}
```
