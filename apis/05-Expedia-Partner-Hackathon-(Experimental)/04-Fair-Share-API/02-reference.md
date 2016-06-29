
# Reference

## Authentication

The Fair Share API requires HTTP basic auth credentials to be supplied with every request.

Credentials must match a valid hotelier username/password.  If data for a specific hotel or list of hotels is being requested, the credentials must be authorized to access data for those hotels.

## Fair share endpoint

```
GET public/v1/fairShare
```

The fair share endpoint will generate fair share data for a given hotel id.  Fair share is a comparison of how many hotel rooms a given hotel supplies vs how many are supplied by all the hotels listed in it's competitor set.  The ratio of supplied hotels vs total of competitor's supplied hotels is called the fair share.  Along with fair share, the endpoint will return the current number of booked rooms for the given id along with the total of all competitor's booked rooms for checkin dates from today up to 30 days.  

The equation for fair share is my room count /(my room count + my competitors' total room count). 

The equation for actual share is my booked rooms /(my booked rooms + my competitors’ total booked rooms)

## Request

| Name                | Parameter Type | Data Type | Example              | Description
|---------------------|----------------|-----------|----------------------|-----------------|
| `Authorization`     | Header         | String    | `Basic dGVzdDp0ZXN0` | Unique identifier for a property/hotel. |
| `hotelId`           | Query          | Integer   | `123`                | Hotel identifier |
| `daynum`               | Query          | String    | `3`   | (Optional) the number of days from today to the future, default value is 1 |

##### Sample request with all parameters populated
```
https://services.expediapartnercentral.com/insights/public/v1/fairShare?hotelId=759&dayNum=2
```

## Response

|Name | Type | Description|
|-----|------|-------------| 
| errorCode | Integer | Error code, null when no error |
| errorMsg | String | Error message, null when no error |
| status | String | Response status |
| compSetRoomCount | Integer | Total number of rooms available in competitor set |
| fairshare | Double | Fair share for the current market |
| roomCount |   Integer    | Total room count for current hotel |
| bookedRooms | Integer | Number of booked rooms for given date |
| compSetBookedRooms |    Integer | Total of all competitor's booked rooms |
| date |   String    | Check in date for booked rooms |


```JSON
{    
    "errorCode": null,
    "errorMsg": null,
    "status": "Success",
    "data": {
        "compSetRoomCount": 514,
        "fairshare": 0.085,
        "roomCount": 48,
        "daily": [
            {
                "bookedRooms": 13,
                "compSetBookedRooms": 236,
                "date": "2016-05-23"
            },
            {
                "bookedRooms": 13,
                "compSetBookedRooms": 207,
                "date": "2016-05-24"
            }
        ]
    }
}
```

## Errors

| HTTP Status Code  |  Reason |
|-------|---------|
| 400 | status: 'Error', errorCode: 3000, errorMsg: 'clientId is necessary.'    |
| 400 | status: 'Error', errorCode: 3010, errorMsg: 'HotelId is necessary.' |
| 400 | status: 'Error', errorCode: 3011, errorMsg: 'The hotelId was not an integer.'  | 
| 400 | status: 'Error', errorCode: 3012, errorMsg: 'The hotelId should be positive integer.'   |
| 400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist' |   
| 400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors'|