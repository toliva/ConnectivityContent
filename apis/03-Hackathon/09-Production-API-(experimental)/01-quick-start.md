# Quick Start
Production APIs allows Expedia Inc. to provide supplier analytic and performance reporting, both to MM and Hotel partners.

## Authentication
The API uses a Basic Authorization scheme. The same credentials used to manage properties via our public APIs today are compatible with the Production API. Authorization will also be performed: the hotel must be assigned to the API account being used.

## Warning: mocked data!
This API was designed to enable Madrid Hackathon participants to experiment with the idea of learning more about Production data.
It was all built with mocked data and will not return real data. The logic to return responses will be detailed in the sample messages below.

Moreover, this API will only be able to return data to the hotels reserved via the test hotel reservation tool on this portal. Any other hotel will not return any data.

## Booking trends - Brands
This endpoint provides insights into the travelers’ booking patterns.

To retrieve booking trends information simply pass a hotel id.
For example:

```
https://services.expediapartnercentral.com/production-api/BookingTrends?htid=17104728&%24format=json&$filter=category eq 'brand'
```

The response will contain the list of Brands that contribute to production in terms of room nights.

```json
{
  "odata.metadata": "https://lpsatest.jeddo.expedia.com/odata/$metadata#BookingTrends",
  "odata.count": "7",
  "dynamo.lastrefreshdate": null,
  "dynamo.aggregates": "{}",
  "value": [
    {
      "category": "brand",
      "caption": "Expedia",
      "l28d_compset_cy": 0.4375,
      "l28d_compset_ly": 0.520930231,
      "l90d_compset_cy": 0.415305257,
      "l90d_compset_ly": 0.5,
      "l28d_hotel_cy": 0.5,
      "l28d_hotel_ly": 0.4375,
      "l90d_hotel_cy": 0.6017699,
      "l90d_hotel_ly": 0.462184876
    },
    {
      "category": "brand",
      "caption": "Expedia Affiliate Network (EAN)",
      "l28d_compset_cy": 0.185185179,
      "l28d_compset_ly": 0.130232558,
      "l90d_compset_cy": 0.174548581,
      "l90d_compset_ly": 0.0482573733,
      "l28d_hotel_cy": 0.239583328,
      "l28d_hotel_ly": 0.359375,
      "l90d_hotel_cy": 0.252212375,
      "l90d_hotel_ly": 0.252100855
    },
    {
      "category": "brand",
      "caption": "Hotels.com",
      "l28d_compset_cy": 0.307870358,
      "l28d_compset_ly": 0.232558146,
      "l90d_compset_cy": 0.337919176,
      "l90d_compset_ly": 0.379356563,
      "l28d_hotel_cy": 0.21875,
      "l28d_hotel_ly": 0.109375,
      "l90d_hotel_cy": 0.128318578,
      "l90d_hotel_ly": 0.126050428
    },
    {
      "category": "brand",
      "caption": "TRAVELOCITY",
      "l28d_compset_cy": 0.0069444445,
      "l28d_compset_ly": 0.0232558139,
      "l90d_compset_cy": 0.0146173686,
      "l90d_compset_ly": 0.0107238609,
      "l28d_hotel_cy": 0.03125,
      "l28d_hotel_ly": null,
      "l90d_hotel_cy": 0.0132743362,
      "l90d_hotel_ly": null
    },
    {
      "category": "brand",
      "caption": "Orbitz",
      "l28d_compset_cy": 0.027777778,
      "l28d_compset_ly": 0.0372093022,
      "l90d_compset_cy": 0.0146173686,
      "l90d_compset_ly": 0.0134048257,
      "l28d_hotel_cy": 0.010416667,
      "l28d_hotel_ly": null,
      "l90d_hotel_cy": 0.00442477874,
      "l90d_hotel_ly": 0.0168067235
    },
    {
      "category": "brand",
      "caption": "Unknown",
      "l28d_compset_cy": 0,
      "l28d_compset_ly": 0.0279069766,
      "l90d_compset_cy": 0,
      "l90d_compset_ly": 0.008042895,
      "l28d_hotel_cy": null,
      "l28d_hotel_ly": 0.09375,
      "l90d_hotel_cy": null,
      "l90d_hotel_ly": 0.05042017
    },
    {
      "category": "brand",
      "caption": "Venere",
      "l28d_compset_cy": 0.027777778,
      "l28d_compset_ly": 0.0139534883,
      "l90d_compset_cy": 0.0300945826,
      "l90d_compset_ly": 0.0348525457,
      "l28d_hotel_cy": null,
      "l28d_hotel_ly": null,
      "l90d_hotel_cy": null,
      "l90d_hotel_ly": 0.09243698
    }
  ]
}
```

## Booking trends - Countries
This endpoint provides insights into the travelers’ booking patterns.

To retrieve booking trends information simply pass a hotel id.
For example:

```
https://services.expediapartnercentral.com/production-api/BookingTrends?htid=17104728&%24format=json&$filter=category eq 'travelerOrigination'
```

The response will contain the list of Countries that contribute to production in terms of room nights.

```json
{
  "odata.metadata": "https://lpsatest.jeddo.expedia.com/odata/$metadata#BookingTrends",
  "odata.count": "5",
  "dynamo.lastrefreshdate": null,
  "dynamo.aggregates": "{}",
  "value": [
    {
      "category": "travelerOrigination",
      "caption": "GBR",
      "l28d_compset_cy": 0.226463109,
      "l28d_compset_ly": null,
      "l90d_compset_cy": 0.138554215,
      "l90d_compset_ly": 0.107871719,
      "l28d_hotel_cy": 0.576086938,
      "l28d_hotel_ly": 0.04255319,
      "l90d_hotel_cy": 0.431372553,
      "l90d_hotel_ly": 0.298850566
    },
    {
      "category": "travelerOrigination",
      "caption": "USA",
      "l28d_compset_cy": 0.412213743,
      "l28d_compset_ly": 0.5631579,
      "l90d_compset_cy": 0.5512048,
      "l90d_compset_ly": 0.5451895,
      "l28d_hotel_cy": 0.195652172,
      "l28d_hotel_ly": 0.382978737,
      "l90d_hotel_cy": 0.328431368,
      "l90d_hotel_ly": 0.229885057
    },
    {
      "category": "travelerOrigination",
      "caption": "DEU",
      "l28d_compset_cy": 0.04071247,
      "l28d_compset_ly": 0.0157894734,
      "l90d_compset_cy": 0.02008032,
      "l90d_compset_ly": 0.023323616,
      "l28d_hotel_cy": 0.119565219,
      "l28d_hotel_ly": null,
      "l90d_hotel_cy": 0.0735294148,
      "l90d_hotel_ly": null
    },
    {
      "category": "travelerOrigination",
      "caption": "AUS",
      "l28d_compset_cy": 0.106870227,
      "l28d_compset_ly": 0.0578947365,
      "l90d_compset_cy": 0.08935743,
      "l90d_compset_ly": 0.0393586,
      "l28d_hotel_cy": null,
      "l28d_hotel_ly": null,
      "l90d_hotel_cy": 0.04411765,
      "l90d_hotel_ly": 0.04597701
    },
    {
      "category": "travelerOrigination",
      "caption": "CAN",
      "l28d_compset_cy": 0.03816794,
      "l28d_compset_ly": 0.06842105,
      "l90d_compset_cy": 0.0391566269,
      "l90d_compset_ly": 0.07725947,
      "l28d_hotel_cy": 0.0326086953,
      "l28d_hotel_ly": 0.0212765951,
      "l90d_hotel_cy": 0.0343137272,
      "l90d_hotel_ly": 0.03448276
    }
  ]
}
```

## Flash Report
This endpoint provides hotel and competitors performance for past and future stay dates.

To retrieve flash report information simply pass a hotel id.
For example:

```
https://services.expediapartnercentral.com/production-api/FlashReport?htid=17104728&%24format=json
```

The response will contain hotel and competitors performances referred to year to date, next week and next 4 weeks.

```json
{
  "odata.metadata": "https://lpsatest.jeddo.expedia.com/odata/$metadata#FlashReport",
  "odata.count": "1",
  "dynamo.lastrefreshdate": null,
  "dynamo.aggregates": "{}",
  "value": [
    {
      "FlashReportEntityAutoID": "1",
      "ytd_hotel_nrn_delta": null,
      "ytd_hotel_adr_delta": null,
      "ytd_compset_nrn_delta": 0.021428585052490234,
      "ytd_compset_adr_delta": 0.14151859283447266,
      "nw_hotel_nrn_delta": 2.25,
      "nw_hotel_adr_delta": -0.081259310245513916,
      "nw_compset_nrn_delta": 0.692307710647583,
      "nw_compset_adr_delta": 0.079966545104980469,
      "n4w_hotel_nrn_delta": 1.6333334445953369,
      "n4w_hotel_adr_delta": -0.17580682039260864,
      "n4w_compset_nrn_delta": 1.0,
      "n4w_compset_adr_delta": 0.11989307403564453
    }
  ]
}
```

## Future Stays Production 7 Days
This endpoint provides hotel room nights for the 4 stay weeks following the report date.

To retrieve future stays production 7 days information simply pass a hotel id.
For example:

```
https://services.expediapartnercentral.com/production-api/FutureStayProduction7Days?$format=json&htid=17104728
```

The response will contain hotel room nights for the 4 stay weeks following the report date referred to current and last year.

```json
{
  "odata.metadata": "https://lpsatest.jeddo.expedia.com/odata/$metadata#FutureStayProduction7Days",
  "odata.count": "4",
  "dynamo.lastrefreshdate": null,
  "dynamo.aggregates": "{}",
  "value": [
    {
      "cy_7d_pickup_nrn": 6,
      "ly_7d_pickup_nrn": 0,
      "week_start": "4/9/2017 12:00:00 AM"
    },
    {
      "cy_7d_pickup_nrn": 5,
      "ly_7d_pickup_nrn": 0,
      "week_start": "4/16/2017 12:00:00 AM"
    },
    {
      "cy_7d_pickup_nrn": 6,
      "ly_7d_pickup_nrn": 0,
      "week_start": "4/23/2017 12:00:00 AM"
    },
    {
      "cy_7d_pickup_nrn": 0,
      "ly_7d_pickup_nrn": 5,
      "week_start": "4/30/2017 12:00:00 AM"
    }
  ]
}
```

## Future Stays Production 28 Days
This endpoint provides hotel room nights for the future 28 stay dates

To retrieve future stays production 28 days information simply pass a hotel id.
For example:

```
https://services.expediapartnercentral.com/production-api/FutureStayProduction28Days?$format=json&htid=17104728
```

The response will contain hotel room nights for the 28 days following the report date referred to current and last year.

```json
{
  "odata.metadata": "https://lpsatest.jeddo.expedia.com/odata/$metadata#FutureStayProduction28Days",
  "odata.count": "27",
  "dynamo.lastrefreshdate": null,
  "dynamo.aggregates": "{}",
  "value": [
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/10/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/11/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 2,
      "ly_future_nrn": 0,
      "date": "4/12/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 4,
      "ly_future_nrn": 0,
      "date": "4/13/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 4,
      "ly_future_nrn": 0,
      "date": "4/14/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/15/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/16/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/17/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/18/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 0,
      "date": "4/19/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 0,
      "ly_future_nrn": 0,
      "date": "4/20/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 0,
      "ly_future_nrn": 0,
      "date": "4/21/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 1,
      "date": "4/22/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 3,
      "ly_future_nrn": 1,
      "date": "4/23/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 3,
      "ly_future_nrn": 1,
      "date": "4/24/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 1,
      "date": "4/25/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 2,
      "date": "4/26/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 2,
      "date": "4/27/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 2,
      "ly_future_nrn": 1,
      "date": "4/28/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 1,
      "ly_future_nrn": 1,
      "date": "4/29/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 2,
      "ly_future_nrn": 3,
      "date": "4/30/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 2,
      "ly_future_nrn": 3,
      "date": "5/1/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 2,
      "ly_future_nrn": 1,
      "date": "5/2/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 3,
      "ly_future_nrn": 0,
      "date": "5/3/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 5,
      "ly_future_nrn": 0,
      "date": "5/4/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 3,
      "ly_future_nrn": 0,
      "date": "5/5/2017 12:00:00 AM"
    },
    {
      "cy_future_nrn": 3,
      "ly_future_nrn": 1,
      "date": "5/6/2017 12:00:00 AM"
    }
  ]
}
```

## Monthly Stays
This endpoint provides hotel room nights for each stay month.

To retrieve monthly stays information simply pass a hotel id.
For example:

```
https://services.expediapartnercentral.com/production-api/MonthlyStays?htid=17104728&%24format=json
```

The response will contain hotel room nights for each stay month with information related to packages and ADR.

```json
{
  "odata.metadata": "https://lpsatest.jeddo.expedia.com/odata/$metadata#MonthlyStays",
  "odata.count": "15",
  "dynamo.lastrefreshdate": null,
  "dynamo.aggregates": "{}",
  "value": [
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": null,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201611",
      "rowName": null
    },
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": null,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201612",
      "rowName": null
    },
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": 0.0,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201701",
      "rowName": null
    },
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": null,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201702",
      "rowName": null
    },
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": null,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201703",
      "rowName": null
    },
    {
      "hotel_adr": 302.21219975897606,
      "yoy_adr": -0.38111257553100586,
      "hotel_only": 17.0,
      "package": 16.0,
      "total": 33.0,
      "yoy_hotel_only": 0.70000004768371582,
      "yoy_package": null,
      "yoy_total": 2.2999999523162842,
      "year_month": "201704",
      "rowName": null
    },
    {
      "hotel_adr": 393.82484463778411,
      "yoy_adr": -0.078103303909301758,
      "hotel_only": 47.0,
      "package": 33.0,
      "total": 82.0,
      "yoy_hotel_only": 2.1333334445953369,
      "yoy_package": 0.5,
      "yoy_total": 1.2162163257598877,
      "year_month": "201705",
      "rowName": null
    },
    {
      "hotel_adr": 435.29588545875987,
      "yoy_adr": 0.016337156295776367,
      "hotel_only": 49.0,
      "package": 22.0,
      "total": 72.0,
      "yoy_hotel_only": -0.16949152946472168,
      "yoy_package": 1.4444444179534912,
      "yoy_total": 0.058823585510253906,
      "year_month": "201706",
      "rowName": null
    },
    {
      "hotel_adr": 457.20606921968005,
      "yoy_adr": -0.093674242496490479,
      "hotel_only": 17.0,
      "package": 4.0,
      "total": 21.0,
      "yoy_hotel_only": -0.055555582046508789,
      "yoy_package": null,
      "yoy_total": 0.16666662693023682,
      "year_month": "201707",
      "rowName": null
    },
    {
      "hotel_adr": 598.9638671875,
      "yoy_adr": 0.19680118560791016,
      "hotel_only": 44.0,
      "package": 4.0,
      "total": 48.0,
      "yoy_hotel_only": 3.8888888359069824,
      "yoy_package": null,
      "yoy_total": 4.3333334922790527,
      "year_month": "201708",
      "rowName": null
    },
    {
      "hotel_adr": 521.70887703731137,
      "yoy_adr": -0.10120761394500732,
      "hotel_only": 19.0,
      "package": 7.0,
      "total": 26.0,
      "yoy_hotel_only": 3.75,
      "yoy_package": null,
      "yoy_total": 5.5,
      "year_month": "201709",
      "rowName": null
    },
    {
      "hotel_adr": 338.41954040527344,
      "yoy_adr": -0.62933236360549927,
      "hotel_only": 4.0,
      "package": 0.0,
      "total": 4.0,
      "yoy_hotel_only": 1.0,
      "yoy_package": null,
      "yoy_total": 1.0,
      "year_month": "201710",
      "rowName": null
    },
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": null,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201711",
      "rowName": null
    },
    {
      "hotel_adr": null,
      "yoy_adr": null,
      "hotel_only": null,
      "package": null,
      "total": null,
      "yoy_hotel_only": null,
      "yoy_package": null,
      "yoy_total": null,
      "year_month": "201712",
      "rowName": null
    },
    {
      "hotel_adr": 443.95576693906958,
      "yoy_adr": -0.020028293132781982,
      "hotel_only": 197.0,
      "package": 86.0,
      "total": 286.0,
      "yoy_hotel_only": 0.68376064300537109,
      "yoy_package": 1.7741935253143311,
      "yoy_total": 0.93243241310119629,
      "year_month": "Total",
      "rowName": null
    }
  ]
}
```
