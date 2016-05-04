# Sample Messages
This section contains sample messages illustrating how to interact with the Booking Notification API.
 
##	Sample messages for Reservation
#### Sample request for reservation

This example is for a new reservation of 3 nights with 2 adults and 2 children in the room. The room is charged base rate and extra person fees. The base occupancy is one, so the 2nd adult is charged the extra person fees, and the children are free of charge. Note that the rate information is always sent on a per day basis whether the rate is same or different from one day to another.
Sample reservation request – Expedia Collect booking

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
	<soap-env:Header>
		<Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
			<PayloadInfo RequestId="33154340" RequestorId="Expedia.com" ResponderId="PartnerID" ExpirationDateTime="2007-06-30T02:54:00+00:00" Location="Body">
				<CommDescriptor SourceId="ExpediaDC" DestinationId="PartnerID" RetryIndicator="false">
					<Authentication Username="Expedia" Password="pass"/>
				</CommDescriptor>
				<PayloadDescriptor Name="OTA_HotelResNotifRQ" >
					<PayloadReference SupplierChainCode="CH" SupplierBrandCode="BR" SupplierHotelCode="0468" DistributorHotelId="12710"/>
				</PayloadDescriptor>
			</PayloadInfo>
		</Interface>
	</soap-env:Header>
	<soap-env:Body>
		<OTA_HotelResNotifRQ EchoToken="33154340" TimeStamp="2007-06-29T16:24:00-08:00" Target="Production" Version="2.000" PrimaryLangID="en-us" ResStatus="Commit" xmlns="http://www.opentravel.org/OTA/2003/05">
			<POS>
				<Source>
					<RequestorID Type="18" ID="Expedia"/>
					<BookingChannel Type="2" Primary="true">
						<CompanyName>Expedia</CompanyName>
					</BookingChannel>
				</Source>
			</POS>
			<HotelReservations>
				<HotelReservation RoomStayReservation="true" CreateDateTime="2007-06-29T16:24:00-08:00" CreatorID="Expedia">
					<UniqueID Type="14" ID="105230690"/>
					<RoomStays>
						<RoomStay>
							<RoomTypes>
								<RoomType RoomTypeCode="STD" IsRoom="true"/>
							</RoomTypes>
							<RatePlans>
								<RatePlan RatePlanCode="EXP" EffectiveDate="2007-12-31" ExpireDate="2008-01-01"/>
								<RatePlan RatePlanCode="EXP" EffectiveDate="2008-01-01" ExpireDate="2008-01-02"/>
								<RatePlan RatePlanCode="EXP" EffectiveDate="2008-01-02" ExpireDate="2008-01-03"/>
							</RatePlans>
							<RoomRates>
								<RoomRate EffectiveDate="2007-12-31" ExpireDate="2008-01-01" RoomTypeCode="STD" NumberOfUnits="1" RatePlanCode="EXP">
									<Rates>
										<Rate EffectiveDate="2007-12-31" ExpireDate="2008-01-01" RateTimeUnit="Day" UnitMultiplier="1">
											<Base AmountBeforeTax="311.00" CurrencyCode="USD"/>
											<AdditionalGuestAmounts>
												<AdditionalGuestAmount AgeQualifyingCode="10">
													<Amount AmountBeforeTax="25.00" CurrencyCode="USD"/>
												</AdditionalGuestAmount>
											</AdditionalGuestAmounts>
											<Fees>
												<Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="USD"/>
											</Fees>
										</Rate>
									</Rates>
								</RoomRate>
								<RoomRate EffectiveDate="2008-01-01" ExpireDate="2008-01-02" RoomTypeCode="STD" NumberOfUnits="1" RatePlanCode="EXP">
									<Rates>
										<Rate EffectiveDate="2008-01-01" ExpireDate="2008-01-02" RateTimeUnit="Day" UnitMultiplier="1">
											<Base AmountBeforeTax="155.00" CurrencyCode="USD"/>
											<AdditionalGuestAmounts>
												<AdditionalGuestAmount AgeQualifyingCode="10">
													<Amount AmountBeforeTax="25.00" CurrencyCode="USD"/>
												</AdditionalGuestAmount>
											</AdditionalGuestAmounts>
											<Fees>
												<Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="USD"/>
											</Fees>
										</Rate>
									</Rates>
								</RoomRate>
								<RoomRate EffectiveDate="2008-01-02" ExpireDate="2008-01-03" RoomTypeCode="STD" NumberOfUnits="1" RatePlanCode="EXP">
									<Rates>
										<Rate EffectiveDate="2008-01-02" ExpireDate="2008-01-03" RateTimeUnit="Day" UnitMultiplier="1">
											<Base AmountBeforeTax="155.00" CurrencyCode="USD"/>
											<AdditionalGuestAmounts>
												<AdditionalGuestAmount AgeQualifyingCode="10">
													<Amount AmountBeforeTax="25.00" CurrencyCode="USD"/>
												</AdditionalGuestAmount>
											</AdditionalGuestAmounts>
											<Fees>
												<Fee TaxInclusive="false" Type="Exclusive" Code="1" Amount="0.00" CurrencyCode="USD"/>
											</Fees>
										</Rate>
									</Rates>
								</RoomRate>
							</RoomRates>
							<GuestCounts IsPerRoom="true">
								<GuestCount AgeQualifyingCode="10" Count="2"/>
								<GuestCount AgeQualifyingCode="8" Count="2"/>
							</GuestCounts>
							<TimeSpan Start="2007-12-31" End="2008-01-03"/>
							<Total AmountAfterTax="776.04" CurrencyCode="USD">
								<Taxes Amount="80.04" CurrencyCode="USD">
									<Tax Type="Exclusive" Code="27" Amount="80.04" CurrencyCode="USD"/>
								</Taxes>
							</Total>
							<BasicPropertyInfo ChainCode="CH" BrandCode="BR" HotelCode="0468"/>
							<ResGuestRPHs>
								<ResGuestRPH RPH="1"/>
							</ResGuestRPHs>
							<SpecialRequests>
								<SpecialRequest Language="en-us" RequestCode="1.21">
									<Text Formatted="false" Language="en-us">2 double</Text>
								</SpecialRequest>
								<SpecialRequest Language="en-us" RequestCode="2.1">
									<Text Formatted="false" Language="en-us">Non-Smoking</Text>
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
												<GivenName>Jeffrey</GivenName>
												<Surname>Smith</Surname>
											</PersonName>
<Telephone CountryAccessCode="1" AreaCityCode="425" PhoneNumber="690-2100" Extension="1234"/>
										</Customer>
									</Profile>
								</ProfileInfo>
							</Profiles>
						</ResGuest>
					</ResGuests>
					<ResGlobalInfo>
						<HotelReservationIDs>
							<HotelReservationID ResID_Type="8" ResID_Value="105230690" ResID_Source="Expedia" ResID_Date="2007-06-29T16:24:00-08:00"/>
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
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
	<soap-env:Header>
		<Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
			<PayloadInfo Location="Body" RequestId="33154340" RequestorId="Expedia.com" ResponderId="PartnerID">
				<CommDescriptor DestinationId="ExpediaDC" SourceId="PartnerID" RetryIndicator="false" />
				<PayloadDescriptor Name="OTA_HotelResNotifRS" >
					<PayloadReference SupplierChainCode="CH" SupplierBrandCode="BR" SupplierHotelCode="0468" DistributorHotelId="12710" />
				</PayloadDescriptor>
			</PayloadInfo>
		</Interface>
	</soap-env:Header>
	<soap-env:Body>
		<OTA_HotelResNotifRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="33154340" PrimaryLangID="en-us" ResResponseType="Committed" Target="Production" TimeStamp="2007-06-29T19:24:11-05:00" Version="2.000">
			<Success/>
			<HotelReservations>
				<HotelReservation>
					<ResGlobalInfo>
						<HotelReservationIDs>
							<HotelReservationID ResID_Date="2007-06-29T16:24:00-08:00" ResID_Source="Expedia" ResID_Type="8" ResID_Value="105230690"/>
							<HotelReservationID ResID_Date="2007-06-29T19:24:11-05:00" ResID_Source="PartnerCRS" ResID_Type="3" ResID_Value="947375143"/>
						</HotelReservationIDs>
					</ResGlobalInfo>
				</HotelReservation>
			</HotelReservations>
		</OTA_HotelResNotifRS>
	</soap-env:Body>
</soap-env:Envelope>
```
