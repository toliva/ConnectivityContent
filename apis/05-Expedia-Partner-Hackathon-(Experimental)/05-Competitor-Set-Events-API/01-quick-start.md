# Quick Start

The Competitor Set Events API allows hoteliers to know when a new competitor has entered the market.  By providing a start and end date you can find a list of hotels with have added your hotel as a competitor in that time period.

----

## Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

----

## Reading Competitor Set Data

To retreive competitor set data pass a hotel id and number of days along with the required authentication parameters to the ```public/v1/addCompSet``` endpoint via query parameters.

```
https://services.expediapartnercentral.com/insights/public/v1/addCompSet?hotelId=1234567&startDate=2014-01-01&endDate=2016-05-10
```


The response will contain the competitor set data in the following format:

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