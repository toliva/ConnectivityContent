# Overview

Gaia is an Expedia internal service run by GPS that provides geographical data and geospatial selection functionality.

Gaia has a large database of shapes and points representing things like cities, regions, or point of interests. Every elements is identified by a unique numerical identifier. 

Some of the API available via this portal uses Gaia ID has either inputs or outputs. This page explains how you can find the details attached to a Gaia ID or how you can determine the Gaia ID of a given city or point of interests.

## Authentication

The API takes basic auth headers for authentication. The credentials expected are the same as any other public API available via this portal.

## Getting Details for a Gaia ID

You can use the following endpoint from this portal:

```bash
curl  -u [USERNAME]:[PASSWORD] --header 'Accept: application/json' -X GET 'https://services.expediapartnercentral.com/gaia/search/id/[GAIA_ID]'
```

Where:

- USERNAME: Your Partner Hackathon username
- PASSWORD: Your Partner Hackathon password
- GAIA_ID: the Gaia unique identifier

### Response

```json
{
  "id": "178281",
  "type": "multi_city_vicinity",
  "name": "Madrid (and vicinity), Spain",
  "source": {
    "srcId": "178281",
    "systemId": 300
  },
  "position": {
    "type": "Point",
    "coordinates": [
      -3.703565,
      40.417007
    ]
  },
  "categories": [
    "geoAdmin:metropolitanArea",
    "meta:destination",
    "tourism:metropolitanArea"
  ],
  "status": "active"
}
```
_*Minor modification done to response above for clarity_


## Finding a Gaia ID

You can use the following endpoint from this portal:

```bash
curl  -u [USERNAME]:[PASSWORD] --header 'Accept: application/json' -X GET 'https://services.expediapartnercentral.com/gaia/search/name/[SEARCH_KEY]'
```

Where:

- USERNAME: Your Partner Hackathon username
- PASSWORD: Your Partner Hackathon password
- SEARCH_KEY: The prefix of the region/city/point of interet you are looking for.

### Response

```json
{
  "q": "madrid",
  "rc": "OK",
  "sr": [
    {
      "@type": "gaiaRegionResult",
      "index": "0",
      "gaiaId": "178281",
      "type": "MULTICITY",
      "regionNames": {
        "fullName": "Madrid (and vicinity), Spain",
        "shortName": "Madrid (and vicinity)",
        "displayName": "<B>Madrid</B>, Spain",
        "lastSearchName": "Madrid, Spain"
      },
      "coordinates": {
        "lat": "40.417007",
        "long": "-3.703565"
      },
      "hotelCountPerRegion": "1092",
      "popularity": "13063.0"
    },
    {
      "@type": "gaiaRegionResult",
      "index": "1",
      "gaiaId": "6200391",
      "type": "CITY",
      "regionNames": {
        "fullName": "Madrid City Centre, Madrid, Spain",
        "shortName": "Madrid City Centre",
        "displayName": "<B>Madrid</B> City Centre, <B>Madrid</B>, Spain",
        "lastSearchName": "Madrid City Centre, Madrid, Spain"
      },
      "coordinates": {
        "lat": "40.423513",
        "long": "-3.698524"
      },
      "hotelCountPerRegion": "755",
      "popularity": "677.0"
    }
  ]
}
```
_*Minor modification done to response above for clarity_
