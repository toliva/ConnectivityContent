# API Definition
EQC AR is TBD

### Communication Protocol
#### XML over HTTPS – Synchronous
The communication protocol between properties and Expedia QuickConnect consists of HTTPS (HTTP Secure) transactions with embedded XML documents. Note the following:
- Only HTTPS posts to Expedia’s secure server are supported. Using HTTP will not work. (Expedia QuickConnect servers are not configured to accept posts on the HTTP service.)
- Communication is synchronous: on the same socket, Expedia QuickConnect reads the request and issues a positive or negative response, depending on whether Expedia QuickConnect is able to process the request or not.
- Content-Type of the HTTP Request Header should be: “text/xml”.

#### Authentication
To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for AR. An element called “Authentication” is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

Authentication username="testuser" password="testpass"

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property. 

Upon submitting an EQC enrollment form to the Hotel Connectivity Integration team, the EQC credentials necessary for authentication will be provided. For more details on how to obtain credentials, please contact your Connectivity Account Manager or email hci@expedia.com. 

#### Specifications and Constraints – protocol level
Due to the high volume of hotels updating their rates and availability information on Expedia through an XML interface, Expedia QuickConnect enforces the following protocol:
