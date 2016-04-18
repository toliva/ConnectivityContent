# SetPropertyDetails Response

After submitting a Property API request, the response will acknowledge receipt of the message or return an error.  More information can be found here.

## Response Body

The response body will echo back the values of *the request received* and will include the following additional attributes:

| Attribute | Type | Description |
| expediaId | Int | Expedia's unique ID for the property. |
| provider | String | Name of the provider associated with the property (this is your organization). |
| createdUtc | DateTime | DateTime the property was created in Expedia's Lodging System. |
| modifiedUtc	| DateTime | Last Modified time in Expedia's Lodging System. |
| status | String | callback URL to get property status.  See [GetPropertyStatus](/06-GetPropertyStatus) for more information. |

## Example SetPropertyDetails Response

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
