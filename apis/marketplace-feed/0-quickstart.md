# Quick Start

The Marketplace Feed provides a list of messages for a given hotel.  Each request should include the hotel credentials in basic auth format, the Client-ID as a header parameter, and the hotelId as a query parameter.
```
curl -k -u 'username:password' -H'Client-ID: MyClientId' 'https://marketplace-feed.prod-p.expedia.com/v1/messages?hotelId=123'
```

The response contains a Json formatted list of message objects.
```
{
    "messages": [
        {
            "category": "Missing Inventory",
            "hotelId": "test",
            "id": "95fbaf423d3d6c5cb32a247aedc97d64b9ae1aff",
            "longMessage": "On 2015-10-20 you have only 10 rooms left. Our sales forecast shows that we can sell 5 more rooms.",
            "shortMessage": "On 2015-10-20 you can sell 5 more rooms with Expedia. Add inventory now.",
            "values": {
                "currentRooms": 10,
                "date": "2015-10-20",
                "roomsToAdd": 52
            }
        },
        {
            "category": "Missing Inventory",
            "hotelId": "test",
            "id": "98f8ff6232d1fe7f1cb157c34124923895f9e165",
            "longMessage": "On 2015-10-24 you have only 12 rooms left. Our sales forecast shows that we can sell 7 more rooms.",
            "shortMessage": "On 2015-10-24 you can sell 7 more rooms with Expedia. Add inventory now.",
            "values": {
                "currentRooms": 12,
                "date": "2015-10-24",
                "roomsToAdd": 7
            }
        }
    ]
}
```

![myimage here](/images/epc-logo.png)

+++iframe
https://marketplace-feed.prod-p.expedia.com/swagger
+++
