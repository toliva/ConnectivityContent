# Guidelines and Best Practices
## Guidelines
Due to the high volume of hotels updating their rates and availability information on Expedia through an XML interface, Expedia QuickConnect enforces the following:

- Expedia does not support connection to the QuickConnect Service directly via IP Address, as this address is subject to change without notice. If the EQC partner generally prefers IP Addresses for communication performance reasons, it may consider implementing an address caching strategy to reduce DNS lookups for the URLs. 

### Included Features
The following table is an overview of what is and is not included in the availability and rates API. 
Note: The features listed as “not supported” are ones that are managed through Expedia's tools. Some of these features can be managed by the EQC partner, while others are managed by the Expedia Market Manager.


Supported | Not Supported
--------- | -------------
Updates by Property for Room Types and/or Rate Plans using Expedia IDs as identifiers (mapping of Expedia IDs to hotel codes to be done by EQC partner) | Updates by Property for Room Types and Rate Plans using hotel codes as identifiers (only Expedia identifiers can be used)
Updates by date range and day(s) of week | Modification of base allocation count through EQC
Update of multiple room types and rate plans at the same time, for multiple different date ranges. | Closing a room with outstanding base allocation
Total room allocation for properties with or without base allocation contracts | Closing all rate plans for a room with outstanding base allocation
Additional allocation for properties with base allocation contracts | Single-person supplements in per-person pricing Extra person/child/infant fees for all pricing models
Opening and Closing – rate plans |
Opening and Closing – room types |
Rate per day for base occupancy (per day pricing model) |
Rate per day for base occupancy, per length of stay (per day length of stay pricing model) |
Rate per day by occupancy (occupancy based pricing model) **Recommended** |
Rate per day per person for double occupancy (per person pricing model) |
Rates could be Net Rate, Sell Rate or Lowest Available Rate, based on product configuration in Expedia system. |
Day-of-arrival pricing with rate change indicator |
Minimum length of stay (based on arrival or stay through) |
Maximum length-of-stay (based on arrival or stay through) |
Update number of rooms available as far as two years in advance |
Closed-to-arrival restrictions |
Closed-to-departure restriction |

### Sending update to Expedia
In order to keep Expedia in synch with the hotel availabilty and rates, updates should be triggered by the hotel’s system as soon as rates, availability or restrictions change. 
Speaking from experience, Expedia expects to receive per day, on average, approximately 180 updates per product, per hotel. For a typical hotel connected through EQC, which has on average 10 different room type/rate plans combinations, this should translate into approximately 1,800 updates per hotel, every day.
Some specific conditions could cause hotels to generate significantly more updates per day. If you feel that your hotel will consistently generate more than 180 updates per product, please request help from Expedia through your Connectivity Account Manager or through the discussion forum on http://www.expediaquickconnect.com

#### Counting how many updates are included in a message
Expedia has specific rules and recommendations around message bundling, specifically related to how many updates are included in any one given message. Update count is defined as follow:
Expedia defines the Update Count of an AR message as the number of distinct data elements being changed by that message. Each individual rate, restriction or status change for one stay date is counted as 1 update
For example, the following message excerpt contains 3 updates: number of rooms, a rate and a CTD restriction for 1 day.

```xml
<AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-01"/>
        <RoomType id="9989">
            <Inventory totalInventoryAvailable="50"/>
            <RatePlan id="556895">
                <Rate currency="EUR">
                    <PerDay rate="55.00"/>
                </Rate>
                <Restrictions closedToDeparture="true"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
```
The following excerpt contains 1098 updates: number of rooms, a rate and a CTD for 366 days.
```xml
<AvailRateUpdate>
        <DateRange from="2012-08-01" to="2013-07-31"/>
        <RoomType id="9989">
            <Inventory totalInventoryAvailable="50"/>
            <RatePlan id="556895">
                <Rate currency="EUR">
                    <PerDay rate="55.00"/>
                </Rate>
                <Restrictions closedToDeparture="true"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
```

#### Prevent Duplicate Updates
The property must ensure that it only sends Expedia QuickConnect true updates, not information that has already been transmitted to Expedia. For example, it is poor practice to send a property’s entire Expedia availabilty every day. Messages should only be sent to keep Expedia synchronized with changes on the hotel system. 
Avoiding redundant updates will also ensure that those necessary updates are processed faster, since each update is handled sequentially and:
•	Expedia QuickConnect only allows one connection open per property at a time
•	Processing one message can be a lengthy process, taking up to 5 seconds. 

#### Availabilty Changes related to Expedia bookings
Whenever Expedia books or cancels a room, the hotel system interface to Expedia QuickConnect should NOT update number of rooms available for sale on Expedia as this will be updated automatically by Expedia.
For example, if the property receives a booking for room type ID “111” for December 24th 2016 to December 26th 2016 from Expedia, the property should NOT send a decrement of 1 room for the room type “111” for December 24th and December 25th 2016. Expedia is already aware.

#### Combining multiple updates in one message to make messaging more efficient
To reduce the number of messages sent to Expedia QuickConnect, the EQC partner should make use of multiple AvailRateUpdate elements in one message, and leverage the possibility to specify multiple date ranges, room types and rate plans in the same message. 
Multiple updates can be bundled into one single AR message by making use of the new AR schema that allows for one or more AvailRateUpdate elements. The following example is an update request for 5 different products and for one day, with different values for each product:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Sample AR request message: multiple AvailRateUpdate elements-->
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="3546"/>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-01"/>
        <RoomType id="558875" closed="false">
            <Inventory totalInventoryAvailable="10"/>
            <RatePlan id="556895">
                <Rate currency="EUR">
                    <PerDay rate="100.00"/>
                </Rate>
                <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="2" maxLOS="7"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-01"/>
        <RoomType id="558875" closed="false">
            <RatePlan id="665456">
                <Rate currency="EUR">
                    <PerDay rate="150.00"/>
                </Rate>
                <Restrictions closedToArrival="false" closedToDeparture="true" minLOS="1" maxLOS="14"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-01"/>
        <RoomType id="558875" closed="false">
            <RatePlan id="98789">
                <Rate currency="EUR">
                    <PerDay rate="180.00"/>
                </Rate>
                <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="7"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-01"/>
        <RoomType id="99677" closed="false">
            <Inventory totalInventoryAvailable="10"/>
            <RatePlan id="35345">
                <Rate currency="EUR">
                    <PerDay rate="110.00"/>
                </Rate>
                <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="7"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
    <AvailRateUpdate>
        <DateRange from="2012-08-01" to="2012-08-01"/>
        <RoomType id="99677" closed="false">
            <RatePlan id="342223">
                <Rate currency="EUR">
                    <PerDay rate="145.00"/>
                </Rate>
                <Restrictions closedToArrival="false" closedToDeparture="false" minLOS="1" maxLOS="14"/>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```

### Retry
-    Retry strategy if EQC partner cannot establish communication: If EQC partner receives an error from their application, saying it cannot connect to Expedia QuickConnect (including a connection refused), the EQC partner should perform retries.
-    Retry strategy in case of specific errors returned in XML response: EQC partners should implement retry strategy to handle messages that fail because of communication/network errors  (error code equal to or greater than 4000):
-  Expedia QuickConnect is in maintenance mode
-  Expedia QuickConnect is experiencing temporary problems
-  A network error occurred
This retry strategy should be different than the retry where the communication cannot be established. 

### Concurrency
Expedia QuickConnect only allows one connection at a time per hotel. EQC partners cannot send concurrent requests to update the same hotel. Requests should be queued in the hotel system.

