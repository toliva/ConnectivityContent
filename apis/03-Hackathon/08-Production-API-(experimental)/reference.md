# Reference
## default
### GET /production-api/BookingTrends
Insights into the travelers’ booking patterns


- Method: `GET`
- Url: https://services.expediapartnercentral.com/production-api/BookingTrends
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
htid | query | Hotel ID | true | number |
$format | query |  | false | string | json

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'category':&nbsp;string,<br/>&nbsp;&nbsp;'caption':&nbsp;string,<br/>&nbsp;&nbsp;'l28d_compset_cy':&nbsp;number,<br/>&nbsp;&nbsp;'l28d_compset_ly':&nbsp;number,<br/>&nbsp;&nbsp;'l90d_compset_cy':&nbsp;number,<br/>&nbsp;&nbsp;'l90d_compset_ly':&nbsp;number,<br/>&nbsp;&nbsp;'l28d_hotel_cy':&nbsp;number,<br/>&nbsp;&nbsp;'l28d_hotel_ly':&nbsp;number,<br/>&nbsp;&nbsp;'l90d_hotel_cy':&nbsp;number,<br/>&nbsp;&nbsp;'l90d_hotel_ly':&nbsp;number<br/>}]</code>

### GET /production-api/FlashReport
Hotel and compset performance for past and future stay dates


- Method: `GET`
- Url: https://services.expediapartnercentral.com/production-api/FlashReport
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
htid | query | Hotel ID | true | number |
$format | query |  | false | string | json

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'ytd_hotel_nrn_delta':&nbsp;number,<br/>&nbsp;&nbsp;'ytd_hotel_adr_delta':&nbsp;number,<br/>&nbsp;&nbsp;'ytd_compset_nrn_delta':&nbsp;number,<br/>&nbsp;&nbsp;'ytd_compset_adr_delta':&nbsp;number,<br/>&nbsp;&nbsp;'nw_hotel_nrn_delta':&nbsp;number,<br/>&nbsp;&nbsp;'nw_hotel_adr_delta':&nbsp;number,<br/>&nbsp;&nbsp;'nw_compset_nrn_delta':&nbsp;number,<br/>&nbsp;&nbsp;'nw_compset_adr_delta':&nbsp;number,<br/>&nbsp;&nbsp;'n4w_hotel_nrn_delta':&nbsp;number,<br/>&nbsp;&nbsp;'n4w_hotel_adr_delta':&nbsp;number,<br/>&nbsp;&nbsp;'n4w_compset_nrn_delta':&nbsp;number,<br/>&nbsp;&nbsp;'n4w_compset_adr_delta':&nbsp;number<br/>}]</code>

### GET /production-api/FutureStayProduction7Days
Hotel production for the future 7 stay dates


- Method: `GET`
- Url: https://services.expediapartnercentral.com/production-api/FutureStayProduction7Days
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
htid | query | Hotel ID | true | number |
$format | query |  | false | string | json

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'week_start':&nbsp;string,<br/>&nbsp;&nbsp;'cy_7d_pickup_nrn':&nbsp;integer,<br/>&nbsp;&nbsp;'ly_7d_pickup_nrn':&nbsp;integer<br/>}]</code>

### GET /production-api/FutureStayProduction28Days
Hotel production for the future 28 stay dates


- Method: `GET`
- Url: https://services.expediapartnercentral.com/production-api/FutureStayProduction28Days
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
htid | query | Hotel ID | true | number |
$format | query |  | false | string | json

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'date':&nbsp;string,<br/>&nbsp;&nbsp;'cy_future_nrn':&nbsp;integer,<br/>&nbsp;&nbsp;'ly_future_nrn':&nbsp;integer<br/>}]</code>

### GET /production-api/MonthlyStays
Hotel’s production for each stay month.


- Method: `GET`
- Url: https://services.expediapartnercentral.com/production-api/MonthlyStays
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
htid | query | Hotel ID | true | number |
$format | query |  | false | string | json

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'hotel_adr':&nbsp;number,<br/>&nbsp;&nbsp;'yoy_adr':&nbsp;number,<br/>&nbsp;&nbsp;'hotel_only':&nbsp;number,<br/>&nbsp;&nbsp;'package':&nbsp;number,<br/>&nbsp;&nbsp;'total':&nbsp;number,<br/>&nbsp;&nbsp;'yoy_hotel_only':&nbsp;number,<br/>&nbsp;&nbsp;'yoy_package':&nbsp;number,<br/>&nbsp;&nbsp;'yoy_total':&nbsp;number,<br/>&nbsp;&nbsp;'year_month':&nbsp;string<br/>}]</code>

---

## Definitions