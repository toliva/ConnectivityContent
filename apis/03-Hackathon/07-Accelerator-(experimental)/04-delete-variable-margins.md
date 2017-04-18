## Delete Variable Margins

Delete - deletes Variable Margins (Expedia Flexible Rates) for a given hotel

### HTTP request

**DELETE** `https://services.expediapartnercentral.com/accelerator/v1/hotels/1234/variablemargins`

The above URL deletes all the variable margins associated with the hotel

**DELETE**  `https://services.expediapartnercentral.com/accelerator/v1/hotels/1234/variablemargins/{variablemarginID}`

The above URL deletes the specific variable margin specified buy the variablemarginID

### Path Parameters

| Parameter name | Type | Eg. Value | Description | Notes |
|---|---|---|---|---|
| hotelid | integer | 6256 | Hotel Id for which all variable margins are to be deleted | If hotel id is invalid, error will be returned<br/>If hotel is not EFR enabled, HTTP error code 422 will be returned along with the following error in the message body: Cannot delete Variable Margin with id {0} because hotel {1} is not EFR enabled. |
| variablemarginID | integer | 1234 | The id for the variable margin that needs to be deleted | If the id is invalid, error will be returned |

### Custom HTTP headers

| Header | Required? | Notes | Validation |
|---|---|---|---|
| Transaction-ID : {GUID} | Optional | guid assigned for the transaction |
| For-Testing-Only: {boolean} | Optional | boolean-for-synthetic-test-messages<br/> (i.e. 'true' if the message is a test or synthetic request)<br/>If this header is included, then the service will log the RQ/RS in event log. |

* * *

### Request Body

Do not supply a request body with this method.

### Request Body Example

N/A

* * *

## Response

In the future, the message may include additional optional properties in the response body, as well as additional optional optional custom HTTP headers. In order to prevent such changes from breaking the client side, the client must not tightly bind to the existing  message response.e

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

If successful, the method will return an empty message body

#### Error Case

The body will contain a Error array, containing error codes and error messages that convey detailed error information.

### Response Body Example

#### Success Case

Response body will be empty

#### Error Case

![](/images/accelerator_ListRatePlanLinkageRS_3.jpg)

### Response Body Properties

#### Success Case

Response body will be empty

#### Error Case: Optional array of errors 

| **Property** | **Type** | **Mandatory/Optional in message response?** | **Description** |
|---|---|---|---|
| Errors | Array | Optional | Errors to be be conveyed to client |
| ErrorCode | integer | Required, if Errors included | Unique code assigned to a specific error message |
| ErrorMessage | string | Required, if Errorss included | Description of the error details |