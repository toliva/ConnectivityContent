# Insights Reference
API to retrieve realtime market analytics for lodging suppliers

## compression
### get compressionPercent data
get compressionPercent data

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/compression/{hotelId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | hotel ID | true | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [CompressionJSONResponse](#/definitions/CompressionJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist' | #/definitions/undefined

---

## missedOpportunitiesToday
### get missed opportunities by hotel ID
get missed opportunities for today(checkinDate is today)

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/missedOpportunitiesToday/{hotelId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | hotel ID | true | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [MissedOppJSONResponse](#/definitions/MissedOppJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

---

## missedOpportunitiesV2
### get missed opportunities by hotel ID
get missed opportunities whose checkinDate in a specified time range

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/missedOpportunitiesV2
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |
checkInStartDate | query | The check in start date(format: yyyy-MM-dd). Default = today. |  | string |
checkInEndDate | query | The check in end date(format: yyyy-MM-dd). Default = today. |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [MissedOpportunitiesV2JSONResponse](#/definitions/MissedOpportunitiesV2JSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

---

## newsfeed
### get newsfeed between startDate and endDate
get newsfeed data

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/newsfeed
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID, example: 759 |  | integer |
startDate | query | start date, example: 2016-12-01 |  | string |
endDate | query | end date, example: 2016-12-09 |  | string |
eventType | query | event type list, example: Booking or give a eventType list like this: Booking,Canceled,CompetitorPriceChange  |  | string |
excludedEventId | query | excludedEventId list, example: 1234,or give a excludedEventId list like this: 1234,45678,1212  |  | string |
limit | query | limit, the default value is 50, example: 10 |  | integer |
clientId | query | client ID, fill your clientId here |  | string |
apiToken | query | api Token,fill your apiToken here |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [newsfeedJSONResponse](#/definitions/newsfeedJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 3021, errorMsg: 'The endDate was not valid date, the date format should be yyyy-MM-dd.' | #/definitions/undefined

---

## replenishStubbedDataForNewsfeed
### replenish stubbedData for newsfeed api
replenish stubbedData for newsfeed api

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/replenishStubbedDataForNewsfeed
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
clientId | query | client ID, fill your clientId here |  | string |
apiToken | query | api Token,fill your apiToken here |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [replenishStubbedDataForNewsfeedJSONResponse](#/definitions/replenishStubbedDataForNewsfeedJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | ‘status’:‘Failed to replenish stubbed data for newsfeed API with hotelId:758,errorMsg=Failed to connect Mongodb’ | #/definitions/undefined

---

## sameDaySortV2
### get current and previous average sort rank
get current and previous average sort rank

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/sameDaySortV2/{hotelId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | hotel ID | true | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [SameDaySortV2JSONResponse](#/definitions/SameDaySortV2JSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist' | #/definitions/undefined

---

## sellTonightRoomsLeft
### get competitors' room left information of tonight
get competitors' room left information of tonight

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/sellTonightRoomsLeft/{hotelId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | hotel ID | true | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [SellTonightRoomsLeftJSONResponse](#/definitions/SellTonightRoomsLeftJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

---

## sellTonightSoldOut
### get competitors' sold out information of tonight
get competitors' sold out information of tonight

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/sellTonightSoldOut/{hotelId}
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | path | hotel ID | true | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [SellTonightSoldOutJSONResponse](#/definitions/SellTonightSoldOutJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

---

## v1
### get missed opportunities by hotel ID
get missed opportunities for today(book date is today)

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/missedOpportunitiesV3
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [MissedOpportunitiesV3JSONResponse](#/definitions/MissedOpportunitiesV3JSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get the fair share data for the given stayDates
Get the fair share data for the given stayDates

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/fairShare
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
dayNum | query | (Optional)the number of days from today to the future, default value is 1 |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [FairShareJSONResponse](#/definitions/FairShareJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get and calculate fair share for info sites views
Get and calculate fair share for info sites views

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/fairShareInfositeViews
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [FairShareInfositeViewsJSONResponse](#/definitions/FairShareInfositeViewsJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get the gainedOpportunities information
Get the gainedOpportunities information

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/gainedOpportunities
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
checkinStartDate | query | (Optional)The check in start date(format: yyyy-MM-dd). Default = today. |  | string |
checkinEndDate | query | (Optional)The check in end date(format: yyyy-MM-dd). Default = today. |  | string |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [GainedOpportunitiesJSONResponse](#/definitions/GainedOpportunitiesJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get the Missed Opportunities Leaderboard Data.
Get the Missed Opportunities Leaderboard Data

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/missedOpposLeaderBoard
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
checkinDate | query | (Optional)The check in date(format: yyyy-MM-dd). Default = today. |  | string |
dayNum | query | (Optional)number of days from today to the future. Defalut = 1. |  | string |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [MissedOpposLeaderBoardJSONResponse](#/definitions/MissedOpposLeaderBoardJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get ADR (Average Daily Rate)
Get ADR (Average Daily Rate)

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/newsfeedADR
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
since | query | (Optional)start date of query.default = today.Format: yyyy-MM-dd |  | string |
dayNum | query | (Optional)number of days. Defalut = 1. |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [NewsfeedADRJSONResponse](#/definitions/NewsfeedADRJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist' | #/definitions/undefined

### Get the Sort Rank Adjustment History
Get the Sort Rank Adjustment History

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/sameDaySortHistory
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
dayNum | query | (Optional)the number of days we want the history data, default = 1 |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [SameDaySortHistoryJSONResponse](#/definitions/SameDaySortHistoryJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist' | #/definitions/undefined

### Get hotel and competitors' Sold Out Room Type
Get hotel and competitors' Sold Out Room Type

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/soldOutByRoomType
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
checkinDate | query | (Optional)The check in date(format: yyyy-MM-dd). Default = today. |  | string |
checkoutDate | query | (Optional)The check out date(format: yyyy-MM-dd). Default = today. |  | string |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [SoldOutRoomTypeJSONResponse](#/definitions/SoldOutRoomTypeJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get GEO Demand information
Get GEO Demand information

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/geoDemand
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [GeoDemandJSONResponse](#/definitions/GeoDemandJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2000, errorMsg: 'Hotel is not exist' | #/definitions/undefined

### get missed opportunities from Packages by hotel ID
get missed opportunities from Packages for the specified booking date range

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/missedOpportunitiesInPackages
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |
startDate | query | The book start date(format: yyyy-MM-dd). Default = today. |  | string |
endDate | query | The book end date(format: yyyy-MM-dd). Default = today. |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [MissedOppJSONResponse](#/definitions/MissedOppJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 3021, errorMsg: 'The endDate was not valid date, the date format should be yyyy-MM-dd.' | #/definitions/undefined

### get a list hotels which added me as competitor
get a list hotels which added me as competitor

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/addCompSet
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
startDate | query | start date |  | string |
endDate | query | end date |  | string |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [addCompSetJSONResponse](#/definitions/addCompSetJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no competitors' | #/definitions/undefined

### Get interest price range information
Get interest price range information

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/interestPriceRange
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
marketId | query | market ID. (required) |  | integer |
bookedStartDate | query | booked start date, format is YYYY-MM-DD. (required) |  | string |
bookedEndDate | query | booked end date, format is YYYY-MM-DD. (required) |  | string |
checkInDate | query | check in date, format is YYYY-MM-DD. (required) |  | string |
rangeSize | query | price range size, default is 20. (optional) |  | integer |
ignoreZero | query | if set true, ignore data whose value is 0. (optional) |  | string |
clientId | query | client ID. (required) |  | string |
apiToken | query | api Token. (required) |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [InterestPriceRangeJSONResponse](#/definitions/InterestPriceRangeJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 3112, errorMsg: 'The range size should be positive integer.' | #/definitions/undefined

### get compression data between startDate and endDate
get compression data

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/compressionOutlook
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID |  | integer |
startDate | query | start date (yyyy-mm-dd) |  | string |
endDate | query | end date (yyyy-mm-dd) |  | string |
clientId | query | client ID |  | string |
apiToken | query | api Token |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [compressionOutlookJSONResponse](#/definitions/compressionOutlookJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 2002, errorMsg: 'This hotel has no compression data available' | #/definitions/undefined

### Get price distribution information
Get price distribution information

- Method: `GET`
- Url: https://services.expediapartnercentral.com/insights/public/v1/priceDistribution
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotel ID. (required) |  | integer |
checkInDate | query | check in date, format is YYYY-MM-DD. (required) |  | string |
lengthOfStay | query | length of stay. (required) |  | integer |
rangeSize | query | price range size, default is 20. (optional) |  | integer |
clientId | query | client ID. (required) |  | string |
apiToken | query | api Token. (required) |  | string |

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | No response was specified | [priceDistributionJSONResponse](#/definitions/priceDistributionJSONResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
400 | status: 'Error', errorCode: 3112, errorMsg: 'The length of stay should be positive integer.' | #/definitions/undefined

---

## Definitions
- <a name="/definitions/MissedOppJSONResponse"></a>MissedOppJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [MissedOpportunitiesData](#/definitions/MissedOpportunitiesData) |

- <a name="/definitions/MissedOpportunitiesData"></a>MissedOpportunitiesData

Property Name | Type | Description
------------- | ---- | -----------
viewedHotelId | integer | viewed hotel id
viewedHotelName | string | viewed hotel name
totalViewerCounter | integer | total viewer count
missedOpportunities | Array[[MissedOpportunitiesItem](#/definitions/MissedOpportunitiesItem)] | missed opportunities by hotel
timeStamp | string | timeStamp of the data creation

- <a name="/definitions/MissedOpportunitiesItem"></a>MissedOpportunitiesItem

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | booked hotel id
hotelName | string | booked hotel name
roomNights | integer | room neights count
bookings | integer | total booking count

- <a name="/definitions/MissedOpportunitiesV2JSONResponse"></a>MissedOpportunitiesV2JSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[[MissedOpportunitiesData](#/definitions/MissedOpportunitiesData)] | missed opportunities by checkinDate

- <a name="/definitions/MissedOpportunitiesV3JSONResponse"></a>MissedOpportunitiesV3JSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [MissedOpportunitiesV3Data](#/definitions/MissedOpportunitiesV3Data) |

- <a name="/definitions/MissedOpportunitiesV3Data"></a>MissedOpportunitiesV3Data

Property Name | Type | Description
------------- | ---- | -----------
viewedHotelId | integer | viewed hotel id
viewedHotelName | string | viewed hotel name
bookDate | string | booked date
totalLostBookings | integer | total lost bookings count
totalLostUSD | number | total lost US Dollar
missedOpportunities | Array[[MissedOpportunitiesV3Item](#/definitions/MissedOpportunitiesV3Item)] | missed opportunities by hotel

- <a name="/definitions/MissedOpportunitiesV3Item"></a>MissedOpportunitiesV3Item

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | booked hotel id
hotelName | string | booked hotel name
lostBookings | integer | total lost bookings to this hotel
lostUSD | number | total lost US Dollar to this hotel
details | Array[[MissedOpportunitiesV3Details](#/definitions/MissedOpportunitiesV3Details)] | details for the lost bookings information

- <a name="/definitions/MissedOpportunitiesV3Details"></a>MissedOpportunitiesV3Details

Property Name | Type | Description
------------- | ---- | -----------
viewedPrice | number | your price viewed by hotel shopper
bookedPrice | number | competitor's price which is booked by hotel shopper
checkInDate | string | checkinDate of this booking

- <a name="/definitions/SellTonightSoldOutJSONResponse"></a>SellTonightSoldOutJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [SellTonightSoldOutData](#/definitions/SellTonightSoldOutData) |

- <a name="/definitions/SellTonightSoldOutData"></a>SellTonightSoldOutData

Property Name | Type | Description
------------- | ---- | -----------
marketName | string | market name
hotels | Array[[HotelAvailabilityItem](#/definitions/HotelAvailabilityItem)] | competitors' hotel room availability

- <a name="/definitions/HotelAvailabilityItem"></a>HotelAvailabilityItem

Property Name | Type | Description
------------- | ---- | -----------
hotelName | string | hotel name
availability | int | hotel room's availability

- <a name="/definitions/SellTonightRoomsLeftJSONResponse"></a>SellTonightRoomsLeftJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [SellTonightRoomsLeftData](#/definitions/SellTonightRoomsLeftData) |

- <a name="/definitions/SellTonightRoomsLeftData"></a>SellTonightRoomsLeftData

Property Name | Type | Description
------------- | ---- | -----------
marketName | string | market name
hotels | Array[[HotelAvailabilityItem2](#/definitions/HotelAvailabilityItem2)] | competitors' hotel room availability

- <a name="/definitions/HotelAvailabilityItem2"></a>HotelAvailabilityItem2

Property Name | Type | Description
------------- | ---- | -----------
hotelName | string | hotel name
hotelType | string | hotel type
availability | boolean | hotel room's availability

- <a name="/definitions/CompressionJSONResponse"></a>CompressionJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [CompressionData](#/definitions/CompressionData) |

- <a name="/definitions/CompressionData"></a>CompressionData

Property Name | Type | Description
------------- | ---- | -----------
regionName | string | region name
startDate | string | start date
compressionPercent | Array[integer] | compression percent

- <a name="/definitions/SameDaySortV2JSONResponse"></a>SameDaySortV2JSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [SameDaySortRankData](#/definitions/SameDaySortRankData) |

- <a name="/definitions/SameDaySortRankData"></a>SameDaySortRankData

Property Name | Type | Description
------------- | ---- | -----------
currentRank | number | current Rank
previousRank | number | previous Rank
currentPrice | number | current Price
previousPrice | number | previous Price

- <a name="/definitions/compressionOutlookJSONResponse"></a>compressionOutlookJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [compressionOutlookData](#/definitions/compressionOutlookData) |

- <a name="/definitions/compressionOutlookData"></a>compressionOutlookData

Property Name | Type | Description
------------- | ---- | -----------
regionName | string | region name
compression | Array[[compressionOutlookItem](#/definitions/compressionOutlookItem)] | compression set

- <a name="/definitions/compressionOutlookItem"></a>compressionOutlookItem

Property Name | Type | Description
------------- | ---- | -----------
date | string | date
compressionPercent | integer | compression percent

- <a name="/definitions/addCompSetJSONResponse"></a>addCompSetJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [addCompSetData](#/definitions/addCompSetData) |

- <a name="/definitions/addCompSetData"></a>addCompSetData

Property Name | Type | Description
------------- | ---- | -----------
HotelId | integer | owner hotel id
HotelName | string | owner hotel name
startDate | string | start date
endDate | string | end date
compSet | Array[[addCompSetItem](#/definitions/addCompSetItem)] | competitors set

- <a name="/definitions/addCompSetItem"></a>addCompSetItem

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | hotel id
hotelName | string | hotel name
eventDate | string | event date

- <a name="/definitions/SoldOutRoomTypeJSONResponse"></a>SoldOutRoomTypeJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[[SoldOutRoomTypeData](#/definitions/SoldOutRoomTypeData)] | Sold out room types by hotel

- <a name="/definitions/SoldOutRoomTypeData"></a>SoldOutRoomTypeData

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | hotel id
hotelName | string | hotel name
roomTypes | Array[[SoldOutRoomTypeItem](#/definitions/SoldOutRoomTypeItem)] | Sold out by r

- <a name="/definitions/SoldOutRoomTypeItem"></a>SoldOutRoomTypeItem

Property Name | Type | Description
------------- | ---- | -----------
roomTypeId | integer | room type id

- <a name="/definitions/GainedOpportunitiesJSONResponse"></a>GainedOpportunitiesJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[[GainedOpportunitiesData](#/definitions/GainedOpportunitiesData)] | gained opportunities by dates

- <a name="/definitions/GainedOpportunitiesData"></a>GainedOpportunitiesData

Property Name | Type | Description
------------- | ---- | -----------
bookedHotelId | integer | booked hotel id
bookedHotelName | string | booked hotel name
date | string | booked date
totalViewerCounter | integer | the total view number
gainedOpportunities | Array[[GainedOpportunitiesItem](#/definitions/GainedOpportunitiesItem)] | gained opportunities from these hotels
timeStamp | string | timeStamp of the data creation

- <a name="/definitions/GainedOpportunitiesItem"></a>GainedOpportunitiesItem

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | viewed hotel id
hotelName | string | viewed hotel name
views | integer | view number

- <a name="/definitions/GeoDemandJSONResponse"></a>GeoDemandJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [GeoDemandData](#/definitions/GeoDemandData) |

- <a name="/definitions/GeoDemandData"></a>GeoDemandData

Property Name | Type | Description
------------- | ---- | -----------
totalTravelers | integer | Total travelers today
travelersDetails | Array[[GeoDemandItem](#/definitions/GeoDemandItem)] | missed opportunities by hotel

- <a name="/definitions/GeoDemandItem"></a>GeoDemandItem

Property Name | Type | Description
------------- | ---- | -----------
region | string | region name
regionId | integer | region id
num | integer | the number of travelers visited this hotel's infosite page

- <a name="/definitions/SameDaySortHistoryJSONResponse"></a>SameDaySortHistoryJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [SameDaySortHistoryData](#/definitions/SameDaySortHistoryData) |

- <a name="/definitions/SameDaySortHistoryData"></a>SameDaySortHistoryData

Property Name | Type | Description
------------- | ---- | -----------
searchDate | string | The date when we search this hotel
avgRank | number | Average sort rank in the related search date
avgPriceAmount | number | Average price amount in the related search date

- <a name="/definitions/MissedOpposLeaderBoardJSONResponse"></a>MissedOpposLeaderBoardJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [MissedOpposLeaderBoardData](#/definitions/MissedOpposLeaderBoardData) |

- <a name="/definitions/MissedOpposLeaderBoardData"></a>MissedOpposLeaderBoardData

Property Name | Type | Description
------------- | ---- | -----------
viewedHotelId | integer | viewed hotel id
viewedHotelName | string | viewed hotel name
missedOpportunities | Array[[MissedOpportunitiesItem](#/definitions/MissedOpportunitiesItem)] | missed opportunities by hotel

- <a name="/definitions/newsfeedJSONResponse"></a>newsfeedJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[[newsfeedData](#/definitions/newsfeedData)] | newsfeed list

- <a name="/definitions/newsfeedData"></a>newsfeedData

Property Name | Type | Description
------------- | ---- | -----------
_id | string | event id
hotelId | integer | hotel id
eventType | string | event type
eventDate | string | event date
data | string | event data

- <a name="/definitions/NewsfeedADRJSONResponse"></a>NewsfeedADRJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[[NewsfeedADRData](#/definitions/NewsfeedADRData)] | Average Daily Rate (ADR) for per day

- <a name="/definitions/NewsfeedADRData"></a>NewsfeedADRData

Property Name | Type | Description
------------- | ---- | -----------
date | string | date
avg | number | Average daily rate of hotel
min | number | Minimal average daily rate of competitor hotel
max | number | Maximal average daily rate of competitor hotel

- <a name="/definitions/FairShareInfositeViewsJSONResponse"></a>FairShareInfositeViewsJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | float | the comparison of today's fair share with last 7, 14, 21 and 28 days' fair share

- <a name="/definitions/FairShareJSONResponse"></a>FairShareJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [FairShareData](#/definitions/FairShareData) |

- <a name="/definitions/FairShareData"></a>FairShareData

Property Name | Type | Description
------------- | ---- | -----------
roomCount | integer | your hotel's room count
compSetRoomCount | integer | competitors' room count
fairShare | number | fair share metrics. it's roomCount/(roomCount + compSetRoomCount)
daily | Array[[DailyFairShareItem](#/definitions/DailyFairShareItem)] | fair share data by daily

- <a name="/definitions/DailyFairShareItem"></a>DailyFairShareItem

Property Name | Type | Description
------------- | ---- | -----------
date | string | date
bookedRooms | string | your hotel's booked room number
compSetBookedRooms | string | competitors' booked room number

- <a name="/definitions/InterestPriceRangeJSONResponse"></a>InterestPriceRangeJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[[interestPriceRangeData](#/definitions/interestPriceRangeData)] | Interest price range at a specified time

- <a name="/definitions/interestPriceRangeData"></a>interestPriceRangeData

Property Name | Type | Description
------------- | ---- | -----------
priceRange | string | price range
count | integer | the number of booking in this price range

- <a name="/definitions/priceDistributionJSONResponse"></a>priceDistributionJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | [priceDistributionJSONData](#/definitions/priceDistributionJSONData) |

- <a name="/definitions/priceDistributionJSONData"></a>priceDistributionJSONData

Property Name | Type | Description
------------- | ---- | -----------
priceDistributionArr | Array[[priceDistributionData](#/definitions/priceDistributionData)] | price distribution in one market at a specified time
lowestPriceArr | Array[[lowestPriceData](#/definitions/lowestPriceData)] | the list of hotel with lowest price at a specified time

- <a name="/definitions/priceDistributionData"></a>priceDistributionData

Property Name | Type | Description
------------- | ---- | -----------
rooms | integer | the number of rooms in this price range
yourHotelflag | boolean | the price distribution of your hotel
priceRange | string | price range
percentage | integer | percentage of total rooms booked

- <a name="/definitions/lowestPriceData"></a>lowestPriceData

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | hotel id
lowestPrice | number | the lowest ADR price of hotel
hotelName | string | hotel name
