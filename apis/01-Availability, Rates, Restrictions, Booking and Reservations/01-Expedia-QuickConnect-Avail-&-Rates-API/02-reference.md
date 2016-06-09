# API Definition

##Communication Protocol

###XML over HTTPS – Synchronous

The communication protocol between properties and Expedia QuickConnect consists of HTTPS (HTTP Secure) transactions with embedded XML documents. Note the following:

-   Only HTTPS posts to Expedia’s secure server are supported. Using HTTP *will not work*. (Expedia QuickConnect servers are not configured to accept posts on the HTTP service.)

-   Communication is synchronous: on the same socket, Expedia QuickConnect reads the request and issues a positive or negative response, depending on whether Expedia QuickConnect is able to process the request or not.

-   Content-Type of the HTTP Request Header should be: “text/xml”.


##AR RQ Schema Complete Definition

L | Data element | Data type | O | Description | EQC validations
-- | ------------ | --------- | -- | ----------- | ---------------
