# Reference

## Authentication

The Marketplace Feed API requires HTTP basic auth credentials to be supplied with every request.

Credentials must match a valid hotelier username/password.  If data for a specific hotel or list of hotels is being requested, the credentials must be authorized to access data for those hotels.

## Messages Endpoint

```
GET https://marketplace-feed.prod-p.expedia.com/v1/messages
```

The `/v1/messages` endpoint returns a list of messages for a given hotel.

Every message has a set of [standard properties](#standard-message-properties), and may also have different `values` sub-properties specific to the message's [category](#message-categories).

Addition of new properties is not considered a breaking API change, and will not necessarily result in a new API version - you should build your clients with this assumption in mind.

Addition of new message categories (and their corresponding new `values` properties) is also not considered a breaking change - your client should ignore any messages belonging to a category it doesn't understand.

### Request Parameters

| Name                | Parameter Type | Data Type | Example              |
|---------------------|----------------|-----------|----------------------|
| `Authorization`     | Header         | String    | `Basic dGVzdDp0ZXN0` |
| `hotelId`           | Query          | String    | `123`                |
| `clientId`          | Query          | String    | `YourOrganization`   |

### Response

#### HTTP Status Codes

| Code                    | Reason                                                                          |
|-------------------------|---------------------------------------------------------------------------------|
| 200 OK                  | Request was successful.                                                         |
| 401 Unauthorized        | Invalid username or password.                                                   |
| 403 Forbidden           | Auth credentials are valid, but user is not authorized for the requested hotel. |
| 406 Not Acceptable      | Request does not indicate acceptance of an `application/json` response.         |
| 412 Precondition Failed | clientId and/or hotelId query parameters are invalid/missing.                   |

#### Response Content

When successful, the `/v1/messages` endpoint responds with a JSON object with `Content-Type: application/json`.

##### Top-Level Properties

| Name       | Data Type | Description                        | Example     |
|------------|-----------|------------------------------------|-------------|
| `messages` | Array     | A collection of `Message` objects. | `[]`        |

##### Standard Message Properties

| Property        | Data Type | Description                                                                                                  | Example                                                                                                 |
|-----------------|-----------|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `id`            | String    | A unique identifier for the message.                                                                         | `"95fbaf423d3d6c5cb32a247aedc97d64b9ae1aff"`                                                            |
| `category`      | String    | The message type.                                                                                            | `"Missing Inventory"`                                                                                   |
| `hotelId`       | String    | The Expedia ID of the hotel the message is for.                                                              | `"123"`                                                                                                 |
| `shortMessage`  | String    | A shorter version of longMessage.                                                                            | `"On 2015-10-20 you can sell 5 more rooms with Expedia. Add inventory now."`                            |
| `longMessage`   | String    | The text message intended for the hotelier.                                                                  | `"On 2015-10-20 you have only 10 rooms left. Our sales forecast shows that we can sell 5 more rooms."`  |
| `actionURL  `   | String    | A URL that can be used to perform actions related to the message.  The value of this property may be `null`. | `"https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=123"` |
| `values`        | Object    | An object representing attributes for this message.  Properties vary according to the message `category`.    | `{ "currentRooms": 10 }`                                                                                |

#### Message Categories

Each message may belong to one of the following categories (as indicated by its `category` property).

##### Missing Inventory

Our sales forecast indicates that we can sell more inventory for the requested hotel on a certain night.

###### `values` Properties

| Property       | Data Type | Description                                                            | Example        |
|----------------|-----------|------------------------------------------------------------------------|----------------|
| `date`         | String    | The date the forecast applies to (YYYY-MM-DD).                         | `"2016-07-10"` |
| `currentRooms` | Integer   | The current number of rooms available when the forecast was generated. | `3`            |
| `roomsToAdd`   | Integer   | The number of extra rooms the forecast suggests we could sell.         | `5`            |
| `roomTypeId`   | String    | The Expedia room type ID we suggest adding rooms to.                   | `"12345"`      |

###### Example Missing Inventory Message

```
{
    "id": "2379cce04a79d3669717de302c8a45bf20f0cf5e",
    "hotelId": "test",
    "category": "Missing Inventory",
    "shortMessage": "On Nov 19, 2015 you can sell 5 more rooms with Expedia. Add inventory now.",
    "longMessage": "On Nov 19, 2015 you have only 10 rooms left. Our sales forecast shows that we can sell 5 more rooms.",
    "values": {
        "date": "2015-11-19",
        "currentRooms": 10,
        "roomsToAdd": 5,
        "roomTypeId": "12345"
    },
    "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
}
```

##### Missed Opportunities

Travelers viewed the requested hotel, but booked elsewhere.

###### `values` Properties

| Property              | Data Type | Description                                                            | Example |
|-----------------------|-----------|------------------------------------------------------------------------|---------|
| `count`               | Integer   | The number of travelers checking in today with another hotel.          | `3`     |
| `missedOpportunities` | Array     | A collection of `Missed Opportunity` objects.                          | []      |

`Missed Opportunity` objects have the following properties:

| Property              | Data Type | Description                                                                                             | Example            |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| `hotelId`             | String    | The ID of the hotel the guest booked with.                                                              | `"25280"`          |
| `hotelName`           | String    | The name of the hotel the guest booked with.                                                            | `"The Verb Hotel"` |
| `bookings`            | Integer   | The number of travelers checking in today who booked with this hotel after viewing the requested hotel. | `2`                |

###### Example Missed Opportunities Message

```
{
    "id": "9c16e2adf1734b253e405f5d6e3a42c035dab81c",
    "hotelId": "test",
    "category": "Missed Opportunities",
    "shortMessage": "So far, you lost 3 bookings today.",
    "longMessage": "3 travelers arriving in your market today viewed your property but booked elsewhere.",
    "values": {
        "count": 3,
        "missedOpportunities": [
            {
                "hotelId": "25280",
                "hotelName": "The Verb Hotel",
                "bookings": 2
            },
            {
                "hotelId": "119162",
                "hotelName": "Le Meridien Cambridge-MIT",
                "bookings": 1
            }
        ]
    },
    "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
}
```

##### Real-Time Feedback

A guest currently staying at the requested hotel has provided real-time feedback that management has not yet responded to.

###### `values` Properties

| Property              | Data Type | Description                                                                                                | Example                      |
|-----------------------|-----------|------------------------------------------------------------------------------------------------------------|------------------------------|
| `itineraryId`         | String    | The Expedia itineraty ID of the guest's booking.                                                           | `"12345"`                    |
| `startDate`           | String    | The guest's checkin date/time, in ISO-8601 format.                                                         | `"2015-11-11T01:00:00.000Z"` |
| `endDate`             | String    | The guest's checkout date/time, in ISO-8601 format.                                                        | `"2015-11-13T05:00:00.000Z"` |
| `createDate`          | String    | The date/time the feedback was created, in ISO-8601 format.                                                | `"2015-11-11T02:16:13.456Z"` |
| `updateDate`          | String    | The most recent date/time the feedback was updated by the guest, in ISO-8601 format.                       | `"2015-11-11T03:12:13.456Z"` |
| `isHappy`             | Boolean   | When asked whether they were happy with particular details, the guest answered affirmatively in all cases. | `true`                       |

###### Example Real-Time Feedback Message

```
{
    "id": "b7b215a395d3267c92c2c6e3562fa09c11f6454c",
    "hotelId": "test",
    "category": "Real-Time Feedback",
    "shortMessage": "A guest at your property is giving real-time feedback.",
    "longMessage": "Bed was not made :(",
    "values": {
        "itineraryId": "12345",
        "startDate": "2015-11-11T01:22:10.126Z",
        "endDate": "2015-11-14T01:22:10.126Z",
        "createDate": "2015-11-12T01:22:10.126Z",
        "updateDate": "2015-11-13T01:22:10.126Z",
        "isHappy": false
    },
    "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/realtime_feedback.html?htid=test"
}
```

##### Hotel Review

A guest has provided a review for the requested hotel that management has not yet responded to.

###### `values` Properties

| Property              | Data Type | Description                                               | Example                      |
|-----------------------|-----------|-----------------------------------------------------------|------------------------------|
| `reviewId`            | String    | The Expedia review ID.                                    | `"123abc"`                   |
| `itineraryId`         | String    | The Expedia itineraty ID of the guest's booking.          | `"12345"`                    |
| `rating`              | Integer   | The rating out of five.                                   | `4`                          |
| `comment`             | String    | The review comment.                                       | `"2015-11-11T01:00:00.000Z"` |
| `createDate`          | String    | The date/time the review was created, in ISO-8601 format. | `"2015-11-11T02:16:13.456Z"` |

###### Example Hotel Review Message

```
{
    "id": "fc58dbb7e4ce17c79d0a54fec74eea613e1bd01b",
    "hotelId": "test",
    "category": "Hotel Review",
    "shortMessage": "A guest just reviewed your property and rated you 4 out of 5 stars.",
    "longMessage": "Great view!",
    "values": {
        "reviewId": "123",
        "itineraryId": "456",
        "rating": 4,
        "comment": "Great view!",
        "createDate": "2015-11-12T05:03:52.138Z"
    },
    "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/user_reviews.html?htid=test"
}
```
