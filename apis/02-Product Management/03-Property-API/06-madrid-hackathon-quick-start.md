# Madrid Hackathon Quick Start

The Property API is used to onboard property attributes, images, policies, and fees. Additionally, this API can be used to update property content post onboarding. The quickest way to get started is to review the [Supported Features](https://expediaconnectivity.com/apis/product-management/property-api/supported-features.html) and review the API Definition. For the Madrid Hackathon, Expedia facilitated a way to onboard properties in a test region.

## Authentication
All requests should include Basic Authentication in HTTP header using Hackathon specific API credentials. For the Hackathon, Test provider id: "test" is available for participants to use for onboarding new properties. This provider ID needs to be provided as part of the URL for accessing the API, as demonstrated in the examples below.

EPC credentials are shown [here](https://github.com/ExpediaInc/exp-connectivity-util/blob/master/madrid-hackathon/workshops/product-api/samples/api-sync-demo/product-synchronizer/src/main/resources/application.yml)

## Supported Features

Property API supports the following use cases:

- Onboard a new property into Expedia's Lodging System by submitting property-level details, such as a property's name, address, and attributes.
- Update the record of a property that was previously onboarded by the Property API by you.
- Retrieve a record of the property that was previously onboarded via the Property API by you.
- Get the status of a property, e.g. Onboarding Completed, Onboarding Failed.

For the hackathon, geo information like lat/long will be ignored and will be defaulted to a special region in the middle of the ocean. Once onboarding completes, hotels will be visible in "Region Test".

For more information see [here](https://expediaconnectivity.com/apis/product-management/property-api/supported-features.html)

## Example API calls

Here are ways to interact with the API.

### Get property details
The response will echo back all details that the api has for the property
```
GET https://services.expediapartnercentral.com/properties/v1/test/11112
```

### Get property status
The response will echo back the latest onboarding status for a property
```
GET https://services.expediapartnercentral.com/properties/v1/test/11112/status
```

### Remove an existing property
The response to the delete request will be a 200/OK and it will echo back the details of the property which was just deleted
```
DELETE https://services.expediapartnercentral.com/properties/v1/test/123456789
```
 
### Create or update a property
Information for more than one property is accepted in the request, max. batch size is 50 properties per request. Each property must have a unique providerPropertyId

POST https://services.expediapartnercentral.com/properties/v1/test/123456789
 
Sample Body:
```json
[{
    "providerPropertyId": "123456789",
    "name": "Peach Inn",
    "latitude": "23.3752",
    "longitude": "-81.3261",
    "providerPropertyUrl": "http://example.org",
    "structureType": "Hotel",
    "currencyCode": "USD",
    "
    Code": "USD",
    "timeZone": "America/Los_Angeles",
    "addresses": [
        {
            "line1": "123 Main St.",
            "city": "B. Hills",
            "state": "CA",
            "postalCode": "90210",
            "countryCode": "USA"
        }
    ],
    "ratings": [
        {
            "score": 4,
            "maxScore": 5,
            "source": "AAA",
            "description": "STARS"
        }
    ],
    "contacts": {
        "Property": {
            "phoneNumbers": [
                {
                    "phoneNumberType": "Phone",
                    "countryAccessCode": "1",
                    "areaCode": "123",
                    "number": "1234567"
                }
            ]
        },
        "ReservationManager": {
            "firstName": "First",
            "lastName": "Last",
            "emails": [
                "abc@xyz.com"
            ],
            "phoneNumbers": [
                {
                    "phoneNumberType": "Phone",
                    "countryAccessCode": "1",
                    "areaCode": "123",
                    "number": "4567890"
                },
                {
                    "phoneNumberType": "Fax",
                    "countryAccessCode": "1",
                    "areaCode": "123",
                    "number": "7890123"
                }
            ]
        },
        "AlternateReservationManager": {
            "phoneNumbers": [
                {
                    "phoneNumberType": "Phone",
                    "countryAccessCode": "1",
                    "areaCode": "123",
                    "number": "1234567"
                }
            ]
        },
        "GeneralManager": {
            "firstName": "General",
            "lastName": "Manager",
            "emails": [
                "abc123@xyz.com"
            ]
        }
    },
    "contents": [
        {
            "locale": "en-US",
            "name": "Localized Property Name",
            "providerPropertyUrl": null,
            "images": [
                {
                    "url": "http://images.xyz.com/mainImage.jpg",
                    "categoryCode": "FEATURED_IMAGE",
                    "caption": "Main Image"
                }
            ],
            "amenities": [
                  {
                    "code": "WIFI_INTERNET",
                    "detailCode": "SURCHARGE_PER_STAY",
                    "value": 10.99
                }
            ],
            "paragraphs": [
                {
                    "code": "DESCRIPTION",
                    "value": "Property description."
                },
                {
                    "code": "SPECIAL_CHECKIN_INSTRUCTIONS",
                    "value": "Special check-in instructions."
                }
            ]
        }
    ],
    "propertyCollectedMandatoryFees": [
        {
            "code": "RESORT_FEE",
            "scope": "PER_PERSON",
            "duration": "PER_NIGHT",
            "value": 25.99,
            "startDate": null,
            "endDate": null
        }
    ],
    "taxes": [
        {
            "code": "VAT",
            "detailCode": "PERCENT_PER_STAY",
            "value": 20
        }
    ],
    "policies": [
        {
            "code": "MINIMUM_CHECKIN_AGE",
            "value": "18"
        }
    ],
    "inventorySettings": {
        "rateAcquisitionType": "NET_RATE",
        "distributionModels": [
            "EXPEDIA_COLLECT",
            "HOTEL_COLLECT"
        ]
    },
    "attributes": [
        {
            "code": "TOTAL_ROOMS",
            "value": "15"
        }
    ]
}]
```
### How to easily interact with the API

Go to the [try it](https://expediaconnectivity.com/apis/product-management/property-api/try-it.html) section to experience with the API at will.
