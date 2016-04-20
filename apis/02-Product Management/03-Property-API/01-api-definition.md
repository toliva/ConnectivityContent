# API Definition

The Property API is used to onboard property attributes, images, policies, and fees.  Additionally, this API can be used to update property content post onboarding.  The quickest way to get started is to review the [Supported Features](./supported-features.html) and review the API Definition.

# Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

# Endpoints

| Environment | Host |
| ----------- | -----|
| Test        | https://int.services.expediapartnercentral.com |
| Production  | https://services.expediapartnercentral.com |


| Method | HTTP Verb | Endpoint | Description |
| ------ | --------- | -------- | ----------- |
| Set Property Details | PUT | /properties/v1/{EPC account id} | PUT property information to initiate onboarding. |
| Get Property Details | GET | /properties/v1/{EPC account id}/{provider property ID} | GET property information |
| Update a Property | PUT | /properties/v1/{EPC account id} | Update an existing property by sending a full overlay. PATCH is not supported.  |
| Get Property Status | GET | /properties/v1/{EPC account id}/{provider property ID}/status | GET current state of the specified property (Onboarding Successful, Onboarding Failed, etc.) |
| Deactivate Property | DELETE | /properties/v1/{EPC account id}/{provider property ID} | De-activates property in Expedia system |

# API Errors

After submitting a request for any of the endpoints listed in the section above, acknowledgement or errors will be returned in the http headers.

| HTTP Code | Description | Retry? | Notes |
| --------- | ----------- | ------ | ----- |
| 2xx | Success Message | No | |
| 202 | Request successfully received and is processing. | No | To get processing status, see the status attribute contained in the response body |
| 4xx | Error Message | No | |
| 400 | Validation Error | No | Must address errors listed in the Validation attribute contained within the response body and resubmit. |
| 5xx | Internal Error | Yes | Internal system error when attempting to process message. |

A list of possible errors for each API can be found [here](./code-list.html "Error Code List")

# SetPropertyDetails

The below example is a request to onboard a new property using SetPropertyDetails.

- Information for more than one property is accepted in the request, max. batch size is 50 properties per request.
- Each property must have a unique providerPropertyId
- Property content can be sent as it is collected, and does not all need to be submitted in a single call. To do this, just send in at least a providerPropertyID and use that ID to submit any content updates.

```javascript
[{
    "providerPropertyId": "1289472",
    "name": "Peach Inn",
    "latitude": "23.3752",
    "longitude": "-81.3261",
    "providerPropertyUrl": "http://example.org",
    "structureType": "Hotel",
    "currencyCode": "USD",
    "billingCurrencyCode": "USD",
    "timeZone": "USA/Pacific",
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
        "rateAcquisitionType": "NET_RATE"
    },
    "attributes": [
        {
            "code": "TOTAL_ROOMS",
            "value": "15"
        }
    ]
}]

```

**property**

| Attribute | Type | Required for Onboarding | Updatable? | Notes |
| --------- | ---- | ----------------------- | ---------- | ----- |
| providerPropertyId | String | Yes | No | Unique ID for the property from the Provider's system. |
| name | String | Yes | Yes | Default Property Name, must be submitted in Western European Character set. |
| latitude | String | Yes | No | Property Latitude, use ISO6709.  May be modified by Expedia and updates submitted after initial onboarding will not be processed. |
| longitude | String | Yes | No | Property Longitude, use ISO6709.  May be modified by Expedia and updates submitted after onboarding will not be processed. |
| providerPropertyUrl | String | No | Yes | URL for property's website, must be submitted in Western European Character set. |
| structureType | String | No | Yes | Must use pre-defined structureType code.  See [code list](./CodeList#StructureType) |
| currencyCode | String | Yes | No | Currency code to be used for property's pricing. Cannot be updated after initial onboarding. Use ISO4217 |
| billingCurrencyCode | String | Yes | No | Currency code to be used for billing. Use ISO4217. |
| timeZone | String | Yes | Yes | TimeZone for the property, used to determine cancel policies. Use the IANA timezone database codes. |
| addresses | Array of Address objects | Yes | No | See [Address](####address) below. |
| ratings | Array of Rating objects | No | No | See [Rating](####rating) below. |
| contacts | Dictionary of Contact objects | Yes | Yes | See [Contact](####contact) below. |
| contents | Array of Content | Yes | Yes | See [Content](####content) below. |
| propertyCollectedMandatoryFees | Array of SupplierCollectedMandatoryFee | No | Yes | See [SupplierCollectedMandatoryFee](####SupplierCollectedMandatoryFee) below. |
| policies | Array of Policy | No | Yes | See [Policy](####policy) below. |
| inventorySettings | Array of InventorySetting | No | Yes | See [InventorySetting](####inventorysetting) below. |
| taxes | Array of Tax | No | Yes | See [Tax](####tax) below. |
| attributes | Array of Attribute | No | Yes | See [Attribute](####attribute) below |

**address**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| line 1 | String | Yes | Number and Civic address. This is the address used by travelers to reach your property. Refrain from using informal instructions like “(across from the mall)”. If your address is longer than 40 characters, we recommend you continue with Line2. You will not produce a validation error for longer addresses, but the value may be parsed inaccurately. |
| line 2 | String | No | |
| city | String | Yes | Town/City |
| postalCode | String | No | ZIP/Postal Code |
| countryCode | String | Yes | Use ISO 3166-1 alpha-2 or alpha-3.  Stored in Expedia system as alpha-3. |

**rating**

Only star rating is displayed for a property. Rating data submitted will be reviewed and subject to revision by Expedia.

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| score | Decimal | Yes | Normalized Score, e.g. 4.0 |
| maxScore | Decimal | Yes | he maximum score possible for the rating scale, e.g. 5.0 if highest rating is 5 stars. |
| description | String | Yes | Only supported value is "Stars" |
| source | String | No | More descriptive information about the star rating. Indicate here if national or non-national rating and affiliation. |

**contact**

Contact set data are represented as a dictionary, with the following dictionary keys.

| Dictionary Key | Required | Notes |
| -------------- | -------- | ----- |
| Property | Yes |  Contact Info for the physical property |
| ReservationManager | Yes | Email required for Electronic Booking Notification Failover.  Phone number required - used as primary contact for customer booking issues.   |
| AlternateReservationManager | Yes | Phone number required - used as emergency (24hour) contact for customer booking issues. |
| GeneralManager | No | If phone number provided, telesales inquiries about property amenities directed to this number instead of contacting the property directly. |
| PropertyExtranetUser | No | User account for access to read and respond to user reviews and reports for the property via the Expedia Partner Central (EPC) extranet. |

*Description of Contact info accepted:*

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| firstName | String | Yes | |
| lastName | String | Yes | |
| phoneNumbers | Array of PhoneNumbers | See Notes | Phone required for Property, ReservationManager, AlternateReservationManager, GeneralManager |
| emails | Array of Strings | See Notes | Email required for ReservationManager |

**phoneNumber**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| phoneNumberType | String | No | See [code list](./code-list.html#phoneNumberType).  If no type submitted, then 'Undefined' used. |
| countryAccessCode | String | No | Country Calling Code. Use ITU standard E.123 / E.164. |
| areaCode | String | No | Use Telephone numbering plan standards. |
| number | String | Yes | Include the country and area code within the submitted number. |

**content**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| locale | String | Yes | Use IETF language tag standard, e.g. en-US |
| name | String | No | Property name for specified locale, e.g. en-US.  If none provided, then default property name will be used. |
| images | Array of Image | Yes | See Image below. |
| amenities | Array of Amenity | No | See Amenity below. |
| paragraphs | Array of Paragraph | No | See Paragraph below. |

**image**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| url | String | Yes | image URL.  A property needs at least 1 image to complete onboarding.  Images below 350x350 pixels will be rejected. |
| categoryCode | String | No | See [code list](./code-list.html#categoryCode).  If none provided, Expedia will provide categorization. |
| name | String | No | Image Caption |

**amenity**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#amenityCode) |
| detailCode | String | See [code list](./code-list.html#amenityCode) | See [code list](./code-list.html#amenityCode) |
| value | Numeric | See [code list](./code-list.html#amenityCode) | See [code list](./code-list.html#amenityCode) |

**paragraph**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#paragraph) Paragraph text may require review by Expedia prior to publishing. |
| value | String | Yes | Paragraph Text |

**propertyCollectedMandatoryFee**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#mandatoryfees) |
| scope | String | Yes | See [code list](./code-list.html#mandatoryfees) |
| duration | String | Yes | See [code list](./code-list.html#mandatoryfees) |
| value | String | Yes | Fee amount in the property's currency. Example: 24.99 |
| startDate | String | No | If fee is only offered on specific days during the year, provide a recurring start and end date. |
| endDate | String | No | |

**policy**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#policy) |
| value | String | Yes | |

**inventory setting**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| rateAcquisitionType | String | No | See [code list](./code-list.html#inventorySetting)|

**tax**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#tax) |
| detailCode | String | See [code list](./code-list.html#tax) | See [code list](./code-list.html#tax) |
| value | Number | Yes |

## SetPropertyDetails Response

After submitting a Property API request, the response will acknowledge receipt of the message or return an error.  More information can be found here.

**Response Body**

The response body will echo back the values of *the request received* and will include the following additional attributes:

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| expediaId | Int | Expedia's unique ID for the property. |
| provider | String | Name of the provider associated with the property (this is your organization). |
| createdUtc | DateTime | DateTime the property was created in Expedia's Lodging System. |
| modifiedUtc	| DateTime | Last Modified time in Expedia's Lodging System. |
| status | String | callback URL to get property status.  See [GetPropertyStatus](./api-definition.html#GetPropertyStatus) for more information. |

**Example SetPropertyDetails Response**

```javascript
{
    "entity":
    [
        {
            "providerPropertyId": "1",
            "provider": "Provider-A",
            "expediaId": 1234567,
            "name": "Property Name",
            "latitude": "21.3752",
            "longitude": "-88.3261",
            "createdUtc": "2015-09-10T23:59:48.7349626Z",
            "modifiedUtc": "2015-09-10T23:59:48.7349626Z",
            "providerPropertyUrl": "http://example.org",
            "structureType": "Hotel",
            "currencyCode": "GBP",
            "billingCurrencyCode": "GBP",
            "timeZone": "Europe/Dublin",
            "addresses": [
                {
                    "line1": "Address Line 1",
                    "line2": null,
                    "city": "City",
                    "state": "State or Province",
                    "postalCode": "77780",
                    "countryCode": "MEX"
                }
            ],
            "ratings": [
                {
                    "score": 4,
                    "maxScore": 5,
                    "source": "AAA",
                    "description": "4 STARS"
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
            "airports": [
                {
                    "code": "PCM",
                    "name": "Playa del Carmen Airport"
                }
            ],
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
                        },
                        {
                            "url": "http://images.xyz.com/additionalImage.jpg",
                            "categoryCode": null,
                            "caption": "Additional Image"
                        }
                    ],
                    "amenities": [
                        {
                            "code": "BREAKFAST",
                            "detailCode": "FREE",
                            "value": null
                        },
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
                },
                {
                    "code": "CHECKIN_TIME",
                    "value": "2:00 PM"
                },
                {
                    "code": "CHECKOUT_TIME",
                    "value": "11:00 AM"
                },
                {
                    "code": "CANCELLATION_CUTOFF_TIME",
                    "value": "6:00 PM"
                }
            ],
            "inventorySettings": {
                "rateAcquisitionType": "NET_RATE"
            },
            "attributes": [
                {
                    "code": "TOTAL_ROOMS",
                    "value": "15"
                }
            ],
            "status": {
                "href": "/properties/v1/provider-a/1/status"
            }
        }
    ]
}
```
# GetPropertyDetails

Provides the Provider's view of the property, which can be used by the Property API client to construct an update overlay message.  The GetPropertyDetails response does not necessarily show any fields that have been moderated (modified) by Expedia, such as star rating, freeform paragraph text, taxes, latitude/longitude coordinates, or address.

**Example GetPropertyDetails Request**

GET /properties/v1/mycompany/1234

## GetPropertyDetails Response

```javascript

need example

```
# GetPropertyStatus

The onboarding process is an asynchronous workflow, so this endpoint should be polled no more than once an hour to retrieve the latest status of the property and its assigned Expedia ID.  Please note that the Product API cannot be called to add new room types/rate plans until after a property has reached 'OnboardingSucceed' status.

**Example Request**

GET /properties/v1/mycompany/1234/status

## GetPropertyStatus Response

 ```javascript

 {
       entity: {
              provider: 'mycompany',
              providerPropertyId:  1234,
              expediaId: null,
              code:  'OnboardingFailed',
              reasonCodes: [ 'InvalidLatLong', 'MissingPhoneNumber' ]
              timestampUtc: '2015-08-26T00:01:06.055Z',
              messages: [
                     'Invalid latitude/longitude: 0.0/0.0.',
                     'No valid phone numbers found.'
              ]
       }
}
```

A complete list of reason codes can be found on the [code list page](./code-list.html).

# Update a Property
Updating a property that is already onboarded is the same operation as the original onboarding - a full overlay update is required using the SetPropertyDetails.  It is recommended that you GET the property details first, modify the fields that you'd like to change (and/or add new), then send the entire json document as a PUT request to update the property.  Please note that PATCH is not supported at this time - a complete overlay is required for updates.


# Deactivate/Delete a Property
Sending a DELETE for an onboarded property will deactivate the property in Expedia's system.  Content will not be deleted, only the property's state will be changed to inactive.  The property can later be re-enabled using the SetPropertyDetails API call.

**Example**

DELETE /properties/v1/mycompany/1234

```javascript

need example

```
