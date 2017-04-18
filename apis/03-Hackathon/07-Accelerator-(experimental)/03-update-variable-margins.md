## Update a Variable Margin

Updating a Variable Margin Start/End date may result in modification of other Variable Margins, that are adjacent to the one being modified.

### HTTP request

Example URL

**PUT** `https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelid}/variablemargins/{variablemarginid}?overlappingallowed=true`

### Path Parameters

| Parameter name | Type | Eg. Value | Required? | Description | Validation |
|---|---|---|---|---|---|
| hotelid | integer | 1234 | Required | Indicates the hotel for which Variable Margins are required | Error will be returned if hotel id is invalid<br/>If hotel is not EFR enabled, HTTP error code 422 will be returned along with the following error in the message body: Cannot update Variable Margin because hotel {1} is not EFR enabled. |
| variablemarginid | integer | 567 | Required | The Variable Margin to be edited | Error will be returned if the variable margin id is not associated with the hotel id specified in the request |
| overlappingallowed | boolean | true | Optional | Indicates if the clients would like service to modify existing EFRs, if the modified EFR provided in the request overlaps with existing EFRs.<br/>If RQ's EFR does not overlap existed EFRs, the EFR in the RQ will be modified and existing EFRs will NOT be affected irrespective of _overlappingallowed_ value If ov_erlappingallowed_ is false, an error will be returned if RQ's EFR overlaps with existing EFRs. If RQ's EFR partially overlaps with existing EFRs and _overlappingallowed_ is true, the EFR in RQ will be updated and existing overlapping EFRs will have their dates adjusted.<br/>If RQ's EFR fully overlaps with existing EFRs and _overlappingallowed_ is true, a the EFR in RQ will be updated and the EFR that are fully overlapped will be deleted.<br/>The RQ's EFR will NOT be merged with existed EFR even if their dates are near with each other and with same rate. **The ID of the EFR that is modified should not be changed after the edit operation.**<br/>See example below. |

**Examples of overlapping EFR behaviour:**

1.  Existing Variable Margin

| VariableMarginID | StartDate | EndDate | VariableMarginPercentage |
|---|---|---|---|
| 1234 | 2014-01-01 | 2015-12-31 | 10.0 |
| 1235 | 2016-01-01 | 2016-03-31 | 12.0 |
| 1336 | 2016-04-01 | 2016-12-31 | 8.0 |

2\. The following variable margin is updated, which has dates that overlap the dates of the existing Variable Margin

| VariableMarginID | StartDate | EndDate | VariableMarginPercentage |
|---|---|---|---|
| 1235 | 2016-02-01 | 2016-04-15 | 5.5 |

3\. The service will update the variable margin specified, and modify the existing variable margin with a final state as shown below. The green row indicates original  EFRs and those that are not modified.. The yellow rows show the modifications  made to the EFRs.

| VariableMarginID | StartDate | EndDate | VariableMarginPercentage |
|---|---|---|---|
| 1234 | 2014-06-01 | 2014-12-31 | 10.0 |
| 1235 | 2016-02-01 | 2016-04-15 | 5.5 |
| 1336 | 2016-04-16 | 2016-12-31 | 10.0 |

### Custom HTTP headers

| Header | Required? | Notes |
|---|---|---|
| Content-Type : application/json | Required |  specifies that the response should have JSON payload |
| User-ID: {integer} | Required | TUID assigned to the user |
| Transaction-ID : {GUID} | Optional | guid assigned for the transaction |
| For-Testing-Only: {boolean} | Optional | boolean-for-synthetic-test-messages<br/>(i.e. 'true' if the message is a test or synthetic request)<br/>If this header is included, then the service will log the RQ/RS in event log. |