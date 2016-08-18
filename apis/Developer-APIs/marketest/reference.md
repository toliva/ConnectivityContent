# Reference
## Events
### Record that events occurred for given messages.
- Method: `POST`
- Url: https://marketplace-feed.prod-p.expedia.com/v1/events
- Consumes: `application/json`
- Produces: `application/json; charset=UTF-8`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
clientId | query | Client ID | true | string | 
body | body |  | false | [BatchEventReport](#/definitions/BatchEventReport) | 

**Examples**
```
{
  "events": [
    {
      "messageId": "string",
      "action": "string",
      "value": 0,
      "timestamp": "2016-08-18T04:32:20.871Z",
      "userId": "string"
    }
  ]
}
```

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
202 | Events successfully reported | #/definitions/undefined
412 | Events not processed, validation exceptions returned | #/definitions/undefined

---

## Messages
### Get the messages for the given hotel, by ID.
- Method: `GET`
- Url: https://marketplace-feed.prod-p.expedia.com/v1/messages
- Consumes: `application/json`
- Produces: `application/json; charset=UTF-8`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | Hotel ID | true | string | 
clientId | query | Client ID | true | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | successful operation | [FeedResponse](#/definitions/FeedResponse)

---

## Definitions
- <a name="/definitions/MissedOpportunitiesMessage"></a>MissedOpportunitiesMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique ID of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | [inline_model](#/definitions/inline_model) | Values of the message, context will change with message category
actionURL | string | A URL for you to action a response to this message

- <a name="/definitions/Message"></a>Message

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique ID of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | [inline_model](#/definitions/inline_model) | Values of the message, context will change with message category
actionURL | string | A URL for you to action a response to this message

- <a name="/definitions/QualityScoreMessage"></a>QualityScoreMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique ID of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | [inline_model](#/definitions/inline_model) | Values of the message, context will change with message category
actionURL | string | A URL for you to action a response to this message

- <a name="/definitions/FeedResponse"></a>FeedResponse

Property Name | Type | Description
------------- | ---- | -----------
messages | Array[[Message](#/definitions/Message)] | List of messages for the hotel requested.

- <a name="/definitions/HotelReviewMessage"></a>HotelReviewMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique ID of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | [inline_model](#/definitions/inline_model) | Values of the message, context will change with message category
actionURL | string | A URL for you to action a response to this message

- <a name="/definitions/BatchEventReport"></a>BatchEventReport

Property Name | Type | Description
------------- | ---- | -----------
events | Array[[EventReport](#/definitions/EventReport)] | 

- <a name="/definitions/MissingInventoryMessage"></a>MissingInventoryMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique ID of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | [inline_model](#/definitions/inline_model) | Values of the message, context will change with message category
actionURL | string | A URL for you to action a response to this message

- <a name="/definitions/EventReport"></a>EventReport

Property Name | Type | Description
------------- | ---- | -----------
messageId | string | 
action | string | 
value | integer | 
timestamp | string | 
userId | string | 

- <a name="/definitions/RealtimeFeedbackMessage"></a>RealtimeFeedbackMessage

Property Name | Type | Description
------------- | ---- | -----------
id | string | The unique ID of this message
hotelId | string | The hotelId to which this message pertains
category | string | The category of the given message
shortMessage | string | The message in short form
longMessage | string | The message in long form
values | [inline_model](#/definitions/inline_model) | Values of the message, context will change with message category
actionURL | string | A URL for you to action a response to this message

- <a name="/definitions/inline_model"></a>inline_model

Property Name | Type | Description
------------- | ---- | -----------
