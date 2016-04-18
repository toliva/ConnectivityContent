# Code Lists

## SetPropertyDetails

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
| UNDEFINED (DEFAULT) |

### property.inventorySetting.rateAcquisitionType

| Code | Notes |
| ---- | ----- |
| SELL_LAR | Rate inclusive of compensation. |
| NET_RATE | Rate without compensation |

## SetPropertyDetails

[Download the DetailCodeList Excel.](/files/PropertyAPICodeList0.4.xlsx)

## GetPropertyStatus

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
