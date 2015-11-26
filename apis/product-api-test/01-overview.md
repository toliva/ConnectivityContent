# Overview

The Product API enables Expedia partners to read, create, and edit room types and rate plans via the API, without having to use ExpediaPartnerCentral (EPC) or contact their market manager. It also offers the possibility to read basic property configuration to better use the API to manage room types and rate plans afterwards.

# Authentication
The same credentials used to manage properties via EQC today are compatible with the EPS Product API.
Partner must include a valid username/password in the HTTP header of the request using the below format: 
```
Authorization: Basic <username and password encoded by Base64>
```
Example: 
```
Authorization: Basic RVFDVXNlcjplUWNQYSQkd29yRA==
```
Where “RVFDVXNlcjplUWNQYSQkd29yRA==” is the string “EQCUser:eQcPa$$worD (username:password) Base64-encoded.


# Supported operations by resource & endpoints
* In order to access property information: /product/properties/{propertyResourceId}. Property resource ID is optional. If omitted, the list of active properties assigned to the account will be returned.
* Room types can be accessed in the context of a property: /product/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}. Room type resource ID is optional. If omitted, the list of active room types for the property will be returned.
* Rate plans can be accessed as part of a room type (they belong to a room type): /product/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId}. Rate plan resource ID is optional. If omitted, the list of active rate plans for that room type will be returned.

| Resource | Supported Operations | Production Endpoint | 
| -------- | -------------------- | ------------------- | 
| Property | Read multiple properties (GET) (limited to max 200 at a time) belonging to the user credentials provided | GET https://services.expediapartnercentral.com/products/v1/properties/ | 
| Property | Read a single property (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{PropertyID} |
| Room Type | Read multiple room types (GET) belonging to a single property | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/ | 
| Room Type | Read a single room type (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | 
| Room Type | Create a single room type (POST) | POST https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/ | 
| Room Type | Update a single room type (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | 
| Rate Plan | Read multiple rate plans belonging to a single room type (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/ | 
| Rate Plan | Read a single rate plan (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | 
| Rate Plan | Create a single rate plan (POST) | POST https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/ | 
| Rate Plan | Update a single rate plan (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | 
