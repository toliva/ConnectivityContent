# API Definition

##Communication Protocol

###XML over HTTPS – Synchronous

The communication protocol between properties and Expedia QuickConnect consists of HTTPS (HTTP Secure) transactions with embedded XML documents. Note the following:

-   Only HTTPS posts to Expedia’s secure server are supported. Using HTTP *will not work*. (Expedia QuickConnect servers are not configured to accept posts on the HTTP service.)

-   Communication is synchronous: on the same socket, Expedia QuickConnect reads the request and issues a positive or negative response, depending on whether Expedia QuickConnect is able to process the request or not.

-   Content-Type of the HTTP Request Header should be: “text/xml”.

##Authentication

To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for BR, AR, BC or PARR. An element called “Authentication” is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

```xml
<Authentication username="testuser" password="testpass"/>
```

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property.

Upon submitting an EQC enrollment form to the EQCHelp team, the EQC credentials necessary for authentication will be provided. For more details on how to obtain credentials, please contact your Connectivity Account Manager or email EQCSS@expedia.com.

##AR RQ Schema Complete Definition

L | Data element | Data type | O | Description | EQC validations
- | ------------ | --------- | - | ----------- | ---------------
0 | AvailRateUpdateRQ | - |  | Root element | 
0 | @xmlns | URL |  | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Supported namespaces for AR messages are: http://www.expediaconnect.com/EQC/AR/2007/02 and http://www.expediaconnect.com/EQC/AR/2011/06  | Valid namespace, defined by at least one version of AR schema.
1 | Authentication | - |  | Grouping of required information to grant access to Expedia QuickConnect interface.  | 
1 | @username | String |  | Username for Expedia QuickConnect login (case sensitive), provided by Expedia.  | - Minimum length: 4
- Maximum length: 30
- Username exists 
- User is allowed to access Expedia QuickConnect
1 | @password | String |  | Password for Expedia QuickConnect login (case sensitive), provided by Expedia. | - Minimum length: 6
- Maximum length: 30
- Password fits with the username
1 | Hotel | - |  | Information about Hotel | 
1 | @id | Integer |  | Hotel ID defined by Expedia and uniquely identifying a property in Expedia system. | - Positive integer of 14 digits or less
- Hotel ID is valid 
- Hotel ID in Expedia system is assigned to the credentials provided in Authentication node.
1 | AvailRateUpdate | - |  | Grouping of updates for one or more room type(s) and rate plan(s), for one or a list of date ranges. | This element can be omitted in the request and everything brought back one level down if EQC partner doesn’t see a need to send multiple updates within same message, but also to insure backward compatibility.
2 | DateRange | - |  | Specify dates on which availability and rate information provided in this message applies. A 'from' and a 'to' date must be specified. They can be equal if the EQC partner wants to update only one date. 
This element can be repeated more than once if EQC partner wants to update non-consecutive dates or date ranges. | - “from date” <= “to date”

2 | @from | Date |  | Start date of the interval (format: yyyy-mm-dd) | - “From date” >= today – 1
2 | @to | Date |  | End date of the interval (format: yyyy-mm-dd).  | - “To date” <= (today + 2yrs + 1 day)
The following 7 attributes are used to indicate on which day of the week, from the date range specified in the “from”-“to” attributes, the updates should be applied. If none of the 7 attributes are specified, updates will apply to all days of the week. As soon as one attribute is specified, the updates will only apply to the days where the attribute value is set to true.
If EQC partners need to use this feature, Expedia recommends specifying all 7 attributes, indicating on which day the updates should be applied (attribute value=true) and on which day the updates should not be applied (attribute value=false)
2 | @sun | Boolean | * | If set to true, apply update for each Sunday in the specified date interval. | 
2 | @mon | Boolean | * | If set to true, apply update for each Monday in the specified date interval. | 
2 | @tue | Boolean | * | If set to true, apply update for each Tuesday in the specified date interval. | 
2 | @wed | Boolean | * | If set to true, apply update for each Wednesday in the specified date interval. | 
2 | @thu | Boolean | * | If set to true, apply update for each Thursday in the specified date interval. | 
2 | @fri | Boolean | * | If set to true, apply update for each Friday in the specified date interval. | 
2 | @sat | Boolean | * | If set to true, apply update for each Saturday in the specified date interval. | 
2 | RoomType | - |  | Room type to be updated by this message.
This element can be repeated more than once if hotel wants to update multiple room types for the same set of dates. | 
2 | @id | String  |  | Room type ID (defined by Expedia). Note: mapping of Expedia IDs to hotel codes has to be done by EQC partner. | - String of 50 characters or less.
- RoomType ID is valid only if the specified hotel has the corresponding room type defined for it in Expedia Partner Central.
- Room type should be active. If it isn’t, the update will still work but a warning will be returned to indicate that this room type is inactive. 
2 | @closed | Boolean | * | If true, the room type is no longer available on Expedia for dates specified in the request. 
If false, the room type is reopened if previously closed, or stays open if already open. | - A close request will be refused if the room is enabled for base allocation and has base allocation left.
3 | Inventory | - |  | Number of rooms being made available for sale on Expedia.
Note: only applies to a single room type.
 | - Either flexibleAllocation or totalInventoryAvailable, but not both, must be sent in any message for an availability update.
3 | @flexibleAllocation | Integer | * | In the case of a hotel using base allocation: number of additional rooms available for this room type, for each day specified by "DateRange" element.
 | - Minimum value: 0
- Maximum value: 4999
3 | @totalInventoryAvailable | Integer | * | Total number of rooms made available via Expedia for this room type, for each day specified by “DateRange” element, inclusive of base and flexible allocation.
Note: In the case of a hotel using base allocation: if the value sent is lower than the current base allocation room count, the Integer value will be changed by Expedia QuickConnect to equal the current base allocation amount and a warning (7013) will be returned. | - Minimum value: 0
- Maximum value: 4999
3 | RatePlan | - | * | Information about a rate plan. 
This element can be repeated more than once if hotel wants to update multiple rate plans under this room type for the same set of dates.
Note: 
- Rate plans can only belong to a single room type. 
- Rate plans should be active. If it isn’t, the update will still work but a warning will be returned to indicate that this rate plan is inactive. | 
3 | @id | String |  | Rate plan ID (assigned by Expedia). Unique throughout Expedia system, so the same rate plan ID cannot be associated to more than one room type.
 | - String of 50 characters or less
- RatePlan ID is valid only if the specified hotel has the corresponding rate plan defined for it in Expedia Partner Central. 
3 | @closed | Boolean | * | If true, the rate plan is no longer available on Expedia for dates specified under the room type. 
If false, the rate plan is reopened if previously closed, or stays open if already open. | - For hotels with base allocation contracts, if this is the last rate plan opened,  and a close request is received, it will be rejected with warning code 7014. 
4 | Rate | - | * | Room rates.
The type of rate (sell, net, LAR) to include depends on the configuration for this hotel.  Up to 28 rate elements can be specified when updating per day and per length of stay rates. Else only one rate element should be defined. | - Use only one pricing model
- Pricing model in synch with configuration of the property on Expedia Partner Central or via the PARR interface
4 | @rateChangeIndicator | Boolean | * | To be used with rate plans enabled for day-of-arrival pricing only (message will be rejected if this attribute is used in conjunction with a rate plan that is not enabled for DOA pricing). Indicates that regardless of the applicable rate on the arrival date, the rate will change on this date. | - Rate plan is day-of-arrival pricing enabled. It not, update is rejected with error code 3125.
4 | @currency | String | * | 3-letter currency code assigned to property on Expedia Partner Central. Based on ISO 4217 specification.
Optional only when message is for rate change indicator updates, without any rate modification. | - Minimum length  = 3
- Must match the property currency defined on Expedia Partner Central
- Must always be provided when update request includes rates.
4 | @lengthOfStay | Int | * | For properties managing per day and per length of stay rates. Rates from length of stay 1 up to 28 can be defined by arrival date. This attribute contains the length of stay for which this rate applies. | - Minimum value=1
- Maximum value=28
5 | PerDay | - | * | To be used when property is configured with Per Day pricing on Expedia Partner Central. This rate is for base occupancy of the room. | - Property is configured with per day pricing on Expedia Partner Central.
5 | @rate | Decimal |  | Rate for base occupancy, per day. When used in conjunction with length of stay pricing attribute, the rate defined is the rate per day. If the rate is for 100$ for LOS=7, then the total of this stay’s rate would be 7x100=700. | - Rate has to be >= 0.000
- Rate has to be <= 16 digits long
5 | PerOccupancy | - | * | To be used when property is configured with occupancy based pricing on Expedia Partner Central. The rate specified here is for the total occupancy and does not represent a per-person value. So if the occupancy is 3, and the rate specified is $200, the rate of this room when a customer books it through Expedia will be $200. | - Property is configured with occupancy-based pricing on Expedia Partner Central.
5 | @occupancy | Integer |  | Occupancy of the room to which the rate specified applies (not related to base occupancy). | - Minimum value: 1
- Maximum value: max occupancy defined for this room in Expedia system.
5 | @rate | Decimal |  | Rate for total occupancy.  | - Rate has to be >= 0.000
- Rate has to be <= 16 digits long
5 | PerPerson | - | * | To be used when property is configured with per person pricing on Expedia Partner Central. The rate specified here will be for one person, for double occupancy. For example, a rate of $75 means that a customer booking this room for 2 person will be charged $75x2=$150. | - Property is configured with Per Person pricing on Expedia Partner Central 
5 | @rate | Decimal |  | Rate for one person, based on double occupancy. Single person supplement and additional person fees are configured when rate plan is created and cannot be modified in this interface. | - Rate has to be >= 0.000
- Rate has to be <= 16 digits long
4 | Restrictions | - | * |  | 
4 | @minLOS | Integer | * | Specifies minimum length of stay required to qualify for this rate. Guest has to stay at least this number of nights to benefit from rate.  If not specified, the minimum length of stay will be set to a default value configured in Expedia systems (1 is the default, but it can be changed).
Refer to section 5.6.4 for more details on MinLOS and MaxLOS | - Minimum value: 1
- Maximum value: 28
- Attempting to set MinLOS greater than Expedia’s configured value for the hotel will result in the update being refused with error code 3135.
4 | @maxLOS | Integer | * | Specifies maximum length of stay allowed for this product and day. If not specified, the maximum length of stay value will be set to a default value configured in Expedia systems (28 is the default, but it can be changed).
Refer to section 5.6.4 for more details on MinLOS and MaxLOS. | 
4 | @closedToArrival | Boolean | * | Designates the rate plan as unavailable for check-in by customers. A customer’s stay must start on an earlier or later date in order to access this rate plan. | 
4 | @closedToDeparture | Boolean | * | Designates the rate plan as unavailable for check-out by customers. A customer’s stay must end on an earlier or later date in order to access this rate plan. | 
