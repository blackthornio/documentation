
1. Capture an existing payment intent.

**Method:** POST
**Endpoint:** `/services/apexrest/bt_stripe/mobile/v1/captureTransaction`
**Request Body Payload:** See the API Request and Response Payload section below
**Response Body Payload:** See the API Request and Response Payload section below

## API Request and Response Payload

**Sample Body:** This below payload will capture transacttion. 

```
{
    "paymentGatewayId" : "gateway_id",
    "stripeChargeId" : "payment_intent_id",
    "transactionId" : "id_of_transaction",
    "amount" : amount*100,
    "currency" : "USD",
    "description" : "description on transaction",
    "accountId" : "optional but set if you have it",
    "contactId" : "optional but set if you have it",
    "firstName" : "optional but set if you have it",
    "lastName" : "optional but set if you have it",
    "company" : "optional but set if you have it",
    "email" : "optional but set if you have it",
    "phone" : "optional but set if you have it",
    confirm: true
}
```