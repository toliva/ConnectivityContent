# Quick Start

The Marketplace Feed API enables hoteliers to assess how competitive they are in the Expedia marketplace.  This feed currently offers insights into how competitive a hotel's availability and rates are, as well as feedback provided by Expedia guests.

Each request should include hotelier credentials in HTTP basic auth format, a `clientId` query parameter, and a `hotelId` query parameter.

For more information, check out the [reference documentation](reference.html), or try it out live with [swagger](swagger.html).

For an example request/response, you can send a `hotelId=test` query parameter.  Valid auth credentials are not required for `hotelId=test`, but you must still provide a `clientId` parameter.

```
curl -u 'username:password' 'https://marketplace-feed.prod-p.expedia.com/v1/messages?hotelId=test&clientId=YourOrganization'
```

The response contains a JSON list of message objects:

```
{
    "messages": [
        {
            "id": "1.TSZ0ZXN0JjNjNzI2NWU1JjIwMTYtMDEtMjk.P1lEB5NXX9auwJ0n3gmGP_Vk4Bw",
            "hotelId": "test",
            "category": "Missing Inventory",
            "shortMessage": "On Jan 29, 2016 you can sell 5 more rooms with Expedia. Add inventory now.",
            "longMessage": "On Jan 29, 2016 you have only 10 rooms left. Our sales forecast shows that we can sell 5 more rooms.",
            "values": {
                "date": "2016-01-29",
                "currentRooms": 10,
                "roomsToAdd": 5,
                "roomTypeId": "12345"
            },
            "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
        },
        {
            "id": "1.TSZ0ZXN0Jjg5ZWJjYWNjJjIwMTYtMDItMDI.2AemHSXvRPRAy31UdJ_VpS2Fr94",
            "hotelId": "test",
            "category": "Missing Inventory",
            "shortMessage": "On Feb 2, 2016 you can sell 7 more rooms with Expedia. Add inventory now.",
            "longMessage": "On Feb 2, 2016 you have only 12 rooms left. Our sales forecast shows that we can sell 7 more rooms.",
            "values": {
                "date": "2016-02-02",
                "currentRooms": 12,
                "roomsToAdd": 7,
                "roomTypeId": "12345"
            },
            "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
        },
        {
            "id": "1.TyZ0ZXN0JmIwMmNjMTM0JjIwMTYtMDEtMjgmMw.jyNGmzZJN9McnS41iLL3946V0VE",
            "hotelId": "test",
            "category": "Missed Opportunities",
            "shortMessage": "So far, you lost 3 bookings today.",
            "longMessage": "3 travelers viewed your property today but booked elsewhere.",
            "values": {
                "count": 3,
                "missedOpportunities": [
                    {
                        "hotelId": "25280",
                        "hotelName": "The Verb Hotel",
                        "lostBookings": 2,
                        "details": [
                            {
                                "viewedPrice": 123.45,
                                "bookedPrice": 100.0,
                                "checkInDate": "2016-02-07"
                            },
                            {
                                "viewedPrice": 200.0,
                                "bookedPrice": 149.99,
                                "checkInDate": "2016-02-02"
                            }
                        ]
                    },
                    {
                        "hotelId": "119162",
                        "hotelName": "Le Meridien Cambridge-MIT",
                        "lostBookings": 1,
                        "details": [
                            {
                                "viewedPrice": 123.45,
                                "bookedPrice": 150.0,
                                "checkInDate": "2016-02-04"
                            }
                        ]
                    }
                ]
            },
            "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
        },
        {
            "id": "1.RiZ0ZXN0JjQwNmQwZmY4JmExYjJjM2Q0.FrIsoe4PMpoJJZx3md-ah_049CY",
            "hotelId": "test",
            "category": "Real-Time Feedback",
            "shortMessage": "A guest at your property is giving real-time feedback.",
            "longMessage": "Bed was not made :(",
            "values": {
                "itineraryId": "12345",
                "name": "Joe Bloggs",
                "startDate": "2016-01-28T01:19:05.600Z",
                "endDate": "2016-01-31T01:19:05.600Z",
                "createDate": "2016-01-29T01:19:05.600Z",
                "updateDate": "2016-01-30T01:19:05.600Z",
                "isHappy": false
            },
            "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/realtime_feedback.html?htid=test"
        },
        {
            "id": "1.UiZ0ZXN0JmIzNmY4ZTM3JjEyMw.5OsCyCg5xL_3Dco5seJCbEMinRQ",
            "hotelId": "test",
            "category": "Hotel Review",
            "shortMessage": "A guest just reviewed your property and rated you 4 out of 5 stars.",
            "longMessage": "Great view!",
            "values": {
                "reviewId": "123",
                "itineraryId": "456",
                "name": "Anonymous",
                "rating": 4,
                "comment": "Great view!",
                "createDate": "2016-01-28T01:19:05.600Z"
            },
            "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/user_reviews.html?htid=test#GuestReview123"
        }
    ]
}
```
