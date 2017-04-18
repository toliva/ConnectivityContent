With the VIP Bookings experimental API, partners can query Expedia to know if hotels are participating in the VIP program or not. They can also query Expedia to know the VIP level of the main guest of any booking.

## Authentication
The API takes basic auth headers for authentication. 
The credentials expected are the same as any other public API available via this portal.

## Warning: mocked data!
This API was designed to enable Madrid Hackathon participants to experiment with the idea of learning more about VIP status of hotels and main guests for specific bookings.
It was all built with mocked data and will not return real statuses. The logic to return responses will be detailed in the sample messages below.

## Requesting VIP status for hotels
Our API can return whether a hotel, or a list of hotels, is part of the VIP program or not. As our API was build for the hackathon, there is no validation made on the hotel IDs provided. The API will return data as long as a valid integer is passed.
In order to get a response indicating the hotel is participating in VIP program, use an even number. To get a response indicating a hotel isn't participating, use an odd number.

To get the VIP status of one specific hotel:

https://services.expediapartnercentral.com/vip-booking/v1/hotels/12933870/vipStatus

Clicking the above URL will prompt users for credentials. If you do not have valid API logins, the following can be used
```
username: EQCtest12933870
password: ew67nk33
```

This will return:
```json
{
  "hotelId": 12933870,
  "vip": true
}
```

To get the VIP status of a list of hotels:
https://services.expediapartnercentral.com/vip-booking/v1/hotels/vipStatus?ids=12933870%2C12933871%2C12933872

```json
[
  {
    "hotelId": 12933870,
    "vip": true
  },
  {
    "hotelId": 12933871,
    "vip": false
  },
  {
    "hotelId": 12933872,
    "vip": true
  }
]
```

## Request Guest Tier Level for a Booking
Our API can return VIP tier level for a booking, or a list of bookings. As our API was built for the hackathon, it uses mocked data.
In order to get Gold tier, the API has to be queried for a booking ID that's a multiple of 5. To get Silver status, the booking ID should be
a multiple of 3. Any other booking ID will give the base tier.

To get the tier of a guest of a specific booking:
https://services.expediapartnercentral.com/vip-booking/v1/bookings/12344333/guestVipStatus

```json
{
  "bookingId": 12344333,
  "vipStatus": "BLUE"
}
```

to get the tier for a list of bookings:
https://services.expediapartnercentral.com/vip-booking/v1/bookings/guestVipStatus?ids=1000000%2C3000036%2C902213212

```json
[
  {
    "bookingId": 1000000,
    "vipStatus": "GOLD"
  },
  {
    "bookingId": 3000036,
    "vipStatus": "SILVER"
  },
  {
    "bookingId": 902213212,
    "vipStatus": "BLUE"
  }
]
```
