# Sample Messages
This section contains sample messages illustrating how to interact with the Booking Notification API.
 
##	ExpediaCollect with Expedia VirtualCard

### New reservation

#### Request
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922909" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T21:51:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCSpecTest" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Password"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResNotifRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22922909" TimeStamp="2016-05-17T12:21:00-07:00" Target="Production" Version="1.000" PrimaryLangID="en-us" ResStatus="Commit">
      <POS>
        <Source>
          <RequestorID Type="18" ID="Expedia"/>
          <BookingChannel Type="2" Primary="true">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <HotelReservations>
        <HotelReservation RoomStayReservation="true" CreateDateTime="2016-05-17T12:21:00-07:00" CreatorID="Expedia">
          <UniqueID Type="14" ID="13357395"/>
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType RoomTypeCode="50292" IsRoom="true"/>
              </RoomTypes>
              <RatePlans>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-05-31" ExpireDate="2016-06-01"/>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-06-01" ExpireDate="2016-06-02"/>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-06-02" ExpireDate="2016-06-03"/>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-06-03" ExpireDate="2016-06-04"/>
              </RatePlans>
              <RoomRates>
                <RoomRate EffectiveDate="2016-05-31" ExpireDate="2016-06-01" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 30  4 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-05-31" ExpireDate="2016-06-01" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="178.64" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-01" ExpireDate="2016-06-02" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 30  4 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-06-01" ExpireDate="2016-06-02" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="178.64" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-02" ExpireDate="2016-06-03" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 30  4 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-06-02" ExpireDate="2016-06-03" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="178.64" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-03" ExpireDate="2016-06-04" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 30  4 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-06-03" ExpireDate="2016-06-04" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="187.60" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <GuestCounts IsPerRoom="true">
                <GuestCount AgeQualifyingCode="10" Count="2"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="4"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="9"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="17"/>
              </GuestCounts>
              <TimeSpan Start="2016-05-31" End="2016-06-04"/>
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
              <Total AmountAfterTax="951.61" CurrencyCode="CAD">
                <Taxes Amount="148.09" CurrencyCode="CAD">
                  <Tax Type="Exclusive" Code="27" Amount="148.09" CurrencyCode="CAD"/>
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
                        <GivenName>Etienne</GivenName>
                        <Surname>Beaulne-Dury</Surname>
                      </PersonName>
                      <Telephone CountryAccessCode="1" AreaCityCode="321" PhoneNumber="3331112"/>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Type="8" ResID_Value="13357395" ResID_Source="Expedia" ResID_Date="2016-05-17T12:21:00-07:00"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRQ>
  </soap-env:Body>
</soap-env:Envelope>
```

#### Response

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922909" RequestorId="Expedia.com" ResponderId="EQCSpecTest" Location="Body">
        <CommDescriptor SourceId="EQCSpecTest" DestinationId="ExpediaDC" RetryIndicator="false"/>
        <PayloadDescriptor Name="OTA_HotelResNotifRS" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRS xmlns="http://www.opentravel.org/OTA/2003/05" Version="1" ResResponseType="Committed" TimeStamp="2016-05-17T12:56:52.597-07:00" Target="Production" PrimaryLangID="en-us">
      <Success/>
      <HotelReservations>
        <HotelReservation>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Type="3" ResID_Value="ConfNumber123" ResID_Date="2016-05-17T12:56:52.597-07:00" ResID_Source="EQCSpecTest"/>
              <HotelReservationID ResID_Type="8" ResID_Value="13357395" ResID_Source="Expedia" ResID_Date="2016-05-17T12:57:00-07:00"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRS>
  </soap-env:Body>
</soap-env:Envelope>
```
### Modification Request (removing 1 night)

#### Request
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922936" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T21:57:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCSpecTest" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Password"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResModifyNotifRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResModifyNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22922936" TimeStamp="2016-05-17T12:27:00-07:00" Target="Production" Version="1.000" PrimaryLangID="en-us" ResStatus="Commit">
      <POS>
        <Source>
          <RequestorID Type="18" ID="Expedia"/>
          <BookingChannel Type="2" Primary="true">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <HotelResModifies>
        <HotelResModify RoomStayReservation="true" CreateDateTime="2016-05-17T12:27:00-07:00" CreatorID="Expedia">
          <UniqueID Type="14" ID="13357395"/>
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType RoomTypeCode="50292" IsRoom="true"/>
              </RoomTypes>
              <RatePlans>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-06-01" ExpireDate="2016-06-02"/>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-06-02" ExpireDate="2016-06-03"/>
                <RatePlan RatePlanCode="113712" EffectiveDate="2016-06-03" ExpireDate="2016-06-04"/>
              </RatePlans>
              <RoomRates>
                <RoomRate EffectiveDate="2016-06-01" ExpireDate="2016-06-02" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 25  3 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-06-01" ExpireDate="2016-06-02" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="191.40" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-02" ExpireDate="2016-06-03" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 25  3 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-06-02" ExpireDate="2016-06-03" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="191.40" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-03" ExpireDate="2016-06-04" RoomTypeCode="50292" NumberOfUnits="1" RatePlanCode="113712" PromotionCode="Early Bird Summer 25  3 nights a">
                  <Rates>
                    <Rate EffectiveDate="2016-06-03" ExpireDate="2016-06-04" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="201.00" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="5.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="CAD"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <GuestCounts IsPerRoom="true">
                <GuestCount AgeQualifyingCode="10" Count="2"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="4"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="9"/>
                <GuestCount AgeQualifyingCode="8" Count="1" Age="17"/>
              </GuestCounts>
              <TimeSpan Start="2016-06-01" End="2016-06-04"/>
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
              <Total AmountAfterTax="762.45" CurrencyCode="CAD">
                <Taxes Amount="118.65" CurrencyCode="CAD">
                  <Tax Type="Exclusive" Code="27" Amount="118.65" CurrencyCode="CAD"/>
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
                        <GivenName>Etienne</GivenName>
                        <Surname>Beaulne-Dury</Surname>
                      </PersonName>
                      <Telephone CountryAccessCode="1" AreaCityCode="321" PhoneNumber="3331112"/>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Type="8" ResID_Value="13357395" ResID_Source="Expedia" ResID_Date="2016-05-17T12:27:00-07:00"/>
              <HotelReservationID ResID_Type="3" ResID_Value="ConfNumber123" ResID_Source="EQCSpecTest" ResID_Date="2016-05-17T12:23:00-07:00"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelResModify>
      </HotelResModifies>
    </OTA_HotelResModifyNotifRQ>
  </soap-env:Body>
</soap-env:Envelope>
```

#### Response
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo Location="Body" RequestId="22922936" RequestorId="Expedia.com" ResponderId="EQCSpecTest">
        <CommDescriptor DestinationId="ExpediaDC" SourceId="EQCSpecTest" RetryIndicator="false"/>
        <PayloadDescriptor Name="OTA_HotelResModifyNotifRS" Version="2003A"/>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResModifyNotifRS xmlns="http://www.opentravel.org/OTA/2003/05" PrimaryLangID="en-us" ResResponseType="Modified" Target="Production" TimeStamp="2016-05-17T12:56:52.597-07:00" Version="1.000">
      <Success/>
      <HotelResModifies>
        <HotelResModify>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Date="2016-05-17T12:56:52.597-07:00" ResID_Source="Expedia" ResID_Type="8" ResID_Value="13357395"/>
              <HotelReservationID ResID_Date="2016-05-17T12:56:52.597-07:00" ResID_Source="EQCSpecTest" ResID_Type="3" ResID_Value="ModifyConf123"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelResModify>
      </HotelResModifies>
    </OTA_HotelResModifyNotifRS>
  </soap-env:Body>
</soap-env:Envelope>
```

### Cancelling the reservation

#### Request
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922954" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T22:02:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCSpecTest" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Password"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_CancelRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22922954" TimeStamp="2016-05-17T12:32:00-07:00" Target="Production" Version="1.000" PrimaryLangID="en-us" CancelType="Commit">
      <POS>
        <Source>
          <RequestorID Type="18" ID="Expedia"/>
          <BookingChannel Type="2" Primary="true">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <UniqueID Type="14" ID="13357395">
        <CompanyName>Expedia</CompanyName>
      </UniqueID>
      <UniqueID Type="10" ID="ModifyConf123">
        <CompanyName>EQCSpecTest</CompanyName>
      </UniqueID>
      <Verification>
        <PersonName>
          <GivenName>Etienne</GivenName>
          <Surname>Beaulne-Dury</Surname>
        </PersonName>
        <Vendor Code="1" CodeContext="ChainCode"/>
        <Vendor Code="2" CodeContext="BrandCode"/>
        <Vendor Code="3" CodeContext="HotelCode">1154286</Vendor>
        <ReservationTimeSpan Start="2016-06-01" End="2016-06-04"/>
        <AssociatedQuantity Code="1" CodeContext="Number of rooms" Quantity="1"/>
        <AssociatedQuantity Code="2" CodeContext="Number of guests" Quantity="5"/>
      </Verification>
    </OTA_CancelRQ>
  </soap-env:Body>
</soap-env:Envelope>
```

#### Response
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo Location="Body" RequestId="22922954" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T21:28:00+00:00">
        <CommDescriptor DestinationId="ExpediaDC" SourceId="EQCSpecTest" RetryIndicator="false"/>
        <PayloadDescriptor Name="OTA_CancelRS" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_CancelRS xmlns="http://www.opentravel.org/OTA/2003/05" Target="Production" TimeStamp="2016-05-17T02:57:35.247-04:00" Version="1.000" PrimaryLangID="en-us" Status="Cancelled">
      <Success/>
      <UniqueID ID="13357395" Type="14">
        <CompanyName>Expedia</CompanyName>
      </UniqueID>
      <UniqueID ID="TestModifyConf" Type="10">
        <CompanyName>EQCSpecTest</CompanyName>
      </UniqueID>
      <CancelInfoRS>
        <UniqueID ID="TestCancel2" Type="10">
          <CompanyName>EQCSpecTest</CompanyName>
        </UniqueID>
      </CancelInfoRS>
    </OTA_CancelRS>
  </soap-env:Body>
</soap-env:Envelope>
```

## HotelCollect booking, with children and extra charges

### New Reservation

#### Request

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922694" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T20:55:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCSpecTest" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Password"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResNotifRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="22922694" PrimaryLangID="en-us" ResStatus="Commit" Target="Production" TimeStamp="2016-05-17T11:25:00-07:00" Version="1.000">
      <POS>
        <Source>
          <RequestorID ID="A-Expedia" Type="18"/>
          <BookingChannel Primary="true" Type="2">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <HotelReservations>
        <HotelReservation CreateDateTime="2016-05-17T11:25:00-07:00" CreatorID="Expedia" RoomStayReservation="true">
          <UniqueID ID="13357309" Type="14"/>
          <RoomStays>
            <RoomStay>
              <RoomTypes>
                <RoomType IsRoom="true" RoomTypeCode="50287"/>
              </RoomTypes>
              <RatePlans>
                <RatePlan EffectiveDate="2016-05-29" ExpireDate="2016-05-30" RatePlanCode="113702A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-05-30" ExpireDate="2016-05-31" RatePlanCode="113702A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-05-31" ExpireDate="2016-06-01" RatePlanCode="113702A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-06-01" ExpireDate="2016-06-02" RatePlanCode="113702A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
                <RatePlan EffectiveDate="2016-06-02" ExpireDate="2016-06-03" RatePlanCode="113702A">
                  <Commission Percent="0.2000"/>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate EffectiveDate="2016-05-29" ExpireDate="2016-05-30" NumberOfUnits="1" PromotionCode="Early Bird Summer 30  4 nights a" RatePlanCode="113702A" RoomTypeCode="50287">
                  <Rates>
                    <Rate EffectiveDate="2016-05-29" ExpireDate="2016-05-30" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="139.30" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="8.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-05-30" ExpireDate="2016-05-31" NumberOfUnits="1" PromotionCode="Early Bird Summer 30  4 nights a" RatePlanCode="113702A" RoomTypeCode="50287">
                  <Rates>
                    <Rate EffectiveDate="2016-05-30" ExpireDate="2016-05-31" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="131.25" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="8.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-05-31" ExpireDate="2016-06-01" NumberOfUnits="1" PromotionCode="Early Bird Summer 30  4 nights a" RatePlanCode="113702A" RoomTypeCode="50287">
                  <Rates>
                    <Rate EffectiveDate="2016-05-31" ExpireDate="2016-06-01" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="140.00" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="8.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-01" ExpireDate="2016-06-02" NumberOfUnits="1" PromotionCode="Early Bird Summer 30  4 nights a" RatePlanCode="113702A" RoomTypeCode="50287">
                  <Rates>
                    <Rate EffectiveDate="2016-06-01" ExpireDate="2016-06-02" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="148.75" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="8.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                      </AdditionalGuestAmounts>
                      <Fees>
                        <Fee Amount="0.00" Code="1" CurrencyCode="CAD" TaxInclusive="false" Type="Exclusive"/>
                      </Fees>
                    </Rate>
                  </Rates>
                </RoomRate>
                <RoomRate EffectiveDate="2016-06-02" ExpireDate="2016-06-03" NumberOfUnits="1" PromotionCode="Early Bird Summer 30  4 nights a" RatePlanCode="113702A" RoomTypeCode="50287">
                  <Rates>
                    <Rate EffectiveDate="2016-06-02" ExpireDate="2016-06-03" RateTimeUnit="Day" UnitMultiplier="1">
                      <Base AmountBeforeTax="157.50" CurrencyCode="CAD"/>
                      <AdditionalGuestAmounts>
                        <AdditionalGuestAmount AgeQualifyingCode="8">
                          <Amount AmountBeforeTax="10.00" CurrencyCode="CAD"/>
                        </AdditionalGuestAmount>
                        <AdditionalGuestAmount AgeQualifyingCode="7">
                          <Amount AmountBeforeTax="8.00" CurrencyCode="CAD"/>
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
                <GuestCount Age="9" AgeQualifyingCode="8" Count="1"/>
                <GuestCount Age="17" AgeQualifyingCode="8" Count="1"/>
              </GuestCounts>
              <TimeSpan End="2016-06-03" Start="2016-05-29"/>
              <Guarantee>
                <GuaranteesAccepted>
                  <GuaranteeAccepted>
                    <PaymentCard CardCode="VI" CardNumber="4111111111111111" CardType="1" ExpireDate="0420" SeriesCode="123">
                      <CardHolderName>Etienne Tester</CardHolderName>
                    </PaymentCard>
                  </GuaranteeAccepted>
                </GuaranteesAccepted>
              </Guarantee>
              <Total AmountAfterTax="955.49" CurrencyCode="CAD">
                <Taxes Amount="148.69" CurrencyCode="CAD">
                  <Tax Amount="148.69" Code="27" CurrencyCode="CAD" Type="Exclusive"/>
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
                        <GivenName>Etienne</GivenName>
                        <Surname>Tester</Surname>
                      </PersonName>
                      <Telephone AreaCityCode="321" CountryAccessCode="1" PhoneNumber="3331111"/>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Date="2016-05-17T11:25:00-07:00" ResID_Source="Expedia" ResID_Type="8" ResID_Value="13357309"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRQ>
  </soap-env:Body>
</soap-env:Envelope>
```
#### Response
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922694" RequestorId="Expedia.com" ResponderId="EQCSpecTest" Location="Body">
        <CommDescriptor SourceId="EQCSpecTest" DestinationId="ExpediaDC" RetryIndicator="false"/>
        <PayloadDescriptor Name="OTA_HotelResNotifRS" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_HotelResNotifRS xmlns="http://www.opentravel.org/OTA/2003/05" Version="1" ResResponseType="Committed" EchoToken="22922694" TimeStamp="2016-05-17T12:56:52.597-07:00" Target="Production" PrimaryLangID="en-us">
      <Success/>
      <HotelReservations>
        <HotelReservation>
          <ResGlobalInfo>
            <HotelReservationIDs>
              <HotelReservationID ResID_Type="3" ResID_Value="TESTCONF" ResID_Date="2016-05-17T12:56:52.597-07:00" ResID_Source="EQCSpecTest"/>
              <HotelReservationID ResID_Type="8" ResID_Value="13357309" ResID_Source="Expedia" ResID_Date="2016-05-17T12:57:00-07:00"/>
            </HotelReservationIDs>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResNotifRS>
  </soap-env:Body>
</soap-env:Envelope>
```

### Cancelling the Reservation

#### Request

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="22922850" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T21:33:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCSpecTest" RetryIndicator="false">
          <Authentication Username="Expedia" Password="Password"/>
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_CancelRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286" DistributorHotelId="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05" CancelType="Commit" EchoToken="22922850" PrimaryLangID="en-us" Target="Production" TimeStamp="2016-05-17T12:03:00-07:00" Version="1.000">
      <POS>
        <Source>
          <RequestorID ID="A-Expedia" Type="18"/>
          <BookingChannel Primary="true" Type="2">
            <CompanyName>Expedia</CompanyName>
          </BookingChannel>
        </Source>
      </POS>
      <UniqueID ID="13357309" Type="14">
        <CompanyName>Expedia</CompanyName>
      </UniqueID>
      <UniqueID ID="TESTCONF" Type="10">
        <CompanyName>EQCSpecTest</CompanyName>
      </UniqueID>
      <Verification>
        <PersonName>
          <GivenName>Etienne</GivenName>
          <Surname>Tester</Surname>
        </PersonName>
        <Vendor Code="1" CodeContext="ChainCode"/>
        <Vendor Code="2" CodeContext="BrandCode"/>
        <Vendor Code="3" CodeContext="HotelCode">1154286</Vendor>
        <ReservationTimeSpan End="2016-06-03" Start="2016-05-29"/>
        <AssociatedQuantity Code="1" CodeContext="Number of rooms" Quantity="1"/>
        <AssociatedQuantity Code="2" CodeContext="Number of guests" Quantity="4"/>
      </Verification>
    </OTA_CancelRQ>
  </soap-env:Body>
</soap-env:Envelope>
```

#### Response

```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo Location="Body" RequestId="22922850" RequestorId="Expedia.com" ResponderId="EQCSpecTest" ExpirationDateTime="2016-05-17T21:28:00+00:00">
        <CommDescriptor DestinationId="ExpediaDC" SourceId="EQCSpecTest" RetryIndicator="false"/>
        <PayloadDescriptor Name="OTA_CancelRS" Version="2003A">
          <PayloadReference SupplierHotelCode="1154286"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
    <OTA_CancelRS xmlns="http://www.opentravel.org/OTA/2003/05" Target="Production" TimeStamp="2016-05-17T02:57:35-04:00+00:00" Version="1.000" status="Cancelled">
      <Success/>
      <UniqueID ID="13357309" Type="14">
        <CompanyName>Expedia</CompanyName>
      </UniqueID>
      <UniqueID ID="TESTCONF" Type="10">
        <CompanyName>EQCSpecTest</CompanyName>
      </UniqueID>
      <CancelInfoRS>
        <UniqueID ID="TESTCANCEL" Type="10">
          <CompanyName>EQCSpecTest</CompanyName>
        </UniqueID>
      </CancelInfoRS>
    </OTA_CancelRS>
  </soap-env:Body>
</soap-env:Envelope>
```

##	Sample Error Response

Below is a sample error response to refer to for the negative scenarios :

```
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
<soap-env:Header>
          <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
               <PayloadInfo RequestId="33196136" RequestorId="Expedia.com" ResponderId="PartnerID" Location="Body">
                    <CommDescriptor SourceId="PartnerID" DestinationId="ExpediaDC" RetryIndicator="false">
                         <Authentication Username="user" Password="pass"/>
                    </CommDescriptor>
                    <PayloadDescriptor Name="OTA_HotelResNotifRS" >
                    <PayloadReference SupplierChainCode="CC" SupplierBrandCode="BC" SupplierHotelCode="OH167" DistributorHotelId="18827"/> </PayloadDescriptor>
               </PayloadInfo>
          </Interface>
</soap-env:Header>  <soap-env:Body>
<OTA_HotelResNotifRS EchoToken="33196136" TimeStamp="2007-06-29T15:57:48-07:00" Target="Production" Version="2.000" PrimaryLangID="en-us" ResResponseType="Ignored" xmlns="http://www.opentravel.org/OTA/2003/05">
               <Errors>
   <Error Language="en-us" Type="3" ShortText="3203" Code="450">The Room Type Code is missing or invalid</Error>    </Errors>
          </OTA_HotelResNotifRS>
</soap-env:Body>
</soap-env:Envelope>```
