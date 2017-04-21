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
| 412 Precondition Failed | `clientId` and/or `hotelId` query parameters are invalid/missing.               |

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

##### Missed Opportunities

Travelers viewed the requested hotel today, but booked elsewhere.

###### `values` Properties

| Property              | Data Type | Description                                                            | Example |
|-----------------------|-----------|------------------------------------------------------------------------|---------|
| `count`               | Integer   | The total number of lost bookings.                                     | `3`     |
| `missedOpportunities` | Array     | A collection of `Missed Opportunities` objects.                        | []      |

`Missed Opportunities` objects have the following properties:

| Property              | Data Type | Description                                                                                             | Example            |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| `hotelId`             | String    | The ID of the hotel the guest booked with.                                                              | `"25280"`          |
| `hotelName`           | String    | The name of the hotel the guest booked with.                                                            | `"The Verb Hotel"` |
| `lostBookings`        | Integer   | The number of travelers who booked with this hotel after viewing the requested hotel today.             | `2`                |
| `details`             | Array     | A collection of `Missed Opportunity Details` objects.                                                   | []                 |

`Missed Opportunity Details` objects have the following properties:

| Property              | Data Type | Description                                                                                             | Example            |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| `viewedPrice`         | Float     | The price of the requested hotel the customer viewed.                                                   | `123.45`           |
| `bookedPrice`         | Float     | The price of the hotel the customer ended up booking.                                                   | `100.0`            |
| `checkInDate`         | String    | The check-in date of the customer's booking (YYYY-MM-DD).                                               | `"2016-10-03"`     |

###### Example Missed Opportunities Message

```
{
    "id": "1.TyZ0ZXN0JmIwMmNjMTM0JjIwMTYtMDEtMjgmMw.jyNGmzZJN9McnS41iLL3946V0VE",
    "hotelId": "test",
    "category": "Missed Opportunities",
    "shortMessage": "So far, you lost 3 bookings today.",
    "longMessage": "3 travelers viewed your property today but booked elsewhere.",
    "values": {
        "count": 3,
        "missedOpportunities": [
            {
                "hotelId": "25280",
                "hotelName": "The Verb Hotel",
                "lostBookings": 2,
                "details": [
                    {
                        "viewedPrice": 123.45,
                        "bookedPrice": 100.0,
                        "checkInDate": "2016-02-07"
                    },
                    {
                        "viewedPrice": 200.0,
                        "bookedPrice": 149.99,
                        "checkInDate": "2016-02-02"
                    }
                ]
            },
            {
                "hotelId": "119162",
                "hotelName": "Le Meridien Cambridge-MIT",
                "lostBookings": 1,
                "details": [
                    {
                        "viewedPrice": 123.45,
                        "bookedPrice": 150.0,
                        "checkInDate": "2016-02-04"
                    }
                ]
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
| `name`                | String    | The name the guest used when booking.                                                                      | `"Joe Bloggs"`               |
| `startDate`           | String    | The guest's checkin date/time, in ISO-8601 format.                                                         | `"2015-11-11T01:00:00.000Z"` |
| `endDate`             | String    | The guest's checkout date/time, in ISO-8601 format.                                                        | `"2015-11-13T05:00:00.000Z"` |
| `createDate`          | String    | The date/time the feedback was created, in ISO-8601 format.                                                | `"2015-11-11T02:16:13.456Z"` |
| `updateDate`          | String    | The most recent date/time the feedback was updated by the guest, in ISO-8601 format.                       | `"2015-11-11T03:12:13.456Z"` |
| `isHappy`             | Boolean   | When asked whether they were happy with particular details, the guest answered affirmatively in all cases. | `true`                       |

###### Example Real-Time Feedback Message

```
{
    "id": "1.RiZ0ZXN0JjQwNmQwZmY4JmExYjJjM2Q0.FrIsoe4PMpoJJZx3md-ah_049CY",
    "hotelId": "test",
    "category": "Real-Time Feedback",
    "shortMessage": "A guest at your property is giving real-time feedback.",
    "longMessage": "Bed was not made :(",
    "values": {
        "itineraryId": "12345",
        "name": "Joe Bloggs",
        "startDate": "2016-01-28T01:19:05.600Z",
        "endDate": "2016-01-31T01:19:05.600Z",
        "createDate": "2016-01-29T01:19:05.600Z",
        "updateDate": "2016-01-30T01:19:05.600Z",
        "isHappy": false
    },
    "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/realtime_feedback.html?htid=test"
}
```

##### Hotel Review

A guest has provided a review for the requested hotel that management has not yet responded to.

###### `values` Properties

| Property              | Data Type | Description                                                               | Example                      |
|-----------------------|-----------|---------------------------------------------------------------------------|------------------------------|
| `reviewId`            | String    | The Expedia review ID.                                                    | `"123abc"`                   |
| `itineraryId`         | String    | The Expedia itineraty ID of the guest's booking.                          | `"12345"`                    |
| `name`                | String    | The nickname the guest used when submitting the review, or `"Anonymous"`. | `"Joe Bloggs"`               |
| `rating`              | Integer   | The rating out of five.                                                   | `4`                          |
| `comment`             | String    | The review comment.                                                       | `"2015-11-11T01:00:00.000Z"` |
| `createDate`          | String    | The date/time the review was created, in ISO-8601 format.                 | `"2015-11-11T02:16:13.456Z"` |

###### Example Hotel Review Message

```
{
    "id": "1.UiZ0ZXN0JmIzNmY4ZTM3JjEyMw.5OsCyCg5xL_3Dco5seJCbEMinRQ",
    "hotelId": "test",
    "category": "Hotel Review",
    "shortMessage": "A guest just reviewed your property and rated you 4 out of 5 stars.",
    "longMessage": "Great view!",
    "values": {
        "reviewId": "123",
        "itineraryId": "456",
        "name": "Anonymous",
        "rating": 4,
        "comment": "Great view!",
        "createDate": "2016-01-28T01:19:05.600Z"
    },
    "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/user_reviews.html?htid=test#GuestReview123"
}
```

##### Quality Score

These messages are an aggregation of several metrics which can affect a hotels search rankings in expedia.

It contains information on the rates compared with competitors, content score (which is based on how much information and photos are given), and some general factors such as refunds, relocations, and rates & availability.

###### `values` Properties

| Property              | Data Type | Description                                                               | Example                      |
|-----------------------|-----------|---------------------------------------------------------------------------|------------------------------|
| `qualityScoreState`   | String    | The overall rating of quality by Expedia                                  | `"Excellent"`                |
| `ratesAndAvailability`| Object    | Rates for periods in which a competitor beats your price, or has vacancy where you do not.                          | `"12345"`                    |
| `contentCompletion`   | Object    | Contains Expedia's content score.   | `{ "contentScore": 96 }`               |
| `guestExperience`     | Object    | Contains metrics on number of refunds and relocations.                            | `{ "refunds": 1, "relocations": 0 }`                          |
| `qualityScoreFactors` | Object    | The states of rates, availability, content, refunds, and relocations                                                       | |

###### `qualityScoreFactors` Properties
| Property              | Data Type | Values                                                               |
|-----------------------|-----------|---------------------------------------------------------------------------|
| `ratesState`   | String    | `"Red"|"Yellow"|"Green", or "Gray" if invalid`             |
| `availabilityState`| String    | `"Red"|"Yellow"|"Green", or "Gray" if invalid`                          |
| `contentState`   | String    | `"Red"|"Yellow"|"Green", or "Gray" if invalid`   |
| `refundState`     | String    | `"Red"|"Yellow"|"Green", or "Gray" if invalid`                            |
| `relocationState`     | String    | `"Red"|"Yellow"|"Green"|"Recovering", or "Gray" if invalid`                            |



###### Example Quality Score Message

```
{
      "id": "1.USZ0ZXN0aG90ZWwmYmQwNGI2MDEmVmVyeStwb29y.tv-i-hb3QrpZkPw53WZjog-p0sU",
      "hotelId": "test",
      "category": "Quality Score",
      "shortMessage": "Your quality score is very poor",
      "longMessage": "Your search listing has fallen significantly and its visibility has been reduced on all our websites.",
      "values": {
        "qualityScoreState": "Very poor",
        "ratesAndAvailability": [
          {
            "checkInDate": "2017-04-23",
            "observationDate": "2017-04-21",
            "occupancy": 2,
            "lengthOfStay": 3,
            "currency": "USD",
            "competitor": "Wotif.com",
            "competitorPrice": 99.95,
            "competitorRoomType": "One-Bedroom Suite",
            "price": 100.95,
            "roomType": "One Bedroom Suite",
            "issueType": "Best Available Rate Issue"
          },
          {
            "checkInDate": "2017-04-23",
            "observationDate": "2017-04-21",
            "occupancy": 2,
            "lengthOfStay": 1,
            "currency": "AUD",
            "competitor": "Lastminute.com.au",
            "competitorPrice": 123.45,
            "competitorRoomType": "Mini Suite",
            "issueType": "Availability Issue"
          }
        ],
        "contentCompletion": {
          "contentScore": 96
        },
        "guestExperience": {
          "refunds": 1,
          "relocations": 0
        },
        "qualityScoreFactors": {
          "ratesState": "Red",
          "availabilityState": "Yellow",
          "contentState": "Green",
          "refundState": "Yellow",
          "relocationState": "Recovering"
        }
      },
      "actionURL": "https://www.expediapartnercentral.com/Portal/Home.html?htid=testhotel&LinkSource=marketplace-feed.Quality+Score.test&utm_source=marketplace-feed&utm_medium=partner-link&utm_campaign=marketplace-feed.Quality+Score.test"
    }
```


## Events Endpoint

```
POST https://marketplace-feed.prod-p.expedia.com/v1/events
```

The `/v1/events` endpoint provides a mechanism for partners to report analytics events back to Expedia.

### Request

#### Request Parameters

| Name                | Parameter Type | Data Type | Example              |
|---------------------|----------------|-----------|----------------------|
| `clientId`          | Query          | String    | `YourOrganization`   |

#### Request Body

The `/v1/events` endpoint requires a JSON request body with `Content-Type: application/json`.

The top-level request object has the following properties:

| Name       | Data Type | Description                                   | Example                                                                                                      |
|------------|-----------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `events`   | Array     | A list of between 1 and 1000 `Event` objects. | `[{ "messageId": "1.TSZ0ZXN0JjNjNzI2NWU1JjIwMTYtMDEtMjk.P1lEB5NXX9auwJ0n3gmGP_Vk4Bw", "action": "viewed" }]` |

`Event` objects have the following properties:

| Name        | Data Type | Description                                                   | Example                                                               |
|-------------|-----------|---------------------------------------------------------------|-----------------------------------------------------------------------|
| `messageId` | String    | A valid message ID.                                           | `"1.TSZ0ZXN0JjNjNzI2NWU1JjIwMTYtMDEtMjk.P1lEB5NXX9auwJ0n3gmGP_Vk4Bw"` |
| `action`    | String    | The user action being reported.                               | `"viewed"`                                                            |
| `timestamp` | String    | An optional event timestamp, in ISO-8601 format.              | `"2015-11-11T01:00:00.000Z"`                                          |
| `userId`    | String    | An optional identifier for the user who performed the action. | `"a1b2c3d4"`                                                          |

###### Valid User Actions

The `action` property can have one of the following values:

- `viewed` - A user viewed the message.
- `dismissed` - A user dismissed the message.
- `actioned` - A user performed an action associated with the message, on on your platform.
- `clickthrough` - A user followed a link from your platform to the `actionURL` associated with the message.

###### Example Request Body

```
{
  "events": [
    { "messageId": "1.TSZ0ZXN0JjNjNzI2NWU1JjIwMTYtMDEtMjk.P1lEB5NXX9auwJ0n3gmGP_Vk4Bw", "action": "viewed" },
    { "messageId": "1.TSZ0ZXN0Jjg5ZWJjYWNjJjIwMTYtMDItMDI.2AemHSXvRPRAy31UdJ_VpS2Fr94", "action": "clickthrough", "timestamp": "2015-11-11T01:00:00.000Z" },
    { "messageId": "1.TSZ0ZXN0Jjg5ZWJjYWNjJjIwMTYtMDItMDI.2AemHSXvRPRAy31UdJ_VpS2Fr94", "action": "actioned", "userId": "a1b2c3d4" },
    { "messageId": "1.TyZ0ZXN0JmIwMmNjMTM0JjIwMTYtMDEtMjgmMw.jyNGmzZJN9McnS41iLL3946V0VE", "action": "dismissed" }
  ]
}
```

### Response

#### HTTP Status Codes

| Code                    | Reason                                                                          |
|-------------------------|---------------------------------------------------------------------------------|
| 202 Accepted            | Request was successfully validated and has been queued for processing.          |
| 412 Precondition Failed | `clientId` query parameter and/or request body is invalid.                      |

If a HTTP 4XX response status (such as `412 Precondition Failed`) is returned, the entire request is ignored and none of the events are queued for processing.

Specific reasons for a `412 Precondition Failed` response status include:
- The `clientId` query parameter is missing or invalid.
- The `events` array is missing or does not have between 1 and 1000 events.
- A `messageId` for one of the events is invalid.
- An `action` for one of the events is missing or invalid.
