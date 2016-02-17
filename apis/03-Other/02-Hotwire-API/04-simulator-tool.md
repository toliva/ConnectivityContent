# Simulator tool

## Booking Retrieval Simulator

The API endpoint in pre-production exposes a simulator that allows a user to retrieve example booking responses. This enables developers to test basic integration with the booking retrieval API without having to create test customer bookings in the pre-production environment.

To invoke the simulator:

Provide your usual apiKey
Use the authorization credentials 'hqcsim@hotwire.com:hotwire’ (aHFjc2ltQGhvdHdpcmUuY29tOmhvdHdpcmU=)
Send the request to the pre-production endpoint (https://api.preprod.hotwire.com/xnetApi/v1.1/XnetHotelService?wsdl)[https://api.preprod.hotwire.com/xnetApi/v1.1/XnetHotelService?wsdl]
Send hotel id 17515
The contents of the response will vary depending on the value sent in the MinsInPast parameter of the request

If MinsInPast is less than or equal to 60, the response will be empty
If MinsInPast is greater than 60, the response will contain several <Booking> elements with various guest, room, and length of stay combinations. One booking will be cancelled.

### Booking Retrieval Request XML Examples

**Example 1** shows a request for bookings made or cancelled at a hotel within the past 300 minutes.

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns2="http://api.xnet.hotwire/">
   <soapenv:Header/>
   <soapenv:Body>
      <ns2:retrieveBooking>
         <BookingRetrievalRQ echoToken="1111111">
            <Hotel id="34323"/>
            <MinsInPast>300</MinsInPast>
         </BookingRetrievalRQ>
      </ns2:retrieveBooking>
   </soapenv:Body>
</soapenv:Envelope>
```

### Booking Retrieval Response XML Examples  

Example 1 shows an empty response – there were no confirmed or cancelled bookings made within the requested number of minutes. The <BookingRetrievalResponse> element contains no child <Booking> elements.
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <ns2:retrieveBookingResponse xmlns:ns2="http://api.xnet.hotwire/">
         <BookingRetrievalRS version="1" timeStamp="2012-10-15T10:57:00.777-07:00" echoToken="1111111"/>
      </ns2:retrieveBookingResponse>
   </soap:Body>
</soap:Envelope>
```
 
**Example 2** shows a response with multiple active and cancelled bookings.
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <ns2:retrieveBookingResponse xmlns:ns2="http://api.xnet.hotwire/">
         <BookingRetrievalRS version="1" timeStamp="2012-10-19T10:49:55.543-07:00">
            <Booking id="58652752" type="Book" createDateTime="2012-10-19T10:46:51-07:00" source="HW">
               <Hotel id="34323"/>
               <RoomStay roomTypeID="STANDARD" ratePlanID="XHW" numberOfRooms="1">
                  <StayDate arrivalDate="2012-10-23" departureDate="2012-10-24"/>
                  <GuestCount adult="2" child="0"/>
                  <PerDayRates currency="AUD">
                     <PerDayRate stayDate="2012-10-23" baseRate="33.3"/>
                  </PerDayRates>
                  <TotalAmount amountAfterTaxes="37.0" amountOfTaxes="3.7" currency="AUD"/>
                  <PaymentCard cardHolderName="Test Booking" cardNumber="5555555555554444" cardCode="CA" seriesCode="925" expireDate="122017"/>
               </RoomStay>
               <Guest>
                  <PrimaryGuest givenName="Firstname " middleName="m" lastName="lastname "/>
               </Guest>
            </Booking>
            <Booking id=" 58652753" type="Book" createDateTime="2012-10-19T10:47:42-07:00" source="HW">
               <Hotel id="34323"/>
               <RoomStay roomTypeID="STANDARD" ratePlanID="XHW" numberOfRooms="2">
                  <StayDate arrivalDate="2012-10-23" departureDate="2012-10-25"/>
                  <GuestCount adult="2" child="0"/>
                  <PerDayRates currency="AUD">
                     <PerDayRate stayDate="2012-10-23" baseRate="22.5"/>
                     <PerDayRate stayDate="2012-10-24" baseRate="22.5"/>
                  </PerDayRates>
                  <TotalAmount amountAfterTaxes="100.0" amountOfTaxes="10.0" currency="AUD"/>
                  <PaymentCard cardHolderName="Test Booking" cardNumber="5555555555554444" cardCode="CA" seriesCode="925" expireDate="122017"/>
               </RoomStay>
               <Guest>
                  <PrimaryGuest givenName="Firstname firstname" lastName="lastname last name"/>
               </Guest>
            </Booking>
            <Booking id="58652754" type="Cancel" createDateTime="2012-10-19T10:49:39-07:00" source="HW">
               <Hotel id="34323"/>
               <RoomStay roomTypeID="STANDARD" ratePlanID="XHW" numberOfRooms="1">
                  <StayDate arrivalDate="2012-10-23" departureDate="2012-10-24"/>
                  <GuestCount adult="2" child="0"/>
                  <PerDayRates currency="AUD">
                     <PerDayRate stayDate="2012-10-23" baseRate="33.3"/>
                  </PerDayRates>
                  <TotalAmount amountAfterTaxes="37.0" amountOfTaxes="3.7" currency="AUD"/>
                  <PaymentCard cardHolderName="test booking" cardNumber="5555555555554444" cardCode="CA" seriesCode="925" expireDate="122017"/>
               </RoomStay>
               <Guest>
                  <PrimaryGuest givenName="Firstname firstname" middleName="m m m" lastName="lastname last name"/>
               </Guest>
            </Booking>
         </BookingRetrievalRS>
      </ns2:retrieveBookingResponse>
   </soap:Body>
</soap:Envelope>
```
