# Code Lists

### Content Attribute & Detail Codes

The SetPropertyDetails code list is available for download [here](/files/PropertyAPICodeList0.4.xlsx)

## SetPropertyDetails Codes

### <div id=#property.structureType> property.structureType </div>

| Code |
| ---- |
| HOTEL |
| MOTEL |
| APART_HOTEL|
| BED_AND_BREAKFAST |
| INN |
| APARTMENT |
| CONDO |
| COTTAGE |

### property.contact.phoneNumber.phoneNumberType

| Code |
| ---- |
| MOBILE |
| PHONE |
| FAX |
| USRESERVATIONSTOLLFREE |
| INTERNATIONALRESERVATIONS |

### property.inventorySetting.rateAcquisitionType

| Code | Notes |
| ---- | ----- |
| SELL_LAR | Rate inclusive of compensation. |
| NET_RATE | Rate without compensation |

### property.inventorySetting.distributionModels

| Code |
| ---- |
| EXPEDIA_COLLECT |
| HOTEL_COLLECT |

Properties that have opted into the Expedia Traveler Preference program (ETP) will have both EXPEDIA_COLLECT and HOTEL_COLLECT specified.

### SetPropertyDetails Error Codes

To be added.

## GetPropertyStatus Codes

The reasonCodes field represents all the reasons the property has a particular status.

| Status Code | Reason Codes |
| ----------- | ------------ |
| Onboarding Failed | PropertyDisabled |
| | MissingExpediaId |
| | MissingContactInfo |
| | InvalidPropertyName |
| | InvalidCoordinates |
| | NoValidAddresses |
| | NoValidPhoneNumbers |
| | InvalidCountryCode |
| | UnsupportedLocation |
| | PropertySuspended |
| | EpcOnboardingInProgress |
| | OfacCheckFailed |
| | MissingBillingCurrencyCode |
| | InternalError |
| | DeclinedOnReview |
| PendingReview | BookableProvidersExist |
| PropertySaved | None |
| ExpediaIdAssigned | None |
| FinanceSetupPending | None |
| VendorIdAssigned | None |
| OnboardingSucceeded | None |

### GetPropertyStatus Error Codes

None

## GetPropertyDetails Codes

None

### GetPropertyDetails Error Codes

None
