## Events Add To Waitlist Rest API
The Events Add To Waitlist API is designed to accept data by POST calls from Rest formatted Urls. All data is accepted and returned in JSON format. Your application must [oauth to a Salesforce org](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5) that contains our Events package before making calls to the API. This API can also be called from a SF Site that's setup correctly.

### Errors
The API will return a Status Code = 400 or 500 depending on the error type:
- 400 - Returned if error is caused by invalid or missing attributes or from validation checks.
- 500 - Returned if error is caused by an unexpected server error such as null pointer or database exception.

For either of these codes, the response body will contain an error attribute:
`{"error" : "This is what went wrong."}`

If ther are any errors in a request, no records will get created in Salesforce.

## API Calls

### Waitlist Unauthenticated Attendees for Ticket Event Items
Post Attendees that want to get added to a waitlist for a ticket Event Item. Multiple Attendees and multiple Event Item tickets are supported. If there is waitlist capacity remaining, each Attendee will be added to the waitlist for the submitted Event Item ticket.

**Endpoint:** `{sf_domain}/services/apexrest/conference360/waitlist/v1/eventitem`


JSON Attribute | Required? | Type | Details
----- | ----- | ----- | -----
mainContact | No | MainContact | Name and Email of the main contact. Attributes of MainContact are: firstName, lastName and email.
waitlistAttendees | Yes | Array of WaitlistAttendees | Array of Attendees to Waitlist. Attributes of WaitlistAttendee are: eventItemId (required), firstName (required), lastName (required), email (required), phone, accountId, contactId and leadId.



**Sample Body:** This example will add 2 Attendees to the waitlist for two different ticket event item. Setting the optional contactId, accountId or leadId will associate the Attendees to those parent records. If the email of the MainContact is set, it will be saved in the Attendee - Primary Email field. All Attendees created will have their Registration Status field set to `Waitlisted - Pending` and if more than one Attendee is pass in at a time, all the Attendees will be added to a new Attendee Group.
```
{
  "waitlistAttendees" : [ {
    "eventItemId" : "a0zf4000003CfQiAAK",
    "firstName" : "Tom",
    "lastName" : "Smith",
    "email" : "tom@blackthorn.io",
    "phone" : "808-555-1234",
    "contactId" : "003f400000PLfd2AAD",
    "accountId" : "001f400000QepmMAAR",
    "customQuestions":[
       {
          "formElementId":"001f400000QepmMAAR",
          "answer":"test answer"
       },
       {
          "formElementId":"001f400000QepmMAAR",
          "answer":"test answer2"
       }
     ]
  }, {
    "eventItemId" : "a0zf4000003qR4IAAU",
    "firstName" : "Sally",
    "lastName" : "Thomas",
    "email" : "sally@blackthorn.io",
    "phone" : "303-555-6789",
    "leadId" : "00Qf4000007tVCMEA2",
    "customQuestions":[
       {
          "formElementId":"001f400000QepmMAAR",
          "answer":"test answer"
       },
       {
          "formElementId":"001f400000QepmMAAR",
          "answer":"test answer2"
       }
     ]
  } ],
  "mainContact" : {
    "lastName" : "Contact",
    "firstName" : "Main",
    "email" : "someone@blackthorn.io"
  }
}
```

**Success Message:** If the API request was successful, the following response message will be returned:
```
{
  "message" : "The Attendees were successfully added to the ticket waitlist.",
  "attendeeIds" : [ "a0wf4000005ElWQAA0", "a0wf4000005ElWRAA0" ]
}
```


***


### Waitlist Authenticated Attendees for Event Sessions
Post Authenticated Attendees (has a known Attendee Id) that want to get added to a waitlist for one or more Event Sessions. If there is waitlist capacity remaining for a Session, the Attendees will be added to the waitlist.

**Endpoint:** `{sf_domain}/services/apexrest/conference360/waitlist/v1/eventsessions`


JSON Attribute | Required? | Type | Details
----- | ----- | ----- | -----
waitlistAttendees | Yes | Array of WaitlistAttendees | Array of Attendees to Waitlist. Attributes of WaitlistAttendee are: sessionIds (required - Array of Strings), attendeeId (required), contactId and leadId.


**Sample Body:** This example will add the submitted Attendee to the waitlist for 2 Event Sessions by creating 2 Session Attendee records. Each Session Attendee record will have The Session and Attendee set to the Ids passed in along with the optional contactId, accountId or leadId fields. All Session Attendees created will have their Registration Status field set to `Waitlisted - Pending`.
```
{
  "waitlistAttendees" : [ {
    "sessionIds" : [ "a1Bf4000001PH2zEAG", "a1Bf4000004Pv0tEAC" ],
    "attendeeId" : "a0wf40000026ZbEAAU",
    "contactId" : "003f400000PLfd2AAD"
  } ]
}
```

**Success Message:** If the API request was successful, the following response message will be returned:
```
{
  "message" : "All Sessions were successfully waitlisted for the Attendee.",
  "sessionAttendeeIds" : [ "a18f4000002ZOsRAAW", "a18f4000002ZOsSAAW" ]
}
```
