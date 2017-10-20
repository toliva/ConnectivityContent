[//]: # (Title: Are you ready for Value Add Promotions?)
[//]: # (Date: 2016-06-09)
[//]: # (Category: value add)
[//]: # (Author: Value Add Team)

**What are Value Add Promotions?** This new promotion allows properties to create travel deals that provide additional value without lowering room rates. For example, free spa credits or a free breakfast with a booking.

**When are Value Add Promotions Going Live?** Expedia is expanding Value Add Promotions to all of our Global Partners in July and we are requiring all of our Connectivity Partners to support Value Add Promotions by July 15th.

**What Does this Mean?** Your customers will be invited to create Value Add Promotions for Expedia Brand Websites. To be successful, your systems must consume and pass the relevant information down to the PMS so that your customers can view Value Add information in the reservation details when checking in their guests.

**How Does it Work?** Value Add Promotions information is being passed to you in bookings in a new Special Request field. Expedia previously sent 5 Special Request fields already, and we are simply adding a 6th Special Request field for Value Adds information. Many Connectivity Partners who support Value Adds have found either no work or very limited work was required.

For Partners on Expedia QuickConnect (EQC) – Specifics on Value Adds and the new Special Request 6 field can be found in the [Expedia QuickConnect Booking Retrieval API Definition section](/apis/availability-rates-restrictions-booking-notification-retrieval-and-confirmation/expedia-quickconnect-booking-retrieval-confirmation-api/reference-br.html#booking-retrieval-response-complete-schema-definition). A specific examples of Special Request 6 in the XML can be found in the [Sample Messages](/apis/availability-rates-restrictions-booking-notification-retrieval-and-confirmation/expedia-quickconnect-booking-retrieval-confirmation-api/examples.html#booking-retrieval-response-2-new-bookings-returned-with-value-add-promotion) sections.

For Partners on Booking Notification – Specifics on Value Adds and the new Special Request 6 field can be found in the "Hotel Reservation Notification RQ/RS" section of the [Booking Notification API Definition](/apis/availability-rates-restrictions-booking-notification-retrieval-and-confirmation/booking-notification-api/reference.html#ota_hotelresnotifrq).

**What To Do Today?** Review the EQC Booking Retrieval specification to make sure that you can support the new Special Request field to support this critical feature in Expedia Bookings. If you cannot support it yet please designate time for your teams to work on making any mapping changes or updates required to support it by **July 15th, 2016**.

**PMS is the Key!** Consuming the Special Request field is not enough on its own. It is critical that the Value Add information is also passed to all of the PMS providers you connect with.

**Don’t Wait to Take Action!** Supporting Value Add Promotions is a requirement for certification. Please take a minute to let us know where you are in the process of adopting Value Adds [here](http://goo.gl/forms/S2cvhQHwiYxjixA42). If you cannot support Value Add Promotions at this time, please contact your Account Manager or [EQC Self Service](mailto:eqcss@expedia.com?Subject=Question%20about%20supporting%20value%20add%20promotions). We will work with you to ensure you are prepared by July.

We trust you will be able to adjust your integration with Expedia quickly and in time to provide the added benefits to your customers. If you have any questions please do not hesitate to contact [EQC Self Service](mailto:eqcss@expedia.com?Subject=Question%20about%20supporting%20value%20add%20promotions) or your Account Manager.

**Thank you**