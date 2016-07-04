# Quick Start

The Booking Retrieval and Booking Confirmation APIs are two simple interfaces that allow Expedia partners to electronically retrieve bookings made on any Expedia Inc. point of sale, and provide a confirmation number. 

----
## Authentication

To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for BR. An element called “Authentication” is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

```xml
<Authentication username="EQCtest12933870" password="kh92nd29"/>
```

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property.

Upon submitting an EQC enrollment form to the EQCHelp team, the EQC credentials necessary for authentication will be provided. For partners that never worked with Expedia before, and don't know how to get started, please refer to the [Getting Connected section of the Avail and Rates API](/apis/availability-rates-restrictions-booking-and-reservations/expedia-quickconnect-avail-rates-api/guides.html#gettingconnected)

----
## Booking Retrieval Request and Response

Expedia provides a program interface for EQC partners to retrieve bookings made on any Expedia Inc. Points of sale. EQC partners can retrieve pending bookings (reservations, modifications, or cancellations) as frequently as they want.
If an EQC partner does not retrieve the booking information electronically, Expedia sends the information to the hotel by fax or email.

Below is a pair of sample request/response. The Request can be attempted against the production endpoint of EQC BR API, however it will likely not return any bookings since our test hotels rarely have bookings awaiting retrieval.
**RQ**
```xml
<BookingRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
    <Authentication username="EQCtest12933870" password="kh92nd29"/>
</BookingRetrievalRQ>
```

**RS**
This is what a RS could look like, should this account have hotels with pending bookings.
```xml
<BookingRetrievalRS xmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
    <Bookings>
        <Booking id="619" type="Book" createDateTime="2013-12-12T00:01:00Z" source="A-Hotels.com" status="pending">
            <Hotel id="123456"/>
            <RoomStay roomTypeID="200263232" ratePlanID="201547528A">
                <StayDate arrival="2014-01-01" departure="2014-01-02"/>
                <GuestCount adult="2"/>
                <PerDayRates currency="USD">
                    <PerDayRate stayDate="2014-01-01" baseRate="109.99" promoName="ASAP DEAL 50pct"/>
                </PerDayRates>
                <Total amountAfterTaxes="124.29" amountOfTaxes="14.30" currency="USD"/>
                <PaymentCard cardCode="VI" cardNumber="***4327" expireDate="1216" seriesCode="123">
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
        <Booking id="301" type="Book" createDateTime="2013-12-12T12:03:00Z" source="Expedia" status="pending">
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
                <PaymentCard cardCode="MC" cardNumber="***1234" expireDate="1116">
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
            <SpecialRequest code="4">NON SMOKING ROOM   A ROOM IN THE MOST QUIET AREA PLEASE</SpecialRequest>
        </Booking>
        <Booking id="388079587" type="Modify" createDateTime="2013-12-12T12:15:00Z" source="Expedia Affiliate Network" status="pending" confirmNumber="EXP9911232">
            <Hotel id="998877"/>
            <RoomStay roomTypeID="200191914" ratePlanID="201096355">
                <StayDate arrival="2013-12-17" departure="2013-12-20"/>
                <GuestCount adult="1"/>
                <PerDayRates currency="INR">
                    <PerDayRate stayDate="2013-12-17" baseRate="3543.75" promoName="Stay for 3 nights and get 10  di"/>
                    <PerDayRate stayDate="2013-12-18" baseRate="3543.75" promoName="Stay for 3 nights and get 10  di"/>
                    <PerDayRate stayDate="2013-12-19" baseRate="3543.75" promoName="Stay for 3 nights and get 10  di"/>
                </PerDayRates>
                <Total amountAfterTaxes="12635.43" amountOfTaxes="2004.18" currency="INR"/>
            </RoomStay>
            <PrimaryGuest>
                <Name givenName="Steve" surname="Tremblay"/>
            </PrimaryGuest>
            <SpecialRequest code="4">gst has requested for an early check in at around 9.30--10 a.m</SpecialRequest>
            <SpecialRequest code="2.1">Non-Smoking</SpecialRequest>
            <SpecialRequest code="1.14">One King Bed</SpecialRequest>
            <SpecialRequest code="6">10% off Spa Package</SpecialRequest>
        </Booking>
    </Bookings>
</BookingRetrievalRS>
```
---
## Booking Confirmation Request and Response

The Booking Confirmation (BC) API is the mechanism EQC partners are required to implement to provide Expedia with the hotel’s confirmation number for all bookings retrieved via the BR interface. Unconfirmed bookings will revert to fax or email once the booking expiration time is reached. 

Below is a pair of sample request/response messages for booking confirmation. 

**RQ**
```xml
<BookingConfirmRQ xmlns="http://www.expediaconnect.com/EQC/BC/2007/09">
	<Authentication username="testuser" password="testpass"/>
	<Hotel id="734658"/>
	<BookingConfirmNumbers>
		<BookingConfirmNumber bookingID="252743459" bookingType="Book" 
             confirmNumber="E2340589B" confirmTime="2013-12-30T23:45:00Z"/>
	</BookingConfirmNumbers>
</BookingConfirmRQ>
``` 

**RS**
```xml
<BookingConfirmRS xmlns="http://www.expediaconnect.com/EQC/BC/2007/08">
	<Success/>
</BookingConfirmRS> 
``` 
