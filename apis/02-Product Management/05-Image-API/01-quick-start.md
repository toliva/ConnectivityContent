# Quick Start
The Image API enables Expedia Group partners to add new images (one at a time), read images that currently exist for a property, and edit existing images' meta data like categories or room assignment.
**Please note** the Image API is intended for bulk-onboarding and maintenance operations. To avoid unnecessary development effort, contact your account manager before adopting this API. 

For partners that never worked with Expedia before, and want to know how to get started, please reach us via the [Contact Page](https://expediaconnectivity.com/contact-us).

----

## Authentication
Image API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Image API. 

For more details, please review the [Authentication section](reference.html#authentication) of the API Definition section.

For partners using Expedia APIs for the first time, please refer to the [FAQ & Guides section](guides.html#howtogetstarted) for instructions on how to obtain credentials.

----

## Reading images
The simplest way to start interacting with the Image API is to access the 
<https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images> endpoint in a browser, input a valid property id for which the partner is authorized, and input EQC API username and password when prompted for it.

Partners working with Expedia APIs for the first time and interested in testing this right away can use the following test account:
```
username: EQCtest12933870
password: ew67nk33
```
The URL to use for this property: <https://services.expediapartnercentral.com/properties/12933870/images>

The result will be an array of images assigned to your property. For example:
```JSON
{
  "entity": [
    {
      "resourceId": "6d266700-f59c-4f61-be81-fd43e4da9d4e",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/6d266700_b.jpg",
      "displayable": true,
      "state": "Published",
      "categoryCode": "SUNDECK",
      "propertyFeatured": true,
      "lastUpdateDateTime": "2016-08-19 15:29:00.000 GMT",
      "originalImageUrl": "https://some_url_that_expedia_whitelisted_for_our_partner.com/highresimage.jpg",
      "fileName": "65466_78961ABC.jpg"
    }
  ]
}
```

----

## Add a new image
The Image API allows partners to provide references to images available on the open internet, along with some meta data. When this data is sent to Expedia via a POST, Expedia will then try to download the image, perform the necessary processing to have it online, and publish it on its website if the image passes all of Expedia internal checks.

In order to add a new image, partners will have to first contact Expedia to enable communication between Expedia servers and the partner image hosting solution.

An example of a valid POST message is provided here, but partners will not be able to try this on their own until they contact Expedia to get their domain white listed.

```JSON
{
  "originalImageUrl": "https://some_url_that_expedia_whitelisted_for_our_partner.com/highresimage.jpg",
  "categoryCode": "HOTEL_FRONT",
  "propertyFeatured": true,
  "roomTypes": [
    {
      "resourceId": 12345,
      "roomTypeFeatured": false
    }
  ]
}
```
Once received, Expedia will first validate if the location is valid, and if yes, will return a successful response along with the RECEIVED state and the new image resource ID. In order to confirm the processing is successful, it is recommended for partners to verify the state of the images by leveraging the resource ID:
```
GET https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images/[ImageResourceId]
```

```JSON
{
  "entity": {
      "resourceId": "6d266700-f59c-4f61-be81-fd43e4da9d4e",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/6d266700_b.jpg",
      "displayable": true,
      "state": "Published",
      "categoryCode": "SUNDECK",
      "propertyFeatured": true,
      "lastUpdateDateTime": "2016-08-19 15:29:00.000 GMT",
      "originalImageUrl": "https://some_url_that_expedia_whitelisted_for_our_partner.com/highresimage.jpg"
    }
}
```
