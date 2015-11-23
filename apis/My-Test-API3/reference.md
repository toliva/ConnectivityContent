# My Test API3
## Messages
### Get the messages for the given hotel, by ID.
- Method: `GET`
- Url: https://marketplace-feed.prod-p.expedia.com/v1/messages
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Client-Id | header | Client ID | true | string | 
hotelId | query | Hotel ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | successful operation | [FeedResponse](#/definitions/FeedResponse)

## Definitions
- <a name="/definitions/MissedOpportunitiesMessage"></a>MissedOpportunitiesMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique id of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | object | Optional given values of the message, context will change with message category
actionURL | string | An optional URL for you to action a response to this message.

- <a name="/definitions/Message"></a>Message

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique id of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | object | Optional given values of the message, context will change with message category
actionURL | string | An optional URL for you to action a response to this message.

- <a name="/definitions/FeedResponse"></a>FeedResponse

Property Name | Type | Description
------------- | ---- | -----------
messages | Array[[Message](#/definitions/Message)] | List of messages for the hotel requested.

- <a name="/definitions/HotelReviewMessage"></a>HotelReviewMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique id of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | object | Optional given values of the message, context will change with message category
actionURL | string | An optional URL for you to action a response to this message.

- <a name="/definitions/MissingInventoryMessage"></a>MissingInventoryMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique id of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | object | Optional given values of the message, context will change with message category
actionURL | string | An optional URL for you to action a response to this message.

- <a name="/definitions/RealtimeFeedbackMessage"></a>RealtimeFeedbackMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique id of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | object | Optional given values of the message, context will change with message category
actionURL | string | An optional URL for you to action a response to this message.
