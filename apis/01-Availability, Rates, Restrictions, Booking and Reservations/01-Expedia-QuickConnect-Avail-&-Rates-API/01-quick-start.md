# Quick Start

Expedia QuickConnect provides an electronic interface for EQC partners to send Expedia updates on availability and rates automatically.

This section explains authentication and how to send a request to the Expedia QuickConnect AR interface for a live test property.

----
## Authentication

To perform authentication, Expedia QuickConnect tries to extract the username and password information that should be included in XML messages for AR. An element called “Authentication” is found under the root element of any type of request, and contains an attribute for username, and an attribute for password.

```xml
<Authentication username="EQCtest12933870" password="kh92nd29"/>
```

Both the username and the password must be in clear text in the XML message for Expedia QuickConnect to read them, and grant access to the property.

Upon submitting an EQC enrollment form to the EQCHelp team, the EQC credentials necessary for authentication will be provided. For more details on how to obtain credentials, please contact your Connectivity Account Manager or email EQCSS@expedia.com.

----

## Availability and Rates Request and Response

The availability and rate request (AR RQ) allows EQC partners to send Expedia updates on availability and rates for up to 2 years into the future. Below is a pair of sample request/response messages for availability and rate update. For partners wanting to experiment with the API, the following requests can be posted directly to the EQC interface at https://services.expediapartnercentral.com/eqc/ar. Make sure to include content type= text/xml in your http header.

**RQ**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
  <Authentication username="EQCtest12933870" password="kh92nd29"/>
  <Hotel id="12933870"/>
  <AvailRateUpdate>
    <DateRange from="2017-01-01" to="2017-01-15"/>
    <RoomType id="201357986" closed="false">
      <Inventory totalInventoryAvailable="10"/>
      <RatePlan id="206651831A" closed="false">
        <Rate currency="USD">
          <PerOccupancy rate="600.00" occupancy="1"/>
          <PerOccupancy rate="650.00" occupancy="2"/>
          <PerOccupancy rate="700.00" occupancy="3"/>
          <PerOccupancy rate="725.00" occupancy="4"/>
        </Rate>
        <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="28"/>
      </RatePlan>
    </RoomType>
  </AvailRateUpdate>
  <AvailRateUpdate>
    <DateRange from="2017-01-16" to="2017-01-30"/>
    <RoomType id="201357986" closed="true">
      <Inventory totalInventoryAvailable="8"/>
      <RatePlan id="206651831A" closed="true">
        <Rate currency="USD">
          <PerOccupancy rate="610.00" occupancy="1"/>
          <PerOccupancy rate="660.00" occupancy="2"/>
          <PerOccupancy rate="710.00" occupancy="3"/>
          <PerOccupancy rate="735.00" occupancy="4"/>
        </Rate>
        <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="28"/>
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
## Connect To Production
When EQC partners are ready to start sending AR request messages to Expedia QuickConnect to update their rates and availability they should contact their Connectivity Account Manager or reach us at eqcss@expedia.com to obtain the right to use Expedia QuickConnect. Expedia will then communicate the information to connect to our live environment.
