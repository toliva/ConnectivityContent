# XML Schemas
## Availability and Rates Request (AR RQ)
### AR RQ Schema Overview
Please note that this overview provides the most recent structure of EQC AR API (namespace http://www.expediaconnect.com/EQC/AR/2011/06). The API actually also supports the previous version of the schema (namespace http://www.expediaconnect.com/EQC/AR/2007/02), without the repeatable AvailRateUpdate element. The XSD file for the AR RQ API available on http://www.expediaquickconnect.com also supports both the old and new format under the new version.

**Need to insert the pic from the spec of the overview**

### AR RQ Schema Complete Definition

Legend: O = Optional

Level | Element / @Attribute | Data Type | Number of occur. | Description | EQC validations
----- | -------------------- | --------- | ---------------- | ----------- | ---------------
0 | AvailRateUpdateRQ |  | 1 |  DC common message header structure
0 | @xmlns | URL | 1 | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Supported namespaces for AR messages are: http://www.expediaconnect.com/EQC/AR/2007/02 & http://www.expediaconnect.com/EQC/AR/2011/06 | Valid namespace, defined by at least one version of AR schema.
1 | Authentication | - | | Grouping of required information to grant access to Expedia QuickConnect interface.
1 | @username | String | | Username for Expedia QuickConnect login (case sensitive), provided by Expedia. | Minimum length: 4, Maximum length: 30, Username exists, User is allowed to access Expedia QuickConnect



## Availability and Rate Response (AR RS)
The availability and rate response message is straightforward: it is returned synchronously to update the property’s system with the status of the AR request. The status can either be Success or Error. If successful, it can contain a warning.
### AR RS Schema Overview

**need to insert pic from eqc spec - page 27**

### AR RS Schema Complete Definition

**need help inserting table from spec - page 28**
