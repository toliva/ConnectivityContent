# Overview

TCS is essentially a centralized content supply service which aggregates content sources from a variety of suppliers, both internal & external, and abstracts much of the complexity involved in the orchestration of all these services in one single entry point. 

Some of the content supply sources we’ve integrated to are the following services: 

```
Affinity Service, CGS, Desmet, Expert Tips, GAIA, LX, MediaVault, Recommender Service, Toursim Media, Trip.com and ViewFinder.
TCS Gateway, out of the box, supports the following sections:

- Affinity
- Activity
- Article
- Destination
- Neighborhood
- Poi
- Similar Destination
- Tip
```

# Travel Content Service Usage Guide

## How to use TCS?

We provide two rest endpoints which covers the 2 main use cases we currently support. You’ll need to invoke either one of theses requests: “Destination Only” or “Destination + Experience”.

### Destination

Path | Type | Require | Description
--- | --- | ---
regionID | String | Mandatory | We support any GAIA “multi_city_vicinity” and “city” featureType as parameter here.
sections | List<String> | Mandatory | Select one of the sections you want to retrieve content for, choose one of 8 supported sections: ACTIVITY, AFFINITY, ARTICLE, DESTINATION, NEIGHBORHOOD, POI, SIMILAR_DESTINATIONS and TIP.


### Destination + Experience

Path | Type | Require | Description
--- | --- | ---
regionID | String | Mandatory | We support any GAIA “multi_city_vicinity” and “city” featureType as parameter here.
tag | String | Mandatory | [DesMet Tag](https://expediaconnectivity.com/apis/hackathon/travel-content-service-tcs/desmet.html) See tip how to fetch the DesMet tag.
sections | List<String> | Mandatory | Select one of the sections you want to retrieve content for, choose one of 8 supported sections: ACTIVITY, AFFINITY, ARTICLE, DESTINATION, NEIGHBORHOOD, POI, SIMILAR_DESTINATIONS and TIP.

>**What are DesMet tags ?**
>
>DesMet is an internal Expedia service that allows cross-domain translation of terms. TCS uses DesMet tags to filter down content by 'experience'. See the list of DesMet tags [here](https://expediaconnectivity.com/apis/hackathon/travel-content-service-tcs/desmet.html).

## Sample use cases - Real examples

Destination Experience (DX) pages have been built using TCS as content provider.

Through these two use cases, you will learn how to query TCS to get content for a "Destination Only" and "Destination + Experience".

### Use Case 1 (Destination Only Content)

Reference for fully rendered TCS content for Destination Only: https://www.expedia.com/lp/destinations/178307[Destination Only Content]

Here are the different calls from the DX Pages to the TCS Gateway to retrieve content from the following sections for a given Gaia ID:

- Section "DESTINATION"
```
curl -u [USERNAME]:[PASSWORD] -X GET --compressed 'http://services.expediapartnercentral.com/travel-content/service/travel/regionId/[GAIA_ID]?sections=DESTINATION'
```

- Section "NEIGHBORHOOD"
```
curl -u [USERNAME]:[PASSWORD] -X GET --compressed 'http://services.expediapartnercentral.com/travel-content/service/travel/regionId/[GAIA_ID]?sections=NEIGHBORHOOD'
```

- Section "SIMILAR_DESTINATION"
```
curl -u [USERNAME]:[PASSWORD] -X GET --compressed 'http://services.expediapartnercentral.com/travel-content/service/travel/regionId/[GAIA_ID]?sections=SIMILAR_DESTINATION'
```

Where:

- USERNAME: Your Partner Hackathon username
- PASSWORD: Your Partner Hackathon password
- GAIA_ID: The region ID. See the [Gaia API documentation](https://expediaconnectivity.com/apis/hackathon/gaia/overview.html) to find the right identifiers.


---

### Use Case 2 (Destination + Experience Content)

Reference for fully rendered TCS content for Destination + Experience Content (ex for London): https://www.expedia.com/lp/destinations/178307/shopping

Here are the different calls from the DX Pages to TCS Gateway to retrieve the following sections for destination and experience:

- Section "DESTINATION":
```
curl -u [USERNAME]:[PASSWORD] -X GET --compressed 'http://services.expediapartnercentral.com/travel-content/service/travel/regionId/[GAIA_ID]?tag=[TAG]&sections=DESTINATION'
```

- Section "NEIGHBORHOOD":
```
curl -u [USERNAME]:[PASSWORD] -X GET --compressed 'http://services.expediapartnercentral.com/travel-content/service/travel/regionId/[GAIA_ID]?tag=[TAG]&sections=NEIGHBORHOOD'
```

- Section "SIMILAR_DESTINATION":
```
curl -u [USERNAME]:[PASSWORD] -X GET --compressed 'http://services.expediapartnercentral.com/travel-content/service/travel/regionId/[GAIA_ID]?tag=[TAG]&sections=SIMILAR_DESTINATION'
```

Where:

- USERNAME: Your Partner Hackathon username
- PASSWORD: Your Partner Hackathon password
- GAIA_ID: The region ID. See the [Gaia API documentation](https://expediaconnectivity.com/apis/hackathon/gaia/overview.html) to find the right identifiers.
- TAG: A [DesMet Tag](https://expediaconnectivity.com/apis/hackathon/travel-content-service-tcs/desmet.html) (the experience)
