## Variable Margin History

Get - retrieve the Variable Margin change history for a hotel

### HTTP request

Example URL

**GET**   `https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelid}/variablemarginchangehistory?startdate=01-15-2014&enddate=12-31-2014`

### Path Parameters

| Parameter name | Type | Eg. Value | Required? | Description | Validation |
|---|---|---|---|---|---|
| hotelid | integer | 1234 | Required | Indicates the hotel for which Variable Margins are required | Error will be returned if hotel id is invalid |
| startdate | string | 01-15-2016 (format is MM-DD-YYYY) | Optional | Client may specify a start date. Only changes made on and after the start date will be returned. If the startDate <= '2015-12-30', then the startDate  = '2016=01-01'<br/>Client may specify a change window by providing both a start and end date.<br/>Client may specify only one day by setting start date = end date. | Start Date must not be later than end date. |
| enddate | string | 12-31-2014 (format is MM-DD-YYYY) | Optional | Client may specify an end date. Only changes made on and before the start date will be returned. Client may specify a change window by providing both a start and end date. Client may specify only one day by setting start date = end date. | End Date must not be later than end date. |

### Custom HTTP headers

| Header | Required? | Notes |
|---|---|---|
| Content-Type : application/json | Required |  specifies that the response should have JSON payload |
| Transaction-ID : {GUID} | Optional | guid assigned for the transaction |
| For-Testing-Only: {boolean} | Optional | boolean-for-synthetic-test-messages<br/>(i.e. 'true' if the message is a test or synthetic request)<br/>If this header is included, then the service will log the RQ/RS in event log. |

* * *

### Request Body

Do not supply a request body with this method.

### Request Body Example

N/A

* * *

## Response

In the future, the message may include additional optional properties in the response body, as well as additional optional custom HTTP headers. In order to prevent such changes from breaking the client side, the client must not tightly bind to the existing  message response.e

### HTTP Header

One of the following status codes will be included in the HTTP response header.

The following key:value pairs  will also be included in the header

| Key : Value | Required | Notes |
|---|---|---|
| Content-Type : application/json | Required |  specifies that the response should have JSON payload |
| Transaction-ID : {GUID} | Required | transaction id provided by client will be returned by service. If non provided, service will generate one. |

* * *

### Response Body

#### Success Case

*   If successful, the method will return a response body with the structure as shown in the example. 
*   An _optional Warning array,_ containing warning codes and warning messages may be returned by the service, to convey any warnings.

#### Error Case

*   In case of an error, the body will contain a Error array, containing error codes and error messages that convey detailed error information.
*   The error codes and messages in the body will provide error details in addition to the HTTP error codes returned in the response header.

### Response Body Example

#### Success Case

![](/images/accelerator_VariableMarginChangeHistoryGet_response_1.jpg)

![](/images/accelerator_VariableMarginChangeHistoryGet_response_2.jpg)

#### Error Case

![](/images/accelerator_VariableMarginGet_response_warning.jpg)

### Response Body Properties

| Property name | Value | Mandatory/Optional in service response? | Description |
|---|---|---|---|
| HotelID | integer | Included in every success response | The hotel id for which the variable margin information is returned |
| VariableMarginActivationHistory | array of Change objects | Include in every success response | If the hotel has never had EFR activated, and has no Variable Margin change history, then this array will be empty, and following warning will be returned: HotelID {0} has never enabled EFR and has no EFR change history |
| VariableMarginChangeHistory | array of VariableMarginChangeHistory objects | Included in every success response |If the hotel has no Variable Margins added, then this will be an empty array. |

**VariableMarginChangeHistory**

| Property name | Value | Mandatory/Optional in service response? | Description |
|---|---|---|---|
| VariableMarginID | integer | Included only if a hotel has Variable Margin change history | ID associated with a Variable Margin |
| ChangeHistory | array of Change objects | Included only if a hotel has Variable Margin change history |

**Change**

| Property name | Type | Mandatory/Optional in service response? | Description |
|---|---|---|---|
| ChangeDate | string | Required | Indicates the date and time of the change |
| Action | string | Required | Indicates the change action.<br/>For VariableMarginActivationHistory, the valid values are "VariableMargin Enabled" and "VariableMargin Disabled".<br/>For ChangeHistory , the valid values are "Added", "Edited" and "Deleted". |
| StartDate | string | optional | StartDate indicates the stay date/time from when the Variable Margin takes effect. |
| EndDate | string | optional | EndDate indicates the stay date/time at which the Variable Margin stops being effective. |
| VariableMarginPercentage | number | optional | Variable Margin that is to be applied for the window described from StartDate and EndDate. |
| UserID | number | optional | Indicates the TUID of the user who made the change |

**Optional Array of Warnings**

| Property | Type | Mandatory/Optional in message response? | Description |
|---|---|---|---|
| Warnings | Array | Optional | Warnings to be be conveyed to client |
| WarningCode | integer | Required, if Warnings included | Unique code assigned to a specific warning message |
| WarningMessage | string | Required, if Warnings included | Description of the warning details |

**Optional Array of Errors**

| **Property** | **Type** | **Mandatory/Optional in message response?** | **Description** |
|---|---|---|---|
| Errors | Array | Optional | Errors to be be conveyed to client |
| ErrorCode | integer | Required, if Errors included | Unique code assigned to a specific error message |
| ErrorMessage | string | Required, if Errorss included | Description of the error details |