## Add Variable Margin

Add and update the Variable Margins

### HTTP request

Example URL

**POST** `https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelid}/variablemargins?overlappingallowed=true`

### Path Parameters

| Parameter name | Type | Eg. Value | Required? | Description | Validation |
|---|---|---|---|---|---|
| hotelid | integer | 1234 | Required | Indicates the hotel for which Variable Margins are required | Error will be returned if hotel id is invalid<br/>If hotel is not EFR enabled, HTTP error code 422 will be returned along with the following error in the message body: Cannot add Variable Margin because hotel {1} is not EFR enabled. |
| overlappingallowed | boolean | true | Optional | Indicates if the clients would like service to modify existing EFRs, if the new EFR provided in the request overlaps with existing EFRs. | If RQ's EFR does not overlap existed EFRs, a new EFR will be created and existed EFRs will NOT be affected irrespective of _overlappingallowed_ value<br/>If ov_erlappingallowed_ is false, an error will be returned if RQ's EFR overlaps with existed EFRs. If RQ's EFR partially overlaps with existed EFRs and _overlappingallowed_ is true, a new EFR will be created and existed overlapped EFRs will be truncated.<br/>If RQ's EFR fully overlaps with existed EFRs and _overlappingallowed_ is true, a new EFR will be created and the EFR that are fully overlapped will be deleted.<br/>The RQ's EFR will NOT be merged with existed EFR even if their dates are near with each other and with same rate.<br/>See example below. |

**Examples of overlapping EFR behaviour:**

1. Existing Variable Margin

| VariableMarginID | StartDate | EndDate | VariableMarginPercentage |
|---|---|---|---|
| 1234 | 06-01-2014 | 12-31-2016 | 10.0 |

2\. The following new variable margin in added, which has dates that overlap the dates of the existing Variable Margin

| VariableMarginID | StartDate | EndDate | VariableMarginPercentage |
|---|---|---|---|
| N/A | 01-01-2015 | 2015-12-31 | 5.5 |

3\. The service will add the new variable margin specified, and modify the existing variable margin with a final state as shown below. The green row indicates the newly added VM. The yellow rows show the modifications  made to the original VM to prevent date overlaps.

| VariableMarginID | StartDate | EndDate | VariableMarginPercentage |
|---|---|---|---|
| 1234 | 06-01-2014 | 2014-12-31 | 10.0 |
| 2223 | 01-01-2015 | 2015-12-31 | 5.5 |
| 2224 | 01-01-2016 | 2016-12-31 | 10.0 |

### Custom HTTP headers

| Header | Required? | Notes |
|---|---|---|
| Content-Type : application/json | Required |  specifies that the response should have JSON payload |
| Transaction-ID : {GUID} | Optional | guid assigned for the transaction |
| For-Testing-Only: {boolean} | Optional | boolean-for-synthetic-test-messages<br/>(i.e. 'true' if the message is a test or synthetic request)<br/>If this header is included, then the service will log the RQ/RS in event log.