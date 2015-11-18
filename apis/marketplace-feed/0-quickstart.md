# Quick Start

The Marketplace Feed API enables hoteliers to assess how competitive they are in the Expedia marketplace.  This feed currently offers insights into how competitive a hotel's availability and rates are, as well as feedback provided by Expedia guests.

Each request should include hotelier credentials in HTTP basic auth format, a Client-Id HTTP header, and a hotelId query parameter.

For more information, check out the [reference documentation](reference.html), or try it out live with [swagger](swagger.html).

For an example request/response, you can send a `hotelId=test` query parameter.  Valid auth credentials are not required for `hotelId=test`, but you must still provide a `Client-Id` header.

```
curl -u 'username:password' -H'Client-Id: MyClientId' 'https://marketplace-feed.prod-p.expedia.com/v1/messages?hotelId=test'
```

The response contains a JSON list of message objects.

```
{
    "messages": [
        {
            "id": "2379cce04a79d3669717de302c8a45bf20f0cf5e",
            "hotelId": "test",
            "category": "Missing Inventory",
            "shortMessage": "On Nov 19, 2015 you can sell 5 more rooms with Expedia. Add inventory now.",
            "longMessage": "On Nov 19, 2015 you have only 10 rooms left. Our sales forecast shows that we can sell 5 more rooms.",
            "values": {
                "date": "2015-11-19",
                "currentRooms": 10,
                "roomsToAdd": 5,
                "roomTypeId": "12345"
            },
            "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
        },
        {
            "id": "1cc8106e1621b68c3375a98dbc8778afe47fc20a",
            "hotelId": "test",
            "category": "Missing Inventory",
            "shortMessage": "On Nov 23, 2015 you can sell 7 more rooms with Expedia. Add inventory now.",
            "longMessage": "On Nov 23, 2015 you have only 12 rooms left. Our sales forecast shows that we can sell 7 more rooms.",
            "values": {
                "date": "2015-11-23",
                "currentRooms": 12,
                "roomsToAdd": 7,
                "roomTypeId": "12345"
            },
            "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
        },
        {
            "id": "9c16e2adf1734b253e405f5d6e3a42c035dab81c",
            "hotelId": "test",
            "category": "Missed Opportunities",
            "shortMessage": "So far, you lost 3 bookings today.",
            "longMessage": "3 travelers arriving in your market today viewed your property but booked elsewhere.",
            "values": {
                "count": 3,
                "missedOpportunities": [
                    {
                        "hotelId": "25280",
                        "hotelName": "The Verb Hotel",
                        "bookings": 2
                    },
                    {
                        "hotelId": "119162",
                        "hotelName": "Le Meridien Cambridge-MIT",
                        "bookings": 1
                    }
                ]
            },
            "actionURL": "https://he.expediapartnercentral.com/HotelExtranet/InventoryGrid.htm?helpCtx=InventoryGrid&htid=test"
        },
        {
            "id": "e88d79e268ea2b97b9d434dd825d9593fca99862",
            "hotelId": "test",
            "category": "Real-Time Feedback",
            "shortMessage": "A guest at your property is giving real-time feedback.",
            "longMessage": "Bed was not made :(",
            "values": {
                "itineraryId": "12345",
                "startDate": "2015-11-18T05:30:04.891Z",
                "endDate": "2015-11-21T05:30:04.891Z",
                "createDate": "2015-11-19T05:30:04.891Z",
                "updateDate": "2015-11-20T05:30:04.891Z",
                "isHappy": false
            },
            "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/realtime_feedback.html?htid=test"
        },
        {
            "id": "9d082a1038790d239a5558f924cd6d6d42127267",
            "hotelId": "test",
            "category": "Hotel Review",
            "shortMessage": "A guest just reviewed your property and rated you 4 out of 5 stars.",
            "longMessage": "Great view!",
            "values": {
                "reviewId": "123",
                "itineraryId": "456",
                "rating": 4,
                "comment": "Great view!",
                "createDate": "2015-11-18T05:30:04.894Z"
            },
            "actionURL": "https://hotelcontent.expediapartnercentral.com/contentmain/user_reviews.html?htid=test"
        }
    ]
}
```
