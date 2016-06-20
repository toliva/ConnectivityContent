# FAQ & Guides

<a name="/howtogetstarted"></a>
## How to Get Started for First Time API Users
In order to get started with using the API, it is required to register with Expedia and obtain API credentials. It is also possible to obtain the rights to use a test property to run some tests before going to production with a new integration. To get started, new partners need to send an email to eqcss@expedia.com.

## How to Get Authorized to Access Specific Properties
In order to be able to manage properties in production, partners need to be authorized by either Expedia, or the properties that chose to do business with their system.

After a partner successfully registered with Expedia (see [above section](#/howtogetstarted) for details on how to get started), properties can decide to select the partner and authorize them via Expedia PartnerCentral. When this happens, the partner will get an email notification. The email will contain the confirmation that the partner is now authorized to manage this hotel via API calls. It will also either contain a specific set of credentials for this property, or will indicate that the partner's unique account was authorized to manage this additional property. Whether a partner is given a unique account, or one per property, is decided at time of registration with Expedia.

## EQC Simulator usage
Before being allowed to connect to Expedia production systems, an EQC partner must confirm it was able to use the EQC Simulator successfully. Please visit the (/apis/tbd)[EQC Simulator User Guide] section for more details on how the EQC Simulator can be used and what kind of scenarios can be tested with it.

## Rate Verification Thresholds for EQC hotels
In order to help partners understand why Expedia will sometimes refuse specific rate updates provided in EQC AR messages, Expedia has made rate verification threshold information available in the EQC PARR message.

### What is rate verification?
Rate verification is a mechanism allowing Expedia to guarantee that it will not be selling rooms at rates that will result in a very bad experience for either the hotelier (if a rate is abnormally low) or the customers (if abnormally high rates ended up being displayed on Expedia points of sale).

Expedia will establish the most basic thresholds first (a min and a max thresholds), insuring that the rates received are not too high or too low. The threshold values are then refined as bookings are made against each room type. The threshold values can also be overridden manually by Expedia at the request of hoteliers when needed.

### Obtaining Rate Verification information over PARR
In order to obtain rate verification information over PARR, partners must be using latest namespace version and explicitely request additional room type attributes to be returned: returnRoomAttributes="true".

## Rate Plan Linkage for EQC hotels
In order to help partners understand rate plan linkage rules defined in Expedia system, Expedia has made available rate plan linkage rule information in both PARR messages and on Expedia Partner Central, via the export product information link.

### What is Rate Plan Linkage?
Rate plan linkage allows partners to define a parent-child relationship between 2 different rate plans either within the same room type or different room types. The relationship has to minimally link rate values, but could also link restrictions. Once a link is defined, the child can no longer be managed for the stay dates impacted by the link. Its rate values will be automatically derived from the parent rate plan following a rule. If restrictions are linked, they will also be automatically replicated to the child.

Rate rules can be expressed in percent or in absolute amounts, and can be negative or positive.

Rules can vary by date range, and can have end dates. For example, a partner could decide to define 2 different rules: one from Jan 1st to Jun 30th, with a 10% percent discount, and another rule for July 1st to Dec 31st with a 5% percent discount.

Rules can also have exceptions. For example, partners could define a rule applying to all dates in the future (no end date), but create an exception to remove the link rule for Dec 31st.

### Applications
Package rate plans can be managed alongside standalone rates plan, all calculated automatically by Expedia based on the partner’s contract terms. Corporate rate plans will be managed by the Egencia team and calculated automatically based on the partner’s contract terms. For such rules, both rates and restrictions are linked, without exceptions or end dates.

### Obtaining Rate Plan Linkage information over PARR
In order to obtain rate plan linkage rules over PARR, partners must be using latest namespace version and explicitely request rate plan linkage information using this attribute in the request: returnRateLink="true".

## Controlling the size of PARR responses using RQ filters
Because a set of elements and attributes is returned for every single product and stay dates requested, the size of a PARR Response for a query about avail and rate data can be rather large. In order to optimize connectivity, Expedia recommends making use of the filters made available in the PARR RQ to make sure to only receive relevant information. For example, if the EQC partner is only interested in retrieving the availabilty information for the next 7 days for all its room types, it should make sure to specify the following request:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="1780042"/>
    <ParamSet>
        <AvailRateRetrieval from="2013-08-01" to="2013-08-07" inventory="true" roomAvailStatus="true" rateAvailStatus="false" rates="false" restrictions="false"/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

The resulting response would only contain room-level information:
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <AvailRateList>
        <Hotel id="1780042"/>
        <AvailRate date="2013-08-01">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
        <AvailRate date="2013-08-02">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
        <AvailRate date="2013-08-03">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
        <AvailRate date="2013-08-04">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
        <AvailRate date="2013-08-05">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
        <AvailRate date="2013-08-06">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
        <AvailRate date="2013-08-07">
            <RoomType id="251937" closed="true">
                <Inventory baseAllocation="0" flexibleAllocation="0" totalInventoryAvailable="0" totalInventorySold="2"/>
            </RoomType>
        </AvailRate>
    </AvailRateList>
</ProductAvailRateRetrievalRS>
```

The following filters are available, and can be combined together in any possible way:
*Inventory*: if set to true or omitted, will only return number of rooms available (flexible and total allocation for all hotels, base if hotel is base-allocation enabled)
*roomAvailStatus*: if set to true or omitted, will return Room Type avail status (closed attribute)
*rateAvailStatus*: if set to true or omitted, will return Rate Plan avail status (closed attribute)
*rates*: if set to true or omitted, will return Rates (Rate and underlying elements/attributes)
*restrictions*: if set to true or omitted, will return all restrictions (Min LOS, Max LOS, CTA, CTD)

## Getting back inactive products
By default, the PARR API will only return active room types and rate plans in Expedia systems, both when queried for product-level information and for avail and rate data.

In order to query data for inactive products in the case of a product-level query, the following parameter needs to be used:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="1780042"/>
    <ParamSet>
        <ProductRetrieval productStatus="All"/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
When the EQC partner wants to receive inactive product avail and rate data already loaded in Expedia system, the only possible way is to explicitly list the inactive products for which the EQC partner wants to retrieve data. For example, assuming Room Type ID 32123 is inactive, and rate plan IDs 54434 and 34433 are inactive, the following request would have to be issued:
<?xml version="1.0" encoding="UTF-8"?>
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2011/06">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="1780042"/>
    <ParamSet>
        <AvailRateRetrieval from="2012-08-01" to="2012-08-30">
            <RoomType id="32123">
                <RatePlan id="54434"/>
                <RatePlan id="34433"/>
            </RoomType>
        </AvailRateRetrieval>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

## Adding GZip compression parameter in http header request
PARR responses for Avail and Rate retrieval can be significantly large in terms of kilobytes of data. For that reason, we strongly recommend supporting gzip-encoded responses.

The correct way to indicate your system supports gzip-encoded responses is to make sure this is specified in the HTTP header request you are making to our PARR API:
```
Accept-Encoding: gzip
```