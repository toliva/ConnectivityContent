# Quick Start

Expedia Insights is a real time analytics & market intelligence platform designed to transform Expedia's extensive data assets into valuable market Insights. The Insights API exposes that information to our partners.

This is an experimental API.

----

## Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

----

## Reading missed opportunities from Packages

When someone shopped your hotel as a Package and booked someone else's hotel as a Package within 24 hour POSa (00:00 to 24:00 wall clock), missedOpportunitiesInPackages API returns all hotels by the total booking number within this time frame.

To retrieve missed opportunities from Packages simply pass a hotel id and optional start date / end date to the </insights/public/v1/missedOpportunitiesInPackages> endpoint via a query parameter. When dates are not specified, they will default to today.

```
https://services.expediapartnercentral.com/insights/public/v1/missedOpportunitiesInPackages?hotelId=12933870&startDate=2017-01-01&endDate=2017-04-01
```

The response will contain a list of missed opportunities for packages.

```JSON
{
  "status": "Success",
  "errorCode": null,
  "errorMsg": null,
  "data": {
    "viewedHotelId": 12933870,
    "viewedHotelName": "EQC Hotel 81",
    "totalViewerCounter": 3,
    "missedOpportunities": [
      {
        "hotelId": 123,
        "hotelName": "Some other Hotel",
        "roomNights": 3,
        "bookings": 1
      }
    ],
    "timeStamp": "2017-01-04"
  }
}
```

## Reading Compression Data

Compression forecasts the outlook of regional room supply (from any hotelId) by calculating the percentage of unavailable rooms to available rooms

To retrieve compression data simply pass a hotel id and optional start date / end date to the </insights/public/v1/compressionOutlook> endpoint via a query parameter. When dates are not specified, they will default from today to today + 28 days

```
https://services.expediapartnercentral.com/insights/public/v1/compressionOutlook?hotelId=12933870&startDate=2017-01-01&endDate=2017-04-01
```

The response will contain a list of compression data for each date in the supplied date range.

```JSON
{
  "status": "Success",
  "errorCode": null,
  "errorMsg": null,
  "data": {
    "regionName": "string",
    "compression": [
      {
        "date": "2017-01-01",
        "compressionPercent": 21
      }
    ]
  }
}
```

## Reading Price Distribution Information

Gain competitive insights by seeing the distribution of ADR of booked rooms in a given market. The market is that of the specified hotel.

To retrieve price distribution information simply pass a hotel id, check in date, length of stay and optional range size to the </insights/public/v1/priceDistribution> endpoint via a query parameter. Range size will default to 20 when not specified.

```
https://services.expediapartnercentral.com/insights/public/v1/priceDistribution?hotelId=12933870&checkInDate=2017-04-01&lengthOfStay=3&rangeSize=20
```

The response will contain 2 lists. The first list (priceDistributionArr) contains the number of rooms booked between each price interval. The second list (lowestPriceArr) shows the lowest ADR for each competitor's booked rooms

```JSON
{
  "status": "Success",
  "errorCode": null,
  "errorMsg": null,
  "data": {
    "priceDistributionArr": [
      {
        "rooms": 4,
        "yourHotelflag": false,
        "priceRange": "100-120",
        "percentage": 40
      },
      {
        "rooms": 4,
        "yourHotelflag": true,
        "priceRange": "180-200",
        "percentage": 40
      },
      {
        "rooms": 2,
        "yourHotelflag": false,
        "priceRange": "240-260",
        "percentage": 20
      }
    ],
    "lowestPriceArr": [
      {
        "hotelId": 123,
        "lowestPrice": 79,
        "hotelName": "Some Hotel"
      }
    ]  
  }
}
```
