# Events Session Checkout Rest API
The Event Session Checkout API can be used to register attendees for sessions.
The API accepts request data posted to a Rest formatted url and saves data in Salesforce as a Event Registration Submission record. All data is accepted and returned in JSON format. Your application must [oauth to a Salesforce org](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5) that contains our Payments and Events packages before making calls to the API. This API can also be called from a SF Site that's setup correctly.

## API Calls
Here are the supported Checkout API calls.

### Register for Session
Call this endpoint to save session data as a Event Registration Submission record in Salesforce. The `id` attribute in the request body determines what happens in Salesforce. If `id` is blank, a values will be generated and a new record will be inserted. If `id` is populated, we query for an existing Event Registration record and update it if found. If the record is not found, a new Event Registration record is create. If the data is passed with submit = false only few validation are executed and response is returned. 

If the data is passed with submit = true it is final submit of session data to generate Session Attendees and update the Event Registration record as Complete in Salesforce. Once the Event Registration record is complete, it cannot be saved or submitted again.


- **Method:** POST
- **Endpoint:** `{sf_domain}/services/apexrest/conference360/sessionRegistration`
- **Request Body Payload:** See the API Request and Response Payload section below
- **Response Body Payload:** See the API Request and Response Payload section below


## API Request and Response Payload

JSON Attribute | Section | Required? | Type | Details
----- | ----- | ----- | ----- | -----
id | root | On Submit | String | 
attendeeList | root | No | Array Attendee Information | 


## Sample Submit Payload
```
{
  "id": "a160U000001TpLIQA0",
  "sessionId": "edc0403c-cb61-46d3-af03-56605fc065de",
  "attendeeList": [
    {
      "id": "attendeeid",
       "sessionIds":["sessionId1","sessionId2"],
    }
  ],
  "submit": true
}
```
