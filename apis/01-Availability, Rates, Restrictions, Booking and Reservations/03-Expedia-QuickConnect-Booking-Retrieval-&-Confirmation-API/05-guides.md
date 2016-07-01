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

The design of Expedia QuickConnect schemas is based on the following general guidelines:
1.	Elements and attributes naming convention: Elements follow the upper camel case (UCC) convention while attributes are follow the lower camel case (LCC) convention.
2.	Information is found mostly in attributes, elements are only used to structure the information and make logical groupings.
3.	If an element contains text, it is most likely because the text was entered manually.
4.	Validation rules about data type, data format and data size/length are included in the schema and should be considered during development.
5.	Expedia uses namespaces to version its schemas. Messages sent to Expedia QuickConnect should always contain the proper namespace.
6.	Namespaces are also used for versioning: EQC partners should be careful when specifying a namespace in the messages they send to Expedia QuickConnect.
7.	Boolean will be returned as “true” or “false”. 

---
