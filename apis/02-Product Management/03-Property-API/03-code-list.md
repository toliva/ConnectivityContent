# Code Lists

### Content Attribute & Detail Codes

The Set Property Details code list is available for download [here](/files/PropertyAPICodeList0.4.xlsx)

## Set Property Details Codes

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

## Get Property Status Codes

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

## Get Property Status Error Codes

None

## Get Property Details Codes

None

## Get Property Details Error Codes

None

<a name="/definitions/property-amenities"></a>
## Property Amenities
The amenity codes/detail codes and values have been split into sub sections with names to facilitate discovery and understanding.

<a name="/definitions/internet-access"></a>
### Internet Access

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | ---------------------- | ---------------------- | ----- |
| WIFI_INTERNET | Yes  | FREE | No VALUE required |
| | | SURCHARGE |  |
| | | SURCHARGE_AMT | Send VALUE |
| | | SURCHARGE_PER_STAY | Send VALUE |
| | | SURCHARGE_PER_NIGHT | Send VALUE |
| | | SURCHARGE_PER_DAY | Send VALUE |
| | | SURCHARGE_PER_WEEK | Send VALUE |
| | | SURCHARGE_PER_MINUTE | Send VALUE |
| | | SURCHARGE_PER_HOUR | Send VALUE |
| | | SURCHARGE_PER_24HOUR_PERIOD | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_HOURS | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_MINUTES | Send VALUE |
| WIRED_INTERNET | Yes  | FREE | No VALUE required |
| | | SURCHARGE |  |
| | | SURCHARGE_AMT | Send VALUE |
| | | SURCHARGE_PER_STAY | Send VALUE |
| | | SURCHARGE_PER_NIGHT | Send VALUE |
| | | SURCHARGE_PER_DAY | Send VALUE |
| | | SURCHARGE_PER_WEEK | Send VALUE |
| | | SURCHARGE_PER_MINUTE | Send VALUE |
| | | SURCHARGE_PER_HOUR | Send VALUE |
| | | SURCHARGE_PER_24HOUR_PERIOD | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_HOURS | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_MINUTES | Send VALUE |

<a name="/definitions/children"></a>
### Children

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | --------------------- | ----- |
| BABYSITTING | Yes  | FREE |  |
| | | SURCHARGE | |
| | | GENERIC | |
| CHILDRENS_CLUB | Yes  | FREE |  |
| | | SURCHARGE | |
| | | GENERIC | |
| SUPERVISED_ACTIVITIES | Yes  | FREE |  |
| | | SURCHARGE | |
| | | GENERIC | |
| PLAYGROUND | No  | |  |

<a name="/definitions/accessibility"></a>
### Accessibility

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | ---------------------- | ---------------------- | ----- |
| ACCESSIBLE_BATHROOM | No  | |  |
| BRAILLE_SIGNAGE | No  | |  |
| EQUIPMENT_FOR_DEAF | No  | |  |
| ACCESSIBLE_ROOMS | No  | |  |
| ACCESSIBLE_PARKING | No  | |  |
| ACCESSIBLE_PATH_OF_TRAVEL | No  | |  |
| ROLL_IN_SHOWER | No  | |  |
| ELEVATOR | No  | |  |

<a name="/definitions/business"></a>
### Business

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| BUSINESS_CENTER | Yes  | AVAILABLE_24HOURS |  |
| | No | GENERIC | |
| CONFERENCE_ROOMS | Yes  | MULTIPLE |  |
| | No | SINGULAR | |
| | | GENERIC | |
| CONFERENCE_SPACE | No  | SQ_FEET |  |
| | | SQ_METERS | |
| | | GENERIC | |
| NEWSPAPERS_IN_LOBBY | Yes  | FREE |  |
| | | SURCHARGE | |
| COMPUTER_STATION | No  |  |  |

<a name="/definitions/dining-or-breakfast"></a>
### Dining or Breakfast

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| LOUNGE | Yes  | MULTIPLE |  |
| |  | SINGULAR | |
| BREAKFAST | Yes  | FREE | No VALUE required |
| |  | SURCHARGE | Send Amount in VALUE |
| |  | DINING_FREEBREAKFAST_BUFFET | |
| |  | DINING_FREEBREAKFAST_CONTINENTAL | |
| |  | DINING_FREEBREAKFAST_COOKED | |
| |  | DINING_FREEBREAKFAST_ENGLISH | |
| |  | DINING_FREEBREAKFAST_FULL | |
| |  | DINING_FREEBREAKFAST_HOT_BUFFET | |
| |  | DINING_FREEBREAKFAST_TO_GO | |
| |  | DINING_BREAKFAST_SURCH_BUFFET | Send Amount in VALUE |
| |  | DINING_BREAKFAST_SURCH_CONTINENT | Send Amount in VALUE |
| |  | DINING_BREAKFAST_SURCH_COOKED | Send Amount in VALUE |
| |  | DINING_BREAKFAST_SURCH_ENGLISH | Send Amount in VALUE |
| |  | DINING_BREAKFAST_SURCH_FULL | Send Amount in VALUE |
| |  | LOCAL_CUISINE_BREAKFAST_(SURCHARGE) | Send Amount in VALUE |
| |  | FREE_BREAKFAST_(LOCAL_CUISINE) | |
| |  | FEE | Send Amount in VALUE |
| COFFEE_SHOP | Yes  | MULTIPLE |  |
| |  | SINGULAR | |
| RESTAURANT | Yes  | MULTIPLE |  |
| |  | SINGULAR | |
| BREAKFAST_HOURS_START_TIME | No  | MULTIPLE | Send time as HH:MI AM/PM.  Example: 10:30 AM |
| BREAKFAST_HOURS_END_TIME | No  | MULTIPLE | Send time as HH:MI AM/PM.  Example: 10:30 AM |

<a name="/definitions/fitness-wellness"></a>
### Fitness & Wellness

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| FITNESS_FACILITIES | Yes  | AVAILABLE_24HOURS |  |
| |  | GENERIC | |
| HEALTH_CLUB | Yes  | AVAILABLE_24HOURS |  |
| |  | GENERIC | |
| SPA | Yes  | AROMATHERAPY |  |
| |  | AYURVEDIC | |
| |  | BODY_SCRUBS | |
| |  | BODY_TREATMENTS | |
| |  | BODY_WRAPS | |
| |  | FACIAL_TREATMENTS | |
| |  | HYDROTHERAPY | |
| |  | NUMBER_OF_SPA_ROOMS | |
| |  | COUPLES_SPA_ROOMS | |
| |  | OUTDOOR_TREATMENT_AREA | |
| |  | THALASSOTHERAPY | |
| |  | TURKISH_BATH | |
| |  | DETOXIFICATION_WRAP | |
| |  | REFLEXOLOGY | |
| |  | OPEN_DAILY | |
| |  | OPEN_SELECT_DAYS | |
| |  | HOT_SPRINGS | |
| |  | SAUNA_IN_SPA | |
| |  | MUD_BATH_IN_SPA | |
| |  | SPA_TUB_IN_SPA | |
| |  | STEAM_ROOM_IN_SPA | |
| |  | MIN_AGE_ALLOWED_IN_SPA | Send VALUE |
| |  | MIN_AGE_ALLOWED_IN_SPA_WITH_ADULT | Send VALUE |
| |  | ADVANCED_BOOKING | |
| |  | MANICURE_PEDICURE | |
| FULL_SERVICE_SPA | No | |  |
| SAUNA | No | |  |

<a name="/definitions/guest-services"></a>
### Guest Services

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| CONCIERGE | No  |  |  |
| DRY_CLEANING | No  |  |  |
| LAUNDRY_FACILITIES | No  |  |  |
| LUGGAGE_STORAGE | No  |  |  |
| SAFE_DEPOSIT_AT_FRONT_DESK | No  |  |  |
| TOUR_ASSISTANCE | No  |  |  |
| GROCERY_SHOPPING_SERVICE | No  |  |  |
| GROCERY_STORE | No  |  |  |
| HAIR_SALON | No  |  |  |
| GIFT_SHOP_OR_NEWS | No  |  |  |
| BELLHOP_PORTER | No  |  |  |
| WEDDING_SERVICES | No  |  |  |
| ATM | No  |  |  |
| SHOPPING | No  |  |  |

<a name="/definitions/outdoor-areas"></a>
### Outdoor Areas

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| BBQ_GRILLS | No  |  |  |
| GARDEN | No  |  |  |
| PICNIC_AREA | No  |  |  |
| TERRACE | Yes  | TERRACE |  |
| | | ROOFTOP |  |
| MARINA | No  |  |  |

<a name="/definitions/parking-or-transport"></a>
### Parking or Transport

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| AIRPORT_SHUTTLE_TYPE | Yes  | DROP_OFF_FREE  |  |
|  |   | DROP_OFF_SURCHARGE |  |
|  |   | PICKUP_FREE |  |
|  |   | PICKUP_SURCHARGE |  |
|  |   | ROUNDTRIP_FREE |  |
|  |   | ROUNDTRIP_SURCHARGE |  |
|  |   | GENERIC |  |
| AIRPORT_SHUTTLE_TIME | Yes  | AVAILABLE_24HOURS  |  |
|  |   | AVAILABLE_ONREQUEST |  |
|  |   | AVAILABLE_DURING_SCHEDULED_TIMES |  |
|  |   | CONTACT_PROPERTY_PRIOR_TO_ARRIVAL  |  |
| AIRPORT_SHUTTLE_FEE_ADULT | Yes | FEE_AMT | Send VALUE |
|  |   | FEE_SCOPE_PER_PERSON | Send VALUE |
|  |   | FEE_SCOPE_PER_ROOM | Send VALUE |
|  |   | FEE_SCOPE_PER_VEHICLE | Send VALUE |
|  |   | FEE_SCOPE_DURATION_ROUNDTRIP | Send VALUE |
|  |   | FEE_SCOPE_DURATION_ONE_WAY | Send VALUE |
| AIRPORT_SHUTTLE_FEE_CHILD | Yes | FEE_CHILD_AMT | Send VALUE |
|  |   | FEE_CHILD_DURATION_ROUNDTRIP | Send VALUE |
|  |   | FEE_CHILD_DURATION_ONE_WAY | Send VALUE |
|  |   | FEE_CHILD_MIN_AGE | Send VALUE |
|  |   | FEE_CHILD_MAX_AGE | Send VALUE |
| AREA_SHUTTLE | Yes | FREE |  |
|  |   | SURCHARGE | Send VALUE |
|  |   | GENERIC | |
| AREA_SHUTTLE_DISTANCE | Yes | DISTANCE | Send VALUE |
|  |   | DISTANCE_TYPE_MILES | Send VALUE |
|  |   | DISTANCE_TYPE_KM | Send VALUE |
|  |   | DISTANCE_TYPE_METERS | Send VALUE |
| SELF_PARKING | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
|  |  | SURCHARGE_AMT | Send VALUE |
|  |  | SURCHARGE_PER_DAY | Send VALUE |
|  |  | SURCHARGE_PER_NIGHT | Send VALUE |
|  |  | SURCHARGE_PER_STAY | Send VALUE |
|  |  | SURCHARGE_PER_WEEK | Send VALUE |
| SKI_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| EXTENDED_PARKING | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| RV_PARKING | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| OFFSITE_PARKING | Yes | DISCOUNT_RATES_AVAILABLE |  |
|  |  | RESERVATIONS_REQUIRED |  |
| PARKING_HEIGHT_RESTRICTIONS | No |  |  |
| PARKING_LIMITED_SPACES_AVAILABLE | No |  |  |
| FREE_PARKING_NEARBY | No |  |  |
| ELECTRIC_CAR_CHARGING_STATION | No |  |  |
| BEACH_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| SHOPPING_CENTER_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| CASINO_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| THEME_PARK_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
| CRUISE_TERMINAL_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
|  |  | CONTACT_PROPERTY_PRIOR_TO_ARRIVAL |  |
| FERRY_TERMINAL_SHUTTLE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
|  |  | CONTACT_PROPERTY_PRIOR_TO_ARRIVAL |  |
| TRAIN_STATION_PICKUP_SERVICE | Yes | FREE |  |
|  |  | SURCHARGE | Send VALUE |
|  |  | CONTACT_PROPERTY_PRIOR_TO_ARRIVAL |  |
| MUST_CONTACT_PROPERTY_FOR_PICKUP | Yes | ONARRIVAL |  |
|  |  | 24_HOURS_PRIOR_TO_ARRIVAL |  |
|  |  | 48_HOURS_PRIOR_TO_ARRIVAL |  |
|  |  | 72_HOURS_PRIOR_TO_ARRIVAL |  |

<a name="/definitions/pool"></a>
### Pool

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| POOL_CHILDRENS | No |  |  |
| POOL_INDOOR | Yes | MULTIPLE | Send VALUE |
|  |  | SINGULAR |  |
| POOL_OUTDOOR | Yes | MULTIPLE | Send VALUE |
|  |  | SINGULAR |  |
| POOLSIDE_BAR | Yes | MULTIPLE | Send VALUE |
|  |  | SINGULAR |  |

<a name="/definitions/recreation"></a>
### Recreation

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| BEACH_ACCESS | Yes | ON_PRIVATE_BEACH |  |
| |  | NEAR_PRIVATE_BEACH |  |
| |  | ON_PUBLIC_BEACH |  |
| |  | NEAR_PUBLIC_BEACH |  |
| BICYCLE_RENTALS | Yes | ONSITE_FREE |  |
| |  | ONSITE_SURCHARGE |  |
| |  | NEARBY_FREE |  |
| |  | NEARBY_SURCHARGE |  |
| GOLFING | Yes | ONSITE | Send VALUE |
|  |  | ADJACENT |  |
| TENNIS_INDOOR | Yes | MULTIPLE | Send VALUE |
|  |  | SINGLE |  |
| TENNIS_OUTDOOR | Yes | MULTIPLE | Send VALUE |
|  |  | SINGLE |  |  

<a name="/definitions/entertainment"></a>
### Entertainment

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| CASINO | No | ONSITE |  |
| NIGHTCLUB | No | ONSITE |  |
| LIBRARY | No |  |  |
| GAME_ROOM | No |  |  |
| POOL_TABLE | No |  |  |
| WINERY | No |  |  |

<a name="/definitions/view"></a>
### View

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| VIEW_BAY | No |  |  |
| VIEW_BEACH | No |  |  |
| VIEW_CANAL | No |  |  |
| VIEW_CITY | No |  |  |
| VIEW_COURTYARD | No |  |  |
| VIEW_DESERT | No |  |  |
| VIEW_GARDEN | No |  |  |
| VIEW_GOLF | No |  |  |
| VIEW_HARBOR | No |  |  |
| VIEW_HILL | No |  |  |
| VIEW_LAGOON | No |  |  |
| VIEW_LAKE | No |  |  |
| VIEW_MARINA | No |  |  |
| VIEW_MOUNTAIN | No |  |  |
| VIEW_OCEAN | No |  |  |
| VIEW_PARK | No |  |  |
| VIEW_PARTIAL_LAKE | No |  |  |
| VIEW_PARTIAL_OCEAN | No |  |  |
| VIEW_PARTIAL_SEA | No |  |  |
| VIEW_POOL | No |  |  |
| VIEW_RESORT | No |  |  |
| VIEW_RIVER | No |  |  |
| VIEW_SEA | No |  |  |
| VIEW_VALLEY | No |  |  |
| VIEW_VINEYARD | No |  |  |
| VIEW_WATER | No |  |  |

<a name="/definitions/skiing-snowboarding"></a>
### Skiing and Snowboarding

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| DOWNHILL | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SNOWBOARDING | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SLEDDING | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SNOW_TUBING | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SNOWMOBILING | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SNOWSHOEING | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SKI_AREA | Yes | NEARBY |  |
| SKI_LIFTS | Yes | NEARBY |  |
| SKI_RUNS | Yes | NEARBY |  |
| SKIING | Yes | NEARBY |  |

<a name="/definitions/spa"></a>
### Spa

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| MINERAL_HOT_SPRINGS | Yes | INDOOR |  |
|  |  | OUTDOOR |  |
| SPA_SERVICES_ONSITE | No |  |  |
| MASSAGE | No |  |  |
| INDOOR_PUBLIC_BATH_(NO_MINERAL_SPRINGS) | No |  |  |
| OUTDOOR_PUBLIC_BATH_(NO_MINERAL_SPRINGS) | No |  |  |

<a name="/definitions/adventure-activities"></a>
### Adventure Activities

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| HIKING_BIKING | Yes | NEARBY |  |
|  |  | ONSITE |  |


<a name="/definitions/safari"></a>
### Safari

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| SAFARI | Yes | NEARBY |  |
|  |  | ONSITE |  |

<a name="/definitions/water-based-activities"></a>
### Water Based Activities

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| BOAT_TOURS | Yes | NEARBY |  |
|  |  | ONSITE |  |
| SNORKELING | Yes | NEARBY |  |
|  |  | ONSITE |  |

<a name="/definitions/location-highlights"></a>
### Location Highlights

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| PROPERTY_LOCATION | Yes | IN_BUSINESS_DISTRICT |  |
|  |  | IN_CITY_CENTER |  |
|  |  | IN_ENTERTAINMENT_DISTRICT |  |
|  |  | IN_HISTORICAL_DISTRICT |  |
|  |  | IN_MOUNTAINS |  |
|  |  | IN_NATIONAL_PARK |  |
|  |  | IN_PROVINCIAL_PARK |  |
|  |  | IN_REGIONAL_PARK |  |
|  |  | IN_RURAL_LOCATION |  |
|  |  | IN_SHOPPING_DISTRICT |  |
|  |  | IN_STATE_PARK |  |
|  |  | IN_SUBURBS |  |
| NEARBY | Yes | AIRPORT_NEARBY |  |
|  |  | BY_OCEAN |  |
|  |  | BY_SEA |  |
|  |  | METRO_STATION_NEARBY |  |
|  |  | THEME_PARK(S)_NEARBY |  |
|  |  | TRAIN_STATION_NEARBY |  |
|  |  | WHALE_WATCHING_NEARBY |  |
| CONNECTED_OR_ADJACENT | Yes | CONNECTED_TO_AIRPORT |  |
|  |  | CONNECTED_TO_CONVENTION_CENTER |  |
|  |  | CONNECTED_TO_SHOPPING_CENTER |  |
|  |  | ON_BAY |  |
|  |  | ON_LAKE |  |
|  |  | ON_RIVER |  |
|  |  | ON_RIVERWALK |  |
|  |  | ON_THE_STRIP |  |
|  |  | ON_WATERFRONT |  |

<a name="/definitions/languages"></a>
### Languages
| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| LANGUAGES_SPOKEN | Yes | CHINESE |  |
|  |  | ENGLISH |  |
|  |  | FRENCH |  |
|  |  | GERMAN |  |
|  |  | ITALIAN |  |
|  |  | JAPANESE |  |
|  |  | KOREAN |  |
|  |  | PORTUGUESE |  |
|  |  | RUSSIAN |  |
|  |  | SPANISH |  |
|  |  | DANISH |  |
|  |  | DUTCH |  |
|  |  | FINNISH |  |
|  |  | INDONESIAN |  |
|  |  | NORWEGIAN |  |
|  |  | SWEDISH |  |
|  |  | THAI |  |
|  |  | VIETNAMESE |  |
|  |  | AFRIKAANS |  |
|  |  | ARABIC |  |
|  |  | AZERBAIJANI |  |
|  |  | BELARUSIAN |  |
|  |  | BOSNIAN |  |
|  |  | BULGARIAN |  |
|  |  | CATALAN |  |
|  |  | CROATIAN |  |
|  |  | CZECH |  |
|  |  | ESTONIAN |  |
|  |  | FARSI |  |
|  |  | FILIPINO |  |
|  |  | GEORGIAN |  |
|  |  | GREEK |  |
|  |  | HAUSA |  |
|  |  | HEBREW |  |
|  |  | HINDI |  |
|  |  | HUNGARIAN |  |
|  |  | ICELANDIC |  |
|  |  | IRISH |  |
|  |  | KHMER |  |
|  |  | LAO |  |
|  |  | LATVIAN |  |
|  |  | LITHUANIAN |  |
|  |  | MACEDONIAN |  |
|  |  | MALAY |  |
|  |  | MALTESE |  |
|  |  | MOLDOVAN |  |
|  |  | MONGOLIAN |  |
|  |  | POLISH |  |
|  |  | ROMANIAN |  |
|  |  | SERBIAN |  |
|  |  | SLOVAK |  |
|  |  | SLOVENIAN |  |
|  |  | SWAHILI |  |
|  |  | TURKISH |  |
|  |  | UKRAINIAN |  |
|  |  | URDU |  |
|  |  | WELSH |  |
|  |  | XHOSA |  |
|  |  | YORUBA |  |
|  |  | ZULU |  |


<a name="/definitions/all-room-amenities"></a>
## All-Room Amenities
The amenity codes/detail codes and values have been split into sub sections with names to facilitate discovery and understanding. The All Room Amenities are applied to all the rooms within a property.

<a name="/definitions/internet-in-rooms"></a>
### Internet in Rooms

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_WIRED_INTERNET | Yes  | FREE |  |
| | | SURCHARGE |  |
| | | SURCHARGE_AMT | Send VALUE |
| | | SURCHARGE_PER_STAY | Send VALUE |
| | | SURCHARGE_PER_NIGHT | Send VALUE |
| | | SURCHARGE_PER_DAY | Send VALUE |
| | | SURCHARGE_PER_WEEK | Send VALUE |
| | | SURCHARGE_PER_MINUTE | Send VALUE |
| | | SURCHARGE_PER_HOUR | Send VALUE |
| | | SURCHARGE_PER_24HOUR_PERIOD | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_HOURS | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_MINUTES | Send VALUE |
| ROOM_WIFI_INTERNET | Yes  | FREE | No VALUE required |
| | | SURCHARGE |  |
| | | SURCHARGE_AMT | Send VALUE |
| | | SURCHARGE_PER_STAY | Send VALUE |
| | | SURCHARGE_PER_NIGHT | Send VALUE |
| | | SURCHARGE_PER_DAY | Send VALUE |
| | | SURCHARGE_PER_WEEK | Send VALUE |
| | | SURCHARGE_PER_MINUTE | Send VALUE |
| | | SURCHARGE_PER_HOUR | Send VALUE |
| | | SURCHARGE_PER_24HOUR_PERIOD | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_HOURS | Send VALUE |
| | | SURCHARGE_PER_MULTIPLE_MINUTES | Send VALUE |

<a name="/definitions/bath"></a>
### Bath

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_BATHROOM_TYPE | Yes  | PRIVATE_BATHROOM |  |
|  |  | PRIVATE_BATHROOM_NOT_IN_ROOM |  |
|  |  | SHARED_BATHROOM |  |
|  |  | SHARED_BATHROOM_SINK_IN_ROOM |  |
|  |  | PARTIALLY_OPEN_BATHROOM |  |
| ROOM_SHOWER_TYPE | Yes  | SHOWER_ONLY |  |
|  |  | BATHTUB_ONLY |  |
|  |  | BATHTUB_NO |  |
|  |  | BATHTUB_OR_SHOWER |  |
|  |  | SEPARATE_BATHTUB_AND_SHOWER |  |
|  |  | SHOWER_AND_BATHTUB_COMBO |  |
| ROOM_SECOND_BATHROOM | No |  |  |
| ROOM_BATHROBES | No |  |  |
| ROOM_BIDET | No |  |  |
| ROOM_DESIGNER_TOILETRIES | No |  |  |
| ROOM_SLIPPERS | No |  |  |
| ROOM_TOWELS_INCLUDED | No |  |  |
| ROOM_PRIVATE_SPA_TUB | No |  |  |
| ROOM_BATHTUB_TYPE | Yes  | DEEP_SOAKING |  |
|  |  | JETTED |  |
|  |  | SPRING_WATER |  |
| ROOM_SPECIAL_SHOWERHEAD | Yes  | HYDROMASSAGE_SHOWERHEAD |  |
|  |  | RAINFALL_SHOWERHEAD |  |

<a name="/definitions/appliances"></a>
### Appliances

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_COFFEE_TEA_MAKER | Yes  | ROOM_COFFEE_TEA_MAKER |  |
|  |  | ROOM_ESPRESSO_MAKER |  |
|  |  | ROOM_ELECTRIC_KETTLE |  |
| ROOM_FREE_BOTTLED_WATER | No |  |  |
| ROOM_KITCHEN | Yes  | KITCHEN |  |
|  |  | KITCHENETTE |  |
|  |  | SHARED_KITCHEN |  |
| ROOM_MICROWAVE | Yes  | INROOM |  |
|  |  | ONREQUEST |  |
| ROOM_REFRIGERATOR | Yes  | INROOM |  |
|  |  | FULL_SIZE_IN_ROOM |  |
|  |  | ONREQUEST |  |
| ROOM_MINIBAR | Yes  | STOCKED_WITH_FREE_ITEMS |  |
|  |  | STOCKED_WITH_SOME_FREE_ITEMS |  |
|  |  | NO_FREE_ITEMS |  |
| ROOM_DISHWARE | No |  |  |
| ROOM_DISHWASHER | No |  |  |
| ROOM_STOVETOP | No |  |  |
| ROOM_HAIR_DRYER | No |  |  |
| ROOM_HAIR_DRYER_ON_REQUEST | No |  |  |
| ROOM_AIR_CONDITIONING | Yes  | AIR_CONDITIONING |  |
|  |  | RESTRICTED_USAGE |  |
| ROOM_CEILING_FAN | No |  |  |
| ROOM_DESK | No |  |  |
| ROOM_FIREPLACE | No |  |  |
| ROOM_BLACKOUT_DRAPES | No |  |  |
| ROOM_DECOR | No |  |  |
| ROOM_HEATING | No |  |  |
| ROOM_OVEN | No |  |  |
| ROOM_TOASTER | No |  |  |
| ROOM_FURNISHING | No |  |  |
| ROOM_SHARED_ACCOMMODATIONS | No |  |  |
| ROOM_WASHER_DRYER | No |  |  |
| ROOM_DRYER | No |  |  |
| ROOM_CLIMATE_CONTROL | No |  |  |
| ROOM_DESK | No |  |  |

<a name="/definitions/room-entertainment"></a>
### Room Entertainment

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_TV_SERVICE | Yes  | CABLE |  |
|  |  | SATELLITE |  |
|  |  | DIGITAL |  |
| ROOM_TV_TYPE | Yes  | LCD |  |
|  |  | LED |  |
|  |  | PLASMA |  |
|  |  | SMART_TV |  |
|  |  | FLAT_PANEL |  |
|  |  | TV |  |
| ROOM_TV_SIZE | Yes  | SIZE |  |
|  |  | MEASURMENT_(INCH_CM) |  |
| ROOM_PREMIUM_TV_CHANNELS | No |  |  |
| ROOM_PAY_MOVIES | No |  |  |
| ROOM_DVD | No |  |  |
| ROOM_FIRST_RUN_MOVIES | No |  |  |
| ROOM_VIDEO_GAME | No |  |  |
| ROOM_COMPUTER | Yes  | IN-ROOM_COMPUTER |  |
|  |  | TABLET_COMPUTER |  |
|  |  | IPAD |  |
| ROOM_DOCKING_STATION | Yes  | IPOD_DOCKING_STATION |  |
|  |  | MP3_PLAYER_DOCKING_STATION |  |

<a name="/definitions/beds"></a>
### Beds

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_CRIBS | Yes  | FREE |  |
|  |  | SURCHARGE |  |
|  |  | GENERIC |  |
| ROOM_EXTRA_BEDS | Yes  | FREE |  |
|  |  | SURCHARGE |  |
|  |  | GENERIC |  |
| ROOM_SOFA_BED | Yes  | SOFA_BED |  |
|  |  | SOFA_BED_SIZE |  |
| ROOM_PREMIUM_BEDDING | Yes  | EGYPTIAN_COTTON_SHEETS |  |
|  |  | FRETTE_ITALIAN_SHEETS |  |
| ROOM_PREMIUM_MATTRESS | Yes  | MEMORY_FOAM |  |
|  |  | PILLOW_TOP |  |
|  |  | SLEEP_NUMBER |  |
|  |  | TEMPURPEDIC |  |
| ROOM_HYPO_BED_AVAIL | No |  |  |
| ROOM_DAY_BED | No |  |  |
| ROOM_DOWN_COMFORTER | No |  |  |
| ROOM_LINENS_INCLUDED | No |  |  |
| PILLOW_MENU | No |  |  |

<a name="/definitions/room-services"></a>
### Room Services

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_HOUSEKEEPING | Yes  | DAILY |  |
|  |  | LIMITED |  |
|  |  | ONCE_PER_STAY |  |
|  |  | WEEKENDS_ONLY |  |
|  |  | WEEKDAYS_ONLY |  |
|  |  | WEEKLY |  |
| ROOM_ROOM_SERVICE | Yes  | AVAILABLE_24HOURS |  |
|  |  | LIMITED |  |
|  |  | GENERIC |  |
| ROOM_NEWSPAPER_FREE | Yes  | DAILY |  |
|  |  | WEEKDAY |  |
| ROOM_FREE_CALLS | Yes  | FREE_LOCAL_CALLS |  |
|  |  | FREE_LONG_DISTANCE_CALLS |  |
|  |  | FREE_INTERNATIONAL_CALLS |  |
| ROOM_CHILDCARE | No |  |  |
| ROOM_MASSAGE | No |  |  |
| ROOM_TURNDOWN | No |  |  |
| ROOM_DINING | No |  |  |
| ROOM_HIGHCHAIR | No |  |  |

<a name="/definitions/room-spaces"></a>
### Room Spaces

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ROOM_BALCONY | Yes  | FURNISHED_BALCONY |  |
|  |  | FURNISHED_BALCONY_OR_PATIO |  |
|  |  | FURNISHED_LANAI |  |
|  |  | FURNISHED_PATIO |  |
|  |  | BALCONY |  |
|  |  | BALCONY_OR_PATIO |  |
|  |  | LANAI |  |
|  |  | PATIO |  |
| ROOM_SEPARATE_BEDROOM | Yes  | NUMBER_OF_BEDROOMS |  |
|  |  | SEPARATE_BEDROOM |  |
| ROOM_PRIVATE_POOL | Yes  | PRIVATE_POOL |  |
|  |  | PLUNGE_POOL |  |
| ROOM_SEPARATE_DINING_AREA | No |  |  |
| ROOM_LIVING_ROOM | No |  |  |
| ROOM_SEPARATE_SITTING_AREA | No |  |  |
| ROOM_PRIVATE_SPA | No |  |  |
| ROOM_EXT_ACCESS | No |  |  |
| ROOM_CONNECTED_ROOMS | No |  |  |
| ROOM_SOUNDPROOF | No |  |  |
| ROOM_YARD | No |  |  |

<a name="/definitions/policies"></a>
## Policies
The Policy codes/detail codes and values have been split into sub sections with names to facilitate discovery and understanding. 

<a name="/definitions/checkin-checkout"></a>
### Check-in Check-Out

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| MINIMUM_CHECKIN_AGE | No  |  | Send VALUE |
| ALTERNATE_CHECK_IN_LOCATION | No  |  | Send VALUE. Max 64 characters |
| CONTACT_PROPERTY | No  |  |  |
| CONTACT_PROPERTY_AFTER_TIME | No  |  | Send VALUE. X AM/PM |
| CONTACT_PROPERTY_ADVANCE_TIME | No  |  | Send VALUE. Only '24','48' or '72' |
| GUEST_RECEIVE_EMAIL | No  |  | Used to specify that Guests will receive an Email for Check-in instructions  |
| NO_AFTER_HOURS_CHECK_IN | No  |  |  |
| NO_FRONT_DESK | No  |  |  |
| ALTERNATE_CHECK_IN_LOCATION | No  |  | Send VALUE. |
| CHECKOUT_TIME | No  |  | Send VALUE (hh:mm AM/PM) |
| CHECKIN_START_TIME | No  |  | Send VALUE (hh:mm AM/PM) |
| CHECKIN_END_TIME | No  |  | Send VALUE (hh:mm AM/PM) |
| CANCELLATION_CUTOFF_TIME | No  |  | Send VALUE (hh:mm AM/PM) |
| FRONT_DESK | Yes  |  | OPEN_DAILY |
|  |  |  | OPEN_WEEKDAYS |
|  |  |  | OPEN_WEEKENDS |

<a name="/definitions/payment-information"></a>
### Payment Information

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| ACCEPTS_VISA | No  |  |  |
| ACCEPTS_MASTERCARD | No |  |  |
| ACCEPTS_JCB_INTERNATIONAL | No |  |  |
| ACCEPTS_DISCOVER | No |  |  |
| ACCEPTS_DINERS_CLUB | No |  |  |
| ACCEPTS_CARTE_BLANCHE | No |  |  |
| ACCEPTS_AMERICAN_EXPRESS | No |  |  |
| CC_NAME_MUST_MATCH | No |  |  |
| FORMS_OF_DEPOSIT_ACCEPTED | Yes | CASH_ONLY | |
|  |  | CASH_NOT_ACCEPTED |  |
|  |  | CREDIT_CARDS_ONLY |  |
|  |  | CREDIT_CARDS_ONLY |  |
|  |  | DEBIT_CARDS_ONLY_ACCEPTED |  |
|  |  | DEBIT_CARDS_NOT_ACCEPTED |  |
|  |  | CASH_CREDIT_CARD |  |
| DEPOSIT_OTHER | Yes | CASH_ONLY | |
|  |  | AGE | Send Value. The value sent would be considered the upper age limit for the deposit applied |


<a name="/definitions/other"></a>
### Other

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| WATER_HEATER | Yes  | GAS_WATER_HEATER_IN_ROOM |  |
|  |  | CENTRALIZED_GAS_WATER_HEATER |  |
|  |  | NOT_GAS |  |
| PET_POLICY | Yes  | PETS_ALLOWED |  |
|  |  | PETS_NOT_ALLOWED |  |
|  |  | PETS_ALLOWED_FREE |  |
|  |  | SURCHARGE |  |
|  |  | ONLY_DOGS |  |
|  |  | ONLY_DOGS_OR_CATS |  |
|  |  | OTHER_RESTRICTIONS_APPLY |  |
|  |  | SERVICE_ANIMALS_EXEMPT_FROM_FEES_OR_RESTRICTIONS |  |
| CATERS_TO | Yes  | MEN_ONLY |  |
|  |  | WOMEN_ONLY |  |
|  |  | ADULTS_ONLY |  |
|  |  | CLOTHING_OPTIONAL_IN_PUBLIC_AREAS |  |
|  |  | NO_BACHELOR_PARTIES |  |
|  |  | NO_BACHELORETTE_PARTIES |  |
| CHILD_POLICY | Yes | CHILDREN_STAY_FREE |  |
|  |  | NO_CHILDREN |  |
| SMOKING_POLICY | Yes | SMOKE_FREE_PROPERTY |  |
|  |  | DESIGNATED_SMOKING_AREA |  |
|  |  | FINES_APPLY |  |
| ALCOHOL_POLICY | Yes | NO_ALCOHOL_SERVED |  |
|  |  | NO_ALCOHOL_ALLOWED |  |
| KBYG_REGISTERED_GUEST_ONLY | No |  |  |
| NOISE_DISCLAIMER | No |  |  |
| PROPERTY_ACCESS_TYPE | Yes | AIRPLANE |  |
|  |  | AIRPLANE_AND_BOAT |  |
|  |  | AIRPLANE_AND_SHUTTLE |  |
|  |  | AIRPLANE_OR_BOAT |  |
|  |  | AIRPLANE_OR_FLOATPLANE |  |
|  |  | AIRPLANE_OR_HELICOPTER |  |
|  |  | AIRPORT_SHUTTLE |  |
|  |  | BOAT |  |
|  |  | BOAT_AND_SHUTTLE |  |
|  |  | BOAT_AND_FLOATPLANE |  |
|  |  | BOAT_AND_HELICOPTER |  |
|  |  | FLOATPLANE |  |
|  |  | FLOATPLANE_AND_SHUTTLE |  |
|  |  | FLOATPLANE_AND_HELICOPTER |  |
|  |  | HELICOPTER |  |
|  |  | HELICOPTER_AND_SHUTTLE |  |
|  |  | REQUIRED_SHUTTLE |  |
| PROPERTY_ACESS_TIME | Yes | 24_HOURS_PRIOR |  |
|  |  | 48_HOURS_PRIOR |  |
|  |  | 72_HOURS_PRIOR |  |


<a name="/definitions/attributes"></a>
## Attributes
The attribute codes/detail codes and values have been split into sub sections with names to facilitate discovery and understanding. 

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| TOTAL_ROOMS | No  |  | Send VALUE |
| MULTI-LINGUAL STAFF | No |  |  |
| FIREPLACE_IN_LOBBY | No |  |  |
| TV_IN_LOBBY | No |  |  |
| NUMBER_OF_BEDROOMS | No |  | Send VALUE. This is a mandatory field for vacation rental properties. |
| NUMBER_OF_BATHROOMS | No |  | Send VALUE. This is a mandatory field for vacation rental properties. |
| OCCUPANCY | No |  | Send VALUE |

<a name="/definitions/mandatory-fees"></a>
## Mandatory Fees
The Fee codes/detail codes and values have been split into sub sections with names to facilitate
discovery and understanding. Please note, these are fees collected at the time of Check-in (not at the time of Booking). For Fees Collected at Booking, please utilize Service Fees at the Rateplan Level (Refer to the [Product API](/apis/product-management/product-api/reference.html) for details).

| Code | Scope | Duration | Notes |
| ---- | ----- | -------- | ----- |
| CLEANING_FEE | PERCENTAGE  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
|  | AMT_VARIES_BASED_ON_LENGTH_OF_STAY |  |  |
|  | AMT_VARIES_BASED_ON_UNIT_SIZE  |  |  |
| CLUB_CARD_FEE | AMOUNT_PER_PERSON  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
| LOCAL_CITY_TAX| PERCENTAGE  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_STAY | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION |  | Send VALUE |
| RESORT_FEE | PERCENTAGE  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
| SANITATION_FEE | AMOUNT_PER_PERSON_CHILD  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
| TOWELS_SHEETS_FEE | AMOUNT_PER_PERSON_CHILD  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
| TRANSFER_FEE | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| GALA_DINNER_CHRISTMAS_EVE | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| GALA_DINNER_CHRISTMAS_DAY | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| GALA_DINNER_NEW_YEARS_EVE | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| GALA_DINNER_NEW_YEARS_DAY | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| GALA_DINNER_VALENTINES_DAY | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| GALA_DINNER | AMOUNT_PER_PERSON  |  | Send VALUE |
|  | AMOUNT_PER_PERSON_CHILD |  | Send VALUE |
| UTILITIES_FEE | AMOUNT_PER_PERSON  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_WEEK | Send VALUE |
|  |  | PER_STAY | Send VALUE |
| TOURISM_FEE | PERCENTAGE  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
| DESTINATION_FEE | PERCENTAGE  | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | AMOUNT_PER_ACCOMMODATION | PER_STAY | Send VALUE |
| SEASONAL_HEATING_FEE | AMOUNT_PER_ACCOMMODATION | PER_NIGHT | Send VALUE |
|  | AMOUNT_PER_PERSON | PER_WEEK | Send VALUE |
|  | | PER_STAY | Send VALUE |
| DEPOSIT_OTHER | BREAKAGE | PER_DAY | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
|  | | PER_NIGHT | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
|  | | PER_STAY | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
|  | | PER_WEEK | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
| DEPOSIT_OTHER | CLEANING | PER_DAY | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
|  | | PER_NIGHT | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
|  | | PER_STAY | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |
|  | | PER_WEEK | Send VALUE. If no dates are provided, it would be considered for Year round.The date range (yyyy-mm-dd format) can only be for 365 days and startDate year should be current year |

<a name="/definitions/paragraph-text"></a>
## Paragraph Text

| Code | Detail Code Required? | Detail Codes Permitted | Notes |
| ---- | --------------------- | ---------------------- | ----- |
| SPECIAL_CHECKIN_INSTRUCTIONS | No  |  | Freeform text describing special checkin instructions.  Subject to review and modification by Expedia content team. |

<a name="/definitions/taxes"></a>
## Taxes
Always Send the Tax amount in VALUE

| Code | Detail Codes Permitted | Notes |
| ---- | ---------------------- | ----- |
| ACCOMMODATIONS_TAX | PERCENT_PER_STAY | The Detail Codes are applicable to all taxes below |
|  | AMOUNT_PER_STAY |  |
|  | AMOUNT_PER_NIGHT |  |
| ACCOMMODATIONS_TAX_CITY |  |  |
| ACCOMMODATIONS_TAX_COUNTY |  |  |
| ACCOMMODATIONS_TAX_DISTRICT |  |  |
| ACCOMMODATIONS_TAX_SPECIAL_PURPOSE_DISTRICT |  |  |
| ACCOMMODATIONS_TAX_STATE |  |  |
| ADMISSION_AMUSEMENT_TAX_CITY |  |  |
| ASSESSMENT_TAX |  |  |
| BATHING_TAX |  |  |
| BED_TAX |  |  |
| BUSINESS_IMPROVEMENT_DISTRICT_TAX |  |  |
| CAPITAL_IMPROVEMENT_FUND |  |  |
| CITY_TAX |  |  |
| CONSUMPTION_TAX |  |  |
| CONSUMPTION_TAX_ON_SERVICE_FEE |  |  |
| CONVENTION_CENTER_TAX |  |  |
| COUNTY_TAX |  |  |
| DEPARTMENT_TAX |  |  |
| DEPARTMENT_TAX_ON_TAXE_DE_SEJOUR |  |  |
| DISTRICT_TAX |  |  |
| ENERGY_TAX |  |  |
| ENTERTAINMENT_TAX |  |  |
| ENVIRONMENT_LEVY_TAX |  |  |
| FACILITIES_TAX |  |  |
| FEDERAL_TAX |  |  |
| FEE_DISTRICT |  |  |
| GENERAL_SALES_AND_USE_TAX_CITY |  |  |
| GENERAL_SALES_AND_USE_TAX_COUNTY |  |  |
| GENERAL_SALES_AND_USE_TAX_DISTRICT |  |  |
| GENERAL_SALES_AND_USE_TAX_LOCAL_IMPROVEMENT_DISTRICT |  |  |
| GENERAL_SALES_AND_USE_TAX_STATE |  |  |
| GST |  |  |
| GST_ON_ACCOMMODATION |  |  |
| GST_ON_DMF |  |  |
| GST_ON_LODGING_TAX |  |  |
| GST_ON_SERVICE_FEE |  |  |
| GST_ON_TOURISM_TAX |  |  |
| HOTEL_DAILY_FEE_CITY |  |  |
| HOTEL_DAILY_FEE_COUNTY |  |  |
| HOTEL_DAILY_FEE_DISTRICT |  |  |
| HOTEL_TAX |  |  |
| HOTEL_TAX_ON_SERVICE_FEE |  |  |
| HOTEL_UNIT_FEE_CIT |  |  |
| HST |  |  |
| HST_ON_DISTRICT_TAX |  |  |
| HST_ON_DMF |  |  |
| HST_ON_MUNICIPAL_TAX |  |  |
| HST_ON_TOURISM_TAX |  |  |
| IMPOSTA_DI_SOGGIORNO |  |  |
| ISH |  |  |
| ISS |  |  |
| ISS_ON_SERVICE_FEE |  |  |
| IVA |  |  |
| IVU_TAX_PUERTO_RICO |  |  |
| KURTAXE |  |  |
| LODGING_TAX |  |  |
| LODGING_TAX_CITY |  |  |
| LODGING_TAX_COUNTY |  |  |
| LUXURY_TAX |  |  |
| MARKETING_FEE |  |  |
| MUNICIPAL_TAX |  |  |
| MUNICIPAL_TAX_ON_DMF |  |  |
| MUNICIPAL_TAX_ON_TOURISM_TAX |  |  |
| OCCUPANCY_TAX |  |  |
| OCCUPANCY_TAX_CITY |  |  |
| OTHER_TAX |  |  |
| OTHER_TAX_ON_SERVICE_FEE |  |  |
| PARISH_TAX |  |  |
| PRIVILEDGE_TAX |  |  |
| PROVINCE_TAX |  |  |
| PST |  |  |
| PST_ON_DMF |  |  |
| PST_ON_TOURISM_TAX |  |  |
| PUBLIC_FACILITIES_TAX |  |  |
| PUBLIC_IMPROVEMENT_TAX |  |  |
| QST |  |  |
| QST_ON_LODGING_TAX |  |  |
| ROOM_TAX |  |  |
| RST |  |  |
| SALES_TAX |  |  |
| SALES_TAX_ON_SERVICE_FEE |  |  |
| SERVICE_FEE |  |  |
| SPECIAL_TAX |  |  |
| STATE_TAX |  |  |
| SUPPLEMENT_TAX |  |  |
| SURCHARGE_DISTRICT |  |  |
| TAXE_DE_SEJOUR |  |  |
| TOERISTENBELASTING |  |  |
| TOURISM_ASSESSMENT_TAX |  |  |
| TOURISM_BUSINESS IMPROVEMENT_DISTRICT_TAX |  |  |
| TOURISM_DIRHAM |  |  |
| TOURISM_IMPROVEMENT_DISTRICT_TAX |  |  |
| TOURISM_MARKETING_DISTRICT_TAX |  |  |
| TOURISM_TAX |  |  |
| TOURISM_TAX_ON_DMF |  |  |
| TPA |  |  |
| TRANPORTATION_DISTRICT_TAX |  |  |
| TRANSIENT_TAX |  |  |
| TRANSIT_IMPROVEMENT_TAX |  |  |
| TRANSPORTATION_AUTHORITY_TAX |  |  |
| VAT |  |  |
| VAT_ON_CITY_TAX |  |  |
| VAT_ON_SERVICE_FEE |  |  |
| VAT_ON_TOURISM_TAX |  |  |

<a name="/definitions/image-categories"></a>
## Image Categories

<a name="/definitions/primary-image"></a>
### Primary Image

| Category Code |
| ------------- |
| FEATURED_IMAGE |

<a name="/definitions/lobby"></a>
### Lobby

| Category Code |
| ------------- |
| INTERIOR_ENTRANCE |
| LOBBY |
| RECEPTION |
| LOBBY_SITTING_AREA |
| CONCIERGE_DESK |
| CHECK_IN_CHECK_OUT_KIOSK |
| LOBBY_LOUNGE |

<a name="/definitions/room-facilities"></a>
### Room Facilities

| Category Code |
| ------------- |
| GUESTROOM |
| LOBBY |
| CHILDRENS_THEME_ROOM |
| IN_ROOM_DINING |
| IN_ROOM_KITCHEN |
| ROOM_SERVICE_DINING |
| IN_ROOM_KITCHENETTE |
| LIVING_AREA |
| LIVING_ROOM |
| GUESTROOM_TERRACE_PATIO |
| BALCONY |
| IN_ROOM_AMENITY |
| MINI_REFRIGERATOR |
| MICROWAVE |
| IN_ROOM_SAFE |
| GUESTROOM_VIEW |
| MINIBAR |
| IN_ROOM_COFFEE |
| IN_ROOM_BUSINESS_CENTER |
| BATHROOM |
| JETTED_TUB |
| DEEP_SOAKING_BATHTUB |
| BATHROOM_SINK |
| BATHROOM_SHOWER |
| BATHROOM_AMENITIES |

<a name="/definitions/image-pool"></a>
### Pool

| Category Code |
| ------------- |
| POOL |
| CHILDRENS_POOL |
| INDOOR_POOL |
| OUTDOOR_POOL |
| NATURAL_POOL |
| INFINITY_POOL |
| WATER_PARK |
| AQUA_CENTER |
| WATERSLIDE  |
| OUTDOOR_SPA_TUB |
| INDOOR_SPA_TUB |
| INDOOR_OUTDOOR_POOL |
| POOL_WATERFALL |
| ROOFTOP_POOL |

<a name="/definitions/fitness"></a>
### Fitness

| Category Code |
| ------------- |
| FITNESS_FACILITY |
| GYM |
| AEROBICS_FACILITY |
| FITNESS_STUDIO |
| ROCK_CLIMBING_WALL_INDOOR |
| EXERCISE_LAP_POOL |
| YOGA |
| PILATES |

<a name="/definitions/image-spa"></a>
### Spa

| Category Code |
| ------------- |
| HAIR_SALON |
| NAIL_SALON |
| VICHY_SHOWER |
| SAUNA |
| STEAM_ROOM |
| TURKISH_BATH |
| SPA_RECEPTION |
| TREATMENT_ROOM |
| MASSAGE |
| SPA_TREATMENT |
| FACIAL |

<a name="/definitions/sports-facilities"></a>
### Sports Facilities

| Category Code |
| ------------- |
| SPORTS_FACILITY |
| BOATING |
| BICYCLING |
| TENNIS_COURT |
| BASKETBALL_COURT |
| SPORT_COURT |
| FISHING | 
| HUNTING |
| ARCHERY |
| HIKING |
| OUTDOOR_ROCK_CLIMBING |
| ROPES_COURSE_TEAM_BUILDING |
| GOLF |
| MINI_GOLF |
| GOLF_CART |
| INDOOR_GOLF_DRIVING_RANGE |
| PRO_SHOP |
| SNOW_AND_SKI_SPORTS |
| SKI_HILL |
| SKIING |
| SNOWBOARDING |
| EQUIPMENT_STORAGE |

<a name="/definitions/image-property-amenities"></a>
### Property Amenities

| Category Code |
| ------------- |
| PROPERTY_AMENITY |
| CASINO |
| THEATER_SHOW |
| GAME_ROOM |
| ARCADE |
| KARAOKE_ROOM |
| BILLIARDS |
| GIFT_SHOP |
| LAUNDRY_ROOM |
| VENDING_MACHINE |
| RV_OR_TRUCK_PARKING |
| ATM_BANKING_ON_SITE |
| PET_FRIENDLY |
| MISCELLANEOUS |
| CHILDRENS_AREA |
| DAY_CARE |
| CHILDRENS_PLAY_AREA_INDOOR |
| CHILDRENS_PLAY_AREA_OUTDOOR |
| BIRTHDAY_PARTY_AREA |
| CHILDRENS_ACTIVITIES |

<a name="/definitions/Property Dining"></a>
### Property Dining

| Category Code |
| ------------- |
| DINING |
| BREAKFAST_AREA |
| COFFEE_SERVICE |
| RESTAURANT |
| BUFFET |
| DELICATESSEN |
| CAFE |
| COFFEE_SHOP |
| SNACK_BAR |
| FOOD_COURT |
| COUPLES_DINING |
| FAMILY_DINING |
| FOOD_AND_DRINK |

<a name="/definitions/bar"></a>
### Bar

| Category Code |
| ------------- |
| HOTEL_BAR |
| HOTEL_LOUNGE |
| SPORTS_BAR |
| POOLSIDE_BAR |
| NIGHTCLUB |

<a name="/definitions/property-interior"></a>
### Property Interior

| Category Code |
| ------------- |
| HOTEL_INTERIOR | 
| LIBRARY |
| BALLROOM |
| BANQUET_HALL |
| RECEPTION_HALL |
| CHAPEL |
| INDOOR_WEDDING |
| HALLWAY | 
| STAIRCASE |
| MEETING_FACILITY |
| BUSINESS_CENTER |
| INTERIOR_DETAIL |
| FIREPLACE |
| EXECUTIVE_LOUNGE |

<a name="/definitions/property-exterior"></a>
### Property Exterior

| Category Code |
| ------------- |
| PROPERTY_GROUNDS |
| HOTEL_FRONT |
| HOTEL_ENTRANCE |
| HOTEL_FRONT_EVENING_NIGHT |
| BEACH |
| GARDEN |
| COURTYARD |
| OUTDOOR_DINING |
| EXTERIOR_HOTEL_TERRACE_PATIO |
| PORCH |
| GAZEBO |
| OUTDOOR_WEDDING_AREA |
| OUTDOOR_BANQUET_AREA |
| SUNDECK |
| MARINA |
| FOUNTAIN |
| BBQ_PICNIC_AREA |
| LAKE |
| DOCK | 
| MARINA |
| PARKING |
| AIRPORT_SHUTTLE |
| CITY_SHUTTLE |
| EXTERIOR_DETAIL |
| EXTERIOR |

<a name="/definitions/property-view"></a>
### Property View

| Category Code |
| ------------- |
| BEACH_OCEAN_VIEW |
| AERIAL_VIEW |
| VIEW_FROM_HOTEL |
| LAKE_VIEW |
| MOUNTAIN_VIEW |
| BALCONY_VIEW |
| STREET_VIEW |
| CITY_VIEW |
| GARDEN_VIEW |
| COURTYARD_VIEW |
