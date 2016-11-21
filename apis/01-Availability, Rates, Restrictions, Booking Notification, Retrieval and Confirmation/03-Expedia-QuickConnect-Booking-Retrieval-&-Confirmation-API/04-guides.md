# FAQ & Guides

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

### Booking Confirmation REsponses with Warning Require Action
If a warning is included in the BC RS message, the hotel confirmation number could not be updated for the booking at Expedia. Efforts should be made to capture these warnings and make necessary corrections to your booking confirmation request parameters.

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
EQC partners will receive Expedia hotel, room type and rate plan IDs as part of the booking retrieval messages. Mapping information can be obtained via the [Product API](/apis/product-management/product-api/quick-start.html).

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
## Learn more about Expedia VirtualCard

The Expedia VirtualCard allows ExpediaCollect hotels to receive payment via the virtual credit card. At the time of booking, Expedia will generate a distinct virtual credit card number that is authorized for the transaction.
The credit card number will be available electronically to the hotel for 48 hours following a booking within the Expedia QuickConnect booking response message and should be used as payment at time of check out. 

For a successful EVC rollout, the EQC partner implementation should support communication of credit card information as described in the BR Schema.

The hotel system must support changing existing bookings from the original billing method to Expedia VirtualCard payment method and vice versa, should the need arise. 
After activation on the EVC program, the hotel may request that all pending bookings include Expedia VirtualCard payment information. 
In such situations, booking modifications will be created containing a special request section containing this information.
The EQC partner needs to ensure that all new bookings or pending updates for Expedia VirtualCard are communicated to the hotel effectively.

Expedia VirtualCard numbers are crossed out after 48 hours of the initial booking or modification. 
A booking request for information more than 2 days in the past will not return any Expedia VirtualCard details (the number can only be retrieved afterward by contacting Expedia or accessing Expedia Partner Central). 

At guest check-in, hotels use credit cards as a payment guarantee for the room stay. 
If the Expedia VirtualCard is not available at time of check-in, the hotel should never attempt to swipe the customers own credit card or delay guest check-in. 
The Hotel will instead have to contact Expedia VirtualCard support to request the VirtualCard number by fax so they can charge the stay to the Expedia VirtualCard. 
The hotel can also access Expedia Partner Central to find the VirtualCard number.

In most cases, the card number will remain the same for modified bookings, although the card parameters maybe adjusted to reflect the new booking rate and check-in/check-out dates. 
In rare cases, the card number may be changed in modified bookings.

Cancellation-type booking responses do not include any Expedia VirtualCard details, so hoteliers need the billing information and original arrival date provided in the a booking’s last notification prior to cancellation in order to bill any applicable hotel cancellation fees.

### Billing Process 

The Expedia VirtualCard billing process allows hoteliers to get paid for their reservations at the time the traveler checks out of the hotel. Expedia will generate a virtual credit card for every booking. The hotel will retrieve the credit card number for the booking through the Expedia QuickConnect booking response message and charge the stay to the card at the time of check out.
Bookings that are paid by Expedia VirtualCard are not invoiced and remitted through the ExpediaPay service.

### How the Expedia VirtualCard Process Works 

When a reservation is booked through any Expedia Inc. point of sale, a Booking Response notification from Expedia QuickConnect that includes the credit card details will be available to the EQC partner for update in the hotel’s reservation system. 
- The hotel has the option to authorize the card upon guest arrival
- Cards cannot be charged prior to guest arrival. No pre-authorizations or deposit charges should be charged on the card prior to check in
- All incidentals should be charged to the guest credit card 
- Expedia VirtualCard provided for only the net rate of the nights booked 
- Expedia VirtualCard must only be used for the reservation provided on the reservation confirmation
- The hotel should charge the Expedia VirtualCard at the time of guest check out 
- All charges must be made within 30 days of the guest check out. Expedia VirtualCard will expire within 30 days of the guest check out 
- Once a guest has checked out, the credit card is processed and payment is made using the hotels existing credit card processing

### Guidelines for Hotelier Handling Expedia VirtualCard
Important: Before signing up to Expedia VirtualCard, the EQC partner must ensure that its Expedia QuickConnect implementation supports the communication of credit card information as described in the present Expedia QuickConnect API specification. To discuss signing up with Expedia VirtualCard, the hotel should talk to its Market Manager. 
- Hotels using the system will need guests to provide a credit card at check-in to cover any incidental charges during their stay. 
- Expedia VirtualCard should only be used once a guest has checked out; no pre-authorizations or deposit charges should be charged to the card before check in. 
- Expedia charges no additional fees to partners who use VirtualCard; however, normal merchant fees for processing the credit card transaction will apply. 
- Expedia VirtualCard is for room reservations only. 
- Expedia VirtualCard expires 30 days from date of guest check out. 
- Expedia will not be obligated to pay outstanding reservations 30 days past checkout. 
- Cancellation penalties can be charged upon original arrival date.
When a hotel is first enabled on Expedia VirtualCard, all of its new bookings will henceforth include EVC card information in the special request section of the booking response notification. It is also possible that the hotel request that Expedia modify all pending booking to add Expedia VirtualCard details. The hotel system must be able to change the payment type of existing bookings in such cases, and in the eventuality where the hotel switches from EVC back to invoice billing. See section “11.1.1 Expedia VirtualCard special requests” for additional information. 

### Expedia VirtualCard Fraud Protection
To protect against misuse, Expedia VirtualCard has several built-in safety features:
- Cards are issued with 30-day expiration dates from date of guest check out
- Cards valid for time of stay
- A separate, dedicated card is issued for each room reserved
- Credit limits are set to the net rate of nights booked plus applicable taxes
- Transactions can only be conducted at the partner’s authorized payment terminal

### Expedia VirtualCard Support

The following support information is for the hotelier to troubleshoot credit card information, not for assistance in the implementation of VirtualCard through Expedia QuickConnect.
Dedicated number for all credit card issues: 1-888-EXP-1-STOP
Fax line: 469-335-1981
Email: virtualcardss@expedia.com
Phone support is available 24/7 in English and Spanish.  Times vary for other languages based on business hours regionally. Support hours subject to change.

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




