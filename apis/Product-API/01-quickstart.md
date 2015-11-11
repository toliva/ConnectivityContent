| Resource | Supported Operations | Production Endpoint | Parameters |
| -------- | -------------------- | ------------------- | ---------- |
| Property | Read a single property (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/{PropertyID} | None |
| Property | Read multiple properties (GET) (limited to max 200 at a time) belonging to the user credentials provided | GET https://services.expediapartnercentral.com/products/v1/properties/ | status=all (optional)
If status is not provided, only active properties are returned.
offset=[number starting at 0] (optional, returns results starting at position 0 by default)
limit=[number between 1 and 200] (optional, 20 by default) |
| Room Type | Read multiple room types (GET) belonging to a single property | GET https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/ | status=all (optional)
If status is not provided, only active room types are returned.|
| Room Type | Read a single room type (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/[roomTypeResourceId] | None |
| Room Type | Create a single room type (POST) | POST https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/ | None |
| Room Type | Update a single room type (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/[roomTypeResourceId] | None |
| Rate Plan | Read multiple rate plans belonging to a single room type (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/[roomTypeResourceId]/ratePlans/ | status=all (optional)
If status is not provided, only active rate plans are returned.|
| Rate Plan | Read a single rate plan (GET) | GET https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/[roomTypeResourceId]/ratePlans/[ratePlanResourceId] | None |
| Rate Plan | Create a single rate plan (POST) | POST https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/[roomTypeResourceId]/ratePlans/ | None |
| Rate Plan | Update a single rate plan (PUT) in full overlay mode | PUT https://services.expediapartnercentral.com/products/v1/properties/[propertyResourceId]/roomTypes/[roomTypeResourceId]/ratePlans/[ratePlanResourceId] | None |
