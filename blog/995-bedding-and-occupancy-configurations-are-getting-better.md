[//]: # (Title: Bedding and Occupancy Configurations are Getting Better)
[//]: # (Date: 2017-02-16)
[//]: # (Category: bedding occupancy enhancements)

**What You Need to Know**
Expedia is enhancing the bedding and occupancy configuration for room types so we can better represent the diversity of lodging bedding options. Together with our lodging partners this will allow us to deliver a better guest experience through standardization and improved accuracy.

**What changed?**
The new configuration impacts the Booking Notification API, Booking Retrieval API, and Product API*. For bookings, we will continue to send bed-type information in the special request field. Please refer to the API documentation for updated specifications: [Booking Notification API](https://expediaconnectivity.com/apis/availability-rates-restrictions-booking-notification-retrieval-and-confirmation/booking-notification-api/reference.html) or [Booking Retrieval API](https://expediaconnectivity.com/apis/availability-rates-restrictions-booking-notification-retrieval-and-confirmation/expedia-quickconnect-booking-retrieval-confirmation-api/reference-br.html).

**What does this mean and what do I need to do?**
To avoid failed bookings and ensure the correct bed type is communicated to the front desk, you must pass the bed type to the PMS via free-text string rather than by code.

If you use the Expedia Booking Notification API or the Expedia Booking Retrieval API, ensure that:

*   Your system accepts a bed-type description as free-form text and pass it on to the hotelier (PMS) as a string rather than a code.
*   Your system accepts any bed-type code (ex. code 1.5 for multiple beds).

**Note:** For room types with multiple bedding options such as “1 king bed” or “2 double beds,” the bed-type code might not match the bed type reflected in the free-text. The bedding option selected by the customer will be sent in the free-text special request. As long as your system is capable of ignoring the code and consuming only the bed-type description this should not be an issue.

** We’ve replaced the 256 codes currently available for sending Expedia bed-type information with a simplified set of codes and attributes. If you use the Product API, you can create a room type with the new bedding and occupancy configuration through the API. Please refer to the [Expedia Product API documentation](https://expediaconnectivity.com/apis/product-management/product-api/reference.html#bedtypeenum) for examples.