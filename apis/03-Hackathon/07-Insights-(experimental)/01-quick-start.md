# Quick Start
The Insights APIs will give hoteliers some valuable data about how their properties are performing in the Expedia marketplace

## Authentication

The Accelerator API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Accelerator API. Authorization will also be performed: the hotel must be assigned to the API account being used.

## Price Distribution
This API gives insight into the average rate of the rooms that were booked for a given hotel, along with the same info for competitors in market watch.

**Mocked Data Warning**: This API will only returned mocked data, for the purpose of the Madrid hackathon.

To query this API, you need a hotel ID, a checkin date and a length of stay. For example:
```
https://services.expediapartnercentral.com/insights/public/v1/priceDistribution?hotelId=17104728&checkInDate=2017-05-01&lengthOfStay=2
```

This will provide information like this:
```json
{
  "status": "Success",
  "errorCode": null,
  "errorMsg": null,
  "data": {
    "priceDistributionArr": [
      {
        "rooms": 10,
        "yourHotelflag": false,
        "priceRange": "40-60",
        "percentage": 10
      },
      {
        "rooms": 10,
        "yourHotelflag": false,
        "priceRange": "60-80",
        "percentage": 10
      },
      {
        "rooms": 21,
        "yourHotelflag": true,
        "priceRange": "80-100",
        "percentage": 21
      },
      {
        "rooms": 28,
        "yourHotelflag": false,
        "priceRange": "100-120",
        "percentage": 28
      },
      {
        "rooms": 14,
        "yourHotelflag": false,
        "priceRange": "120-140",
        "percentage": 14
      },
      {
        "rooms": 9,
        "yourHotelflag": false,
        "priceRange": "140-160",
        "percentage": 9
      },
      {
        "rooms": 6,
        "yourHotelflag": false,
        "priceRange": "160-180",
        "percentage": 6
      },
      {
        "rooms": 2,
        "yourHotelflag": false,
        "priceRange": "180-200",
        "percentage": 2
      }
    ],
    "lowestPriceArr": [
      {
        "hotelId": 223,
        "lowestPrice": 69.89,
        "hotelName": "TestHotel_223"
      },
      {
        "hotelId": 17000,
        "lowestPrice": 89.49,
        "hotelName": "TestHotel_17000"
      },
      {
        "hotelId": 2300,
        "lowestPrice": 169.69,
        "hotelName": "TestHotel_2300"
      },
      {
        "hotelId": 499,
        "lowestPrice": 109.19,
        "hotelName": "TestHotel_499"
      }
    ]
  }
}
```

## Missed Opportunities in Packages
When someone shopped your hotel as a Package and booked someone else's hotel as a Package within 24 hour POSa (00:00 to 24:00 wall clock), missedOpportunitiesInPackages API returns all hotels by the total booking number within this timeframe.

**Mocked Data Warning**: This API will only returned mocked data, for the purpose of the Madrid hackathon.

To query the API, you need a hotel ID, a booking date start and end. For example:
```
https://services.expediapartnercentral.com/insights/public/v1/missedOpportunitiesInPackages?hotelId=17104728&startDate=2017-05-01&endDate=2017-05-02
```

This will provide information like this:
```json
{
  "status": "Success",
  "errorCode": null,
  "errorMsg": null,
  "data": {
    "viewedHotelId": 17104728,
    "viewedHotelName": "TestHotel_17104728",
    "totalViewerCounter": 2,
    "missedOpportunities": [
      {
        "hotelId": 777,
        "hotelName": "TestHotel_777",
        "roomNights": 2,
        "bookings": 1
      },
      {
        "hotelId": 757,
        "hotelName": "TestHotel_757",
        "roomNights": 6,
        "bookings": 2
      }
    ],
    "timeStamp": "2017-05-01"
  }
}
```

## Compression Outlook
Compression forecasts the outlook of regional room supply (from any hotelId) by calculating the percentage of unavailable rooms to available rooms starting from today and going into the future 28 days.

**Warning, Real Data**: Unlike the other insights messages, this one is not using mocked data. It will have some information for test hotels, but it's not guaranteed to have compression info.

To query this API, you need a booking id, a start and end date to analyze. For example:

```
https://services.expediapartnercentral.com/insights/public/v1/compressionOutlook?hotelId=12933870&startDate=2017-05-01&endDate=2017-05-28
```

This will provide information like this:
```json
{
  "status": "Success",
  "errorCode": null,
  "errorMsg": null,
  "data": {
    "regionName": "Region Test",
    "compression": [
      {
        "date": "2017-05-01T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-02T00:00:00.000Z",
        "compressionPercent": 86
      },
      {
        "date": "2017-05-03T00:00:00.000Z",
        "compressionPercent": 35
      },
      {
        "date": "2017-05-04T00:00:00.000Z",
        "compressionPercent": 37
      },
      {
        "date": "2017-05-05T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-06T00:00:00.000Z",
        "compressionPercent": 36
      },
      {
        "date": "2017-05-07T00:00:00.000Z",
        "compressionPercent": 35
      },
      {
        "date": "2017-05-08T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-09T00:00:00.000Z",
        "compressionPercent": 86
      },
      {
        "date": "2017-05-10T00:00:00.000Z",
        "compressionPercent": 86
      },
      {
        "date": "2017-05-11T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-12T00:00:00.000Z",
        "compressionPercent": 36
      },
      {
        "date": "2017-05-13T00:00:00.000Z",
        "compressionPercent": 40
      },
      {
        "date": "2017-05-14T00:00:00.000Z",
        "compressionPercent": 37
      },
      {
        "date": "2017-05-15T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-16T00:00:00.000Z",
        "compressionPercent": 86
      },
      {
        "date": "2017-05-17T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-18T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-19T00:00:00.000Z",
        "compressionPercent": 38
      },
      {
        "date": "2017-05-20T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-21T00:00:00.000Z",
        "compressionPercent": 39
      },
      {
        "date": "2017-05-22T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-23T00:00:00.000Z",
        "compressionPercent": 85
      },
      {
        "date": "2017-05-24T00:00:00.000Z",
        "compressionPercent": 86
      },
      {
        "date": "2017-05-25T00:00:00.000Z",
        "compressionPercent": 34
      },
      {
        "date": "2017-05-26T00:00:00.000Z",
        "compressionPercent": 38
      },
      {
        "date": "2017-05-27T00:00:00.000Z",
        "compressionPercent": 86
      },
      {
        "date": "2017-05-28T00:00:00.000Z",
        "compressionPercent": 37
      },
      {
        "date": "2017-05-29T00:00:00.000Z",
        "compressionPercent": null
      }
    ]
  }
}
```
