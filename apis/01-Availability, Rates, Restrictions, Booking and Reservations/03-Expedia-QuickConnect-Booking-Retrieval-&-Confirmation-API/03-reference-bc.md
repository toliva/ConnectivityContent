# Booking Confirmation API Definition

## Introduction

The Expedia QuickConnect Booking Retrieval and Confirmation solution (EQC) is a simple interface that allows hotel properties to: 
* Electronically retrieve bookings made on any Expedia Inc. platform (includes all points of sales and affiliates).
* Confirm bookings electronically retrieved.

---

### Supported Features for Booking Confirmaion
EQC partner must use the booking confirmation API to confirm bookings retrieved electronically (reservations, modifications, and cancellations):

1. Confirmation numbers have to be received before bookings expire. Else, bookings will fall back to fax or email. Expedia’s booking expiration strategy is based on booking window:
a. For same-day arrival (based on midnight in hotel’s local timezone): bookings will expire 30 minutes after their creation by customer.
b. For next-day arrival (any bookings created between midnight and 23:59:59 the day before arrival, based on hotel’s local timezone): bookings will expire 60 minutes after their creation by customer.
c. For any longer booking window, bookings will expire 24 hours after their creation by customer.
2. Booking confirmation numbers can be updated for already confirmed bookings up to 8 days after guest’s departure date.







The EQC API is currently only [available as a PDF](http://developer.expediapartnercentral.com/files/EQC_Public_API_v1.6.1.pdf).
