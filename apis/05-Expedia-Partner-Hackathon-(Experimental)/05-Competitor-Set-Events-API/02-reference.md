# Reference

## Authentication

The Competitor Set Events API requires HTTP basic auth credentials to be supplied with every request.

Credentials must match a valid hotelier username/password.  If data for a specific hotel or list of hotels is being requested, the credentials must be authorized to access data for those hotels.

## Competitor Set Events Endpoint

```
GET public/v1/addCompSet
```

The Competitor Set Events endpoint provides a list of competitors to a given hotel along with when that competitor registered as such.  The endpoint requires a hotel id and start and end dates to find the event when the competitor registered.

## Request Parameters

| Name                | Parameter Type | Data Type | Example              | Description
|---------------------|----------------|-----------|----------------------|-----------------|
| `Authorization`     | Header         | String    | `Basic dGVzdDp0ZXN0` | Unique identifier for a property/hotel. |
| `hotelId`           | Query          | Integer   | `123`                | Hotel identifier |
| `startDate`               | Query          | String    | `2015-01-01`   | Start date to search for event when new competitors were added |
| `endDate`               | Query          | String    | `2016-01-01`   | End date to search for event when new competitors were added |

##### Sample Request with all Parameters
```
http://apis.integration.karmalab.net/june-hackathon/insights/public/v1/addCompSet?hotelId=1234567&startDate=2014-01-01&endDate=2016-05-10
```

## Response

|Name | Type | Description|
|-----|------|-------------|
| errorCode | Integer | Error code, null when no error |
| errorMsg | String | Error message, null when no error |
| status | String | Response status |
| HotelId | Integer | Hotel Identifier |
| HotelName | String | Name of Hotel |
| endDate | String | End date of competitor event search |
| startDate | String | Start date of competitor event search |
| eventDate | String | Date when competitor added hotel as competitor |
| hotelId | Integer | Competitor's hotel identifier |
| hotelName | String | Competitor's hotel name |

##### Sample Response
```JSON
{
    "errorCode": null,
    "errorMsg": null,
    "status": "Success",
    "data": {
        "HotelId": 3513358,
        "HotelName": "Best Western Plus Kamloops Hotel",
        "endDate": "2016-06-01T23:59:59.999Z",
        "limit": 50,
        "startDate": "2016-05-01T00:00:00.000Z",
        "compSet": [
            {
                "eventDate": "2016-05-18T08:46:45.956Z",
                "hotelId": 759,
                "hotelName": "Accent Inns Kamloops"
            }
        ]
    }
}
```


## Errors


|HTTP Status Code |    Reason |
|------------------|----------|
|400 | status: 'Error', errorCode: 3010, errorMsg: 'HotelId is necessary.' |
|400 | status: 'Error', errorCode: 3011, errorMsg: 'The hotelId was not an integer.'   |
|400 | status: 'Error', errorCode: 3012, errorMsg: 'The hotelId should be positive integer.'   |
|400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist'   |
|400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors'|