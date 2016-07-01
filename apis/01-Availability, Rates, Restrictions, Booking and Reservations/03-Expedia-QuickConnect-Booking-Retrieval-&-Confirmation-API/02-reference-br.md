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

### Booking Retrieval Request Schema Complete Definition
_Legend: O = Optional_

L   | Data element | Data type | O   | Description | EQC validations
--- | ------------ | --------- | --- | ----------- | ---------------
0 | BookingRetrievalRQ | - | - | Root element |  
0 | @xmlns | URI | - | Namespace to which this message belongs. Also used to validate version of schema on which this message is based. Current namespace for BR messages is 

http://www.expediaconnect.com/EQC/BR/2014/01 
Previously supported version:
http://www.expediaconnect.com/EQC/BR/2007/02
- Valid namespace, defined by at least one version of BR schema.
1|Authentication|-||Information to validate and grant access to Expedia QuickConnect electronic interface – stored in next two attributes. 
Refer to section 4.2 for more details on how to obtain valid credentials.|
1|@username|String||Username for Expedia QuickConnect login (case sensitive), provided by Expedia.|- Minimum length: 4
- Maximum length: 30
- Username exists 
- User is allowed to access Expedia QuickConnect
1|@password|String||Password for Expedia QuickConnect login (case sensitive), provided by Expedia.|- Minimum length: 6
- Maximum length: 30
- Password fits with the username
1|Hotel|-|*|Information about Hotel
Note that if a hotel is not specified, Expedia will return all the bookings linked to the authentication username.
If this user has access to more than one hotel, bookings for all the hotels to which the user has access will be returned.|
1|@id|Integer||Hotel ID defined by Expedia and uniquely identifying a property in Expedia system.|- Hotel ID in Expedia system is assigned to the credentials provided in Authentication node. 
- Positive integer of 14 digits or less.
1|ParamSet|-|*|Container. If this element appears, there should be one parameter as specified below.|
2|Booking|-|*||
2|@id|Integer||Booking ID, used to retrieve most recent data for a specific booking. 
|- Element cannot be used at the same time with the “NbDaysInPast” element. 
- Positive integer of 14 digits or less.
2|Status|-|*|Only available in version 2014/01.
Optional. If provided, will return bookings with the statuses listed. Can list up to 3 statuses. If same status is repeated more than once, EQC will ignore the repetitions. |
2|@value|Enum|| possible values, but only 3 are supported today::
-|pending: will return bookings that are in a pending state at the time the BR request came. These bookings are returned for the very first time.
-|retrieved: will return bookings that were already previously retrieved via BR, but not confirmed via BC yet
-|confirmed: will return bookings that were both retrieved and confirmed via BC already.
expired: not supported yet, if used, will be ignored for the time being.If the “confirmed” status is used without NbOfDaysInPast, we will default NbOfDaysInPast to 30 and do as if the request is for confirmed bookings for the past 30 days.|- Value provided is one of the  allowed in enumeration.
2|NbDaysInPast|Integer|*|Optional field allowing EQC partner to retrieve all bookings made in the past X days (X can be anything between 1 and 30).
The last occurrence of bookings created, modified or cancelled between now and the past X days is returned. 
Note: The values represent 24-hour blocks, so, for instance, a value of “2” is requesting all bookings made in the last 48 hours.|- Minimum value: 1
- Maximum value: 30
- Element cannot be used at the same time as the @id element.






The EQC API is currently only [available as a PDF](http://developer.expediapartnercentral.com/files/EQC_Public_API_v1.6.1.pdf).
