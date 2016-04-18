# SetPropertyDetails Request

Use the SetProperty method for the following use cases

## Onboard a new property

### Request

- Information for more than one property is accepted in the request
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

Required Fields for Onboarding
The Property API does not require every field to be submitted to support onboarding.  Required fields are noted in the table below.

### property

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

#### address

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| line 1 | String | Yes | Number and Civic address. This is the address used by travelers to reach your property. Refrain from using informal instructions like “(across from the mall)”. If your address is longer than 40 characters, we recommend you continue with Line2. You will not produce a validation error for longer addresses, but the value may be parsed inaccurately. |
| line 2 | String | No | |
| city | String | Yes | Town/City |
| postalCode | String | No | ZIP/Postal Code |
| countryCode | String | Yes | Use ISO 3166-1 alpha-2 or alpha-3.  Stored in Expedia system as alpha-3. |

#### rating

Only star rating is displayed for a property. Rating data submitted will be reviewed and subject to revision by Expedia.

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| score | Decimal | Yes | Normalized Score, e.g. 4.0 |
| maxScore | Decimal | Yes | he maximum score possible for the rating scale, e.g. 5.0 if highest rating is 5 stars. |
| description | String | Yes | Only supported value is "Stars" |
| source | String | No | More descriptive information about the star rating. Indicate here if national or non-national rating and affiliation. |

#### contact

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

*phoneNumber*

| Attribute | Type | Required | Notes |
| phoneNumberType | String | No | See [code list](./CodeList#phoneNumberType).  If no type submitted, then 'Undefined' used. |
| countryAccessCode | String | No | Country Calling Code. Use ITU standard E.123 / E.164. |
| areaCode | String | No | Use Telephone numbering plan standards. |
| number | String | Yes | Include the country and area code within the submitted number. |

#### content

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| locale | String | Yes | Use IETF language tag standard, e.g. en-US |
| name | String | No | Property name for specified locale, e.g. en-US.  If none provided, then default property name will be used. |
| images | Array of Image | Yes | See Image below. |
| amenities | Array of Amenity | No | See Amenity below. |
| paragraphs | Array of Paragraph | No | See Paragraph below. |

*image*

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| url | String | Yes | image URL.  A property needs at least 1 image to complete onboarding.  Images below 350x350 pixels will be rejected. |
| categoryCode | String | No | See [code list](./CodeList#categoryCode) If none provided, Expedia will provide categorization. |
| name | String | No | Image Caption |

*amenity*

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./CodeList#amenityCode) |
| detailCode | String | See [code list](./CodeList#amenityCode) | See [code list](./CodeList#amenityCode) |
| value | Numeric | See [code list](./CodeList#amenityCode) | See [code list](./CodeList#amenityCode) |

*paragraph*

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./CodeList#paragraph) Paragraph text may require review by Expedia prior to publishing. |
| value | String | Yes | Paragraph Text |

#### propertyCollectedMandatoryFee

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./CodeList#mandatoryfees) |
| scope | String | Yes | See [code list](./CodeList#mandatoryfees) |
| duration | String | Yes | See [code list](./CodeList#mandatoryfees) |
| value | String | Yes | Fee amount in the property's currency. Example: 24.99 |
| startDate | String | No | If fee is only offered on specific days during the year, provide a recurring start and end date. |
| endDate | String | No | |

#### policy

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./CodeList#policy) |
| value | String | Yes | |

#### inventory setting

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| rateAcquisitionType | String | No | See [code list](./CodeList#inventorySetting)|

#### tax

| Attribute | Type | Required | Notes |
| --------- | ---- | -------- | ----- |
| code | String | Yes | See [code list](./CodeList#tax) |
| detailCode | String | See [code list](./CodeList#tax) | See [code list](./CodeList#tax) |
| value | Number | Yes |
