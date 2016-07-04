# Examples

## Booking Retrieval API – Examples

### Booking Retrieval Request: pending bookings

The following is a sample booking retrieval request for all pending bookings for a user (with one or more hotels). If no hotel ID is specified, all pending bookings for all hotels associated to this user will be returned.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample booking retrieval request where partner requests all pending bookings for all his properties-->
<BookingRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
	<Authentication username="testuser" password="testpass"/>
</BookingRetrievalRQ>
```

### Booking Retrieval Request: retrieving a specific booking ID

The following is a sample booking retrieval request for one booking that was already sent to the hotel electronically through Expedia QuickConnect and for which the hotel wants to receive the latest details.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample booking retrieval request where partner requests one booking he was already aware of for one of his hotels-->
<BookingRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
	<Authentication username="testuser" password="testpass"/>
	<Hotel id="3546"/>
	<ParamSet>
		<Booking id="849123"/>
	</ParamSet>
</BookingRetrievalRQ>
```

Note that if a specific booking expired and reverted to alternate delivery method (fax or email), it will not be possible to retrieve it, even when using the booking ID.

### Booking Retrieval Request: all the bookings of the past 5 days

The following is a sample booking retrieval request where the hotel requests all the bookings that were generated in the past 5 days, including already retrieved and pending bookings. 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample booking retrieval request where partner requests all the bookings that were generated in the past 5 days (note that bookings that expired and reverted to fax won't be returned by this call)-->
<BookingRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
	<Authentication username="testuser" password="testpass"/>
	<ParamSet>
		<NbDaysInPast>5</NbDaysInPast>
	</ParamSet>
</BookingRetrievalRQ>
```

Notes:
- Bookings that reverted to fax will not be returned by this call.
- A hotel parameter (e.g. <Hotel id="3546"/>) may also be added in this request.
- Expedia VirtualCard payment information is not included in the response after 48 hours of the initial booking or modification (the information can only be retrieved afterward by contacting Expedia). See section “14 Appendix D – Learn more about Expedia VirtualCard” for more information.

### Booking Retrieval Response: 2 new bookings returned

The following is a sample booking retrieval response for a pending booking request. 2 new bookings are returned: (1) a booking for a family of 4 for a week, and (2) another booking for 1 person for 2 days.

```xml
<BookingRetrievalRS xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
  <Bookings>
    <Booking id="2543453245546" type="Book" createDateTime="2009-10-25T09:30:47Z" source="Expedia" status="pending">
      <Hotel id="3546"/>
      <RoomStay roomTypeID="965645" ratePlanID="956589">
        <StayDate arrival="2009-12-24" departure="2009-12-31"/>
        <GuestCount adult="2" child="2">
          <Child age="1"/>
          <Child age="17"/>
        </GuestCount>
        <PerDayRates currency="EUR">
          <PerDayRate stayDate="2009-12-24" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
          <PerDayRate stayDate="2009-12-25" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
          <PerDayRate stayDate="2009-12-26" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
          <PerDayRate stayDate="2009-12-27" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
          <PerDayRate stayDate="2009-12-28" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
          <PerDayRate stayDate="2009-12-29" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
          <PerDayRate stayDate="2009-12-30" baseRate="155.00" extraPersonFees="25.00" hotelServiceFees="10.00" promoName="1 week 10pct off"/>
        </PerDayRates>
        <Total amountAfterTaxes="1529.50" amountOfTaxes="199.50" currency="EUR"/>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="John" middleName="F." surname="Smith"/>
        <Phone countryCode="1" cityAreaCode="514" number="5558975" extension="3233"/>
      </PrimaryGuest>
      <RewardProgram code="AJ" number="49876"/>
      <SpecialRequest code="1.23">2 Queen</SpecialRequest>
      <SpecialRequest code="2.1">Non-smoking</SpecialRequest>
      <SpecialRequest code="4">Late check-in (after 6pm)</SpecialRequest>
       <SpecialRequest code="6">10% off Spa Package</SpecialRequest>
    </Booking>
    <Booking id="35645" type="Book" createDateTime="2006-10-25T10:19:47Z" source="Hotels.com" status="pending">
      <Hotel id="3546"/>
      <RoomStay roomTypeID="965640" ratePlanID="925569">
        <StayDate arrival="2009-10-13" departure="2009-10-15"/>
        <GuestCount adult="1"/>
        <PerDayRates currency="EUR">
          <PerDayRate stayDate="2009-10-13" baseRate="125.00" hotelServiceFees="10.00"/>
          <PerDayRate stayDate="2009-10-14" baseRate="125.00" hotelServiceFees="10.00"/>
        </PerDayRates>
        <Total amountAfterTaxes="285.00" amountOfTaxes="15.00" currency="EUR"/>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="Bob" surname="Doe"/>
        <Phone countryCode="1" cityAreaCode="450" number="5526596"/>
      </PrimaryGuest>
      <RewardProgram code="AJ" number="25613"/>
      <SpecialRequest code="1.14">1 king</SpecialRequest>
      <SpecialRequest code="2.2">Smoking</SpecialRequest>
    </Booking>
  </Bookings>
</BookingRetrievalRS>
```

### Booking Retrieval Response: 1 modified booking returned

The following is a sample booking retrieval response for a pending booking request. It returns one modified booking.

```xml
<BookingRetrievalRS xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
  <Bookings>
    <Booking id="3465456" type="Modify" createDateTime="2006-10-25T09:30:47Z" source="Expedia" status="pending" confirmNumber="EXP4433">
      <Hotel id="3546"/>
      <RoomStay roomTypeID="965645" ratePlanID="956589">
        <StayDate arrival="2007-02-24" departure="2007-02-28"/>
        <GuestCount adult="2"/>
        <PerDayRates currency="EUR">
          <PerDayRate stayDate="2007-02-24" baseRate="115.00"/>
          <PerDayRate stayDate="2007-02-25" baseRate="115.00"/>
          <PerDayRate stayDate="2007-02-26" baseRate="115.00"/>
          <PerDayRate stayDate="2007-02-27" baseRate="115.00"/>
        </PerDayRates>
        <Total amountAfterTaxes="500.00" amountOfTaxes="40.00" currency="EUR"/>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="Jerry" middleName="W." surname="Lay"/>
        <Phone countryCode="1" cityAreaCode="514" number="5558512"/>
      </PrimaryGuest>
      <RewardProgram code="QI" number="2456"/>
      <SpecialRequest code="1.14">1 King</SpecialRequest>
    </Booking>
  </Bookings>
</BookingRetrievalRS>
```

### Booking Retrieval Response: 2 cancelled bookings returned

The following is a sample booking retrieval response for a pending booking request. It returns two cancelled bookings.

```xml
<BookingRetrievalRS xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
  <Bookings>
    <Booking id="5634564" type="Cancel" createDateTime="2009-10-26T11:30:47Z" source="Expedia" status="pending" confirmNumber="EXP1234">
      <Hotel id="3546"/>
      <RoomStay roomTypeID="0" ratePlanID="0">
        <StayDate arrival="2010-02-24" departure="2018-02-28"/>
        <GuestCount adult="2" child="3">
          <Child age="3"/>
          <Child age="6"/>
          <Child age="17"/>
        </GuestCount>
        <PerDayRates>
          <PerDayRate stayDate="2010-02-24" baseRate="0.00"/>
          <PerDayRate stayDate="2010-02-25" baseRate="0.00"/>
          <PerDayRate stayDate="2010-02-26" baseRate="0.00"/>
          <PerDayRate stayDate="2010-02-27" baseRate="0.00"/>
        </PerDayRates>
        <Total amountAfterTaxes="0.00" amountOfTaxes="0.00"/>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="Jerry" middleName="W." surname="Lay"/>
      </PrimaryGuest>
    </Booking>
    <Booking id="5465498" type="Cancel" createDateTime="2006-10-26T11:44:47Z" source="Expedia" status="pending" confirmNumber="EXP4321">
      <Hotel id="3546"/>
      <RoomStay roomTypeID="0" ratePlanID="0">
        <StayDate arrival="2010-01-15" departure="2010-01-19"/>
        <GuestCount adult="2" child="2">
          <Child age="3"/>
          <Child age="11"/>
        </GuestCount>
        <PerDayRates>
          <PerDayRate stayDate="2010-01-15" baseRate="0.00"/>
          <PerDayRate stayDate="2010-01-16" baseRate="0.00"/>
          <PerDayRate stayDate="2010-01-17" baseRate="0.00"/>
          <PerDayRate stayDate="2010-01-18" baseRate="0.00"/>
        </PerDayRates>
        <Total amountAfterTaxes="0.00" amountOfTaxes="0.00"/>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="John" surname="Smith"/>
      </PrimaryGuest>
    </Booking>
  </Bookings>
</BookingRetrievalRS>
```

### Booking Retrieval Response: new booking with Expedia VirtualCard details

The following is a sample booking retrieval response for a pending booking request. 1 new booking is returned for a family of 4 for a three-day stay, payable to the hotel via Expedia VirtualCard.

```xml
<BookingRetrievalRS xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
  <Bookings>
    <Booking id="477346" type="Book" createDateTime="2006-10-25T09:30:47Z" source="Expedia" status="pending">
      <Hotel id="3546"/>
      <RoomStay roomTypeID="965645" ratePlanID="956589">
        <StayDate arrival="2009-12-27" departure="2009-12-30"/>
        <GuestCount adult="2" child="2">
          <Child age="1"/>
          <Child age="17"/>
        </GuestCount>
        <PerDayRates currency="EUR">
          <PerDayRate stayDate="2009-12-27" baseRate="155.00" extraPersonFees="25.00"/>
          <PerDayRate stayDate="2009-12-28" baseRate="155.00" extraPersonFees="25.00"/>
          <PerDayRate stayDate="2009-12-29" baseRate="155.00" extraPersonFees="25.00"/>
        </PerDayRates>
        <Total amountAfterTaxes="829.50" amountOfTaxes="199.50" currency="EUR"/>
        <PaymentCard cardCode="VI" cardNumber="****23456" expireDate="1206">
          <CardHolder name="ExpediaVirtualCard" address="333 108th Avenue NE" city="Bellevue" stateProv="WA" country="US" postalCode="98004"/>
        </PaymentCard>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="John" middleName="F." surname="Smith"/>
        <Phone countryCode="1" cityAreaCode="514" number="5558975" extension="3233"/>
      </PrimaryGuest>
      <SpecialRequest code="5">Bill only nghts bkd by Expedia to cc# @ ck-in  gst pays incid </SpecialRequest>
      <SpecialRequest code="1.23">2 Queen</SpecialRequest>
      <SpecialRequest code="2.1">Non-smoking</SpecialRequest>
    </Booking>
  </Bookings>
</BookingRetrievalRS>
```

### Booking Retrieval Request and Response for pending and already retrieved bookings

The following is a sample RQ/RS pair showing a request to retrieve bookings that were previously retrieved but not confirmed yet, as well as pending bookings. The response contains a booking that was already retrieved along with a booking that was in pending state (never retrieved yet) at the time of the BR request.

```xml
<BookingRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
  <Authentication username="testuser" password="testpass"/>
  <Hotel id="1234"/>
  <ParamSet>
    <Status value="pending"/>
    <Status value="retrieved"/>
  </ParamSet>
</BookingRetrievalRQ>
```

```xml
<BookingRetrievalRS xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
  <Bookings>
    <Booking id="6619" type="Book" createDateTime="2013-12-12T00:01:00Z" source="A-Hotels.com" status="pending">
      <Hotel id="123456"/>
      <RoomStay roomTypeID="200263232" ratePlanID="201547528A">
        <StayDate arrival="2014-01-01" departure="2014-01-02"/>
        <GuestCount adult="2"/>
        <PerDayRates currency="USD">
          <PerDayRate stayDate="2014-01-01" baseRate="109.99" promoName="ASAP DEAL 50pct"/>
        </PerDayRates>
        <Total amountAfterTaxes="124.29" amountOfTaxes="14.30" currency="USD"/>
        <PaymentCard cardCode="VI" cardNumber="****4327" expireDate="1216" seriesCode="123">
          <CardHolder name="John Smith" address="500 Park Avenue" city="New York" stateProv="NY" country="US" postalCode="10022"/>
        </PaymentCard>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="John" surname="Smith"/>
        <Phone countryCode="1" cityAreaCode="425" number="5555555"/>
      </PrimaryGuest>
      <SpecialRequest code="1.14">One King Bed</SpecialRequest>
      <SpecialRequest code="2.1">Non-Smoking</SpecialRequest>
      <SpecialRequest code="3">Multi-room booking. Primary traveler:Smith, John. 1 of 2 rooms.</SpecialRequest>
      <SpecialRequest code="4">Adjoining rooms please</SpecialRequest>
      <SpecialRequest code="5">Hotel Collect Booking  Collect Payment From Guest</SpecialRequest>
    </Booking>
    <Booking id="9301" type="Book" createDateTime="2013-12-12T12:03:00Z" source="Expedia" status="retrieved">
      <Hotel id="654321"/>
      <RoomStay roomTypeID="200225905" ratePlanID="201297424">
        <StayDate arrival="2014-01-26" departure="2014-02-02"/>
        <GuestCount adult="2"/>
        <PerDayRates currency="ZAR">
          <PerDayRate stayDate="2014-01-26" baseRate="756.58"/>
          <PerDayRate stayDate="2014-01-27" baseRate="756.58"/>
          <PerDayRate stayDate="2014-01-28" baseRate="756.58"/>
          <PerDayRate stayDate="2014-01-29" baseRate="756.58"/>
          <PerDayRate stayDate="2014-01-30" baseRate="756.58"/>
          <PerDayRate stayDate="2014-01-31" baseRate="756.58"/>
          <PerDayRate stayDate="2014-02-01" baseRate="1085.53"/>
        </PerDayRates>
        <Total amountAfterTaxes="6412.50" amountOfTaxes="787.49" currency="ZAR"/>
        <PaymentCard cardCode="MC" cardNumber="****41234" expireDate="1116">
          <CardHolder name="Expedia VirtualCard" address="333 108th Avenue NE" city="Bellevue" stateProv="WA" country="US" postalCode="98004"/>
        </PaymentCard>
      </RoomStay>
      <PrimaryGuest>
        <Name givenName="Jeff" surname="Pirelli"/>
        <Phone countryCode="44" cityAreaCode="071" number="0123876"/>
      </PrimaryGuest>
      <SpecialRequest code="2.1">Non-Smoking</SpecialRequest>
      <SpecialRequest code="1.13">One Double Bed</SpecialRequest>
      <SpecialRequest code="5">Bill only nghts bkd by Expedia to cc# @ ck-in  gst pays incid</SpecialRequest>
    </Booking>
  </Bookings>
</BookingRetrievalRS>
```

## Booking Confirmation API – Examples 

### Booking Confirmation Request: New/modified/cancelled booking confirmation

The following is a sample booking confirmation request for one new booking, one modified booking and one cancelled booking at a hotel.

```xml
<BookingConfirmRQ xmlns="http://www.expediaconnect.com/EQC/BC/2007/09">
  <Authentication username="testuser" password="testpass"/>
  <Hotel id="3546"/>
  <BookingConfirmNumbers>
    <BookingConfirmNumber bookingID="848483849123" bookingType="Book" confirmNumber="8675309" confirmTime="2008-04-25T09:30:47Z"/>
    <BookingConfirmNumber bookingID="848485436753" bookingType="Modify" confirmNumber="8675310" confirmTime="2008-04-25T09:30:48Z"/>
    <BookingConfirmNumber bookingID="848485410078" bookingType="Cancel" confirmNumber="8675311" confirmTime="2008-04-25T09:30:50Z"/>
  </BookingConfirmNumbers>
</BookingConfirmRQ>
```


### Booking Confirmation Response: Successful update with warning

The following is a sample booking confirmation response for a new booking. The message states that it was received successfully by EQC, but a warning states that the update could not be made because of an inconsistency in the content of the request.

```xml
<BookingConfirmRS xmlns="http://www.expediaconnect.com/EQC/BC/2007/08">
	<Success>
		<Warning code="10081" bookingID="9123" bookingType="Book” 
          confirmNumber="7605309">
			Update refused. Hotel ID and Booking ID mismatch: the Hotel ID specified in the BC RQ doesn't match up
                 with the hotel to which this booking belongs.				
		</Warning>
	</Success>
</BookingConfirmRS>
```