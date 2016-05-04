# API Definition
Booking Notification is a SOAP-based API, allowing property partners to receive notifications for any new, modified or cancellation reservation in near real time.

<a name="authentication"></a>
## SOAP Header
The Header element contains either a common message header structure or an acknowledgement structure. The common message header structure is used for communication level information to uniquely identify a message and to provide authentication information. The acknowledgement header structure contains minimum information used to identify the message.

### Request Headers
The Header of a request message must include these data elements:
- The Payload element with a RequestID that uniquely identifies the request, and the RequestorID and ResponderID that identifies the source and destination of the notification.
- The CommDescriptor element with the SourceID and DestinationID of the request message and a Retry Indicator.
- The Authentication element with username and password is required in the request message.
- The PayloadDescriptor element with the name of the OTA message in the message body.
- The PayloadReference element with the property identifier, the combination of chain code, brand code and hotel code is required for the BN request message, but not for the Ping request message. The BN RQ ping message will contain a set of dummy information for the Payload reference that the partner should ignore. Sample: <PayloadReference SupplierChainCode="GoodRest" SupplierBrandCode="Royal" SupplierHotelCode="33333" DistributorHotelId="44444"/>

Example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
	<soap-env:Header>
		<Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
			<PayloadInfo RequestId="1131129966" 
						  RequestorId="PartnerID" 
						  ResponderId="Expedia.com" 
						  Location="Body" >
				<CommDescriptor SourceId="PartnerID" DestinationId="ExpediaDC" RetryIndicator="false">
					<Authentication Username="Partner" Password="Test"/>
				</CommDescriptor>
				<PayloadDescriptor Name="OTA_HotelResNotifRQ">
					<PayloadReference SupplierHotelCode="12345"/>
				</PayloadDescriptor>
			</PayloadInfo>
		</Interface>
	</soap-env:Header>
	<soap-env:Body>
		{OTA request message}
	</soap-env:Body>
</soap-env:Envelope>

```

### Response Headers - Success or Business Failure
The Header of a response message must include these data elements:
- The Payload element with the same RequestID, RequestorID and ResponderID returned in the response message.
- The CommDescriptor element with the SourceID and DestinationID for the response message, and optionally a Retry Indicator.
- The Authentication element is required for the incoming response message.
- The PayloadDescriptor element with the name of the OTA message in the message body.
- The PayloadReference element can be sent in the response message, but is not required.

Example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
	<soap-env:Header>
		<Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
			<PayloadInfo RequestId="1131129966" 
						  RequestorId="PartnerID" 
						  ResponderId="Expedia.com" 
						  Location="Body" >
				<CommDescriptor SourceId="ExpediaDC" DestinationId="PartnerID" RetryIndicator="false">
				</CommDescriptor>
				<PayloadDescriptor Name="OTA_HotelResNotifRS"/>
			</PayloadInfo>
		</Interface>
	</soap-env:Header>
		{OTA response message}
	<soap-env:Body>
	</soap-env:Body>
</soap-env:Envelope>
```

### Header Definition

Level | Element / @Attribute | Format | Number of occur. | Value Set | Description
----- | -------------------- | ------ | ---------------- | --------- | -----------
0 | Header |  | 1 |  | DC common message header structure
1 | Interface |  | 1 |  | 
  | @xmlns |  | 1 | http://www.newtrade.com/expedia/R14/header | Namespace for the header structure. 
  | @Name | String 20 | 1 | ExpediaDirectConnect | Interface Name.
  | @Version | numeric, format n.nn | 1 | 4.0 | Direct Connect XML API version. The only supported version is DC 4.0.
2 | PayloadInfo |  | 1 |  | This element contains the SOAP header information related to the payload (the business message) in SOAP body.
  | @RequestId | String 20 | 1 |  | An end-to-end communication token used to link a request message to a response message. See the <Notification Identifier> section for more detail.
  | @TrackingId | numeric | 0..1 |  | Used for internal tracking purpose, not exposed to external partners with DC version 2.0 and up.
  | @RequestorId | String 64 | 1 |  | Identifier of the party that is the source of the Request message. See <Notification Requestor/Responder> section for more detail. See the <RequestorID and ResponderID Value Set> section for values used by Expedia.
  | @ResponderId | String 64 | 1 |  | Identifier of the party that is the source of the Response message. See the <Notification Requestor / Responder> section for more detail.
  | @ExpirationDateTime | dateTime, format YYYY MM DDThh:mm:ss [+/-]hh:mm | 0..1 |  | The notification expiration date and time set by the sender of the request. Set by Expedia in the Booking Notification request. See the <Notification Expiration Time> section for detail. It should not be echoed back in the response.
  | @Location | String 4 | 1 | Body | Indicates the Payload is sent in the SOAP body, and not as an attachment.
3 | CommDescriptor |  | 1 |  | This element holds the communication level information about the payload being transferred.
  | @SourceId | String 64 | 1 |  | Identifier of the party sending the message.
  | @DestinationId | String 64 | 1 |  | Identifier of the party for which the message is destined.
  | @RetryIndicator | Boolean | 1 | true, false | Indicates if this is a retransmission of a given message.It will be set to true if the message is being retried.
4 | Authentication |  | 0..1 |  | This element holds the Information used to authenticate the sender of the message which can be Response or Request.Required in all incoming messages sent to the DC interface. Configurable per Partner request in the outgoing messages sent from DC interface.
  | @Username | String 64 | 1 |  | Identifies the message sender.
  | @Password | String 64 | 1 |  | Validates that the user is who it claims to.
3 | PayloadDescriptor |  | 1 |  | This element holds the business level information about the payload being transferred.
  | @Name | String 32 | 1 |  | Name of the OTA message being sent in the message body.See the <Payload Name Value Set> section for values supported by the API.
  | @Version | String 5 | 0..1 | 2005B | Version of the OTA message with respect to the OTA specs release. It is not required for partner to send this attribute in the message header.
  | @Type | String 10 | 0..1 | Regular ReSync | Indicates the type of message being sent in the message body.
4 | PayloadReference |  | 0..1 |  | This element holds the property identifier information. Expedia always sends this element in the request messages. See the <Property Identifier> section for details on how to use this element.
  | @SupplierChainCode | String 8 | 0..1 |  | Supplier's chain code. Blank for partners connected via EQC.
  | @SupplierBrandCode | String 8 | 0..1 |  | Supplier's brand code. Blank for partners connected via EQC.
  | @SupplierHotelCode | String 16 | 1 |  | Supplier's hotel code. Set to Expedia hotel ID for partners connected via EQC.
  | @DistributorHotelId | String 10 | 0..1 |  | Expedia Hotel ID.


### Response Headers - System Failure
In the case that a partner is unable to read the message header, the partner can return a negative acknowledgement with an empty Header element. The Fault element will still be a child of the Body element. 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
	<soap-env:Header/>
	<soap-env:Body>
		<soap-env:Fault>
			<faultcode>soap-env:Client.2002</faultcode>
			<faultstring>SOAP envelope was not found.</faultstring>
			<faultactor>MessageReceiver.MessageParser</faultactor>
		</soap-env:Fault>
	</soap-env:Body>
</soap-env:Envelope>
```

### Soap Fault Payload Definition

Level | Element / @Attribute | Format | Number of occur. | Value Set | Description
----- | -------------------- | ------ | ---------------- | --------- | -----------
0 | Body |  | 1 |  | Container element for the business message or Fault element.
1 | Fault |  | 0..1 |  |  Container element for fault.
2 | Faultcode | String 11 | 1 |  | The faultcode element is intended for use by software to provide an algorithmic mechanism for identifying the fault. See section 5.6.2 on Error Code for details on implementation.
2 | Faultstring | String 128 | 1 |  | The faultstring element is intended to provide a human readable explanation of the fault. See section 5.6.2 for details on implementation.
2 | Faultactor | String 128 | 0..1 |  | The faultactor element is intended to provide information about what caused the fault to happen within the message path. 

## Hotel Reservation Notification RQ/RS

The OTA_HotelResNotifRQ/RS message pair is used to send notification for reservation from Expedia to the hotel system. 
Requests from Expedia will be made using the OTA_HotelResNotifRQ message and responses from hotels will be received in the OTA_HotelResNotifRS message. 
The Expedia internal BookingItemID will be placed in a HotelReservationID element in the OTA_HotelResNotifRQ message. Upon reservation confirmation (positive response), the supplier will return an OTA_HotelResNotifRS with an additional HotelReservationID that will contain the supplier's confirmation number. If the supplier is unable to accept the reservation (negative response), the supplier will still return an OTA_HotelResNotifRS, but it will contain the error message rather than the confirmation number.

### OTA_HotelResNotifRQ

For Expedia Collect booking paid by EVC or Hotel Collect booking paid by guest credit card, the payload for Booking or Modify request will include a <Guarantee> element as the container for credit card payment information.
- The schema of <OTA_HotelResNotifRQ> and <OTA_HotelResModifyNotifRQ> will have a <Guarantee> element added as child of <RoomStay>, and between <TimeSpan> and <Total>.
- The <Guarantee> element will contain the credit card payment information including card type, card code, card number, expiry date, card holder name and address, optionally CVV.
- Currently Expedia does not send CVV for EVC booking. If CVV is required by the hotel to charge the EVC card, they should contact Expedia to obtain a default CVV value for all EVC cards. 
- For Hotel Collect bookings, depending on the hotel configuration Expedia may or may not send CVV for guest credit card, therefore the hotel booking notification interface must be able to process the booking with and without CVV.
- The <Guarantee> element is optional, and will be sent only for Expedia Collect bookings paid by EVC, and for Hotel Collect bookings. For Expedia Collect bookings remaining on the standard billing process, no credit card information will be sent in the booking or modify request.

A special request code (5) is sent to communicate payment related information in the booking or modify request, for bookings paid by credit card, either EVC or Hotel Collect.
Please note that credit card inform is only sent for the booking or modify request, but not for the cancel request. Penalty charge, if applicable, should be processed using the same payment information sent previously for the original reservation. If the original reservation is sent with a credit card, the penalty charge should be put on the same card.

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResNotifRQ |  | 1 |  | The OTA_HotelResNotifRQ is the message that sends the notification of a hotel reservation.
  | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
  | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message. In the booking notification request generated by Expedia, with the current implementation EchoToken has the same value as the RequestId in the Header. However this may change in future implementation.
  | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated. This lexical representation is the ISO 8601 extended format CCYY-MM-DDThh:mm:ss where "CC" represents the century, "YY" the year , "MM" the month and "DD" the day. The letter "T" is the date/time separator and "hh", "mm", "ss" represent hour, minute and second respectively. The Additional digits are used to increase the precision of fractional seconds. To indicate the time zone, the local time is immediately followed by a sign, + or -, followed by the difference from UTC represented as hh:mm. Expedia will not use the fractional seconds in the timestamp of booking notification messages.
  | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
  | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message implemented by DC.
  | @ PrimaryLangID | language | 1 | en-us | Primary language code.
  | @ResStatus | String 6 | 1 | Commit | An enumeration that indicates the action to be taken on the request. 
1 | POS |  | 1 |  | Container element for point of sale information.
2 | Source |  | 1 |  | Source of the booking notification.
3 | RequestorID |  | 1 |  | Identifier of the notification requestor. For booking notification the requestor is Expedia.
  | @ Type | OTA_CodeType | 1..2 | 18, 5 | Reference to the type of requestor. Fixed value. 18=Other (used by all bookings) 5=Travel Agency (used by Hotel Collect booking only) Ref <OTA Unique ID Types>.
  | @ID | String 32 | 1 | Expedia, Hotels.com, Expedia Affiliate Network | Identifier of the requestor, which must be unique in the Expedia Direct Connect domain. For booking notification, the ID value is within the value set listed on the left. Values in this set may grow or change in the future. It is required for the CRS to pass on this value to the hotel PMS. This value is included in fall-back fax notifications. For @Type=5, when applicable, the ID value is equal to the TIDS ID defined for the property.
4 | BookingChannel |  | 0..1 |  | This is sent only for @Type=18. Omitted for @Type=5.
  | @ Type | Numeric 1 | 1 | 2 | The type of booking channel. Fixed value. 2= CRO (Customer Reservations Office). Ref <OTA Unique ID Types> at the end of this document.
  | @Primary | Boolean | 1 | true | Indicates whether the enumerated booking channel is the primary means of connectivity used by the source. Fixed value.
5 | CompanyName | String 64 | 1 | Expedia | Identifies the company that is associated with the source ID. For booking notification, the supported value is "Expedia".
1 | HotelReservations |  | 1 |  | Collection of Hotel Reservations. Container element. 
2 | HotelReservation |  | 1 |   | A single Hotel Reservation. Single occurrence. 
  | @RoomStayReservation | Boolean  | 1 | true | True if this reservation is reserving rooms.  False if it is only reserving services. Expedia will always send "true".
  | @CreateDateTime | Date time format YYYY MM DDT hh:mm:ss[+/-] hh:mm | 1 |  | Date and time stamp of when the reservation was created using ISO 8601 format. See descriptions above on Timestamp format. Note that the fractional seconds is not used here.
  | @CreatorID | String 7 | 1 | Expedia | Person or system responsible for creating the reservation. The supported value is "Expedia".
3 | UniqueID |  | 1 |  | Unique identifier of the reservation. 
  | @Type | Numeric 2 | 1 | 14  | A reference to the type of object defined by the UniqueID element.  Fixed value. 14=Reservation. Ref <OTA Unique ID Types> at the end of this document.
  | @ID | Numeric 10 | 1 |  | A unique identifying value assigned by the creating system to the reservation. This will be the Expedia booking ID.
3 | RoomStays |  | 1 |  | Collection of room stays, often referred to as segments. Container element. Single occurrence.
4 | RoomStay |  | 1 |  | A single instance of a room stay. Container element. Single occurrence.
5 | RoomTypes |  | 1 |  | Collection of room types. Room types serve as a list of rooms used in the room stay. Container element. Single occurrence.
6 | RoomType |  | 1 |  | An individual room type. Single occurrence.
  | @IsRoom | String 4 | 1 | true | Indicates that room type is a hotel room (as opposed a meeting or conference room).
  | @RoomTypeCode | String 16 | 1 |  | Room type code – These codes will be as specified by the supplier.
5 | RatePlans |  | 1 |  | Collection of Rate Plans. Rate plans, sometimes referred to as rate codes, rate levels or a combination of both, serve as way to code a collection of actual rates, e.g., RACK. Container element. Single occurrence.
6 | RatePlan |  | 1..n |  | An individual rate plan.
  | @RatePlanCode | String 20 | 1 |  | Rate plan code will be as specified by the supplier.
  | @EffectiveDate | Date format YYYY-MM-DD | 1 |  | Start date for rate plan.
  | @ExpireDate | Date format YYYY-MM-DD | 1 |  | End date for rate plan.
5 | RoomRates |  | 1 |  | Collection of Room Rates. Room rates contain the actual amounts charged for a room. Rates are child of a combination of a given room type with a given rate plan. This structure is very common across the industry, though some supplier systems have rates as child of room type, whereas others have room types as child of rates. Container element. Single occurrence.
6 | RoomRate |  | 1..n |  | An individual room rate.
  | @EffectiveDate | Date format YYYY-MM-DD | 1 |  | Start date for room and rate combination.
  | @ExpireDate | Date format YYYY-MM-DD | 1 |  | End date for room and rate combination.
  | @RoomTypeCode | String 16 | 1 |  | Room type code. These codes will be as specified by the supplier.
  | @NumberOfUnits | Numeric 1 | 1 | 1 | Number of rooms. Expedia reservation is always for a single room
  | @RatePlanCode | String 20 | 1 |  | Rate plan code as entered by the Hotelier on the Expedia extranet.
  | @PromotionCode | String 32 | 0..1 |  | A code that identifies a special promotion. Promotions are most commonly DRRs, or Dynamic Rate Rules. These promotions and their notification codes are set up by the Expedia market manager for the property. Another type of promotion is called an Accelerator. The string will show "EFR" when an Accelerator is applied to a stay date. The presence of an Accelerator will signify a rate change, as is common to DRRs as well. Note: If both a promotion and Accelerator apply to the stay date, the DRR promotion code will begin with "EFR*" and the DRR that follows is truncated to 28 characters.
7 | Rates |  | 1 |  | A collection of rates for a given room and rate combination. Rates can vary by date range and by age. Container element. Single occurrence.
8 | Rate |  | 1..n |  | An individual rate.  The room rates, fees and extra person charges are as defined by the supplier.
  | @EffectiveDate | Date format YYYY-MM-DD | 1 |  | Start date for the rate.
  | @ExpireDate | Date format YYYY-MM-DD | 1 |  | End date for the rate.
  | @RateTimeUnit | String 3 | 1 | Day | Rate time unit. Fixed value. 
  | @UnitMultiplier | Numeric 2 | 1 |  | Indicates the number of rate time units such as "3 Days".
9 | Base |  | 1 |  | Base rate. 
  | @AmountBeforeTax | Money | 1 |  | Daily rate excluding taxes. 
  | @CurrencyCode | String 3 | 1 |  | Currency of the rate using ISO 4217 alphabetic code. 
  | AdditionalGuestAmounts |  | 0..1 |  | Collection of additional guest amounts. Container element. Optional element, used only when the reservation includes additional guests. For those that do, the full structure will be sent. The Expedia booking engine calculates additional guest amounts, based on the Age and Occupancy Settings and the Extra Person Fees data entered by the Expedia Market Manager based on information provided by the hotel.
10 | AdditionalGuestAmount |  | 1..14 |  | Incremental amount charged for additional occupants per qualifying age group.
  | @AgeQualifyingCode | Numeric 2 | 0..1 | 7 8 10 | Age category. Expedia will use the following OTA codes: 7 for Infant, 8 for Child and 10 for Adult
  | @MinAge | Numeric 2 | 0..1 |  | The minimum age to qualify for AgeQualifyingCode
  | @MaxAge | numeric 2 | 0..1 |  | The maximum age to qualify for AgeQualifyingCode
  | @AgeTimeUnit | String 4 | 0..1 | Year | Qualifier for Age An enumerated list. Fixed value.
11 | Amount |  | 0..1 |  | Amount of additional guest fees.
  | @AmountBeforeTax | Money | 0..1 |  | Additional guest fees excluding taxes.
  | @CurrencyCode | String 3 | 0..1 |  | Currency of the additional guest fees rate using ISO 4217 alphabetic code.
9 | Fees |  | 0..1 |  | Collection of fees. Container element. Optional element, used only when reservation includes fees. For those that do, the full structure will be sent. The Expedia booking engine calculates the daily fees, based on the Service charges data entered by the Expedia Market Manager based on information provided by the hotel.
10 | Fee |  | 0..1 |  | Per day fees added on top of the base daily rate. Not include the per stay fees, which will be added up in the final Total element.
  | @TaxInclusive | String 5 | 0..1 | false | Indicates whether taxes are included when figuring the fees. Expedia will always send fee amounts excluding taxes.
  | @Type | String 9 | 0..1 | Exclusive | An enumerated type that defines the type of fees applied to a rate.
  | @Code | Numeric 1 | 0..1 | 1 | Code identifying the fee. Expedia uses the following OTA code: 1for Other fee
  | @Amount | Money | 0..1 |  | Fee Amount
  | @CurrencyCode | String 3 | 0..1 |  | Currency of the fee amount using ISO 4217 alphabetic code.
5 | GuestCounts |  | 1 |  | Collection of guest counts by age categories. 
  | @IsPerRoom | Boolean | 1 | true | Indicates the guest counts are per room. Expedia sends the guest counts by age category for a room and each reservation will be for a single room.
6 | GuestCount |  | 1..3 |  | Guest count for a given guest type. 
  | @AgeQualifyingCode | Numeric 2 | 1 | 7 8 10 | Age category. Expedia uses the following OTA codes: 7 for Infant, 8 for Child and 10 for Adult
  | @Count | Numeric 2 | 1 |  | The number of guests for the given age category. Non 0 positive integer.
5 | TimeSpan |  | 1 |  | The Time Span that covers the entire room stay.
  | @Start | Date format YYYY-MM-DD | 1 |  | Start date for entire room stay.
  | @End | Date format YYYY-MM-DD | 1 |  | End date for entire room stay. Across the different Expedia travel groups, the maximum length of stay cannot exceed 28 nights.
5 | Guarantee |  | 0..1 |  | Container element for guarantee and/or payment information. Optional element. It is sent only for Expedia Collect bookings paid by Expedia VirtualCard, or for Hotel Collect bookings paid by the customer.
6 | GuaranteesAccepted |  | 1 |  | Container element
7 | GuaranteeAccepted |  | 1 |  | Container element
8 | PaymentCard |  | 1 |  | Container element that holds the actual credit card information.
  | @CardType | OTA_CodeType | 1 | 1 | Use "1" for Credit Card.
  | @CardCode | PaymentCardType UpperCaseAlphaLength1to2 | 1 | AX, DN, DS, JC, MC, VI | 2-letter code for the type of credit card. AX: American Express, DN: Diners Club, DS: Discover Card, JC: JCB International, MC: MasterCard, VI: Visa. Note this is not a finite list and new codes maybe added or changed in the future.
 | @CardNumber | NumericStringLength1to19 | 1 |  | The 16 digit card number.
 | @ExpireDate | Date format MMYY | 1 |  | Expiration date of the credit card.
 | @EffectiveDate | Date format MMYY | 0..1 |  | Starting date. Not used by EVC, Maybe used for Hotel Collect bookings, but only by certain card types.
 | @SeriesCode | NumericStringLength1to8 | 0..1 |  | CSV or CVV. Not used currently by EVC, but can be available to Hotel Collect bookings.
9 | CardHolderName | StringLength1to64 | 0..1 |  | Container element that holds the card holder name. For EVC bookings, value will be set to "Expedia VirtualCard". For Hotel Collect bookings, value will be set to the actual card holder name.
9 | Address |  | 0..1 |  | Billing address. For EVC bookings, address will be set to a static value, and may change in the future. For Hotel Collect bookings, value will be set to a dummy address in most cases, as Expedia doesn't collect customer address.
10 | AddressLine | StringLength1to64 | 0..5 |  | Street number and street name, up to 5 lines.
10 | CityName | StringLength1to64 | 0..1 |  | City name. Example: Bellevue
10 | PostalCode | StringLength1to16 | 0..1 |  | Zip or postal code.
10 | StateProv | StateProvType Length0to64 | 0..1 |  | State or province name; optional.
  | @StateCode | StringLength8 | 0..1 |  | State/Province codes. Example: WA
10 | CountryName | CountryNameType Length0to64 | 0..1 |  | Country name, optional.
  | @Code | StringLenght2 | 0..1 |  | Two letter country codes from the ISO 3166 code list. Example: US
5 | Total |  | 1 |  | Total charge for the entire room stay.
  | @AmountAfterTax | Money | 1 |  | Total charge including tax. Per stay fees, if any, would be included in the total.
 | @CurrencyCode | String 3 | 1 |  | Currency of the total charge in the ISO 4217 alphabetic format.
6 | Taxes |  | 1 |  | Total of taxes charged for entire room stay.
 | @Amount | Money | 1 |  | Total tax amount charged. This will be the sum of all <Tax> amounts in the child elements. With the current implementation Expedia only sends one child element for <Tax>, but this could change in the future.
 | @CurrencyCode | String 3 | 1 |  | Currency of total tax amount in the ISO 4217 alphabetic format.
7 | Tax |  | 1..n |  | Individual tax breakdown.
 | @Type | String 9 | 1 | Exclusive | An enumerated type that defines the way taxes are applied to a rate. Expedia sends the taxes separate from the rate.
 | @Code | Numeric 2 | 1 | 27 | Code identifying the tax. Fixed value. 27=Miscellaneous. Ref <OTA Fee Tax Types> at the end of this document. Taxes will be combined into a single total.
 | @Amount | Money | 1 |  | Tax amount.
 | @CurrencyCode | String 3 | 1 |  | Currency of the tax amount using the ISO 4217 alphabetic code.
5 | BasicPropertyInfo |  | 1 |  | Hotel associated with the room stay. The hotel reference identifies a specific hotel by using the Chain Code, the Brand Code, and the Hotel Code. 
 | @ChainCode | String 8 | 0..1 |  | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors.  This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. Suppliers will provide to Expedia the code they wish to use.
 | @BrandCode | String 8 | 0..1 |  | A code that identifies the brand or flag of a hotel, often used for independently owned or franchised properties that are known by a specific brand. Suppliers will provide to Expedia the code they wish to use. 
 | @HotelCode | String 16 | 1 |  | The code that uniquely identifies a single hotel property.  Suppliers will provide to Expedia the code they wish to use.
5 | ResGuestRPHs |  | 0..1 |  | Collection of pointers (Reference Place Holders a.k.a. foreign keys) to establish a link between reservation guests and a given room stay.  Collection element.
6 | ResGuestRPH |  | 0..1 |  | An individual guest RPH (pointer) element. Single occurrence.
 | @RPH | Numeric 1 | 0..1 | 1 | RPH is used to link the reservation guest to the room stay. Fixed value=1, as there is only one room stay per reservation and a single guest name. See the ResGuest/@ResGuestRPH in the ResGuests structure.
5 | SpecialRequests |  | 0..1 |  | Collection of special requests associated with the room stay. Container element. 
6 | SpecialRequest |  | 0..n |  | An Individual special request. Expedia usually uses up to 6 occurrences, one for bed type, one for smoking/non-smoking preference, one for multi-room indicator, one for customer's free-form text request, one for payment instructions and one for Value Add Promotions.
 | @Language | String 5  | 0..1 |  | Language of the Text element using the RFC 3066 format. See the language code list at the end of the document. When the RequestCode="4"; (customer request to hotel), the language code will be that associated with the Expedia web site and is to be used as the language of the text found in the Text element. For all other RequestCode, the language will be set to "en-us".
 | @RequestCode | Decimal, format n.nn | 0..1 |  | Coded special request. The special request codes are defined by Expedia. The complete list is provided the <Code List> section near the end of the document.
7 | Text | String 256 | 0..1 |  | Textual description of special request. In the case of RequestCode=4, this element will contain the free-form text entered by the consumer (guest). For RequestCode=5, this element will contain a special instruction for payment by credit card depending on Expedia Collect EVC or Hotel Collect. Text for EVC: "Bill only nghts bkd by Expedia to cc# @ ck-in  gst pays incid." Text for Hotel Collect: "Hotel Collect Booking - Collect Payment From Guest"
 | @Formatted | String 5 | 0..1 | false | Indicates if text is formatted.
 | @Language | String 5 | 0..1 |  | Language of the Text element, as described above.
3 | ResGuests |  | 1 |  | Collection of reservation guests. Container element.
4 | ResGuest |  | 1..n |  | An individual reservation guest. Single occurrence. Only one guest name will be included with a reservation.
 | @ResGuestRPH | Numeric 1 | 1 | 1 | The reservation guest Reference Place Holder. Used to link the reservation guest to the room stay. Fixed value=1, as there is only one room stay per reservation and a single guest name. See ResGuestRPH/@RPH in the RoomStays structure.
 | @AgeQualifyingCode | Numeric 1 | 1 | 7 8 10 | Age category. Expedia uses the following OTA codes : 7 for Infant, 8 for Child, 10 for Adult
5 | Profiles |  | 1 |  | Container element for profiles.
6 | ProfileInfo |  | 1 |  | Collection of profile elements. Container element.
7 | Profile |  | 1 |  | Individual profile. Single occurrence as a ResGuest will have only one associated profile.
 | @ProfileType | Numeric 1 | 1 | 1 | Profile type. Fixed value. 1=Customer. Ref <OTA Profile Types> at the end of this document.
8 | Customer |  | 1 |  | Customer profile element.
9 | PersonName |  | 1 |  | Container element for full guest name.
10 | GivenName | String 60 | 1 |  | Guest first name, mandatory.
10 | MiddleName | String 60 | 0..1 |  | Guest middle name, optional.
10 | Surname | String 60 | 1 |  | Guest surname, mandatory. 
9 | Telephone |  | 0..1 |  | Element that contains the customer phone number.
 | @CountryAccessCode | Numeric 3 | 0..1 |  | Code assigned by telecommunications authorities for international country access identifier.
 | @AreaCityCode | Numeric 8 | 0..1 |  | Code assigned for telephones in a specific region, city, or area.
 | @PhoneNumber | String 32 | 0..1 |  | Telephone number assigned to a single location.
 | @Extension | Numeric 5 | 0..1 |  | Extension to reach a specific party at the phone number.
5 | TPA_Extensions |  | 0..1 |  | Container element for child age information where applicable.
6 | ChildAges |  | 1 |  | Element that contains the child age information.
 | @Ages | String | 1 |  | Common separated age numbers for each child booked under the reservation. Minimum one maximum 6 children per reservation. Example: <ChildAges Ages="6,6,10"></ChildAges>
3 | ResGlobalInfo |  | 1 |  | A collection of objects which are common to the entire reservation. Container element. 
4 | Memberships |  | 0..1 |  | A collection of Membership objects. The <Memberships> element provides a list of reward programs which may be credited with points accrued from the guest's activity. Container element. The <Memberships> element optional since only corporate reservations will include membership information
5 | Membership |  | 1..n |  | The Membership object identifies the frequent customer reward program and (optionally) indicates points awarded for stay activity. Expedia usually uses up to 2 occurrences: one for the hotel loyalty membership program and another for the frequent flyer membership number.
 | @ProgramCode | String 6 | 1 |  | The code or name of the membership program. See <Expedia codes for Hotel Loyalty programs> and <Expedia codes for Airline Frequent Flyer Memberships> at the end of this document for complete list.
 | @AccountID | String 32 | 1 |  | The account identification number for this particular member in this particular program.
 | @TravelSector | Numeric 1 | 0..1 | 1 3 | Expedia uses the following OTA codes for travel sector: 1 for Air, 3 for Hotel
4 | HotelReservationIDs |  | 1 |  | Collection of hotel reservation and confirmation IDs. Container element.
5 | HotelReservationID |  | 1..2 |  | For reservation (OTA_HotelResNotifRQ), there will be a single occurrence of the HotelReservationID element and it will contain the information on the Expedia reservation number. For modification (OTA_HortelResModifyNotifRQ), there will be 2 occurrences, one for the Expedia booking number and another for the hotelier system's confirmation number. 
 | @ResID_Type | Numeric 1 | 1 | 3 8 | Reservation ID Type. See <Confirmation Number Types> at the end of this document. Expedia uses the two following values: 3 for Confirmation, 8 for Reservation. For reservation (OTA_HotelResNotifRQ), Expedia uses "8" to send its reservation number. For modification (OTA_HotelResModifyNotifRQ), Expedia uses "3" for the Holelier's confirmation number and "8" for the Expedia reservation number.
 | @ResID_Value | String 64 | 1 |  | This is the actual value associated with the ResID_Type. For reservation (OTA_HotelResNotifRQ), this will be the actual Expedia reservation number. NOTE: HotelReservations/HotelReservation/UniqueId/@Id= HotelReservationID/@ResID_Value. For modification (OTA_HotelResModifyNotifRQ), it will be the original Expedia reservation number or the Hotelier's confirmation number. The Expedia reservation number is associated with ResID_Type="8" and the Hotelier's confirmation number is associated with ResID_Type="3". The hotel confirmation number can be alpha numeric and should not exceed 50 characters.
 | @ResID_Source | String 64 | 1 |  | A unique identifier to indicate the source system that generated the ResID_Value. For the Expedia reservation number, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system. This value should be the same as the ResponderId.
 | @ResID_Date | Date time format YYYY MM DDT hh:mm:ss[+/-] hh:mm | 1 |  | The creation date and time of this reservation ID as the local date and time using the format specified by ISO 8601.

###	OTA_HotelResNotifRS
There are 2 types of responses that can be returned by the hotel partner.
- A success response is to be returned when the notification is processed successfully by the partner system. Expedia expects to get a confirmation number from a success response. Optionally partner can include warning information in a success response.
- An error response is to be returned when the notification failed to be processed by the partner system. In this case partner must include an explicit error code and a detail error message in the error response. The list of error codes are defined in the API spec. 

#### Detailed definition of a successul response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResNotifRS |  | 1 |  | The OTA_HotelResNotifRS is the message used to indicate the status of processing the OTA_HotelResNotifRQ message.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @ResResponseType | String 9 | 1 | Committed | Status of response.
1 | Success |  | 1 |  | Presence of the Success element indicates that transaction was processed successfully.
1 | Warnings |  | 0..1 |  | Collection of warning messages. Container element.
2 | Warning | String 512 | 1..99 |  | This element contains the warning message structure, which is identical to the error message structure in an error response. Details on how to use the warning or error structure can be found in the API spec. May have 1 or multiple instances if one or many errors/warnings are detected while processing the request message. Detailed error/warning description is placed directly under this element. The API allows up to 512 characters for this element.
 | @ Language | language | 0..1 | en-us | Language of the textual error message.
 | @ Type | OTA_CodeType | 1 | 3 | OTA error type. The DC interface uses a generic error type for all errors. Type 3 = Business error
 | @ Code | OTA_CodeType | 1 | 450 | OTA error code. The DC interface uses a generic code for all errors. Code 450 = Unable to process
 | @ ShortText | String 4 | 1 |  | The 4 digit error code defined by the Direct Connect API. See the API spec on BN Message Set - Error Handling for a complete list of error codes used by the booking notification interface.
1 | HotelReservations |  | 1 |  | Collection of Hotel Reservations. Container element.
2 | HotelReservation |  | 1 |  | A single Hotel Reservation. Single occurrence.
3 | ResGlobalInfo |  | 1 |  | A collection of objects which are common to the entire reservation. Container element. 
4 | HotelReservationIDs |  | 1 |  | Collection of hotel reservation and confirmation IDs. Container element.
5 | HotelReservationID |  | 2 |  | There will be 2 occurrences of the HotelReservationID element, one for the Expedia booking number and another for the hotelier system's confirmation number.
 | @ResID_Type | Numeric 1 | 1 | 3, 8 | Reservation ID Type. See <Confirmation Number Types> at the end of this document. Expedia uses the two following values: 3 is to be used for the Hoteliers Confirmation number, 8 is to be used for echoing back the Expedia reservation number.
 | @ResID_Value | String 64 | 1 |  | This is the actual value associated with ResID_Type. The Expedia reservation number is associated with ResID_Type=8 and the Hotelier's confirmation number is associated with ResID_Type=3. The hotel confirmation number can be alpha numeric and should not exceed 50 characters.
 | @ResID_Source | String 64 | 1 |  | A unique identifier to indicate the source system which generated the ResID_Value. For the Expedia reservation number, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system.
 | @ResID_Date | Date time format YYYY MM DDT hh:mm:ss[+/-] hh:mm | 1 |  | The creation date and time of this reservation ID as the local date and time using the format specified by ISO 8601.

#### Detailed Definition of an Error Response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResNotifRS |  | 1 |  | The OTA_HotelResNotifRS is the message used to indicate the status of processing the OTA_HotelResNotifRQ message.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @ResResponseType | String 9 | 1 | Ignored | Status of response.
1 | Errors |  | 0..1 |  | Collection of error messages. Container element.
2 | Error | String 512 | 1..99 |  | This element contains the error message structure. Details on how to use the error structure can be found in the API spec. May have 1 or multiple instances if one or many errors are detected while processing the request message. Detailed error description is placed directly under this element. The API allows up to 512 characters for this element.
 | @ Language | language | 0..1 | en-us | Language of the textual error message.
 | @ Type | OTA_CodeType | 1 | 3 | OTA error type. The DC interface uses a generic error type for all errors. Type 3 = Business error
 | @ Code | OTA_CodeType | 1 | 450 | OTA error code. The DC interface uses a generic code for all errors. Code 450 = Unable to process
 | @ ShortText | String 4 | 1 |  | The 4 digit error code defined by the Direct Connect API. See the API spec on BN Message Set - Error Handling for a complete list of error codes used by the booking notification interface.

## Hotel Reservation Modification RQ/RS

The OTA_HotelResModifyNotifRQ/RS message pair is used to send notification for reservation modification from Expedia to the hotel system. 
There are two categories of reservation modifications:
- The first type involves changing all information except the property (for example dates, room types, or other details of a stay at a particular property). This type of change will employ the use of a modification message pair.
- The second type involves changing from staying at one property to staying at a different property. This type of change will be handled as a cancel of the original reservation and a brand new booking at the new property. 

The OTA 2005B spec OTA_HotelResModifyNotifRQ/RS message set will handle the full overlay of the reservation. This message resembles the OTA_HotelResNotifRQ/RS. The existing message structures are extended with new fields to identify that this is a modification to a committed reservation and to verify that the change is being done on the appropriate reservation.  In this message, the reservation content is the bulk of the message.
Both the Expedia internal BookingItemID and the Hotel confirmation ID will be placed in the HotelReservationID element in the OTA_HotelResModifyNotifRQ message.

### OTA_HotelResModifNotifRQ

Since the OTA_HotelResModifyNotifRQ message is a full overlay of the reservation, it has the exact same XML structure as the OTA_HotelResNotifRQ message. The main difference is in the HotelReservationID element within the XML structure. There will be 2 instances of HotelReservationID element in the Modify message as opposed to a single instance in the original Reservation message.
Furthermore the free-form text special request (RequestCode="4") in a reservation modification is sent only if a new special request is entered for the current modification. In other words, by default the modification notification request will not contain the special request entered previously for the same reservation. It is recommended that partners append the new free-form text special request to the existing one saved in the partner system for the same reservation.

#### Detail Descriptions

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResModifyNotifRQ |  | 1 |  | The OTA_HotelResModifyNotifRQ is the message that sends the notification of a modification to a previous hotel reservation.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @ResStatus | String 6 | 1 | Commit | An enumeration that indicates the action to be taken on the request. 
1 | POS |  | 1 |  | Container element for point of sale information.
  |     |  |   |  | Repeat the same POS structure as described for the OTA_HotelResNotifRQ message.
1 | HotelResModifies |  | 1 |  | Collection of Hotel Reservation Modifications. Container element.
2 | HotelResModify |  | 1 |  | A single Hotel Reservation Modification. Single occurrence.
 | @RoomStayReservation | Boolean | 1 | true | True if this reservation is reserving rooms.  False if it is only reserving services. Expedia will always send "true".
 | @CreateDateTime | Date time format YYYY MM DDT hh:mm:ss[+/-] hh:mm | 1 |  | Date and time stamp of when the reservation was created using ISO 8601 format.
 | @CreatorID | String 7 | 1 | Expedia | Person or system responsible for creating the reservation. The supported value is "Expedia".
 | @LastModifyDateTime | Date time format YYYY MM DDT hh:mm:ss[+/-] hh:mm | 0..1 |  | Date and time stamp of when the reservation was created using ISO 8601 format.
 | @LastModifierID | String 32  | 0..1 |  | Person or system responsible for last modifying the reservation. Expedia will always set this value to "Expedia".
3 | UniqueID |  | 1 |  | Unique identifier of the reservation.
  |          |  |   |  | From this point on, repeat the same XML structure as described for the OTA_HotelResNotifRQ message.

### OTA_HotelResModifyNotifRS

The OTA_HotelResModifyNotifRS message has the exact same XML structure as the OTA_HotelResNotifRS message. The main difference is that the attribute @ResResponseType will have a different value ("Modified" versus "Committed") in a success response.

#### Detail Descriptions of a Success Response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResModifyNotifRS |  | 1 |  | The OTA_HotelResModifyNotifRS is the message used to indicate the status of processing the OTA_HotelResModifyNotifRQ message.
  |   |   |   |   | Repeat the same common payload attributes as described for the OTA_HotelResNotifRS message.
 | @ResResponseType | String 9 | 1 | Modified
 | Status of response.
1 | Success |  | 1 |  | Presence of the Success element indicates that transaction was processed successfully.
1 | HotelResModifies |  | 1 |  | Collection of Hotel Reservation Modifications. Container element.
2 | HotelResModify |  | 1 |  | A single Hotel Reservation Modification. Single occurrence.
3 | ResGlobalInfo |  | 1 |  | A collection of objects which are common to the entire reservation. Container element. 
  |   |   |  |  | From this point on, repeat the same XML structure as described for the successful OTA_HotelResNotifRS message.

#### Detail Descriptions of an Error Response
Same as the OTA_HotelResNotifRS message, except the root tag will be "OTA_HotelResModifyNotifRS" in the place of "OTA_HotelResNotifRS".


## Hotel Cancel RQ/RS

The OTA_CancelRQ/RS message pair is used to send notification for cancellation from Expedia to the hotel system. 

### OTA_CancelRQ

The OTA_CancelRQ message will contain the hotel's confirmation number and Expedia's BookingItemID in the UniqueID elements to identify the reservation to cancel. In the OTA_CancelRS message (positive response) all the IDs will be echoed back in the general UniqueID structure but the Hoteliers cancellation number will be placed in another UniqueID element contained within the CancelInfoRS structure. If the supplier is not able to cancel the reservation (negative response), the supplier will still return an OTA_CancelRS, but it will contain the error information rather than the cancellation information.

#### Detailed Description

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_CancelRQ |  | 1 |  | The OTA_CancelRQ is the message that sends the notification of a cancellation to a previous hotel reservation.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 1.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @CancelType | String 6 | 1 | Commit | An enumeration that indicates the action to be taken on the request. 
1 | POS |  | 1 |  | Container element for point of sale information.
  |   |   |   |   | Repeat the same POS structure as described for the OTA_HotelResNotifRQ message.
1 | UniqueID |  | 2 |  | Unique identifier of the reservation to be cancelled. Ref <OTA Unique ID Types> at the end of this document. There will be 2 occurrences, one to contain the original Expedia booking / reservation number, and another for the Hotelier confirmation number.
 | @Type | Numeric 2 | 1 | 10, 14 | A reference to the type of object defined by the UniqueID element. 10=Hotel, to be used to specify the hotel confirmation number. 14=Reservation, to be used to specify the Expedia booking ID.
 | @ID | String 32 | 1 |  | A unique identifying value assigned by the creating system to the reservation. This will be either the hotel confirmation number or the Expedia booking ID.
2 | CompanyName | String 64 | 1 |  | Identifies the company that is associated with the UniqueID. For the Expedia booking ID, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system.
1 | Verification |  | 1 |  | Container element for cancellation verification information. This is to ensure that the correct booking is being cancelled.
2 | PersonName |  | 1 |  | Container element for full guest name. This is the primary guest of the reservation. This information serves to validate that the correct booking is being cancelled.
3 | GivenName | String 60 | 1 |  | Guest first name.
3 | MiddleName | String 60 | 0..1 |  | Guest middle name.
3 | Surname | String 60 | 1 |  | Guest last name. 
2 | Vendor | String 16 | 1..3 |  | The Vendor element is used to send the chain, brand and hotel codes. Minimum 1 occurrence for the hotel code. Up to 3 occurrences, if all three codes are setup for the property in the Expedia system. The following information will be sent under this element: 1 for ChainCode, 2 for BrandCode, 3 for HotelCode. Note that the actual chain code, brand code or hotel code value is placed directly under this element and not as an attribute value. 
 | @Code | Numeric 1 | 1 | 1 or 2 or 3 | One of the Code values as listed above.
 | @CodeContext | String 32 | 1 |  | One of the CodeContext values as listed above.
2 | ReservationTimeSpan |  | 1 |  | The Time Span which covers the entire room stay.
 | @Start | Date format YYYY-MM-DD | 1 |  | Start date of the entire room stay. 
 | @End | Date format YYYY-MM-DD | 1 |  | End date of the entire room stay.
2 | AssociatedQuantity |  | 1..2 |  | The AssociatedQuantity element is used to send the number of rooms and the number of guests included in the reservation. The following information will be sent under this element: 1 for Number of rooms, 2 for Number of guests
 | @Code | Numeric 1 | 1 | 1 or 2 | One of the Code values as listed above.
 | @CodeContext | String 32 | 1 |  | One of the CodeContext values as listed above.
 | @Quantity | Numeric 2 | 1 |  | The number of rooms (Expedia reservation is always for 1 room) or the number of guests associated to the reservation.

### OTA_CancelRS

The OTA_CancelRS allows the partner to confirm successful processing of the cancel message.

#### Detailed Description for a Success Response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_CancelRS |  | 1 |  | The OTA_CancelRS is the message used to indicate the status of processing the OTA_CancelRQ message.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @Status | String 9 | 1 | Cancelled  | Status of response.
1 | Success |  | 1 |  | Presence of the Success element indicates that transaction was processed successfully.
1 | Warnings |  | 0..1 |  | Collection of warning messages. Container element.
2 | Warning | String 512 | 1..99 |  | This element contains the warning message structure, which is identical to the error message structure in an error response. Details on how to use the warning or error structure can be found in the API spec. May have 1 or multiple instances if one or many errors/warnings are detected while processing the request message. Detailed error/warning description is placed directly under this element. The API allows up to 512 characters for this element.
 | @ Language | language | 0..1 | en-us | Language of the textual error message.
 | @ Type | OTA_CodeType | 1 | 3 | OTA error type. The DC interface uses a generic error type for all errors. Type 3 = Business error
 | @ Code | OTA_CodeType | 1 | 450 | OTA error code. The DC interface uses a generic code for all errors. Code 450 = Unable to process
 | @ ShortText | String 4 | 1 |  | The 4 digit error code defined by the Direct Connect API. See the API spec on BN Message Set - Error Handling for a complete list of error codes used by the booking notification interface.
1 | UniqueID |  | 2 |  | Unique identifier of the reservation to be cancelled. Ref <OTA Unique ID Types> at the end of this document. There will be 2 occurrences, one to contain the original Expedia booking / reservation number, and another for the Hotelier confirmation number.
 | @Type | Numeric 2 | 1 | 10, 14 | A reference to the type of object defined by the UniqueID element. 10=Hotel, to be used to specify the hotel confirmation number. 14=Reservation, to be used to specify the Expedia booking ID.
 | @ID | String 32 | 1 |  | A unique identifying value assigned by the creating system to the reservation. This will be either the hotel confirmation number or the Expedia booking ID.
2 | CompanyName | String 64 | 1 |  | Identifies the company that is associated with the UniqueID. For the Expedia booking ID, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system.
1 | CancelInfoRS |  | 1 |  | The cancellation response.  Container element.
2 | UniqueID |  | 1 |  | Unique identifier that contains the hotel primary cancellation number.
2 | @Type | Numeric 2 | 1 | 10 | A reference to the type of object defined by the UniqueID element. 10=Hotel, to be used to specify the hotel cancellation number.
 | @ID | String 32 | 1 |  | The primary hotel cancellation number as returned by the supplier system.
3 | CompanyName | String 64 | 1 |  | Identifies the company that is associated with the UniqueID.

#### Detailed Description of an Error Response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_CancelRS |  | 1 |  | The OTA_CancelRS is the message used to indicate the status of processing the OTA_CancelRQ message.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | YYYY MM DDT hh:mm:ss.ss[+/-] hh:mm | 1 |  | Timestamp of when this message was generated.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @Status | String 9 | 1 | Ignored | Status of response.
1 | Errors |  | 0..1 |  | Collection of error messages. Container element.
2 | Error | String 512 | 1..99 |  | This element contains the error message structure. Details on how to use the error structure can be found in the API spec. May have 1 or multiple instances if one or many errors are detected while processing the request message. Detailed error description is placed directly under this element. The API allows up to 512 characters for this element.
 | @ Language | language | 0..1 | en-us | Language of the textual error message.
 | @ Type | OTA_CodeType | 1 | 3 | OTA error type. The DC interface uses a generic error type for all errors. Type 3 = Business error
 | @ Code | OTA_CodeType | 1 | 450 | OTA error code. The DC interface uses a generic code for all errors. Code 450 = Unable to process
 | @ ShortText | String 4 | 1 |  | The 4 digit error code defined by the Direct Connect API. See the API spec on BN Message Set - Error Handling for a complete list of error codes used by the booking notification interface.


## Partner ID Value

Partner IDs identify partners within the Expedia system and are used in the BN messages. Expedia may assign more than one Partner ID per partner, specifically in cases where a partner uses multiple CRSs. Expedia will apply monitoring and take actions during outages (see section 14.3) based on partner IDs. To maximise partner availability on Expedia, partners should support multiple Partner IDs where appropriate.

## RequestorID and ResponderID Value 

For booking notification messages the requestor is generally Expedia.com, and the responder is the hotel partner. DCMonitor01 is the requestor ID used by the booking notification Ping messages. 
The values used currently by the interface are listed below. However this list is not a fixed list, the current values may change and new values may be added so partners should ensure they make these values configurable. 

Interface | RequestorID | ResponderID
--------- | ----------- | -----------
BN | DCMonitor01, Expedia.com | Partner ID defined by Expedia

It is required for the CRS to pass on the Requestor ID value to the hotel PMS. The Requestor ID value is also included in fall-back fax or email notifications. 
For testing purpose, Expedia may send other values (for example requestorSpoofer1) in the test environment, so this is another reason that partner should make these values configurable.

## SourceID and DestinationID Value 

Unlike requestor and responder that stay the same in all messages belonging to the same notification, the source and destination of each message change depending if it is an incoming or outgoing message and if it is a request or response message.
Please refer to section 4.5 for the definition of Source ID and Destination ID. The table below lists the Source ID and Destination ID values to be used by the partner for BN interfaces.

Interface | Incoming / Outgoing | Request / Response | SourceID | DestinationID
--------- | ------------------- | ------------------ | -------- | -------------
BN | Outgoing (DC=> partner | Request | ExpediaDC | PartnerID
   | Incoming (partner =>DC) | Response | PartnerID | ExpediaDC

## Payload Name Value Set

This attribute indicates the name of the OTA message being sent in the XML message.
The value set used by the API is defined in the table below.

 Interface | OTA Payload Name Value Set (PayloadDescriptor / @Name)
---------- | ------------------------------------------------------
BN | OTA_HotelResNotifRQ OTA_HotelResNotifRS OTA_HotelResModifyNotifRQ OTA_HotelResModifyNotifRS OTA_CancelRQ OTA_CancelRS OTA_PingRQ OTA_PingRS

