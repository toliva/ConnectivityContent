# Reference
API to retrieve realtime market analytics for lodging suppliers

## v1
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
data |  | 

- <a name="/definitions/MissedOpportunitiesData"></a>MissedOpportunitiesData

Property Name | Type | Description
------------- | ---- | -----------
viewedHotelId | integer | viewed hotel id
viewedHotelName | string | viewed hotel name
totalViewerCounter | integer | total viewer count
missedOpportunities | Array[undefined] | missed opportunities by hotel
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
data | Array[undefined] | missed opportunities by checkinDate

- <a name="/definitions/MissedOpportunitiesV3JSONResponse"></a>MissedOpportunitiesV3JSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data |  | 

- <a name="/definitions/MissedOpportunitiesV3Data"></a>MissedOpportunitiesV3Data

Property Name | Type | Description
------------- | ---- | -----------
viewedHotelId | integer | viewed hotel id
viewedHotelName | string | viewed hotel name
bookDate | string | booked date
totalLostBookings | integer | total lost bookings count
totalLostUSD | number | total lost US Dollar
missedOpportunities | Array[undefined] | missed opportunities by hotel

- <a name="/definitions/MissedOpportunitiesV3Item"></a>MissedOpportunitiesV3Item

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | booked hotel id
hotelName | string | booked hotel name
lostBookings | integer | total lost bookings to this hotel
lostUSD | number | total lost US Dollar to this hotel
details | Array[undefined] | details for the lost bookings information

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
data |  | 

- <a name="/definitions/SellTonightSoldOutData"></a>SellTonightSoldOutData

Property Name | Type | Description
------------- | ---- | -----------
marketName | string | market name
hotels | Array[undefined] | competitors' hotel room availability

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
data |  | 

- <a name="/definitions/SellTonightRoomsLeftData"></a>SellTonightRoomsLeftData

Property Name | Type | Description
------------- | ---- | -----------
marketName | string | market name
hotels | Array[undefined] | competitors' hotel room availability

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
data |  | 

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
data |  | 

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
data |  | 

- <a name="/definitions/compressionOutlookData"></a>compressionOutlookData

Property Name | Type | Description
------------- | ---- | -----------
regionName | string | region name
compression | Array[undefined] | compression set

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
data |  | 

- <a name="/definitions/addCompSetData"></a>addCompSetData

Property Name | Type | Description
------------- | ---- | -----------
HotelId | integer | owner hotel id
HotelName | string | owner hotel name
startDate | string | start date
endDate | string | end date
compSet | Array[undefined] | competitors set

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
data | Array[undefined] | Sold out room types by hotel

- <a name="/definitions/SoldOutRoomTypeData"></a>SoldOutRoomTypeData

Property Name | Type | Description
------------- | ---- | -----------
hotelId | integer | hotel id
hotelName | string | hotel name
roomTypes | Array[undefined] | Sold out by r

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
data | Array[undefined] | gained opportunities by dates

- <a name="/definitions/GainedOpportunitiesData"></a>GainedOpportunitiesData

Property Name | Type | Description
------------- | ---- | -----------
bookedHotelId | integer | booked hotel id
bookedHotelName | string | booked hotel name
date | string | booked date
totalViewerCounter | integer | the total view number
gainedOpportunities | Array[undefined] | gained opportunities from these hotels
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
data |  | 

- <a name="/definitions/GeoDemandData"></a>GeoDemandData

Property Name | Type | Description
------------- | ---- | -----------
totalTravelers | integer | Total travelers today
travelersDetails | Array[undefined] | missed opportunities by hotel

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
data |  | 

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
data |  | 

- <a name="/definitions/MissedOpposLeaderBoardData"></a>MissedOpposLeaderBoardData

Property Name | Type | Description
------------- | ---- | -----------
viewedHotelId | integer | viewed hotel id
viewedHotelName | string | viewed hotel name
missedOpportunities | Array[undefined] | missed opportunities by hotel

- <a name="/definitions/newsfeedJSONResponse"></a>newsfeedJSONResponse

Property Name | Type | Description
------------- | ---- | -----------
status | string | status of the request
errorCode | string | error code
errorMsg | string | error message
data | Array[undefined] | newsfeed list

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
data | Array[undefined] | Average Daily Rate (ADR) for per day

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
data |  | 

- <a name="/definitions/FairShareData"></a>FairShareData

Property Name | Type | Description
------------- | ---- | -----------
roomCount | integer | your hotel's room count
compSetRoomCount | integer | competitors' room count
fairShare | number | fair share metrics. it's roomCount/(roomCount + compSetRoomCount)
daily | Array[undefined] | fair share data by daily

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
data | Array[undefined] | Interest price range at a specified time

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
data |  | 

- <a name="/definitions/priceDistributionJSONData"></a>priceDistributionJSONData

Property Name | Type | Description
------------- | ---- | -----------
priceDistributionArr | Array[undefined] | price distribution in one market at a specified time
lowestPriceArr | Array[undefined] | the list of hotel with lowest price at a specified time

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
