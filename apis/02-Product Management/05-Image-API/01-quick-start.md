# Quick Start
The Image API enables Expedia partners to add new images (one at a time), read images that currently exist for a property, and edit existing images' meta data like categories or room assignment.

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
password: wm47ah92
```
The URL to use for this property: <https://services.expediapartnercentral.com/properties/12933870/images>

The result will be an array of images assigned to your property. For example:
```JSON
{
  ADD EXAMPLE HERE
}
```

----

## Add a new image
The Image API allows partners to provide references to images available on the open internet, along with some meta data. When this data is POSTED, Expedia will then try to download the image, performs the necessary processing to have it online, and publish it on its website if the image passes all of Expedia internal checks.

In order to add a new image, partners will have to first contact Expedia to enable communication between Expedia servers and the partner image hosting solution.

An example of a valid POST message is provided here, but partners will not be able to try this on their own until they contact Expedia to get their domain white listed.

```JSON
{ADD EXAMPLE HERE}
```
Once POSTed, Expedia will first validate if the location is valid, and if yes, will return a successful response along with the received state and the new image resource ID. In order to confirm the processing is successful, it is recommended for partners to verify the state of the images by leveraging the resource ID:
GET https://services.expediapartnercentral.com/properties/[ExpediaPropertyId]/images/[ImageResourceId]
```JSON
{ADD EXAMPLE HERE}
```