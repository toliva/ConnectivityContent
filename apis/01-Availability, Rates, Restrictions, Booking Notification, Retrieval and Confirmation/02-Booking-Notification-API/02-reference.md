# API Definition
Booking Notification is a SOAP-based API, allowing property partners to receive notifications for any new, modified or cancellation reservation in near real time.

<a name="authentication"></a>
## SOAP Header
The common message header structure is used for communication level information to uniquely identify a message and to provide authentication information.

### Request Headers
The Header of a request message will include these data elements:
- The Payload element with a RequestID that uniquely identifies the request, and the RequestorID and ResponderID that identifies the source and destination of the notification.
- The CommDescriptor element with the SourceID and DestinationID of the request message and a Retry Indicator.
- The Authentication element with username and password is required in the request message.
- The PayloadDescriptor element with the name of the OTA message in the message body.
- The PayloadReference element with the property identifier.

Example:
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo RequestId="644630088" RequestorId="Expedia.com" ResponderId="EQCTest" ExpirationDateTime="2016-05-10T03:59:00+00:00" Location="Body">
        <CommDescriptor SourceId="ExpediaDC" DestinationId="EQCTest" RetryIndicator="false">
          <Authentication Username="Test" Password="Pa$$w0rd" />
        </CommDescriptor>
        <PayloadDescriptor Name="OTA_HotelResNotifRQ" Version="2003A">
          <PayloadReference SupplierHotelCode="40512" DistributorHotelId="40512" />
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
...
  </soap-env:Body>
</soap-env:Envelope>

```

### Response Headers - Success or Business Failure
The Header of a response message must include these data elements:
- The Payload element with the same RequestID, RequestorID and ResponderID returned in the response message.
- The CommDescriptor element with the SourceID and DestinationID for the response message.
- The PayloadDescriptor element with the name of the OTA message in the message body.
- The PayloadReference element can be sent in the response message, but is not required.

Example:
```xml
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
  <soap-env:Header>
    <Interface xmlns="http://www.newtrade.com/expedia/R14/header" Name="ExpediaDirectConnect" Version="4.0">
      <PayloadInfo Location="Body" RequestId="644630088" RequestorId="Expedia.com" ResponderId="EQCTest">
        <CommDescriptor DestinationId="ExpediaDC" SourceId="EQCTest" RetryIndicator="false"/>
        <PayloadDescriptor Name="OTA_HotelResNotifRS" Version="2003A">
          <PayloadReference SupplierHotelCode="40512" DistributorHotelId="40512"/>
        </PayloadDescriptor>
      </PayloadInfo>
    </Interface>
  </soap-env:Header>
  <soap-env:Body>
...
  </soap-env:Body>
</soap-env:Envelope>

```

### Header Definition

Level | Element / @Attribute | Format | Number of occur. | Description
----- | -------------------- | ------ | ---------------- | -----------
0 | Header |  | 1 |  DC common message header structure
1 | Interface |  | 1 |
  | @xmlns |  | 1 | Namespace for the header structure. Always set to http://www.newtrade.com/expedia/R14/header.
  | @Name | String 20 | 1 | Interface Name. Always set to ExpediaDirectConnect
  | @Version | numeric, format n.nn | 1 | API version. Only version 4.0 is supported.
2 | PayloadInfo |  | 1 | This element contains the SOAP header information related to the payload (the business message) in SOAP body.
  | @RequestId | String 20 | 1 | An end-to-end communication token used to link a request message to a response message.
  | @RequestorId | String 64 | 1 | Identifier of the party that is the source of the Request message.
  | @ResponderId | String 64 | 1 | Identifier of the party that is the source of the Response message.
  | @ExpirationDateTime | dateTime | 0..1 | The notification expiration date and time set. Set by Expedia in the Booking Notification request. Format YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
  | @Location | String 4 | 1 | Indicates the Payload is sent in the SOAP body, and not as an attachment. Always set to Body.
3 | CommDescriptor |  | 1 | This element holds the communication level information about the payload being transferred.
  | @SourceId | String 64 | 1 | Identifier of the party sending the message.
  | @DestinationId | String 64 | 1 | Identifier of the destination for this message.
  | @RetryIndicator | Boolean | 1 | Indicates if this is a retransmission of a given message. It will be set to true if the message is being retried.
4 | Authentication |  | 0..1 | This element holds the Information used by Expedia to authenticate its ongoing booking notifications to partners.
  | @Username | String 64 | 1 | Username.
  | @Password | String 64 | 1 | Password.
3 | PayloadDescriptor |  | 1 | This element holds the business level information about the payload being transferred.
  | @Name | String 32 | 1 | Name of the OTA message being sent in the message body.
  | @Version | String 5 | 0..1 | Version of the OTA message with respect to the OTA specs release. Always set to 2003A.
4 | PayloadReference |  | 0..1 | This element holds the property identifier information.
  | @SupplierHotelCode | String 16 | 1 | Supplier's hotel code. Set to Expedia hotel ID for partners connected via EQC.
  | @DistributorHotelId | String 10 | 0..1 | Expedia Hotel ID.


### Response Headers - Temporary System Failure
In the case that a partner is experiencing temporary issues with a request sent by Expedia, the partner can return a negative acknowledgement with an empty Header element. The Fault element will still be a child of the Body element.
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
When a partner makes use of soap faults, Expedia will retry the message until expiration time is reached.

### Soap Fault Payload Definition

Level | Element / @Attribute | Format | Number of occur. | Description
----- | -------------------- | ------ | ---------------- | -----------
0 | Body |  | 1 | Container element for the business message or Fault element.
1 | Fault |  | 0..1 | Container element for fault.
2 | Faultcode | String 11 | 1 | Code for the error. See [Error Codes for Nack](#NackCodes) all supported codes. See [Error Handling](guides.html#ErrorHandling) for more details around error handling.
2 | Faultstring | String 128 | 1 | Description for the error.
2 | Faultactor | String 128 | 0..1 | More information about the source of the fault.

## HTTP Header
The BN request is sent via HTTP Post, and is answered back by the OTA response or Nack via HTTP Response.

### HTTP POST Header
Example:
POST /ServletDispatcher HTTP/1.1
Host: destinationpartner.com
Content-Type: text/xml; charset=UTF-8
Content-Length: 1234
SOAPAction: ""

### HTTP Response Header for OTA Response
Example:
HTTP/1.1 200 OK
Content-Type: text/xml; charset=UTF-8
Content-Length: 1234

### HTTP Response Header for NACK
Example:
HTTP/1.1 500 Internal Server Error
Content-Type: text/xml; charset=UTF-8
Content-Length: 2291

## Hotel Reservation Notification RQ/RS

The OTA_HotelResNotifRQ/RS message pair is used to send notification for reservation from Expedia to the hotel system.

Requests from Expedia will be made using the OTA_HotelResNotifRQ message and responses from hotels will be received in the OTA_HotelResNotifRS message.

The Expedia internal BookingItemID will be placed in a HotelReservationID element in the OTA_HotelResNotifRQ message. Upon reservation confirmation (positive response), the supplier will return an OTA_HotelResNotifRS with an additional HotelReservationID that will contain the supplier's confirmation number.

If the supplier is unable to accept the reservation (negative response), the supplier will still return an OTA_HotelResNotifRS, but it will contain the error message rather than the confirmation number.

### OTA_HotelResNotifRQ

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResNotifRQ |  | 1 |  | The OTA_HotelResNotifRQ is the message that sends the notification of a hotel reservation.
  | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
  | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message. In the booking notification request generated by Expedia, EchoToken has the same value as the RequestId in the Header.
  | @ TimeStamp | ISO 8601 Timestamp | 1 |  | Timestamp of when this message was generated. ISO 8601 extended format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm
  | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
  | @ Version | decimal, n.nnn | 1 | 1.000 | Version of the OTA message.
  | @ PrimaryLangID | language | 1 | en-us | Primary language code.
  | @ResStatus | String 6 | 1 | Commit | An enumeration that indicates the action to be taken on the request.  Only Commit is supported.
1 | POS |  | 1 |  | Container element for point of sale information. For more information and examples about this object, please refer to [Understanding the POS element](guides.html#POSElement) in the FAQ & Guides section.
2 | Source |  | 1..2 |  | Source of the booking notification. There can be up to 2 sources, for partners who adhere to the group reconciliation process known as Partner Pay, for HotelCollect commission reconciliation. For most partners, only one source will be sent.
3 | RequestorID |  | 1 |  | Identifier of the notification requestor. For booking notification the requestor is Expedia.
  | @Type | OTA_CodeType | 1 | 18, 5 | Reference to the type of requestor. Fixed value. 18=Other (used by all bookings) 5=Travel Agency (used by Hotel Collect booking only).
  | @ID | String 32 | 1 | | Identifier of the requestor. For @Type=18, the ID value is within the value set provided under [Point of Sale Brand List](reference.html#/point-of-sale-brand-list). For @Type=5, when applicable, the ID value is equal to the TIDS ID defined for the property.
4 | BookingChannel |  | 0..1 |  | This is sent only for @Type=18. Omitted for @Type=5.
  | @ Type | Numeric 1 | 1 | 2 | The type of booking channel. Fixed value. 2= CRO (Customer Reservations Office).
  | @Primary | Boolean | 1 | true | Indicates whether the enumerated booking channel is the primary means of connectivity used by the source. Fixed value.
5 | CompanyName | String 64 | 1 | Expedia | Identifies the company that is associated with the source ID. For booking notification, the supported value is "Expedia".
1 | HotelReservations |  | 1 |  | Collection of Hotel Reservations. Container element. Only 1 reservation will be sent per request.
2 | HotelReservation |  | 1 |   | A single Hotel Reservation.
  | @RoomStayReservation | Boolean  | 1 | true | Always set to "true".
  | @CreateDateTime | dateTime | 1 |  | Date and time stamp of when the reservation was created. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
  | @CreatorID | String 7 | 1 | Expedia | Always set to "Expedia".
3 | UniqueID |  | 1 |  | Unique identifier of the reservation.
  | @Type | Numeric 2 | 1 | 14  | Always set to 14=Reservation.
  | @ID | Numeric 10 | 1 |  | A unique identifying value assigned by the creating system to the reservation. This will be the Expedia booking ID.
3 | RoomStays |  | 1 |  | Collection of room stays, often referred to as segments. Container element. Single occurrence.
4 | RoomStay |  | 1 |  | A single instance of a room stay. Container element. Single occurrence.
5 | RoomTypes |  | 1 |  | Collection of room types. Room types serve as a list of rooms used in the room stay. Container element. Single occurrence.
6 | RoomType |  | 1 |  | An individual room type. Single occurrence.
  | @IsRoom | String 4 | 1 | true | Always set to true.
  | @RoomTypeCode | String 16 | 1 |  | Room type code: will contain the Expedia room type ID.
5 | RatePlans |  | 1 |  | Collection of Rate Plans.
6 | RatePlan |  | 1..n |  | An individual rate plan. Will be repeated once per stay date.
  | @RatePlanCode | String 20 | 1 |  | Rate plan code: will contain the Expedia rate plan ID.
  | @EffectiveDate | YYYY-MM-DD | 1 |  | Effective Date. Will be repeated for each stay date covered by the booking. Can be ignored.
  | @ExpireDate | YYYY-MM-DD | 1 |  | Expiry Date, will be set to stay date+1. Can be ignored.
7 | Commission |  | 1 |  | Commission information for HotelCollect booking.
  | @Percent | Float | 1 |  | Applicable commission percentage for this stay date. Only returned for HotelCollect booking. Percentage will be expressed as a value between 0.0000 and 1.0000. If discounts or Accelerators apply, they will be accounted for in the percentage specified.
5 | RoomRates |  | 1 |  | Collection of Room Rates. Room rates contain the actual amounts charged for a room. Single occurrence.
6 | RoomRate |  | 1..n |  | An individual room rate.
  | @EffectiveDate | YYYY-MM-DD | 1 |  | Start date for room and rate combination.
  | @ExpireDate | YYYY-MM-DD | 1 |  | End date for room and rate combination.
  | @RoomTypeCode | String 16 | 1 |  | Room type code: will contain the Expedia room type ID.
  | @NumberOfUnits | Numeric 1 | 1 | 1 | Number of rooms. Expedia reservation is always for a single room
  | @RatePlanCode | String 20 | 1 |  | Rate plan code: will contain the Expedia rate plan ID.
  | @PromotionCode | String 32 | 0..1 |  | A code that identifies a special promotion. Promotions can be set via Partner Central to offer special discounts to Expedia customers. Another type of promotion is called an Accelerator. The string will show "EFR" when an Accelerator is applied to a stay date. The presence of an Accelerator will signify a rate change. Note: If both a promotion and Accelerator apply to the stay date, the promotion code will begin with "EFR*" and the code that follows is truncated to 28 characters.
7 | Rates |  | 1 |  | A collection of rates for a given room and rate combination. Rates can vary by date range and by age. Container element. Single occurrence.
8 | Rate |  | 1..n |  | An individual rate.  The room rates, fees and extra person charges are as defined by the supplier.
  | @EffectiveDate | YYYY-MM-DD | 1 |  | Start date for the rate.
  | @ExpireDate | YYYY-MM-DD | 1 |  | End date for the rate.
  | @RateTimeUnit | String 3 | 1 | Day | Rate time unit. Always set to Day.
  | @UnitMultiplier | Numeric 2 | 1 |  | Indicates the number of rate time units such as "3 Days".
9 | Base |  | 1 |  | Base rate.
  | @AmountBeforeTax | Money | 1 |  | Daily rate excluding taxes by default. For some suppliers it is possible that this rate would include taxes, based on how they are configured in Expedia system.
  | @CurrencyCode | String 3 | 1 |  | Currency of the rate using ISO 4217 alphabetic code.
9 | AdditionalGuestAmounts |  | 0..1 |  | Collection of additional guest amounts. Only specified when additional guests amounts need to be charged.
10 | AdditionalGuestAmount |  | 1..14 |  | Incremental amount charged for additional occupants per qualifying age group.
   | @AgeQualifyingCode | Numeric 2 | 0..1 | 7 8 10 | Age category. Expedia will use the following OTA codes: 7 for Infant, 8 for Child and 10 for Adult.
11 | Amount |  | 0..1 |  | Amount of additional guest fees.
  | @AmountBeforeTax | Money | 0..1 |  | Additional guest fees excluding taxes.
  | @CurrencyCode | String 3 | 0..1 |  | Currency of the additional guest fees rate using ISO 4217 alphabetic code.
9 | Fees |  | 0..1 |  | Collection of fees. Container element. Optional element, used only when reservation includes fees. For those that do, the full structure will be sent. The Expedia booking engine calculates the daily fees, based on the Service charges data entered by the Expedia Market Manager based on information provided by the hotel.
10 | Fee |  | 0..1 |  | Per day fees added on top of the base daily rate. Not include the per stay fees, which will be added up in the final Total element.
  | @TaxInclusive | String 5 | 0..1 | false | Indicates whether taxes are included when figuring the fees. Expedia will always send fee amounts excluding taxes.
  | @Type | String 9 | 0..1 | Exclusive | An enumerated type that defines the type of fees applied to a rate.
  | @Code | Numeric 1 | 0..1 | 1 | Code identifying the fee. Expedia uses the following OTA code: 1 for Other fee
  | @Amount | Money | 0..1 |  | Fee Amount
  | @CurrencyCode | String 3 | 0..1 |  | Currency of the fee amount using ISO 4217 alphabetic code.
5 | GuestCounts |  | 1 |  | Collection of guest counts by age categories.
  | @IsPerRoom | Boolean | 1 | true | Indicates the guest counts are per room. Expedia sends the guest counts by age category for a room and each reservation will be for a single room.
6 | GuestCount |  | 1..3 |  | Guest count for a given guest type.
  | @AgeQualifyingCode | Numeric 2 | 1 | 8 10 | Age category. Expedia uses the following OTA codes: 8 for Child and 10 for Adults. Expedia categorize infant as children for this element (unlike for additional guest amounts, where infant is differentiated with another code).
  | @Count | Numeric 2 | 1 |  | The number of guests for the given age category.
  | @Age | Numeric | 1 |  | The age of each children. Only set for Children age category.
5 | TimeSpan |  | 1 |  | The Time Span that covers the entire room stay.
  | @Start | YYYY-MM-DD | 1 |  | Start date for entire room stay (aka Checkin date)
  | @End | YYYY-MM-DD | 1 |  | End date for entire room stay (aka checkout date). The maximum length of stay cannot exceed 28 nights.
5 | Guarantee |  | 0..1 |  | Container element for guarantee and/or payment information. Optional element. It is sent only for Expedia Collect bookings paid by Expedia VirtualCard, or for Hotel Collect bookings paid by the customer.
6 | GuaranteesAccepted |  | 1 |  | Container element
7 | GuaranteeAccepted |  | 1 |  | Container element
8 | PaymentCard |  | 1 |  | Container element that holds the actual credit card information.
  | @CardType | OTA_CodeType | 1 | 1 | Use "1" for Credit Card.
  | @CardCode | PaymentCardType | 1 | AX, DN, DS, JC, MC, VI, UP, CB | 2-letter code for the type of credit card. AX: American Express, DN: Diners Club, DS: Discover Card, JC: JCB International, MC: MasterCard, VI: Visa, UP: China Union Pay, CB: Carte Blanche. Note this is not a finite list and new codes maybe added or changed in the future.
 | @CardNumber | Numeric String Length 1 to 19 | 1 |  | The 16 digit card number.
 | @ExpireDate | MMYY | 1 |  | Expiration date of the credit card.
 | @EffectiveDate | Date format MMYY | 0..1 |  | Starting date. Not used by EVC, Maybe used for Hotel Collect bookings, but only by certain card types.
 | @SeriesCode | Numeric String Length 1 to 8 | 0..1 |  | CSV or CVV. Not used currently by EVC, but can be available to Hotel Collect bookings.
9 | CardHolderName | String Length 1 to 64 | 0..1 |  | Container element that holds the card holder name. For EVC bookings, value will be set to "Expedia VirtualCard". For Hotel Collect bookings, value will be set to the actual card holder name.
9 | Address |  | 0..1 |  | Billing address. For EVC bookings, address will be set to a static value, and may change in the future. Omitted for HotelCollect reservations, as Expedia does not collect this information anymore.
  | @FormattedInd | boolean | 0..1 | false |  Always set to false.
10 | AddressLine | String Length 1 to 64 | 1 |  | Street number and street name. Set to: 333 108th Avenue NE
10 | CityName | String Length 1 to 64 | 1 |  | City name. Set to: Bellevue
10 | PostalCode | String Length 1 to 16 | 1 |  | Zip or postal code. Set to: 98004
10 | StateProv | StateProvType Length 0 to 64 | 1 |  | State or province name; .
  | @StateCode | String Length 8 | 1 |  | State/Province codes. set to: WA
10 | CountryName | CountryNameType Length 0 to 64 | 1 |  | Country name.
  | @Code | String Length 2 | 1 |  | Two letter country codes from the ISO 3166 code list. Set to: US
5 | Total |  | 1 |  | Total charge for the entire room stay.
  | @AmountAfterTax | Money | 1 |  | Total charge including everything (daily rate, additional guest charges, taxes, fees, etc.).
 | @CurrencyCode | String 3 | 1 |  | Currency of the total charge in the ISO 4217 alphabetic format.
6 | Taxes |  | 1 |  | Total of taxes charged for entire room stay.
 | @Amount | Money | 1 |  | Total tax amount charged. This will be the sum of all <Tax> amounts in the child elements. With the current implementation Expedia only sends one child element for <Tax>, but this could change in the future.
 | @CurrencyCode | String 3 | 1 |  | Currency of total tax amount in the ISO 4217 alphabetic format.
7 | Tax |  | 1..n |  | Individual tax breakdown.
 | @Type | String 9 | 1 | Exclusive | An enumerated type that defines the way taxes are applied to a rate. Expedia sends the taxes separate from the rate, unless a property is configured as tax-inclusive, in which case taxes might appear as 0.
 | @Code | Numeric 2 | 1 | 27 | Code identifying the tax. Fixed value. 27=Miscellaneous. Ref <OTA Fee Tax Types> at the end of this document. Taxes will be combined into a single total.
 | @Amount | Money | 1 |  | Tax amount.
 | @CurrencyCode | String 3 | 1 |  | Currency of the tax amount using the ISO 4217 alphabetic code.
5 | BasicPropertyInfo |  | 1 |  | Hotel associated with the room stay. The hotel reference identifies a specific hotel by using the Chain Code, the Brand Code, and the Hotel Code.
 | @HotelCode | String 16 | 1 |  | The code that uniquely identifies a single hotel property.  Contains the Expedia Hotel ID.
5 | ResGuestRPHs |  | 0..1 |  | Collection of pointers (Reference Place Holders a.k.a. foreign keys) to establish a link between reservation guests and a given room stay.  Collection element.
6 | ResGuestRPH |  | 0..1 |  | An individual guest RPH (pointer) element. Single occurrence.
 | @RPH | Numeric 1 | 0..1 | 1 | RPH is used to link the reservation guest to the room stay. Fixed value=1, as there is only one room stay per reservation and a single guest name.
5 | SpecialRequests |  | 0..1 |  | Collection of special requests associated with the room stay. Container element.
6 | SpecialRequest |  | 0..n |  | An Individual special request. Expedia usually uses up to 6 occurrences, one for bed type, one for smoking/non-smoking preference, one for multi-room indicator, one for customer's free-form text request, one for payment instructions and one for Value Add Promotions.
 | @Language | String 5  | 0..1 |  | Language of the Text element using the RFC 3066 format. See the language code list at the end of the document. When the RequestCode="4"; (customer request to hotel), the language code will be that associated with the Expedia web site and is to be used as the language of the text found in the Text element. For all other RequestCode, the language will be set to "en-us".
 | @RequestCode | Decimal, format n.nn | 0..1 |  | Coded special request. The special request codes are defined by Expedia. The complete list is provided in the [Special Request Codes](#SpecialRequestCodes) section.
7 | Text | String 256 | 0..1 |  | Textual description of special request. In the case of RequestCode=4, this element will contain the free-form text entered by the consumer (guest). <br/> For RequestCode=5, this element will contain a special instruction for payment by credit card depending on Expedia Collect EVC or Hotel Collect. Text for EVC: "Bill only nghts bkd by Expedia to cc# @ ck-in  gst pays incid." Text for Hotel Collect: "Hotel Collect Booking - Collect Payment From Guest". 
Text for No Credit Card bookings: "This guest booked without a credit card and will pay upon arrival. Be sure to reconcile this reservation and waive the cancellation fee to avoid paying unnecessary compensation if the guest cancels or doesn’t show up."	
<br/> For RequestCode=6, this element will contain the details of the Value Add Promotion, and should be stored in the partner PMS system.
 | @Formatted | boolean | 0..1 |  | Indicates if text is formatted.
 | @Language | String 5 | 0..1 |  | Language of the Text element, as described above.
3 | ResGuests |  | 1 |  | Collection of reservation guests. Container element.
4 | ResGuest |  | 1..n |  | An individual reservation guest. Single occurrence. Only one guest name will be included with a reservation.
 | @ResGuestRPH | Numeric 1 | 1 | 1 | The reservation guest Reference Place Holder. Used to link the reservation guest to the room stay. Fixed value=1, as there is only one room stay per reservation and a single guest name.
 | @AgeQualifyingCode | Numeric 1 | 1 | 10 | Age category. Expedia only collect information about the primary guest, and it will always be an adult (code=10)
5 | Profiles |  | 1 |  | Container element for profiles.
6 | ProfileInfo |  | 1 |  | Collection of profile elements. Container element.
7 | Profile |  | 1 |  | Individual profile. Single occurrence as a ResGuest will have only one associated profile.
 | @ProfileType | Numeric 1 | 1 | 1 | Profile type. Fixed value. 1=Customer.
8 | Customer |  | 1 |  | Customer profile element.
9 | PersonName |  | 1 |  | Container element for full guest name.
10 | GivenName | String 60 | 1 |  | Guest first name.
10 | MiddleName | String 60 | 0..1 |  | Guest middle name.
10 | Surname | String 60 | 1 |  | Guest surname.
9 | Telephone |  | 0..1 |  | Element that contains the customer phone number.
 | @CountryAccessCode | Numeric 3 | 0..1 |  | Country Code.
 | @AreaCityCode | Numeric 8 | 0..1 |  | Area/city code.
 | @PhoneNumber | String 32 | 0..1 |  | Telephone number.
 | @Extension | Numeric 5 | 0..1 |  | Extension to reach a specific party at the phone number.
9 | Email |  | 0..1 |  | Element that contains the customer email address.This information is not included by default. Hotels that need to provide special check-in instructions to their guests should discuss enabling email address with their Market Manager.
3 | ResGlobalInfo |  | 1 |  | A collection of objects which are common to the entire reservation. Container element.
4 | Memberships |  | 0..1 |  | A collection of Membership objects. The <Memberships> element provides a list of reward programs which may be credited with points accrued from the guest's activity. Container element. The <Memberships> element optional since only corporate reservations will include membership information
5 | Membership |  | 1..n |  | The Membership object identifies the frequent customer reward program and (optionally) indicates points awarded for stay activity. Expedia usually uses up to 2 occurrences: one for the hotel loyalty membership program and another for the frequent flyer membership number.
 | @ProgramCode | String 6 | 1 |  | The code or name of the membership program. See <Expedia codes for Hotel Loyalty programs> and <Expedia codes for Airline Frequent Flyer Memberships> at the end of this document for complete list.
 | @AccountID | String 32 | 1 |  | The account identification number for this particular member in this particular program.
 | @TravelSector | Numeric 1 | 0..1 | 1 3 | Expedia uses the following OTA codes for travel sector: 1 for Air, 3 for Hotel
4 | HotelReservationIDs |  | 1 |  | Collection of hotel reservation and confirmation IDs. Container element.
5 | HotelReservationID |  | 1..2 |  | For reservation (OTA_HotelResNotifRQ), there will be a single occurrence of the HotelReservationID element and it will contain the information on the Expedia reservation number. For modification (OTA_HotelResModifyNotifRQ), there will be 2 occurrences, one for the Expedia booking number and another for the hotelier system's confirmation number.
 | @ResID_Type | Numeric 1 | 1 | 3 8 | Reservation ID Type. See <Confirmation Number Types> at the end of this document. Expedia uses the two following values: 3 for Confirmation, 8 for Reservation. For reservation (OTA_HotelResNotifRQ), Expedia uses "8" to send its reservation number. For modification (OTA_HotelResModifyNotifRQ), Expedia uses "3" for the Hotelier's confirmation number and "8" for the Expedia reservation number.
 | @ResID_Value | String 64 | 1 |  | This is the actual value associated with the ResID_Type. For reservation (OTA_HotelResNotifRQ), this will be the actual Expedia reservation number. For modification (OTA_HotelResModifyNotifRQ), it will be the original Expedia reservation number or the Hotelier's confirmation number. The Expedia reservation number is associated with ResID_Type="8" and the Hotelier's confirmation number is associated with ResID_Type="3". The hotel confirmation number can be alpha numeric and should not exceed 50 characters.
 | @ResID_Source | String 64 | 1 |  | A unique identifier to indicate the source system that generated the ResID_Value. For the Expedia reservation number, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system. This value should be the same as the ResponderId.
 | @ResID_Date | dateTime | 1 |  | The creation date and time of this reservation ID as the local date and time. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.

###	OTA_HotelResNotifRS
There are 2 types of responses that can be returned by the hotel partner.
- A success response is to be returned when the notification is processed successfully by the partner system. Expedia expects to get a confirmation number from a success response.
- An error response is to be returned when the notification failed to be processed by the partner system. In this case partner must include an explicit error code and a detail error message in the error response. The list of error codes are defined in the API spec.

#### Detailed definition of a successful response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResNotifRS |  | 1 |  | The OTA_HotelResNotifRS is the message used to indicate the status of processing the OTA_HotelResNotifRQ message.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | dateTime | 1 |  | Timestamp of when this message was generated. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @ResResponseType | String 9 | 1 | Committed | Status of response.
1 | Success |  | 1 |  | Presence of the Success element indicates that transaction was processed successfully.
1 | HotelReservations |  | 1 |  | Collection of Hotel Reservations. Container element.
2 | HotelReservation |  | 1 |  | A single Hotel Reservation. Single occurrence.
3 | ResGlobalInfo |  | 1 |  | A collection of objects which are common to the entire reservation. Container element.
4 | HotelReservationIDs |  | 1 |  | Collection of hotel reservation and confirmation IDs. Container element.
5 | HotelReservationID |  | 2 |  | There will be 2 occurrences of the HotelReservationID element, one for the Expedia booking number and another for the hotelier system's confirmation number.
 | @ResID_Type | Numeric 1 | 1 | 3, 8 | Reservation ID Type. See <Confirmation Number Types> at the end of this document. Expedia uses the two following values: 3 is to be used for the Hoteliers Confirmation number, 8 is to be used for echoing back the Expedia reservation number.
 | @ResID_Value | String 64 | 1 |  | This is the actual value associated with ResID_Type. The Expedia reservation number is associated with ResID_Type=8 and the Hotelier's confirmation number is associated with ResID_Type=3. The hotel confirmation number can be alpha numeric and should not exceed 50 characters.
 | @ResID_Source | String 64 | 1 |  | A unique identifier to indicate the source system which generated the ResID_Value. For the Expedia reservation number, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system.
 | @ResID_Date | dateTime | 1 |  | The creation date and time of this reservation ID as the local date and time. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.

#### Detailed Definition of an Error Response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResNotifRS |  | 1 |  | The OTA_HotelResNotifRS is the message used to indicate the status of processing the OTA_HotelResNotifRQ message.
 | @ xmlns |  | 1 | http://www.opentravel.org/OTA/2003/05 | Namespace for the OTA payload message.
 | @ EchoToken | String 20 | 1 |  | A sequence number for additional message identification, assigned by the requesting host system. It must be echoed back in the corresponding response message.
 | @ TimeStamp | dateTime | 1 |  | Timestamp of when this message was generated. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @ResResponseType | String 9 | 1 | Ignored | Status of response.
1 | Errors |  | 0..1 |  | Collection of error messages. Container element.
2 | Error | String 512 | 1..99 |  | This element contains the error message structure. Details on how to use the error structure can be found in the API spec. May have 1 or multiple instances if one or many errors are detected while processing the request message. Detailed error description is placed directly under this element. The API allows up to 512 characters for this element.
 | @ Language | language | 0..1 | en-us | Language of the textual error message.
 | @ Type | OTA_CodeType | 1 | 3 | OTA error type. The DC interface uses a generic error type for all errors. Type 3 = Business error
 | @ Code | OTA_CodeType | 1 | 450 | OTA error code. The DC interface uses a generic code for all errors. Code 450 = Unable to process
 | @ ShortText | String 4 | 1 |  | The 4 digit error code defined by the Direct Connect API. See [Error Codes for Responses](#ErrorCodes) for all supported error codes that can be specified here.

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
 | @ TimeStamp | dateTime | 1 |  | Timestamp of when this message was generated. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 1.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @ResStatus | String 6 | 1 | Commit | An enumeration that indicates the action to be taken on the request.
1 | POS |  | 1 |  | Container element for point of sale information.
  |     |  |   |  | Repeat the same POS structure as described for the OTA_HotelResNotifRQ message.
1 | HotelResModifies |  | 1 |  | Collection of Hotel Reservation Modifications. Container element.
2 | HotelResModify |  | 1 |  | A single Hotel Reservation Modification. Single occurrence.
 | @RoomStayReservation | Boolean | 1 | true | True if this reservation is reserving rooms.
 | @CreateDateTime | dateTime | 1 |  | Date and time stamp of when the modification was created. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
 | @CreatorID | String 7 | 1 | Expedia | Person or system responsible for creating the reservation. The supported value is "Expedia".
3 | UniqueID |  | 1 |  | Unique identifier of the reservation.
  |          |  |   |  | From this point on, repeat the same XML structure as described for the OTA_HotelResNotifRQ message.

### OTA_HotelResModifyNotifRS

The OTA_HotelResModifyNotifRS message has the exact same XML structure as the OTA_HotelResNotifRS message. The main difference is that the attribute @ResResponseType will have a different value ("Modified" versus "Committed") in a success response.

#### Detail Descriptions of a Success Response

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | OTA_HotelResModifyNotifRS |  | 1 |  | The OTA_HotelResModifyNotifRS is the message used to indicate the status of processing the OTA_HotelResModifyNotifRQ message.
  |   |   |   |   | Repeat the same common payload attributes as described for the OTA_HotelResNotifRS message.
  | @ResResponseType | String 9 | 1 | Modified | Status of response.
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
 | @ TimeStamp | dateTime | 1 |  | Timestamp of when this message was generated. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 1.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @CancelType | String 6 | 1 | Commit | Always set to Commit.
1 | POS |  | 1 |  | Container element for point of sale information.
  |   |   |   |   | Repeat the same POS structure as described for the OTA_HotelResNotifRQ message.
1 | UniqueID |  | 2 |  | Unique identifier of the reservation to be cancelled. There will be 2 occurrences, one to contain the original Expedia booking / reservation number, and another for the Hotelier confirmation number.
 | @Type | Numeric 2 | 1 | 10, 14 | A reference to the type of object defined by the UniqueID element. 10=Hotel, to be used to specify the hotel confirmation number. 14=Reservation, to be used to specify the Expedia booking ID.
 | @ID | String 32 | 1 |  | A unique identifying value assigned by the creating system to the reservation. This will be either the hotel confirmation number or the Expedia booking ID.
2 | CompanyName | String 64 | 1 |  | Identifies the company that is associated with the UniqueID. For the Expedia booking ID, this value will be set to "Expedia". For the Hotelier's confirmation number, Expedia and the Hotelier will determine what identifier should be for the Hotelier system.
1 | Verification |  | 1 |  | Container element for cancellation verification information. This is to ensure that the correct booking is being cancelled.
2 | PersonName |  | 1 |  | Container element for full guest name. This is the primary guest of the reservation. This information serves to validate that the correct booking is being cancelled.
3 | GivenName | String 60 | 1 |  | Guest first name.
3 | MiddleName | String 60 | 0..1 |  | Guest middle name.
3 | Surname | String 60 | 1 |  | Guest last name.
2 | Vendor | String 16 | 1..3 |  | The Vendor element is used to send the hotel code. Minimum 1 occurrence for the hotel code (Code=3). 2 blank codes might also be sent.
 | @Code | Numeric 1 | 1 | 1 or 2 or 3 | One of the Code values as listed above.
 | @CodeContext | String 32 | 1 |  | One of the CodeContext values as listed above.
2 | ReservationTimeSpan |  | 1 |  | The Time Span which covers the entire room stay.
 | @Start | YYYY-MM-DD | 1 |  | Start date of the entire room stay (aka Checkin date).
 | @End | YYYY-MM-DD | 1 |  | End date of the entire room stay (aka Checkout date).
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
 | @ TimeStamp | dateTime | 1 |  | Timestamp of when this message was generated. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
 | @ Target | NMTOKEN | 1 | Production | Indicates the message is a production message.
 | @ Version | decimal, n.nnn | 1 | 2.000 | Version of the OTA message.
 | @ PrimaryLangID | language | 1 | en-us | Primary language code.
 | @Status | String 9 | 1 | Cancelled  | Status of response.
1 | Success |  | 1 |  | Presence of the Success element indicates that transaction was processed successfully.
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
 | @ TimeStamp | dateTime | 1 |  | Timestamp of when this message was generated. Format: YYYY-MM-DDThh:mm:ss[+/-]hh:mm.
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

For booking notification messages the requestor will always be Expedia.com, and the responder will the hotel partner unique code.

## SourceID and DestinationID Value

Unlike requestor and responder that stay the same in all messages belonging to the same notification, the source and destination of each message change depending if it is an incoming or outgoing message and if it is a request or response message.

The table below lists the Source ID and Destination ID values to be used by the partner for BN interfaces.

Interface | Incoming / Outgoing | Request / Response | SourceID | DestinationID
--------- | ------------------- | ------------------ | -------- | -------------
BN | Outgoing (Expedia => partner | Request | ExpediaDC | PartnerID
   | Incoming (partner => Expedia) | Response | PartnerID | ExpediaDC

## Payload Name Value Set

This attribute indicates the name of the OTA message being sent in the XML message.
The value set used by the API is defined in the table below.

 Interface | OTA Payload Name (PayloadDescriptor/@Name)
---------- | --------------------------------------------
BN | OTA_HotelResNotifRQ
BN | OTA_HotelResNotifRS
BN | OTA_HotelResModifyNotifRQ
BN | OTA_HotelResModifyNotifRS
BN | OTA_CancelRQ
BN | OTA_CancelRS

<a name="POSBrandList"></a>

## Point of Sale Brand List

Interface | POS/Source/RequestorID/@ID for ExpediaCollect | POS/Source/RequestorID/@ID for HotelCollect
--------- | --------------------------------------------- | -------------------------------------------
BN | Expedia | A-Expedia
BN | Hotels.com | A-Hotels.com
BN | Expedia Affiliate Network | A-Expedia Affiliate Network
BN | Egencia | A-Egencia
BN | Travelocity | A-Travelocity
BN | Orbitz | A-Orbitz
BN | Wotif | A-Wotif
BN | Hotwire | A-Hotwire
BN | CheapTickets | A-CheapTickets
BN | ebookers | A-ebookers
BN | MrJet | A-MrJet
BN | Lastminute.au | A-Lastminute.au
BN | American Express Travel | A-American Express Travel
BN | Amex The Hotel Collection | A-Amex The Hotel Collection
BN | Amex FINE HOTELS AND RESORTS | A-Amex FINE HOTELS AND RESORTS
BN | Thomas Cook | A-Thomas Cook
BN | Neckermann | A-Neckermann
BN | Ving | A-Ving
BN | Tjareborg | A-Tjareborg
BN | Spies | A-Spies

<a name="SpecialRequestCodes"></a>

## Special Request Codes
Code | Value
---- | -----
1.1 | 7 beds
1.2 | 9 beds
1.3 | 10 beds
1.4 | 11 beds
1.5 | Multiple Beds
1.13 | 1 double bed
1.14 | 1 king bed
1.15 | 1 queen bed
1.18 | 1 twin bed
1.21 | 2 double beds
1.22 | 2 king beds
1.23 | 2 queen beds
1.25 | 2 twin beds
1.30 | 3 twin beds
1.34 | 4 twin beds
1.40 | 1 bed
1.41 | 2 beds
1.42 | 1 single bed
1.43 | 2 single beds
1.44 | 3 single beds
1.45 | 4 single beds
1.46 | 1 full bed
1.47 | 2 full beds
1.48 | 1 trundle bed
1.49 | 1 murphy bed
1.50 | 1 bunk bed
1.51 | 1 sofa bed
1.52 | 2 sofa beds
1.53 | 3 sofa beds
1.54 | 1 Japanese futon
1.55 | 3 beds
1.56 | 3 king beds
1.57 | 3 queen beds
1.58 | 4 beds
1.59 | 4 king beds
1.60 | 4 queen beds
1.61 | 1 king and 1 single bed
1.62 | 1 queen and 1 single bed
1.63 | 1 double and 1 single bed
1.64 | 1 king and 2 single beds
1.65 | 1 queen and 2 single beds
1.66 | 1 double and 2 single beds
1.67 | 1 king and 1 sofa bed
1.68 | 1 queen and 1 sofa bed
1.69 | 1 double and 1 sofa bed
1.70 | 2 twin and 1 sofa bed
1.71 | 2 single and 1 sofa bed
1.72 | 1 king and 1 queen bed
1.73 | 2 double and 1 single bed
1.74 | 2 king and 1 single bed
1.75 | 1 double and 1 twin bed
1.76 | 6 beds
1.77 | 5 beds
1.78 | 2 extra-long double bed
1.79 | 1 semi-double bed
1.80 | 1 pullout bed
1.81 | 4 double and 1 queen sofa bed
1.82 | 2 king and 1 queen sofa bed
1.83 | 2 double and 1 sofa bed
1.84 | 4 double beds
1.85 | 3 double beds
1.86 | 2 double and 2 single beds
1.87 | 1 queen and 1 double bed
1.88 | 2 queen and 1 sofa bed
1.89 | 4 double and 1 sofa bed
1.90 | 2 king and 1  sofa bed
1.91 | Quadruple Occupancy
1.92 | Triple Occupancy
1.93 | Double Occupancy
1.94 | Single Occupancy
1.96 | 1 double or 2 twin beds
1.97 | 1 double or 1 twin bed
1.98 | 1 king and 1 double bed
1.99 | 1 double and 1 bunk bed
1.100 | 1 double and 2 bunk beds
1.101 | 1 double and 2 single sofa beds
1.102 | 1 double and 2 sofa beds
1.103 | 1 double and 3 single beds
1.104 | 1 double and 3 sofa beds
1.105 | 1 double, 1 single, and 1 bunk bed
1.106 | 1 double, 1 single, and 1 sofa bed
1.107 | 1 double, 1 sofa bed, and 1 bunk bed
1.108 | 1 double, 2 single, and 1 double sofa bed
1.109 | 1 double, 2 single, and 1 sofa bed
1.110 | 1 double, 3 single, and 1 sofa bed
1.111 | 1 double, 3 twin, and 3 queen beds
1.112 | 1 king and 1 bunk bed
1.113 | 1 king and 2 queen beds
1.114 | 1 king and 4 single beds
1.115 | 1 king, 1 queen, and 1 sofa bed
1.116 | 1 king, 1 queen, and 3 single beds
1.117 | 1 king, 1 sofa bed, and 1 murphy bed
1.118 | 1 king, 2 double, and 1 sofa bed
1.119 | 1 king, 2 single, and 1 sofa bed
1.120 | 1 queen and 1 bunk bed
1.121 | 1 queen and 1 murphy bed
1.122 | 1 queen and 2 bunk beds
1.123 | 1 queen and 2 double beds
1.124 | 1 queen and 2 sofa beds
1.125 | 1 queen and 3 single beds
1.126 | 1 queen and 4 single beds
1.127 | 1 queen, 1 bunk bed, and 1 sofa bed
1.128 | 1 queen, 1 murphy bed, and 1 sofa bed
1.129 | 1 single and 1 sofa bed
1.130 | 1 sofa bed and 1 bunk bed
1.131 | 2 bunk beds
1.133 | 2 double and 2 sofa beds
1.134 | 2 Japanese futons
1.135 | 2 king and 1 sofa bed
1.136 | 2 king and 2 queen beds
1.137 | 2 king, 2 single, and 1 bunk bed
1.138 | 2 king, 2 single, and 1 sofa bed
1.139 | 2 queen and 1 bunk bed
1.140 | 2 queen and 1 single bed
1.142 | 2 queen and 1 trundle bed
1.143 | 2 queen and 2 single beds
1.144 | 2 single and 1 bunk bed
1.146 | 2 single and 2 bunk beds
1.147 | 2 single and 2 sofa beds
1.148 | 2 single and 3 sofa beds
1.149 | 3 double and 1 sofa bed
1.150 | 3 Japanese futons
1.151 | 3 queen and 1 sofa bed
1.152 | 3 queen and 2 single beds
1.153 | 3 queen, 2 single, and 2 bunk beds
1.154 | 4 Japanese futons
1.155 | 4 single and 1 sofa bed
1.156 | 4 single and 2 sofa beds
1.157 | 5 Japanese futons
1.158 | 5 queen and 4 single beds
1.159 | 6 Japanese futons
1.160 | 7 Japanese futons
1.161 | 8 Japanese futons
1.163 | 3 queen, 1 double, and 3 single beds
1.164 | 3 bunk beds
1.165 | 4 bunk beds
1.166 | 1 queen, 1 double, and 1 sofa bed
1.167 | 1 queen, 2 single, and 2 sofa beds
1.168 | 1 king, 1 queen, and 1 twin bed
1.169 | 1 king, 1 queen, and 2 twin beds
1.170 | 1 king, 2 queen, and 2 twin beds
1.171 | 1 king, 4 single, and 1 sofa bed
1.172 | 2 king, 4 single, and 1 sofa bed
1.173 | 2 king, 2 queen, and 2 twin beds
1.174 | 2 king, 2 double, and 1 sofa bed
1.175 | 1 king, 1 queen, 4 single, and 1 sofa bed
1.176 | 1 king, 2 double, 1 twin, and 2 sofa beds
1.177 | 1 double, 2 single, and 1 bunk bed
1.178 | 1 king, 1 queen, and 6 twin beds
1.179 | 1 king, 2 queen, 2 full, 3 twin, and 1 bunk bed
1.180 | 1 king, 3 queen, and 1 sofa bed
1.181 | 2 double, 2 single, and 1 sofa bed
1.182 | 2 king and 4 single beds
1.183 | 2 king, 2 queen, and 1 sofa bed
1.184 | 2 queen, 2 single, and 2 sofa beds
1.185 | 8 beds
1.186 | 1 double and 4 bunk beds
1.187 | 1 double, 1 bunk, and 1 sofa bed
1.188 | 1 double, 1 sofa bed, and 1 trundle bed
1.189 | 1 double, 2 single, 1 sofa bed, and 1 trundle bed
1.190 | 1 king and 1 murphy bed
1.191 | 1 king, 1 queen, 2 full, and 1 bunk bed
1.192 | 1 king, 1 single, and 1 sofa bed
1.193 | 1 queen, 1 full, and 2 sofa beds
1.194 | 1 queen, 1 full, 1 single, and 1 sofa bed
1.195 | 1 single and 1 bunk bed
1.196 | 2 queen, 1 full, and 1 bunk bed
1.197 | 2 queen, 2 full, 4 bunk beds, and 1 sofa bed
1.198 | 3 queen and 1 single bed
1.199 | 3 single and 1 sofa bed
1.200 | 4 single and 3 double beds
1.201 | 2 king and 2 sofa beds
1.202 | 1 king and 2 full beds
1.203 | 1 single and 1 trundle bed
1.204 | 1 double and 12 single beds
1.205 | 1 double, 2 bunk, and 1 sofa bed
1.206 | 1 double, 2 single, and 4 sofa beds
1.207 | 1 double, 4 single, and 1 sofa bed
1.208 | 1 double, 5 single, and 2 sofa beds
1.209 | 1 king and 2 double beds
1.210 | 1 king and 3 bunk beds
1.211 | 1 king and 3 queen beds
1.212 | 1 king, 1 full, and 2 bunk beds
1.213 | 1 king, 1 full, 1 single, and 1 sofa bed
1.214 | 1 king, 2 full, 2 single, and 1 sofa bed
1.215 | 1 king, 2 queen, and 1 murphy bed
1.216 | 1 king, 2 queen, 2 single, and 2 sofa beds
1.217 | 1 queen, 1 full, 2 single, and 1 sofa bed
1.218 | 1 queen, 1 single, and 1 sofa bed
1.219 | 1 queen, 2 double, and 1 single bed
1.220 | 1 queen, 2 single, and 1 sofa bed
1.221 | 1 sofa bed and 1 murphy bed
1.222 | 12 beds
1.223 | 2 double and 2 bunk beds
1.224 | 2 double, 1 single, and 1 sofa bed
1.225 | 2 king, 1 queen, and 1 sofa bed
1.226 | 2 king, 1 queen, and 4 single beds
1.227 | 2 king, 2 queen, and 1 single bed
1.228 | 2 king, 2 queen, and 4 single beds
1.229 | 2 queen , 2 single, and 1 sofa bed
1.230 | 2 queen and 1 murphy bed
1.231 | 2 queen and 2 sofa beds
1.232 | 2 queen, 2 double, and 2 single beds
1.233 | 3 double and 1 single bed
1.234 | 3 king, 4 single and 3 sofa beds
1.235 | 4 double and 1 bunk bed
1.236 | 4 double and 1 single bed
1.237 | 4 single and 2 bunk beds
1.238 | 1 queen, 1 double, and 1 murphy bed
1.239 | 1 queen, 1 sofa bed, and 1 Japanese futon
1.240 | 1 queen and 1 Japanese futon
1.241 | 1 king and 3 double beds
1.242 | 2 king and 3 double beds
1.243 | 2 king and 5 double beds
1.244 | 2 king, 5 double, and 2 single beds
1.245 | 2 king, 6 double, and 2 single beds
1.246 | 4 double, 2 single, and 1 sofa bed
1.247 | 2 double, 2 single, and 2 sofa beds
1.248 | 3 double and 2 sofa beds
1.249 | 3 double, 5 single, and 1 sofa bed
1.250 | 3 single and 1 bunk bed
1.251 | 2 double and 3 single beds
1.252 | 2 queen and 4 single beds
1.253 | 3 queen and 4 single beds
1.254 | 4 single and 1 double bed
1.255 | 2 king and 1 double bed
2.1 | Non-smoking
2.2 | Smoking
3 | Multi room booking and Mixed Rate Bookings
4 | Free text
5 | payment instruction
6 | Value Add Promotions


<a name="NackCodes"></a>
## Error Codes for Nack

Error codes for Nack are generated by the partner upon receiving the BN request from Expedia.

After receiving a Nack from a partner, Expedia will retry to send the request until a response (success or OTA error) is received or the maximum number of retries is reached. Expedia will retry the message until it expires.

Error Code | Error Text | Error Condition
---------- | ---------- | ---------------
2000 | Missing header | The message receiver detected that mandatory attribute value is missing in the message header.
2001 | Invalid header | The message receiver detected that invalid values are sent in the message header.
2002 | Unable to parse the message | The message receiver is not able to parse the message header.
4000 | Software error | The message receiver encountered internal software error while processing the message.
5000 | Database error | The message receiver encountered database error while processing the message.
6000 | Unknown error | The message receiver encountered unknown error while processing the message.

<a name="ErrorCodes"></a>
##	Error Codes for Response

Upon receiving the error response, the notification will fall back to fax or email automatically. This means Expedia will send the notification by fax or email to the partner. There will be no re-send for failed notifications.
Only these error codes are acceptable in the response message for booking notification.

Error Code | Error Text | Error Condition | Data Source | Applicable to
---------- | ---------- | --------------- | ------------| -------------
2002 | Unable to parse the message | The message receiver is not able to parse the message body. | OTA Payload | Booking, Modify, Cancel
3200 | The booking was already cancelled | The partner system could not perform the cancellation because the booking is already cancelled or does not exist anymore in the partner system. Expedia recommends that partners do not use this code. If Expedia sends a cancellation request for a booking already confirmed, we suggest that partners return a successful response with the cancellation number of the existing cancellation. | UniqueID/@ID | Cancel
3201 | The supplier confirmation number is missing or invalid | The partner system could not modify or cancel the booking because it cannot find the original booking for the confirmation number sent in the notification. | HotelReservationID/@ResID_Value, or UniqueID/@ID | Modify, Cancel
3202 | The property Identifier is missing or invalid | The partner system could not create or modify the booking because the property cannot be identified by the chain code, code, brand code and hotel code sent in the notification. | HotelCode, BrandCode, ChainCode | Booking, Modify
3203 | The Room Type Code is missing or invalid | The partner system could not create or modify the booking because no match in the partner system for the room type code sent in the notification. | RoomRate/@RoomTypeCode | Booking, Modify
3204 | The Rate Plan Code is missing or invalid | The partner system could not create or modify the booking because no match in the partner system for the rate plan code sent in the notification. | RoomRate/@RatePlanCode | Booking, Modify
3205 | The guest name is missing | The partner system could not create or modify the booking because guest name is not sent in the notification. | PersonName/@Surname | Booking, Modify
3206 | The Check-in date is missing or invalid | The partner system could not create, modify or cancel the booking because check-in date is not sent in notification or the check-in date is in the past. | TimeSpan/ @Start | Booking, Modify, Cancel
3207 | The check-out date is missing or invalid | The partner system could not create, modify or cancel the booking because check-out date is not sent in notification or the check-out date is in the past. | TimeSpan/ @End | Booking, Modify, Cancel
3208 | The guest count is missing or invalid | The partner system could not create or modify the booking because guest count is not sent in the notification, or guest count exceeds max occupancy. | GuestCount/@Count | Booking, Modify
3209 | Duplicate booking | The partner system detected a duplicate booking based on its duplicate checking logic.  |  | Booking
3300 | Unable to process the credit card information | Generated by hotel partner for errors encountered when processing the credit card information sent in the xml for booking or modify notifications. Card number is invalid. Card effective or expiration date is invalid. | PaymentCard | Booking, Modify
3301 | Payment type not accepted or payment type change not allowed | Generated by hotel partner for the following error scenarios: If the payment type is not permitted by the hotel, for example credit card payment is not setup in the partner system for the given hotel. If the partner system cannot handle payment type change to an existing booking, for example a credit card is sent by Expedia for a booking made prior to the EVC activation. | PaymentCard | Booking, Modify

