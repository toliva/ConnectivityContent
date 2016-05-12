# Sample Messages
This section contains sample messages illustrating how to interact with the Booking Notification API.
 
##	Sample messages for Reservation
### Sample request for reservation

#### Sample reservation request – Expedia Collect booking with EVC Card.

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22882581" RequestorId="Expedia.com" ResponderId="EQCTest" ExpirationDateTime="2016-05-09T23:09:00+00:00" Location="Body">
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
        <CommDescriptor DestinationId="ExpediaDC" SourceId="EQCTest" RetryIndicator="false">
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


#### Sample reservation request – HotelCollect booking, with children and extra charges

Request:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo ExpirationDateTime="2016-05-10T18:30:00+00:00" Location="Body" RequestId="22887676" RequestorId="Expedia.com" ResponderId="EQCSpecTest">
        <CommDescriptor DestinationId="EQCSpecTest" RetryIndicator="true" SourceId="ExpediaDC">
          <Authentication Password="Pa$$w0rd" Username="Expedia"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResNotifRQ" Version="2003A">
          <PayloadReference DistributorHotelId="1154286" SupplierHotelCode="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22887676" PrimaryLangID="en-us" ResStatus="Commit" Target="Production" TimeStamp="2016-05-10T09:00:00-07:00" Version="1.000">
      <POS>
        <Source>
          <RequestorID ID="A-Expedia" Type="18"/>
          <BookingChannel Primary="true" Type="2">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <HotelReservations>
        <HotelReservation CreateDateTime="2016-05-10T09:00:00-07:00" CreatorID="Expedia" RoomStayReservation="true">
          <UniqueID ID="13338705" Type="14"/>
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType IsRoom="true" RoomTypeCode="50292"/>
              </RoomTypes>
              <RatePlans>
                <RatePlan EffectiveDate="2016-05-23" ExpireDate="2016-05-24" RatePlanCode="113712A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-05-24" ExpireDate="2016-05-25" RatePlanCode="113712A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-05-25" ExpireDate="2016-05-26" RatePlanCode="113712A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate EffectiveDate="2016-05-23" ExpireDate="2016-05-24" NumberOfUnits="1" PromotionCode="Early Bird Summer 25pct" RatePlanCode="113712A" RoomTypeCode="50292">
                  <Rates>
                    <Rate EffectiveDate="2016-05-23" ExpireDate="2016-05-24" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="239.25" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="15.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-05-24" ExpireDate="2016-05-25" NumberOfUnits="1" PromotionCode="Early Bird Summer 25  3 nights a" RatePlanCode="113712A" RoomTypeCode="50292">
                  <Rates>
                    <Rate EffectiveDate="2016-05-24" ExpireDate="2016-05-25" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="239.25" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="15.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-05-25" ExpireDate="2016-05-26" NumberOfUnits="1" PromotionCode="Early Bird Summer 25  3 nights a" RatePlanCode="113712A" RoomTypeCode="50292">
                  <Rates>
                    <Rate EffectiveDate="2016-05-25" ExpireDate="2016-05-26" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="239.25" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="15.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <GuestCounts IsPerRoom="true">
                <GuestCount AgeQualifyingCode="10" Count="2"/>
                <GuestCount Age="1" AgeQualifyingCode="8" Count="1"/>
                <GuestCount Age="5" AgeQualifyingCode="8" Count="1"/>
                <GuestCount Age="17" AgeQualifyingCode="8" Count="1"/>
              </GuestCounts>
              <TimeSpan End="2016-05-26" Start="2016-05-23"/>
              <Guarantee>
                <GuaranteesAccepted>
                  <GuaranteeAccepted>
                    <PaymentCard CardCode="AX" CardNumber="371449635398431" CardType="1" ExpireDate="0217" SeriesCode="123">
                      <CardHolderName>Joe Doe</CardHolderName>
                    </PaymentCard>
                  </GuaranteeAccepted>
                </GuaranteesAccepted>
              </Guarantee>
              <Total AmountAfterTax="974.37" CurrencyCode="CAD">
                <Taxes Amount="151.62" CurrencyCode="CAD">
                  <Tax Amount="151.62" Code="27" CurrencyCode="CAD" Type="Exclusive"/>
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
                <SpecialRequest Language="en-us" RequestCode="2.1">
                  <Text Formatted="false" Language="en-us">Non-Smoking</Text>
                </SpecialRequest>
                <SpecialRequest Language="en-us" RequestCode="4">
                  <Text Formatted="false" Language="en-us">Need a large room for our large family.</Text>
                </SpecialRequest>
                <SpecialRequest Language="en-us" RequestCode="5">
                  <Text Formatted="true" Language="en-us">Hotel Collect Booking  Collect Payment From Guest</Text>
                </SpecialRequest>
              </SpecialRequests>
            </RoomStay>
          </RoomStays>
          <ResGuests>
            <ResGuest AgeQualifyingCode="10" ResGuestRPH="1">
              <Profiles>
                <ProfileInfo>
                  <Profile ProfileType="1">
                    <Customer>
                      <PersonName>
                        <GivenName>Joe</GivenName>
                        <Surname>Doe</Surname>
                      </PersonName>
                      <Telephone AreaCityCode="511" CountryAccessCode="1" PhoneNumber="1141115"/>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Date="2016-05-10T09:00:00-07:00" ResID_Source="Expedia" ResID_Type="8" ResID_Value="13338705"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRQ>
  </soap-env:Body>
</soap-env:Envelope>
```

#### Sample Reservation Modification Message
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="645288147" RequestorId="Expedia.com" ResponderId="EQCTest" ExpirationDateTime="2016-05-11T12:06:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCTest" RetryIndicator="false">
          <Authentication Username="Username" Password="Pa$$w0rd"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResModifyNotifRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="4707588" DistributorHotelId="4707588"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResModifyNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="645288147" PrimaryLangID="en-us" ResStatus="Commit" Target="Production" TimeStamp="2016-05-11T02:36:00-07:00" Version="1.000">
      <POS>
        <Source>
          <RequestorID ID="A-Hotels.com" Type="18"/>
          <BookingChannel Primary="true" Type="2">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <HotelResModifies>
        <HotelResModify CreateDateTime="2016-05-11T02:34:00-07:00" CreatorID="Expedia" RoomStayReservation="true">
          <UniqueID ID="668407977" Type="14"/>
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType IsRoom="true" RoomTypeCode="200375107"/>
              </RoomTypes>
              <RatePlans>
                <RatePlan EffectiveDate="2016-06-23" ExpireDate="2016-06-24" RatePlanCode="204702123A">
                  <Commission Percent="0.2200"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-06-24" ExpireDate="2016-06-25" RatePlanCode="204702123A">
                  <Commission Percent="0.2200"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-06-25" ExpireDate="2016-06-26" RatePlanCode="204702123A">
                  <Commission Percent="0.2200"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-06-26" ExpireDate="2016-06-27" RatePlanCode="204702123A">
                  <Commission Percent="0.2200"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-06-27" ExpireDate="2016-06-28" RatePlanCode="204702123A">
                  <Commission Percent="0.2200"/>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate EffectiveDate="2016-06-23" ExpireDate="2016-06-24" NumberOfUnits="1" PromotionCode="16.67  non ref" RatePlanCode="204702123A" RoomTypeCode="200375107">
                  <Rates>
                    <Rate EffectiveDate="2016-06-23" ExpireDate="2016-06-24" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="32.17" CurrencyCode="EUR"/>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="EUR" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-24" ExpireDate="2016-06-25" NumberOfUnits="1" PromotionCode="16.67  non ref" RatePlanCode="204702123A" RoomTypeCode="200375107">
                  <Rates>
                    <Rate EffectiveDate="2016-06-24" ExpireDate="2016-06-25" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="32.17" CurrencyCode="EUR"/>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="EUR" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-25" ExpireDate="2016-06-26" NumberOfUnits="1" PromotionCode="16.67  non ref" RatePlanCode="204702123A" RoomTypeCode="200375107">
                  <Rates>
                    <Rate EffectiveDate="2016-06-25" ExpireDate="2016-06-26" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="32.17" CurrencyCode="EUR"/>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="EUR" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-26" ExpireDate="2016-06-27" NumberOfUnits="1" PromotionCode="16.67  non ref" RatePlanCode="204702123A" RoomTypeCode="200375107">
                  <Rates>
                    <Rate EffectiveDate="2016-06-26" ExpireDate="2016-06-27" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="32.08" CurrencyCode="EUR"/>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="EUR" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-27" ExpireDate="2016-06-28" NumberOfUnits="1" PromotionCode="16.67  non ref" RatePlanCode="204702123A" RoomTypeCode="200375107">
                  <Rates>
                    <Rate EffectiveDate="2016-06-27" ExpireDate="2016-06-28" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="32.08" CurrencyCode="EUR"/>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="EUR" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <GuestCounts IsPerRoom="true">
                <GuestCount AgeQualifyingCode="10" Count="2"/>
              </GuestCounts>
              <TimeSpan End="2016-06-28" Start="2016-06-23"/>
              <Guarantee>
                <GuaranteesAccepted>
                  <GuaranteeAccepted>
                    <PaymentCard CardCode="VI" CardNumber="415000011112222" CardType="1" ExpireDate="0922" SeriesCode="123">
                      <CardHolderName>John Doe</CardHolderName>
                    </PaymentCard>
                  </GuaranteeAccepted>
                </GuaranteesAccepted>
              </Guarantee>
              <Total AmountAfterTax="160.67" CurrencyCode="EUR">
                <Taxes Amount="0.00" CurrencyCode="EUR">
                  <Tax Amount="0.00" Code="27" CurrencyCode="EUR" Type="Exclusive"/>
                </Taxes>
              </Total>
              <BasicPropertyInfo HotelCode="4707588"/>
              <ResGuestRPHs>
                <ResGuestRPH RPH="1"/>
              </ResGuestRPHs>
              <SpecialRequests>
                <SpecialRequest Language="en-us" RequestCode="1.13">
                  <Text Formatted="false" Language="en-us">1 double bed</Text>
                </SpecialRequest>
                <SpecialRequest Language="en-us" RequestCode="2.1">
                  <Text Formatted="false" Language="en-us">Non-Smoking</Text>
                </SpecialRequest>
                <SpecialRequest Language="en-us" RequestCode="4">
                  <Text Formatted="false" Language="en-us">Porfavor al recebir esa reserva si se puede dejar dos horas que el cliente ingresa dinero tras salir del trabajo.. Gracias</Text>
                </SpecialRequest>
                <SpecialRequest Language="en-us" RequestCode="5">
                  <Text Formatted="true" Language="en-us">Hotel Collect Booking  Collect Payment From Guest</Text>
                </SpecialRequest>
              </SpecialRequests>
            </RoomStay>
          </RoomStays>
          <ResGuests>
            <ResGuest AgeQualifyingCode="10" ResGuestRPH="1">
              <Profiles>
                <ProfileInfo>
                  <Profile ProfileType="1">
                    <Customer>
                      <PersonName>
                        <GivenName>John</GivenName>
                        <Surname>Doe</Surname>
                      </PersonName>
                      <Telephone AreaCityCode="0" CountryAccessCode="0" PhoneNumber="1112223334"/>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Date="2016-05-11T02:34:00-07:00" ResID_Source="Expedia" ResID_Type="8" ResID_Value="668407977"/>
              <HotelReservationID ResID_Date="2016-05-11T02:34:00-07:00" ResID_Source="EQCTest" ResID_Type="3" ResID_Value="2016051127977"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelResModify>
      </HotelResModifies>
    </OTA_HotelResModifyNotifRQ>
  </soap-env:Body>
</soap-env:Envelope>

```

#### Sample Cancel Request
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="645662136" RequestorId="Expedia.com" ResponderId="EQCTest" ExpirationDateTime="2016-05-12T04:25:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCTest" RetryIndicator="false">
          <Authentication Username="Username" Password="Pas$$w0rd"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_CancelRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="10654640" DistributorHotelId="10654640"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="645662136" TimeStamp="2016-05-11T18:55:00-07:00" Target="Production" Version="1.000" PrimaryLangID="en-us" CancelType="Commit">
      <POS>
        <Source>
          <RequestorID Type="18" ID="A-Hotels.com"/>
          <BookingChannel Type="2" Primary="true">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <UniqueID Type="14" ID="668772209">
        <CompanyName>Expedia</CompanyName>
      </UniqueID>
      <UniqueID Type="10" ID="2016051222209">
        <CompanyName>EQCTest</CompanyName>
      </UniqueID>
      <Verification>
        <PersonName>
          <GivenName>John</GivenName>
          <Surname>Doe</Surname>
        </PersonName>
        <Vendor Code="1" CodeContext="ChainCode"/>
        <Vendor Code="2" CodeContext="BrandCode"/>
        <Vendor Code="3" CodeContext="HotelCode">10654640</Vendor>
        <ReservationTimeSpan Start="2016-06-12" End="2016-06-14"/>
        <AssociatedQuantity Code="1" CodeContext="Number of rooms" Quantity="1"/>
        <AssociatedQuantity Code="2" CodeContext="Number of guests" Quantity="1"/>
      </Verification>
    </OTA_CancelRQ>
  </soap-env:Body>
</soap-env:Envelope>
```