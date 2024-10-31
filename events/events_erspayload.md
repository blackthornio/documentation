# Events Checkout Rest API
The Event Checkout API can be used to create a shopping cart to capture relevant data for a custom Event checkout experience.
The API accepts cart data posted to a Rest formatted url and saves data in Salesforce as a Event Registration Submission record. All data is accepted and returned in JSON format. Your application must [oauth to a Salesforce org](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5) that contains our Payments and Events packages before making calls to the API. This API can also be called from a SF Site that's setup correctly.

## API Calls
Here are the supported Checkout API calls.

### Save/Submit Cart
Call this endpoint to save cart data as a Event Registration Submission record in Salesforce. The `id` attribute in the request body determines what happens in Salesforce. If `id` is blank, a values will be generated and a new record will be inserted. If `id` is populated, we query for an existing Event Registration record and update it if found. If the record is not found, a new Event Registration record is create. If the data is passed with submit = false only few validation are executed and response is returned. Discount Codes are also validated if set.

If the data is passed with submit = true it is final submit of cart data to generate a new Sales Document (Blackthorn Invoice) record, Line Item records,Attendees & Form Submissions and update the Event Registration record as Complete in Salesforce. Once the Event Registration record is complete, it cannot be saved or submitted again. If Transaction Id(s) are submitted on the cart, the Transactions are associated to the Sales Document to update the Payment Status and determine the Balance Due. There is additional logic to process Transaction(s) that are only authorized and not yet captured. 


- **Method:** POST
- **Endpoint:** `{sf_domain}/services/apexrest/conference360/eventRegistrationSubmission`
- **Request Body Payload:** See the API Request and Response Payload section below
- **Response Body Payload:** See the API Request and Response Payload section below


## API Request and Response Payload

JSON Attribute | Section | Required? | Type | Details
----- | ----- | ----- | ----- | -----
id | root | On Submit | String | 
discountCodeName | root | On Submit | String | 
transactionId | root | No | String | 
transactionIds | root | No | Array | 
submit | root | No | Boolean | 
contactBillTo | root | On Submit | Contact Information | 
attendeeList | root | No | Array Attendee Information | 


## Sample Submit Payload
```
{
  "id": "a160U000001TpLIQA0",
  "sessionId": "edc0403c-cb61-46d3-af03-56605fc065de",
  "discountCodeName": null,
  "contactBillTo": {
    "firstName": "1",
    "lastName": "Test",
    "email": "test@test.com",
    "company": ""
  },
  "attendeeList": [
    {
      "eventItemId": "a130U000000tFYLQA2",
      "firstName": "1",
      "lastName": "Test",
      "email": "test@test.com",
      "country": "IN",
      "answerList":[{
          "formElementId" :"<id>",
          "answer":"answervalue"
       }],
       "sessionIds":["sessionId1","sessionId2"],
       "donations":[
             {
                "donationAmount":50
                "eventItemId":"a130U000000tFYLQAY"
             }
        ],
        "products":[
             {
                "eventItemId":"a130U000000tFYLQAY"
             }
        ],
    }
  ],
  "transactionId":null,
  "transactionIds":null,
  "submit": true
}
```
