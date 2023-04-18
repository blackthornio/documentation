# Storefront Rest API

 The Checkout API accepts cart data posted to a Rest formatted url and saves data in Salesforce as a Checkout Submission record. Cart data can also be retrieve from the api by cart key. All data is accepted and returned in JSON format. Your application must [oauth to a Salesforce org](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5) that contains our Payments package before making calls to the API. This API can also be called from a SF Site that's setup correctly.

## API Calls
Here are the supported Checkout API calls.

### Validate Discount Code
Call this endpoint to validate the discount code & create draft checkout. The `cartKey` attribute in the request body determines what happens in Salesforce. If `cartKey` is blank, a values will be generated and a new record will be inserted. If `cartKey` is populated, we query for an existing Checkout Submission record and update it if found. If the record is not found, a new Checkout Submission record is created with the `cartKey` set as the 
record Key.

**Method:** POST
**Endpoint:** `{sf_domain}/services/apexrest/btstorefront/checkout/v1`
**Request Body Payload:** See the API Request and Response Payload section below
**Response Body Payload:** See the API Request and Response Payload section below


### Submit Cart
Call this endpoint to do a final submit of cart data to generate a new Sales Document (Blackthorn Invoice) record, Line Item records and update the Checkout Submission record as Complete in Salesforce. Once the Checkout Submission record is complete, it cannot be saved or submitted again. If Transaction Id(s) are submitted on the cart, the Transactions are associated to the Sales Document to update the Payment Status and determine the Balance Due. There is additional logic to process Transaction(s) that are only authorized and not yet captured.

**Method:** POST
**Endpoint:** `{sf_domain}/services/apexrest/btstorefront/checkout/v1`
**Request Body Payload:** See the API Request and Response Payload section below
**Response Body Payload:** See the API Request and Response Payload section below


## Errors
The API will return a Status Code = 400 or 500 depending on the error type:
- 400 - Returned if error is caused by invalid or missing attributes or from validation checks.
- 500 - Returned if error is caused by an unexpected server error such as null pointer or database exception.

For either of these codes, the response body will contain  an error attribute & errorCode. It will also have success : true or false
`{"error" : "This is what went wrong."}`


## API Request and Response Payload

JSON Attribute | Required? | Type | Details
----- | ----- | ----- | -----
mainContact | No | MainContact | Name and Email of the main contact. Attributes of MainContact are: firstName, lastName and email.
waitlistAttendees | Yes | Array of WaitlistAttendees | Array of Attendees to Waitlist. Attributes of WaitlistAttendee are: eventItemId (required), firstName (required), lastName (required), email (required), phone, accountId, contactId and leadId.



**Sample Body:** This below payload will submit checkout. To validate the code pass "validateCode" : true & "submit" : false
```
{
  "transactionIds" : null,
  "authenticatedAccountId" : null,
  "validateCode" : false
  "submit": true
  "salesDocument" : {
    "promoCode" : "1_OFF",
    "currencyCode" : "USD",
    "paymentTerm" : "Net 30",
    "paymentGatewayId" : "a0C0b00000UbO5FEAV",
    "billTo" : {
      "title" : "VP of Sales",
      "street" : "1060 W Addison Ave",
      "state" : "IL",
      "relatedId" : null,
      "postalCode" : "62626",
      "phone" : "808-555-1234",
      "lastName" : "lastName",
      "firstName" : "firstName",
      "email" : "email@blackthorn.io",
      "country" : "USA",
      "company" : "McDonalds",
      "city" : "Chicago"
    },
    "shipTo" : {
      "title" : "VP of Sales",
      "street" : "1060 W Addison Ave",
      "state" : "IL",
      "relatedId" : null,
      "postalCode" : "62626",
      "phone" : "808-555-1234",
      "lastName" : "lastName",
      "firstName" : "firstName",
      "email" : "email@blackthorn.io",
      "country" : "USA",
      "company" : "McDonalds",
      "city" : "Chicago"
    },
    "items" : [ {
      "quantity" : 1,
      "customQuestions: [],
      "priceBookId" : "01s0b000002sibWAAQ",
      "productId" : "01t0b00000HQxv5AAD",
      "storeId" : "01t0b00000HQxv5AAD",
      "storeProductId": "01t0b00000HQxv5AAD"
    }, {
      "quantity" : 1,
      "priceBookId" : "01s0b000002sibWAAQ",
      "customQuestions: [],
      "productId" : "01t0b00000HQxv0AAD",
      "storeId" : "01t0b00000HQxv5AAD",
      "storeProductId": "01t0b00000HQxv5AAD"
    } ]
  }
}

```



***


