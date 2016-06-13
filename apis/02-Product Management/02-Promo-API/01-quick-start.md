# Quick Start
The Promo API enables partners to create promotions in the Expedia marketplace. It complements the existing Expedia Partner Central (EPC) self-service promo tools and thus provides more flexibility and options for hoteliers to manage their offering on the Expedia marketplace.

----

## Authentication
Promo API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Promo API. 

For partners using Expedia APIs for the first time, please refer to the FAQ & Guides section for instructions on how to obtain credentials.

----

## Reading promotions
The simplest way to start interacting with the Promo API is to access the 
<https://services.expediapartnercentral.com/promotions/v1/hotels/{your_hotel_id}/promos> endpoint in a browser, and input EQC API username and password when prompted for it. This would return a list of promotions created via the API. If you never created promotions, it would return an empty list.

Partners working with Expedia APIs for the first time and interested in testing this right away can use the following test account to try:
```
username: EQCtest12933870
password: kh92nd29
```
and call this endpoint and hotel: https://services.expediapartnercentral.com/promotions/v1/hotels/12933870/promos
