# Sample Messages
This section contains sample messages illustrating how to interact with the Avail and Rates API.

### Update a Room Type’s Flexible Allocation
Expedia stores number of rooms available by room type, so any update to flexible allocations must be attributed to a specific room type. The following is a sample AR request message to update flexible allocation for a single room type every day of the month of August 2012. It sets flexible allocation available for Expedia to sell at 10.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample AR request message: updating flexible allocation for every day of the month of August 2012-->
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="3546"/>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-31"/>
        <RoomType id="558945">
            <Inventory flexibleAllocation="10"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```
Assuming the update for the flexible allocation wouldn’t be the same throughout the month, another way to send the update would be to bundle AvailRateUpdate elements into one request. The following is a sample AR request message to set flexible allocation made available for Expedia to sell at 10 for August 1st to August 15th, and 20 for August 16th to August 31st.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample AR request message: updating inventory with 1 value for the first half of August 2012, and another value for the 2nd half-->
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="3546"/>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-15"/>
        <RoomType id="558945">
            <Inventory flexibleAllocation="10"/>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-08-16" to="2012-08-31"/>
        <RoomType id="558945">
            <Inventory flexibleAllocation="20"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```
**Note**: Flexible allocation represents total room allocation (for properties without a base allocation contract) OR additional room allocation (for properties with a base allocation contract) – refer to the Terminology section (2.3) for a complete definition of flexible allocation. To update total room allocation inclusive of base allocation, see example below.

### Update a Room Type’s Total Allocation
Room allocation updates may reflect the total number of rooms made available to Expedia for a given room type, inclusive of any contractual base allocation. The following is a sample AR request message to update the total allocation for a single room type. The “totalInventoryAvailable” attribute includes any remaining base allocation as well as additional, flexible allocation.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample AR request message: updating total allocation of a room type-->
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username=" testuser" password=" testpass "/>
    <Hotel id="526101"/>
    <AvailRateUpdate>
        <DateRange from="2012-09-26" to="2012-09-26"/>
        <RoomType id="16818">
            <Inventory totalInventoryAvailable="3"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```
If different values for totalInventoryAvailable for different dates need to be communicated at the same time, the following sample AR message can be used.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample AR request message: updating total allocation of a room type with different values on different days-->
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username=" testuser" password=" testpass "/>
    <Hotel id="526101"/>
    <AvailRateUpdate>
        <DateRange from="2012-09-26" to="2012-09-26"/>
        <RoomType id="16818">
            <Inventory totalInventoryAvailable="3"/>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-09-27" to="2012-09-27"/>
        <RoomType id="16818">
            <Inventory totalInventoryAvailable="2"/>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-09-28" to="2012-09-28"/>
        <RoomType id="16818">
            <Inventory totalInventoryAvailable="1"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```
If different room types need to be updated for the same date, the following sample AR message can be used.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--Sample AR request message: updating total alloctions for different room types-->
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username=" testuser " password=" testpass "/>
    <Hotel id="526101"/>
    <AvailRateUpdate>
        <DateRange from="2012-09-26" to="2012-09-26"/>
        <RoomType id="16818">
            <Inventory totalInventoryAvailable="3"/>
        </RoomType>
        <RoomType id="43223">
            <Inventory totalInventoryAvailable="4"/>
        </RoomType>
        <RoomType id="65223">
            <Inventory totalInventoryAvailable="2"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```
**Notes**:
- If there is unsold base allocation remaining for the specified room type and totalInventoryAvailable is set lower than this current base amount, then Expedia QuickConnect will adjust the specified amount to match the current base. When the totalInventoryAvailable amount is adjusted in this manner, a warning (7013) will be returned with the success response and it will mention the adjusted total allocation.
- If a property does not have a base allocation contract with Expedia, there is no functional difference between specifying an update as “flexibleAllocation” or “totalInventoryAvailable”.
