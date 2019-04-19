# API Definition

The Property API is used to onboard property attributes, images, policies, and fees.  Additionally, this API can be used to update property content post onboarding.  The quickest way to get started is to review the [Supported Features](./supported-features.html) and review the API Definition. **Please note** the Property API currently only caters to limited use cases. To avoid unnecessary development effort, contact your account manager or the [EQC System Specialist Team](mailto:eqcss@expedia.com?subject=Approval%20to%20use%20Property%20API) before adopting this API.


## Authentication

Basic Authentication in HTTP header, using your Expedia Quick Connect (EQC) credentials.

## Endpoints

| Environment | Host |
| ----------- | -----|
| Test        | https://int.services.expediapartnercentral.com |
| Production  | https://services.expediapartnercentral.com |


| Method | HTTP Verb | Endpoint | Description |
| ------ | --------- | -------- | ----------- |
| Set Property Details | PUT | /properties/v1/{provider name} | PUT property information to initiate onboarding. |
| Get Property Details | GET | /properties/v1/{provider name}/{provider property ID} | GET a property's information by its provider property ID|
| Update Properties | PUT | /properties/v1/{provider name} | Update one or more properties by sending a full overlay. PATCH is not supported.  |
| Get Property Status | GET | /properties/v1/{provider name}/{provider property ID}/status | GET current onboarding status of the specified property |
| Get by ExpediaID | GET | /properties/v1/{ExpediaPropertyID} | GET a property's information by specifying its Expedia Property ID (assigned during onboarding)
| Update by ExpediaID | PUT | /properties/v1/{ExpediaPropertyID} | Update a property by specifying its Expedia Property ID (assigned during onboarding)
| Deactivate Property | DELETE | /properties/v1/{provider name}/{provider property ID} | Deactivate a property in the Expedia system |
| Property Manager Readiness | GET | /providers/v1/{provider name} | This method can be used to retrieve Property Manager information for the ones configured and ready to be Onboarded on Expedia |

## API Errors

After submitting a request for any of the endpoints listed in the section above, acknowledgement or errors will be returned in the http headers.

| HTTP Code | Description | Retry? | Notes |
| --------- | ----------- | ------ | ----- |
| 2xx | Success Message | No | |
| 202 | Request successfully received and is processing. | No | To get processing status, see the status attribute contained in the response body |
| 4xx | Error Message | No | |
| 400 | Validation Error | No | Must address errors listed in the Validation attribute contained within the response body and resubmit. |
| 5xx | Internal Error | Yes | Internal system error when attempting to process message. |

A list of possible errors for each API can be found [here](./code-list.html "Error Code List")

## Set or Update Property Details

This endpoint may be used to initiate onboarding for new properties or update existing properties. The request body will accept an array containing between 1 and 50 properties per request. Each property must have a unique Provider Property Id. When sending updates, a full overlay is required for each property.

**Example Request**

PUT /properties/v1/mycompany

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
            "scope": "AMOUNT_PER_PERSON",
            "duration": "PER_NIGHT",
            "value": 25.99,
            "startDate": null,
            "endDate": null
        },
        {
            "code": "DEPOSIT_OTHER",
            "scope": "BREAKAGE",
            "duration": "PER_DAY",
            "startDate": "2019-09-20",
            "endDate": "2019-09-28",
            "value": "14.77"
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
            "code": "FORMS_OF_DEPOSIT_ACCEPTED",
            "detailCode": "CREDIT_CARDS_ONLY",
            "value": null
        },
        {
            "code": "DEPOSIT_OTHER",
            "detailCode": "CASH_ONLY",
            "value": null
        }
    ],
    "inventorySettings": {
        "rateAcquisitionType": "NET_RATE",
        "pricingModel": "PER_DAY",
        "taxInclusive":false
    },
    "attributes": [
        {
            "code": "TOTAL_ROOMS",
            "value": "8"
        },
        {
            "code": "NUMBER_OF_BEDROOMS",
            "value": "4"
        },
        {
            "code": "NUMBER_OF_BATHROOMS",
            "value": "3"
        }
    ],
    "registrations": [{
        "startDate": "2019-03-10",
        "endDate": "2019-09-10",
        "type": "RENTAL_REGISTRATION",
        "code": "1234-6"
        },{
        "startDate": "2019-09-11",
        "endDate": "2020-07-10",
        "type": "RENTAL_REGISTRATION",
        "code": "1222-6"
        }]
}]

```

The property API can be utilized by both our Expedia Quick Connect (EQC) partners as well as our Direct Connect (ARI) partners. If you are a Direct Connect ARI partner, there is a small addition to the Onboarding Request - You would need to define the Brand Code and Chain Code of the property as well. You can find details [here](/files/SetPropertyARIChain.pdf).

**property**

| Attribute | Type | Required for Onboarding | Updatable? | Notes |
| --------- | ---- | ----------------------- | ---------- | ----- |
| providerPropertyId | String | Yes | No | Unique ID for the property from the Provider's system. Allowable characters include ASCII a-z, A-Z, 0-9, underscore, dash. |
| name | String | Yes | Yes | Default Property Name, must be submitted in Western European Character set. |
| latitude | String | Yes | No | Property Latitude, use ISO6709.  May be modified by Expedia and updates submitted after initial onboarding will not be processed. |
| longitude | String | Yes | No | Property Longitude, use ISO6709.  May be modified by Expedia and updates submitted after onboarding will not be processed. |
| providerPropertyUrl | String | No | Yes | URL for property's website, must be submitted in Western European Character set. |
| structureType | String | Yes | Yes | Must use pre-defined structureType code.  See [code list](./code-list.html#property-structuretype "Structure type codes") |
| currencyCode | String | Yes | No | Legacy attribute.  Expedia uses the billingCurrencyCode for pricing and invoicing, please submit an ISO4217 code for both currencyCode and billingCurrencyCode.  This attribute may be retired in the next major API version. |
| billingCurrencyCode | String | Yes | No | Use ISO4217.  Currency code to be used for pricing and billing and has to be one of the currencies set up by your Account Manager for billing. Cannot be updated after initial onboarding.   |
| timeZone | String | Yes | Yes | TimeZone for the property, used to determine cancel policies. Specified in IANA timezone format. See the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for details.|
| addresses | Array of Address objects | Yes | No | See Address below. |
| ratings | Array of Rating objects | No | No | See Rating below. |
| contacts | Dictionary of Contact objects | Yes | Yes | See Contact below. |
| contents | Array of Content | Yes | Yes | See Content below. |
| propertyCollectedMandatoryFees | Array of SupplierCollectedMandatoryFee | No | Yes | See SupplierCollectedMandatoryFee below. |
| registrations | Array of Registration/License IDs for the property | No | Yes | See registrations below. |
| policies | Array of Policy | No | Yes | See Policy below. |
| inventorySettings | Array of InventorySettings | No | Yes | See InventorySettings below. |
| taxes | Array of Tax | No | Yes | See Tax below. |
| attributes | Array of Attribute | No | Yes | See Attribute below |

**address**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| line 1 | String | Yes | <ul><li>Number and Civic address.</li><li>This is the address used by travelers to reach your property.</li><li>Refrain from using informal instructions like “(across from the mall)”.</li><li>Minimum 5 Characters Required. If your address is longer than 40 characters, we recommend you continue with Line2.</li><li>You will not produce a validation error for longer addresses, but the value may be parsed inaccurately.</li> |
| line 2 | String | No | |
| city | String | Yes | Town/City |
| postalCode | String | No | ZIP/Postal Code |
| countryCode | String | Yes | Use ISO 3166-1 alpha-2 or alpha-3.  Stored in Expedia system as alpha-3. |

**rating**

Only star rating is displayed for a property. Rating data submitted will be reviewed and subject to revision by Expedia.

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| score | Decimal | Yes | Normalized Score, e.g. 4.0 |
| maxScore | Decimal | Yes | The maximum score possible for the rating scale, e.g. 5.0 if highest rating is 5 stars. |
| description | String | Yes | Only supported value is "Stars" |
| source | String | No | More descriptive information about the star rating. Indicate here if national or non-national rating and affiliation. |

**contact**

Contact set data are represented as a dictionary, with the following dictionary keys (strict checking against the key name).

| Dictionary Key | Required | Notes |
| -------------- | -------- | ----- |
| Property | Yes |  Contact Info for the physical property |
| ReservationManager | Yes | firstName, lastName, and **either** an email or fax number is required.  Property will fail onboarding if this information is not submitted.The firstName, lastName must be between 2 and 25 characters, inclusive, without whitespace-padding. Cannot contain Unicode.  |
| AlternateReservationManager | Yes | Phone number required - used as emergency (24hour) contact for customer booking issues. Property will fail onboarding if this information is not submitted. FirstName and LastName values are obtained from ReservationManager, if not provided. Prefix of "24hr- " is added to FirstName if field is not provided. The firstName, lastName must be between 2 and 25 characters, inclusive, without whitespace-padding. Cannot contain Unicode. |
| GeneralManager | No | If phone number provided, telesales inquiries about property amenities directed to this number instead of contacting the property directly. |
| PropertyExtranetUser | No | First Name, Last Name, email address required.  An account for Expedia Partner Central (EPC) will be created during the onboarding process and credentials will be sent to the email address submitted.  This EPC account can be used by the hotel to read and respond to user reviews and reports for the property via EPC extranet. Any content updates submitted via the EPC extranet can be overwritten by an update submitted via the Property API. |

*Description of Contact info accepted:*

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| firstName | String | Yes | Required for ReservationManager and PropertyExtranetUser, optional for others. Must be between 2 and 25 characters, inclusive, without whitespace-padding. Cannot contain Unicode. |
| lastName | String | Yes | Required for ReservationManager and PropertyExtranetUser, optional for others. Must be between 2 and 25 characters, inclusive, without whitespace-padding. Cannot contain Unicode. |
| phoneNumbers | Array of PhoneNumbers | See Notes | Phone required for Property, ReservationManager, AlternateReservationManager, GeneralManager |
| emails | Array of Strings | See Notes | Email required for ReservationManager. Must be well-formed Internet format and cannot contain Unicode. |

**phoneNumber**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| phoneNumberType | String | No | Strict checking against [this list of phone number types](./code-list.html#property-contact-phonenumber-phonenumbertype).  If no type submitted, then the default of 'Undefined' used. |
| countryAccessCode | String | No | Country Calling Code. Use ITU standard E.123 / E.164. |
| areaCode | String | No | Use Telephone numbering plan standards. |
| number | String | Yes | Include the country and area code within the submitted number. |

**content**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| locale | String | Yes | en-US must be used, no other language tag is supported |
| name | String | No | Property name for specified locale, e.g. en-US.  If none provided, then default property name will be used. |
| images | Array of Image | Yes | See Image below. |
| amenities | Array of Amenity | Yes | See Amenity below. |
| paragraphs | Array of Paragraph | No | See Paragraph below. |

**image**

We recommend all partners to abide to the Expedia Standards for images to ensure good content:

- Photo Quantity: A minimum of 3 images per property. For better conversion to bookable units, suggest sending 20 property photos.
- GuestRoom Coverage: 4 photos of each roomtype including 1 photo of the bathroom.
- Photo Quality: Images below 1000x1000 pixels will be rejected. To ensure your photos look beautiful on desktop, tablet, and mobile screens we require at least 2,880 pixels on the longest side. 

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| url | String | Yes | image URL.  Please note, Expedia would first have to whitelist your image host domains; please contact us to have this completed. |
| categoryCode | String | No | See [code list](./code-list.html#image-categories).  If none provided, Expedia will provide categorization. |
| name | String | No | Image Caption |

**amenity**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#property-amenities). Expedia requires atleast 10 amenities to be sent per Property |
| detailCode | String | See [code list](./code-list.html#property-amenities) | See [code list](./code-list.html#property-amenities) |
| value | Numeric | See [code list](./code-list.html#property-amenities) | See [code list](./code-list.html#property-amenities) |

**paragraph**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#paragraph-text) Paragraph text may require review by Expedia prior to publishing. Please refrain from using Paragraphs to call out Property Amenties. Use the Amenity codes instead. |
| value | String | Yes | Paragraph Text |

**propertyCollectedMandatoryFee**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#mandatory-fees) . Used to define Fees collected at the time of guest check-in. Please refrain from using this Property level fee attribute for fees that are to be collected at the time of Booking. If there are fees collected at the time of booking, please utilize the Rateplan level Service Fees (Refer Product API documentation for further details). |
| scope | String | Yes | See [code list](./code-list.html#mandatory-fees) |
| duration | String | Yes | See [code list](./code-list.html#mandatory-fees) |
| value | String | Yes | Fee amount in the property's currency. Example: 24.99 |
| startDate | String | No | If fee is only offered on specific days during the year, provide a recurring start & end date. |
| endDate | String | No |  |

**registrations**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| startDate | String | No | Enter the date in yyyy-mm-dd format |
| endDate | String | No | Enter the date in yyyy-mm-dd format |
| type | String | No | type is RENTAL_REGISTRATION |
| code | String | No | Please enter the registration ID/license ID for the property. Mostly used for Vacation Rental properties |

**policy**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#policies) |
| value | String | Yes | |

**inventorySettings**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| rateAcquisitionType | String | No | See [code list](./code-list.html#property-inventorysetting-rateacquisitiontype)|
| pricingModel | String | No | See [code list](./code-list.html#property-inventorysetting-pricingmodel)|
| distributionModels | Array | No | See [code list](./code-list.html#property-inventorysetting-distributionmodels)|
| taxInclusive | Boolean | No | Please note, you would have to specify this at Rateplan level as well when you create them using Product API. |

**tax**

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./code-list.html#taxes) |
| detailCode | String | See [code list](./code-list.html#taxes) | See [code list](./code-list.html#taxes) |
| value | Number | Yes |



**Response Body**

After submitting a Property API request, the response will acknowledge receipt of the message or return an error. The response body will echo back the values of *the request received* and will include the following additional attributes:

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| expediaId | Int | Expedia's unique ID for the property. |
| provider | String | Name of the provider associated with the property (this is your organization). |
| createdUtc | DateTime | DateTime the property was created in Expedia's Lodging System. |
| modifiedUtc	| DateTime | Last Modified time in Expedia's Lodging System. |
| status | String | callback URL to get property status.  See [Get Property Status](./api-definition.html#getpropertystatus) for more information. |

**Example Response**

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
            "currencyCode": "EUR",
            "billingCurrencyCode": "EUR",
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
                    "scope": "AMOUNT_PER_PERSON",
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
                "rateAcquisitionType": "NET_RATE",
                "pricingModel": "PER_DAY",
                "taxInclusive":false
            },
            "attributes": [
                 {
                 "code": "TOTAL_ROOMS",
                 "value": "8"
                 },
                {
                "code": "NUMBER_OF_BEDROOMS",
                 "value": "4"
                 },
                {
                 "code": "NUMBER_OF_BATHROOMS",
                "value": "3"
                }
            ],
            "registrations": [{
            "startDate": "2019-03-10",
            "endDate": "2019-09-10",
            "type": "RENTAL_REGISTRATION",
            "code": "1234-6"
            },{
            "startDate": "2019-09-11",
            "endDate": "2020-07-10",
            "type": "RENTAL_REGISTRATION",
            "code": "1222-6"
            }]
            "status": {
                "href": "/properties/v1/provider-a/1/status"
            }
        }
    ]
}
```
## Get Property Details

Presents the provider's view of the property, which can be used by the Property API client to construct an update overlay message.  The response does not necessarily show any fields that have been moderated (modified) by Expedia, such as star rating, freeform paragraph text, taxes, latitude/longitude coordinates, or address.

**Example Request**

GET /properties/v1/mycompany/1234

**Example Response**

```javascript

{
  "entity": {
    "providerPropertyId": "1234",
    "provider": "mycompany",
    "expediaId": 11632,
    "name": "The Grand Inn",
    "latitude": "53.3322239619385",
    "longitude": "-3.1883265505371",
    "createdUtc": "2015-11-26T12:29:54.311Z",
    "modifiedUtc": "2015-11-30T22:06:27.865Z",
    "providerPropertyUrl": "www.thegrandinn.com",
    "structureType": "HOTEL",
    "currencyCode": "GBP",
    "billingCurrencyCode": null,
    "timeZone": "Europe/London",
    "addresses": [
      {
        "line1": "12 Ires Road",
        "line2": "",
        "city": "Glasgow",
        "state": "",
        "postalCode": "G12 8NN",
        "countryCode": "GBR"
      }
    ],
    "ratings": [
      {
        "score": 5,
        "maxScore": 5,
        "source": "Visit Scotland",
        "description": "5 STARS"
      }
    ],
    "contacts": {
      "Property": {
        "phoneNumbers": [
          {
            "phoneNumberType": "Phone",
            "countryAccessCode": "44",
            "areaCode": "",
            "number": "1211234269"
          },
          {
            "phoneNumberType": "Fax",
            "countryAccessCode": "44",
            "areaCode": "",
            "number": "121336311"
          }
        ]
      },
      "ReservationManager": {
        "firstName": "John",
        "lastName": "Doe",
        "phoneNumbers": [
          {
            "phoneNumberType": "Phone",
            "countryAccessCode": "44",
            "areaCode": "",
            "number": "1212231567"
          },
          {
            "phoneNumberType": "Fax",
            "countryAccessCode": "44",
            "areaCode": "",
            "number": "1217634321"
          }
        ]
      },
      "AlternateReservationManager": {
        "firstName": "John",
        "lastName": "Doe",
        "phoneNumbers": [
          {
            "phoneNumberType": "Phone",
            "countryAccessCode": "44",
            "areaCode": "",
            "number": "1911934967"
          },
          {
            "phoneNumberType": "Fax",
            "countryAccessCode": "44",
            "areaCode": "",
            "number": "1996534321"
          }
        ]
      }
    },
    "airports": [
      {
        "code": "GLA",
        "name": "Glasgow"
      }
    ],
    "contents": [
      {
        "locale": "en-US",
        "name": null,
        "providerPropertyUrl": null,
        "images": [
          {
            "url": "https://images.mycompany.com/1234/1234main.jpg",
            "categoryCode": "FEATURED_IMAGE",
            "caption": "Main Image"
          },
          {
            "url": "https://images.mycompany.com/1234/1234double.jpg",
            "categoryCode": "GUESTROOM",
            "caption": "Double Room Image"
          }
        ],
        "amenities": [
          {
            "code": "WIFI",
            "detailCode": "FREE",
            "value": 0
          },
          {
            "code": "BREAKFAST",
            "detailCode": "FREE",
            "value": null
          },
          {
            "code": "SELF_PARKING",
            "detailCode": "FREE",
            "value": 0
          },
          {
            "code": "POOL_INDOOR",
            "detailCode": null,
            "value": null
          },
          {
            "code": "PLAYGROUND",
            "detailCode": null,
            "value": null
          },
          {
            "code": "GARDEN",
            "detailCode": null,
            "value": null
          }
        ],
        "paragraphs": [
          {
            "code": "DESCRIPTION",
            "value": "This hotel is really really nice"
          },
          {
            "code": "CHECKIN_INSTRUCTIONS",
            "value": "Government-issued photo identification and a credit card are required at check-in for incidental charges."
          }
        ]
      }
    ],
    "propertyCollectedMandatoryFees": [
      {
        "code": "RESORT_FEE",
        "scope": "AMOUNT_PER_PERSON",
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
        "code": "ACCEPTS_VISA",
        "detailCode": null,
        "value": "5 GBP"
      },
      {
        "code": "ACCEPTS_MASTERCARD",
        "detailCode": null,
        "value": "5 GBP"
      },
      {
        "code": "CHECKIN_START_TIME",
        "detailCode": null,
        "value": "11:00 AM"
      },
      {
        "code": "CHECKIN_END_TIME",
        "detailCode": null,
        "value": "11:00 PM"
      },
      {
        "code": "CHECKOUT_TIME",
        "detailCode": null,
        "value": "10:00 AM"
      },
      {
        "code": "BOOKING_CUTOFF_TIME",
        "detailCode": null,
        "value": "1:00 PM"
      },
      {
        "code": "BOOKING_CUTOFF_DAY",
        "detailCode": null,
        "value": "SAME_DAY"
      },
      {
        "code": "CANCELLATION_CUTOFF_TIME",
        "detailCode": null,
        "value": "2:00 PM"
      },
      {
        "code": "MINIMUM_CHECKIN_AGE",
        "detailCode": null,
        "value": "18"
      },
      {
        "code": "SMOKING_POLICY",
        "detailCode": "SMOKE_FREE_PROPERTY",
        "value": null,
      },
      {
        "code": "CATERS_TO",
        "detailCode": "NO_BACHELOR_PARTIES",
        "value": null,
      },
      {
        "code": "CATERS_TO",
        "detailCode": "NO_BACHELORETTE_PARTIES",
        "value": null,
      }
    ],
      "inventorySettings": {
            "rateAcquisitionType": "SELL_LAR",
            "pricingModel": "PER_DAY",
            "onStopSell": true
        },
    "attributes": [
       {
            "code": "TOTAL_ROOMS",
            "value": "8"
        },
        {
            "code": "NUMBER_OF_BEDROOMS",
            "value": "4"
        },
        {
            "code": "NUMBER_OF_BATHROOMS",
            "value": "3"
        }
    ],
    "status": {
      "href": "/properties/v1/mycompany/10/status"
    }
  }
}

```
## Get Property Status

The onboarding process is an asynchronous workflow, so this endpoint should be polled no more than once an hour to retrieve the latest status of the property and its assigned Expedia ID.  Please note that the Product API cannot be called to add new room types/rate plans until after a property has reached 'OnboardingSucceeded' status.

**Example Request**

GET /properties/v1/mycompany/1234/status

**Example Response**

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

## Update a Property by Expedia Property ID
Updating a property that is already onboarded is a similar operation as the original onboarding - a full overlay of a single property is required.  It is recommended that you GET the property details first, modify the fields that you'd like to change (and/or add new), then send the entire json document as a PUT request to update the property.  Please note that PATCH is not supported at this time - a complete overlay is required for updates.

**Example Request**

PUT /properties/v1/mycompany
```javascript
{
    "providerPropertyId": "1289472",
    "name": "Peach Inn",
    "latitude": "23.3752",
    "longitude": "-81.3261",
    "providerPropertyUrl": "http://example.org",
    "structureType": "Hotel",
    "currencyCode": "USD",
    "billingCurrencyCode": "USD",
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
            "scope": "AMOUNT_PER_PERSON",
            "duration": "PER_NIGHT",
            "value": 25.99,
            "startDate": null,
            "endDate": null
        },
        {
            "code": "DEPOSIT_OTHER",
            "scope": "BREAKAGE",
            "duration": "PER_DAY",
            "startDate": "2019-09-20",
            "endDate": "2019-09-28",
            "value": "14.77"
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
            "code": "FORMS_OF_DEPOSIT_ACCEPTED",
            "detailCode": "CREDIT_CARDS_ONLY",
            "value": null
        },
        {
            "code": "DEPOSIT_OTHER",
            "detailCode": "CASH_ONLY",
            "value": null
        }
    ],
    "inventorySettings": {
        "rateAcquisitionType": "NET_RATE",
        "pricingModel": "PER_DAY",
        "taxInclusive":false
    },
    "attributes": [
        {
            "code": "TOTAL_ROOMS",
            "value": "8"
        },
        {
            "code": "NUMBER_OF_BEDROOMS",
            "value": "4"
        },
        {
            "code": "NUMBER_OF_BATHROOMS",
            "value": "3"
        }
    ],
    "registrations": [{
        "startDate": "2019-03-10",
        "endDate": "2019-09-10",
        "type": "RENTAL_REGISTRATION",
        "code": "1234-6"
        },{
        "startDate": "2019-09-11",
        "endDate": "2020-07-10",
        "type": "RENTAL_REGISTRATION",
        "code": "1222-6"
        }]
}

```

## Deactivate/Delete a Property
Sending a DELETE for an onboarded property will deactivate the property in Expedia's system.  Content will not be deleted; only the property's state will be changed to inactive.  The property can later be re-enabled using the Set Property Details API call. The response to the delete request will be a 200/OK and the response will echo back the details of the property which was just deleted.


**Example Request**

DELETE /properties/v1/mycompany/1234


**Example Response**
```javascript

{
  "entity": [
    {
      "providerPropertyId": "1234",
      "provider": "mycompany",
      "expediaId": null,
      "name": "Property Name",
      "latitude": "21.3752",
      "longitude": "-88.3261",
      "createdUtc": "2015-11-20T00:16:16.819Z",
      "modifiedUtc": "2015-11-20T15:42:28.605Z",
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
          "countryCode": "IRL"
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
      "contents": [
        {
          "locale": "en-US",
          "name": "Localized Property Name",
          "providerPropertyUrl": null,
          "images": [
            {
              "url": "images.xyz.com/mainImage.jpg",
              "categoryCode": "FEATURED_IMAGE",
              "caption": "Main Image"
            },
          ],
          "amenities": [
            {
              "code": "BREAKFAST",
              "detailCode": "FREE",
              "value": null
            },
            {
              "code": "WIFI",
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
              "code": "CHECKIN_INSTRUCTIONS",
              "value": "Special check-in instructions."
            }
          ]
        }
      ],
      "propertyCollectedMandatoryFees": [
        {
          "code": "RESORT_FEE",
          "scope": "AMOUNT_PER_PERSON",
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
          "detailCode": null,
          "value": "18"
        },
        {
          "code": "CHECKIN_TIME",
          "detailCode": null,
          "value": "2:00 PM"
        },
        {
          "code": "CHECKOUT_TIME",
          "detailCode": null,
          "value": "11:00 AM"
        },
        {
          "code": "CANCELLATION_CUTOFF_TIME",
          "detailCode": null,
          "value": "6:00 PM"
        }
      ],
      "attributes": [
         {
            "code": "TOTAL_ROOMS",
            "value": "8"
        },
        {
            "code": "NUMBER_OF_BEDROOMS",
            "value": "4"
        },
        {
            "code": "NUMBER_OF_BATHROOMS",
            "value": "3"
        }
      ]
    }
  ]
}

```
## Property Manager Readiness

Provides the Provider information on which Property Managers are configured on Expedia's end and is ready to be Onboarded. For the Centralized providers that do not require a PM level configuration on our end, an empty array would be returned.  

**Example Request**

GET /providers/v1/mycompany

**Example Response**

 ```javascript

 {
       entity: {
              "name": "mycompany",
              "propertyManagers": [
                    {
                        "name": "PMname1",
                        "billingCurrencyCode": "USD" ,
                        "sameDayCancellationCutoffTime": "23:59:00",
                        "cutoffDay": "SameDay",
                        "cutoffTime": "23:59:00",
                        "minimumCheckInAge": 21,
                        "cutoffDefault":0
                    }
                ]
       }
}
```
**propertyManagers**

| Attribute | Type | Notes |
| --------- | ---- | ----- |
| name | String | The Property Manager name as configured within the Expedia systems. This is the same name Providers should use for 'PROPERTY_MANAGER' field when Onboarding. |
| billingCurrencyCode | String | Use ISO4217. Currency code to be used for pricing and billing and has to be one of the currencies set up by your Account Manager for billing. |
| sameDayCancellationCutoffTime | String | Time until which cancellations are accepted for this Property Manager hh:mm:ss |
| cutoffDay | Enum | Indicates until which day bookings can be made for this Property Manager. Possible values are SameDay and NextDay.  |
| cutoffTime | String | Time until which bookings are accepted for this Property Manager hh:mm:ss |
| minimumCheckInAge | Number | The minimum check in age accepted for this Property Manager |
| cutoffDefault | Number | Advanced Purchase Restrictions for this Property Manager. 0 Means SameDay bookings are possible. 5 means the property manager will only accept bookings with check-in date, 5 days from today |
