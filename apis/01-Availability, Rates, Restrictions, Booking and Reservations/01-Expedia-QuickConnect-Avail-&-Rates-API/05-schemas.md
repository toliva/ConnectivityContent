# XML Schemas
## Availability and Rates Request (AR RQ)
### AR RQ Schema Overview
Please note that this overview provides the most recent structure of EQC AR API (namespace http://www.expediaconnect.com/EQC/AR/2011/06). The API actually also supports the previous version of the schema (namespace http://www.expediaconnect.com/EQC/AR/2007/02), without the repeatable AvailRateUpdate element. The XSD file for the AR RQ API available on http://www.expediaquickconnect.com also supports both the old and new format under the new version.

**Need to insert the pic from the spec of the overview**

### AR RQ Schema Complete Definition

_Legend: O = Optional_

Level | Element / @Attribute | Data Type | Number of occur. | Description | EQC validations
----- | -------------------- | --------- | ---------------- | ----------- | ---------------
0 | AvailRateUpdateRQ |  | 1 |  DC common message header structure
0 | @xmlns | URL | 1 | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Supported namespaces for AR messages are: http://www.expediaconnect.com/EQC/AR/2007/02 & http://www.expediaconnect.com/EQC/AR/2011/06 | Valid namespace, defined by at least one version of AR schema.
1 | Authentication | - | | Grouping of required information to grant access to Expedia QuickConnect interface.
1 | @username | String | | Username for Expedia QuickConnect login (case sensitive), provided by Expedia. | Minimum length: 4, Maximum length: 30, Username exists, User is allowed to access Expedia QuickConnect
1 | @password | String | | Password for Expedia QuickConnect login (case sensitive), provided by Expedia. | Minimum length: 6, Maximum length: 30, Password fits with the username
1 | Hotel | - | | Information about Hotel
1 | @id | Integer | | Hotel ID defined by Expedia and uniquely identifying a property in Expedia system. | Positive integer of 14 digits or less, Hotel ID is valid, Hotel ID in Expedia system is assigned to the credentials provided in Authentication node.
1 | AvailRateUpdate | - | | Grouping of updates for one or more room type(s) and rate plan(s), for one or a list of date ranges. | This element can be omitted in the request and everything brought back one level down if EQC partner doesn’t see a need to send multiple updates within same message, but also to insure backward compatibility.
2 | DateRange | - | | Specify dates on which availability and rate information provided in this message applies. A 'from' and a 'to' date must be specified. They can be equal if the EQC partner wants to update only one date. This element can be repeated more than once if EQC partner wants to update non-consecutive dates or date ranges. | “from date” <= “to date”
2 | @from | Date | | Start date of the interval (format: yyyy-mm-dd) | “From date” >= today – 1
2 | @to | Date | | End date of the interval (format: yyyy-mm-dd).  | “To date” <= (today + 2yrs + 1 day)
**Note:** The following 7 attributes are used to indicate on which day of the week, from the date range specified in the “from”-“to” attributes, the updates should be applied. If none of the 7 attributes are specified, updates will apply to all days of the week. As soon as one attribute is specified, the updates will only apply to the days where the attribute value is set to true.
If EQC partners need to use this feature, Expedia recommends specifying all 7 attributes, indicating on which day the updates should be applied (attribute value=true) and on which day the updates should not be applied (attribute value=false) 

Level | Element / @Attribute | Data Type | Number of occur. | Description | EQC validations
----- | -------------------- | --------- | ---------------- | ----------- | ---------------
2 | @sun | Boolean | O | If set to true, apply update for each Sunday in the specified date interval.
2 | @mon | Boolean | O | If set to true, apply update for each Monday in the specified date interval.
2 | @tue | Boolean | O | If set to true, apply update for each Tuesday in the specified date interval.
2 | @wed | Boolean | O | If set to true, apply update for each Wednesday in the specified date interval.
2 | @thu | Boolean | O | If set to true, apply update for each Thursday in the specified date interval.
2 | @fri | Boolean | O | If set to true, apply update for each Friday in the specified date interval.
2 | @sat | Boolean | O | If set to true, apply update for each Saturday in the specified date interval.
2 | RoomType | - | | Room type to be updated by this message. This element can be repeated more than once if hotel wants to update multiple room types for the same set of dates.
2 | @id | String | | Room type ID (defined by Expedia). Note: mapping of Expedia IDs to hotel codes has to be done by EQC partner. | String of 50 characters or less, RoomType ID is valid only if the specified hotel has the corresponding room type defined for it in Expedia Partner Central, Room type should be active. If it isn’t, the update will still work but a warning will be returned to indicate that this room type is inactive. 
2 | @closed | Boolean | O | If true, the room type is no longer available on Expedia for dates specified in the request. If false, the room type is reopened if previously closed, or stays open if already open. | A close request will be refused if the room is enabled for base allocation and has base allocation left.







## Availability and Rate Response (AR RS)
The availability and rate response message is straightforward: it is returned synchronously to update the property’s system with the status of the AR request. The status can either be Success or Error. If successful, it can contain a warning.
### AR RS Schema Overview

**need to insert pic from eqc spec - page 27**

### AR RS Schema Complete Definition

**need help inserting table from spec - page 28**
