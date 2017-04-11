# Booking Retrieval API Definition

## Introduction

Expedia provides a program interface for EQC partners to retrieve bookings made on any Expedia Inc. Points of sale. EQC partners can retrieve pending bookings (reservations, modifications, or cancellations) as frequently as they want.
If an EQC partner does not retrieve the booking information electronically, Expedia sends the information to the hotel by fax or email

### Supported Features for Booking Retrieval

The following list is an overview of features that are are included and not included in the booking retrieval API

Included
* Frequent retrieval of pending bookings (every hour or less)
* Retrieval of bookings by Expedia booking ID
* Retrieval of all the bookings for a time period
* Receive most of the information currently available on fax through an XML message 
* Child age(s) if any child in the room (on demand)
* Expedia VirtualCard payment details

Not Included
* Room type name (only ID's are returned)
* Rate plan name (only ID's are returned)
* Pricing Model used by the property

---

## Booking Retrieval Request

The booking retrieval request message (BR RQ) allows EQC partners to retrieve bookings using different criteria:
* Retrieve pending bookings (reservations, modifications or cancellations that were not already retrieved)
* Retrieve a single booking by its booking ID
* Retrieve all the bookings that were created, modified, or cancelled in the past X days (X can be any number between 1 and 30)

Booking transactions (reservations, modifications, cancellations) are always made available for retrieval in sequence. A booking that has more than one transaction pending retrieval will only return the first booking transaction pending retrieval. As an example, for a booking that was initially created, then modified twice before any booking retrieval request is received:
1. The new reservation will be returned first
2. The “pending modification 1” will be returned with the next booking retrieval request
3. The “pending modification 2” will be returned with the 3rd booking retrieval request

Bookings that revert to fax or email cannot have their latest information requested through Expedia QuickConnect anymore.


### Booking Retrieval Request Schema Overview

![BR RQ XML MESSAGE](/images/BR-RQ-Schema-Diagram.jpg)

### Booking Retrieval Request Complete Schema Definition
_Legend: L= Level; O = Optional_

L   | Data element | Data type | O   | Description | EQC validations
--- | ------------ | --------- | --- | ----------- | ---------------
0 | BookingRetrievalRQ | - |  | Root element |  
0 | @xmlns | URI |  | <p>Namespace to which this message belongs. Also used to validate version of schema on which this message is based.</p><p>Current namespace for BR messages is</p> <p>http://www.expediaconnect.com/EQC/BR/2014/01</p> |Valid namespace, defined by at least one version of BR schema.
1 | Authentication|-||Information to validate and grant access to Expedia QuickConnect electronic interface – stored in next two attributes.
1|@username|String||Username for Expedia QuickConnect login (case sensitive), provided by Expedia.|<ul><li>Minimum length: 4 </li> <li>Maximum length: 30</li><li>Username exists - User is allowed to access Expedia QuickConnect </li></ul>
1|@password|String||Password for Expedia QuickConnect login (case sensitive), provided by Expedia.|<ul><li>Minimum length: 6</li><li>Maximum length: 30</li><li>Password fits with the username</li></ul>
1|Hotel|-|*|Information about Hotel Note that if a hotel is not specified, Expedia will return all the bookings linked to the authentication username. If this user has access to more than one hotel, bookings for all the hotels to which the user has access will be returned.|
1|@id|Integer||Hotel ID defined by Expedia and uniquely identifying a property in Expedia system.|<ul><li>Hotel ID in Expedia system is assigned to the credentials provided in Authentication node.</li><li>Positive integer of 14 digits or less.</li></ul>
1|ParamSet|-|*|Container. If this element appears, there should be one parameter as specified below.|
2|Booking|-|*||
2|@id|Integer||Booking ID, used to retrieve most recent data for a specific booking.|- Element cannot be used at the same time with the “NbDaysInPast” element. - Positive integer of 14 digits or less.
2|Status|-|*|Only available in version 2014/01. Optional. If provided, will return bookings with the statuses listed. Can list up to 3 statuses. If same status is repeated more than once, EQC will ignore the repetitions. |
2|@value|Enum|| possible values, but only 3 are supported today:: -pending: will return bookings that are in a pending state at the time the BR request came. These bookings are returned for the very first time. -retrieved: will return bookings that were already previously retrieved via BR, but not confirmed via BC yet -confirmed: will return bookings that were both retrieved and confirmed via BC already. expired: not supported yet, if used, will be ignored for the time being.If the “confirmed” status is used without NbOfDaysInPast, we will default NbOfDaysInPast to 30 and do as if the request is for confirmed bookings for the past 30 days.|- Value provided is one of the  allowed in enumeration.
2|NbDaysInPast|Integer|*|Optional field allowing EQC partner to retrieve all bookings made in the past X days (X can be anything between 1 and 30). The last occurrence of bookings created, modified or cancelled between now and the past X days is returned. Note: The values represent 24-hour blocks, so, for instance, a value of “2” is requesting all bookings made in the last 48 hours. |<ul><li>Minimum value: 1</li><li>Maximum value: 30</li><li>Element cannot be used at the same time as the @id element.</li></ul>
---
## Booking Retrieval Response

The booking retrieval response message (BR RS) contains:
* 0 to 125 bookings. 125 is the maximum number of bookings that can be returned by Expedia QuickConnect in a single response message. If more than 125 bookings were found, the most recently created 125 bookings are returned. If a request was made for pending bookings, and more than 125 bookings were pending retrieval, a subsequent retrieval request will return the remaining bookings pending retrieval. If a request was made for all bookings made over the last X days and there were more than 125 bookings to return, it is currently not possible to retrieve all bookings but only the first 125 bookings created most recently.

OR

* An error message


### Booking Retrieval Response Schema Overview

![BR RS XML MESSAGE](/images/BR-RS-Schema-Diagram.png)

### Booking Retrieval Response Complete Schema Definition
 L |Data element|Data type| O |Description
---|------------|---------|---|---------
0|BookingRetrievalRS|-||Root element
0|@namespace|URI||<p>Namespace to which this message belongs. Also used to validate version of schema on which this message is based. Current namespace for BR messages is</p><p>http://www.expediaconnect.com/EQC/BR/2014/01</p>
1|Bookings||*|<p>Container element for bookings. If this node appears alone, without any child, the request is successful but there are no bookings matching request.</p><p>If this element is present, “Error” element cannot be present.</p>
1|Error|String|*|Description of error that occurred during retrieval. Potential causes:<ul><li>schema validation (invalid XML, invalid fields according to schema or other)</li><li>invalid parameters specified by the EQC partner (username, password, booking ID)</li><li>error due to Expedia QuickConnect.</li></ul><p>Minimum length: 0. Maximum length: 1024. If this element is present, the element “Booking” cannot be present.</p>
1|@code|Integer||Code corresponding to the type of error detected.
2|Booking|-|*|Each booking occurrence represents an Expedia Inc. Point of Sale booking transaction. If more than one booking is returned, they will be sorted by creation date, from the more recent to the oldest.
2|@id|Integer||<p>Booking ID generated by Expedia. Uniquely identifies a booking. Should be used to link modifications and cancellations to initial bookings in hotel system - must be kept in hotel system.</p><p>Positive integer of 14 digits or less</p>
2|@type|Enum||Type of booking record. Possible values are: "Book" for new reservations, "Modify" for modified bookings and "Cancel" for cancelled bookings.
2|@createDateTime|DateTime||Date and time when this booking transaction was made on Expedia, including time zone information. <p>Timestamp as defined in ISO 8601 format. Will always be in the following format: YYYY-MM-DDThh:mm:ssZ  (time is UTC). </p>
2|@source|String||Booking source (Expedia Inc brand on which the booking was made), namely:<p><table><tr><td><strong>Expedia Collect Bookings</strong></td><td><strong>Hotel Collect Bookings</strong></td></tr><tr><td>Expedia</td><td>A-Expedia</td></tr><tr><td>Hotels.com</td><td>A-Hotels.com</td></tr><tr><td>Expedia Affiliate Network</td><td>A-Expedia Affiliate Network</td></tr><tr><td>Egencia</td><td>A-Egencia</td></tr><tr><td>Travelocity</td><td>A-Travelocity</td></tr><tr><td>Orbitz</td><td>A-Orbitz</td></tr><tr><td>Wotif</td><td>A-Wotif</td></tr><tr><td>Hotwire</td><td>A-Hotwire</td></tr><tr><td>CheapTickets</td><td>A-CheapTickets</td></tr><tr><td>ebookers</td><td>A-ebookers</td></tr><tr><td>MrJet</td><td>A-MrJet</td></tr><tr><td>Lastminute.au</td><td>A-Lastminute.au</td></tr><tr><td>American Express Travel</td><td>A-American Express Travel</td></tr><tr><td>Amex The Hotel Collection</td><td>A-Amex The Hotel Collection</td></tr><tr><td>Amex FINE HOTELS & RESORTS</td><td>A-Amex FINE HOTELS & RESORTS</td></tr></table></p><p>Values for the booking source may grow or change in the future.</p><p>It is required for the EQC partner to pass on notifications from each of these booking sources to the hotel. Note that this value is also included in notifications that expire and fall back to fax or email.</p>
 |@status|Enum|*|<p>Only available in version 2014/01.</p><p>Status of the booking transaction at the time of the retrieval request. Possible values are:<ul><li>pending: message is retrieved for the first time.</li><li>retrieved: message was already retrieved at least once but not confirmed yet</li><li>confirmed: message was already retrieved and confirmed via BC</li></ul><p>This attribute is listed as optional due to only being returned through the 2014/01 namespace, where it will always be returned. For requests made with the previous namespace, this attribute will never be returned.</p>
  |@confirmNumber|String|*|<p>Only available in version 2014/01. Partner confirmation number for this booking.</p><ul><li>For new reservations: this would only be available with reservations in the confirmed status. Until a reservation is confirmed, this attribute is not returned.</li><li>For modifications and cancellations in the pending or retrieved state, this attribute will contain the confirmation number supplied for the initial reservation message. For modification or cancellations in the confirmed state, it will contain the newest confirmation number received.</li></ul>
3|Hotel|||Information about Hotel
3|@id|Integer||Hotel ID defined by Expedia and uniquely identifying a property in Expedia system.
3|RoomStay|-||Details on the room stay including Guest Counts, Time Span of the stay, daily charge for each day of the stay and the total charge for the room stay including taxes.
3|@roomTypeID|String||<p>Room type ID defined by Expedia and mapped by hotel in its system.</p><p>Minimum length: 1</p><p>Maximum length: 50</p>
3|@ratePlanID|String||<p>Rate Plan ID defined by Expedia and mapped by the hotel in its system.</p><p>Minimum length: 1</p><p>Maximum length: 50</p>
4|StayDate|-||
4|@arrival|Date||Arrival date of the customer (check in date)
4|@departure|Date||Departure date of the customer (check out date)
4|GuestCount|-||
4|@adult|Integer||<p>Number of adults in the room</p><p>Minimum value: 0</p><p>Maximum value: 28</p>
4|@child|Integer|*|<p>Number of children in room (including infants). If no children, element does not appear in the message.</p><p>Minimum value: 0</p><p>Maximum value: 28</p>
5|Child|-|*|<p>0 to 6 occurrences of this container.</p>This element will appear to hotels specifically enabled to see it. If you are not receiving this and are interested in getting the information, please contact rollout@expedia.com
5|@age|Integer||<p>Age of each individual child sharing the room.</p><p>Minimum value: 0</p><p>Maximum value: 18</p>
4|PerDayRates|-||This element appears once per day of stay and indicates the rate for each day.
4|@currency|String||3-letter currency code assigned to property on Expedia Partner Central. Based on ISO 4217 specification.
5|PerDayRate|-||1 to 28 occurrences of this container.
5|@stayDate|Date||Date to which the room rate applies
5|@baseRate|Decimal||<p>Base rate for one day of stay, including promotional discounts if any. Expedia always return net rate for Expedia Collect bookings, even when the propertis managing LAR.</p><p>Expedia will return sell rate for Hotel Collect bookings, even when the property is managing net rate.</p><p>Minimum value: 0</p>
5|@extraPersonFees|Decimal|*|<p>Extra person fees included in the total amount, if any.</p><p>Minimum value: 0</p>
5|@hotelServiceFees|Decimal|*|<p>Hotel Service Fees / Service charges included in the total amount, if any.</p><p>Minimum value: 0</p>
5|@promoName|String|*|<p>Name of promotion applied to base rate. Promotions and their notification codes are set up by the Expedia Market Manager for the property.</p><p>If property uses Expedia Flexible Rate, the string will begin with “EFR*” when an Expedia Flexible Rate is applied to this stay date.</p><p>Promotions may also be referred to as DRRs, or Dynamic Rate Rules.</p><p>String length will not exceed 80 characters.</p>
4|Total|-||Container element
4|@amountAfterTaxes|Decimal|*|Total amount inclusive of taxes. It is the sum of daily rates for each day of stay, extra person fees if any, hotel service fees if any, promotional discounts if any and taxes if applicable. Expedia always return net rates for Expedia Collect bookings, even when properties are managing LAR.<p>Minimum value: 0</p>
4|@amountOfTaxes|Decimal|*|Amount of taxes included in the @amountAfterTaxes.<p>Minimum value: 0</p>
4|@currency|String||3-letter currency code assigned to property on Expedia Partner Central (per ISO 4217 specification)
4|PaymentCard|-|*|Applicable to booking paid by credit card. Contains details of the credit card, including card type, card number, expiration date and card holder name and address.<p>For Expedia Collect Booking, this node will contain the Expedia Virtual Card (EVC) information. </p><p>For Hotel Collect booking, this node will contain the customer credit card information. </p>
4|@cardCode|String||2-letter code for the credit card type <p><table><tr><td>VI</td><td>Visa</td></tr><tr><td>MC</td><td>MastrerCard</td></tr><tr><td>AX</td><td>American Express</td></tr><tr><td>DS</td><td>Discover Card</td></tr><tr><td>CA</td><td>MasterCard</td></tr><tr><td>JC</td><td>Japan Credit Bureau</td></tr><tr><td>DN</td><td>Diners Club</td></tr></table></p>
4|@cardNumber|String||Credit card number<p>String length 1-19</p>
4|@seriesCode|String|*|CVV/CSV code.<p>String length 1-8</p>
4|@expireDate|MMYY||Expiration date of the credit card.
5|CardHolder|-|*|Card holder name and billing address. For EVC bookings, billing address provided is Expedia US Headquarters. For HotelCollect bookings, the address provided is a fake/dummy address because Expedia does not collect customer address anymore.
5|@name|String||Cardholder name<p>String length 1-64</p>
5|@address|String||Street number and street name<p>String length 1-64</p>
5|@city|String||City name<p>String length 1-64</p>
5|@stateProv|String||State or province name<p>String length 1-64</p>
5|@country|String||2 letter country code, ISO 3166 code list.
5|@postalCode|String||Postal or zip code<p>String length 1-16</p>
3|PrimaryGuest|-||Container
4|Name|-||Container
4|@givenName|String||First Name of the main customer (guest) for this room booking.<p>String length does not exceed 60 characters</p>
4|@middleName|String|*|Middle Name of the main customer (guest) for this room booking, if any.<p>String length does not exceed 60 characters</p>
4|@surname|String||Surname (last name) of the main customer (guest) for this room booking.<p>String length does not exceed 60 characters</p>
4|Phone|-|*|Container for phone number of main customer (guest) for this booking, when included.
4|@countryCode|Integer|*|Phone number country code <p>Max size: 1,000</p>
4|@cityAreaCode|Integer|*|Phone number city area code <p>Max size: 100,000,000</p>
4|@number|String||Phone number of the guest, if available <p>Max length: 32</p>
4|@extension|Integer|*|Phone number extension <p>Max size:1,000,000</p>
4|Email|String|*|Contains customer email address. <p>This information is not included by default. Hotels that need to provide special check-in instructions to their guests should discuss enabling email address with their Market Manager.</p><p>Max length: 128 </p>
3|RewardProgram|-|*|Contains reward program code and customer account ID for the program. Customer can specify up to two programs at reservation. <p>0 to 2 occurrences of this element in the message.</p>
3|@code|Enum||Reward program code, as defined by Expedia.
3|@number|String||Customer's account no - unique ID from reward program card number <p>String length does not exceed 32 characters</p>
3|SpecialRequest|String|*|Special Request made by the customer. Can have up to 6 different special requests, and each one can be one of 6 types:<ul><li>Bedding type</li><li>Smoking/Non-smoking</li><li>Multi-room booking</li><li>Free text (guest comments entered at booking on Expedia)</li><li>Payment instructions</li><li>Value Add Promotions</li></ul><p>Types are identified by code attribute on this element.</p><p>String length does not exceed 256 characters.</p>
3|@code|Enum||Expedia-defined code associated to special request: <ul><li>(1.x) bedding preferences w/ different codes for beddings</li><li>(2) smoking/no smoking </li><li>(3) indication of multi room bookings</li><li>(4) free text</li><li>(5) payment instructions</li><li>(6) Value Add Promotions</li></ul><p>Please visit the [Special Request Codes](#SpecialRequestCodes) section for an exhaustive list of possible code. .</p>

### Booking Retrieval Response Types

A booking made on Expedia can evolve over time, as many times as needed, before the customer checks in to the hotel, or even in rare cases after the check-in date. For example, the booking could be changed to remove or add a day for the stay.
The booking can also be cancelled by the customer, or by Expedia customer support

#### New Reservation

A new booking or reservation contains all the information that the guest specifies while booking on one of Expedia points of sale. This information is at a minimum, the mandatory information in the BR RS message. On the other end, the maximum amount of information that can be found in a new reservation includes all the mandatory and optional elements, and it also includes repetitions of the elements that can be repeated (such as per day rate – up to 28 days, special requests – up to 6, reward programs – up to 2).

#### Modified Booking

A modified booking contains the latest information about the booking (whether new information, modified information or information that was on the original booking. A modified booking looks similar to a new one because it contains the same types of booking information, except that the “booking type” attribute of the “Booking” element is changed from “Book” to “Modify. 

Example of a booking element for a new booking:
```xml
<Booking id="324654" type="Book" createDateTime="2006-10-25T09:30:47Z" source="Expedia">
</Booking>
```
Example of a booking element for a new booking
```xml
<Booking id="44654" type="Modify" createDateTime="2006-10-27T11:33:19Z" source="Expedia">
</Booking>
```
#### Cancelled booking
A cancelled booking does not contain all information that can be found for a new or modified booking. It only contains the critical information required to cancel the booking in the hotel system. EQC partners should pay special attention to how they handle cancel messages.

The booking type identifies a cancelled booking:
```xml
<Booking id="4654" type="Cancel" createDateTime="2006-10-30T19:32:11Z" source="Expedia">
</Booking>
```
The booking message for cancellation contains the minimum set of mandatory information specified by the BR RS XML message but none of the optional information that may have been specified in the initial message, such as special requests, extra person fees, reward program or other. Some of the mandatory information included in the cancel message is set to 0:

Element / Attribute | Value
---|---
RoomStay@roomTypeId | 0
RoomStay@ratePlanId | 0
PerDayRate@baseRate	| 0.00
Total@amountAfterTaxes | 0.00
Total@amountOfTaxes	| 0.00
_Information set to zero in a cancel message_

In order to identify the booking to cancel in its system, the hotel should use the booking ID as the key. If this is not possible, the guest name and the dates of the stay should be identical to the latest version of the booking prior to the cancellation. 
To ensure the right booking is being cancelled the hotel should verify the booking ID as well as the guest name and the original check-in and check-out date of the booking.If any cancellation fee is due to the hotel, the amount to be charged is based on the hotel cancellation policy the partner currently has in place for the affected rate plan, as configured by the Expedia Market Manager. This fee is also chargeable to the Expedia VirtualCard number provided in the new or modified booking response that preceded the reservation cancellation and the card can be charged on the original arrival date.

## Error Handling
You may experience technical difficulties when developing and trying to connect to Expedia QuickConnect BR. This section addresses the most common errors and problems that an EQC partner might encounter.

### Network/System Communication Issues

There are many different error scenarios related to communication and authentication. Here are the possible scenarios, for any of the supported EQC APIs.

#### Connection Cannot Be Established
For many different reasons, attempting to connect to Expedia QuickConnect might not work. If the problem is:
- Connection timeout (before establishing connection)
- Cannot resolve host name
- Cannot establish connection

Before looking for assistance, the EQC partner should:
- Verify the URL used to connect to Expedia QuickConnect and make sure the address starts with https://
- Verify the domain name, and make sure that the address you are using is the right one for the environment you are targeting (do not try to send QA information to production, or vice-versa)
- If the EQC partner's system is behind a firewall, make sure that port 443 is opened for connection to Expedia's production environment (contact Expedia if you don't know what the URL to the production environment is)

It is also possible to fail to obtain a connection because Expedia QuickConnect servers cannot accept any more connections than the ones currently established to other EQC partners. In this case, the EQC partner will receive a communication error saying: Connection refused.

When this happens, the EQC partner should simply enter in retry mode.

#### SSL Certificate Validation Problems
EQC partners developing in Java should use version 1.4.2_13 or more recent to avoid issues with certificate signing authorities. If EQC partners prefer to keep using an older version of Java or in-house SSL libraries, they need to import the Entrust CA certificate.
- Entrust CA common name CN = Entrust.net Certification Authority (2048).
- To manually import the Entrust.net Certification Authority (2048) Certificate, download the CA certificate at https://www.entrust.net/downloads/root_request.cfm.


#### System errors retry recommendation

Whenever Expedia BR or BC return system errors (error code >= 4000), it is up to the EQC partner to decide what is preferable.

#### Connection Established, No Response

If the EQC partner's system manages to establish a connection to Expedia QuickConnect servers, but is not getting a response, the EQC partner should:
- Make sure that the EQC partner's system is not closing the connection too early. Some retrieval queries can take time, and Expedia will keep the connection active for up to 60 seconds. Therefore, the EQC partner should keep the connection open for at least 60 seconds.
- Make sure the content length specified in the HTTPS header corresponds to the actual length of the HTTPS request. If the length specified in the header is actually longer than the message itself, it results in Expedia QuickConnect waiting for bytes that never arrive, and eventually times out.


### Error Codes and Descriptions

Error code | Error description | Explanation and EQC partner Action
---------- | ----------------- | -----------------------------------
1000 | Access denied: you are not authorized to use Expedia QuickConnect. Please contact Expedia to gain access. | This message should not be retried. For assistance, please contact rollout@expedia.com for new activations, or hothelp@expedia.com for existing connections.
1001 | Authentication error: invalid username or password. | This message should not be retried. Verify username and password configured in your EQC interface.  For assistance, please contact rollout@expedia.com for new activations, or hothelp@expedia.com for existing connections.
1003 | The user account provided doesn't have the right access level | This message should not be retried. For assistance, please contact rollout@expedia.com for new activations, or hothelp@expedia.com for existing connections.
2002 | Parsing error: <parsing_error_description>. | Correct XML format to comply with Expedia QuickConnect's specification. Developers of the EQC partner system should be involved to find the problem.
2010 | The namespace specified is invalid. | Correct namespace and send a new message. Please note that namespaces are used to version Expedia service interfaces. Developers of the EQC partner system should be involved to find the problem.
3010 | Validation against schema failed because a value exceeds its defined length, the format is wrong, or because of another validation enforced by schema. | Correct the error in the system, and drop this message (no retry). Developers of the EQC partner system should be involved to find the problem.
3015 | Business validation error.  | EQC partner needs to capture the description returned along with this code and should advise affected hotel or property of the error to verify if there is a problem with its system or the implementation of Expedia QuickConnect.
3020 | Validation error: start date must not be before yesterday. | Make sure the system cannot send a date in the past, and drop this message (no retry).
3021 | Validation error: end date must not be before start date. | Make sure the system cannot send an end date smaller than a start date, and drop this message (no retry).
3129 | Invalid Date. | Verify the dates you provided in the AR RQ and then resubmit your message.
3143 | There is no Product information for the hotel in the database | The hotel you requested information for has no products currently defined in Expedia system yet. This should happen for new hotels not ready to be managed by EQC partner yet. Please contact your market manager for more details.
3144 | There is no matching product information avalable | The request you made to obtain avail and rate data didn't produce any results. This might for different reasons: You requested dates for which no avail or rates are currently defined in Expedia system, or you issued a request for all active products but there are no active products for this hotel.
3202 | Hotel ID not found. You either specified an invalid hotel ID or your account is not linked to this hotel. | Verify if there is a mapping issue in EQC partner's system. If the mapping is correct, please verify that the user configured for Expedia QuickConnect has access to update this property (i.e. the user is able to access this hotel through Expedia Partner Central).
3203 | The following RoomTypeIDs do not belong to the given hotel : <room_type_ID> | Fix mapping in EQC partner's system.
3204 | The following RatePlanIDs do not belong to the given hotel : <rate_plan_ID> | Fix mapping in EQC partner's system.
3205 | Rate Plan ID <rateplanID> does not belong to Room Type ID <roomTypeID> | When requesting avail and rate data, the EQC partner provided an incorrect room type ID – rate plan ID association. Please verify your mapping and drop this message (no retry).
3210 | Communication error: exceed max number of connections allowed (1). | EQC partner tried to open more than one simultaneous connection per hotel. For any given hotel, never attempt to send 2 concurrent messages. Always wait for a message to be responded by Expedia before sending any subsequent message
4000, 4004, 4007 | Internal system error, please try again in a few minutes. | Please retry.
4001 | Internal timeout error, please try again in a few minutes. | Please retry.
4100, 4101 | Internal System Error. Do not retry this request. Our support team was notified of the problem. | Do not retry this message.  Expedia has been notified of the issue and will work on finding a solution for it. 
4206 | Expedia QuickConnect interface is temporarily closed. Please try again shortly. | If AR, enter in incremental retry mode. 
5000 | Internal database error, please try again in a few minutes.  | 

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
