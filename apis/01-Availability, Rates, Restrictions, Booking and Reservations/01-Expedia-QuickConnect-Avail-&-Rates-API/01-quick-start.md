# Quick Start

Expedia QuickConnect provides an electronic interface for EQC partners to send Expedia updates on availability and rates automatically. This section explains how to use the Expedia QuickConnect AR interface and what kind of information can be uploaded through it. It also contains information on best practices when developing the AR interface implementation.

----
##Authentication

To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for BR, AR, BC or PARR. An element called “Authentication” is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

```xml
<Authentication username="testuser" password="testpass"/>
```

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property.

Upon submitting an EQC enrollment form to the EQCHelp team, the EQC credentials necessary for authentication will be provided. For more details on how to obtain credentials, please contact your Connectivity Account Manager or email EQCSS@expedia.com.

----

## Availability and Rates Request and Response

The availability and rate request (AR RQ) allows EQC partners to send Expedia updates on availability and rates for up to 2 years into the future. Below is a pair of sample request/response messages for availability and rate update. The following requests can be posted directly to the EQC interface at https://services.expediapartnercentral.com/eqc/ar
