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

The availability and rate request (AR RQ) allows EQC partners to send Expedia updates on availability and rates for up to 2 years into the future. Below is a pair of sample request/response messages for availability and rate update. The following requests can be posted directly to the EQC interface at https://services.expediapartnercentral.com/eqc/ar - for partners wanting to experiment with the API. Make sure to include content type= text/xml in your http header.

**RQ**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username="" password=""/>
    <Hotel id="411"/>
    <AvailRateUpdate>
        <DateRange from="2014-12-15" to="2015-01-20"/>
        <RoomType id="40000" closed="false">
            <Inventory totalInventoryAvailable="10"/>
            <RatePlan id="41000" closed="false">
                <Rate currency="USD">
                    <PerOccupancy rate="60.00" occupancy="1"/>
                    <PerOccupancy rate="100.00" occupancy="2"/>
                    <PerOccupancy rate="135.00" occupancy="3"/>
                    <PerOccupancy rate="160.00" occupancy="4"/>
                </Rate>
                <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="7"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2015-02-15" to="2015-02-20"/>
        <RoomType id="40000" closed="true">
            <Inventory totalInventoryAvailable="0"/>
            <RatePlan id="41000" closed="true">
                <Rate currency="USD">
                    <PerOccupancy rate="80.00" occupancy="1"/>
                    <PerOccupancy rate="120.00" occupancy="2"/>
                </Rate>
                <Restrictions closedToArrival="true" closedToDeparture="false" minLOS="1" maxLOS="7"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>    
</AvailRateUpdateRQ>
```

**RS**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<AvailRateUpdateRS xmlns="http://www.expediaconnect.com/EQC/AR/2007/02">
    <Success/>
</AvailRateUpdateRS>
```
