## Events Data Rest API
The Events Data API is designed to return data by GET calls from Rest formatted Urls. All data is returned in JSON format. Your application must [oauth to a Salesforce org](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5) that contains our Events package before making calls to the API. This API can also be called from a SF Site that's setup correctly. The Data API supports getting multiple records in one call and is mainly segregated by SF object.

### Rest Url Format
`{sf_domain}/services/apexrest/conference360/data/v1/`

### Errors
Any API calls that result in an error return a Status Code = 500 and a response body of:

`{"error" : "This is what went wrong."}`

## API Calls

### GET Events
Get Event and the related Event Settings and Event Items in one call by key(s) (not Id). Multiple Events can be retrieved in the same call by passing in multiple key values separated by commas. If no key values are passed in, all future Events with a Status of `Draft` or `Active` are returned - up to the 500 Events sorted by `Event Start Date`.

**endpoint** `data/v1/events`

Parameter | Required? | Value
--------- | --------- | -----
key | No | value to use is Key__c field on Event. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**examples**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events?pretty=true)

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events?key=WN2bx4JyXn](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events?key=WN2bx4JyXn&pretty=true)


***


### GET Events Lite
This call works the same as the Get Events but a limited number of fields are returned. This can be called for a listing page or to get capacity or sales date data for validations.

**endpoint** `data/v1/events/lite`

Parameter | Required? | Value
--------- | --------- | -----
key | No | value to use is Key__c field on Event. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**examples**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events/lite](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events/lite?pretty=true)

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events/lite?key=WN2bx4JyXn](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/events/lite?key=WN2bx4JyXn&pretty=true)


***


### GET Groups
Get Event Group records by key(s) or all Event Group records. Event Groups are used to group similiar Events together for a listing page. Basic Event information is also returned for each Event Group.

**endpoint** `data/v1/groups`

Parameter | Required? | Value
--------- | --------- | -----
key | No | value to use is Key__c field on Event Group. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON


**examples**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/groups](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/groups?pretty=true)

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/groups?key=blackthorn](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/groups?key=blackthorn&pretty=true)


***


### GET Attendees
Get Attendee records by key(s) or all records for an Event by eventId(s). The key OR eventId parameter must be set to retrieve data.

**endpoint** `data/v1/attendees`

Parameter | Required? | Value
--------- | --------- | -----
key | Yes (or eventId) | value to use is Key__c field on Attendee. can pass multiple separated by commas
eventId | Yes (or key) | value is Event__c on Attendee. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**examples**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/attendees?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/attendees?eventId=a0w3i0000005TEg&pretty=true)

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/attendees?key=h8yPVaATX1](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/attendees?key=h8yPVaATX1&pretty=true)


***


### GET Forms
Get Form and the related Form Elements in one call by Id. Multiple Forms can be retrieved in the same call by passing in multiple Id values separated by commas. If no Id values are passed in, all Forms are returned - up to the 500 Events sorted by `Name`. Form Elements are sorted by the `Sort Order` field.

**endpoint** `data/v1/forms`

Parameter | Required? | Value
--------- | --------- | -----
id | No | value is Id on Form. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON


**examples**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/forms](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/forms?pretty=true)

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/forms?id=a113i000000MaqK](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/forms?id=a113i000000MaqK&pretty=true)


***


### GET Sessions
Get Sessions for one or more Events.

**endpoint** `data/v1/sessions`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Session. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/sessions?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/sessions?eventId=a0w3i0000005TEg&pretty=true)


***


### GET Speakers
Get Speakers for one or more Events.

**endpoint** `data/v1/speakers`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Speaker. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/speakers?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/speakers?eventId=a0w3i0000005TEg&pretty=true)


***


### GET Sponsors
Get Sponsors for one or more Events.

**endpoint** `data/v1/sponsors`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Sponsor. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/sponsors?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/sponsors?eventId=a0w3i0000005TEg&pretty=true)


***


### GET FAQs
Get Event FAQs for one or more Events.

**endpoint** `data/v1/faqs`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Event FAQ. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/faqs?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/faqs?eventId=a0w3i0000005TEg&pretty=true)


***


### GET Tabs
Get Custom Event Tabs for one or more Events.

**endpoint** `data/v1/tabs`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Custom Event Tab. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/tabs?eventId=a0w3i00000054tW](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/tabs?eventId=a0w3i00000054tW&pretty=true)


***


### GET Content
Get Event Content for one or more Events.

**endpoint** `data/v1/content`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Event Content. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/content?eventId=a0w3i00000054tW](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/content?eventId=a0w3i00000054tW&pretty=true)


***

### GET Ads
Get Event Ads for one or more Events.

**endpoint** `data/v1/ads`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Event Ad. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/ads?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/ads?eventId=a0w3i0000005TEg&pretty=true)


***


### GET Notifications
Get Event Notifications for one or more Events.

**endpoint** `data/v1/notifications`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Event Notification. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/notifications?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/notifications?eventId=a0w3i0000005TEg&pretty=true)


***


### GET Tracks
Get Track and the related Track Sessions in one call for one or more Events.

**endpoint** `data/v1/tracks`

Parameter | Required? | Value
--------- | --------- | -----
eventId | Yes | value is Event__c on Track. can pass multiple separated by commas
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/tracks?eventId=a0w3i0000005TEg](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/tracks?eventId=a0w3i0000005TEg&pretty=true)


***


### GET Picklist Values
Get picklist values from the customer's org. This allows the customer to change picklist values to meet their needs and have their values reflected on the Events platform. The value for `label` should be displayed to the user in the picklist and the value for the `value` should be the value for the picklist. When submitting data to the checkout API, always pass the value for the `value` attribute.

**endpoint** = `/data/v1/picklists`

Parameter | Required? | Value
--------- | --------- | -----
pretty | No | set to `true` to output pretty JSON

**example**

[https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/picklists](https://blackthorndemo1-developer-edition.na112.force.com/services/apexrest/conference360/data/v1/picklists?pretty=true)

