## Retrieve Variable Margins

### HTTP request

Example URL

**GET**   `https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelid}/variablemargins`

### Path Parameters

| Parameter name | Type | Eg. Value | Required? | Description | Validation |
|---|---|---|---|---|---|
| hotelid | integer | 1234 | Required | Indicates the hotel for which Variable Margins are required | Error will be returned if hotel id is invalid |

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

## Response

In the future, the message may include additional optional properties in the response body, as well as additional optional custom HTTP headers. In order to prevent such changes from breaking the client side, the client must not tightly bind to the existing  message response.e

### HTTP Header

One of the following status codes will be included in the HTTP response header.

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

![](/images/accelerator_VariableMarginGet_response.jpg)

#### Error Case

![](/images/accelerator_VariableMarginGet_response_warning.jpg)

### Response Body Properties

| Property name | Value | Mandatory/Optional in service response? | Description |
|---|---|---|---|
| HotelID | integer | Included in every success response | The hotel id for which the variable margin information is returned |
| VariableMargins | array of VariableMargin objects | Included in every success response |   If a hotel does not have any variable margins set, then the VariableMargins array will be empty and the following warning will be returned: Hotel <hotelid> does not have variable margins set. |

**VariableMargin**

| Property | Type | Example | Mandatory/Optional in message response? | Description |
|---|---|---|---|---|
| VariableMarginID | integer | 5678 | Required for every VariableMargin object included | Unique id associated with a variable margin which is applicable over a date range |
| StartDate | string | 2014-10--24 | Required for every VariableMargin object included | Start date associated with the variable margin<br/>Start date must not be later than the end date |
| EndDate | string | 2014-10--24 | Required for every VariableMargin object included | End date associated with the variable margin |
| CreateDate | string | 2014-10--24 09:00:00 | Required for every VariableMargin object included | Date and time that the variable margin was created. |
| VariableMarginPercentage | decimal | 5.5 | Required for every VariableMargin object included | The discount must be 1% or more with value increments no smaller than 0.1%. A value of 0% is also allowed. |

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