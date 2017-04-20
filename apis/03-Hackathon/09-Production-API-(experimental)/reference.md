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
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'category':&nbsp;[string]&nbsp;Can&nbsp;be&nbsp;brand&nbsp;or&nbsp;travelerOrigination&nbsp;because&nbsp;this&nbsp;endpoint&nbsp;returns&nbsp;data&nbsp;by&nbsp;brand&nbsp;or&nbsp;traveler&nbsp;country.,<br/>&nbsp;&nbsp;'caption':&nbsp;[string]&nbsp;If&nbsp;category=brand&nbsp;this&nbsp;property&nbsp;contains&nbsp;the&nbsp;name&nbsp;of&nbsp;the&nbsp;brand;&nbsp;if&nbsp;category=travelerOrigination&nbsp;this&nbsp;property&nbsp;contains&nbsp;the&nbsp;country&nbsp;code(3&nbsp;letters),<br/>&nbsp;&nbsp;'l28d_compset_cy':&nbsp;[number]&nbsp;Compset&nbsp;production&nbsp;for&nbsp;last&nbsp;28&nbsp;days&nbsp;in&nbsp;current&nbsp;year,<br/>&nbsp;&nbsp;'l28d_compset_ly':&nbsp;[number]&nbsp;Compset&nbsp;production&nbsp;for&nbsp;last&nbsp;28&nbsp;days&nbsp;in&nbsp;last&nbsp;year,<br/>&nbsp;&nbsp;'l90d_compset_cy':&nbsp;[number]&nbsp;Compset&nbsp;production&nbsp;for&nbsp;last&nbsp;90&nbsp;days&nbsp;in&nbsp;current&nbsp;year,<br/>&nbsp;&nbsp;'l90d_compset_ly':&nbsp;[number]&nbsp;Compset&nbsp;production&nbsp;for&nbsp;last&nbsp;90&nbsp;days&nbsp;in&nbsp;last&nbsp;year,<br/>&nbsp;&nbsp;'l28d_hotel_cy':&nbsp;[number]&nbsp;Hotel&nbsp;production&nbsp;for&nbsp;last&nbsp;28&nbsp;days&nbsp;in&nbsp;current&nbsp;year,<br/>&nbsp;&nbsp;'l28d_hotel_ly':&nbsp;[number]&nbsp;Hotel&nbsp;production&nbsp;for&nbsp;last&nbsp;28&nbsp;days&nbsp;in&nbsp;last&nbsp;year,<br/>&nbsp;&nbsp;'l90d_hotel_cy':&nbsp;[number]&nbsp;Hotel&nbsp;production&nbsp;for&nbsp;last&nbsp;90&nbsp;days&nbsp;in&nbsp;current&nbsp;year,<br/>&nbsp;&nbsp;'l90d_hotel_ly':&nbsp;[number]&nbsp;Hotel&nbsp;production&nbsp;for&nbsp;last&nbsp;90&nbsp;days&nbsp;in&nbsp;last&nbsp;year<br/>}]</code>

### GET /production-api/FlashReport
Hotel and compset performance for past and future stay dates.
 - Year To Date Stays(ytd): represents the YOY production trend (for hotel and compset) considering all stay dates starting beginning of the year until the report date.
 - Next Week Stays(nw): represents the YOY production trend considering all stay dates for the week following the report date.
 - Next 4 Weeks Stays(n4w): represents the YOY production trend considering all stay dates for the 4 weeks following the report date.
 - Net Room Night Count(nrn) : represents the total number of reservations the hotel will deliver (if cancellations are made, then they are considered in the calculation).
 - Average Daily Rate(adr) : base rate per room night for hotel rooms.


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
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'ytd_hotel_nrn_delta':&nbsp;[number]&nbsp;Year&nbsp;To&nbsp;Date&nbsp;Hotel&nbsp;Net&nbsp;Room&nbsp;Night,<br/>&nbsp;&nbsp;'ytd_hotel_adr_delta':&nbsp;[number]&nbsp;Year&nbsp;To&nbsp;Date&nbsp;Hotel&nbsp;Average&nbsp;Daily&nbsp;Rate,<br/>&nbsp;&nbsp;'ytd_compset_nrn_delta':&nbsp;[number]&nbsp;Year&nbsp;To&nbsp;Date&nbsp;Compset&nbsp;Net&nbsp;Room&nbsp;Night,<br/>&nbsp;&nbsp;'ytd_compset_adr_delta':&nbsp;[number]&nbsp;Year&nbsp;To&nbsp;Date&nbsp;Compset&nbsp;Average&nbsp;Daily&nbsp;Rate,<br/>&nbsp;&nbsp;'nw_hotel_nrn_delta':&nbsp;[number]&nbsp;Next&nbsp;Week&nbsp;Hotel&nbsp;Net&nbsp;Room&nbsp;Night,<br/>&nbsp;&nbsp;'nw_hotel_adr_delta':&nbsp;[number]&nbsp;Next&nbsp;Week&nbsp;Hotel&nbsp;Average&nbsp;Daily&nbsp;Rate,<br/>&nbsp;&nbsp;'nw_compset_nrn_delta':&nbsp;[number]&nbsp;Next&nbsp;Week&nbsp;Compset&nbsp;Net&nbsp;Room&nbsp;Night,<br/>&nbsp;&nbsp;'nw_compset_adr_delta':&nbsp;[number]&nbsp;Next&nbsp;Week&nbsp;Compset&nbsp;Average&nbsp;Daily&nbsp;Rate,<br/>&nbsp;&nbsp;'n4w_hotel_nrn_delta':&nbsp;[number]&nbsp;Next&nbsp;4&nbsp;Weeks&nbsp;Hotel&nbsp;Net&nbsp;Room&nbsp;Night,<br/>&nbsp;&nbsp;'n4w_hotel_adr_delta':&nbsp;[number]&nbsp;Next&nbsp;4&nbsp;Weeks&nbsp;Hotel&nbsp;Average&nbsp;Daily&nbsp;Rate,<br/>&nbsp;&nbsp;'n4w_compset_nrn_delta':&nbsp;[number]&nbsp;Next&nbsp;4&nbsp;Weeks&nbsp;Compset&nbsp;Net&nbsp;Room&nbsp;Night,<br/>&nbsp;&nbsp;'n4w_compset_adr_delta':&nbsp;[number]&nbsp;Next&nbsp;4&nbsp;Weeks&nbsp;Compset&nbsp;Average&nbsp;Daily&nbsp;Rate<br/>}]</code>

### GET /production-api/FutureStayProduction7Days
Hotel room nights for the 4 stay weeks following the report date


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
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'week_start':&nbsp;[string]&nbsp;The&nbsp;date&nbsp;to&nbsp;which&nbsp;cy_7d_pickup_nrn&nbsp;and&nbsp;ly_7d_pickup_nrn&nbsp;refers&nbsp;to,<br/>&nbsp;&nbsp;'cy_7d_pickup_nrn':&nbsp;[integer]&nbsp;Hotel&nbsp;Room&nbsp;Nights&nbsp;for&nbsp;next&nbsp;7&nbsp;days&nbsp;from&nbsp;the&nbsp;week_start&nbsp;for&nbsp;the&nbsp;current&nbsp;year,<br/>&nbsp;&nbsp;'ly_7d_pickup_nrn':&nbsp;[integer]&nbsp;Hotel&nbsp;Room&nbsp;Nights&nbsp;for&nbsp;next&nbsp;7&nbsp;days&nbsp;from&nbsp;the&nbsp;week_start&nbsp;for&nbsp;the&nbsp;last&nbsp;year<br/>}]</code>

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
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'date':&nbsp;[string]&nbsp;The&nbsp;date&nbsp;to&nbsp;which&nbsp;cy_future_nrn&nbsp;and&nbsp;ly_future_nrn&nbsp;refers&nbsp;to,<br/>&nbsp;&nbsp;'cy_future_nrn':&nbsp;[integer]&nbsp;Hotel&nbsp;Room&nbsp;Nights&nbsp;for&nbsp;next&nbsp;28&nbsp;days&nbsp;of&nbsp;the&nbsp;current&nbsp;year,<br/>&nbsp;&nbsp;'ly_future_nrn':&nbsp;[integer]&nbsp;Hotel&nbsp;Room&nbsp;Nights&nbsp;for&nbsp;next&nbsp;28&nbsp;days&nbsp;of&nbsp;the&nbsp;last&nbsp;year<br/>}]</code>

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
200 | Successful response | <code>Array[{<br/>&nbsp;&nbsp;'hotel_adr':&nbsp;[number]&nbsp;Average&nbsp;Daily&nbsp;Rate&nbsp;-&nbsp;Base&nbsp;rate&nbsp;per&nbsp;room&nbsp;night&nbsp;for&nbsp;hotel&nbsp;rooms,<br/>&nbsp;&nbsp;'yoy_adr':&nbsp;[number]&nbsp;ADR&nbsp;delta,<br/>&nbsp;&nbsp;'hotel_only':&nbsp;[number]&nbsp;Price&nbsp;for&nbsp;room&nbsp;only,<br/>&nbsp;&nbsp;'package':&nbsp;[number]&nbsp;Price&nbsp;for&nbsp;package,<br/>&nbsp;&nbsp;'total':&nbsp;[number]&nbsp;hotel_only&nbsp;+&nbsp;package,<br/>&nbsp;&nbsp;'yoy_hotel_only':&nbsp;[number]&nbsp;Price&nbsp;for&nbsp;room&nbsp;only&nbsp;-&nbsp;Delta,<br/>&nbsp;&nbsp;'yoy_package':&nbsp;[number]&nbsp;Price&nbsp;for&nbsp;package&nbsp;-&nbsp;Delta,<br/>&nbsp;&nbsp;'yoy_total':&nbsp;[number]&nbsp;Price&nbsp;for&nbsp;total&nbsp;-&nbsp;Delta,<br/>&nbsp;&nbsp;'year_month':&nbsp;[string]&nbsp;YYYYMM<br/>}]</code>

---

## Definitions