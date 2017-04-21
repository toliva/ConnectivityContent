# Quick Start

The Top TPID (aka Points of Sale) and Regions API provides the highest booking points of sale and regions for a given hotel.  Hoteliers can use this information to determine for what point of sale and region their hotel is most popular.

----

## Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

----

## Reading Top Point of Sale and Region Data

**Warning: Not Real Time**: This API is based of data being computed every 24h at 11am UTC. If hotels aren't visible after running valid searches on Expedia core points of sale, they'll become visible next day after the batch job runs.

To retreive top point of sale and regions data simply pass a hotel id and client id to the </lodging-sort/v1/hops/HopsTopTpidsAndRegions> endpoint via a query parameter.

```
https://services.expediapartnercentral.com/lodging-sort/v1/hops/HopsTopTpidsAndRegions?hotelId=1
```

The response will contain a sorted list of top regions for each of the top points of sale for the specified hotel. Partners are encouraged to use the Gaia API referenced in this portal to resolve the Gaia region IDs to something more meaningful. To resolve the point of sale IDs (tpids), please refer to the reference section of this API: there is a static list of ids and names provided.

```JSON
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
