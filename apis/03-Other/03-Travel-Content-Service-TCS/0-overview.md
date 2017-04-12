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
abacus | String | Optional | May not be relevant for your use case, however we have the capability of A/B testing content from 2 different sources of content for a given section.
sections | List<String> | Mandatory | Select one of the sections you want to retrieve content for, choose one of 8 supported sections: ACTIVITY, AFFINITY, ARTICLE, DESTINATION, NEIGHBORHOOD, POI, SIMILAR_DESTINATIONS and TIP.


### Destination + Experience

Path | Type | Require | Description
--- | --- | ---
regionID | String | Mandatory | We support any GAIA “multi_city_vicinity” and “city” featureType as parameter here.
abacus | String | Optional | May not be relevant for your use case, however we have the capability of A/B testing content from 2 different sources of content for a given section.
tag | String | Mandatory | [DesMet Tag](https://expediaconnectivity.com/apis/other/travel-content-service-tcs/desmet.html) See tip how to fetch the DesMet tag.
sections | List<String> | Mandatory | Select one of the sections you want to retrieve content for, choose one of 8 supported sections: ACTIVITY, AFFINITY, ARTICLE, DESTINATION, NEIGHBORHOOD, POI, SIMILAR_DESTINATIONS and TIP.

>**What are DesMet tags ?**
>
>DesMet is an internal Expedia service that allows cross-domain translation of terms. TCS uses DesMet tags to filter down content by 'experience'. See the list of DesMet tags [here](https://expediaconnectivity.com/apis/other/travel-content-service-tcs/desmet.html).

## Sample use cases - Real examples

Destination Experience (DX) pages have been built using TCS as content provider.

Through these two use cases, you will learn how to query TCS to get content for a "Destination Only" and "Destination + Experience".

##### Don't use the link as is
**TIP**: You need to use your APK key. Replace in each link YOUR_APK by your APK key.


### Use Case 1 (Destination Only Content)

Reference for fully rendered TCS content for Destination Only: https://www.expedia.com/lp/destinations/178307[Destination Only Content]

Here are the different calls from the DX Pages to the TCS Gateway to retrieve content from the following sections for London (Gaia ID: 178279):

- Section "DESTINATION"
```
http://services.expediapartnercentral.com/travel-content/service/travel/regionId/178279?sections=DESTINATION
```

- Section "NEIGHBORHOOD"
```
http://services.expediapartnercentral.com/travel-content/service/travel/regionId/178279?sections=NEIGHBORHOOD
```

- Section "SIMILAR_DESTINATION"
```
http://services.expediapartnercentral.com/travel-content/service/travel/regionId/178279?sections=SIMILAR_DESTINATION
```

---

### Use Case 2 (Destination + Experience Content)

Reference for fully rendered TCS content for Destination + Experience Content: https://www.expedia.com/lp/destinations/178307/shopping

Here are the different calls from the DX Pages to TCS Gateway to retrieve the following sections for London (Gaia ID: 178279) and the experience (shopping):

- Section "DESTINATION":
```
http://services.expediapartnercentral.com/travel-content/service/travel/regionId/178279?tag=shopping&sections=DESTINATION
```

- Section "NEIGHBORHOOD":
```
http://services.expediapartnercentral.com/travel-content/service/travel/regionId/178279?tag=shopping&sections=NEIGHBORHOOD
```

- Section "SIMILAR_DESTINATION":
```
http://services.expediapartnercentral.com/travel-content/service/travel/regionId/178279?tag=shopping&sections=SIMILAR_DESTINATION
```
