# Fair Share Quick Start

The Fair Share API returns a hotel’s expected fair share and actual market share per stay dates.  Fair share is a ratio of a hotel's provided rooms vs the total number of rooms provided by all competitors.

The equation for fair share is my room count /(my room count + my competitors' total room count).
The equation for actual share is my booked rooms /(my booked rooms + my competitors’ total booked rooms)

----

## Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

----

## Reading Fair Share Data

To retreive fair share data pass a hotel id and number of days along with the required authentication parameters to the ```public/v1/fairShare``` endpoint via query parameters.

```
https://services.expediapartnercentral.com/insights/public/v1/fairShare?hotelId=759&dayNum=2
```

The response will contain the fair share data in the following format:

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