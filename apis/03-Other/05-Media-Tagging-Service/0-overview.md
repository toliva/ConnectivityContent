# Overview

The Media Tagging Service enables developers to understand the content of an image by leveraging existing machine learning models in an easy to use REST API. Integration with Expedia domain like DesMet and Gaia is also provided.

Here is the list of the external services available through this service:

- Google Vision API:[https://cloud.google.com/vision/](https://cloud.google.com/vision/)
- Microsoft Computer Vision API: [https://www.microsoft.com/cognitive-services/en-us/computer-vision-api](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api)
- Pollo Loco (Expedia - experimental): [https://confluence/display/people/Pollo+Loco](https://confluence/display/people/Pollo+Loco)


# Media Tagging Service Usage Guide

## How can I start using the Tagging API?
In order for us to grant you access and integrate to the Travel Content Service, you will require an Application Key that is unique to you as a client. To request an Application Key, please contact an Expedia Content System team member.

### APK Key
The Application Key is a mandatory parameter that you pass along with each request to allow custom configurations for you as a client. It determine which external service will be used against the image.

## How to use the Tagging API?

Simply POST an URL or the Image binary to the REST endpoint of the service. The response will contain all the information that the external services discovered analyzing the pixels of the provided image.

### URL Example

```
TODO
```
