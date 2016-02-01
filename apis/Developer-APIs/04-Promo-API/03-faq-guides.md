# FAQ & Guides
This section contains various Frequently Asked Questions, as well as documentation that will help partners understand how Expedia works, and also how to use the product API to correctly reflect partner's intent when managing room types and rate plans.

## How to Get Started for First Time API Users
In order to get started with using the API, it is required to register with Expedia and obtain API credentials. It is also possible to obtain the rights to use a test property to run some tests before going to production with a new integration. To get started, new partners need to send an email to eqcss@expedia.com.

## How to Get Authorized to Access Specific Properties
In order to be able to manage properties in production, partners need to be authorized by either Expedia, or the properties that chose to do business with their system.

After a partner successfully registered with Expedia, properties can decide to select the partner and authorize them via Expedia PartnerCentral. When this happens, the partner will get an email notification. The email will contain the confirmation that the partner is now authorized to manage this hotel via API calls. It will also either contain a specific set of credentials for this property, or will indicate that the partner's unique account was authorized to manage this additional property. Whether a partner is given a unique account, or one per property, is decided at time of registration with Expedia.

## What are the API endpoints?
Create a single promotion:
POST https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos

Preview score for a single promotion:
POST https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos

Retrieve a list of promotions for a hotel:
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}

Retrieve a single promotion:
GET https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos/{promo-id}

Modify a single promotion:
PUT https://services.expediapartnercentral.com/promotions/v1/hotels/{hotel-id}/promos/{promo-id}


## Is XML supported by the Promo API?
When the promo API was initially released, it was documented as supporting both XML and JSON. An overwhelming majority of Expedia partners opted for JSON. Expedia therefore decided to deprecate support for XML in 2016. If you intend to start integrating with the promo API, please do so using JSON. Specifying XML content types will work now, but will not by end of 2016.

## Avoid Sending Concurrent Requests 
The Promo Modify Operation accepts one connection at a time per promotion ID. Therefore it is important for the partner to not send more than one request concurrently to modify the same promotion.

However the Promo Create API can accept multiple non duplicate promo creation requests simultaneously for the same hotel. Partner should only avoid sending duplicate promo create request. The service will reject duplicate promo create request with an error message. 

## Message Ordering
Requests are processed in the order they are received by the Promo API.

The Promo API processes the request synchronously, if there are more than one requests for the same promotion, partner should ensure newer request is only sent after the previous request has been responded to by the API.

## Expedia Partner Central
Partner can access Expedia Partner Central (EPC) for additional information on the promotions created through the Promo API. Partner can view the promo score and the number of bookings generated from the promo. 
