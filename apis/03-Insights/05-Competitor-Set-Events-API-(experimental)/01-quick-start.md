# Quick Start

The Competitor Set Events API allows hoteliers to know when a new competitor has entered the market.  By providing a start and end date you can find a list of hotels with have added your hotel as a competitor in that time period.

----

## Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

----

## Reading Competitor Set Data

To retreive competitor set data pass a hotel id and number of days along with the required authentication parameters to the ```public/v1/addCompSet``` endpoint via query parameters.  

```
http://apis.integration.karmalab.net/june-hackathon/insights/public/v1/addCompSet?hotelId=1234567&startDate=2014-01-01&endDate=2016-05-10
```


The response will contain the competitor set data in the following format: 

```JSON
{
    "data": {
        "HotelId": 0,
        "HotelName": "",
        "compSet": [
            {
                "eventDate": "",
                "hotelId": 0,
                "hotelName": ""
            }
        ],
        "endDate": "",
        "startDate": ""
    },
    "errorCode": "",
    "errorMsg": "",
    "status": ""
}
```