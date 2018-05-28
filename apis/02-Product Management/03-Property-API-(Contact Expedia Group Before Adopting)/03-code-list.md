# Code Lists

### Content Attribute & Detail Codes

The SetPropertyDetails code list is available for download [here](/files/PropertyAPICodeList0.4.xlsx)

## SetPropertyDetails Codes

### <div id=#property.structureType> property.structureType </div>

| Code |
| ---- |
| HOTEL |
| MOTEL |
| VILLA |
| APART_HOTEL|
| BED_AND_BREAKFAST |
| INN |
| APARTMENT |
| CONDO |
| COTTAGE |
| AGRITOURISM |
| ALL_INCLUSIVE |
| CABIN |
| CAMPSITE |
| CASTLE |
| CHALET |
| CONDOMINIUM_RESORT |
| COUNTRY_HOUSE |
| CRUISE |
| GUEST_HOUSE |
| HOLIDAY_PARK |
| HOSTEL |
| HOTEL_RESORT |
| HOUSE_BOAT |
| LODGE |
| PALACE |
| PENSION |
| PRIVATE_VACATION_HOME |
| RANCH |
| RESIDENCE |
| RYOKAN |
| RIAD |
| SAFARI |
| TOWNHOUSE |
| TREE_HOUSE |


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

### property.inventorySetting.pricingModel

| Code |
| ---- |
| PER_DAY |
| OCCUPANCY_BASED_CHILDREN_ALWAYS_EXTRA |
| OCCUPANCY_BASED_CHILDREN_REGULAR_OCCUPANTS |

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
| | InvalidProperty |
| | MissingBillingCurrencyCode |
| | InternalError |
| | DeclinedOnReview |
| PendingReview | BookableProvidersExist |
| | BusinessModelChanging |
| | ContractTermsChanging |
| | CurrencyCodeChanging |
| | RateAcquisitionTypeChanging |
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
