# API Definition

The EQC Product, Availability and Rates API (PARR) was designed for any EQC partner that needs to connect to Expedia to read/retrieve the current product configuration (rooms and rates defined), as well as the current rates and availability loaded in the system.

While this API is still supported today, it will soon be retired in favor of the newer Product API, which not only allows to retrieve product information, but also lets partners create or edit product information. For more information, please visit the Product API section of this portal.

## Product, Availability and Rates Retrieval Request
Through a set of parameters, the PARR API allows EQC partners to either retrieve current product information, or to retrieve current rates and availability data loaded in Expedia system.

L | Data element | Data type | O | Description | validations
- | ------------ | --------- | - | ----------- | ---------------
0 | ProductAvailRateRetrievalRQ | - |  | Root element | 
0 | @xmlns | URL |  | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Namespace for PARR RQ messages: http://www.expediaconnect.com/EQC/PAR/2013/07 The following namespace is also supported for backward compatibility, but its features are no longer documented in this API:http://www.expediaconnect.com/EQC/PAR/2011/06 | Valid namespace
1 | Authentication | - |  | Required information to grant access to Expedia QuickConnect interface – stored in next two attributes. Refer to (/guides.html#howtogetstarted)[FAQ and Guides] section for more details on how to obtain valid credentials. | 
1 | @username | String |  | Username for Expedia QuickConnect login (case sensitive), provided by Expedia. | Minimum length: 4, Maximum length: 30, Username exists 
1 | @password | String |  | Password for Expedia QuickConnect login (case sensitive), provided by Expedia. | Minimum length: 6, Maximum length: 30, Password valid
1 | Hotel | - |  | Information about Hotel | 
1 | @id | Integer |  | Hotel ID defined by Expedia and uniquely identifying a property in Expedia system. | Positive integer of 14 digits or less, Hotel ID is valid, Hotel ID in Expedia system is assigned to the credentials provided in Authentication node.
1 | ParamSet | - |  | Grouping element for parameters.  | At least one parameter has to be specified in order to indicate the type of request the EQC partner wants to perform.
2 | ProductRetrieval | - |  | If specified, the request will return product information. | 
2 | @productStatus | Enum | * | Possible values are: Active, Inactive, All. By default, only active products are returned. | Value in the list specified in the enumeration given by the schema.
 | @returnRateLink | Boolean | * | False by default, if not specified. If set to true, rate plan linkage rule information will be returned for products, where defined. If no rate plan linkage rules are defined for any of the hotel's product, using this flag will not make any difference in the response. | 
 | @returnRoomAttributes | Boolean | * | False by default, if not specified. If set to true, additional room type attributes such as occupancy, age settings, smoking preferences, bed types and rate verification thresholds will be returned. | 
 | @returnRatePlanAttributes | Boolean | * | False by default, if not specified. If set to true, the following additional rate plan attributes are returned: pricing model, occupants for base rate, deposit required, min and max LOS defaults, min and max booking restrictions, book and travel start and end dates, mobile only, day of week booking restrictions, create and update date and times  | 
 | @returnCompensation | Boolean | * | False by default, if not specified. If set to true, compensation details are returned for all products. | 
 | @returnCancelPolicy | Boolean | * | False by default, if not specified. If set to true, cancellation policy details are returned for all products. | 
2 | AvailRateRetrieval | - |  | If specified, the request will return Avail, Rates and Restriction data loaded for one or more products in Expedia system. | 
2 | @from | Date |  | Start date and end date of the interval (format: yyyy-mm-dd). If the request is for one rate plan, EQC will return maximum 365 days in the PARR response. If the request is for more than one rate plan, then maximum 31 days of data can be returned at once by the PARR response. EQC partner must repeat the request with multiple intervals to get larger date ranges. | "From date >= today - 1
2 | @to | Date |  |  | 
2 | @inventory | Boolean | * | Filter to receive base, flex and total allocation. True: number of rooms will be returned. False: number of rooms will not be returned. Default value if not specified: True. | 
2 | @roomAvailStatus | Boolean | * | Filter to receive closed at Room Type level. True: RoomType/@closed attribute will be returned. False: RoomType/@closed will not be returned. Default value if not specified: True. | 
2 | @rateAvailStatus | Boolean | * | Filter to receive closed at Rate Plan level. True: RatePlan/@closed attribute will be returned. False: RatePlan/@closed attribute will not be returned. Default value if not specified: True. | 
2 | @restriction | Boolean | * | Filter to receive CTA, CTD, Min and Max LOS. True: restrictions will be returned. False: restrictions will not be returned. Default value if not specified: True. | 
2 | @rates | Boolean | * | Filter to receive Rate + rate change indicator if applicable. True: rate data will be returned. False: rate data will not be returned. Default value if not specified: True. | 
3 | RoomType | - | * | Optional list of room type and rate plan IDs. Default: all active products will be returned. | 
3 | @id | String |  | Expedia Room Type ID. If used, only the room types that are specified will be returned. | String of 50 characters or less.
4 | RatePlan | - | * | Optional list of rate plans. Default: if only room type is specified, all its active rate plans will be returned, unless filters for rateAvailStatus, restrictions and rate are set to false, in which case only room type info is returned. | 
4 | @id | String |  | Expedia Rate Plan ID. If used, only the rate plans that are specified will be returned. Else, all active rate plans under the room type(s) requested will be returned. | String of 50 characters or less.

## Product, Avaialbility and Rate Retrieval Response

L | Data element | Data type | O | Description
- | ------------ | --------- | - | -----------
0 | ProductAvailRateRetrievalRS | NA |  | Root element
0 | @xmlns | URL |  | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Namespace for PARR messages: http://www.expediaconnect.com/EQC/PAR/2013/07. The following namespace is also supported for backward compatibility, but its features are no longer documented in this API: http://www.expediaconnect.com/EQC/PAR/2011/06 
1 | Error | String |  | Detailed description of an error message. One or more of this element appears if the request failed. If this element is present, no other element will appear. Maximum length: 1024 characters.
1 | @code | Int |  | Code for this error, for example: authentication, xml structure, business validation. - Code will be between 1000 and 7,000.
1 | ProductList | - |  | Returned when parameter "ProductRetrieval" is specified in Request. Contains the list of active products for this hotel by default.
2 | Hotel | - |  | Grouping element for hotel-level information
2 | @id | int |  | Expedia Hotel ID
2 | @name | String |  | Hotel Name. Maximum length: 255 characters.
2 | @city | String |  | Hotel City. Maximum length: 255 characters.
2 | RoomType | - |  | Room Types belonging to that hotel. By default, only active room types are returned. This element is repeated once per room type that exists per hotel.
2 | @id | String |  | Expedia Room Type ID. Max length: 50 characters.
2 | @code | String |  | Expedia Room Type Code. Customizable identifier (can only be defined/modified by Expedia). Default value is room type name. Max length: 50 characters.
2 | @name | String |  | Expedia Room Type name. Max length: 255 characters.
2 | @status | Enum |  | Room Type status: active or inactive. By default, only active room types are returned.
2 | @smokingPref | Enum | * | Only returned if returnRoomAttributes specified in RQ. Room's smoking preferences. Possible values: NonSmoking, Smoking, Either. When Either is set, guest will have the choice of the preference and a special request will be added to BR RS for the booking, to indicate which preference was selected by the guest.
2 | @maxOccupants | int | * | Only returned if returnRoomAttributes specified in RQ.  Indicates how many people can physically stay in the room, and should include the sum of all adults, children and infants that the room can accommodate. The count of how many guests the room can accommodate by age category can be found under the OccupancyByAge element.
3 | BedType | - | * | Only returned if returnRoomAttributes is specified in RQ.  Grouping element for bed type data. A room can be configured to offer multiple bed types, from which the guest will chose one. The bed type chosen will be provided as a special request in BR RS. A room can also be configured as having multiple bed types within the same room (like a king and a sofa bed). In this case, there will be one ID returned, with a list of beds. For example, bed type ID 67 describes a room that contains one king and one sofa bed.
3 | @id | int |  | Bed type ID. Bed type ID in PARR is following same convention as bed type IDs used in BR RS special requests.
3 | @name | string |  | Bed type name. Max 255 characters. If 2 bed types are listed in the name (ex: One King And One Sofa Bed), the room contains both bed types.
3 | OccupancyByAge | - | * | Only returned if returnRoomAttributes is specified in RQ.  Defines how many occupants by age category a room can accommodate. Complements the room's maxOccupant setting.
3 | @ageCategory | enum |  | Name of age category. Can take one of 6 values: Adult, ChildAgeA, ChildAgeB, ChildAgeC, ChildAgeD or Infant.
3 | @minAge | int |  | Minimum age qualifying for the category. Multiple age categories cannot be configured with the same minimum age. Category is deemed to apply for any age starting at that minimum value, up to the min value of the next category if applicable.
3 | @maxOccupants | int |  | Maximum number of people for this age category that can stay in this room. The max number of guests who can stay in a room is defined by the room's maxOccupant attribute.
3 | RateThreshold | - | * | Only returned if returnRoomAttributes is specified in RQ. Defines min and max acceptable rates that can be uploaded via EQC AR or Expedia Extranet. If the rate falls outside this min or max value, the AR rate update will be ignored and a warning will be returned.
3 | @type | Enum |  | Defines against which type of rate this threshold applies. Possible values are: NetRate: returned for ExpediaCollect-only and ETP hotels. SellRate: returned for HotelCollect-only and ETP hotels. For ETP hotels, where only one rate (net or sell) is managed, Expedia will still compute both thresholds and will verify that the derived rate is also within acceptable threhsolds.
3 | @minAmount | Double |  | Minimum acceptable rate amount value that can be uploaded for any rateplan under this room type. Any rate update sent in an AR message with a value below that amount will be ignored and a warning will be returned.
3 | @maxAmount | Double |  | Maximum acceptable rateamount value that can be uploaded for any rate plan under this room type. Any rate update sent in an AR message with a value exceeding that amount will be ignored and a warning will be returned.
3 | @source | Enum |  | Defines how minAmount and maxAmount were calculated. 2 possible values: RecentReservations: thresholds calculated using last 10 reservations, and applying multiplication and division factor to find max and min values. Manual: manually defined by Expedia. RecentReservation is Expedia's default method.
3 | RatePlan | - |  | Rate Plans belonging to that room type and hotel. By default, only active rate plans are returned. This element is repeated once per rate plan that exists for this room type.
3 | @id | String |  | Expedia Rate Plan ID. Max length: 50 characters.
3 | @code | String |  | Expedia Rate Plan Code. Customizable identifier (can only be defined/modified by Expedia). Default value is rate plan type (RoomOnly, Corp, PKG). Max length: 50 characters.
3 | @name | String |  | Expedia Rate plan name. Max length: 255 characters.
3 | @status | Enum |  | Rate Plan status: active or inactive. By default, only active rate plans are returned.
3 | @type | Enum |  | Possible values are: Standalone, Package, Corporate.
3 | @distributionModel | Enum |  | Possible values are: ExpediaCollect, HotelCollect.
3 | @rateAcquisitionType | Enum |  | Possible values are: NetRate, LowestAvailableRate, SellRate, Derived, Linked. EQC partner must send rate update using the correct rate acquisition type defined in the Expedia system. Any rate plan with a "Derived" rate acquisition type cannot be updated by the EQC partner. Any rate plan with a Linked rate acquisition type will have a rate plan linkage rule defined. The rule will indicate which portion of the rate plan is linked, and what is the rule applied on the rate. To obtain rate plan linkage information back in a product response, the returnRateLink attribute must be used in the request.
3 | @parentId | String | * | Returned for Linked or Derived rate plans, to indicate the parent rate plan ID. Max length: 50 characters. Only returned when rate link rules exist, and if returnRateLink is specified as "true" in RQ. "O" column will contain the letter "R" to indicate these are returned only when the appropriate RateLinkage attribute is set to true.
3 | @rateLinkStart | Date | R | Earliest start date of the rate plan linkage rule. 
3 | @rateLinkEnd |  | R | Latest end date of a rate link rule, optional even for linked products. If the link rule has no end date and will apply indefinitely, this attribute will not be returned.
3 | @isAvailStatusLinked | Boolean | R | Is rate plan availability status (open/close) linked to parent or not. When avail status is not linked, partner has to manage the avail status of the linked rate plan. 
3 | @areMinMaxLOSLinked | Boolean | R | Are min and max LOS restrictions linked to parent or not. . When LOS restrictions are not linked, partner has to manage the LOS restrictions of the linked rate plan.
3 | @isCTALinked | Boolean | R | Is close to arrival restriction linked to parent or not.
3 | @isCTDLinked | Boolean | R | Is close to departure restriction linked to parent or not.
3 | @rateLinkExceptions | Boolean | R | Indicates if any exception was defined, whereby specific days of the child rate plan would not be linked to the parent. If this is true, details of the exceptions will not be returned by this API. They can be found on Expedia Partner Central. If attribute is missing in response for a linked rate plan, there is no exception defined.
4 | RatePlanLinkDefinition | - | R | 
4 | @linkType | Enum | R | Defines the type of adjustement made on the rate. Possible values are Percent and Amount.
4 | @linkValue | Double | R | Defines the actual adjustment being applied to the rate. Can take a positive or negative value, depending on the type of adjustment applied. Only returned if returnRatePlanAttributes is specified as "true" in RQ. "O" column will contain the letter "A" to indicate these are returned only when the appropriate Additional rate plan attribute is set to true.
3 | RatePlan | - |  | Continuation of the rate plan section from above, this time for additional rate plan attributes being returned when returnRatePlanAttributes is set to true in RQ
3 | @pricingModel | Enum | A | Rate plan's pricing model. Will be identical across all rate plans unless property is undergoing pricing model conversion. Possible values are: PerDayPricing, OccupancyBasedPricing, PerDayPricingByDayOfArrival, PerDayPricingByLengthOfStay, PerPersonPricingByDayOfArrival, OccupancyBasedPricingByDayOfArrival.
3 | @occupantsForBaseRate | Int | A | Only returned for PerDayPricing, PerDayPricingByDayOfArrival and PerDayPricingByLengthOfStay. Indicates the number of people included in the rate update we receive for this rate plan. Additional guests above this number will be charge extra fees, if defined.
3 | @depositRequired | Boolean | A | For HotelCollect distribution model only. Indicates if a deposit is expected to be collected by hotel at time of booking.
3 | @minLOSDefault | Int | A | Default minimum LenghtOfStay restriction (1 by default). Will always be considered along with the value defined for each stay date. The most restrictive of this default and the daily restriction will prevail.
3 | @maxLOSDefault | Int | A | Default maximum LenghtOfStay restriction (28 by default). Will always be considered along with the value defined for each stay date. The most restrictive of this default and the daily restriction will prevail.
3 | @minAdvBookDays | Int | A | Minimum number of days before the checkin date for a booking to be made. For example, if this is set to 7, a customer needs to book this rate plan more than 7 days in advance. If he tries to book it closer to the checkin date, it will not be available.
3 | @maxAdvBookDays | Int | A | Maximum number of days before checkin date for a booking to be made. For example, if this is set to 2, a customer needs to book this rate plan within 2 days of his checkin date. If he tries to book more than 2 days in advance, it will not be available.
3 | @bookDateStart | Date | A | Optional, only returned if a constraint is set on the booking period. Date at which this rate plan starts being available for searching on any Expedia POS. If in the past, indicates rate plan book date start is not restricted anymore.
3 | @bookDateEnd | Date | A | Optional, only returned if a constraint is set on the booking period. Date at which this rate plan stops being available for searching on any Expedia POS. If in the past, indicates rate plan is not available anymore.
3 | @travelDateStart | Date | A | Optional, only returned if a constraint is set on the travel period. Date at which customers can start checking in for a stay including this rate plan. If in the past, indicates rate plan travel start date is not restricted anymore.
3 | @travelDateEnd | Date | A | Optional, only returned if a constraint is set on the travel period. Latest date at which customers can checkout for a stay including this rate plan. If in the past, indicates rate plan is not available anymore.
3 | @mobileOnly | Boolean | A | Indicates this rate plan is only available through shopping done on mobile devices.
3 | @createDateTime | DateTime | A | Creation date and time of this rate plan. Time will always be returned as UTC.
3 | @updateDateTime | DateTime | A | Date and time of the last update made on this rate plan. Time will always be returned as UTC.
4 | DayOfWeekBookingRestriction | - | A | Defines if people looking for this rate must meet certain DOW booking pattern restrictions. Type can be one of 4 (defined below). By default, for rates with none of these restrictions, this element is not returned at all. It will only be returned if there is a specific restriction set that would prevent people for specific checkin or checkout DOW. A rate plan can have up to 1 of each type returned (4 occurences of this element).
4 | @type | Enum | A | Type of restriction. Can take one of 4 values: StartOn: People looking for this rate must checkin on these selected day(s) of week. EndOn: People looking for this rate must checkout on these selected day(s) of week. IncludeOneOf: People looking for this rate must include at least one of these selected day(s) of week. IncludeAll: People looking for this rate must include all these selected day(s) of week.
 | @sun | Boolean | A | If set to true, restriction applies to Sunday.
 | @mon | Boolean | A | If set to true, restriction applies to Monday.
 | @tue | Boolean | A | If set to true, restriction applies to Tuesday.
 | @wed | Boolean | A | If set to true, restriction applies to Wednesday.
 | @thu | Boolean | A | If set to true, restriction applies to Thursday.
 | @fri | Boolean | A | If set to true, restriction applies to Friday.
 | @sat | Boolean | A | If set to true, restriction applies to Saturday.
4 | Compensation | - | C | Applicable compensation rule to this rate plan. The same compensation rule can be applied to multiple rate plans within Expedia, but PARR will return what is the applicable compensation rule for each rate plan.
4 | @default | Boolean | C | Indicates if this occurrence of compensation is the default rule applied. When set to true, only percent and optionally minAmount will be returned. When set to false, from/to will always be returned, along with other optional attributes.
4 | @percent | Double | C | Compensation rate (percentage). Returns a number expressed between 0.00 and 100.00 inclusively (along with up to 2 decimals).
4 | @minAmount | Double | C | Optional. Minimum compensation amount to be charged (absolute value, up to 2 decimals.). Only applicable if minAmount is defined, and if compensation amount derived from percent is lower than this value: in that case, the compensation owed to Expedia will equal this min amount value instead of the percentage.
4 | @from | Date | C | Optional, only returned for non-default compensation. Date at which this compensation rule starts applying. Can be in the past. Compensation rules are always based on travel (checkin/checkout) dates.
4 | @to | Date | C | Optional, only returned for non-default compensation. Date at which this compensation rule stops applying. Can be in the past. Compensation rules are always based on travel (checkin/checkout) dates.
4 | @sun | Boolean | C | If set to true, rule applies to Sunday.
4 | @mon | Boolean | C | If set to true, rule applies to Monday.
4 | @tue | Boolean | C | If set to true, rule applies to Tuesday.
4 | @wed | Boolean | C | If set to true, rule applies to Wednesday.
4 | @thu | Boolean | C | If set to true, rule applies to Thursday.
4 | @fri | Boolean | C | If set to true, rule applies to Friday.
4 | @sat | Boolean | C | If set to true, rule applies to Saturday.
4 | CancelPolicy | - | P | The current applicable cancellation policy for the rate plan. The same cancellation policy can be applied to multiple rate plans within Expedia, but PARR will return the applicable cancellation policy for each rate plan. Cancellation policies apply to both reservation cancellations and modifications made to the product initially booked or to stay dates.
4 | @default | Boolean | P | Set to true if this is the default cancellation policy. Set to false if this is an exception to the default cancellation policy. 
4 | @startDate | Date | P | Start date for an exception policy. Default policies will not contain start dates.
4 | @endDate | Date | P | End date for an exception policy. Default policies will not contain end dates.
4 | @cancelWindow | Int | P | Cancellation window in hours. Returns between 1 and 999 hours. The window is relative to a configuration at the property level (not yet available via PARR). Expedia properties are by default configured to a 6pm cancel time but this value can be changed to any time value. The property cancellation time, along with the number of hours, allows us to establish at exactly what time we consider a cancellation to be inside or outside the cancellation window. This attribute is optional and will not be returned if the policy is non refundable.
4 | @nonRefundable | Boolean | P | If true, the penalty will always be the full cost of stay for both inside and outside of the cancellation window. Attribute is optional and will only be returned if true.
4 | @createDateTime | DateTime | P | The time and date of the creation of the cancellation policy.
4 | @updateDateTime | DateTime | P | The time and date of the latest update to the cancellation policy.
5 | Penalty | - | P | Fees charged to customers for the cancellation or modification of a reservation. This element is optional and will not be included if the default policy is non-refundable.
5 | @insideWindow | Boolean | P | True for penalties applied for cancellation or modification of a reservation inside of the cancellation window, false for cancellation or modification of a reservation outside of the cancellation window.
5 | @flatFee | Double | P | The penalty fee collected for the cancellation or modification of a reservation. . Attribute is optional and will not be returned if 0. For products with a SellRate or LowestAvailableRate acquisition type, or are linked/derived from rate plans with a SellRate or LowestAvailableRate acquisition type, amount returned will be the fee charged to the customer including Expedia's commission. For products with a NetRate acquisition type, or are linked/derived from rate plans with a NetRate acquisition type, amount returned will be fee collected from the customer net Expedia's commission. When applicable, the fee is applied on top of the per stay penalty.
5 | @perStayFee | String | P | The penalty charged relative to the cost of the stay. Possible values include: None, 1stNightRoomAndTax, 2ndNightsRoomAndTax, 10PercentCostOfStay, 20PercentCostOfStay, 30PercentCostOfStay, 40PercentCostOfStay, 50PercentCostOfStay, 60PercentCostOfStay, 70PercentCostOfStay, 80PercentCostOfStay, 90PercentCostOfStay, FullCostOfStay
2 | Warning |  | * | Warning is a placeholder, where EQC might eventually return warnings to indicate partial data results for product mapping.
2 | @code |  |  | Placeholder.
1 | AvailRateList | - |  | Returned when "AvailRateRetrieval" is specified in the request. Contains avail and/or rate information for the products requested.
2 | Hotel | - |  | 
2 | @id | Int |  | Hotel ID defined by Expedia and uniquely identifying a property in Expedia system.
2 | AvailRate | - |  | Grouping of Avail, Rate and Restriction data for one day. One grouping will be returned per day requested, containing all products requested.
2 | @date | Date |  | Date for which the avail, rate and restriction data provided for the product applies. When only one rate plan ID is requested, we will return a maximum of 365 days of data in a response. If more than 365 days were requested, we will return the first 365 days of the date range, without any other error or warning indicating we didn't return everything requested. When requesting more than one rate plan ID, or not requesting a specific room or rate plan ID, we will return a maximum of 31 days in a response. If more than 31 days were requested, we will return the first 31 days of the date range, without any other error or warning indicating we didn't return everything requested.
3 | RoomType | - |  | 
3 | @id | String |  | Expedia room type ID. Max Length = 50
3 | @closed | Boolean |  | Room type availability status
4 | Inventory | - |  | 
4 | @baseAllocation | Int | * | Only returned for hotels configured for base allocation.
4 | @flexibleAllocation | Int | * | Always returned. In the case of a hotel using base allocation: number of additional rooms available for this room type. In the case of a hotel not on base allocation, it will be equal to the totalInventoryAvailable attribute. Max possible value = 4999.
4 | @totalInventoryAvailable | Int |  | Total number of rooms available for this room type. Max possible value = 4999.
4 | @totalInventorySold | nonNegativeInteger |  | Total number of rooms sold by Expedia. Will always be returned, will be set to 0 if no rooms sold yet.
4 | RatePlan | - |  | Requested rate plans. Rate plan data could be missing if appropriate filters are disabled in RQ (rates, restriction and rate avail status), or if no rate plan data has been received from the EQC partner for the requested stay dates yet.
4 | @id | String |  | Expedia rate plan ID. Max Length = 50.
4 | @closed | Boolean | * | Rate plan availability status. Optional due to possibility that it would be missing for stay dates with partially loaded information.
5 | Rate | - | * | 
5 | @currency | String |  | 3-letter currency code assigned to property on Expedia Partner Central. Based on ISO 4217 specification.
5 | @rateChangeIndicator | Boolean | * | Only returned for products that are enabled for Day-Of-Arrival pricing.
5 | @lengthofStay | Int |  | Returned for hotels configured on per-day length of stay pricing. Only defined length of stay rates will be returned.
6 | PerDay | - |  | Rate structure for hotels configured for per-day pricing
6 | @rate | Decimal |  | Rate value with up to 3 decimal points. Max number of digits including decimal points: 16
6 | PerOccupancy | - |  | Rate structure for hotels configured for per-occupancy pricing
6 | @rate | Decimal |  | Rate value with up to 3 decimal points. Max number of digits including decimal points=16
6 | @occupancy | Int |  | Occupancy applicable to the attached rate. Max possible value = 28.
6 | PerPerson | - |  | Rate structure for hotels configure for per-person pricing
6 | @rate | Decimal |  | Rate value with up to 3 decimal points. Max number of digits including decimal points=16
5 | Restrictions | - | * | Restrictions can be missing if data was partially loaded. Else, all restrictions will always be returned with either the value received from EQC partner or their default values.
5 | @minLOS | Int | * | Minimum Length of Stay allowed. Maximum possible value=28
5 | @maxLOS | Int | * | Maximum Length of Stay allowed. Maximum possible value=28
5 | @closedToArrival | Boolean | * | 
5 | @closedToDeparture | Boolean | * | 

## Error Handling
You may experience technical difficulties when developing and trying to connect to Expedia QuickConnect PARR. This section addresses the most common errors and problems that an EQC partner might encounter.

### Network/System Communication Issues

There are many different error scenarios related to communication and authentication. Here are the possible scenarios, for any of the supported EQC APIs.

#### Connection Cannot Be Established
For many different reasons, attempting to connect to Expedia QuickConnect might not work. If the problem is:
- Connection timeout (before establishing connection)
- Cannot resolve host name
- Cannot establish connection

Before looking for assistance, the EQC partner should:
- Verify the URL used to connect to Expedia QuickConnect and make sure the address starts with https://
- Verify the domain name, and make sure that the address you are using is the right one for the environment you are targeting (do not try to send QA information to production, or vice-versa)
- If the EQC partner's system is behind a firewall, make sure that port 443 is opened for connection to Expedia's production environment (contact Expedia if you don't know what the URL to the production environment is), and also opened for connection to https://simulator.expediaquickconnect.com for the Expedia QuickConnect simulator.

It is also possible to fail to obtain a connection because Expedia QuickConnect servers cannot accept any more connections than the ones currently established to other EQC partners. In this case, the EQC partner will receive a communication error saying: Connection refused.

When this happens, the EQC partner should simply enter in retry mode.

#### SSL Certificate Validation Problems
EQC partners developing in Java should use version 1.4.2_13 or more recent to avoid issues with certificate signing authorities. If EQC partners prefer to keep using an older version of Java or in-house SSL libraries, they need to import the Entrust CA certificate.
- Entrust CA common name CN = Entrust.net Certification Authority (2048).
- To manually import the Entrust.net Certification Authority (2048) Certificate, download the CA certificate at https://www.entrust.net/downloads/root_request.cfm.


#### System errors retry recommendation

Whenever Expedia PARR return system errors (error code >= 4000), it is up to the EQC partner to decide what is preferable.

If the EQC partner fails to retrieve product or avail and rate data, for systems where a user is expecting instant results, we suggest an immediate retry strategy (1 instantaneous retry).


#### | Connection Established, No Response

If the EQC partner's system manages to establish a connection to Expedia QuickConnect servers, but is not getting a response, the EQC partner should:
- Make sure that the EQC partner's system is not closing the connection too early. Some retrieval queries can take time, and Expedia will keep the connection active for up to 60 seconds. Therefore, the EQC partner should keep the connection open for at least 60 seconds.
- Make sure the content length specified in the HTTPS header corresponds to the actual length of the HTTPS request. If the length specified in the header is actually longer than the message itself, it results in Expedia QuickConnect waiting for bytes that never arrive, and eventually times out.

### Error Codes and Descriptions

Error code | Error description | Explanation and EQC partner Action
---------- | ----------------- | -----------------------------------
1000 | Access denied: you are not authorized to use Expedia QuickConnect. Please contact Expedia to gain access. | This message should not be retried. For assistance, please contact rollout@expedia.com for new activations, or hothelp@expedia.com for existing connections.
1001 | Authentication error: invalid username or password. | This message should not be retried. Verify username and password configured in your EQC interface.  For assistance, please contact rollout@expedia.com for new activations, or hothelp@expedia.com for existing connections.
1003 | The user account provided doesn't have the right access level | This message should not be retried. For assistance, please contact rollout@expedia.com for new activations, or hothelp@expedia.com for existing connections.
2002 | Parsing error: <parsing_error_description>. | Correct XML format to comply with Expedia QuickConnect's specification. Developers of the EQC partner system should be involved to find the problem.
2010 | The namespace specified is invalid. | Correct namespace and send a new message. Please note that namespaces are used to version Expedia service interfaces. Developers of the EQC partner system should be involved to find the problem.
3010 | Validation against schema failed because a value exceeds its defined length, the format is wrong, or because of another validation enforced by schema. | Correct the error in the system, and drop this message (no retry). Developers of the EQC partner system should be involved to find the problem.
3015 | Business validation error.  | EQC partner needs to capture the description returned along with this code and should advise affected hotel or property of the error to verify if there is a problem with its system or the implementation of Expedia QuickConnect.
3020 | Validation error: start date must not be before yesterday. | Make sure the system cannot send a date in the past, and drop this message (no retry).
3021 | Validation error: end date must not be before start date. | Make sure the system cannot send an end date smaller than a start date, and drop this message (no retry).
3129 | Invalid Date. | Verify the dates you provided in the AR RQ and then resubmit your message.
3143 | There is no Product information for the hotel in the database | The hotel you requested information for has no products currently defined in Expedia system yet. This should happen for new hotels not ready to be managed by EQC partner yet. Please contact your market manager for more details.
3144 | There is no matching product information avalable | The request you made to obtain avail and rate data didn't produce any results. This might for different reasons: You requested dates for which no avail or rates are currently defined in Expedia system, or you issued a request for all active products but there are no active products for this hotel.
3202 | Hotel ID not found. You either specified an invalid hotel ID or your account is not linked to this hotel. | Verify if there is a mapping issue in EQC partner's system. If the mapping is correct, please verify that the user configured for Expedia QuickConnect has access to update this property (i.e. the user is able to access this hotel through Expedia Partner Central).
3203 | The following RoomTypeIDs do not belong to the given hotel : <room_type_ID> | Fix mapping in EQC partner's system.
3204 | The following RatePlanIDs do not belong to the given hotel : <rate_plan_ID> | Fix mapping in EQC partner's system.
3205 | Rate Plan ID <rateplanID> does not belong to Room Type ID <roomTypeID> | When requesting avail and rate data, the EQC partner provided an incorrect room type ID – rate plan ID association. Please verify your mapping and drop this message (no retry).
3210 | Communication error: exceed max number of connections allowed (1). | EQC partner tried to open more than one simultaneous connection per hotel. For any given hotel, never attempt to send 2 concurrent messages. Always wait for a message to be responded by Expedia before sending any subsequent message
4000, 4004, 4007 | Internal system error, please try again in a few minutes. | Please retry.
4001 | Internal timeout error, please try again in a few minutes. | Please retry.
4100, 4101 | Internal System Error. Do not retry this request. Our support team was notified of the problem. | Do not retry this message.  Expedia has been notified of the issue and will work on finding a solution for it. 
4206 | Expedia QuickConnect interface is temporarily closed. Please try again shortly. | If AR, enter in incremental retry mode. 
5000 | Internal database error, please try again in a few minutes.  | If AR, BC or PARR, enter in incremental retry mode. 