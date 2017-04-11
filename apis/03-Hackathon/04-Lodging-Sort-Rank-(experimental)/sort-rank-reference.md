# Sort Rank
This is the Sort Ranks API, it returns the sort ranks for a given hotel id.

## lodging-sort/v1/hops/HopsAverageRanks
### hopsAverageRanks
hopsAverageRanks

- Method: `GET`
- Url: https://services.expediapartnercentral.com/lodging-sort/v1/hops/HopsAverageRanks
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotelId | false | integer | 
cid | query | clientId | false | string | 
searchDate | query | givenSearchDates | false | array | 
checkin | query | givenCheckinDate | false | string | 
numDays | query | givenNumOfDays | false | integer | 
currency | query | currency | false | string | 
path | query | path | false | string | 
Message-ID | header | msgId | false | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [SortRanksApiResponse](#/definitions/SortRanksApiResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
401 | Unauthorized | #/definitions/undefined
403 | Forbidden | #/definitions/undefined
404 | Not Found | #/definitions/undefined
default |  | [SortRanksApiResponse](#/definitions/SortRanksApiResponse)

### hopsAverageRanksPretty
hopsAverageRanksPretty

- Method: `GET`
- Url: https://services.expediapartnercentral.com/lodging-sort/v1/hops/HopsAverageRanks/pretty
- Consumes: `application/json`
- Produces: `text/html`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
hotelId | query | hotelId | false | integer | 
cid | query | clientId | false | string | 
searchDate | query | givenSearchDates | false | array | 
checkin | query | givenCheckinDate | false | string | 
numDays | query | givenNumOfDays | false | integer | 
currency | query | currency | false | string | 
path | query | path | false | string | 
Message-ID | header | msgId | false | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [string](#/definitions/string)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
401 | Unauthorized | #/definitions/undefined
403 | Forbidden | #/definitions/undefined
404 | Not Found | #/definitions/undefined
default |  | string

---

## Definitions
- <a name="/definitions/TpidEntityResponse"></a>TpidEntityResponse

Property Name | Type | Description
------------- | ---- | -----------
tpid | integer | 
regions | Array[[RegionEntityResponse](#/definitions/RegionEntityResponse)] | 

- <a name="/definitions/AverageCheckinDataEntity"></a>AverageCheckinDataEntity

Property Name | Type | Description
------------- | ---- | -----------
checkinDate | string | 
avgRank | number | 
avgPrice | number | 
avgComp | number | 

- <a name="/definitions/SortRanksApiResponse"></a>SortRanksApiResponse

Property Name | Type | Description
------------- | ---- | -----------
error | string | 
hotelId | integer | 
searchDates | Array[[SearchDateEntityResponse](#/definitions/SearchDateEntityResponse)] | 

- <a name="/definitions/SearchDateEntityResponse"></a>SearchDateEntityResponse

Property Name | Type | Description
------------- | ---- | -----------
searchDate | string | 
tpids | Array[[TpidEntityResponse](#/definitions/TpidEntityResponse)] | 

- <a name="/definitions/RegionEntityResponse"></a>RegionEntityResponse

Property Name | Type | Description
------------- | ---- | -----------
regionId | integer | 
data | Array[[AverageCheckinDataEntity](#/definitions/AverageCheckinDataEntity)] | 
