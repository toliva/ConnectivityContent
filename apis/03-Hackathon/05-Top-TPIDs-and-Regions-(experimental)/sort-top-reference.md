# Top TPIDs and Regions
## lodging-sort/v1/hops/HopsTopTpidsAndRegions
### getTopTpidAndRegion
getTopTpidAndRegion

- Method: `GET`
- Url: https://services.expediapartnercentral.com/lodging-sort/v1/hops/HopsTopTpidsAndRegions
- Consumes: `application/json`
- Produces: `application/json`

#### Parameters
Parameter | Parameter Type | Description | Required | Data Type | Default Value
--------- | -------------- | ----------- | -------- | --------- | -------------
cid | query | clientId | false | string | 
hotelId | query | hotelId | false | integer | 
Message-ID | header | msgId | false | string | 

#### Success Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
200 | OK | [TopTpidsAndRegionsApiResponse](#/definitions/TopTpidsAndRegionsApiResponse)

#### Potential Error Responses
Status Code | Description | Response Model
----------- | ----------- | --------------
401 | Unauthorized | #/definitions/undefined
403 | Forbidden | #/definitions/undefined
404 | Not Found | #/definitions/undefined
default |  | [TopTpidsAndRegionsApiResponse](#/definitions/TopTpidsAndRegionsApiResponse)

---

## Definitions
- <a name="/definitions/TopTpidsAndRegionsApiResponse"></a>TopTpidsAndRegionsApiResponse

Property Name | Type | Description
------------- | ---- | -----------
error | string | 
hotelId | integer | 
hopsTpidsList | Array[[TpidEntity](#/definitions/TpidEntity)] | 

- <a name="/definitions/TpidEntity"></a>TpidEntity

Property Name | Type | Description
------------- | ---- | -----------
tpid | integer | 
sortedRegionList | Array[integer] | 
