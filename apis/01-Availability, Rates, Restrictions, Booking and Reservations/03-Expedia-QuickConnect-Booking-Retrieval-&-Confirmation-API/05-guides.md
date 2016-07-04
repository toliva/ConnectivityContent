# FAQ's and Guides

## Basic Requirements

In order for properties to use the Expedia QuickConnect solution, they must meet the following requirements:
* Have a reliable connection to the Internet 
* Be able to initiate HTTPS connections to Expedia QuickConnect servers and provide authentication (username/password)
* Be able to generate XML documents conforming to Expedia QuickConnect schemas (XSD)
* Be able to retrieve bookings (reservations, modifications and cancelations) using XML messages
* Be able to provide confirmation numbers for retrieved bookings (reservations, modifications and cancelations) using XML messages
* Be able to handle errors and warning scenarios as per this specification’s recommendations

---
## Schema Design Guidelines

For partners interested in understanding what guided Expedia in its design of Expedia QuickConnect schemas, please refer to the [Schema Design Guidelines](http://josheqcar1.partner-api-preview.test.expedia.com/apis/availability-rates-restrictions-booking-and-reservations/expedia-quickconnect-avail-rates-api/reference.html#schemaguidelines) section of the Avail and Rates API. All Expedia QuickConnect APIs follow the same guidelines.

---

## Getting Connected

The process to get connected for any Expedia QuickConnect API is the same. Please refer to the [Getting Connected section of the Avail and Rates API](/apis/availability-rates-restrictions-booking-and-reservations/expedia-quickconnect-avail-rates-api/guides.html#gettingconnected) for more details.

## Guidlines and Best Practices 

When designing the electronic interface used to connect to Expedia QuickConnect to retrieve bookings, the EQC partner should make sure to read and understand the following guidelines, recommendations and best practices.

---
### EQC Simulator Usage

Before being allowed to connect to Expedia production systems, the EQC partner must confirm it was able to use the EQC Simulator successfully. Please read Appendix A – EQC Simulator User Guide section of this document for more details on how the EQC Simulator can be used and what kind of scenarios can be tested with it. 

---
### Requesting Bookings Previously Retrieved

Expedia offers different ways to re-retrieve booking messages that were previously retrieved. 
Elements can be used to refine the bookings being retrieved for specific purposes. A partner could decide that all BR requests retrieval all pending or retrieved bookings (using the Status element), or create a reconciliation job to only retrieve confirmed bookings made within the last 30 days for a specific property (using the NbOfDaysInPast, Status and Hotel ID elements).
When implementing this function, the EQC partner should be very careful to compare the information it retrieves through Expedia QuickConnect with the information currently available in its system. The property could potentially overwrite more recent information manually entered in its system by information provided by Expedia QuickConnect. The property could also duplicate the same booking it received earlier if the Expedia booking ID is not properly implemented in the EQC partner’s system (see the Expedia Booking ID section below for details).

---
### Expedia Booking ID

The Expedia Booking ID is the only unique key identifying an Expedia booking. The booking ID should be used by EQC partners to identify bookings when EQC partners retrieve booking modifications or cancellations.
It is crucial that EQC partners save this Expedia Booking ID in their systems, and that they use this booking ID to identify existing bookings before trying to create new bookings. This information is also used as a key reference by the billing and reconciliation process.

---
### Duplicate Bookings

By default, EQC will only return bookings which have not been previously retrieved. However, partners can create date specifc or status specifc requests (by using the NbOfDaysInPast or Status elements) which may return previously retrieved / confirmed bookings.
EQC partners should ensure that their connectivity solutions validate booking IDs to ensure that duplicate bookings are not created within the partner system.

---
### Maximum Number of Bookings per BR RQ call

To ensure consistent performance for both Expedia QuickConnect and the EQC partners, Expedia QuickConnect will limit the number of bookings that can be returned on a single retrieval call.
For a retrieval of bookings, the maximum number of bookings that can be returned with one booking retrieval request is *125*.

---
### Retrieval & Confirmation Frequency VS Booking Expiration Delay

Expedia requires that EQC partners retrieve and confirm all booking messages (new reservations, modifications and cancellations) within 30 minutes of their creation by the customer. Partners connected via Expedia QuickConnect need not only retrieve bookings using BR interface, but also confirm them using the Booking Confirmation API within this delay. 
A booking electronically retrieved through Expedia QuickConnect has an expiration delay:
* For same-day arrival (based on midnight in hotel’s local timezone): bookings will expire 30 minutes after their creation by customer.
* For next-day arrival (any bookings created between midnight and 23:59:59 the day before arrival, based on hotel’s local timezone): bookings will expire 60 minutes after their creation by customer.
* For any longer booking window, bookings will expire 24 hours after their creation by customer.
To make sure that the property receives the booking, Expedia will deliver the booking by fax or email if it is not retrieved and confirmed after the expiration delay mentioned above. The fax number and email address used for fallback methods are configured in Expedia Partner Central. Once a booking falls back to fax or email, it won’t be available for electronic retrieval anymore.
Expedia QuickConnect does not send more than 125 bookings at the same time with one booking retrieval request.

---
### New Reservations followed by modiciations and/or cancellation

Expedia QuickConnect will issue new reservations, modifications and cancellations sequentially, and only after each transaction is confirmed via BC first.
As an example, a guest completes a new reservation, makes a modification, and then makes a second modification. Expedia will first return the new reservation information with the next BR request. After the new reservation is confirmed via BC, the next BR request coming will return the first modification to this reservation. Once this modification is confirmed through BC, the subsequent BR request will return the second modification. Booking updates are always retrievable sequentially and after they are confirmed through BC.

---
### Mapping Information
EQC partners will receive Expedia hotel, room type and rate plan IDs as part of the booking retrieval messages. Mapping information can be obtained via the PARR service described in section 8, or see Section 13 “Appendix B - Mapping property room and rate plan codes to Expedia IDs” for details.

---
### Free-form Text and Booking Modifications

Hotel bookings can include a special request entered in free-form text (RequestCode=”4”). This information is included in the booking response (BR RS) message for a booking alongside all other details. However, if the booking is subsequently modified, the corresponding BR RS message will replace the original text with the modified one. In other words, booking notification responses will only send the most recent free-form text special request. It may therefore be important for EQC partners to append within their systems the new or modified special requests for a booking update if they find it valuable to keep a history of these requests.

---
### Receiving Child Age information in booking responses

Hotel bookings can optionally include child age information; however this feature is not turned on by default. If you want to receive child age information in booking responses, please contact rollout@expedia.com.

---
### Alarms and Monitoring

EQC partners should include monitors in their interface implementation that will allow partners to see the ratio of successful BR requests and to get detailed information on any errors. Alarms should also be created to notify concerned individuals (e.g. EQC partner tech support) when the rate of message errors returned by Expedia exceeds an accepted threshold. It is recommended that an alarm be triggered when BR messages return errors at a rate of 10% or more.
Partners should review errors frequently to ensure that bookings are received. Failure to do so may result in overbookings.

---
## Handling Expeia VirtualCard (EVC) through Expedia QuickConnect

For a successful EVC rollout, the EQC partner implementation should support communication of credit card information as described in the BR Schema.

The hotel system must support changing existing bookings from the original billing method to Expedia VirtualCard payment method and vice versa, should the need arise. After activation on the EVC program, the hotel may request that all pending bookings include Expedia VirtualCard payment information. In such situations, booking modifications will be created containing a special request section containing this information. The EQC partner needs to ensure that all new bookings or pending updates for Expedia VirtualCard are communicated to the hotel effectively. See section “11.1.1 Expedia VirtualCard special requests” for additional information.

Expedia VirtualCard numbers are crossed out after 48 hours of the initial booking or modification. A booking request for information more than 2 days in the past will not return any Expedia VirtualCard details (the number can only be retrieved afterward by contacting Expedia or accessing Expedia Partner Central). 

At guest check-in, hotels use credit cards as a payment guarantee for the room stay. If the Expedia VirtualCard is not available at time of check-in, the hotel should never attempt to swipe the customers own credit card or delay guest check-in. The Hotel will instead have to contact Expedia VirtualCard support to request the VirtualCard number by fax so they can charge the stay to the Expedia VirtualCard. The hotel can also access Expedia Partner Central to find the VirtualCard number.

In most cases, the card number will remain the same for modified bookings, although the card parameters maybe adjusted to reflect the new booking rate and check-in/check-out dates. In rare cases, the card number may be changed in modified bookings.

Cancellation-type booking responses do not include any Expedia VirtualCard details, so hoteliers need the billing information and original arrival date provided in the a booking’s last notification prior to cancellation in order to bill any applicable hotel cancellation fees.

---
## Hotel Collect Bookings and Expedia Traveler Preference (ETP)

Expedia supports different business models. To understand how bookings reflect the different business models (ExpediaCollect, HotelCollect), please see the outline below.

### Different Rate Plan ID

Expedia Collect Booking | Hotel CollectBooking
---|---
Equivilenty of the internal Expedia rate plan ID | Equal to the internal Expedia rate plan ID + “A”

### Different Rate Value

Expedia Collect Booking	| Hotel CollectBooking
---|---
Net rate |Sell rate

### Different POS value

Expedia Collect Booking	| Hotel Collect Booking
---|---
Hotels.com	| A-Hotels.com
Expedia	| A-Expedia
Expedia Affiliate Network | A-Expedia Affiliate Network
Venere	| A-Venere
 
### Different Payment card information

Expedia Collect Booking	| Hotel Collect Booking
---|---
Either no payment information or Expedia Virtual Card payment information. | Customer credit card payment information.
