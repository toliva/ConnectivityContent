# Introduction 
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

| Resource | Supported Operations | Production Endpoint | Parameters |
| -------- | -------------------- | ------------------- | ---------- |
| Property | Read multiple properties (GET) (limited to max 200 at a time) belonging to the user credentials provided | GET https://services.expediapartnercentral.com/products/v1/properties/ | status=all (optional) If status is not provided, only active properties are returned. offset={number starting at 0} (optional, returns results starting at position 0 by default) limit={number between 1 and 200} (optional, 20 by default) |
| Property | Read a single property (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{PropertyID} | None |
| Room Type | Read multiple room types (GET) belonging to a single property | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/ | status=all (optional) If status is not provided, only active room types are returned.|
| Room Type | Read a single room type (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | None |
| Room Type | Create a single room type (POST) | POST https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/ | None |
| Room Type | Update a single room type (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId} | None |
| Rate Plan | Read multiple rate plans belonging to a single room type (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/ | status=all (optional) If status is not provided, only active rate plans are returned.|
| Rate Plan | Read a single rate plan (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | None |
| Rate Plan | Create a single rate plan (POST) | POST https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/ | None |
| Rate Plan | Update a single rate plan (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/products/v1/properties/{propertyResourceId}/roomTypes/{roomTypeResourceId}/ratePlans/{ratePlanResourceId} | None |
