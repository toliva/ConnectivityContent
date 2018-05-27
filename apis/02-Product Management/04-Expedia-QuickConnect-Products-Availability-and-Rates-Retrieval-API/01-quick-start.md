# Quick Start

The Product, Availability and Rates API (PARR) was designed for any partner that needs to connect to Expedia to read/retrieve the current product configuration (rooms and rates defined), as well as the current rates and availability loaded in the system. PLEASE NOTE: for retrieving product information, Expedia Group STRONGLY encourages partners to use the Product API.

----
## Authentication

To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for AR. An element called "Authentication" is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

```xml
<Authentication username="EQCtest12933870" password="ew67nk33"/>
```

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property.

Upon submitting an EQC enrollment form to the EQCHelp team, the EQC credentials necessary for authentication will be provided. For more details on how to obtain credentials, please contact your Connectivity Account Manager or email EQCSS@expedia.com.

----

## Product, Availability and Rate Retrieval Request and Response

Doing a POST of the following document (with a Content-Type: text/xml) will allow partners to retrieve the current list of room types and rate plans configured for an Expedia test property in production.

```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="EQCtest12933870" password="ew67nk33"/>
    <Hotel id="12933870"/>
    <ParamSet>
        <ProductRetrieval returnRateLink="true" returnRoomAttributes="true" returnRatePlanAttributes="true" returnCompensation="true" returnCancelPolicy="true" />
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

Doing a POST of the following document (with a Content-Type: text/xml) will allow partners to retrieve the availability and rates currently configured for an Expedia test property in production.
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="EQCtest12933870" password="ew67nk33"/>
    <Hotel id="12933870"/>
    <ParamSet>
        <AvailRateRetrieval from="2017-01-11" to="2017-02-01" />
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```
