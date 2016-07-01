# Booking Retrieval API Definition

## Introduction

Expedia provides a program interface for EQC partners to retrieve bookings made on any Expedia Inc. Points of sale. EQC partners can retrieve pending bookings (reservations, modifications, or cancellations) as frequently as they want.
If an EQC partner does not retrieve the booking information electronically, Expedia sends the information to the hotel by fax or email


---
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

## Booking Retrieval Reuqest

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

insert picture here

### Booking Retrieval Request Complete Schema Definition
_Legend: O = Optional_

L   | Data element | Data type | O   | Description | EQC validations
--- | ------------ | --------- | --- | ----------- | ---------------
0 | BookingRetrievalRQ | - |  | Root element |  
0 | @xmlns | URI |  | <p>Namespace to which this message belongs. Also used to validate version of schema on which this message is based.</p><p>Current namespace for BR messages is</p> <p>http://www.expediaconnect.com/EQC/BR/2014/01</p><p>Previously supported version:</p> http://www.expedpciaconnect.com/EQC/BR/2007/02 |Valid namespace, defined by at least one version of BR schema.
1 | Authentication|-||Information to validate and grant access to Expedia QuickConnect electronic interface – stored in next two attributes. Refer to section 4.2 for more details on how to obtain valid credentials.
1|@username|String||Username for Expedia QuickConnect login (case sensitive), provided by Expedia.|<ul><li>Minimum length: 4 </li> <li>Maximum length: 30</li><li>Username exists - User is allowed to access Expedia QuickConnect </li></ul>
1|@password|String||Password for Expedia QuickConnect login (case sensitive), provided by Expedia.|<ul><li>Minimum length: 6</li><li>Maximum length: 30</li><li>Password fits with the username</li></ul>
1|Hotel|-|*|Information about Hotel Note that if a hotel is not specified, Expedia will return all the bookings linked to the authentication username. If this user has access to more than one hotel, bookings for all the hotels to which the user has access will be returned.|
1|@id|Integer||Hotel ID defined by Expedia and uniquely identifying a property in Expedia system.|- Hotel ID in Expedia system is assigned to the credentials provided in Authentication node. - Positive integer of 14 digits or less.
1|ParamSet|-|*|Container. If this element appears, there should be one parameter as specified below.|
2|Booking|-|*||
2|@id|Integer||Booking ID, used to retrieve most recent data for a specific booking.|- Element cannot be used at the same time with the “NbDaysInPast” element. - Positive integer of 14 digits or less.
2|Status|-|*|Only available in version 2014/01. Optional. If provided, will return bookings with the statuses listed. Can list up to 3 statuses. If same status is repeated more than once, EQC will ignore the repetitions. |
2|@value|Enum|| possible values, but only 3 are supported today:: -pending: will return bookings that are in a pending state at the time the BR request came. These bookings are returned for the very first time. -retrieved: will return bookings that were already previously retrieved via BR, but not confirmed via BC yet -confirmed: will return bookings that were both retrieved and confirmed via BC already. expired: not supported yet, if used, will be ignored for the time being.If the “confirmed” status is used without NbOfDaysInPast, we will default NbOfDaysInPast to 30 and do as if the request is for confirmed bookings for the past 30 days.|- Value provided is one of the  allowed in enumeration.
2|NbDaysInPast|Integer|*|Optional field allowing EQC partner to retrieve all bookings made in the past X days (X can be anything between 1 and 30). The last occurrence of bookings created, modified or cancelled between now and the past X days is returned. Note: The values represent 24-hour blocks, so, for instance, a value of “2” is requesting all bookings made in the last 48 hours. | - Minimum value: 1 - Maximum value: 30 - Element cannot be used at the same time as the @id element.

## Booking Retrieval Response

The booking retrieval response message (BR RS) contains:
* 0 to 125 bookings. 125 is the maximum number of bookings that can be returned by Expedia QuickConnect in a single response message. If more than 125 bookings were found, the most recently created 125 bookings are returned. If a request was made for pending bookings, and more than 125 bookings were pending retrieval, a subsequent retrieval request will return the remaining bookings pending retrieval. If a request was made for all bookings made over the last X days and there were more than 125 bookings to return, it is currently not possible to retrieve all bookings but only the first 125 bookings created most recently.

OR

* An error message

### Booking Retrieval Response Schema Overview

insert picture here

### Booking Retrieval Response Complete Schema Definition
 L |Data element|Data type| O |Description
---|------------|---------|---|---------
0|BookingRetrievalRS|-||Root element
0|@namespace|URI||<p>Namespace to which this message belongs. Also used to validate version of schema on which this message is based. Current namespace for BR messages is</p><p>http://www.expediaconnect.com/EQC/BR/2014/01</p><p>Previously supported version (returned in RS only if used in RQ):</p>http://www.expediaconnect.com/EQC/BR/2007/02
1|Bookings||*|<p>Container element for bookings. If this node appears alone, without any child, the request is successful but there are no bookings matching request.</p><p>If this element is present, “Error” element cannot be present.</p>
1|Error|String|*|Description of error that occurred during retrieval. Potential causes:<ul><li>schema validation (invalid XML, invalid fields according to schema or other)</li><li>invalid parameters specified by the EQC partner (username, password, booking ID)</li><li>error due to Expedia QuickConnect.</li></ul><p>Minimum length: 0</p><p>Maximum length: 1024</p><p>If this element is present, the element “Booking” cannot be present.</p><p>All error scenarios are described in section 10 “Troubleshooting”.</p>
1|@code|Integer||Code corresponding to the type of error detected.
2|Booking|-|*|Each booking occurrence represents an Expedia Inc. Point of Sale booking transaction. If more than one booking is returned, they will be sorted by creation date, from the more recent to the oldest.
2|@id|Integer||Booking ID generated by Expedia. Uniquely identifies a booking. Should be used to link modifications and cancellations to initial bookings in hotel system - must be kept in hotel system.
Positive integer of 14 digits or less
2|@type|Enum||Type of booking record. Possible values are: "Book" for new reservations, "Modify" for modified bookings and "Cancel" for cancelled bookings.
2|@createDateTime|DateTime||Date and time when this booking transaction was made on Expedia, including time zone information. 
Timestamp as defined in ISO 8601 format. Will always be in the following format: YYYY-MM-DDThh:mm:ssZ  (time is UTC). 
2|@source|String||Booking source (Expedia Inc brand on which the booking was made), namely:<table class=yodawg><tr><td>Expedia Collect Bookings</td><td>Hotel Collect Bookings</td></tr><tr><td>Hotels.com</td><td>A-Hotels.com</td></tr><tr><td>Expedia</td><td>A-Expedia</td></tr><tr><td>Expedia Affiliate Network</td><td>A-Expedia Affiliate Network</td></tr><tr><td>Venere</td><td>A-Venere</td></tr><tr><td>Venere Affiliate</td><td>A-Venere Affiliate</td></tr> </table><p>Values for the booking source may grow or change in the future.</p><p>It is required for the EQC partner to pass on notifications from each of these booking sources to the hotel. Note that this value is also included in notifications that expire and fall back to fax or email.</p>
|@status|Enum|*|<p>Only available in version 2014/01.</p><p>Status of the booking transaction at the time of the retrieval request. Possible values are:<ul><li>pending: message is retrieved for the first time.</li><li>retrieved: message was already retrieved at least once but not confirmed yet</li><li>confirmed: message was already retrieved and confirmed via BC</li></ul><p>This attribute is listed as optional due to only being returned through the 2014/01 namespace, where it will always be returned. For requests made with the previous namespace, this attribute will never be returned.</p>
|@confirmNumber|String|*|<p>Only available in version 2014/01.</p><p>Partner confirmation number for this booking.</p><ul><li>For new reservations: this would only be available with reservations in the confirmed status. Until a reservation is confirmed, this attribute is not returned.</li><li>For modifications and cancellations in the pending or retrieved state, this attribute will contain the confirmation number supplied for the initial reservation message. For modification or cancellations in the confirmed state, it will contain the newest confirmation number received.</li></ul>
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
5|@baseRate|Decimal||Base rate for one day of stay, including promotional discounts if any. Expedia always return net rate for Expedia Collect bookings, even when the propertis managing LAR.
Expedia will return sell rate for Hotel Collect bookings, even when the property is managing net rate.
Minimum value: 0
5|@extraPersonFees|Decimal|*|Extra person fees included in the total amount, if any.
Minimum value: 0
5|@hotelServiceFees|Decimal|*|Hotel Service Fees / Service charges included in the total amount, if any.
Minimum value: 0
5|@promoName|String|*|Name of promotion applied to base rate. Promotions and their notification codes are set up by the Expedia Market Manager for the property.
If property uses Expedia Flexible Rate, the string will begin with “EFR*” when an Expedia Flexible Rate is applied to this stay date.
Promotions may also be referred to as DRRs, or Dynamic Rate Rules.
String length will not exceed 80 characters.
4|Total|-||Container element
4|@amountAfterTaxes|Decimal|*|Total amount inclusive of taxes. It is the sum of daily rates for each day of stay, extra person fees if any, hotel service fees if any, promotional discounts if any and taxes if applicable. Expedia always return net rates for Expedia Collect bookings, even when properties are managing LAR.
Minimum value: 0
4|@amountOfTaxes|Decimal|*|Amount of taxes included in the @amountAfterTaxes.
Minimum value: 0
4|@currency|String||3-letter currency code assigned to property on Expedia Partner Central (per ISO 4217 specification)
4|PaymentCard|-|*|Applicable to booking paid by credit card. Contains details of the credit card, including card type, card number, expiration date and card holder name and address.
For Expedia Collect Booking, this node will contain the Expedia Virtual Card (EVC) information. 
For Hotel Collect booking, this node will contain the customer credit card information. 
4|@cardCode|String||2-letter code for the credit card type
VI|Visa
MC|MasterCard
AX|American Express
DS|Discover card
CA|MasterCard
JC|Japan Credit Bureau
DN|Diners Club

4|@cardNumber|String||Credit card number
String length 1-19
4|@seriesCode|String|*|CVV/CSV code.
String length 1-8
4|@expireDate|MMYY||Expiration date of the credit card.
5|CardHolder|-|*|Card holder name and billing address
5|@name|String||Cardholder name
String length 1-64
5|@address|String||Street number and street name
String length 1-64
5|@city|String||City name
String length 1-64
5|@stateProv|String||State or province name
String length 1-64
5|@country|String||2 letter country code, ISO 3166 code list.
5|@postalCode|String||Postal or zip code
String length 1-16
3|PrimaryGuest|-||Container
4|Name|-||Container
4|@givenName|String||First Name of the main customer (guest) for this room booking.
String length does not exceed 60 characters
4|@middleName|String|*|Middle Name of the main customer (guest) for this room booking, if any.
String length does not exceed 60 characters
4|@surname|String||Surname (last name) of the main customer (guest) for this room booking.
String length does not exceed 60 characters
4|Phone|-|*|Container for phone number of main customer (guest) for this booking, when included.
4|@countryCode|Integer|*|Phone number country code
Max size < 1,000
4|@cityAreaCode|Integer|*|Phone number city area code
Max size < 100,000,000
4|@number|String||Phone number of the guest, if available
Max length: 32
4|@extension|Integer|*|Phone number extension
Max size < 1,000,000
4|Email|String|*|Contains customer email address.
This information is not included by default. Hotels that need to provide special check-in instructions to their guests should discuss enabling email address with their Market Manager.
Max length: 128 
3|RewardProgram|-|*|Contains reward program code and customer account ID for the program. Customer can specify up to two programs at reservation.
0 to 2 occurrences of this element in the message.
3|@code|Enum||Reward program code, as defined by Expedia.
3|@number|String||Customer's account no - unique ID from reward program card number
String length does not exceed 32 characters
3|SpecialRequest|String|*|Special Request made by the customer. Can have up to 6 different special requests, and each one can be one of 6 types:
•|Bedding type
•|Smoking/Non-smoking
•|Multi-room booking
•|Free text (guest comments entered at booking on Expedia)
•|Payment instructions
•|Value Add Promotions
Types are identified by code attribute on this element.
String length does not exceed 256 characters.
3|@code|Enum||Expedia-defined code associated to special request: 
•|(1.x) bedding preferences w/ different codes for beddings
•|(2) smoking/no smoking 
•|(3) indication of multi room bookings
•|(4) free text
•|(5) payment instructions
•|(6) Value Add Promotions
Please visit the “
Code definition” section for a complete list of codes.




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
_Infromation set to zero in a cancel message_

In order to identify the booking to cancel in its system, the hotel should use the booking ID as the key. If this is not possible, the guest name and the dates of the stay should be identical to the latest version of the booking prior to the cancellation. 
To ensure the right booking is being cancelled the hotel should verify the booking ID as well as the guest name and the original check-in and check-out date of the booking.If any cancellation fee is due to the hotel, the amount to be charged is based on the hotel cancellation policy the partner currently has in place for the affected rate plan, as configured by the Expedia Market Manager. This fee is also chargeable to the Expedia VirtualCard number provided in the new or modified booking response that preceded the reservation cancellation and the card can be charged on the original arrival date.

---

## Guidlines and Best Practices

When designing the electronic interface used to connect to Expedia QuickConnect to retrieve bookings, the EQC partner should make sure to read and understand the following guidelines, recommendations and best practices.

### EQC Simulator Usage

Before being allowed to connect to Expedia production systems, the EQC partner must confirm it was able to use the EQC Simulator successfully. Please read Appendix A – EQC Simulator User Guide section of this document for more details on how the EQC Simulator can be used and what kind of scenarios can be tested with it. 

### Requesting Bookings Previously Retrieved

Expedia offers different ways to re-retrieve booking messages that were previously retrieved. 
Elements can be used to refine the bookings being retrieved for specific purposes. A partner could decide that all BR requests retrieval all pending or retrieved bookings (using the Status element), or create a reconciliation job to only retrieve confirmed bookings made within the last 30 days for a specific property (using the NbOfDaysInPast, Status and Hotel ID elements).
When implementing this function, the EQC partner should be very careful to compare the information it retrieves through Expedia QuickConnect with the information currently available in its system. The property could potentially overwrite more recent information manually entered in its system by information provided by Expedia QuickConnect. The property could also duplicate the same booking it received earlier if the Expedia booking ID is not properly implemented in the EQC partner’s system (see the Expedia Booking ID section below for details).

### Expedia Booking ID

The Expedia Booking ID is the only unique key identifying an Expedia booking. The booking ID should be used by EQC partners to identify bookings when EQC partners retrieve booking modifications or cancellations.
It is crucial that EQC partners save this Expedia Booking ID in their systems, and that they use this booking ID to identify existing bookings before trying to create new bookings. This information is also used as a key reference by the billing and reconciliation process.


### Duplicate Bookings

By default, EQC will only return bookings which have not been previously retrieved. However, partners can create date specifc or status specifc requests (by using the NbOfDaysInPast or Status elements) which may return previously retrieved / confirmed bookings.
EQC partners should ensure that their connectivity solutions validate booking IDs to ensure that duplicate bookings are not created within the partner system.

### Maximum Number of Bookings per BR RQ call

To ensure consistent performance for both Expedia QuickConnect and the EQC partners, Expedia QuickConnect will limit the number of bookings that can be returned on a single retrieval call.
For a retrieval of bookings, the maximum number of bookings that can be returned with one booking retrieval request is *125*.

### Retrieval & Confirmation Frequency VS Booking Expiration Delay

Expedia requires that EQC partners retrieve and confirm all booking messages (new reservations, modifications and cancellations) within 30 minutes of their creation by the customer. Partners connected via Expedia QuickConnect need not only retrieve bookings using BR interface, but also confirm them using the Booking Confirmation API within this delay. 
A booking electronically retrieved through Expedia QuickConnect has an expiration delay:
* For same-day arrival (based on midnight in hotel’s local timezone): bookings will expire 30 minutes after their creation by customer.
* For next-day arrival (any bookings created between midnight and 23:59:59 the day before arrival, based on hotel’s local timezone): bookings will expire 60 minutes after their creation by customer.
* For any longer booking window, bookings will expire 24 hours after their creation by customer.
To make sure that the property receives the booking, Expedia will deliver the booking by fax or email if it is not retrieved and confirmed after the expiration delay mentioned above. The fax number and email address used for fallback methods are configured in Expedia Partner Central. Once a booking falls back to fax or email, it won’t be available for electronic retrieval anymore.
Expedia QuickConnect does not send more than 125 bookings at the same time with one booking retrieval request.

### New Reservations followed by modiciations and/or cancellation

Expedia QuickConnect will issue new reservations, modifications and cancellations sequentially, and only after each transaction is confirmed via BC first.
As an example, a guest completes a new reservation, makes a modification, and then makes a second modification. Expedia will first return the new reservation information with the next BR request. After the new reservation is confirmed via BC, the next BR request coming will return the first modification to this reservation. Once this modification is confirmed through BC, the subsequent BR request will return the second modification. Booking updates are always retrievable sequentially and after they are confirmed through BC.

### Mapping Information

EQC partners will receive Expedia hotel, room type and rate plan IDs as part of the booking retrieval messages. Mapping information can be obtained via the PARR service described in section 8, or see Section 13 “Appendix B - Mapping property room and rate plan codes to Expedia IDs” for details.

### Free-form Text and Booking Modifications

Hotel bookings can include a special request entered in free-form text (RequestCode=”4”). This information is included in the booking response (BR RS) message for a booking alongside all other details. However, if the booking is subsequently modified, the corresponding BR RS message will replace the original text with the modified one. In other words, booking notification responses will only send the most recent free-form text special request. It may therefore be important for EQC partners to append within their systems the new or modified special requests for a booking update if they find it valuable to keep a history of these requests.

### Receiving Child Age information in booking responses

Hotel bookings can optionally include child age information; however this feature is not turned on by default. If you want to receive child age information in booking responses, please contact rollout@expedia.com.

### Alarms and Monitoring

EQC partners should include monitors in their interface implementation that will allow partners to see the ratio of successful BR requests and to get detailed information on any errors. Alarms should also be created to notify concerned individuals (e.g. EQC partner tech support) when the rate of message errors returned by Expedia exceeds an accepted threshold. It is recommended that an alarm be triggered when BR messages return errors at a rate of 10% or more.
Partners should review errors frequently to ensure that bookings are received. Failure to do so may result in overbookings.

## Handling Expeia VirtualCard through Expedia QuickConnect

For a successful EVC rollout, the EQC partner implementation should support communication of credit card information as described in the BR Schema.
The hotel system must support changing existing bookings from the original billing method to Expedia VirtualCard payment method and vice versa, should the need arise. After activation on the EVC program, the hotel may request that all pending bookings include Expedia VirtualCard payment information. In such situations, booking modifications will be created containing a special request section containing this information. The EQC partner needs to ensure that all new bookings or pending updates for Expedia VirtualCard are communicated to the hotel effectively. See section “11.1.1 Expedia VirtualCard special requests” for additional information.See section “11.1.1 Expedia VirtualCard special requests” for more information.
Expedia VirtualCard numbers are crossed out after 48 hours of the initial booking or modification. A booking request for information more than 2 days in the past will not return any Expedia VirtualCard details (the number can only be retrieved afterward by contacting Expedia or accessing Expedia Partner Central). 
At guest check-in, hotels use credit cards as a payment guarantee for the room stay. If the Expedia VirtualCard is not available at time of check-in, the hotel should never attempt to swipe the customers own credit card or delay guest check-in. The Hotel will instead have to contact Expedia VirtualCard support to request the VirtualCard number by fax so they can charge the stay to the Expedia VirtualCard. The hotel can also access Expedia Partner Central to find the VirtualCard number.
In most cases, the card number will remain the same for modified bookings, although the card parameters maybe adjusted to reflect the new booking rate and check-in/check-out dates. In rare cases, the card number may be changed in modified bookings.
Cancellation-type booking responses do not include any Expedia VirtualCard details, so hoteliers need the billing information and original arrival date provided in the a booking’s last notification prior to cancellation in order to bill any applicable hotel cancellation fees.
For additional details, see section “14 Appendix D – Learn more about Expedia VirtualCard”.

## Hotel Collect Bookings and Expedia Traveler Preference (ETP)

Expedia Collect bookings are already supported by the BR interface.
Hotel Collect bookings are new to the BR interface, which needs to be reviewed by EQC partners to make the necessary changes to support the new booking type.
There is no schema change to the BR interface for Hotel Collect bookings. However new content will be returned by BR for Hotel Collect bookings. The difference between Expedia Collect booking and Hotel Collect booking is outlined below. 

1.	Different Rate Plan ID
Expedia Collect Booking | Hotel CollectBooking
---|---
Equivilenty of the internal Expedia rate plan ID | Equal to the internal Expedia rate plan ID + “A”

2.	Different Rate Value
Expedia Collect Booking	| Hotel CollectBooking
---|---
Net rate |Sell rate

3.	Different POS value
Expedia Collect Booking	| Hotel Collect Booking
---|---
Hotels.com	| A-Hotels.com
Expedia	| A-Expedia
Expedia Affiliate Network | A-Expedia Affiliate Network
Venere	| A-Venere
 
4.	Different Payment card information
Expedia Collect Booking	| Hotel Collect Booking
---|---
Either no payment information or Expedia Virtual Card payment information.	| Customer credit card payment information.
