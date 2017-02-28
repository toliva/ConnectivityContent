# Code Lists

## SetPropertyDetails Codes

### property.structureType

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

### Content Attribute & Detail Codes

A **DRAFT** version of the SetPropertyDetails code list is available for download [here](/files/PropertyAPICodeList0.4.xlsx)

### SetPropertyDetails Error Codes

To be added.

## GetPropertyStatus Codes

The reasonCodes field represents all the reasons the property has a particular status.

| Status Code | Reason Codes |
| ----------- | ------------ |
| Onboarding Failed | PropertyDisabled |
| | MissingExpediaId |
| | MissingContactInfo |
| | BookableProvidersExist |
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
