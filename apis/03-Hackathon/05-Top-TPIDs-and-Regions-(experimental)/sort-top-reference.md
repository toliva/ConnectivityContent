# Reference

## Authentication

The top points of sale and regions API requires HTTP basic auth credentials to be supplied with every request.

Credentials must match a valid API username/password.  the credentials must be authorized to access data for the hotel being requested.

## Top Points of Sale and Regions Endpoint

```
GET /lodging-sort/v1/hops/HopsTopTpidsAndRegions
```

The top points of sale and regions endpoint will return a sorted list of top regions for each of the top points of sale by bookings for a specified hotel.

This API is based on data that gets computed every day at 11am UTC, and uses data from the previous 24h. A hotel will only surface via this API if it received at least 5 valid searches (based on expedia prefered sort rank) on at least one of 3 Expedia core Points of Sale (Expedia.com US, Travelocity.com US and Orbitz.com US) in the 24h period before 11am UTC. Otherwise it won't surface until the next day, if it meets the criteria mentioned above.

## Request Parameters

| Name                | Parameter Type | Data Type | Example              | Description
|---------------------|----------------|-----------|----------------------|-----------------|
| `hotelId`           | Query          | Integer   | `123`                | Hotel identifier |

##### Sample Request with all parameters specified
```
https://services.expediapartnercentral.com/lodging-sort/v1/hops/HopsTopTpidsAndRegions?hotelId=1
```

## Response Format
|Name | Type | Description|
|-----|------|-------------|
|hotelId | Integer | Unique identifier for a property/hotel. |
|tpid |    Integer | Point of Sale ID. Please refer to the mapping table below to resolve this to an expedia point of sale name. |
| regionId |   Long    | GAIA region ID. Please use the Gaia API referenced on this developer portal to resolve this gaia ID to a region name with coordinates. |

##### Sample Response

```
{
    "hopsTpidsList": [
        {
            "sortedRegionList": [
                2114,
                800053,
                6144914
            ],
            "tpid": 3101
        },
        {
            "sortedRegionList": [
                2114
            ],
            "tpid": 3109
        },
        {
            "sortedRegionList": [
                2114
            ],
            "tpid": 3107
        }
    ],
    "hotelId": 1
}

```

## TPID to Point of Sale Mapping

The point of sale is encoded into an ID called a tpid.  All possible values for point of sale are listed below:

| Point of Sale | TPID |
|---|---|
| 1 | Expedia US |
| 3 | Expedia UK |
| 4 | Expedia Canada |
| 6 | Expedia.de Reisen |
| 7 | voyages-sncf.com |
| 8 | Expedia.it |
| 9 | Expedia ES |
| 10 | Expedia.se |
| 11 | Expedia.nl |
| 12 | Expedia Mexico |
| 14 | Expedia.com.sg |
| 15 | Expedia Malaysia |
| 16 | Expedia Korea |
| 17 | Expedia Thailand |
| 18 | Expedia Hong Kong |
| 20 | Expedia.fr |
| 25 | Expedia Australia |
| 27 | Expedia India |
| 28 | Expedia Japan |
| 29 | Expedia.co.nz |
| 34 | Hotels.com en Espanol |
| 39 | Egencia Europe |
| 40 | Egencia UK |
| 41 | Egencia Germany |
| 61 | Expedia Indonesia |
| 62 | Expedia Taiwan |
| 63 | Expedia Ireland |
| 64 | Expedia Belgium |
| 65 | Expedia Sweden |
| 66 | Expedia Norway |
| 67 | Expedia Denmark |
| 68 | Expedia Philippines |
| 69 | Expedia Brazil |
| 70 | Expedia Argentina |
| 71 | Expedia Vietnam |
| 72 | Switzerland |
| 73 | Expedia Finland |
| 74 | Expedia Russia |
| 75 | Expedia China |
| 3000 | Hotels LATAM USD |
| 3001 | Hotels US USD |
| 3002 | Hotels Canada CAD |
| 3003 | Hotels Brazil BRL |
| 3004 | Hotels Mexico MXN |
| 3018 | Hotels Brazil Local |
| 3019 | Hotels Argentina ARS |
| 3100 | Hotels EMEA USD |
| 3101 | Hotels UK GBP |
| 3102 | Hotels Germany EUR |
| 3103 | Hotels Italy EUR |
| 3104 | Hotels Spain EUR |
| 3105 | Hotels Netherlands EUR |
| 3107 | Hotels Sweden SEK |
| 3109 | Hotels Norway NOK |
| 3110 | Hotels Denmark DEK |
| 3111 | Hotels Switzerland CHF |
| 3112 | Hotels Russia RUB |
| 3113 | Hotels Israel ILS |
| 3114 | Hotels South Africa ZAR |
| 3115 | Hotels Turkey TRY |
| 3116 | Hotels Poland PLN |
| 3117 | Hotels United Arab Emirates AED |
| 3118 | Hotels Saudi Arabia SAR |
| 3119 | Hotels Egypt EGP |
| 3180 | Hotels EMEA EUR |
| 3200 | Hotels APAC USD |
| 3201 | Hotels Australia AUD |
| 3202 | Hotels India INR |
| 3203 | Hotels Japan JPY |
| 3204 | Hotels New Zealand NZD |
| 3205 | Hotels Hong Kong HKD |
| 3206 | Hotels Singapore SGD |
| 3207 | Hotels Korea KRW |
| 3208 | Hotels China CNY |
| 3209 | Hotels Thailand THB |
| 3210 | Hotels Malaysia MYR |
| 3211 | Hotels Taiwan TWD |
| 3212 | Hotels Indonesia IDR |
| 3213 | Hotels Vietnam VND |
| 3214 | Hotels Philippines PHP |
| 3301 | Hotels.com Mobile US USD |
| 3401 | Hotels.com Mobile UK GBP |
| 3480 | Hotels.com Mobile EMEA EUR |
| 6010 | Hotwire |
| 7102 | Egencia Germany EUR |
| 7103 | Egencia Italy EUR |
| 7104 | Egencia Spain EUR |
| 7105 | Egencia Netherlands EUR |
| 7107 | Egencia Sweden SEK |
| 7109 | Egencia Norway NOK |
| 7110 | Egencia Denmark DEK |
| 7111 | Egencia Switzerland CHF |
| 7114 | Egencia Belgium EUR |
| 7115 | Egencia Ireland EUR |
| 7116 | Egencia Australia AUD |
| 60000 | Egencia |
| 60003 | Egencia-UK |
| 60004 | Egencia - CA |
| 60006 | Egencia-DE |
| 60008 | Egencia-IT |
| 60009 | Egencia-ES |
| 60010 | Egencia-SE |
| 60011 | Egencia-NL |
| 60013 | Egencia-DK |
| 60020 | Egencia-FR |
| 60025 | Egencia-AU |
| 60027 | Egencia - IN |
| 60035 | Egencia-NO |
| 60080 | Egencia-BE |
| 60081 | Egencia-IE |
| 60082 | Egencia-CH |
| 60083 | Egencia-FI |
| 70125 | Wotif AU |
| 70129 | Wotif NZ |
| 70201 | Orbitz |
| 70301 | CheapTickets |
| 70403 | ebookers.com |
| 70406 | ebookers.de |
| 70420 | ebookers.fr |
| 70463 | ebookers.ie |
| 70465 | MrJet.se |
| 70472 | ebookers.ch |
| 70473 | ebookers.fi |
| 80001 | Travelocity.com |
| 80004 | Travelocity.ca |

## Error Messages

When there are errors, the top points of sale and regions API always returns a 200 response.  The error message is specified in an error field in the response.  The following are some sample error messages:

```JSON
{
    "error":"No hotelId specified"
}
```

```JSON
{
    "error":"No clientId specified or unknown clientId"
}
```

```JSON
{
    "error":"No data found",
    "hotelId":1234567890
}
```
