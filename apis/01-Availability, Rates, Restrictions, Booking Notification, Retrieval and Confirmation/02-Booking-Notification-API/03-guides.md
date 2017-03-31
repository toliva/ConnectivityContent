# FAQ & Guides

## Understanding Expedia's Booking Process

### Book with locally stored inventory and rate

Expedia suppliers control availability, rates and inventory information via the EQC AR interface or Expedia Partner Central. Because suppliers are expected to provide the latest changes to availability or rate in real time via either EQC or EPC, Expedia will let customers book against the latest information received successsfully and stored locally in Expedia systems. 

Expedia reservation sent via the BN API are notifications, made after the reservation was confirmed to the guest. Under no circumstances should Expedia suppliers reject these reservation notifications. If there are (for example) inventory issues with the booking, this is not an acceptable reason to reject a booking.

The reservation notification request message will contain the Hotelier's daily rates and may include taxes and extra person and extra service fees. If there are rate issues with the booking, this discrepancy should be flagged and the booking should be routed by the Hotelier to the staff that is responsible for reconciling these differences and the Expedia Market Manager should be alerted. A discrepancy in pricing is not an acceptable reason to reject a booking either. Hoteliers are responsible for keeping their inventory and rates up to date.

We foresee two key standard cases where rates sent by Expedia may not match those in the hotelier system:
- The hotel agent managing rates on the Expedia system updates rates through ARI or Expedia Partner Central does not get a chance to update the rates in the hotelier system before bookings with the new rates start to hit the system (or vice versa). When a human is entering data on two different systems that are actively sending and receiving bookings, it is not possible to ensure that the rates in every booking will be in sync. Such discrepancy should be minimized by the EQC AR interface.
- The hotel decides to take advantage of the promotional capabilities mentioned previously for a period of time. In the Expedia system they can set up a special promotion to give "5th night free if you stay 4 nights". Those 5th nights that have a daily rate of $0.00 may not match the rate expected by the hotelier system.

### Information included in a notification

- A reservation notification will be for a single room and room type.
- A reservation notification will contain the name of the main guest, as well as up to two membership/loyalty numbers (if acceptance is pre-defined in Expedia Partner Central).
- Coded special requests will be sent for bedding type, smoking or non-smoking room preference, for adjoining rooms (with respect to another Expedia Traveler reservation), Mixed Rate Bookings, and Value Add Promotions. Special requests can also include free-form text entered by the traveler.
- The primary language of the reservation is English, but other languages can be used in the free form text fields like the special request or the guest name. No translation of free form text fields will be provided.
- Electronic notification for booking modification and cancellation may be sent by Expedia after check-in dates.

### General notification delivery process

Expedia expects to receive a confirmation number in return upon successful delivery of a notification. Expedia partners must accept all bookings. Not returning a confirmation number is not a valid response to a notification. If the partner's system is unable to accept the reservation, then the Hoteliers system will need to send back a response with an error message; in this case Expedia will fax or email the reservation, which will need to be handled by the Hotelier as the fax or email is handled today.

Expedia will be responsible for the sequencing of messages, i.e. always sending the reservation message and ensuring that it has been processed by the supplier prior to sending a cancellation or modification for the given booking. 

Expedia will always wait to get a valid response before sending another notification affecting the same reservation. When there are more than one notifications pending in the queue for the same booking, Expedia will always wait for a valid response for the previous notification before sending the next one. 

All information sent in the notification must be passed down to the hotel's Property Management System.

### Notification Expiration Time

When Expedia initiates a booking notification and creates a request message, a notification expiration date/time is set and sent in the message header. The notification time may be set to a fixed value of 2 hours 15 minutes from the notification creation time, or calculated based on date of arrival of the booking, which is configurable per partner.

The purpose of the notification expiration time is to make sure that all possible message delivery attempts between systems are made before giving up on electronic delivery of the notification. 

This notification expiration time is a concern for the notification sender, not for the supplier. This is sent for information only and the supplier must never stop the notification processing because of this notification expiration time being reached. Expedia will accept the response even after the notification has expired.

Until the notification has been completely processed (Expedia has received a valid response message with confirmation or error message) the notification expiration time will be continually monitored by Expedia to make sure it has not yet expired. 
If the notification does expire, then a fax or email notification will be sent to the hotel or to the central reservation office.

### Fallback to fax or email

Failed electronic notification automatically fallback to fax or email. A BN message (new res, modify or cancel) will be considered as having failed electronic notification if Expedia does not receive a positive success response back. In other words, if Expedia retries the message over and over until expiration time is reached, without getting a positive successful response, or if an OTA error is returned, Expedia will send the notification by fax or email, depending on the property configuration.

Once a failed electronic notification has been rerouted to fax or email delivery, the associated booking will be marked as having been sent by fax or email. Future notifications associated with that flagged booking will not be sent by e-notification but be delivered via fax or email only.

Changes and cancellations to reservations sent by fax or email before the electronic interface went live will continue to be delivered by fax or email.

## Message Pairs and POS

Booking Notification uses 3 message pairs:
- OTA_HotelResNotifRQ/RS
- OTA_HotelResModifyNotifRQ/RS
- OTA_CancelRQ/RS
The table below provides a brief description for each message in the BN delivery group.

Message | Description
------- | -----------
OTA_HotelResNotifRQ | Sends a reservation to another system. The message assumes a push model, with the originating system pushing the data to another system.
OTA_HotelResNotifRS | Returns a confirmation that the reservation has been successfully received, or includes errors if the request did not succeed.
OTA_HotelResModifyNotifRQ | Sends a reservation modification to another system using a full overlay. The message assumes a push model, with the originating system pushing the data to another system.
OTA_HotelResModifyNotifRS | Returns a confirmation that the reservation modification has been successfully received, or includes errors if the request did not succeed.
OTA_CancelRQ | Identifies the reservation and requests a cancellation.
OTA_CancelRS | Returns a cancellation number upon execution of the cancel action, or Errors if the processing of the request did not succeed.

Each message will be sent in SOAP envelopes within HTTPS posts. The message header will be built using the common header structure, and the message body will contain the appropriate OTA message.

The common header structure is described above in the <Message Header> section. Please refer to Appendix B for detail descriptions on how to use the OTA messages sent in the message body.
Note that the booking source information is sent under the POS element in the OTA payload for each booking notification request message. For example:

```xml
<POS>
  <Source>
    < RequestorID Type="18" ID="Hotels.com"/>
    <BookingChannel Type="2">
      <CompanyName>Expedia</CompanyName>
    </BookingChannel>
  </Source>
</POS>
```

The values used currently by the interface are listed under [Point of Sale Brand List](#reference.html#POSBrandList). However this list is not a fixed list, the current values may change and new values may be added so partners should ensure they make these values configurable. A set of new values will be sent in the e-notification message for Hotel Collect bookings, which will be pre-fixed by "A-" in front of the current values for the respective points of sales. For example for Hotel Collect bookings made on hotels.com points of sales, the POS ID value will be "A-Hotels.com". 

Hotel suppliers must ensure proper mapping is done for the new POS ID values in the hotel system so that Hotel Collect bookings can be associated with the appropriate profile.
Note that the POS ID included in fall-back fax or email notifications will not contain "A-".

## Booking Flow

Here's a sequence diagram describing the process flow for booking notifications.

![Booking Flow Overview](/images/BookingFlow.jpg)

Step | Expedia | Partner
---- | ------- | -------
1 | The consumer creates a booking on one of the Expedia web sites. | 
2 | Expedia processes this booking in its system. | 
3 | Expedia creates a notification message, computes routing for the appropriate DC partner, and performs any necessary message transformation so that the message will adheres to the expected output format. | 
4 | Expedia sends the request message to the DC partner via a HTTPS post of a SOAP formatted XML message with a SOAP header and an OTA message as the payload. The body of the message will be built using the OTA_HotelResNotifRQ XML message schema for bookings, the OTA_HotelResModifyNotifRQ for changes, and the OTA_CancelRQ for cancellations. | 
5 |  | DC partner validates the message header, and stores the request message.
6 |  | The partner system performs any necessary operations to process the request and generates a booking/modification confirmation or cancellation number for this notification as soon as possible. Connection remains open with Expedia until Expedia receives a response with a confirmation number.
7 |  | The partner system generates a response after notification is processed, on the same connection it received the HTTPS Post containing the SOAP message. The payload will be built with one the following messages: OTA_HotelResNotifRS, OTA_HotelResModifyNotifRS and OTA_CancelRS.
8 | Expedia validates the message header, and stores the response message. | 
9 | Extract confirmation number from the response message and update booking information in the Expedia system. | 
10 | Now the consumer can view his itinerary on any Expedia websites with the hotel confirmation number. | 

## HTTP vs HTTPS, IP Address or URL?

Expedia requires that all booking notifications be sent over an encrypted, HTTPS connection. Expedia will only support sending booking notifications using TLS v1.1 or above protocol.

Expedia  requires that partners make URLs available, and that the SSL certificates used be registered correctly to the URL.

Expedia requires that partners receiving HotelCollect notifications with customer credit cards be PCI-compliant.

## Are WSDL available?

Unfortunately, Expedia can't make a WSDL endpoint or a WSDL file available for the booking messages. Schemas (XSDs) are available, and can be found in the [XML Schemas](schemas.html) section.

## I'm using EQC BR and BC to retrieve and confirm reservations, should I also consider using this API?

Partners need to select either EQC BR/BC, or the BN API. Partners cannot expect to be live on both connectivity APIs at the same time.

The choice to use either EQC BR/BC or the BN API to get bookings is left entirely up to the partner integrating with Expedia. Both options have benefits and drawbacks.

## Booking Notification & ETP, HotelCollect, ExpediaCollect

Expedia Collect bookings are sent with net rate. If the booking is paid by EVC, payment information for the Expedia Virtual Card will be included in the notification. Note that even when a partner is managing Lowest Available Rate, ExpediaCollect bookings will always contain a net rate.

Hotel Collect bookings are sent with the sell rate. Payment information for the customer Credit Card will be included in the notification, along with a special billing instruction (special request code 5) indicating that the booking is hotel collect and the hotel should charge full stay to guest credit card.

Note that Hotel Collect bookings can be easily distinguished by the prefix "A-" in the POS ID value, and also by different rate plan codes provided in the product mapping by the partner.

Upon receiving the notification for Hotel Collect booking, partner must ensure the booking is mapped to the appropriate profile in the hotel system so that the payment, the reconciliation and other downstream processes will be handled correctly by the hotelier.

## Guarantees/Credit Cards Included in Booking Messages
For Expedia Collect booking paid by EVC or Hotel Collect booking paid by guest credit card, the payload for Booking or Modify request will include a <Guarantee> element as the container for credit card payment information.
- The <Guarantee> element will contain the credit card payment information including card type, card code, card number, expiry date, card holder name.
- For ExpediaCollect EVC bookings, CVV is not included. If CVV is required by the hotel to charge the EVC card, they should contact Expedia to obtain a default CVV value for all EVC cards. A billing address is included, which is Expedia head office address by default for all cards.
- For Hotel Collect bookings, depending on the hotel configuration Expedia may or may not send CVV for guest credit card, therefore the hotel booking notification interface must be able to process the booking with and without CVV. Customer billing address is not included.
- The <Guarantee> element is optional, and will be sent only for Expedia Collect bookings paid by EVC, and for Hotel Collect bookings. For Expedia Collect bookings remaining on the standard billing process, no credit card information will be sent in the booking or modify request.

A special request code (5) is sent to communicate payment related information in the booking or modify request, for bookings paid by credit card, either EVC or Hotel Collect.
Please note that credit card inform is only sent for the booking or modify request, but not for the cancel request. Penalty charge, if applicable, should be processed using the same payment information sent previously for the original reservation. If the original reservation is sent with a credit card, the penalty charge should be put on the same card.

<a name="POSElement"></a>
## Understanding the POS element

The POS element is used to identify the point of sale, or the source of the booking. This element is mandatory in all booking notification requests, except for the Ping request.

Level | Element or @Attribute | Format | Number of occur. | Value set | Description
----- | --------------------- | ------ | ---------------- | --------- | -----------
0 | Root Tag of the OTA message |  | 1 |  | Name of the OTA message.
1 | POS |  | 1 |  | Container element for the Point of Sale information.

The current POS ID values for  Expedia Collect bookings are listed under [Point of Sale Brand List](#reference.html#POSBrandList).

Additional POS ID values are sent in the e-notification message for Hotel Collect bookings. The values are the same for the respective points of sales, but prefixed with the letter "A-" in front of the current values.

The additional POS ID 5 is used to return a TIDS for hotels participating in Expedia Group Reconciliation process. TIDS are issued and managed by the IATA group. They are used to identify the Expedia contracting entities and compensation payment currencies. Note that TIDS ID is not related to POS ID. Possible values are driven by points of supply. Your lodging connectivity account manager can provide more details about this feature.
To help understand better the POS element, a few examples are provided here for bookings with different POS.

Expedia Collect bookings sourced from Expedia points of sales 
```xml
	<POS>
		<Source>
			<RequestorID Type="18" ID="Expedia"/>
			<BookingChannel Type="2" Primary="true">
				<CompanyName>Expedia</CompanyName>
			</BookingChannel>
		</Source>
	</POS>
```

Expedia Collect bookings sourced from Hotels.com points of sales 
```xml
	<POS>
		<Source>
			< RequestorID Type="18" ID="Hotels.com"/>
			<BookingChannel Type="2">
				<CompanyName>Expedia</CompanyName>
			</BookingChannel>
		</Source>
	</POS>
```

Hotel Collect bookings sourced from Expedia points of sales 
```xml
	<POS>
		<Source>
			<RequestorID Type="18" ID="A-Expedia"/>
			<BookingChannel Type="2" Primary="true">
				<CompanyName>Expedia</CompanyName>
			</BookingChannel>
		</Source>
		<Source>
			<RequestorID Type="5" ID="12345678"/>
		</Source>
	</POS>
```

Hotel Collect bookings sourced from Hotels.com points of sales
```xml
	<POS>
		<Source>
			< RequestorID Type="18" ID="A-Hotels.com"/>
			<BookingChannel Type="2">
				<CompanyName>Expedia</CompanyName>
			</BookingChannel>
		</Source>
	</POS>
```

Hotel Collect bookings sourced from Venere points of sales: Expedia will be used by default for any non Expedia/Hotels.com/EAN booking.
```xml
	<POS>
		<Source>
			< RequestorID Type="18" ID="A-Expedia"/>
			<BookingChannel Type="2">
				<CompanyName>Expedia</CompanyName>
			</BookingChannel>
		</Source>
		<Source>
			<RequestorID Type="5" ID="12345678"/>
		</Source>
</POS>
```

<a name="ErrorHandling"></a>
## Error Handling

Errors occurring at the acknowledgement level will be reported as a negative acknowledgment using a Fault element. Errors occurring afterwards should be communicated to Expedia by returning an OTA response with the "Errors" element in it. If Expedia receives a Nack on the request post, Expedia will perform a retry.

Since Expedia bookings are guaranteed, in most cases the partner should accept the booking notification and return a confirmation number.  A partner can only reject the notification for a limited number of reasons, which corresponds to the list of error codes defined by this API. In general, the partner can reject the notification if mandatory data elements or attributes are missing or some elements or attribute have invalid values according to this specification. However, we encourage partners to build its interface to handle as much as possible the exceptional cases by putting the notification into its system and returning a positive response with confirmation number. The goal is to reduce the number of faxes or emails resulting from failed notification because in the end, one way or another, the notification will be entered in the partner system.

The only acceptable errors in the OTA content that may justify an error Response message concern the guest name, the check-in / check-out date, the hotel code, the room type code, the rate plan code, the number of guests, and for the modification and cancellation requests, the original supplier confirmation number. Only a response with a confirmation number is considered a successful notification. Otherwise, Expedia will consider the notification failed, and a fax or email notification will be sent to the partner.

### Error Flow 1: Nack for Request

**Initial condition:** the partner is not able to read the request header or the request header is not valid or the partner cannot store the request message.

Step | Expedia | DC Partner
---- | ------- | ----------
5 |  | Partner validates the message header, and store the request message.
6 |  | Partner returns a negative acknowledgement, indicating that the message has not been received correctly and will not be processed by the partner system. The error codes that can be returned in a Nack are listed in section 9.12.5.     

**Final condition:** Expedia received a negative acknowledgement. After a retry delay Expedia will resend the request with retry indicator set to "true", until a response is received or maximum number of retries is reached. Expedia will retry until the expiration time is reached.
If Expedia cannot get a valid response, the notification will be flagged as "failed", and then automatically fallback to fax or email.

### Error Flow 2: No Response for Request

**Initial condition:** Expedia is not able to read the response returned by the partner for the request post, or not able to get a response before a connection timeout.

Step | Expedia | DC Partner
---- | ------- | ----------
6 |  | Partner returns an acknowledgement of receipt of the request message, or a response if protocol is synchronous.
 | Expedia is not able to read the acknowledgement or connection timeout | 

**Final condition:** after a retry delay, Expedia will resend the request with retry indicator set to "true", until an Ack/Response is received or expiration time of the notification is reached.

If Expedia cannot get a valid response after the maximum number of retries, the notification will be flagged as "failed", and then automatically fallback to fax or email.

### Error Flow 3: Error Response

**Initial condition:** the partner is not able to process the request. The partner will reject the notification by sending back a response with the appropriate error message indicating why the request cannot be processed.
The partner can only reject the notification for a limited number of reasons. The error codes allowed to be returned in a booking notification response are listed in the <Error Codes for Response> section below.  Expedia will automatically fail over bookings to secondary delivery mechanisms (fax or email) if a partner returns a negative response.

Step | Expedia | DC Partner
---- | ------- | ----------
7 |  | The partner system is not able to process the request.
8 |  | DC partner generates and sends back a response with the appropriate error message, indicating the notification failed and for what reason.
9 | Main flow resumes at this step. Expedia validates the message header, and stores the response message. | 
 | Expedia then triggers failover mechanism to issue a fax or email notification to the partner to manually process the booking. | 

**Final condition:** Expedia received a response with OTA error. The notifications will automatically fallback to fax or email when a response with OTA error is received.

## Notification Identifier

A notification is identified by a RequestID. For booking notification, this ID is generated by Expedia and Expedia guarantees the ID is unique in all notifications sent by Expedia.

This ID is mandatory in all messages requests and responses. The partner must return the RequestID in the response message with the same value sent in the request by Expedia.

## Duplicate Booking Issue
Described in this section are two possible scenarios related to potential double bookings in the supplier system.
A somewhat complex situation can arise when Expedia (being pessimistic with regards to successful message delivery) does not receive a valid response even though the supplier has received the request and successfully processed the notification. In this case Expedia will send a fax or email to the hotel.

A rare condition can occur since the hotel agent who receives the fax or email will be trying to enter the reservation into his system while Expedia is attempting to deliver the same booking to the hotel. In this case the hotel agent will enter the reservation in his system, and then attempt to enter the confirmation number manually through Expedia Partner Central.
- If Expedia successfully delivered the booking as well (in which case we have a double booking) and the supplier has returned another confirmation number to Expedia, then the agent will see that the confirmation number for this booking already exists on the interface or tool provided by Expedia and then will be able on his own to delete the duplicate booking in his system.
- If the agent enters the confirmation number through the Expedia interface or tool before Expedia receives a confirmation number in the electronic response from the supplier, then the system will automatically detect the double booking. Expedia Customer Operations will monitor a log and then call the hotel. They would ask the agent to look for the duplicate hotel bookings with two different confirmation numbers and delete one of them.

