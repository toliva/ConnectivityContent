# Reference
View, add, update and delete variable margins for hotels over specific date ranges.

## Retrieve Variable Margins
### Return variable margins under hotel id provided.

- Method: `GET`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [VariableMargins](#/definitions/VariableMargins)

---

## Add Variable Margins
### Add a variable margin.
Add variablemargin

- Method: `POST`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `*/*`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Content-Type | header | Request Content Type | true | integer | 
body | body | Request Payload | true | [VariableMargin](#/definitions/VariableMargin) | 
hotelId | path | Hotel ID | true | integer |

**Examples**
```
{
  "StartDate": "2017-04-20",
  "EndDate": "2017-04-27",
  "VariableMarginPercentage": 10
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
201 | Created | [VariableMargins](#/definitions/VariableMargins)

---

## Update Variable Margins
### Update an existing variable margin.

- Method: `PUT`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins/{variablemarginId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
Content-Type | header | Request Content Type | true | integer | 
body | body | Request Payload | true | [VariableMargin](#/definitions/VariableMargin) | 
hotelId | path | Hotel ID | true | integer | 
variablemarginId | path | Variable Margin ID | true | integer |

**Examples**
```
{
  "VariableMarginID": 123456,
  "StartDate": "2017-04-21",
  "EndDate": "2017-04-22",
  "VariableMarginPercentage": 12
}
```

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [VariableMargins](#/definitions/VariableMargins)

---

## Delete Variable Margins
### Delete variable margins under hotelid.

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer |

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | Empty

### Delete a specific variable margin.

- Method: `DELETE`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemargins/{variablemarginId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
variablemarginId | path | Variable Margin ID | true | integer |

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | Empty

---

## Variable Margins Change History
### Get variable margin change history for a hotel id
Get variablemargin change history

- Method: `GET`
- Url: https://services.expediapartnercentral.com/accelerator/v1/hotels/{hotelId}/variablemarginchangehistory
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | Hotel ID | true | integer | 
startDate | query | Start Date.<br/>Format: MM-DD-YYYY (e.g. "04-01-2017") | false | string | 
endDate | query | End Date.<br/>Format: MM-DD-YYYY (e.g. "04-30-2017") | false | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [VariableMarginChangeHistoryResponse](#/definitions/VariableMarginChangeHistoryResponse)

---

## Definitions
- <a name="/definitions/VariableMargins"></a>VariableMargins

Property Name | Type | Description
------------- | ---- | -----------
HotelID | integer | Unique ID of the hotel.
VariableMargins | Array[[VariableMargin](#/definitions/VariableMargin)] | List of variable margins for the hotel identified by the `HotelID`.

- <a name="/definitions/VariableMargin"></a>VariableMargin

Property Name | Type | Description
------------- | ---- | -----------
VariableMarginID | integer | Unique ID of the variable margin. Cannot be provided in a create request, will be assigned by Expedia after successful creation.
StartDate | date | Date at which the variable margin will start being effective.<br/>Format: YYYY-MM-DD (e.g. "2017-04-19")
EndDate | date | Date (inclusive) at which the variable margin will stop being effective.<br/>Format: YYYY-MM-DD (e.g. "2017-04-19")
VariableMarginPercentage | integer | 
CreateDate | date | Date at which the variable margin was created. Cannot be provided in a create or update request, will be assigned by Expedia after successful creation.<br/>Format: YYYY-MM-DD HH:MM:SS (e.g. "2017-04-19 05:48:03")

- <a name="/definitions/VariableMarginChangeHistoryResponse"></a>VariableMarginChangeHistoryResponse

Property Name | Type | Description
------------- | ---- | -----------
HotelID | integer | ID of the hotel.
VariableMarginActivationHistory | Array[[VariableMarginActivationHistory](#/definitions/VariableMarginActivationHistory)] |  List of activations.
VariableMarginChangeHistory | Array[[VariableMarginChangeHistory](#/definitions/VariableMarginChangeHistory)] | List of changes. 

- <a name="/definitions/VariableMarginActivationHistory"></a>VariableMarginActivationHistory

Property Name | Type | Description
------------- | ---- | -----------
ChangeDate | date | Date at which the change occurred.<br/>Format: YYYY-MM-DD HH:MM:SS (e.g. "2017-04-19 04:38:53")
Action | string | 
UserID | integer | ID of the user responsible for the change.

- <a name="/definitions/VariableMarginChangeHistory"></a>VariableMarginChangeHistory

Property Name | Type | Description
------------- | ---- | -----------
VariableMarginID | integer | ID of the variable margin.
ChangeHistory | Array[[ChangeHistory](#/definitions/ChangeHistory)] | List of changes.

- <a name="/definitions/ChangeHistory"></a>ChangeHistory

Property Name | Type | Description
------------- | ---- | -----------
ChangeDate | date | Date at which the change occurred.<br/>Format: YYYY-MM-DD HH:MM:SS (e.g. "2017-04-19 04:38:53")
Action | enum | Action that triggered the change. See [here](#changehistoryactionenum) for the list of possible values.
UserID | integer | ID of the user responsible for the change.
StartDate | date | New value of the variable margin start date.<br/>Format: YYYY-MM-DD HH:MM:SS (e.g. "2017-05-01 00:00:00").<br/>**Note**: the time will always be set at the beginning of the day.
EndDate | date | New value of the variable margin end date.<br/>Format: YYYY-MM-DD HH:MM:SS (e.g. "2017-05-31 23:59:00").<br/>**Note**: the time will always be set at the end of the day.
VariableMarginPercentage | integer | New value of the variable margin percentage.

## Enumerations & Domain Values

### ChangeHistoryActionEnum

| Action |
| -------- |
| Added |
| Edited |
| Deleted |