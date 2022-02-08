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
  "submit": true
}
```
