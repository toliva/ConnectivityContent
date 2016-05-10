# Sample Messages
This section contains sample messages illustrating how to interact with the Booking Notification API.
 
##	Sample messages for Reservation
#### Sample request for reservation

Sample reservation request – Expedia Collect booking with EVC Card.

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22882581" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-09T23:09:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCTest" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Pa$$w0rd"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResNotifRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22882581" TimeStamp="2016-05-09T13:39:00-07:00" Target="Production" Version="1.000" PrimaryLangID="en-us" ResStatus="Commit">
      <POS>
        <Source>
          <RequestorID Type="18" ID="Expedia"/>
          <BookingChannel Type="2" Primary="true">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <HotelReservations>
        <HotelReservation RoomStayReservation="true" CreateDateTime="2016-05-09T13:39:00-07:00" CreatorID="Expedia">
          <UniqueID Type="14" ID="13335517"/>
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType RoomTypeCode="50292" IsRoom="true"/>
              </RoomTypes>
              <RatePlans>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-09-01" ExpireDate="2016-09-02"/>
              </RatePlans>
              <RoomRates>
                <RoomRate EffectiveDate="2016-09-01" ExpireDate="2016-09-02" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712">
                  <Rates>
                    <Rate EffectiveDate="2016-09-01" ExpireDate="2016-09-02" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="268.00" CurrencyCode="CAD"/>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <GuestCounts IsPerRoom="true">
                <GuestCount AgeQualifyingCode="10" Count="2"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="2"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="3"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="4"/>
              </GuestCounts>
              <TimeSpan Start="2016-09-01" End="2016-09-02"/>
              <Guarantee>
                <GuaranteesAccepted>
                  <GuaranteeAccepted>
                    <PaymentCard CardType="1" CardCode="MC" CardNumber="5191111111111111" ExpireDate="0619">
                      <CardHolderName>Expedia VirtualCard</CardHolderName>
                      <Address FormattedInd="false">
                        <AddressLine>333 108th Avenue NE</AddressLine>
                        <CityName>Bellevue</CityName>
                        <PostalCode>98004</PostalCode>
                        <StateProv StateCode="WA"/>
                        <CountryName Code="US"/>
                      </Address>
                    </PaymentCard>
                  </GuaranteeAccepted>
                </GuaranteesAccepted>
              </Guarantee>
              <Total AmountAfterTax="317.39" CurrencyCode="CAD">
                <Taxes Amount="49.39" CurrencyCode="CAD">
                  <Tax Type="Exclusive" Code="27" Amount="49.39" CurrencyCode="CAD"/>
                </Taxes>
              </Total>
              <BasicPropertyInfo HotelCode="1154286"/>
              <ResGuestRPHs>
                <ResGuestRPH RPH="1"/>
              </ResGuestRPHs>
              <SpecialRequests>
                <SpecialRequest Language="en-us" RequestCode="1.14">
                  <Text Formatted="false" Language="en-us">1 king bed</Text>
                </SpecialRequest>
                <SpecialRequest Language="en-us" RequestCode="5">
                  <Text Formatted="true" Language="en-us">Bill only nghts bkd by Expedia to cc# @ ck-in  gst pays incid</Text>
                </SpecialRequest>
              </SpecialRequests>
            </RoomStay>
          </RoomStays>
          <ResGuests>
            <ResGuest ResGuestRPH="1" AgeQualifyingCode="10">
              <Profiles>
                <ProfileInfo>
                  <Profile ProfileType="1">
                    <Customer>
                      <PersonName>
                        <GivenName>John</GivenName>
                        <Surname>Doe</Surname>
                      </PersonName>
                      <Telephone CountryAccessCode="1" AreaCityCode="132" PhoneNumber="13213213"/>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Type="8" ResID_Value="13335517" ResID_Source="Expedia" ResID_Date="2016-05-09T13:39:00-07:00"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRQ>
  </soap-env:Body>
</soap-env:Envelope>

```

Response:

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo Location="Body" RequestId="22882581" RequestorId="Expedia.com" ResponderId="EQCTest">
        <CommDescriptor DestinationId="ExpediaDC" SourceId="EQCeRevMax" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Pa$$w0rd"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResNotifRS" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22882581" PrimaryLangID="en-us" ResResponseType="Committed" Target="Production" TimeStamp="2016-05-09T10:33:44-04:00+00:00" Version="1.000">
      <Success/>
      <HotelReservations>
        <HotelReservation>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Date="2016-05-09T10:33:44-04:00+00:00" ResID_Source="Expedia" ResID_Type="8" ResID_Value="13335517"/>
              <HotelReservationID ResID_Date="2016-05-09T10:33:44-04:00+00:00" ResID_Source="EQCTest" ResID_Type="3" ResID_Value="26803256"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRS>
  </soap-env:Body>
</soap-env:Envelope>
```
