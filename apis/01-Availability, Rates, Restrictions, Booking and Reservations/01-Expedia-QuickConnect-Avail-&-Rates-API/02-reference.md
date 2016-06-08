

Communication Protocol
======================

<span id="_Toc148774701" class="anchor"><span id="_Toc162860233" class="anchor"><span id="_Toc404960451" class="anchor"></span></span></span>XML over HTTPS – Synchronous
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The communication protocol between properties and Expedia QuickConnect consists of HTTPS (HTTP Secure) transactions with embedded XML documents. Note the following:

-   Only HTTPS posts to Expedia’s secure server are supported. Using HTTP *will not work*. (Expedia QuickConnect servers are not configured to accept posts on the HTTP service.)

-   Communication is synchronous: on the same socket, Expedia QuickConnect reads the request and issues a positive or negative response, depending on whether Expedia QuickConnect is able to process the request or not.

-   Content-Type of the HTTP Request Header should be: “text/xml”.

<span id="_Toc148774702" class="anchor"><span id="_Toc162860234" class="anchor"><span id="_Ref300569886" class="anchor"><span id="_Toc404960452" class="anchor"></span></span></span></span>Authentication
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for BR, AR, BC or PARR. An element called “Authentication” is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

&lt;Authentication username="testuser" password="testpass"/&gt;

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property.

Upon submitting an EQC enrollment form to the EQCHelp team, the EQC credentials necessary for authentication will be provided. For more details on how to obtain credentials, please contact your Connectivity Account Manager or email rollout@expedia.com.

<span id="_Toc300583897" class="anchor"><span id="_Toc301196115" class="anchor"><span id="_Toc300583898" class="anchor"><span id="_Toc301196116" class="anchor"><span id="_Toc148774703" class="anchor"><span id="_Toc162860235" class="anchor"><span id="_Toc404960453" class="anchor"><span id="OLE_LINK24" class="anchor"><span id="OLE_LINK25" class="anchor"></span></span></span></span></span></span></span></span></span>Specifications and Constraints – protocol level
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Due to the high volume of hotels updating their rates and availability information on Expedia through an XML interface, Expedia QuickConnect enforces the following protocol:

| Type                 | Specification                                                      | Description                                                                                                                                                                                                                                                                                                                         |
|----------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL                  | Different URLs for AR, BR, BC and PARR.                            | Expedia QuickConnect uses four different URLs:                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   1 URL for Booking Retrieval Requests                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   1 URL for Availability and Rates Update Requests                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   1 URL for Booking Confirmation Requests                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   1 URL for Product, Avail and Rates Retrieval Requests                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             **Note: **                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             Expedia does not support connection to the QuickConnect Service directly via IP Address, as this address is subject to change without notice. If the EQC partner generally prefers IP Addresses for communication performance reasons, it may consider implementing an address caching strategy to reduce DNS lookups for the URLs.  |
| HTTP POST            | Character limit in POST header                                     | The User-Agent attribute in the HTTP POST Header must not exceed 250 characters.                                                                                                                                                                                                                                                    |
| Retry                | Retry strategy if EQC partner cannot establish communication       | If EQC partner receives an error from their application, saying it cannot connect to Expedia QuickConnect (including a connection refused), the EQC partner should perform retries. Please read section 10.1 “Detailed Error Handling and Retry Strategy Recommendation” for more details.                                          |
| Retry                | Retry strategy in case of specific errors returned in XML response | EQC partners should implement retry strategy to handle messages that fail because of communication/network errors (error code equal to or greater than 4000 – see section 10 “Troubleshooting” for error details):                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   Expedia QuickConnect is in maintenance mode                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   Expedia QuickConnect is experiencing temporary problems                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   A network error occurred                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             This retry strategy should be different than the retry where the communication cannot be established. Please read section 10.1 “Detailed Error Handling and Retry Strategy Recommendation” for more details.                                                                                                                         |
| Concurrency          | Simultaneous connections per property and API &lt;= 1              | Expedia QuickConnect only allows one connection at a time per hotel, per EQC API (AR, BR, BC, PARR).                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   EQC partners cannot send concurrent requests to update the same hotel. Requests should be queued in the hotel system.                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   EQC partners cannot send concurrent requests to retrieve bookings for the same EQC user account.                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   EQC partners cannot send concurrent requests to confirm bookings for the same hotel                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   EQC partners cannot send concurrent requests to retrieve product, avail or rate information for the same hotel.                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             -   EQC partners **can** send simultaneous requests to retrieve booking, update rates, confirm bookings and retrieve product, avail and rate information if they wish to do so. The limitation on concurrency is controlled separately per API.                                                                                      |
| Connection           | No support for Keep-Alive connections                              | Expedia QuickConnect always closes the connection after a request. Expedia QuickConnect does not support keep-alive connections.                                                                                                                                                                                                    |
| Timeout – Socket     | Socket connection timeout recommendation: 5 seconds.               | Expedia recommends EQC partners define a socket timeout of 5 second, in case EQC partner fails to obtain connection to EQC APIs for any reason.                                                                                                                                                                                     |
| Timeout - Connection | Idle connection timeout after 60 seconds                           | Idle connections (no packets sent by either side) for more than 1 minute are closed. EQC partners should consider the update incomplete and implement a retry strategy to re-send data.                                                                                                                                             |
| Character Set        | Expedia QuickConnect supports UTF-8                                | EQC partners should expect to receive UTF-8 characters, including characters with accents or special characters. EQC partners that cannot support UTF-8 characters must filter them.                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                             Requests must be encoded in UTF-8. If UTF-8 encoding is named explicitly in the EQC requests, then the value “UTF-8” must be sent in uppercase letters.                                                                                                                                                                              |

**Table 5**: Specifications and constraints – protocol level

<span id="_Specifications_and_Recommendations" class="anchor"><span id="_Toc301196118" class="anchor"><span id="_Toc301196119" class="anchor"><span id="_Toc162860236" class="anchor"><span id="_Ref298848880" class="anchor"><span id="_Ref298848884" class="anchor"><span id="_Toc404960454" class="anchor"></span></span></span></span></span></span></span>Specifications and Recommendations – messaging level
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table summarizes the different specifications and constraints at the messaging level.

| Type                         | Specification                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Validation                   | Messages sent to EQC applications should always be validated against API schemas first.                               | Before sending any message to the Expedia QuickConnect server, the EQC partner should make sure that the message is validated against the current Expedia QuickConnect Request schema (available at www.expediaquickconnect.com). When the Expedia QuickConnect server receives a request, it first validates the message against the schema corresponding to the namespace of the RQ received. Therefore, an incorrect message is rejected right away. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                        Since the EQC partner is only allowed to send one message per property at a time, performing this kind of validation ensures that the usage of available bandwidth between Expedia QuickConnect and the EQC partner is maximized.                                                                                                                                                                                                                        |
| Bundling / Grouping          | Bundling of incoming AR messages                                                                                      | Expedia recommends that EQC partner attempt to bundle different updates into the same AR Request whenever possible. An AR request can contain updates for different room types, different rate plans and for different date ranges as well. Please refer to section 5.6.2.4 for more details.                                                                                                                                                           |
| Frequency                    | Booking retrieval frequency ≈ 10 minutes                                                                              | Expedia recommends that EQC partners retrieve pending bookings every 10 minutes. This is the best way to ensure that bookings will be received quickly by the property, as well as ensure that not many bookings will be returned on successful retrieval.                                                                                                                                                                                              |
| (Re)synchronization          | Be able to (re)synch.                                                                                                 
                                                                                                                                                       
                                Avoid generating duplicate messages that update the same product and date in the process.                              | Please refer to section 5.6.6 Property Re/Synchronization Mechanism for more details.                                                                                                                                                                                                                                                                                                                                                                   |
| Speed                        | Minimize time between when the EQC partner receives a response and can proceed with another request.                  | The EQC partner should make sure that its system is able to quickly process a response and then within a few milliseconds proceed with sending the next message in queue for any hotel.                                                                                                                                                                                                                                                                 |
| Size                         | AR maximum message size &lt;= 100 kilobytes                                                                           | The maximum uncompressed size of an AR request cannot exceed 100 kilobytes.                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                        EQC partners coding to support multiple product updates for multiple date ranges in one message need to consider this limitation, as well as the maximum update count per message limitation, during their design.                                                                                                                                                                                                                                       |
| Size                         | Maximum number of bookings in a BR RQ &lt;= 125                                                                       | When an EQC partner retrieves pending bookings, or bookings for a number of days in the past, Expedia will never return more than 125 bookings. If more than 125 pending bookings are waiting in Expedia QuickConnect, the newest 125 bookings will be returned, and the older ones will be returned when the EQC partner initiate another booking retrieval request.                                                                                   |
| Booking Expiration           | Booking expiration delay for electronic retrieval and confirmation:                                                   
                                                                                                                                                       
                                - 30 minutes for same day booking                                                                                      
                                                                                                                                                       
                                - 60 minutes for day before booking                                                                                    
                                                                                                                                                       
                                - 24 hours for rest                                                                                                    | A booking will expire and be sent by fax or email to the property if the EQC partner fails to retrieve and confirm a booking. Expiration strategy varies by booking window:                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                        -   For same-day arrival (based on midnight in hotel’s local timezone): bookings will expire 30 minutes after their creation by customer.                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                        -   For next-day arrival (any bookings created between midnight and 23:59:59 the day before arrival, based on hotel’s local timezone): bookings will expire 60 minutes after their creation by customer.                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                        -   For any longer booking window, bookings will expire 24 hours after their creation by customer.                                                                                                                                                                                                                                                                                                                                                       |
| Credit Card number retrieval | EQC partners must not rely on retrieving credit card numbers electronically after 48 hours of a new/modified booking. | - Any booking retrieved after 48 hours of booking date will not contain credit card data. These details must be retrieved before the 48-hour deadline if they are to be stored in the hotel reservation system.                                                                                                                                                                                                                                         |

**Table 6**: Specifications and recommendations – messaging level

<span id="_Toc298851669" class="anchor"><span id="_Toc300583901" class="anchor"><span id="_Toc301196121" class="anchor"><span id="_Toc298851670" class="anchor"><span id="_Toc300583902" class="anchor"><span id="_Toc301196122" class="anchor"><span id="_Toc298851671" class="anchor"><span id="_Toc300583903" class="anchor"><span id="_Toc301196123" class="anchor"><span id="_Toc235849893" class="anchor"><span id="_Toc162860237" class="anchor"></span></span></span></span></span></span></span></span></span></span></span>

Availability and Rates API
==========================

<span id="_Toc162860238" class="anchor"><span id="_Toc404960456" class="anchor"></span></span>Introduction
----------------------------------------------------------------------------------------------------------

Expedia QuickConnect provides an electronic interface for EQC partners to send Expedia updates on availability and rates automatically. This section explains how to use the Expedia QuickConnect AR interface and what kind of information can be uploaded through it. It also contains information on best practices when developing the AR interface implementation.

<span id="_Toc404960457" class="anchor"><span id="_Toc162860239" class="anchor"></span></span>Changes from <http://www.expediaconnect.com/EQC/AR/2007/02> to <http://www.expediaconnect.com/EQC/AR/2011/06> AR version
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

EQC AR interface now supports receiving multiple products/dates in one message, through the addition of the AvailRateUpdate element.

EQC AR interface now supports day-of-arrival pricing through the addition of the rate change indicator flag

EQC AR now supports Lowest Available Rate updates (refer to section 5.6.7 for more details)

EQC AR now supports initial upload up until 2 years in the future

EQC AR now supports MaxLOS restriction update

EQC AR now returns warnings instead of errors for a list of scenarios, including but not limited to: rate threshold violation, base allocation close.

EQC AR warning code range changed to be in the 7xxx range

EQC AR now supports receiving updates for inactive products: the update is processed but a warning is returned to let the hotel know those products are inactive.

EQC AR error code list changed: some errors were removed, some were converted to warnings, and some new error codes were added. Some descriptions were also changed.

Availability and Rates Request
------------------------------

The availability and rate request (AR RQ) allows EQC partners to send Expedia updates on availability and rates for up to 2 years into the future.

### <span id="_Toc207608527" class="anchor"><span id="_Toc207608528" class="anchor"><span id="_Toc404960459" class="anchor"><span id="_Toc162860240" class="anchor"></span></span></span></span>Examples

Below is a pair of sample request/response messages for availability and rate update. The following requests can be posted directly to the EQC simulator at https://simulator.expediaquickconnect.com/connect/ar, for partners wanting to experiment with the API. Make sure to include content type= text/xml in your http header.

**RQ**

> &lt;?xml version="1.0" encoding="UTF-8"?&gt;
>
> &lt;AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06"&gt;
>
> &lt;Authentication username="testuser" password="ECLPASS"/&gt;
>
> &lt;Hotel id="411"/&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2014-12-15" to="2015-01-20"/&gt;
>
> &lt;RoomType id="40000" closed="false"&gt;
>
> &lt;Inventory totalInventoryAvailable="10"/&gt;
>
> &lt;RatePlan id="41000" closed="false"&gt;
>
> &lt;Rate currency="USD"&gt;
>
> &lt;PerOccupancy rate="60.00" occupancy="1"/&gt;
>
> &lt;PerOccupancy rate="100.00" occupancy="2"/&gt;
>
> &lt;PerOccupancy rate="135.00" occupancy="3"/&gt;
>
> &lt;PerOccupancy rate="160.00" occupancy="4"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="7"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2015-02-15" to="2015-02-20"/&gt;
>
> &lt;RoomType id="40000" closed="true"&gt;
>
> &lt;Inventory totalInventoryAvailable="0"/&gt;
>
> &lt;RatePlan id="41000" closed="true"&gt;
>
> &lt;Rate currency="USD"&gt;
>
> &lt;PerOccupancy rate="80.00" occupancy="1"/&gt;
>
> &lt;PerOccupancy rate="120.00" occupancy="2"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="true" closedToDeparture="false" minLOS="1" maxLOS="7"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;/AvailRateUpdateRQ&gt;
>
> **RS**
>
> &lt;?xml version="1.0" encoding="UTF-8"?&gt;
>
> &lt;AvailRateUpdateRS xmlns="http://www.expediaconnect.com/EQC/AR/2007/02"&gt;
>
> &lt;Success/&gt;
>
> &lt;/AvailRateUpdateRS&gt;

For more examples please refer to &lt;Appendix E&gt; at the end of the document. More information about the EQC Simulator can be found in &lt;Appendix A&gt;.

### AR RQ Schema Overview

Please note that this overview provides the most recent structure of EQC AR API (namespace http://www.expediaconnect.com/EQC/AR/2011/06). The API actually also supports the previous version of the schema (namespace http://www.expediaconnect.com/EQC/AR/2007/02), without the repeatable AvailRateUpdate element. The XSD file for the AR RQ API available on <http://www.expediaquickconnect.com> also supports both the old and new format under the new version.

<img src="./media/image6.jpg" width="623" height="734" />

<span style="font-variant:small-caps;">Figure 3: Graphical representation of the AR RQ XML message</span>

### <span id="_Toc162860241" class="anchor"><span id="_Toc404960461" class="anchor"><span id="_Toc148774708" class="anchor"><span id="_Toc153363110" class="anchor"></span></span></span></span>AR RQ Schema Complete Definition

The following table contains information about all the AR message elements and about the validation performed by Expedia QuickConnect on each field before accepting a message.

> Legend: **L** = level in the XML message | **O** = optional

| L                                                                                                                                                                                                                                                                                                                                                                                     | Data element             | Data type | O   | Description                                                                                                                                                                                                                                                                                                                          | EQC validations                                                                                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|-----------|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0                                                                                                                                                                                                                                                                                                                                                                                     | AvailRateUpdateRQ        | -         |     | Root element                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                  |
| 0                                                                                                                                                                                                                                                                                                                                                                                     | @xmlns                   | URL       |     | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Supported namespaces for AR messages are: <http://www.expediaconnect.com/EQC/AR/2007/02>                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      <http://www.expediaconnect.com/EQC/AR/2011/06>                                                                                                                                                                                                                                                                                        | - Valid namespace, defined by at least one version of AR schema.                                                                                                                                                 |
| 1                                                                                                                                                                                                                                                                                                                                                                                     | Authentication           | -         |     | Grouping of required information to grant access to Expedia QuickConnect interface.                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      Refer to section 4.2 for more details on how to obtain valid credentials.                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                  |
| 1                                                                                                                                                                                                                                                                                                                                                                                     | @username                | String    |     | Username for Expedia QuickConnect login (case sensitive), provided by Expedia.                                                                                                                                                                                                                                                       | - Minimum length: 4                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum length: 30                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Username exists                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - User is allowed to access Expedia QuickConnect                                                                                                                                                                  |
| 1                                                                                                                                                                                                                                                                                                                                                                                     | @password                | String    |     | Password for Expedia QuickConnect login (case sensitive), provided by Expedia.                                                                                                                                                                                                                                                       | - Minimum length: 6                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum length: 30                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Password fits with the username                                                                                                                                                                                 |
| 1                                                                                                                                                                                                                                                                                                                                                                                     | Hotel                    | -         |     | Information about Hotel                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                  |
| 1                                                                                                                                                                                                                                                                                                                                                                                     | @id                      | Integer   |     | Hotel ID defined by Expedia and uniquely identifying a property in Expedia system.                                                                                                                                                                                                                                                   | - Positive integer of 14 digits or less                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Hotel ID is valid                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Hotel ID in Expedia system is assigned to the credentials provided in Authentication node.                                                                                                                      |
| 1                                                                                                                                                                                                                                                                                                                                                                                     | AvailRateUpdate          | -         |     | Grouping of updates for one or more room type(s) and rate plan(s), for one or a list of date ranges.                                                                                                                                                                                                                                 | This element can be omitted in the request and everything brought back one level down if EQC partner doesn’t see a need to send multiple updates within same message, but also to insure backward compatibility. |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | DateRange                | -         |     | Specify dates on which availability and rate information provided in this message applies. A 'from' and a 'to' date must be specified. They can be equal if the EQC partner wants to update only one date.                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      This element can be repeated more than once if EQC partner wants to update non-consecutive dates or date ranges.                                                                                                                                                                                                                      | - “from date” &lt;= “to date”                                                                                                                                                                                    |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @from                    | Date      |     | Start date of the interval (format: yyyy-mm-dd)                                                                                                                                                                                                                                                                                      | - “From date” &gt;= today – 1                                                                                                                                                                                    |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @to                      | Date      |     | End date of the interval (format: yyyy-mm-dd).                                                                                                                                                                                                                                                                                       | - “To date” &lt;= (today + 2yrs + 1 day)                                                                                                                                                                         |
| The following 7 attributes are used to indicate on which day of the week, from the date range specified in the “from”-“to” attributes, the updates should be applied. If none of the 7 attributes are specified, updates will apply to all days of the week. As soon as one attribute is specified, the updates will only apply to the days where the attribute value is set to true. 
                                                                                                                                                                                                                                                                                                                                                                                        
 If EQC partners need to use this feature, Expedia recommends specifying all 7 attributes, indicating on which day the updates should be applied (attribute value=true) and on which day the updates should not be applied (attribute value=false)                                                                                                                                      |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @sun                     | Boolean   | \*  | If set to true, apply update for each Sunday in the specified date interval.                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @mon                     | Boolean   | \*  | If set to true, apply update for each Monday in the specified date interval.                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @tue                     | Boolean   | \*  | If set to true, apply update for each Tuesday in the specified date interval.                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @wed                     | Boolean   | \*  | If set to true, apply update for each Wednesday in the specified date interval.                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @thu                     | Boolean   | \*  | If set to true, apply update for each Thursday in the specified date interval.                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @fri                     | Boolean   | \*  | If set to true, apply update for each Friday in the specified date interval.                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @sat                     | Boolean   | \*  | If set to true, apply update for each Saturday in the specified date interval.                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | RoomType                 | -         |     | Room type to be updated by this message.                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      This element can be repeated more than once if hotel wants to update multiple room types for the same set of dates.                                                                                                                                                                                                                   |                                                                                                                                                                                                                  |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @id                      | String    |     | Room type ID (defined by Expedia). Note: mapping of Expedia IDs to hotel codes has to be done by EQC partner.                                                                                                                                                                                                                        | - String of 50 characters or less.                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - RoomType ID is valid only if the specified hotel has the corresponding room type defined for it in Expedia Partner Central.                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Room type should be active. If it isn’t, the update will still work but a warning will be returned to indicate that this room type is inactive.                                                                 |
| 2                                                                                                                                                                                                                                                                                                                                                                                     | @closed                  | Boolean   | \*  | If true, the room type is no longer available on Expedia for dates specified in the request.                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      If false, the room type is reopened if previously closed, or stays open if already open.                                                                                                                                                                                                                                              | - A close request will be refused if the room is enabled for base allocation and has base allocation left.                                                                                                       |
| 3                                                                                                                                                                                                                                                                                                                                                                                     | Inventory                | -         |     | Number of rooms being made available for sale on Expedia.                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      **Note: only applies to a single room type**.                                                                                                                                                                                                                                                                                         | - Either flexibleAllocation or totalInventoryAvailable, but not both, must be sent in any message for an availability update.                                                                                    |
| 3                                                                                                                                                                                                                                                                                                                                                                                     | @flexibleAllocation      | Integer   | \*  | In the case of a hotel using base allocation: number of additional rooms available for this room type, for each day specified by "DateRange" element.                                                                                                                                                                                | - Minimum value: 0                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum value: 4999                                                                                                                                                                                             |
| 3                                                                                                                                                                                                                                                                                                                                                                                     | @totalInventoryAvailable | Integer   | \*  | Total number of rooms made available via Expedia for this room type, for each day specified by “DateRange” element, inclusive of base and flexible allocation.                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      Note: In the case of a hotel using base allocation: if the value sent is lower than the current base allocation room count, the Integer value will be **changed** by Expedia QuickConnect to equal the current base allocation amount and a warning (7013) will be returned.                                                          | - Minimum value: 0                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum value: 4999                                                                                                                                                                                             |
| 3                                                                                                                                                                                                                                                                                                                                                                                     | RatePlan                 | -         | \*  | Information about a rate plan.                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      This element can be repeated more than once if hotel wants to update multiple rate plans under this room type for the same set of dates.                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      Note:                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      - Rate plans can only belong to a single room type.                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      - Rate plans should be active. If it isn’t, the update will still work but a warning will be returned to indicate that this rate plan is inactive.                                                                                                                                                                                    |                                                                                                                                                                                                                  |
| 3                                                                                                                                                                                                                                                                                                                                                                                     | @id                      | String    |     | Rate plan ID (assigned by Expedia). Unique throughout Expedia system, so the same rate plan ID cannot be associated to more than one room type.                                                                                                                                                                                      | - String of 50 characters or less                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - RatePlan ID is valid only if the specified hotel has the corresponding rate plan defined for it in Expedia Partner Central.                                                                                     |
| 3                                                                                                                                                                                                                                                                                                                                                                                     | @closed                  | Boolean   | \*  | If true, the rate plan is no longer available on Expedia for dates specified under the room type.                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      If false, the rate plan is reopened if previously closed, or stays open if already open.                                                                                                                                                                                                                                              | - For hotels with base allocation contracts, if this is the last rate plan opened, and a close request is received, it will be rejected with warning code 7014.                                                  |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | Rate                     | -         | \*  | Room rates.                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      The type of rate (sell, net, LAR) to include depends on the configuration for this hotel. Up to 28 rate elements can be specified when updating per day and per length of stay rates. Else only one rate element should be defined.                                                                                                   | - Use only one pricing model                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Pricing model in synch with configuration of the property on Expedia Partner Central or via the PARR interface                                                                                                  |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @rateChangeIndicator     | Boolean   | \*  | To be used with rate plans enabled for day-of-arrival pricing only (message will be rejected if this attribute is used in conjunction with a rate plan that is not enabled for DOA pricing). Indicates that regardless of the applicable rate on the arrival date, the rate will change on this date.                                | - Rate plan is day-of-arrival pricing enabled. It not, update is rejected with error code 3125.                                                                                                                  |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @currency                | String    | \*  | 3-letter currency code assigned to property on Expedia Partner Central. Based on ISO 4217 specification.                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      Optional only when message is for rate change indicator updates, without any rate modification.                                                                                                                                                                                                                                       | - Minimum length = 3                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Must match the property currency defined on Expedia Partner Central                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Must always be provided when update request includes rates.                                                                                                                                                     |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @lengthOfStay            | Int       | \*  | For properties managing per day and per length of stay rates. Rates from length of stay 1 up to 28 can be defined by arrival date. This attribute contains the length of stay for which this rate applies.                                                                                                                           | - Minimum value=1                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum value=28                                                                                                                                                                                                |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | PerDay                   | -         | \*  | To be used when property is configured with Per Day pricing on Expedia Partner Central. This rate is for base occupancy of the room.                                                                                                                                                                                                 | - Property is configured with per day pricing on Expedia Partner Central.                                                                                                                                        |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | @rate                    | Decimal   |     | Rate for base occupancy, per day. When used in conjunction with length of stay pricing attribute, the rate defined is the rate per day. If the rate is for 100$ for LOS=7, then the total of this stay’s rate would be 7x100=700.                                                                                                    | - Rate has to be &gt;= 0.000                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Rate has to be &lt;= 16 digits long                                                                                                                                                                             |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | PerOccupancy             | -         | \*  | To be used when property is configured with occupancy based pricing on Expedia Partner Central. The rate specified here is for the total occupancy and does not represent a per-person value. So if the occupancy is 3, and the rate specified is $200, the rate of this room when a customer books it through Expedia will be $200. | - Property is configured with occupancy-based pricing on Expedia Partner Central.                                                                                                                                |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | @occupancy               | Integer   |     | Occupancy of the room to which the rate specified applies (not related to base occupancy).                                                                                                                                                                                                                                           | - Minimum value: 1                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum value: max occupancy defined for this room in Expedia system.                                                                                                                                           |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | @rate                    | Decimal   |     | Rate for total occupancy.                                                                                                                                                                                                                                                                                                            | - Rate has to be &gt;= 0.000                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Rate has to be &lt;= 16 digits long                                                                                                                                                                             |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | PerPerson                | -         | \*  | To be used when property is configured with per person pricing on Expedia Partner Central. The rate specified here will be for one person, for double occupancy. For example, a rate of $75 means that a customer booking this room for 2 person will be charged $75x2=$150.                                                         | - Property is configured with Per Person pricing on Expedia Partner Central                                                                                                                                      |
| 5                                                                                                                                                                                                                                                                                                                                                                                     | @rate                    | Decimal   |     | Rate for one person, based on double occupancy. Single person supplement and additional person fees are configured when rate plan is created and cannot be modified in this interface.                                                                                                                                               | - Rate has to be &gt;= 0.000                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Rate has to be &lt;= 16 digits long                                                                                                                                                                             |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | Restrictions             | -         | \*  |                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                  |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @minLOS                  | Integer   | \*  | Specifies minimum length of stay required to qualify for this rate. Guest has to stay at least this number of nights to benefit from rate. If not specified, the minimum length of stay will be set to a default value configured in Expedia systems (1 is the default, but it can be changed).                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      Refer to section 5.6.4 for more details on MinLOS and MaxLOS                                                                                                                                                                                                                                                                          | - Minimum value: 1                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Maximum value: 28                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             - Attempting to set MinLOS greater than Expedia’s configured value for the hotel will result in the update being refused with error code 3135.                                                                    |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @maxLOS                  | Integer   | \*  | Specifies maximum length of stay allowed for this product and day. If not specified, the maximum length of stay value will be set to a default value configured in Expedia systems (28 is the default, but it can be changed).                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                      Refer to section 5.6.4 for more details on MinLOS and MaxLOS.                                                                                                                                                                                                                                                                         | 1.                                                                                                                                                                                                               |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @closedToArrival         | Boolean   | \*  | Designates the rate plan as unavailable for check-in by customers. A customer’s stay must start on an earlier or later date in order to access this rate plan.                                                                                                                                                                       |                                                                                                                                                                                                                  |
| 4                                                                                                                                                                                                                                                                                                                                                                                     | @closedToDeparture       | Boolean   | \*  | Designates the rate plan as unavailable for check-out by customers. A customer’s stay must end on an earlier or later date in order to access this rate plan.                                                                                                                                                                        |                                                                                                                                                                                                                  |

**Table 7**: AR RQ Complete schema definition

<span id="_Toc162860242" class="anchor"><span id="_Toc404960462" class="anchor"></span></span>Availability and Rate Response (AR RS)
------------------------------------------------------------------------------------------------------------------------------------

The availability and rate response message is straightforward: it is returned synchronously to update the property’s system with the status of the AR request. The status can either be Success or Error. If successful, it can contain a warning.

### <span id="_Toc162860243" class="anchor"><span id="_Toc404960463" class="anchor"></span></span>AR RS Schema Overview

<img src="./media/image7.png" width="385" height="109" />

<span style="font-variant:small-caps;">Figure 4: Graphical representation of the AR RS XML message</span>

### <span id="_Toc162860244" class="anchor"><span id="_Toc404960464" class="anchor"></span></span>AR RS Schema Complete Definition

> Legend: **L** = level in the XML message | **O** = optional

| L   | Data element      | Data type | O   | Description                                                                                                                                                                                                                              |
|-----|-------------------|-----------|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0   | AvailRateUpdateRS | NA        |     | Root element                                                                                                                                                                                                                             |
| 0   | @xmlns            | URL       |     | Namespace which belongs to this message. Also used to validate version of schema on which this message is based. Namespace for AR RS messages <http://www.expediaconnect.com/EQC/AR/2007/02>                                             |
| 1   | Success           | NA        |     | Element appears if the request to update availability and rates was successful. The node will be empty.                                                                                                                                  
                                                                                                                                                                                                                                                                                       
                                             - If this element is present, Error node(s) does not appear.                                                                                                                                                                              
                                                                                                                                                                                                                                                                                       
                                             - Not everything from the request was successfully processed if warnings are also returned.                                                                                                                                               |
| 2   | Warning           | String    |     | Detailed description of a warning. When this element appears, anything that is not listed in the warning list is assumed to be successfully processed by Expedia and updated in Expedia system.                                          
                                                                                                                                                                                                                                                                                       
                                             Occurrence of this element means the update request was partially applied. For example, if one of the rates provided violates our rate verification threshold, that specific rate will not be applied, but the rest of the updates will.  
                                                                                                                                                                                                                                                                                       
                                             - Maximum length: 1024 characters.                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                       
                                             - Maximum number of occurrences per warning code: 20                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                       
                                             All warning scenarios are described in section 10.5 “AR Response Business Warnings”                                                                                                                                                       |
| 2   | @code             | Int       |     | Code for the warning.                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                       
                                             - Code will be between 7,000 and 8,000.                                                                                                                                                                                                   |
| 1   | Error             | String    |     | Detailed description of an error message. When this element appears, **nothing** included in the AR request was processed.                                                                                                               
                                                                                                                                                                                                                                                                                       
                                             One or more of this element appears if the request failed.                                                                                                                                                                                
                                                                                                                                                                                                                                                                                       
                                             - If this element is present, Success node does not appear.                                                                                                                                                                               
                                                                                                                                                                                                                                                                                       
                                             - Maximum length: 1024 characters.                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                       
                                             All error scenarios are described in section 10 “Troubleshooting”.                                                                                                                                                                        |
| 1   | @code             | Int       |     | Code for this error, for example: authentication, xml structure, business validation. - Code will be between 1000 and 7000.                                                                                                              |

**Table 8**: AR RS Complete schema definition

<span id="_Toc162860245" class="anchor"><span id="_Toc404960465" class="anchor"></span></span>
----------------------------------------------------------------------------------------------

<span id="_Toc162860246" class="anchor"></span>

<span id="_Toc153361274" class="anchor"><span id="_Toc153362580" class="anchor"><span id="_Toc153363162" class="anchor"><span id="_Toc153361275" class="anchor"><span id="_Toc153362581" class="anchor"><span id="_Toc153363163" class="anchor"><span id="_Toc153361276" class="anchor"><span id="_Toc153362582" class="anchor"><span id="_Toc153363164" class="anchor"><span id="_Toc153361277" class="anchor"><span id="_Toc153362583" class="anchor"><span id="_Toc153363165" class="anchor"><span id="_Toc153361278" class="anchor"><span id="_Toc153362584" class="anchor"><span id="_Toc153363166" class="anchor"><span id="_Toc153361279" class="anchor"><span id="_Toc153362585" class="anchor"><span id="_Toc153363167" class="anchor"><span id="_Toc153361280" class="anchor"><span id="_Toc153362586" class="anchor"><span id="_Toc153363168" class="anchor"><span id="_Ref150867072" class="anchor"><span id="_Toc162860255" class="anchor"><span id="_Toc404960466" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>Guidelines and Best Practices
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Expedia recommends several best practices to maximize the chances of success for an availability and rate update sent through the AR interface. Expedia does not enforce best practices, but strongly recommends conforming to them to avoid problems.

Poorly designed systems risk getting disconnected from Expedia QuickConnect, without being allowed to connect back until the connectivity is improved.

### <span id="_Toc300583985" class="anchor"><span id="_Toc301196149" class="anchor"><span id="_Toc300583986" class="anchor"><span id="_Toc301196150" class="anchor"><span id="_Toc404960467" class="anchor"><span id="_Toc162860257" class="anchor"></span></span></span></span></span></span>EQC Simulator usage

Before being allowed to connect to Expedia production systems, the EQC partner must confirm it was able to use the EQC Simulator successfully. Please read

Appendix A – EQC Simulator User Guide section of this document for more details on how the EQC Simulator can be used and what kind of scenarios can be tested with it.

### <span id="_Ref300570575" class="anchor"><span id="_Toc404960468" class="anchor"></span></span>Sending updates to Expedia

In order to keep Expedia in synch with the hotel availabilty and rates, updates should be triggered by the hotel’s system as soon as rates, availability or restrictions change.

Speaking from experience, Expedia expects to receive per day, on average, approximately 180 updates per product, per hotel. For a typical hotel connected through EQC, which has on average 10 different room type/rate plans combinations, this should translate into approximately 1,800 updates per hotel, every day.

Some specific conditions could cause hotels to generate significantly more updates per day. If you feel that your hotel will consistently generate more than 180 updates per product, please request help from Expedia through your Connectivity Account Manager or through the discussion forum on <http://www.expediaquickconnect.com>

#### Counting how many updates are included in a message

Expedia has specific rules and recommendations around message bundling, specifically related to how many updates are included in any one given message. Update count is defined as follow:

> *Expedia defines the Update Count of an AR message as the number of distinct data elements being changed by that message. Each individual rate, restriction or status change for one stay date is counted as 1 update*

For example, the following message excerpt contains 3 updates: number of rooms, a rate and a CTD restriction for 1 day.

> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-01"/&gt;
>
> &lt;RoomType id="9989"&gt;
>
> &lt;Inventory totalInventoryAvailable="50"/&gt;
>
> &lt;RatePlan id="556895"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="55.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToDeparture="true"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;

&lt;/AvailRateUpdate&gt;

The following excerpt contains 1098 updates: number of rooms, a rate and a CTD for 366 days.

> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2013-07-31"/&gt;
>
> &lt;RoomType id="9989"&gt;
>
> &lt;Inventory totalInventoryAvailable="50"/&gt;
>
> &lt;RatePlan id="556895"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="55.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToDeparture="true"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;

&lt;/AvailRateUpdate&gt;

#### Prevent Duplicate Updates

The property must ensure that it only sends Expedia QuickConnect *true* updates, *not* information that has already been transmitted to Expedia. For example, it is poor practice to send a property’s entire Expedia availabilty every day. Messages should only be sent to keep Expedia synchronized with changes on the hotel system.

Avoiding redundant updates will also ensure that those necessary updates are processed faster, since each update is handled sequentially and:

-   Expedia QuickConnect only allows one connection open per property at a time

-   Processing one message can be a lengthy process, taking up to 5 seconds.

#### Availabilty Changes related to Expedia bookings

Whenever Expedia books or cancels a room, the hotel system interface to Expedia QuickConnect should NOT update number of rooms available for sale on Expedia asthis will be updated automatically by Expedia.

For example, if the property receives a booking for room type ID “111” for December 24<sup>th</sup> 2012 to December 26<sup>th</sup> 2012 from Expedia, the property should NOT send a decrement of 1 room for the room type “111” for December 24<sup>th</sup> and December 25<sup>th</sup> 2006. Expedia is already aware.

#### <span id="_Toc148329719" class="anchor"><span id="_Toc148422839" class="anchor"><span id="_Toc148329720" class="anchor"><span id="_Toc148422840" class="anchor"><span id="_Ref298832507" class="anchor"><span id="_Toc162860259" class="anchor"><span id="_Ref298837990" class="anchor"></span></span></span></span></span></span></span>Combining multiple updates in one message to make messaging more efficient

To reduce the number of messages sent to Expedia QuickConnect, the EQC partner should make use of multiple AvailRateUpdate elements in one message, and leverage the possibility to specify multiple date ranges, room types and rate plans in the same message.

Multiple updates can be bundled into one single AR message by making use of the new AR schema that allows for one or more AvailRateUpdate elements. The following example is an update request for 5 different products and for one day, with different values for each product:

> &lt;?xml version="1.0" encoding="UTF-8"?&gt;
>
> &lt;!-- Sample AR request message: multiple AvailRateUpdate elements--&gt;
>
> &lt;AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06"&gt;
>
> &lt;Authentication username="testuser" password="testpass"/&gt;
>
> &lt;Hotel id="3546"/&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-01"/&gt;
>
> &lt;RoomType id="558875" closed="false"&gt;
>
> &lt;Inventory totalInventoryAvailable="10"/&gt;
>
> &lt;RatePlan id="556895"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="100.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="false" closedToDeparture="false" minLOS="2" maxLOS="7"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-01"/&gt;
>
> &lt;RoomType id="558875" closed="false"&gt;
>
> &lt;RatePlan id="665456"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="150.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="false" closedToDeparture="true" minLOS="1" maxLOS="14"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-01"/&gt;
>
> &lt;RoomType id="558875" closed="false"&gt;
>
> &lt;RatePlan id="98789"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="180.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="7"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-01"/&gt;
>
> &lt;RoomType id="99677" closed="false"&gt;
>
> &lt;Inventory totalInventoryAvailable="10"/&gt;
>
> &lt;RatePlan id="35345"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="110.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="7"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-01"/&gt;
>
> &lt;RoomType id="99677" closed="false"&gt;
>
> &lt;RatePlan id="342223"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerDay rate="145.00"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="14"/&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;/AvailRateUpdateRQ&gt;

#### Restricting the maximum number of updates per message

Expedia will restrict the max number of updates allowed in one message. Any request containing more than 3000 updates will be rejected by Expedia and no update will be applied. The error message returned will be:

3107: Update exceeds allowable size - Maximum allowable size is 3000 updates

If this happens, the EQC partner needs to make sure to revise its implementation of Expedia QuickConnect interface to prevent it from sending messages containing more than 3000 updates. Different strategies can be followed to break down messages into smaller sizes, such as breaking it down by date range or limiting the number of products included per message.

Expedia recommends designing a system that properly balances between number of messages generated and number of updates included in one message. While the limit of updates per message is 3,000, Expedia doesn’t expect to see many messages coming close to this limit.

If you are unsure on how to proceed, we recommend leveraging the EQC discussion forum on <http://www.expediaquickconnect.com> to get help.

### Date Ranges

Properties can manage their rates and availabilty for up to 2 years in the future.

We recommend that EQC partners be careful when making use of long date ranges within one AR RQ. Long date ranges imply many updates per message, and Expedia limits one message to 3,000 updates at most. Refer to section 5.6.2 above for more details.

### <span id="_Toc297121944" class="anchor"><span id="_Toc297123209" class="anchor"><span id="_Toc297123636" class="anchor"><span id="_Toc297722483" class="anchor"><span id="_Toc298235358" class="anchor"><span id="_Toc298851758" class="anchor"><span id="_Toc300583990" class="anchor"><span id="_Toc297121945" class="anchor"><span id="_Toc297123210" class="anchor"><span id="_Toc297123637" class="anchor"><span id="_Toc297722484" class="anchor"><span id="_Toc298235359" class="anchor"><span id="_Toc298851759" class="anchor"><span id="_Toc300583991" class="anchor"><span id="_Toc297121946" class="anchor"><span id="_Toc297123211" class="anchor"><span id="_Toc297123638" class="anchor"><span id="_Toc297722485" class="anchor"><span id="_Toc298235360" class="anchor"><span id="_Toc298851760" class="anchor"><span id="_Toc300583992" class="anchor"><span id="_Toc297121947" class="anchor"><span id="_Toc297123212" class="anchor"><span id="_Toc297123639" class="anchor"><span id="_Toc297722486" class="anchor"><span id="_Toc298235361" class="anchor"><span id="_Toc298851761" class="anchor"><span id="_Toc300583993" class="anchor"><span id="_Toc297121948" class="anchor"><span id="_Toc297123213" class="anchor"><span id="_Toc297123640" class="anchor"><span id="_Toc297722487" class="anchor"><span id="_Toc298235362" class="anchor"><span id="_Toc298851762" class="anchor"><span id="_Toc300583994" class="anchor"><span id="_Toc297121949" class="anchor"><span id="_Toc297123214" class="anchor"><span id="_Toc297123641" class="anchor"><span id="_Toc297722488" class="anchor"><span id="_Toc298235363" class="anchor"><span id="_Toc298851763" class="anchor"><span id="_Toc300583995" class="anchor"><span id="_Toc297121950" class="anchor"><span id="_Toc297123215" class="anchor"><span id="_Toc297123642" class="anchor"><span id="_Toc297722489" class="anchor"><span id="_Toc298235364" class="anchor"><span id="_Toc298851764" class="anchor"><span id="_Toc300583996" class="anchor"><span id="_Toc297121951" class="anchor"><span id="_Toc297123216" class="anchor"><span id="_Toc297123643" class="anchor"><span id="_Toc297722490" class="anchor"><span id="_Toc298235365" class="anchor"><span id="_Toc298851765" class="anchor"><span id="_Toc300583997" class="anchor"><span id="_Toc297121952" class="anchor"><span id="_Toc297123217" class="anchor"><span id="_Toc297123644" class="anchor"><span id="_Toc297722491" class="anchor"><span id="_Toc298235366" class="anchor"><span id="_Toc298851766" class="anchor"><span id="_Toc300583998" class="anchor"><span id="_Toc297121953" class="anchor"><span id="_Toc297123218" class="anchor"><span id="_Toc297123645" class="anchor"><span id="_Toc297722492" class="anchor"><span id="_Toc298235367" class="anchor"><span id="_Toc298851767" class="anchor"><span id="_Toc300583999" class="anchor"><span id="_Toc297121954" class="anchor"><span id="_Toc297123219" class="anchor"><span id="_Toc297123646" class="anchor"><span id="_Toc297722493" class="anchor"><span id="_Toc298235368" class="anchor"><span id="_Toc298851768" class="anchor"><span id="_Toc300584000" class="anchor"><span id="_Toc297121955" class="anchor"><span id="_Toc297123220" class="anchor"><span id="_Toc297123647" class="anchor"><span id="_Toc297722494" class="anchor"><span id="_Toc298235369" class="anchor"><span id="_Toc298851769" class="anchor"><span id="_Toc300584001" class="anchor"><span id="_Toc297121956" class="anchor"><span id="_Toc297123221" class="anchor"><span id="_Toc297123648" class="anchor"><span id="_Toc297722495" class="anchor"><span id="_Toc298235370" class="anchor"><span id="_Toc298851770" class="anchor"><span id="_Toc300584002" class="anchor"><span id="_Toc297121957" class="anchor"><span id="_Toc297123222" class="anchor"><span id="_Toc297123649" class="anchor"><span id="_Toc297722496" class="anchor"><span id="_Toc298235371" class="anchor"><span id="_Toc298851771" class="anchor"><span id="_Toc300584003" class="anchor"><span id="_Toc300584004" class="anchor"><span id="_Toc301196154" class="anchor"><span id="_Toc300584005" class="anchor"><span id="_Toc301196155" class="anchor"><span id="_Toc300584006" class="anchor"><span id="_Toc301196156" class="anchor"><span id="_Toc300584007" class="anchor"><span id="_Toc301196157" class="anchor"><span id="_Toc300584008" class="anchor"><span id="_Toc301196158" class="anchor"><span id="_Toc300584009" class="anchor"><span id="_Toc301196159" class="anchor"><span id="_Error_Handling_and" class="anchor"><span id="_Ref183234738" class="anchor"><span id="_Toc404960470" class="anchor"><span id="_Ref150862496" class="anchor"><span id="_Ref150867939" class="anchor"><span id="_Toc162860261" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>Minimum and Maximum Lengths of Stay

#### Arrival VS stay-through

Expedia supports two different methods to apply minimum and maximum length of stay restrictions.

*Arrival-based restrictions*: Minimum and maximum length of a hotel stay which the system calculates by reading the LOS configured for the requested arrival date.

*Stay-through based restrictions*: Minimum and maximum length of a hotel stay which the system calculates by reading all days of the requested stay and applying the most restrictive values from any of those days.

This is a hotel-level setting in Expedia system, and any Expedia market managers can modify this setting. If you are not sure which setting applies to your hotel, please contact:

-   rollout@expedia.com for new activations

-   <hothelp@expedia.com> for existing connections

#### Restricting updates beyond a certain Minimum length of stay value

Expedia will not accept updates past a certain minimum length of stay value. When a hotel exceeds the maximum value allowed per Expedia configuration, it will receive the following error:

3135: MinLOS value (\[value specified in message\]) exceeds Extranet auto-approval threshold (\[configuration for this hotel in Expedia system\]) for length of stay.

This is a setting that is configured on a per-hotel basis in Expedia system. If you feel your hotel is misconfigured, please reach out to your market manager.

### <span id="_Toc298235374" class="anchor"><span id="_Toc298851774" class="anchor"><span id="_Toc300584011" class="anchor"><span id="_Toc298235375" class="anchor"><span id="_Toc298851775" class="anchor"><span id="_Toc300584012" class="anchor"><span id="_Toc298235376" class="anchor"><span id="_Toc298851776" class="anchor"><span id="_Toc300584013" class="anchor"><span id="_Toc298235377" class="anchor"><span id="_Toc298851777" class="anchor"><span id="_Toc300584014" class="anchor"><span id="_Toc298235378" class="anchor"><span id="_Toc298851778" class="anchor"><span id="_Toc300584015" class="anchor"><span id="_Toc298235379" class="anchor"><span id="_Toc298851779" class="anchor"><span id="_Toc300584016" class="anchor"><span id="_Toc298235380" class="anchor"><span id="_Toc298851780" class="anchor"><span id="_Toc300584017" class="anchor"><span id="_Toc298235381" class="anchor"><span id="_Toc298851781" class="anchor"><span id="_Toc300584018" class="anchor"><span id="_Toc298235382" class="anchor"><span id="_Toc298851782" class="anchor"><span id="_Toc300584019" class="anchor"><span id="_Toc298235383" class="anchor"><span id="_Toc298851783" class="anchor"><span id="_Toc300584020" class="anchor"><span id="_Toc298235384" class="anchor"><span id="_Toc298851784" class="anchor"><span id="_Toc300584021" class="anchor"><span id="_Toc298235385" class="anchor"><span id="_Toc298851785" class="anchor"><span id="_Toc300584022" class="anchor"><span id="_Toc298235386" class="anchor"><span id="_Toc298851786" class="anchor"><span id="_Toc300584023" class="anchor"><span id="_Toc298235387" class="anchor"><span id="_Toc298851787" class="anchor"><span id="_Toc300584024" class="anchor"><span id="_Toc298235388" class="anchor"><span id="_Toc298851788" class="anchor"><span id="_Toc300584025" class="anchor"><span id="_Toc298235389" class="anchor"><span id="_Toc298851789" class="anchor"><span id="_Toc300584026" class="anchor"><span id="_Toc298235390" class="anchor"><span id="_Toc298851790" class="anchor"><span id="_Toc300584027" class="anchor"><span id="_Toc298235391" class="anchor"><span id="_Toc298851791" class="anchor"><span id="_Toc300584028" class="anchor"><span id="_Toc298235392" class="anchor"><span id="_Toc298851792" class="anchor"><span id="_Toc300584029" class="anchor"><span id="_Toc298235393" class="anchor"><span id="_Toc298851793" class="anchor"><span id="_Toc300584030" class="anchor"><span id="_Toc298235394" class="anchor"><span id="_Toc298851794" class="anchor"><span id="_Toc300584031" class="anchor"><span id="_Toc298235395" class="anchor"><span id="_Toc298851795" class="anchor"><span id="_Toc300584032" class="anchor"><span id="_Toc298235396" class="anchor"><span id="_Toc298851796" class="anchor"><span id="_Toc300584033" class="anchor"><span id="_Toc298235397" class="anchor"><span id="_Toc298851797" class="anchor"><span id="_Toc300584034" class="anchor"><span id="_Toc298235398" class="anchor"><span id="_Toc298851798" class="anchor"><span id="_Toc300584035" class="anchor"><span id="_Toc298235399" class="anchor"><span id="_Toc298851799" class="anchor"><span id="_Toc300584036" class="anchor"><span id="_Toc298235400" class="anchor"><span id="_Toc298851800" class="anchor"><span id="_Toc300584037" class="anchor"><span id="_Toc298235401" class="anchor"><span id="_Toc298851801" class="anchor"><span id="_Toc300584038" class="anchor"><span id="_Toc298235402" class="anchor"><span id="_Toc298851802" class="anchor"><span id="_Toc300584039" class="anchor"><span id="_Toc298235403" class="anchor"><span id="_Toc298851803" class="anchor"><span id="_Toc300584040" class="anchor"><span id="_Toc298235404" class="anchor"><span id="_Toc298851804" class="anchor"><span id="_Toc300584041" class="anchor"><span id="_Toc298235405" class="anchor"><span id="_Toc298851805" class="anchor"><span id="_Toc300584042" class="anchor"><span id="_Toc298235406" class="anchor"><span id="_Toc298851806" class="anchor"><span id="_Toc300584043" class="anchor"><span id="_Toc298851807" class="anchor"><span id="_Toc300584044" class="anchor"><span id="_Toc298851808" class="anchor"><span id="_Toc300584045" class="anchor"><span id="_Toc298851809" class="anchor"><span id="_Toc300584046" class="anchor"><span id="_Toc298851838" class="anchor"><span id="_Toc300584075" class="anchor"><span id="_Toc298851839" class="anchor"><span id="_Toc300584076" class="anchor"><span id="_Toc298851892" class="anchor"><span id="_Toc300584129" class="anchor"><span id="_Toc298851893" class="anchor"><span id="_Toc300584130" class="anchor"><span id="_Toc298851894" class="anchor"><span id="_Toc300584131" class="anchor"><span id="_Toc298851895" class="anchor"><span id="_Toc300584132" class="anchor"><span id="_Toc298851896" class="anchor"><span id="_Toc300584133" class="anchor"><span id="_Toc162860262" class="anchor"><span id="_Toc404960471" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>Sequencing/Ordering of Messages

Sequencing of messages (order in which messages are sent by the EQC partner and then processed by Expedia QuickConnect) is critical. EQC partners should ensure that messages for Expedia QuickConnect are sent in the right order so that Expedia QuickConnect is not updated with outdated information.

Since Expedia QuickConnect only accepts one connection at a time per property, and processes requests synchronously, an older message sent after a newer one would be processed in the order it is received, potentially overwriting more up to date information in Expedia QuickConnect. Therefore, it is important that EQC partners take extra care when designing their solution to make sure this cannot happen in their systems.

### <span id="_Ref298926907" class="anchor"><span id="_Ref298926911" class="anchor"><span id="_Toc404960472" class="anchor"><span id="_Toc162860263" class="anchor"></span></span></span></span>Property Re/Synchronization Mechanism 

For many different reasons, it is possible for Expedia and its EQC partner to have their rates and/or availability fall out-of-synch.

When a property is first activated on Expedia QuickConnect, the EQC partner’s system and Expedia QuickConnect should be synchronized. The EQC partner’s system therefore requires a function that can synchronize the property by triggering updates that send all the information about rates and availability for at least the next 365 days.

Also, an EQC partner could experience system problems and lose track of which updates were already sent to Expedia. It might then become necessary to perform resynch of availability and rates for specific products and dates.

Several parameters should be configurable before triggering synchronization:

-   The interval of dates on which to perform the synchronization

-   Which room type(s) (one or more, possibly a list)

-   Which rate plan(s) (one or more, possibly a list)

<span id="_Toc162860264" class="anchor"></span>The (re)synchronization data should only be sent once, without repeating the same information twice for any product included in the process.

### <span id="_Toc300584136" class="anchor"><span id="_Toc301196163" class="anchor"><span id="_Ref298841118" class="anchor"><span id="_Ref316475298" class="anchor"><span id="_Ref316475311" class="anchor"><span id="_Ref316475314" class="anchor"><span id="_Toc404960473" class="anchor"><span id="_Ref183234726" class="anchor"><span id="OLE_LINK10" class="anchor"><span id="OLE_LINK11" class="anchor"></span></span></span></span></span></span></span></span></span></span>Send the right type of rate to Expedia: sell rate, net rate or LAR?

Expedia accepts receiving sell rate, net rate or LAR (lowest available rate) for rate update through EQC, and the type of rate to send to Expedia must be insync with the configuration in the Expedia system.

Please verify which type of rate is being used to update Expedia products using the new Product, Avail, Rate and Restrictions API, or log on the Extranet and consult product information there.

|                               |                                   |                       |
|-------------------------------|-----------------------------------|-----------------------|
| Product Type                  | Distribution Type                 | Rate Acquisition Type |
| Flex product, sell rate based | Hotel Collect and Expedia Collect | Sell rate             |
| Flex product, net rate based  | Hotel Collect and Expedia Collect | Net rate              |
| Expedia Collect-only product  | Expedia Collect                   | Net rate or LAR       |
| Hotel Collect-only product    | Hotel Collect                     | Sell rate             |

Please note that each flex product consists of a primary product and a derived product, where hotel should only send AR update for the primary product not for the derived product. The derived product will have the same availability as the primary product and the derived rate will be calculated by Expedia.

|                                |                                     |                                         |
|--------------------------------|-------------------------------------|-----------------------------------------|
| Product Type                   | Base Product – AR Update by Hotel   | Derived Product – Calculated by Expedia |
| Flex products, sell rate based | Hotel Collect rate plan, Sell Rate  | Expedia Collect rate plan               |
| Flex products, net rate based  | Expedia Collect rate plan, Net Rate | Hotel Collect rate plan                 |

It is critical for the EQC partner to define the right type of rate to upload because there will not be any validation done on the EQC AR interface to confirm the rate sent has the right type. Sending the wrong rate will either make Expedia rate much lower than hotel desired rate (when sending a net rate for a sell rate or LAR based product), or much higer (when sending a sell rate or LAR for a net rate based product).

### <span id="_Ref382811726" class="anchor"><span id="_Toc404960474" class="anchor"></span></span>Code to the Correct Pricing Model

When developing Expedia QuickConnect, make sure you develop the correct pricing models for your customers.

Currently Expedia offers three different pricing models. The table below provides a brief description for each of them.

| Pricing Model                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Occupancy-based Pricing**        | Pricing model based on number of travelers staying in the room.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      It is recommended for the hotel to define a rate for each applicable occupancy, and if a rate is not assigned to a given occupancy, the following rules will apply:                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      Any gap in defined occupancy rates will result in the rate for the next higher occupancy being charged (for an exception to this rule with regards to children, see below\*). So if rate is specified for occupancy of two but not for occupancy of one, the rate for double occupancy will be applied automatically when a guest wants to book a single.                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      Any number of guests exceeding the highest specified occupancy rate (up to the maximum occupancy allowed in the room) will be charged extra person fees.                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      By default, children are always charged an extra child fee and do not factor in to the occupancy being charged, with one exception: the extra child fee is waived if there is a gap in the defined occupancy rates and it costs less to treat the child as an adult. For example, if there is one adult and one child booking a room on dates where there is only a rate defined for a double occupancy and not for a single occupancy, rather than charge a double occupancy plus the extra child fee, the fee is waived for that first child.            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      \* Note that a property setting is available for those that wish to charge children as regular occupants until the number of allowed guests exceeds the highest defined occupancy.                                                                                                                                                                                                                                                                                                                                                                         |
| **Per-day Pricing**                | Pricing model where a price is assigned to a room for each day for the base occupancy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      With this pricing model, a room is assigned a rate each day for a base number of occupants. Though commonly configured for two occupants, the base number can be customized by rate plan. A single guest will always be quoted the rate for the base number of occupants, whereas guests above the base number are charged extra person fees if configured. For example, a single guest would be quoted a base double rate for each day at the property, while four guests would be quoted the base rate plus extra person fees for two of the occupants.  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      Room rates are based on the number of adults in a booking, while children are charged an extra person fee. Children are only charged an adult guest rate if there are not enough adults to fill the base occupancy for a booking. For example, a booking for one adult and two children in a hotel with per-day pricing and a base occupancy of two will only charge an extra person fee for one child.                                                                                                                                                    |
| **Per-person Pricing**             | Pricing specified for each person with a “single supplement” charged if only one person stays in the room.                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      In this pricing model, a rate is assigned to a rate plan each day at a per-person rate for a non-modifiable base number of two occupants. A single guest is charged a “single supplement”—a charge added to the per-person rate when there is only one person in the room. For example, if net rate is entered as $50 per person and there is a single supplement of $25, then the net rate for a single guest is $50 + $25 = $75, while two occupants would be 2 x $50 = $100. Extra-person fees apply to third and subsequent guests.                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      Children are only charged an adult guest rate if there are not enough adults to fill the base occupancy for a booking (and in which case there is no single supplement for the adult). For example, a booking for one adult and two children in a hotel with per-person pricing will charge the base rate (the per-person rate x 2) and an extra person fee for one child.                                                                                                                                                                                 |
| **Day-of-Arrival Pricing**         | A pricing attribute that can be optionally enabled by Expedia (at the demand of the hotel) on a rate plan, where the guest pays the same rate on each day of stay. Rate changes can be requested on specific days using a rate change indicator flag.                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      Day-of-Arrival pricing can be enabled for rate plans using anyone of the above pricing models.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Per Day Length-of-Stay Pricing** | A pricing attribute that is currently only available in conjunction with Per-Day pricing. Allows hotels to define rates for length of stays 1 up to 28, per arrival date. For each date of a year, hotels can send up to 28 rates. More specifically:                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      -   The rate to be sent for each length of stay is the rate for one night. If a rate of 100$ is sent for LOS=7, the base rate total for 7 nights will be 7x100$.                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      -   The first time a hotel sends Expedia rates for a specific day, it is recommended to send rates for all supported lengths of stay per day. For example, for arrival on September 1<sup>st</sup>, Expedia should receive up to 28 different rates, for LOS 1 to 28, assuming the hotel supports 28.                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      -   Subsquent updates should be made only to the length of stay rates changing: for example, if rates for LOS 7 and above are changing, the update message should only contain the rates for LOS 7 and above.                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      -   If a rate is not defined for a length of stay, it will not be available for sale on Expedia points of sale. This is true for both gaps between 2 defined LOS, or any LOS after the max defined. For example, if, for arrival on Septembre 1<sup>st</sup>, rates for LOS 1, 3 and 5 are defined, it will not be possible to stay for 2,4 and 6 or more nights when arriving on that date.                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      -   After a LOS rate is defined in Expedia system, it is not possible to remove it. Hotels should make use of restrictions to make previously loaded rates unavailable if needed: Min and Max LOS can be used to restrict specific length of stays, close at room and rate levels can also be used, etc.                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                      Restrictions are still in effect: for example, even if a rate for LOS=5 is defined, it might not be possible to book it if one of the subsequent days is closed for departure, or if it is completely closed at the room or rate level.                                                                                                                                                                                                                                                                                                                    |

Expedia recommends EQC partners to use occupancy-based pricing as this pricing model offers the most flexible solution for pricing. A simple migration process can also convert a property currently on the per-day pricing model to occupancy-based pricing (the property can request this from their Market Manager). Note that migration from per-person to occupancy-based pricing involves a manual transfer of information which requires scheduling with the property’s Market Manager.

Please make sure the pricing model you specify when sending rate updates is the right one pre-configured for your property on Expedia Partner Central. You can obtain pricing model information through a PARR request for product details, including the “returnRatePlanAttributes” attribute. Alternatively, you can access Expedia Partner Central and confirm, from the Inventory Grid page, which pricing model is set for your property. Should a property be using a pricing model you have not developed please contact:

-   rollout@expedia.com for new activations

-   <hothelp@expedia.com> for existing connections

### Managing Rates for a Property Using Occupancy-based Pricing

If an EQC partner now wants to change the number of occupancy levels in the room, it has first to contact its Market Manager to change the configuration of the room type (thereby updating the property’s settings on Expedia Partner Central), and then it has to send Expedia the new rates for those occupancy levels. Occupancy-based pricing also requires the rate to be set to the total amount charged for that occupancy level.

> For example, if a property already has occupancy level 4 newly configured for it on Expedia Partner Central wants to set the rate for occupancy level 4 of a room type to 160.00$

Then it should include the following input in the AR RQ message:

&lt;PerOccupancy rate="160.00" occupancy="4"/&gt;

<span id="_Toc153361291" class="anchor"><span id="_Toc153362597" class="anchor"><span id="_Toc153363179" class="anchor"><span id="_Toc153361292" class="anchor"><span id="_Toc153362598" class="anchor"><span id="_Toc153363180" class="anchor"><span id="_Toc153361293" class="anchor"><span id="_Toc153362599" class="anchor"><span id="_Toc153363181" class="anchor"><span id="_Toc153361294" class="anchor"><span id="_Toc153362600" class="anchor"><span id="_Toc153363182" class="anchor"><span id="_Toc153361296" class="anchor"><span id="_Toc153362602" class="anchor"><span id="_Toc153363184" class="anchor"><span id="_Toc153361297" class="anchor"><span id="_Toc153362603" class="anchor"><span id="_Toc153363185" class="anchor"><span id="_Toc153361298" class="anchor"><span id="_Toc153362604" class="anchor"><span id="_Toc153363186" class="anchor"><span id="_Toc153361299" class="anchor"><span id="_Toc153362605" class="anchor"><span id="_Toc153363187" class="anchor"><span id="_Toc153361300" class="anchor"><span id="_Toc153362606" class="anchor"><span id="_Toc153363188" class="anchor"><span id="_Toc153361301" class="anchor"><span id="_Toc153362607" class="anchor"><span id="_Toc153363189" class="anchor"><span id="_Toc153361302" class="anchor"><span id="_Toc153362608" class="anchor"><span id="_Toc153363190" class="anchor"><span id="_Toc153361303" class="anchor"><span id="_Toc153362609" class="anchor"><span id="_Toc153363191" class="anchor"><span id="_Toc153361304" class="anchor"><span id="_Toc153362610" class="anchor"><span id="_Toc153363192" class="anchor"><span id="_Toc153361305" class="anchor"><span id="_Toc153362611" class="anchor"><span id="_Toc153363193" class="anchor"><span id="_Toc153361306" class="anchor"><span id="_Toc153362612" class="anchor"><span id="_Toc153363194" class="anchor"><span id="_Toc153361307" class="anchor"><span id="_Toc153362613" class="anchor"><span id="_Toc153363195" class="anchor"><span id="_Toc153361308" class="anchor"><span id="_Toc153362614" class="anchor"><span id="_Toc153363196" class="anchor"><span id="_Toc153361309" class="anchor"><span id="_Toc153362615" class="anchor"><span id="_Toc153363197" class="anchor"><span id="_Toc153361310" class="anchor"><span id="_Toc153362616" class="anchor"><span id="_Toc153363198" class="anchor"><span id="_Toc153361311" class="anchor"><span id="_Toc153362617" class="anchor"><span id="_Toc153363199" class="anchor"><span id="_Toc153361312" class="anchor"><span id="_Toc153362618" class="anchor"><span id="_Toc153363200" class="anchor"><span id="_Toc153361313" class="anchor"><span id="_Toc153362619" class="anchor"><span id="_Toc153363201" class="anchor"><span id="_Toc153361314" class="anchor"><span id="_Toc153362620" class="anchor"><span id="_Toc153363202" class="anchor"><span id="_Toc153361315" class="anchor"><span id="_Toc153362621" class="anchor"><span id="_Toc153363203" class="anchor"><span id="_Toc153361316" class="anchor"><span id="_Toc153362622" class="anchor"><span id="_Toc153363204" class="anchor"><span id="_Toc153361319" class="anchor"><span id="_Toc153362625" class="anchor"><span id="_Toc153363207" class="anchor"><span id="_Toc153361320" class="anchor"><span id="_Toc153362626" class="anchor"><span id="_Toc153363208" class="anchor"><span id="_Toc153361321" class="anchor"><span id="_Toc153362627" class="anchor"><span id="_Toc153363209" class="anchor"><span id="_Toc153361326" class="anchor"><span id="_Toc153362632" class="anchor"><span id="_Toc153363214" class="anchor"><span id="_Toc153361328" class="anchor"><span id="_Toc153362634" class="anchor"><span id="_Toc153363216" class="anchor"><span id="_Toc153361330" class="anchor"><span id="_Toc153362636" class="anchor"><span id="_Toc153363218" class="anchor"><span id="_Toc153361332" class="anchor"><span id="_Toc153362638" class="anchor"><span id="_Toc153363220" class="anchor"><span id="_Toc153361335" class="anchor"><span id="_Toc153362641" class="anchor"><span id="_Toc153363223" class="anchor"><span id="_Toc153361336" class="anchor"><span id="_Toc153362642" class="anchor"><span id="_Toc153363224" class="anchor"><span id="_Toc153361337" class="anchor"><span id="_Toc153362643" class="anchor"><span id="_Toc153363225" class="anchor"><span id="_Toc153361339" class="anchor"><span id="_Toc153362645" class="anchor"><span id="_Toc153363227" class="anchor"><span id="_Toc153361340" class="anchor"><span id="_Toc153362646" class="anchor"><span id="_Toc153363228" class="anchor"><span id="_Toc153361341" class="anchor"><span id="_Toc153362647" class="anchor"><span id="_Toc153363229" class="anchor"><span id="_Toc153361342" class="anchor"><span id="_Toc153362648" class="anchor"><span id="_Toc153363230" class="anchor"><span id="_Toc153361344" class="anchor"><span id="_Toc153362650" class="anchor"><span id="_Toc153363232" class="anchor"><span id="_Toc153361348" class="anchor"><span id="_Toc153362654" class="anchor"><span id="_Toc153363236" class="anchor"><span id="_Toc153361350" class="anchor"><span id="_Toc153362656" class="anchor"><span id="_Toc153363238" class="anchor"><span id="_Toc153361352" class="anchor"><span id="_Toc153362658" class="anchor"><span id="_Toc153363240" class="anchor"><span id="_Toc153361354" class="anchor"><span id="_Toc153362660" class="anchor"><span id="_Toc153363242" class="anchor"><span id="_Toc153361355" class="anchor"><span id="_Toc153362661" class="anchor"><span id="_Toc153363243" class="anchor"><span id="_Toc153361356" class="anchor"><span id="_Toc153362662" class="anchor"><span id="_Toc153363244" class="anchor"><span id="_Closing_rate_plans" class="anchor"><span id="_Toc162860265" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>The AR API currently doesn’t support removal of occupancies. If occupancies need to be removed, please contact:

-   rollout@expedia.com for new activations

-   <hothelp@expedia.com> for existing connections

### AR Responses Containing more than 20 Warnings

When messages fail various Expedia validations, Expedia will return up to 20 warnings per type of problem. For example, if a supplier attempts to close remaining base allocation for 120 days, it will get the following response back:

> &lt;AvailRateUpdateRS xmlns="http://www.expediaconnect.com/EQC/AR/2007/02"&gt;
>
> &lt;Success&gt;
>
> &lt;Warning code="7013"&gt;Warning 1 out of 120 for this cause. Inventory date 2011-08-30; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 2 out of 120 for this cause. Inventory date 2011-08-31; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 3 out of 120 for this cause. Inventory date 2011-09-01; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 4 out of 120 for this cause. Inventory date 2011-09-02; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 5 out of 120 for this cause. Inventory date 2011-09-03; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 6 out of 120 for this cause. Inventory date 2011-09-04; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 7 out of 120 for this cause. Inventory date 2011-09-05; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 8 out of 120 for this cause. Inventory date 2011-09-06; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 9 out of 120 for this cause. Inventory date 2011-09-07; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 10 out of 120 for this cause. Inventory date 2011-09-08; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 11 out of 120 for this cause. Inventory date 2011-09-09; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 12 out of 120 for this cause. Inventory date 2011-09-10; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 13 out of 120 for this cause. Inventory date 2011-09-11; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 14 out of 120 for this cause. Inventory date 2011-09-12; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 15 out of 120 for this cause. Inventory date 2011-09-13; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 16 out of 120 for this cause. Inventory date 2011-09-14; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 17 out of 120 for this cause. Inventory date 2011-09-15; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 18 out of 120 for this cause. Inventory date 2011-09-16; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 19 out of 120 for this cause. Inventory date 2011-09-17; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;Warning code="7013"&gt;Warning 20 out of 120 for this cause. Remaining 100 warnings will not be returned, we recommend that you address this problem and resubmit this request afterwards. Inventory date 2011-09-18; Room Type ID 352546; Unable to set total inventory below the current base allocation value (12). Update will be modified to cap reduction to base allocation level. Ref=\[683b1aa6-c1b5-11e0-8047-ef7899c6c51b\]&lt;/Warning&gt;
>
> &lt;/Success&gt;
>
> &lt;/AvailRateUpdateRS&gt;

The EQC partner should solve the problems reported and attempt to resend the information to Expedia again. If needed, it is possible to obtain the full list of warnings that the request generated, if the request is issued within 7 days of the message creation date. For more details, please contact <hothelp@expedia.com>.

### Alarms and Monitoring

EQC partners should include monitors in their interface implementation that will allow partners to see the ratio of successful AR updates and to get detailed information on any errors or warnings. Alarms should also be created to notify concerned individuals (e.g. EQC partner tech support) when the rate of message errors or warnings returned by Expedia exceeds an acceptable threshold. It is recommended that an alarm be triggered when any type of message returns errors or warnings at a rate of 10% or more.

Partners should review errors and warnings frequently to ensure that bookings are received and confirmed, and that all updates are processed correctly. Failure to do so may result in Expedia booking rooms at the incorrect price or already sold out, or bookings to fall back to fax or email if not confirmed.

### <span id="_Ref234039853" class="anchor"><span id="_Toc404960478" class="anchor"></span></span>Specifying number of rooms available inclusive of base allocation

For hotels that have a base allocation agreement with Expedia, the most straightforward method for the EQC partner to update number of rooms available is to specify the total rather than a flexible allocation. The totalInventoryAvailable attribute includes base allocation as well as any flexible allocation, so the EQC partner does not need to manage a separate count for base allocation and deduct that amount from the non-base (i.e. flexible) amount before providing updates.

It is important to note, however, that if there is unsold base allocation remaining for the room type specified in an update and the totalInventoryAvailable is set lower than that base amount, then Expedia QuickConnect will automatically update the value to equal the current base amount. When the totalInventoryAvailable amount is adjusted in this manner, a warning (7013) will be returned with the success message and it will provide the adjusted total for the update.

Here are a few examples of how the totalInventoryAvailable amount will be divided into the base and flexible allocation for a property’s room count depending on whether there is base allocation contract:

|                                 | <span id="OLE_LINK20" class="anchor"><span id="OLE_LINK21" class="anchor"></span></span>totalInventoryAvailable sent by EQC partner | Current Base Allocation**\*** | Flexible allocation              
                                                                                                                                                                                                         *(calculated)*                    |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------------------------------|
| Hotel A                         
 (with Base Allocation contract)  | 7                                                                                                                                   | 5                             | 2 *(i.e. 7-5)*                   |
|                                 | 5                                                                                                                                   | 3                             | 2 *(i.e. 5-3)*                   |
|                                 | 1                                                                                                                                   | **2\*\***                     | 0 *(i.e. 1-2, resolved to zero)* |
|                                 | 1                                                                                                                                   | 0                             | 1 *(i.e. 1-0)*                   |
| Hotel B                         
 (no Base Allocation contract)    | 7                                                                                                                                   | N/A                           | 7                                |
|                                 | 5                                                                                                                                   | N/A                           | 5                                |
|                                 | 1                                                                                                                                   | N/A                           | 1                                |

> \* The current base allocation cannot be directly decremented by the EQC partner. Only two events will decrease the amount: either bookings of that room type on Expedia, or direct intervention by an Expedia Market Manager. Properties that wish to increment the base allocation may do so through Expedia Partner Central.
>
> **\*\* A warning message (7013) is generated when the current base allocation is higher than the requested TotalInventoryAvailable amount. In this example, it will specify that the totalInventoryAvailable has been adjusted to “2”.**

### <span id="_Ref263235176" class="anchor"><span id="_Toc404960479" class="anchor"></span></span>Closing rate plans with remaining base allocation

Hotels typically use more than one rate plan to sell a room. One important reason for multiple rate plans is that those needed to sell rooms for standalone bookings (room-only) are different from those needed for package bookings (room + flight/car/train). As a result, hotels usually have both standalone and package versions of a rate plan configured, such as: Room Only (S), Room Only (P) and Room incl. Breakfast (S), Room incl. Breakfast (P).

> Expedia allows a hotel to close out any and all of its rate plans, regardless of flexible allocation, as long as there is no base allocation remaining for the associated room type on affected days. If the base allocation is not entirely sold for a room type on a particular day, then one standalone rate plan is obliged to remain open in order for Expedia to be able to make bookings from that base allocation. As a result, if a hotel sends AR requests to close out all rate plans when there is a base allocation remaining, the request to close the last standalone rate plan will be rejected and a warning message (Warning 7014) is returned.

### <span id="_Toc314135116" class="anchor"><span id="_Toc314139553" class="anchor"><span id="_Toc314752856" class="anchor"><span id="_Toc316373667" class="anchor"><span id="_Toc316487309" class="anchor"><span id="_Toc404960480" class="anchor"></span></span></span></span></span></span>Closing rooms to avoid overbookings

In order to close a room that is still available on Expedia, always send a close message for the room type along with setting the number of available rooms *@totalInventoryAvailable* or *@flexibleAllocation* to zero. Sending zero (0) for flexible allocation or total will not completely close the room type and, in a case of cancellation, the room will become available again on Expedia. Refer also to Section 5.6.13 "Closing rate plans with remaining base allocation" above for additional recommendations for properties with base allocation contracts.

### Using day of week attributes with date ranges

Day of week attributes can be used when EQC partners want to perform updates based on the day of week. For example, EQC partners might want to update rates for Friday, Saturday and Sunday, for the month of August 2012.

To do so, it is not necessary to call out every single date requiring to be updated. Instead, day of week attributes can be used.

As soon as day of week attributes are used, updates will only be applied to the attributes for which the value is set to true. Missing or omitted day of week attributes will see their value defaulted to false.

When using day of weeks along with date ranges, Expedia recommends always specifying all 7 attributes, with their desired value (true for days requiring an update, false for days that shouldn’t be updated). This is the safest way for EQC partners to insure Expedia will interpret their updates the desired way.

> &lt;?xml version="1.0" encoding="UTF-8"?&gt;
>
> &lt;!--Sample AR request message: updating rates for 1 room type and 1 rate plan every weekend of the month of August 2012--&gt;
>
> &lt;AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06"&gt;
>
> &lt;Authentication username="testuser" password="testpass"/&gt;
>
> &lt;Hotel id="3547"/&gt;
>
> &lt;AvailRateUpdate&gt;
>
> &lt;DateRange from="2012-08-01" to="2012-08-31" mon="false" tue="false" wed="false" thu="false" fri="true" sat="true" sun="true"/&gt;
>
> &lt;RoomType id="558025"&gt;
>
> &lt;RatePlan id="556895" closed="false"&gt;
>
> &lt;Rate currency="EUR"&gt;
>
> &lt;PerOccupancy rate="80.00" occupancy="1"/&gt;
>
> &lt;PerOccupancy rate="120.00" occupancy="2"/&gt;
>
> &lt;/Rate&gt;
>
> &lt;/RatePlan&gt;
>
> &lt;/RoomType&gt;
>
> &lt;/AvailRateUpdate&gt;
>
> &lt;/AvailRateUpdateRQ&gt;

### <span id="_Toc235849931" class="anchor"><span id="_Toc404960482" class="anchor"></span></span>Rate Plan Linkage and AR

For products with rate plan linkage rules in place and effective on a set of stay dates, the partner is not allowed to update the child products’ rates for those dates. Restrictions are not expected to be managed either if they are linked.

Child rate plans with linkage rules cannot be managed over AR when a rule is effective for the stay dates being updated. Only the parent can be managed: Expedia will automatically derive rates and restriction updates to the child. If a partner attempts to manage rates and / or restrictions on a rate plan where a rate plan linkage rule exists, the EQC AR service will return a successful response to the partner but will ignore the updates received on the child.

For more information about rate plan linkage, please refer to section 8.6.2.

<span id="_Toc404960483" class="anchor"></span>

<span id="_Toc162860266" class="anchor"><span id="_Toc404960484" class="anchor"></span></span>

<span id="_Toc404960485" class="anchor"><span id="_Toc162860267" class="anchor"></span></span>

<span id="_Toc404960486" class="anchor"></span>

<span id="_Toc404960487" class="anchor"></span>

<span id="_Toc162860268" class="anchor"><span id="_Toc404960488" class="anchor"></span></span>

<span id="_Toc148774740" class="anchor"><span id="_Toc162860269" class="anchor"><span id="_Toc404960489" class="anchor"></span></span></span>

|     |                                             |     |     |     |     |
|-----|---------------------------------------------|-----|-----|-----|-----|
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     |                                             |     |     |     |     |
|     | <span id="OLE_LINK3" class="anchor"></span> |     |     |     |     |

<span id="_Toc162860270" class="anchor"><span id="_Toc404960490" class="anchor"></span></span>

<span id="_Toc162860271" class="anchor"><span id="_Toc404960491" class="anchor"></span></span>

<span id="_Toc148774743" class="anchor"><span id="_Toc162860272" class="anchor"><span id="_Toc404960492" class="anchor"></span></span></span>

|     |     |     |     |               |
|-----|-----|-----|-----|---------------|
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     | |     |     | 
                         |-----|-----|  
                         |     |     |  
                         |     |     |  
                         |     |     |  
                         |     |     |  
                         |     |     |  |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     | |     |     | 
                         |-----|-----|  
                         |     |     |  
                         |     |     |  
                         |     |     |  
                         |     |     |  
                         |     |     |  
                         |     |     |  
                         |     |     |  |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |
|     |     |     |     |               |

<span id="_Toc162860273" class="anchor"><span id="_Toc404960493" class="anchor"></span></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

<span id="_Toc235849949" class="anchor"><span id="_Toc235849950" class="anchor"><span id="_Toc162860281" class="anchor"><span id="_Toc404960494" class="anchor"></span></span></span></span>

<span id="_Toc300584163" class="anchor"><span id="_Toc301196190" class="anchor"><span id="_Toc300584164" class="anchor"><span id="_Toc301196191" class="anchor"><span id="_Toc300584165" class="anchor"><span id="_Toc301196192" class="anchor"><span id="_Toc404960495" class="anchor"><span id="_Toc162860283" class="anchor"></span></span></span></span></span></span></span></span>

<span id="_Toc404960496" class="anchor"></span>

<span id="_Toc300584168" class="anchor"><span id="_Toc301196195" class="anchor"><span id="_Toc300584169" class="anchor"><span id="_Toc301196196" class="anchor"><span id="_Toc300584170" class="anchor"><span id="_Toc301196197" class="anchor"><span id="_Toc300584171" class="anchor"><span id="_Toc301196198" class="anchor"><span id="_Toc300584172" class="anchor"><span id="_Toc301196199" class="anchor"><span id="_Toc300584173" class="anchor"><span id="_Toc301196200" class="anchor"><span id="_Toc162860285" class="anchor"><span id="_Toc404960497" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc177786376" class="anchor"><span id="_Toc165960385" class="anchor"><span id="_Toc166036508" class="anchor"><span id="_Toc166036631" class="anchor"><span id="_Toc162860286" class="anchor"><span id="_Toc404960498" class="anchor"></span></span></span></span></span></span>

<span id="_Toc376941739" class="anchor"><span id="_Toc376942072" class="anchor"><span id="_Toc377371458" class="anchor"><span id="_Toc162860287" class="anchor"><span id="_Toc404960499" class="anchor"></span></span></span></span></span>

<span id="_Toc162860288" class="anchor"><span id="_Ref365450276" class="anchor"><span id="_Ref365450299" class="anchor"><span id="_Toc404960500" class="anchor"></span></span></span></span>

<span id="_Toc404960501" class="anchor"></span>

<span id="_Toc300584178" class="anchor"><span id="_Toc301196205" class="anchor"><span id="_Toc300584179" class="anchor"><span id="_Toc301196206" class="anchor"><span id="_Retry_Frequency" class="anchor"><span id="_Toc298851932" class="anchor"><span id="_Toc300584180" class="anchor"><span id="_Toc301196207" class="anchor"><span id="_Toc298851933" class="anchor"><span id="_Toc300584181" class="anchor"><span id="_Toc301196208" class="anchor"><span id="_Toc298851934" class="anchor"><span id="_Toc300584182" class="anchor"><span id="_Toc301196209" class="anchor"><span id="_Toc162860291" class="anchor"><span id="_Toc404960502" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Ref162423671" class="anchor"><span id="_Toc162860292" class="anchor"><span id="_Toc404960503" class="anchor"></span></span></span>

<span id="_Toc404960504" class="anchor"></span>

<span id="_Toc404960505" class="anchor"></span>

<span id="_Toc404960506" class="anchor"></span>

<span id="_Toc404960507" class="anchor"></span>

|     |     |
|-----|-----|
|     |     |

|     |     |
|-----|-----|
|     |     |

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |

|     |     |
|-----|-----|
|     |     |

<span id="_Toc235849966" class="anchor"><span id="_Toc313617048" class="anchor"><span id="_Toc314135352" class="anchor"><span id="_Toc314139789" class="anchor"><span id="_Toc314753092" class="anchor"><span id="_Toc316373903" class="anchor"><span id="_Toc316487545" class="anchor"><span id="_Toc188242605" class="anchor"><span id="_Ref365450068" class="anchor"><span id="_Toc404960508" class="anchor"></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc188242606" class="anchor"><span id="_Toc404960509" class="anchor"></span></span>

<span id="_Toc404960510" class="anchor"><span id="_Toc188242607" class="anchor"></span></span>

<span id="_Toc404960511" class="anchor"></span>

<span id="_Toc188242608" class="anchor"><span id="_Toc404960512" class="anchor"></span></span>

<span id="_Toc188242609" class="anchor"><span id="_Toc404960513" class="anchor"></span></span>

|     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

<span id="_Toc188242610" class="anchor"><span id="_Toc404960514" class="anchor"></span></span>

<span id="_Toc188242611" class="anchor"><span id="_Toc404960515" class="anchor"></span></span>

<span id="_Toc188242612" class="anchor"><span id="_Toc404960516" class="anchor"></span></span>

|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |

<span id="_Toc188242613" class="anchor"><span id="_Toc404960517" class="anchor"></span></span>

<span id="OLE_LINK19" class="anchor"></span>

<span id="_Toc375002180" class="anchor"><span id="_Toc376941759" class="anchor"><span id="_Toc376942092" class="anchor"><span id="_Toc377371478" class="anchor"><span id="_Toc375002181" class="anchor"><span id="_Toc376941760" class="anchor"><span id="_Toc376942093" class="anchor"><span id="_Toc377371479" class="anchor"><span id="_Toc375002182" class="anchor"><span id="_Toc376941761" class="anchor"><span id="_Toc376942094" class="anchor"><span id="_Toc377371480" class="anchor"><span id="_Toc375002183" class="anchor"><span id="_Toc376941762" class="anchor"><span id="_Toc376942095" class="anchor"><span id="_Toc377371481" class="anchor"><span id="_Toc375002184" class="anchor"><span id="_Toc376941763" class="anchor"><span id="_Toc376942096" class="anchor"><span id="_Toc377371482" class="anchor"><span id="_Toc375002185" class="anchor"><span id="_Toc376941764" class="anchor"><span id="_Toc376942097" class="anchor"><span id="_Toc377371483" class="anchor"><span id="_Toc375002186" class="anchor"><span id="_Toc376941765" class="anchor"><span id="_Toc376942098" class="anchor"><span id="_Toc377371484" class="anchor"><span id="_Toc375002187" class="anchor"><span id="_Toc376941766" class="anchor"><span id="_Toc376942099" class="anchor"><span id="_Toc377371485" class="anchor"><span id="_Toc375002188" class="anchor"><span id="_Toc376941767" class="anchor"><span id="_Toc376942100" class="anchor"><span id="_Toc377371486" class="anchor"><span id="_Toc375002189" class="anchor"><span id="_Toc376941768" class="anchor"><span id="_Toc376942101" class="anchor"><span id="_Toc377371487" class="anchor"><span id="_Toc375002190" class="anchor"><span id="_Toc376941769" class="anchor"><span id="_Toc376942102" class="anchor"><span id="_Toc377371488" class="anchor"><span id="_Toc375002191" class="anchor"><span id="_Toc376941770" class="anchor"><span id="_Toc376942103" class="anchor"><span id="_Toc377371489" class="anchor"><span id="_Toc375002192" class="anchor"><span id="_Toc376941771" class="anchor"><span id="_Toc376942104" class="anchor"><span id="_Toc377371490" class="anchor"><span id="_Toc375002193" class="anchor"><span id="_Toc376941772" class="anchor"><span id="_Toc376942105" class="anchor"><span id="_Toc377371491" class="anchor"><span id="_Toc375002194" class="anchor"><span id="_Toc376941773" class="anchor"><span id="_Toc376942106" class="anchor"><span id="_Toc377371492" class="anchor"><span id="_Toc375002195" class="anchor"><span id="_Toc376941774" class="anchor"><span id="_Toc376942107" class="anchor"><span id="_Toc377371493" class="anchor"><span id="_Toc375002196" class="anchor"><span id="_Toc376941775" class="anchor"><span id="_Toc376942108" class="anchor"><span id="_Toc377371494" class="anchor"><span id="_Toc188242617" class="anchor"><span id="_Toc404960518" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc300584201" class="anchor"><span id="_Toc301196228" class="anchor"><span id="_Toc300584202" class="anchor"><span id="_Toc301196229" class="anchor"><span id="_Toc404960519" class="anchor"><span id="_Toc188242619" class="anchor"></span></span></span></span></span></span>

<span id="_Toc404960520" class="anchor"></span>

<span id="_Toc404960521" class="anchor"></span>

<span id="_Toc404960522" class="anchor"></span>

<span id="_Toc300584206" class="anchor"><span id="_Toc301196233" class="anchor"><span id="_Toc153361528" class="anchor"><span id="_Toc153362834" class="anchor"><span id="_Toc153363416" class="anchor"><span id="_Toc153361529" class="anchor"><span id="_Toc153362835" class="anchor"><span id="_Toc153363417" class="anchor"><span id="_Toc153361530" class="anchor"><span id="_Toc153362836" class="anchor"><span id="_Toc153363418" class="anchor"><span id="_Toc153361532" class="anchor"><span id="_Toc153362838" class="anchor"><span id="_Toc153363420" class="anchor"><span id="_Toc153361533" class="anchor"><span id="_Toc153362839" class="anchor"><span id="_Toc153363421" class="anchor"><span id="_Toc153361535" class="anchor"><span id="_Toc153362841" class="anchor"><span id="_Toc153363423" class="anchor"><span id="_Toc153361537" class="anchor"><span id="_Toc153362843" class="anchor"><span id="_Toc153363425" class="anchor"><span id="_Toc153361540" class="anchor"><span id="_Toc153362846" class="anchor"><span id="_Toc153363428" class="anchor"><span id="_Toc153361542" class="anchor"><span id="_Toc153362848" class="anchor"><span id="_Toc153363430" class="anchor"><span id="_Toc153361544" class="anchor"><span id="_Toc153362850" class="anchor"><span id="_Toc153363432" class="anchor"><span id="_Toc153361546" class="anchor"><span id="_Toc153362852" class="anchor"><span id="_Toc153363434" class="anchor"><span id="_Toc153361547" class="anchor"><span id="_Toc153362853" class="anchor"><span id="_Toc153363435" class="anchor"><span id="_Toc153361548" class="anchor"><span id="_Toc153362854" class="anchor"><span id="_Toc153363436" class="anchor"><span id="_Toc153361549" class="anchor"><span id="_Toc153362855" class="anchor"><span id="_Toc153363437" class="anchor"><span id="_Toc153361550" class="anchor"><span id="_Toc153362856" class="anchor"><span id="_Toc153363438" class="anchor"><span id="_Toc153361551" class="anchor"><span id="_Toc153362857" class="anchor"><span id="_Toc153363439" class="anchor"><span id="_Toc153361552" class="anchor"><span id="_Toc153362858" class="anchor"><span id="_Toc153363440" class="anchor"><span id="_Toc153361553" class="anchor"><span id="_Toc153362859" class="anchor"><span id="_Toc153363441" class="anchor"><span id="_Toc153361554" class="anchor"><span id="_Toc153362860" class="anchor"><span id="_Toc153363442" class="anchor"><span id="_Toc153361555" class="anchor"><span id="_Toc153362861" class="anchor"><span id="_Toc153363443" class="anchor"><span id="_Toc153361556" class="anchor"><span id="_Toc153362862" class="anchor"><span id="_Toc153363444" class="anchor"><span id="_Toc153361557" class="anchor"><span id="_Toc153362863" class="anchor"><span id="_Toc153363445" class="anchor"><span id="_Toc153361558" class="anchor"><span id="_Toc153362864" class="anchor"><span id="_Toc153363446" class="anchor"><span id="_Toc153361559" class="anchor"><span id="_Toc153362865" class="anchor"><span id="_Toc153363447" class="anchor"><span id="_Toc153361560" class="anchor"><span id="_Toc153362866" class="anchor"><span id="_Toc153363448" class="anchor"><span id="_Toc153361561" class="anchor"><span id="_Toc153362867" class="anchor"><span id="_Toc153363449" class="anchor"><span id="_Toc153361562" class="anchor"><span id="_Toc153362868" class="anchor"><span id="_Toc153363450" class="anchor"><span id="_Toc153361563" class="anchor"><span id="_Toc153362869" class="anchor"><span id="_Toc153363451" class="anchor"><span id="_Toc153361564" class="anchor"><span id="_Toc153362870" class="anchor"><span id="_Toc153363452" class="anchor"><span id="_Toc153361565" class="anchor"><span id="_Toc153362871" class="anchor"><span id="_Toc153363453" class="anchor"><span id="_Toc153361566" class="anchor"><span id="_Toc153362872" class="anchor"><span id="_Toc153363454" class="anchor"><span id="_Toc153361567" class="anchor"><span id="_Toc153362873" class="anchor"><span id="_Toc153363455" class="anchor"><span id="_Toc153361568" class="anchor"><span id="_Toc153362874" class="anchor"><span id="_Toc153363456" class="anchor"><span id="_Toc153361569" class="anchor"><span id="_Toc153362875" class="anchor"><span id="_Toc153363457" class="anchor"><span id="_Toc153361570" class="anchor"><span id="_Toc153362876" class="anchor"><span id="_Toc153363458" class="anchor"><span id="_Toc153361571" class="anchor"><span id="_Toc153362877" class="anchor"><span id="_Toc153363459" class="anchor"><span id="_Toc153361572" class="anchor"><span id="_Toc153362878" class="anchor"><span id="_Toc153363460" class="anchor"><span id="_Toc153361573" class="anchor"><span id="_Toc153362879" class="anchor"><span id="_Toc153363461" class="anchor"><span id="_Toc153361574" class="anchor"><span id="_Toc153362880" class="anchor"><span id="_Toc153363462" class="anchor"><span id="_Toc153361575" class="anchor"><span id="_Toc153362881" class="anchor"><span id="_Toc153363463" class="anchor"><span id="_Toc153361576" class="anchor"><span id="_Toc153362882" class="anchor"><span id="_Toc153363464" class="anchor"><span id="_Toc153361577" class="anchor"><span id="_Toc153362883" class="anchor"><span id="_Toc153363465" class="anchor"><span id="_Toc153361578" class="anchor"><span id="_Toc153362884" class="anchor"><span id="_Toc153363466" class="anchor"><span id="_Toc153361579" class="anchor"><span id="_Toc153362885" class="anchor"><span id="_Toc153363467" class="anchor"><span id="_Toc153361580" class="anchor"><span id="_Toc153362886" class="anchor"><span id="_Toc153363468" class="anchor"><span id="_Toc153361581" class="anchor"><span id="_Toc153362887" class="anchor"><span id="_Toc153363469" class="anchor"><span id="_Toc153361582" class="anchor"><span id="_Toc153362888" class="anchor"><span id="_Toc153363470" class="anchor"><span id="_Toc153361583" class="anchor"><span id="_Toc153362889" class="anchor"><span id="_Toc153363471" class="anchor"><span id="_Toc153361584" class="anchor"><span id="_Toc153362890" class="anchor"><span id="_Toc153363472" class="anchor"><span id="_Toc153361585" class="anchor"><span id="_Toc153362891" class="anchor"><span id="_Toc153363473" class="anchor"><span id="_Toc153361586" class="anchor"><span id="_Toc153362892" class="anchor"><span id="_Toc153363474" class="anchor"><span id="_Toc153361587" class="anchor"><span id="_Toc153362893" class="anchor"><span id="_Toc153363475" class="anchor"><span id="_Toc153361588" class="anchor"><span id="_Toc153362894" class="anchor"><span id="_Toc153363476" class="anchor"><span id="_Toc153361589" class="anchor"><span id="_Toc153362895" class="anchor"><span id="_Toc153363477" class="anchor"><span id="_Toc153361590" class="anchor"><span id="_Toc153362896" class="anchor"><span id="_Toc153363478" class="anchor"><span id="_Toc153361591" class="anchor"><span id="_Toc153362897" class="anchor"><span id="_Toc153363479" class="anchor"><span id="_Toc153361592" class="anchor"><span id="_Toc153362898" class="anchor"><span id="_Toc153363480" class="anchor"><span id="_Toc153361593" class="anchor"><span id="_Toc153362899" class="anchor"><span id="_Toc153363481" class="anchor"><span id="_Toc153361594" class="anchor"><span id="_Toc153362900" class="anchor"><span id="_Toc153363482" class="anchor"><span id="_Toc153361595" class="anchor"><span id="_Toc153362901" class="anchor"><span id="_Toc153363483" class="anchor"><span id="_Toc153361596" class="anchor"><span id="_Toc153362902" class="anchor"><span id="_Toc153363484" class="anchor"><span id="_Toc153361597" class="anchor"><span id="_Toc153362903" class="anchor"><span id="_Toc153363485" class="anchor"><span id="_Toc153361598" class="anchor"><span id="_Toc153362904" class="anchor"><span id="_Toc153363486" class="anchor"><span id="_Toc153361599" class="anchor"><span id="_Toc153362905" class="anchor"><span id="_Toc153363487" class="anchor"><span id="_Toc153361600" class="anchor"><span id="_Toc153362906" class="anchor"><span id="_Toc153363488" class="anchor"><span id="_Toc153361601" class="anchor"><span id="_Toc153362907" class="anchor"><span id="_Toc153363489" class="anchor"><span id="_Toc153361602" class="anchor"><span id="_Toc153362908" class="anchor"><span id="_Toc153363490" class="anchor"><span id="_Toc153361603" class="anchor"><span id="_Toc153362909" class="anchor"><span id="_Toc153363491" class="anchor"><span id="_Toc153361604" class="anchor"><span id="_Toc153362910" class="anchor"><span id="_Toc153363492" class="anchor"><span id="_Toc153361605" class="anchor"><span id="_Toc153362911" class="anchor"><span id="_Toc153363493" class="anchor"><span id="_Toc153361606" class="anchor"><span id="_Toc153362912" class="anchor"><span id="_Toc153363494" class="anchor"><span id="_Toc153361607" class="anchor"><span id="_Toc153362913" class="anchor"><span id="_Toc153363495" class="anchor"><span id="_Toc153361608" class="anchor"><span id="_Toc153362914" class="anchor"><span id="_Toc153363496" class="anchor"><span id="_Toc153361609" class="anchor"><span id="_Toc153362915" class="anchor"><span id="_Toc153363497" class="anchor"><span id="_Toc153361610" class="anchor"><span id="_Toc153362916" class="anchor"><span id="_Toc153363498" class="anchor"><span id="_Toc153361611" class="anchor"><span id="_Toc153362917" class="anchor"><span id="_Toc153363499" class="anchor"><span id="_Toc153361612" class="anchor"><span id="_Toc153362918" class="anchor"><span id="_Toc153363500" class="anchor"><span id="_Toc153361613" class="anchor"><span id="_Toc153362919" class="anchor"><span id="_Toc153363501" class="anchor"><span id="_Toc153361614" class="anchor"><span id="_Toc153362920" class="anchor"><span id="_Toc153363502" class="anchor"><span id="_Toc153361615" class="anchor"><span id="_Toc153362921" class="anchor"><span id="_Toc153363503" class="anchor"><span id="_Toc153361616" class="anchor"><span id="_Toc153362922" class="anchor"><span id="_Toc153363504" class="anchor"><span id="_Toc153361617" class="anchor"><span id="_Toc153362923" class="anchor"><span id="_Toc153363505" class="anchor"><span id="_Toc153361618" class="anchor"><span id="_Toc153362924" class="anchor"><span id="_Toc153363506" class="anchor"><span id="_Toc153361619" class="anchor"><span id="_Toc153362925" class="anchor"><span id="_Toc153363507" class="anchor"><span id="_Toc153361620" class="anchor"><span id="_Toc153362926" class="anchor"><span id="_Toc153363508" class="anchor"><span id="_Toc153361621" class="anchor"><span id="_Toc153362927" class="anchor"><span id="_Toc153363509" class="anchor"><span id="_Toc153361622" class="anchor"><span id="_Toc153362928" class="anchor"><span id="_Toc153363510" class="anchor"><span id="_Toc153361623" class="anchor"><span id="_Toc153362929" class="anchor"><span id="_Toc153363511" class="anchor"><span id="_Toc153361624" class="anchor"><span id="_Toc153362930" class="anchor"><span id="_Toc153363512" class="anchor"><span id="_Toc153361625" class="anchor"><span id="_Toc153362931" class="anchor"><span id="_Toc153363513" class="anchor"><span id="_Toc153361626" class="anchor"><span id="_Toc153362932" class="anchor"><span id="_Toc153363514" class="anchor"><span id="_Toc153361627" class="anchor"><span id="_Toc153362933" class="anchor"><span id="_Toc153363515" class="anchor"><span id="_Toc153361628" class="anchor"><span id="_Toc153362934" class="anchor"><span id="_Toc153363516" class="anchor"><span id="_Toc153361629" class="anchor"><span id="_Toc153362935" class="anchor"><span id="_Toc153363517" class="anchor"><span id="_Toc153361630" class="anchor"><span id="_Toc153362936" class="anchor"><span id="_Toc153363518" class="anchor"><span id="_Toc153361631" class="anchor"><span id="_Toc153362937" class="anchor"><span id="_Toc153363519" class="anchor"><span id="_Toc153361634" class="anchor"><span id="_Toc153362940" class="anchor"><span id="_Toc153363522" class="anchor"><span id="_Toc153361641" class="anchor"><span id="_Toc153362947" class="anchor"><span id="_Toc153363529" class="anchor"><span id="_Toc153361644" class="anchor"><span id="_Toc153362950" class="anchor"><span id="_Toc153363532" class="anchor"><span id="_Toc153361645" class="anchor"><span id="_Toc153362951" class="anchor"><span id="_Toc153363533" class="anchor"><span id="_Toc153361646" class="anchor"><span id="_Toc153362952" class="anchor"><span id="_Toc153363534" class="anchor"><span id="_Toc153361650" class="anchor"><span id="_Toc153362956" class="anchor"><span id="_Toc153363538" class="anchor"><span id="_Toc153361664" class="anchor"><span id="_Toc153362970" class="anchor"><span id="_Toc153363552" class="anchor"><span id="_Toc153361665" class="anchor"><span id="_Toc153362971" class="anchor"><span id="_Toc153363553" class="anchor"><span id="_Toc153361667" class="anchor"><span id="_Toc153362973" class="anchor"><span id="_Toc153363555" class="anchor"><span id="_Toc153361676" class="anchor"><span id="_Toc153362982" class="anchor"><span id="_Toc153363564" class="anchor"><span id="_Toc153361686" class="anchor"><span id="_Toc153362992" class="anchor"><span id="_Toc153363574" class="anchor"><span id="_Toc153361703" class="anchor"><span id="_Toc153363009" class="anchor"><span id="_Toc153363591" class="anchor"><span id="_Toc153361704" class="anchor"><span id="_Toc153363010" class="anchor"><span id="_Toc153363592" class="anchor"><span id="_Toc153361720" class="anchor"><span id="_Toc153363026" class="anchor"><span id="_Toc153363608" class="anchor"><span id="_Toc153361723" class="anchor"><span id="_Toc153363029" class="anchor"><span id="_Toc153363611" class="anchor"><span id="_Toc153361728" class="anchor"><span id="_Toc153363034" class="anchor"><span id="_Toc153363616" class="anchor"><span id="_Toc153361747" class="anchor"><span id="_Toc153363053" class="anchor"><span id="_Toc153363635" class="anchor"><span id="_Toc153361755" class="anchor"><span id="_Toc153363061" class="anchor"><span id="_Toc153363643" class="anchor"><span id="_Toc153361756" class="anchor"><span id="_Toc153363062" class="anchor"><span id="_Toc153363644" class="anchor"><span id="_Toc153361760" class="anchor"><span id="_Toc153363066" class="anchor"><span id="_Toc153363648" class="anchor"><span id="_Toc162860293" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Ref374997261" class="anchor"><span id="_Toc404960523" class="anchor"></span></span>

<span id="_Toc404960524" class="anchor"></span>

<span id="_Toc404960525" class="anchor"></span>

<span id="_Toc404960526" class="anchor"></span>

<span id="_Toc404960527" class="anchor"></span>

<span id="_Toc404960528" class="anchor"></span>

<span id="_Toc404960529" class="anchor"></span>

|     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

<span id="_Toc404960530" class="anchor"></span>

<span id="_Toc404960531" class="anchor"></span>

<span id="_Toc404960532" class="anchor"></span>

|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |

<span id="_Toc375002212" class="anchor"><span id="_Toc376941791" class="anchor"><span id="_Toc376942124" class="anchor"><span id="_Toc377371510" class="anchor"><span id="_Toc375002213" class="anchor"><span id="_Toc376941792" class="anchor"><span id="_Toc376942125" class="anchor"><span id="_Toc377371511" class="anchor"><span id="_Toc375002214" class="anchor"><span id="_Toc376941793" class="anchor"><span id="_Toc376942126" class="anchor"><span id="_Toc377371512" class="anchor"><span id="_Toc375002215" class="anchor"><span id="_Toc376941794" class="anchor"><span id="_Toc376942127" class="anchor"><span id="_Toc377371513" class="anchor"><span id="_Toc375002216" class="anchor"><span id="_Toc376941795" class="anchor"><span id="_Toc376942128" class="anchor"><span id="_Toc377371514" class="anchor"><span id="_Toc375002217" class="anchor"><span id="_Toc376941796" class="anchor"><span id="_Toc376942129" class="anchor"><span id="_Toc377371515" class="anchor"><span id="_Toc375002218" class="anchor"><span id="_Toc376941797" class="anchor"><span id="_Toc376942130" class="anchor"><span id="_Toc377371516" class="anchor"><span id="_Toc375002219" class="anchor"><span id="_Toc376941798" class="anchor"><span id="_Toc376942131" class="anchor"><span id="_Toc377371517" class="anchor"><span id="_Toc375002220" class="anchor"><span id="_Toc376941799" class="anchor"><span id="_Toc376942132" class="anchor"><span id="_Toc377371518" class="anchor"><span id="_Toc375002221" class="anchor"><span id="_Toc376941800" class="anchor"><span id="_Toc376942133" class="anchor"><span id="_Toc377371519" class="anchor"><span id="_Toc375002222" class="anchor"><span id="_Toc376941801" class="anchor"><span id="_Toc376942134" class="anchor"><span id="_Toc377371520" class="anchor"><span id="_Toc375002223" class="anchor"><span id="_Toc376941802" class="anchor"><span id="_Toc376942135" class="anchor"><span id="_Toc377371521" class="anchor"><span id="_Toc375002224" class="anchor"><span id="_Toc376941803" class="anchor"><span id="_Toc376942136" class="anchor"><span id="_Toc377371522" class="anchor"><span id="_Toc375002225" class="anchor"><span id="_Toc376941804" class="anchor"><span id="_Toc376942137" class="anchor"><span id="_Toc377371523" class="anchor"><span id="_Toc375002226" class="anchor"><span id="_Toc376941805" class="anchor"><span id="_Toc376942138" class="anchor"><span id="_Toc377371524" class="anchor"><span id="_Toc375002227" class="anchor"><span id="_Toc376941806" class="anchor"><span id="_Toc376942139" class="anchor"><span id="_Toc377371525" class="anchor"><span id="_Toc375002228" class="anchor"><span id="_Toc376941807" class="anchor"><span id="_Toc376942140" class="anchor"><span id="_Toc377371526" class="anchor"><span id="_Toc375002229" class="anchor"><span id="_Toc376941808" class="anchor"><span id="_Toc376942141" class="anchor"><span id="_Toc377371527" class="anchor"><span id="_Toc375002230" class="anchor"><span id="_Toc376941809" class="anchor"><span id="_Toc376942142" class="anchor"><span id="_Toc377371528" class="anchor"><span id="_Toc375002231" class="anchor"><span id="_Toc376941810" class="anchor"><span id="_Toc376942143" class="anchor"><span id="_Toc377371529" class="anchor"><span id="_Toc375002232" class="anchor"><span id="_Toc376941811" class="anchor"><span id="_Toc376942144" class="anchor"><span id="_Toc377371530" class="anchor"><span id="_Toc375002233" class="anchor"><span id="_Toc376941812" class="anchor"><span id="_Toc376942145" class="anchor"><span id="_Toc377371531" class="anchor"><span id="_Toc375002234" class="anchor"><span id="_Toc376941813" class="anchor"><span id="_Toc376942146" class="anchor"><span id="_Toc377371532" class="anchor"><span id="_Toc375002235" class="anchor"><span id="_Toc376941814" class="anchor"><span id="_Toc376942147" class="anchor"><span id="_Toc377371533" class="anchor"><span id="_Toc375002236" class="anchor"><span id="_Toc376941815" class="anchor"><span id="_Toc376942148" class="anchor"><span id="_Toc377371534" class="anchor"><span id="_Toc375002237" class="anchor"><span id="_Toc376941816" class="anchor"><span id="_Toc376942149" class="anchor"><span id="_Toc377371535" class="anchor"><span id="_Toc375002238" class="anchor"><span id="_Toc376941817" class="anchor"><span id="_Toc376942150" class="anchor"><span id="_Toc377371536" class="anchor"><span id="_Toc375002239" class="anchor"><span id="_Toc376941818" class="anchor"><span id="_Toc376942151" class="anchor"><span id="_Toc377371537" class="anchor"><span id="_Toc375002240" class="anchor"><span id="_Toc376941819" class="anchor"><span id="_Toc376942152" class="anchor"><span id="_Toc377371538" class="anchor"><span id="_Toc375002241" class="anchor"><span id="_Toc376941820" class="anchor"><span id="_Toc376942153" class="anchor"><span id="_Toc377371539" class="anchor"><span id="_Toc375002242" class="anchor"><span id="_Toc376941821" class="anchor"><span id="_Toc376942154" class="anchor"><span id="_Toc377371540" class="anchor"><span id="_Toc404960533" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960534" class="anchor"></span>

<span id="_Ref404941252" class="anchor"><span id="_Toc404960535" class="anchor"><span id="_Ref361307800" class="anchor"></span></span></span>

<span id="_Ref404941220" class="anchor"><span id="_Toc404960536" class="anchor"></span></span>

<span id="_Toc404960537" class="anchor"></span>

<span id="_Toc404960538" class="anchor"></span>

<span id="_Toc404960539" class="anchor"></span>

<span id="_Toc404960540" class="anchor"></span>

<span id="_Ref303773127" class="anchor"><span id="_Toc404960541" class="anchor"></span></span>

<span id="_Ref300070673" class="anchor"><span id="_Ref300070679" class="anchor"><span id="_Ref300243578" class="anchor"><span id="_Ref300243587" class="anchor"><span id="_Ref300576673" class="anchor"><span id="_Toc404960542" class="anchor"></span></span></span></span></span></span>

<span id="_Toc404960543" class="anchor"></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc404960544" class="anchor"></span>

<span id="_Toc404960545" class="anchor"></span>

<span id="_Communication_Issues" class="anchor"><span id="_Ref150862218" class="anchor"><span id="_Toc162860295" class="anchor"><span id="_Toc404960546" class="anchor"></span></span></span></span>

<span id="_Toc162860296" class="anchor"><span id="_Toc404960547" class="anchor"></span></span>

<span id="_Toc162860297" class="anchor"><span id="_Toc404960548" class="anchor"></span></span>

<span id="_Toc162860298" class="anchor"><span id="_Toc404960549" class="anchor"></span></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc313439408" class="anchor"><span id="_Toc313444269" class="anchor"><span id="_Toc313536061" class="anchor"><span id="_Toc313537348" class="anchor"><span id="_Toc313574197" class="anchor"><span id="_Toc313614890" class="anchor"><span id="_Toc313616177" class="anchor"><span id="_Toc313617465" class="anchor"><span id="_Toc314135769" class="anchor"><span id="_Toc314140206" class="anchor"><span id="_Toc314753509" class="anchor"><span id="_Toc316374320" class="anchor"><span id="_Toc316487962" class="anchor"><span id="_Toc404960550" class="anchor"><span id="_Toc162860299" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960551" class="anchor"></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc404960552" class="anchor"><span id="_Toc162860300" class="anchor"></span></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc404960553" class="anchor"></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Ref300575745" class="anchor"><span id="_Ref300575754" class="anchor"><span id="_Toc404960554" class="anchor"><span id="_Ref150866980" class="anchor"><span id="_Toc162860301" class="anchor"></span></span></span></span></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc404960555" class="anchor"></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc188242629" class="anchor"><span id="_Toc404960556" class="anchor"><span id="_Toc162860302" class="anchor"></span></span></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc404960557" class="anchor"></span>

|     |     |     |
|-----|-----|-----|
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

<span id="_Toc404960558" class="anchor"></span>

<span id="_Toc297122060" class="anchor"><span id="_Toc297123313" class="anchor"><span id="_Toc297123739" class="anchor"><span id="_Toc297722585" class="anchor"><span id="_Toc298235496" class="anchor"><span id="_Toc298851992" class="anchor"><span id="_Toc300584247" class="anchor"><span id="_Toc301196274" class="anchor"><span id="_Toc297122061" class="anchor"><span id="_Toc297123314" class="anchor"><span id="_Toc297123740" class="anchor"><span id="_Toc297722586" class="anchor"><span id="_Toc298235497" class="anchor"><span id="_Toc298851993" class="anchor"><span id="_Toc300584248" class="anchor"><span id="_Toc301196275" class="anchor"><span id="_Toc297122062" class="anchor"><span id="_Toc297123315" class="anchor"><span id="_Toc297123741" class="anchor"><span id="_Toc297722587" class="anchor"><span id="_Toc298235498" class="anchor"><span id="_Toc298851994" class="anchor"><span id="_Toc300584249" class="anchor"><span id="_Toc301196276" class="anchor"><span id="_Toc404960559" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc162860303" class="anchor"><span id="_Ref300243479" class="anchor"><span id="_Ref300243486" class="anchor"><span id="_Toc404960560" class="anchor"></span></span></span></span>

<span id="_Toc162860304" class="anchor"><span id="_Ref234135572" class="anchor"></span></span>

<span id="_Toc404960561" class="anchor"></span>

<span id="_Toc64108039" class="anchor"><span id="_Toc64108979" class="anchor"><span id="_Toc64108124" class="anchor"><span id="_Toc64109064" class="anchor"><span id="_Toc127967479" class="anchor"><span id="_Toc148774780" class="anchor"><span id="_Toc162860305" class="anchor"><span id="_Toc404960562" class="anchor"><span id="_Toc64274959" class="anchor"><span id="_Toc66244337" class="anchor"></span></span></span></span></span></span></span></span></span></span>

|     |     |     |     |
|-----|-----|-----|-----|
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |

<span id="_Ref234138833" class="anchor"><span id="_Toc404960563" class="anchor"></span></span>

<span id="_Warning_Codes" class="anchor"><span id="_Toc297122068" class="anchor"><span id="_Toc297123321" class="anchor"><span id="_Toc297123747" class="anchor"><span id="_Toc297722593" class="anchor"><span id="_Toc298235504" class="anchor"><span id="_Toc298852000" class="anchor"><span id="_Toc300584255" class="anchor"><span id="_Toc301196282" class="anchor"><span id="_Error_Codes" class="anchor"><span id="_Toc297122105" class="anchor"><span id="_Toc297123358" class="anchor"><span id="_Toc297123784" class="anchor"><span id="_Toc297722630" class="anchor"><span id="_Toc298235541" class="anchor"><span id="_Toc298852037" class="anchor"><span id="_Toc300584292" class="anchor"><span id="_Toc301196319" class="anchor"><span id="_Toc404960564" class="anchor"><span id="_Toc148774782" class="anchor"><span id="_Ref150856187" class="anchor"><span id="_Ref150856199" class="anchor"><span id="_Ref150856226" class="anchor"><span id="_Ref150856546" class="anchor"><span id="_Ref150856654" class="anchor"><span id="_Toc162860307" class="anchor"><span id="_Toc127967480" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960565" class="anchor"></span>

<span id="_Toc297122254" class="anchor"><span id="_Toc297123507" class="anchor"><span id="_Toc297123933" class="anchor"><span id="_Toc297722779" class="anchor"><span id="_Toc298235690" class="anchor"><span id="_Toc298852186" class="anchor"><span id="_Toc300584441" class="anchor"><span id="_Toc301196468" class="anchor"><span id="_Toc235850003" class="anchor"><span id="_Toc148774784" class="anchor"><span id="_Toc162860308" class="anchor"><span id="_Toc404960566" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |

<span id="_Toc404960567" class="anchor"></span>

|     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

<span id="_Toc404960568" class="anchor"></span>

|     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

<span id="_Ref298858556" class="anchor"><span id="_Ref200168844" class="anchor"></span></span>

<span id="_Toc404960569" class="anchor"></span>

<span id="_Toc404960570" class="anchor"></span>

<span id="_Ref383177265" class="anchor"><span id="_Ref383179649" class="anchor"><span id="_Toc404960571" class="anchor"></span></span></span>

|     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

<span id="_Toc382834146" class="anchor"><span id="_Toc382834147" class="anchor"><span id="_Toc382834148" class="anchor"><span id="_Toc382834149" class="anchor"><span id="_Toc382834150" class="anchor"><span id="_Toc382834151" class="anchor"><span id="_Toc382834152" class="anchor"><span id="_Toc382834153" class="anchor"><span id="_Toc382834154" class="anchor"><span id="_Toc382834155" class="anchor"><span id="_Toc382834156" class="anchor"><span id="_Toc382834157" class="anchor"><span id="_Toc382834158" class="anchor"><span id="_Toc382834159" class="anchor"><span id="_Toc382834160" class="anchor"><span id="_Toc382834161" class="anchor"><span id="_Toc382834162" class="anchor"><span id="_Toc382834163" class="anchor"><span id="_Toc382834164" class="anchor"><span id="_Toc382834165" class="anchor"><span id="_Toc382834166" class="anchor"><span id="_Toc382834167" class="anchor"><span id="_Toc382834168" class="anchor"><span id="_Toc382834169" class="anchor"><span id="_Toc382834170" class="anchor"><span id="_Toc382834171" class="anchor"><span id="_Toc382834172" class="anchor"><span id="_Toc382834173" class="anchor"><span id="_Toc375002282" class="anchor"><span id="_Toc376941860" class="anchor"><span id="_Toc376942193" class="anchor"><span id="_Toc377371579" class="anchor"><span id="_Toc375002283" class="anchor"><span id="_Toc376941861" class="anchor"><span id="_Toc376942194" class="anchor"><span id="_Toc377371580" class="anchor"><span id="_Toc375002284" class="anchor"><span id="_Toc376941862" class="anchor"><span id="_Toc376942195" class="anchor"><span id="_Toc377371581" class="anchor"><span id="_Toc375002285" class="anchor"><span id="_Toc376941863" class="anchor"><span id="_Toc376942196" class="anchor"><span id="_Toc377371582" class="anchor"><span id="_Toc375002286" class="anchor"><span id="_Toc376941864" class="anchor"><span id="_Toc376942197" class="anchor"><span id="_Toc377371583" class="anchor"><span id="_Toc375002287" class="anchor"><span id="_Toc376941865" class="anchor"><span id="_Toc376942198" class="anchor"><span id="_Toc377371584" class="anchor"><span id="_Toc375002288" class="anchor"><span id="_Toc376941866" class="anchor"><span id="_Toc376942199" class="anchor"><span id="_Toc377371585" class="anchor"><span id="_Toc375002289" class="anchor"><span id="_Toc376941867" class="anchor"><span id="_Toc376942200" class="anchor"><span id="_Toc377371586" class="anchor"><span id="_Toc375002290" class="anchor"><span id="_Toc376941868" class="anchor"><span id="_Toc376942201" class="anchor"><span id="_Toc377371587" class="anchor"><span id="_Toc375002291" class="anchor"><span id="_Toc376941869" class="anchor"><span id="_Toc376942202" class="anchor"><span id="_Toc377371588" class="anchor"><span id="_Toc375002292" class="anchor"><span id="_Toc376941870" class="anchor"><span id="_Toc376942203" class="anchor"><span id="_Toc377371589" class="anchor"><span id="_Toc375002293" class="anchor"><span id="_Toc376941871" class="anchor"><span id="_Toc376942204" class="anchor"><span id="_Toc377371590" class="anchor"><span id="_Toc375002294" class="anchor"><span id="_Toc376941872" class="anchor"><span id="_Toc376942205" class="anchor"><span id="_Toc377371591" class="anchor"><span id="_Toc375002295" class="anchor"><span id="_Toc376941873" class="anchor"><span id="_Toc376942206" class="anchor"><span id="_Toc377371592" class="anchor"><span id="_Toc375002296" class="anchor"><span id="_Toc376941874" class="anchor"><span id="_Toc376942207" class="anchor"><span id="_Toc377371593" class="anchor"><span id="_Toc361666682" class="anchor"><span id="_Toc362442201" class="anchor"><span id="_Toc362880232" class="anchor"><span id="_Toc361666683" class="anchor"><span id="_Toc362442202" class="anchor"><span id="_Toc362880233" class="anchor"><span id="_Toc361666684" class="anchor"><span id="_Toc362442203" class="anchor"><span id="_Toc362880234" class="anchor"><span id="_Toc361666685" class="anchor"><span id="_Toc362442204" class="anchor"><span id="_Toc362880235" class="anchor"><span id="_Toc361666686" class="anchor"><span id="_Toc362442205" class="anchor"><span id="_Toc362880236" class="anchor"><span id="_Toc361666687" class="anchor"><span id="_Toc362442206" class="anchor"><span id="_Toc362880237" class="anchor"><span id="_Toc361666688" class="anchor"><span id="_Toc362442207" class="anchor"><span id="_Toc362880238" class="anchor"><span id="_Toc361666689" class="anchor"><span id="_Toc362442208" class="anchor"><span id="_Toc362880239" class="anchor"><span id="_Toc361666690" class="anchor"><span id="_Toc362442209" class="anchor"><span id="_Toc362880240" class="anchor"><span id="_Toc361666691" class="anchor"><span id="_Toc362442210" class="anchor"><span id="_Toc362880241" class="anchor"><span id="_Toc361666692" class="anchor"><span id="_Toc362442211" class="anchor"><span id="_Toc362880242" class="anchor"><span id="_Toc361666693" class="anchor"><span id="_Toc362442212" class="anchor"><span id="_Toc362880243" class="anchor"><span id="_Toc313536083" class="anchor"><span id="_Toc313537370" class="anchor"><span id="_Toc313574219" class="anchor"><span id="_Toc313614912" class="anchor"><span id="_Toc313616199" class="anchor"><span id="_Toc313617487" class="anchor"><span id="_Toc314135791" class="anchor"><span id="_Toc314140228" class="anchor"><span id="_Toc314753531" class="anchor"><span id="_Toc316374342" class="anchor"><span id="_Toc316487984" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960572" class="anchor"></span>

<span id="_Toc404960573" class="anchor"></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

<span id="_Toc404960574" class="anchor"></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

<span id="_Toc404960575" class="anchor"></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

<span id="_Toc404960576" class="anchor"></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

<span id="_Toc404960577" class="anchor"></span>

<span id="_Toc404960578" class="anchor"></span>

|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |

|     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

<span id="_Toc404960579" class="anchor"></span>

|     |     |     |     |
|-----|-----|-----|-----|
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |

|     |     |     |     |
|-----|-----|-----|-----|
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |

<span id="_Toc404960580" class="anchor"></span>

|     |     |     |     |
|-----|-----|-----|-----|
|     |     |     |     |
|     |     |     |     |
|     |     |     |     |

<span id="_Toc404960581" class="anchor"></span>

<span id="_Toc404960582" class="anchor"></span>

<span id="_Toc404960583" class="anchor"></span>

<span id="_Toc404960584" class="anchor"></span>

<span id="_Toc404960585" class="anchor"></span>

|     |     |
|-----|-----|
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

<span id="_Ref298832610" class="anchor"><span id="_Ref298833189" class="anchor"></span></span>

<span id="_Ref374997188" class="anchor"><span id="_Toc404960586" class="anchor"></span></span>

<span id="_Toc404960587" class="anchor"></span>

<span id="_Toc404960588" class="anchor"></span>

<span id="_Toc404960589" class="anchor"></span>

<span id="_Toc404960590" class="anchor"></span>

<span id="_Toc404960591" class="anchor"></span>

|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |

|     |     |     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |

|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |

|     |     |     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |

|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |

|     |     |     |     |     |     |     |     |     |     |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |

<span id="_Toc404960592" class="anchor"></span>

<span id="_Toc298235707" class="anchor"><span id="_Toc298852203" class="anchor"><span id="_Toc300584467" class="anchor"><span id="_Toc301196494" class="anchor"><span id="_Ref204507278" class="anchor"></span></span></span></span></span>

<span id="_Toc314135813" class="anchor"><span id="_Toc314140250" class="anchor"><span id="_Toc314753553" class="anchor"><span id="_Toc316374364" class="anchor"><span id="_Toc316488006" class="anchor"><span id="_Toc314135814" class="anchor"><span id="_Toc314140251" class="anchor"><span id="_Toc314753554" class="anchor"><span id="_Toc316374365" class="anchor"><span id="_Toc316488007" class="anchor"><span id="_Toc314135815" class="anchor"><span id="_Toc314140252" class="anchor"><span id="_Toc314753555" class="anchor"><span id="_Toc316374366" class="anchor"><span id="_Toc316488008" class="anchor"><span id="_Toc314135816" class="anchor"><span id="_Toc314140253" class="anchor"><span id="_Toc314753556" class="anchor"><span id="_Toc316374367" class="anchor"><span id="_Toc316488009" class="anchor"><span id="_Toc314135817" class="anchor"><span id="_Toc314140254" class="anchor"><span id="_Toc314753557" class="anchor"><span id="_Toc316374368" class="anchor"><span id="_Toc316488010" class="anchor"><span id="_Toc314135818" class="anchor"><span id="_Toc314140255" class="anchor"><span id="_Toc314753558" class="anchor"><span id="_Toc316374369" class="anchor"><span id="_Toc316488011" class="anchor"><span id="_Toc314135819" class="anchor"><span id="_Toc314140256" class="anchor"><span id="_Toc314753559" class="anchor"><span id="_Toc316374370" class="anchor"><span id="_Toc316488012" class="anchor"><span id="_Toc314135820" class="anchor"><span id="_Toc314140257" class="anchor"><span id="_Toc314753560" class="anchor"><span id="_Toc316374371" class="anchor"><span id="_Toc316488013" class="anchor"><span id="_Toc314135821" class="anchor"><span id="_Toc314140258" class="anchor"><span id="_Toc314753561" class="anchor"><span id="_Toc316374372" class="anchor"><span id="_Toc316488014" class="anchor"><span id="_Toc314135822" class="anchor"><span id="_Toc314140259" class="anchor"><span id="_Toc314753562" class="anchor"><span id="_Toc316374373" class="anchor"><span id="_Toc316488015" class="anchor"><span id="_Toc314135823" class="anchor"><span id="_Toc314140260" class="anchor"><span id="_Toc314753563" class="anchor"><span id="_Toc316374374" class="anchor"><span id="_Toc316488016" class="anchor"><span id="_Toc314135824" class="anchor"><span id="_Toc314140261" class="anchor"><span id="_Toc314753564" class="anchor"><span id="_Toc316374375" class="anchor"><span id="_Toc316488017" class="anchor"><span id="_Toc314135825" class="anchor"><span id="_Toc314140262" class="anchor"><span id="_Toc314753565" class="anchor"><span id="_Toc316374376" class="anchor"><span id="_Toc316488018" class="anchor"><span id="_Toc314135826" class="anchor"><span id="_Toc314140263" class="anchor"><span id="_Toc314753566" class="anchor"><span id="_Toc316374377" class="anchor"><span id="_Toc316488019" class="anchor"><span id="_Toc314135827" class="anchor"><span id="_Toc314140264" class="anchor"><span id="_Toc314753567" class="anchor"><span id="_Toc316374378" class="anchor"><span id="_Toc316488020" class="anchor"><span id="_Toc314135828" class="anchor"><span id="_Toc314140265" class="anchor"><span id="_Toc314753568" class="anchor"><span id="_Toc316374379" class="anchor"><span id="_Toc316488021" class="anchor"><span id="_Toc314135829" class="anchor"><span id="_Toc314140266" class="anchor"><span id="_Toc314753569" class="anchor"><span id="_Toc316374380" class="anchor"><span id="_Toc316488022" class="anchor"><span id="_Toc314135830" class="anchor"><span id="_Toc314140267" class="anchor"><span id="_Toc314753570" class="anchor"><span id="_Toc316374381" class="anchor"><span id="_Toc316488023" class="anchor"><span id="_Toc314135831" class="anchor"><span id="_Toc314140268" class="anchor"><span id="_Toc314753571" class="anchor"><span id="_Toc316374382" class="anchor"><span id="_Toc316488024" class="anchor"><span id="_Toc314135832" class="anchor"><span id="_Toc314140269" class="anchor"><span id="_Toc314753572" class="anchor"><span id="_Toc316374383" class="anchor"><span id="_Toc316488025" class="anchor"><span id="_Toc314135833" class="anchor"><span id="_Toc314140270" class="anchor"><span id="_Toc314753573" class="anchor"><span id="_Toc316374384" class="anchor"><span id="_Toc316488026" class="anchor"><span id="_Toc314135834" class="anchor"><span id="_Toc314140271" class="anchor"><span id="_Toc314753574" class="anchor"><span id="_Toc316374385" class="anchor"><span id="_Toc316488027" class="anchor"><span id="_Toc314135835" class="anchor"><span id="_Toc314140272" class="anchor"><span id="_Toc314753575" class="anchor"><span id="_Toc316374386" class="anchor"><span id="_Toc316488028" class="anchor"><span id="_Toc314135836" class="anchor"><span id="_Toc314140273" class="anchor"><span id="_Toc314753576" class="anchor"><span id="_Toc316374387" class="anchor"><span id="_Toc316488029" class="anchor"><span id="_Toc314135837" class="anchor"><span id="_Toc314140274" class="anchor"><span id="_Toc314753577" class="anchor"><span id="_Toc316374388" class="anchor"><span id="_Toc316488030" class="anchor"><span id="_Toc314135838" class="anchor"><span id="_Toc314140275" class="anchor"><span id="_Toc314753578" class="anchor"><span id="_Toc316374389" class="anchor"><span id="_Toc316488031" class="anchor"><span id="_Toc314135839" class="anchor"><span id="_Toc314140276" class="anchor"><span id="_Toc314753579" class="anchor"><span id="_Toc316374390" class="anchor"><span id="_Toc316488032" class="anchor"><span id="_Toc314135840" class="anchor"><span id="_Toc314140277" class="anchor"><span id="_Toc314753580" class="anchor"><span id="_Toc316374391" class="anchor"><span id="_Toc316488033" class="anchor"><span id="_Toc314135841" class="anchor"><span id="_Toc314140278" class="anchor"><span id="_Toc314753581" class="anchor"><span id="_Toc316374392" class="anchor"><span id="_Toc316488034" class="anchor"><span id="_Toc314135842" class="anchor"><span id="_Toc314140279" class="anchor"><span id="_Toc314753582" class="anchor"><span id="_Toc316374393" class="anchor"><span id="_Toc316488035" class="anchor"><span id="_Toc314135843" class="anchor"><span id="_Toc314140280" class="anchor"><span id="_Toc314753583" class="anchor"><span id="_Toc316374394" class="anchor"><span id="_Toc316488036" class="anchor"><span id="_Toc314135844" class="anchor"><span id="_Toc314140281" class="anchor"><span id="_Toc314753584" class="anchor"><span id="_Toc316374395" class="anchor"><span id="_Toc316488037" class="anchor"><span id="_Toc314135845" class="anchor"><span id="_Toc314140282" class="anchor"><span id="_Toc314753585" class="anchor"><span id="_Toc316374396" class="anchor"><span id="_Toc316488038" class="anchor"><span id="_Toc314135846" class="anchor"><span id="_Toc314140283" class="anchor"><span id="_Toc314753586" class="anchor"><span id="_Toc316374397" class="anchor"><span id="_Toc316488039" class="anchor"><span id="_Toc314135847" class="anchor"><span id="_Toc314140284" class="anchor"><span id="_Toc314753587" class="anchor"><span id="_Toc316374398" class="anchor"><span id="_Toc316488040" class="anchor"><span id="_Toc314135848" class="anchor"><span id="_Toc314140285" class="anchor"><span id="_Toc314753588" class="anchor"><span id="_Toc316374399" class="anchor"><span id="_Toc316488041" class="anchor"><span id="_Toc314135849" class="anchor"><span id="_Toc314140286" class="anchor"><span id="_Toc314753589" class="anchor"><span id="_Toc316374400" class="anchor"><span id="_Toc316488042" class="anchor"><span id="_Toc314135850" class="anchor"><span id="_Toc314140287" class="anchor"><span id="_Toc314753590" class="anchor"><span id="_Toc316374401" class="anchor"><span id="_Toc316488043" class="anchor"><span id="_Toc314135851" class="anchor"><span id="_Toc314140288" class="anchor"><span id="_Toc314753591" class="anchor"><span id="_Toc316374402" class="anchor"><span id="_Toc316488044" class="anchor"><span id="_Toc314135852" class="anchor"><span id="_Toc314140289" class="anchor"><span id="_Toc314753592" class="anchor"><span id="_Toc316374403" class="anchor"><span id="_Toc316488045" class="anchor"><span id="_Toc314135853" class="anchor"><span id="_Toc314140290" class="anchor"><span id="_Toc314753593" class="anchor"><span id="_Toc316374404" class="anchor"><span id="_Toc316488046" class="anchor"><span id="_Toc314135854" class="anchor"><span id="_Toc314140291" class="anchor"><span id="_Toc314753594" class="anchor"><span id="_Toc316374405" class="anchor"><span id="_Toc316488047" class="anchor"><span id="_Toc314135855" class="anchor"><span id="_Toc314140292" class="anchor"><span id="_Toc314753595" class="anchor"><span id="_Toc316374406" class="anchor"><span id="_Toc316488048" class="anchor"><span id="_Toc314135856" class="anchor"><span id="_Toc314140293" class="anchor"><span id="_Toc314753596" class="anchor"><span id="_Toc316374407" class="anchor"><span id="_Toc316488049" class="anchor"><span id="_Toc314135857" class="anchor"><span id="_Toc314140294" class="anchor"><span id="_Toc314753597" class="anchor"><span id="_Toc316374408" class="anchor"><span id="_Toc316488050" class="anchor"><span id="_Toc314135858" class="anchor"><span id="_Toc314140295" class="anchor"><span id="_Toc314753598" class="anchor"><span id="_Toc316374409" class="anchor"><span id="_Toc316488051" class="anchor"><span id="_Toc314135859" class="anchor"><span id="_Toc314140296" class="anchor"><span id="_Toc314753599" class="anchor"><span id="_Toc316374410" class="anchor"><span id="_Toc316488052" class="anchor"><span id="_Toc314135860" class="anchor"><span id="_Toc314140297" class="anchor"><span id="_Toc314753600" class="anchor"><span id="_Toc316374411" class="anchor"><span id="_Toc316488053" class="anchor"><span id="_Toc314135861" class="anchor"><span id="_Toc314140298" class="anchor"><span id="_Toc314753601" class="anchor"><span id="_Toc316374412" class="anchor"><span id="_Toc316488054" class="anchor"><span id="_Toc314135862" class="anchor"><span id="_Toc314140299" class="anchor"><span id="_Toc314753602" class="anchor"><span id="_Toc316374413" class="anchor"><span id="_Toc316488055" class="anchor"><span id="_Toc314135863" class="anchor"><span id="_Toc314140300" class="anchor"><span id="_Toc314753603" class="anchor"><span id="_Toc316374414" class="anchor"><span id="_Toc316488056" class="anchor"><span id="_Toc314135864" class="anchor"><span id="_Toc314140301" class="anchor"><span id="_Toc314753604" class="anchor"><span id="_Toc316374415" class="anchor"><span id="_Toc316488057" class="anchor"><span id="_Toc314135865" class="anchor"><span id="_Toc314140302" class="anchor"><span id="_Toc314753605" class="anchor"><span id="_Toc316374416" class="anchor"><span id="_Toc316488058" class="anchor"><span id="_Toc314135896" class="anchor"><span id="_Toc314140333" class="anchor"><span id="_Toc314753636" class="anchor"><span id="_Toc316374447" class="anchor"><span id="_Toc316488089" class="anchor"><span id="_Toc314135897" class="anchor"><span id="_Toc314140334" class="anchor"><span id="_Toc314753637" class="anchor"><span id="_Toc316374448" class="anchor"><span id="_Toc316488090" class="anchor"><span id="_Toc314135918" class="anchor"><span id="_Toc314140355" class="anchor"><span id="_Toc314753658" class="anchor"><span id="_Toc316374469" class="anchor"><span id="_Toc316488111" class="anchor"><span id="_Toc314135919" class="anchor"><span id="_Toc314140356" class="anchor"><span id="_Toc314753659" class="anchor"><span id="_Toc316374470" class="anchor"><span id="_Toc316488112" class="anchor"><span id="_Toc314135920" class="anchor"><span id="_Toc314140357" class="anchor"><span id="_Toc314753660" class="anchor"><span id="_Toc316374471" class="anchor"><span id="_Toc316488113" class="anchor"><span id="_Toc314135921" class="anchor"><span id="_Toc314140358" class="anchor"><span id="_Toc314753661" class="anchor"><span id="_Toc316374472" class="anchor"><span id="_Toc316488114" class="anchor"><span id="_Toc314135922" class="anchor"><span id="_Toc314140359" class="anchor"><span id="_Toc314753662" class="anchor"><span id="_Toc316374473" class="anchor"><span id="_Toc316488115" class="anchor"><span id="_Toc314135923" class="anchor"><span id="_Toc314140360" class="anchor"><span id="_Toc314753663" class="anchor"><span id="_Toc316374474" class="anchor"><span id="_Toc316488116" class="anchor"><span id="_Toc314135924" class="anchor"><span id="_Toc314140361" class="anchor"><span id="_Toc314753664" class="anchor"><span id="_Toc316374475" class="anchor"><span id="_Toc316488117" class="anchor"><span id="_Toc314135949" class="anchor"><span id="_Toc314140386" class="anchor"><span id="_Toc314753689" class="anchor"><span id="_Toc316374500" class="anchor"><span id="_Toc316488142" class="anchor"><span id="_Toc314135950" class="anchor"><span id="_Toc314140387" class="anchor"><span id="_Toc314753690" class="anchor"><span id="_Toc316374501" class="anchor"><span id="_Toc316488143" class="anchor"><span id="_Toc314135951" class="anchor"><span id="_Toc314140388" class="anchor"><span id="_Toc314753691" class="anchor"><span id="_Toc316374502" class="anchor"><span id="_Toc316488144" class="anchor"><span id="_Toc314135952" class="anchor"><span id="_Toc314140389" class="anchor"><span id="_Toc314753692" class="anchor"><span id="_Toc316374503" class="anchor"><span id="_Toc316488145" class="anchor"><span id="_Toc314135953" class="anchor"><span id="_Toc314140390" class="anchor"><span id="_Toc314753693" class="anchor"><span id="_Toc316374504" class="anchor"><span id="_Toc316488146" class="anchor"><span id="_Toc314135977" class="anchor"><span id="_Toc314140414" class="anchor"><span id="_Toc314753717" class="anchor"><span id="_Toc316374528" class="anchor"><span id="_Toc316488170" class="anchor"><span id="_Toc314135978" class="anchor"><span id="_Toc314140415" class="anchor"><span id="_Toc314753718" class="anchor"><span id="_Toc316374529" class="anchor"><span id="_Toc316488171" class="anchor"><span id="_Ref234122799" class="anchor"><span id="_Toc404960593" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960594" class="anchor"></span>

<span id="_Toc404960595" class="anchor"></span>

<span id="_Toc375002321" class="anchor"><span id="_Toc376941899" class="anchor"><span id="_Toc376942232" class="anchor"><span id="_Toc377371618" class="anchor"><span id="_Toc375002322" class="anchor"><span id="_Toc376941900" class="anchor"><span id="_Toc376942233" class="anchor"><span id="_Toc377371619" class="anchor"><span id="_Toc375002323" class="anchor"><span id="_Toc376941901" class="anchor"><span id="_Toc376942234" class="anchor"><span id="_Toc377371620" class="anchor"><span id="_Toc375002324" class="anchor"><span id="_Toc376941902" class="anchor"><span id="_Toc376942235" class="anchor"><span id="_Toc377371621" class="anchor"><span id="_Toc375002325" class="anchor"><span id="_Toc376941903" class="anchor"><span id="_Toc376942236" class="anchor"><span id="_Toc377371622" class="anchor"><span id="_Toc375002326" class="anchor"><span id="_Toc376941904" class="anchor"><span id="_Toc376942237" class="anchor"><span id="_Toc377371623" class="anchor"><span id="_Toc375002327" class="anchor"><span id="_Toc376941905" class="anchor"><span id="_Toc376942238" class="anchor"><span id="_Toc377371624" class="anchor"><span id="_Toc375002328" class="anchor"><span id="_Toc376941906" class="anchor"><span id="_Toc376942239" class="anchor"><span id="_Toc377371625" class="anchor"><span id="_Toc375002329" class="anchor"><span id="_Toc376941907" class="anchor"><span id="_Toc376942240" class="anchor"><span id="_Toc377371626" class="anchor"><span id="_Toc404960596" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960597" class="anchor"></span>

<span id="_Toc404960598" class="anchor"></span>

<span id="_Toc404960599" class="anchor"></span>

<span id="_Toc404960600" class="anchor"></span>

<span id="_Toc404960601" class="anchor"></span>

<span id="_Toc404960602" class="anchor"></span>

<span id="_Toc404960603" class="anchor"></span>

<span id="_Toc404960604" class="anchor"></span>

<span id="_Toc404960605" class="anchor"></span>

<span id="_Toc404960606" class="anchor"></span>

<span id="_Toc404960607" class="anchor"></span>

<span id="_Toc404960608" class="anchor"></span>

<span id="_Toc404960609" class="anchor"></span>

<span id="_Toc404960610" class="anchor"></span>

<span id="_Toc404960611" class="anchor"></span>

<span id="_Toc404960612" class="anchor"></span>

<span id="_Toc404960613" class="anchor"></span>

<span id="_Toc404960614" class="anchor"></span>

<span id="_Toc404960615" class="anchor"></span>

<span id="_Ref374613192" class="anchor"><span id="_Toc404960616" class="anchor"></span></span>

<span id="_Toc404960617" class="anchor"></span>

<span id="_Toc404960618" class="anchor"></span>

<span id="_Toc404960619" class="anchor"></span>

<span id="_Toc404960620" class="anchor"></span>

<span id="_Toc404960621" class="anchor"></span>

<span id="_Toc375002355" class="anchor"><span id="_Toc376941933" class="anchor"><span id="_Toc376942266" class="anchor"><span id="_Toc377371652" class="anchor"><span id="_Toc375002356" class="anchor"><span id="_Toc376941934" class="anchor"><span id="_Toc376942267" class="anchor"><span id="_Toc377371653" class="anchor"><span id="_Toc375002357" class="anchor"><span id="_Toc376941935" class="anchor"><span id="_Toc376942268" class="anchor"><span id="_Toc377371654" class="anchor"><span id="_Toc375002358" class="anchor"><span id="_Toc376941936" class="anchor"><span id="_Toc376942269" class="anchor"><span id="_Toc377371655" class="anchor"><span id="_Toc375002359" class="anchor"><span id="_Toc376941937" class="anchor"><span id="_Toc376942270" class="anchor"><span id="_Toc377371656" class="anchor"><span id="_Toc375002360" class="anchor"><span id="_Toc376941938" class="anchor"><span id="_Toc376942271" class="anchor"><span id="_Toc377371657" class="anchor"><span id="_Toc375002361" class="anchor"><span id="_Toc376941939" class="anchor"><span id="_Toc376942272" class="anchor"><span id="_Toc377371658" class="anchor"><span id="_Toc375002362" class="anchor"><span id="_Toc376941940" class="anchor"><span id="_Toc376942273" class="anchor"><span id="_Toc377371659" class="anchor"><span id="_Toc375002363" class="anchor"><span id="_Toc376941941" class="anchor"><span id="_Toc376942274" class="anchor"><span id="_Toc377371660" class="anchor"><span id="_Toc375002364" class="anchor"><span id="_Toc376941942" class="anchor"><span id="_Toc376942275" class="anchor"><span id="_Toc377371661" class="anchor"><span id="_Toc375002365" class="anchor"><span id="_Toc376941943" class="anchor"><span id="_Toc376942276" class="anchor"><span id="_Toc377371662" class="anchor"><span id="_Toc375002366" class="anchor"><span id="_Toc376941944" class="anchor"><span id="_Toc376942277" class="anchor"><span id="_Toc377371663" class="anchor"><span id="_Toc375002367" class="anchor"><span id="_Toc376941945" class="anchor"><span id="_Toc376942278" class="anchor"><span id="_Toc377371664" class="anchor"><span id="_Toc375002368" class="anchor"><span id="_Toc376941946" class="anchor"><span id="_Toc376942279" class="anchor"><span id="_Toc377371665" class="anchor"><span id="_Toc375002369" class="anchor"><span id="_Toc376941947" class="anchor"><span id="_Toc376942280" class="anchor"><span id="_Toc377371666" class="anchor"><span id="_Toc375002370" class="anchor"><span id="_Toc376941948" class="anchor"><span id="_Toc376942281" class="anchor"><span id="_Toc377371667" class="anchor"><span id="_Toc375002371" class="anchor"><span id="_Toc376941949" class="anchor"><span id="_Toc376942282" class="anchor"><span id="_Toc377371668" class="anchor"><span id="_Toc375002372" class="anchor"><span id="_Toc376941950" class="anchor"><span id="_Toc376942283" class="anchor"><span id="_Toc377371669" class="anchor"><span id="_Toc375002373" class="anchor"><span id="_Toc376941951" class="anchor"><span id="_Toc376942284" class="anchor"><span id="_Toc377371670" class="anchor"><span id="_Toc375002374" class="anchor"><span id="_Toc376941952" class="anchor"><span id="_Toc376942285" class="anchor"><span id="_Toc377371671" class="anchor"><span id="_Toc375002375" class="anchor"><span id="_Toc376941953" class="anchor"><span id="_Toc376942286" class="anchor"><span id="_Toc377371672" class="anchor"><span id="_Toc375002376" class="anchor"><span id="_Toc376941954" class="anchor"><span id="_Toc376942287" class="anchor"><span id="_Toc377371673" class="anchor"><span id="_Toc375002377" class="anchor"><span id="_Toc376941955" class="anchor"><span id="_Toc376942288" class="anchor"><span id="_Toc377371674" class="anchor"><span id="_Toc375002378" class="anchor"><span id="_Toc376941956" class="anchor"><span id="_Toc376942289" class="anchor"><span id="_Toc377371675" class="anchor"><span id="_Toc375002379" class="anchor"><span id="_Toc376941957" class="anchor"><span id="_Toc376942290" class="anchor"><span id="_Toc377371676" class="anchor"><span id="_Toc375002380" class="anchor"><span id="_Toc376941958" class="anchor"><span id="_Toc376942291" class="anchor"><span id="_Toc377371677" class="anchor"><span id="_Toc404960622" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960623" class="anchor"></span>

<span id="_Toc404960624" class="anchor"></span>

<span id="_Toc404960625" class="anchor"></span>

<span id="_Toc404960626" class="anchor"></span>

<span id="_Toc375002386" class="anchor"><span id="_Toc376941964" class="anchor"><span id="_Toc376942297" class="anchor"><span id="_Toc377371683" class="anchor"><span id="_Toc375002387" class="anchor"><span id="_Toc376941965" class="anchor"><span id="_Toc376942298" class="anchor"><span id="_Toc377371684" class="anchor"><span id="_Toc375002388" class="anchor"><span id="_Toc376941966" class="anchor"><span id="_Toc376942299" class="anchor"><span id="_Toc377371685" class="anchor"><span id="_Toc375002389" class="anchor"><span id="_Toc376941967" class="anchor"><span id="_Toc376942300" class="anchor"><span id="_Toc377371686" class="anchor"><span id="_Toc375002390" class="anchor"><span id="_Toc376941968" class="anchor"><span id="_Toc376942301" class="anchor"><span id="_Toc377371687" class="anchor"><span id="_Toc375002391" class="anchor"><span id="_Toc376941969" class="anchor"><span id="_Toc376942302" class="anchor"><span id="_Toc377371688" class="anchor"><span id="_Toc375002392" class="anchor"><span id="_Toc376941970" class="anchor"><span id="_Toc376942303" class="anchor"><span id="_Toc377371689" class="anchor"><span id="_Toc375002393" class="anchor"><span id="_Toc376941971" class="anchor"><span id="_Toc376942304" class="anchor"><span id="_Toc377371690" class="anchor"><span id="_Toc375002394" class="anchor"><span id="_Toc376941972" class="anchor"><span id="_Toc376942305" class="anchor"><span id="_Toc377371691" class="anchor"><span id="_Toc404960627" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Ref374543884" class="anchor"><span id="_Toc404960628" class="anchor"></span></span>

<span id="_Toc404960629" class="anchor"></span>

<span id="_Toc404960630" class="anchor"></span>

<span id="_Toc404960631" class="anchor"></span>

<span id="_Toc375002400" class="anchor"><span id="_Toc376941978" class="anchor"><span id="_Toc376942311" class="anchor"><span id="_Toc377371697" class="anchor"><span id="_Toc375002401" class="anchor"><span id="_Toc376941979" class="anchor"><span id="_Toc376942312" class="anchor"><span id="_Toc377371698" class="anchor"><span id="_Toc375002402" class="anchor"><span id="_Toc376941980" class="anchor"><span id="_Toc376942313" class="anchor"><span id="_Toc377371699" class="anchor"><span id="_Toc375002403" class="anchor"><span id="_Toc376941981" class="anchor"><span id="_Toc376942314" class="anchor"><span id="_Toc377371700" class="anchor"><span id="_Toc375002404" class="anchor"><span id="_Toc376941982" class="anchor"><span id="_Toc376942315" class="anchor"><span id="_Toc377371701" class="anchor"><span id="_Toc375002405" class="anchor"><span id="_Toc376941983" class="anchor"><span id="_Toc376942316" class="anchor"><span id="_Toc377371702" class="anchor"><span id="_Toc375002406" class="anchor"><span id="_Toc376941984" class="anchor"><span id="_Toc376942317" class="anchor"><span id="_Toc377371703" class="anchor"><span id="_Toc375002407" class="anchor"><span id="_Toc376941985" class="anchor"><span id="_Toc376942318" class="anchor"><span id="_Toc377371704" class="anchor"><span id="_Toc375002408" class="anchor"><span id="_Toc376941986" class="anchor"><span id="_Toc376942319" class="anchor"><span id="_Toc377371705" class="anchor"><span id="_Toc375002409" class="anchor"><span id="_Toc376941987" class="anchor"><span id="_Toc376942320" class="anchor"><span id="_Toc377371706" class="anchor"><span id="_Toc375002410" class="anchor"><span id="_Toc376941988" class="anchor"><span id="_Toc376942321" class="anchor"><span id="_Toc377371707" class="anchor"><span id="_Toc375002411" class="anchor"><span id="_Toc376941989" class="anchor"><span id="_Toc376942322" class="anchor"><span id="_Toc377371708" class="anchor"><span id="_Toc375002412" class="anchor"><span id="_Toc376941990" class="anchor"><span id="_Toc376942323" class="anchor"><span id="_Toc377371709" class="anchor"><span id="_Toc375002413" class="anchor"><span id="_Toc376941991" class="anchor"><span id="_Toc376942324" class="anchor"><span id="_Toc377371710" class="anchor"><span id="_Toc375002414" class="anchor"><span id="_Toc376941992" class="anchor"><span id="_Toc376942325" class="anchor"><span id="_Toc377371711" class="anchor"><span id="_Toc404960632" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span id="_Toc404960633" class="anchor"></span>

<span id="_Toc404960634" class="anchor"></span>

<span id="_Toc404960635" class="anchor"></span>

<span id="_Toc404960636" class="anchor"></span>

<span id="_Toc404960637" class="anchor"></span>

<span id="_Toc404960638" class="anchor"></span>

<span id="_Toc375002421" class="anchor"><span id="_Toc376941999" class="anchor"><span id="_Toc376942332" class="anchor"><span id="_Toc377371718" class="anchor"><span id="_Toc375002422" class="anchor"><span id="_Toc376942000" class="anchor"><span id="_Toc376942333" class="anchor"><span id="_Toc377371719" class="anchor"><span id="_Toc375002423" class="anchor"><span id="_Toc376942001" class="anchor"><span id="_Toc376942334" class="anchor"><span id="_Toc377371720" class="anchor"><span id="_Toc375002424" class="anchor"><span id="_Toc376942002" class="anchor"><span id="_Toc376942335" class="anchor"><span id="_Toc377371721" class="anchor"><span id="_Toc375002425" class="anchor"><span id="_Toc376942003" class="anchor"><span id="_Toc376942336" class="anchor"><span id="_Toc377371722" class="anchor"><span id="_Toc375002426" class="anchor"><span id="_Toc376942004" class="anchor"><span id="_Toc376942337" class="anchor"><span id="_Toc377371723" class="anchor"><span id="_Toc375002427" class="anchor"><span id="_Toc376942005" class="anchor"><span id="_Toc376942338" class="anchor"><span id="_Toc377371724" class="anchor"><span id="_Toc375002428" class="anchor"><span id="_Toc376942006" class="anchor"><span id="_Toc376942339" class="anchor"><span id="_Toc377371725" class="anchor"><span id="_Toc375002429" class="anchor"><span id="_Toc376942007" class="anchor"><span id="_Toc376942340" class="anchor"><span id="_Toc377371726" class="anchor"><span id="_Toc375002430" class="anchor"><span id="_Toc376942008" class="anchor"><span id="_Toc376942341" class="anchor"><span id="_Toc377371727" class="anchor"><span id="_Toc375002431" class="anchor"><span id="_Toc376942009" class="anchor"><span id="_Toc376942342" class="anchor"><span id="_Toc377371728" class="anchor"><span id="_Toc375002432" class="anchor"><span id="_Toc376942010" class="anchor"><span id="_Toc376942343" class="anchor"><span id="_Toc377371729" class="anchor"><span id="_Toc375002433" class="anchor"><span id="_Toc376942011" class="anchor"><span id="_Toc376942344" class="anchor"><span id="_Toc377371730" class="anchor"><span id="_Ref362879883" class="anchor"><span id="_Toc404960639" class="anchor"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

|     |     |          |
|-----|-----|----------|
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     | -   -    |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
|     |     |          |
=======
# API Definition
EQC AR is XML based

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
>>>>>>> origin/josheqcar1
