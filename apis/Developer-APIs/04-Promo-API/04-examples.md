# Examples
Here you will find sample messages for interacting with the API. 

## Promo Creation
Request:
```HTML
POST https://services.expediapartnercentral.com/promotions/v1/hotels/4384/promos HTTP/1.1
Content-Type: application/json
Authorization: Basic ZXFjdGVzdGVyOmVxY3huZXQ=
Accept: application/json
```
```JSON
{
    "name": "s20150501l",
    "travelDateStart": "2015-05-01",
    "travelDateEnd": "2015-06-22",
    "bookDateTimeStart": "2015-04-15T12:00:00",
    "bookDateTimeEnd": "2015-06-16T12:00:00",
    "minLOS": "3",
    "percent": "30",
    "mobileOnly": true,
    "RatePlan": [
        {"id": "201246465"},
        {"id": "201845338"}
    ],
    "TravelDateBlackout": [
        {
            "start": "2015-05-03",
            "end": "2015-05-04"
        },
        {
            "start": "2015-05-24",
            "end": "2015-05-25"
        }
    ]
}
```
Response:
Success case
```HTML
HTTP/1.1 201 Created
Request-ID: e5aab784-ed6f-11e3-98cb-a4896a57b8ab
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Entity": [{
        "id": "204631625",
        "name": "s20150501l",
        "status": "Active",
        "travelDateStart": "2015-05-01",
        "travelDateEnd": "2015-06-22",
        "bookDateTimeStart": "2015-04-15T12:00:00",
        "bookDateTimeEnd": "2015-06-16T12:00:00",
        "percent": "30",
        "minLOS": "3",
        "mobileOnly": true,
        "score" : "7.3",
        "RatePlan": [
            {"id": "201246465"},
            {"id": "201845338"}
        ],
        "TravelDateBlackout": [
            {
                "start": "2015-05-03",
                "end": "2015-05-04"
            },
            {
                "start": "2015-05-24",
                "end": "2015-05-25"
            }
        ]
    }]
}
```

Error case – Duplicate creation
```HTML
HTTP/1.1 409 Conflict
Request-ID: 24083915-ed72-11e3-98cb-a4896a57b8ab
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Errors": [{
        "code": 3729,
        "message": "An identical promotion was already created on 2014-06-08 04:44:21-0700: promotion ID 204631625. No changes were made."
    }],
}
```

Error case – system error
```HTML
HTTP/1.1 500 Internal Server Error
Request-ID: 5dbf2dca-6672-49a3-a5f1-1bba0a6171d1
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Errors": [{
        "code": 4000,
        "message": "Internal system error, please try again in a few minutes."
    }],
}
```

## Promo Score Preview

```HTML
POST https://services.expediapartnercentral.com/promotions/v1/hotels/4384/promos HTTP/1.1
Content-Type: application/json
Authorization: Basic ZXFjdGVzdGVyOmVxY3huZXQ=
Accept: application/json
```
```JSON
{
    "name": "s20150501l",
    "travelDateStart": "2015-05-01",
    "travelDateEnd": "2015-06-22",
    "bookDateTimeStart": "2015-04-15T12:00:00",
    "bookDateTimeEnd": "2015-06-16T12:00:00",
    "minLOS": "3",
    "percent": "40",
    "mobileOnly": true,
     "preview": true,
    "RatePlan": [
        {"id": "201246465"},
        {"id": "201845338"}
    ],
    "TravelDateBlackout": [ ]
}
```

Response:
Success case
```HTML
HTTP/1.1 200 OK
Request-ID: 5dbf2dca-6672-49a3-a5f1-1bba0a6171d1
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Entity": [{
        "name": "s20150501l",
        "travelDateStart": "2015-05-01",
        "travelDateEnd": "2015-06-22",
        "bookDateTimeStart": "2015-04-15T12:00:00",
        "bookDateTimeEnd": "2015-06-16T12:00:00",
        "minLOS": "3",
        "percent": "40",
        "mobileOnly": true,
        "score": “8.5”,
        "RatePlan": [
            {"id": "201246465"},
            {"id": "201845338"}
        ],
        "TravelDateBlackout": [ ]
    }]
}
```

Error case – Invalid data in request
```HTML
HTTP/1.1 400 Bad request
Request-ID: 162fa2c4-4ca6-11e4-98f1-965f8a3b6159
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Errors": [{
        "code": 3010,
        "message": "Validation against schema constraints failed. Error details: Invalid Promo object, The field: 'minLOS' must be less than or equal to 4, Invalid value is 8"
    }],
}
```

## Promo Read
```HTML
GET https://services.expediapartnercentral.com/promotions/v1/hotels/4384/promos HTTP/1.1
Authorization: Basic ZXFjdGVzdGVyOmVxY3huZXQ=
Accept: application/json
```

Response:
Success case
```HTML
HTTP/1.1 200 OK
Request-ID: 0b66d9d7-f0c5-11e3-b585-aa0318c1b5c2
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Entity": [{
        "id": "207021029",
        "name": "s2015005021",
        "status": "Inactive",
        "travelDateStart": "2015-05-01",
        "travelDateEnd": "2015-06-22",
        "bookDateTimeStart": "2015-04-16T12:00:00",
        "bookDateTimeEnd": "2015-06-16T23:00:00",
        "minLOS": "1",
        "percent": "75",
        "mobileOnly": true,
        "minAdvBookDays": "2",
        "RatePlan": [
            {"id": "203809361"},
            {"id": "203809381"}
        ],
        "TravelDateBlackout": [
            {
                "start": "2015-05-03",
                "end": "2015-05-04"
            },
            {
                "start": "2015-05-24",
                "end": "2015-05-25"
            }
        ]
        },{
        "id": "207021030",
        "name": "s2015005022",
        "status": "Active",
        "travelDateStart": "2015-05-01",
        "travelDateEnd": "2015-06-22",
        "bookDateTimeStart": "2015-04-16T12:00:00",
        "bookDateTimeEnd": "2015-06-16T23:00:00",
        "minLOS": "1",
        "percent": "75",
        "mobileOnly": true,
        "minAdvBookDays": "2",
        "RatePlan": [
            {"id": "203809361"},
            {"id": "203809381"}
        ] 
        }]
}
```
Error case – Invalid hotel ID
```HTML
HTTP/1.1 400 Bad Request
Request-ID: 19c5834e-970c-44b0-85de-a6375a6d4d6c
Content-Type: application/json;charset=UTF-8
```
```JSON
{
  "Errors": [ 
    {
      "code": 3701,
      "message": "Hotel ID not found. You specified an invalid hotel ID."
    }]
}
```

## Promo Update
```HTML
PUT https://services.expediapartnercentral.com/promotions/v1/hotels/4384/promos/206888737 HTTP/1.1
Content-Type: application/json
Authorization: Basic ZXFjdGVzdGVyOmVxY3huZXQ=
Accept: application/json
```
```JSON
{
    "name": "s2015005021",
    "status": "Inactive",
    "travelDateStart": "2015-05-01",
    "travelDateEnd": "2015-06-22",
    "bookDateTimeStart": "2015-04-16T12:00:00",
    "bookDateTimeEnd": "2015-06-16T23:00:00",
    "minLOS": "1",
    "percent": "75",
    "mobileOnly": true,
    "minAdvBookDays": "2",
    "RatePlan": [
        {"id": "203809361"},
        {"id": "203809381"}
    ],
    "TravelDateBlackout": [
        {
            "start": "2015-05-03",
            "end": "2015-05-04"
        },
        {
            "start": "2015-05-24",
            "end": "2015-05-25"
        }
    ]
}
```

Response
Success case
```HTML
HTTP/1.1 200 OK
Request-ID: 0b66d9d7-f0c5-11e3-b585-aa0318c1b5c2
Content-Type: application/json;charset=UTF-8
```
```JSON
{
    "Entity": [{
        "name": "s2015005021",
        "status": "Inactive",
        "travelDateStart": "2015-05-01",
        "travelDateEnd": "2015-06-22",
        "bookDateTimeStart": "2015-04-16T12:00:00",
        "bookDateTimeEnd": "2015-06-16T23:00:00",
        "minLOS": "1",
        "percent": "75",
        "mobileOnly": true,
        "minAdvBookDays": "2",
        "score": "8.0",
        "RatePlan": [
            {"id": "203809361"},
            {"id": "203809381"}
        ],
        "TravelDateBlackout": [
            {
                "start": "2015-05-03",
                "end": "2015-05-04"
            },
            {
                "start": "2015-05-24",
                "end": "2015-05-25"
            }
        ]
        }],
}
```
Error case
```HTML
HTTP/1.1 400 Bad Request
Request-ID: 19c5834e-970c-44b0-85de-a6375a6d4d6c
Content-Type: application/json;charset=UTF-8
```
```JSON
{
  "Errors": [ 
    {
      "code": 3707,
      "message": "The travel start date 2013-05-01 must be current or in the future",
      "promoId": "2147483647",
      "link": "https://promotions.expediapartnercentral.com/promotions/drrDashboard.html?htid=4384"
    } 
  ]
}
```