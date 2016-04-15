# Simulator tool

The EQC Simulator is a tool provided by Expedia to help EQC partners develop and verify their EQC implementation of the AR, BR, BC and/or PARR APIs before going live on the production system. It exposes a reduced set of functionalities, mainly targeted at helping EQC partners validate XML syntax and a few basic error/warning handling scenarios.

## PARR and AR

This section describes how the PARR and AR simulators are configured and what kind of scenario can be tested using them.

The following data set is assumed when using the AR and PARR simulators:

The data set for PARR and AR interfaces:

* The simulator uses 365 days of future rates and availabilty defined for a hotel, relative to the date of the PARR RQ
* There are 6 hotels: 111, 211, 311, 411, 511, 611
 
| Hotel ID | Base alloc enabled | Pricing Model                                   | Product Type                                                                | Rate Acquisition Type | Room Type + Rate Plan variation                                                       | 
|----------|--------------------|-------------------------------------------------|-----------------------------------------------------------------------------|-----------------------|---------------------------------------------------------------------------------------| 
| 111      | No                 | Per day pricing based on day of arrival         | Expedia Collect only products base allocation enabled.                      | Lowest Available Rate | 1 room type and 2 rate plans with 1 standalone and 1 package rate                     | 
| 211      | Yes                | Per day pricing                                 | Expedia Collect and flex products. Rate plan linkage defined for 1 product. | Net rate              | 2 room types and 2-3 rate plans per room type                                         | 
| 311      | Yes                | Per day pricing                                 | Hotel Collect and flex products                                             | Sell rate             | 2 room types and 2-3 rate plans per room type                                         | 
| 411      | Yes                | Occupancy-based pricing                         | Expedia Collect  and flex products                                          | Net rate              | 2 room types and 2-3 rate plans per room type                                         | 
| 511      | Yes                | Occupancy-based pricing                         | Hotel Collect  and flex products. Rate plan linkage defined for 1 product.  | Sell rate             | 2 room types and 2-3 rate plans per room type                                         | 
| 611      | No                 | Per day pricing based on day of arrival and LOS | Flex products                                                               | Sell Rate             | 2 room types and 2 rate plans with 1 flex standalone and 1 package rate per room type | 

Only the latest versions of AR and PARR are supported on the EQC Simulator:

| Schema | Namespace | 
|--------|-----------|
|[AvailRateupdate request](http://www.expediaquickconnect.com/system/assets/attachments/310/AvailRateUpdateRQ.xsd)|http://www.expediaconnect.com/EQC/AR/2011/06|
|[AvailRateupdate response](http://www.expediaquickconnect.com/system/assets/attachments/309/AvailRateUpdateRS.xsd)|http://www.expediaconnect.com/EQC/AR/2007/02|
|[ProductAvailRateRetrieval request](http://www.expediaquickconnect.com/system/assets/attachments/423/ProductAvailRateRetrievalRQ.xsd)|http://www.expediaconnect.com/EQC/PAR/2013/07|
|[ProductAvailRateRetrieval response](http://www.expediaquickconnect.com/system/assets/attachments/382/ProductAvailRateRetrievalRS.xsd)|http://www.expediaconnect.com/EQC/PAR/2013/07|

* Currency is in USD.
* Base allocation is always=2 starting from today+2 days. Base allocation is always=0 for today and tomorrow.
* Total Allocation is a random number between 2 and 20
* Total Inventory Sold in PARR responses is a random number between 0 and 10
* Flexible allocation is equal to total-base.
* Flex and total allocations are always returned
* Base is only returned for base-allocation enabled properties
* Rate is random between 50.00 and 150.00 (including random decimals)
* For occupancy-based rates, we always return occupancy 1 to 4, and only the occ=1 is randomized. To obtain 2, do occ=1 rate x 1.5. To obtain 3, do occ=1 x 2. To obtain 4, do occ1x2.2.
* Min LOS is random between 1 and 5
* Max LOS is random between 5 and 28
* All Boolean values (RoomType/@closed, RatePlan/@closed, Rate/@rateChangeIndicator, Restrictions/@closedToArrival, Restrictions/@closedToDeparture) are randomly returned as either true or false when applicable.
* rateChangeIndicator is only returned for the hotel ID 111, as it is enabled for day of arrival pricing.
* PARR will honor the returnRateLink, returnRoomAttributes returnRatePlanAttributes, returnCompensation and returnCancelPolicies in requests. If they are specified, the data will be returned. If they are not specified, or specified as false, we will not return these additional attributes.
* Username can be anything
* Password should work the same as other messages supported by simulator (can take one of 3 values, else return error: ECLPASS, ECL.DELAY, ECL.TIMEOUT)

Hotel ID 111 product configuration: Per Person Pricing, Day-of-Arrival pricing enabled (rateChangeIndicator flag returned), 1 Room Type, 2 rate plans, Expedia Collect-only property. 
```xml
<ProductList>
    <Hotelname="Test Hotel 111"city="New York"id="111"/>
    <RoomTypename="Standard"id="222"status="Active"code="Standard"smokingPref="Either"maxOccupants="5">
        <BedTypeid="1.23"name="Two Queen Beds"/>
        <BedTypeid="1.67"name="One King Bed and One Sofa Bed"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="3"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="7.61"maxAmount="380.74"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="LowestAvailableRate"type="Standalone"distributionModel="ExpediaCollect"id="333"status="Active"code="STD"pricingModel="PerDayPricingByDayOfArrival"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T12:01:05Z"updateDateTime="2012-10-03T17:01:01Z">
            <Compensationdefault="true"percent="25.00"minAmount="20.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Package"rateAcquisitionType="LowestAvailableRate"type="Package"distributionModel="ExpediaCollect"id="444"status="Active"code="PKG"pricingModel="PerDayPricingByDayOfArrival"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T12:05:15Z"updateDateTime="2012-10-03T17:06:14Z">
            <Compensationdefault="true"percent="35.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
</ProductList>
```

Hotel 211 product configuration: Per Day Pricing, 2 Room Types, 2 to 3 rate plans per room type, Expedia Collect and flex products. Rate plan linkage on rate + restrictions, fix amount, no exceptions.
```xml
<ProductList>
    <Hotel name="Test Hotel 211" city="Montreal" id="211"/>
    <RoomTypename="Standard"id="20000"status="Active"code="Standard"smokingPref="Either"maxOccupants="3">
        <BedTypeid="1.14"name="One King Bed"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="3"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="0"maxOccupants="2"/>
        <RateThresholdtype="NetRate"minAmount="15.12"maxAmount="715.87"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="25.21"maxAmount="919.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="NetRate"type="Standalone"distributionModel="ExpediaCollect"id="21000"status="Active"code="STD"pricingModel="PerDayPricing"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"nonRefundable="true"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z"/>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="HotelCollect"id="21000A"status="Active"code="STD"parentId="21000"pricingModel="PerDayPricing"occupantsForBaseRate="2"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"nonRefundable="true"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z"/>
        </RatePlan>
        <RatePlanname="Breakfast included"rateAcquisitionType="NetRate"type="Standalone"distributionModel="ExpediaCollect"id="22000"status="Active"code="BRKFST"pricingModel="PerDayPricing"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"bookDateStart="[today-30 days]"bookDateEnd="[today+180days]"travelDateStart="[today-15days]"travelDateEnd="[today+210 days]"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2013-12-23T12:51:54Z">
            <DayOfWeekBookingRestrictiontype="StartOn"thu="true"fri="true"sat="true"/>
            <DayOfWeekBookingRestrictiontype="EndOn"sun="true"thu="true"fri="true"sat="true"/>
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <Compensationdefault="false"percent="22.00"from="[today]"to="[today+180]"mon="true"tue="true"wed="true"thu="true"fri="false"sat="false"sun="false"/>
            <CancelPolicydefault="true"nonRefundable="true"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z"/>
        </RatePlan>
    </RoomType>
    <RoomTypename="Deluxe"id="23000"status="Active"code="Deluxe"smokingPref="NonSmoking"maxOccupants="2">
        <BedTypeid="1.15"name="One Queen Bed"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="2"/>
        <RateThresholdtype="NetRate"minAmount="15.12"maxAmount="715.87"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="25.21"maxAmount="919.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="NetRate"type="Standalone"distributionModel="ExpediaCollect"id="24000"status="Active"code="STD"pricingModel="PerDayPricing"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"nonRefundable="true"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z"/>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="HotelCollect"id="24000A"status="Active"code="STD"parentId="24000"pricingModel="PerDayPricing"occupantsForBaseRate="2"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"nonRefundable="true"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z"/>
        </RatePlan>
        <RatePlanname="Breakfast included"rateAcquisitionType="Linked"type="Standalone"distributionModel="ExpediaCollect"id="25000"status="Active"code="BRKFST"parentId="22000"rateLinkStart="[today]"rateLinkEnd="[today+180days]"isAvailStatusLinked="true"areMinMaxLOSLinked="true"isCTALinked="true"isCTDLinked="false"rateLinkExceptions="false"pricingModel="PerDayPricing"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <RatePlanLinkDefinitionlinkType="Amount"linkValue="20.0"/>
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"nonRefundable="true"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z"/>
        </RatePlan>
    </RoomType>
</ProductList>
```

Hotel 311 product configuration: Per Day Pricing, 2 Room Types, 2 to 3 rate plans per room type, Hotel Collect and flex products.
```xml
<ProductList>
    <Hotelname="Test Hotel 311"city="London"id="311"/>
    <RoomTypename="Standard"id="30000"status="Active"code="Standard"smokingPref="NonSmoking"maxOccupants="5">
        <BedTypeid="1.21"name="Two Double Beds"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="2"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="9.29"maxAmount="531.98"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="14.22"maxAmount="701.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="31000A"status="Active"code="STD"pricingModel="PerDayPricing"occupantsForBaseRate="2"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2010-03-21T09:30:45Z"updateDateTime="2011-01-01T12:15:55Z">
                <PenaltyinsideWindow="true"perStayFee="FullCostOfStay"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="ExpediaCollect"id="31000"status="Active"code="STD"parentId="31000A"pricingModel="PerDayPricing"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="FullCostOfStay"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Breakfast included"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="32000A"status="Active"code="BRKFST"pricingModel="PerDayPricing"occupantsForBaseRate="2"depositRequired="true"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="2"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="FullCostOfStay"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
    <RoomTypename="Deluxe"id="33000"status="Active"code="Deluxe"smokingPref="Either"maxOccupants="3">
        <BedTypeid="1.15"name="One Queen Bed"/>
        <BedTypeid="1.25"name="Two Twin Beds"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="2"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="19.29"maxAmount="811.98"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="29.29"maxAmount="911.98"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="34000A"status="Active"code="STD"pricingModel="PerDayPricing"occupantsForBaseRate="2"depositRequired="true"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="2"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z ">
                <PenaltyinsideWindow="true"perStayFee="FullCostOfStay"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="ExpediaCollect"id="34000"status="Active"code="STD"parentId="34000A"pricingModel="PerDayPricing"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <DayOfWeekBookingRestrictiontype="IncludeOneOf"thu="true"fri="true"sat="true"/>
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="FullCostOfStay"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
</ProductList>
```

Hotel 411 product configuration: Occupancy Pricing, 2 Room Types, 2 to 3 rate plans per room type, Expedia Collect and flex products.
```xml
<ProductList>
    <Hotelname="Test Hotel 411"city="Delhi"id="411"/>
    <RoomTypename="Standard"id="40000"status="Active"code="Standard"smokingPref="Either"maxOccupants="5">
        <BedTypeid="1.41"name="Two Beds"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="2"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="4.22"maxAmount="521.17"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="14.22"maxAmount="701.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="NetRate"type="Standalone"distributionModel="ExpediaCollect"id="41000"status="Active"code="STD"pricingModel="OccupancyBasedPricing"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z ">
                <PenaltyinsideWindow="true"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
            <CancelPolicydefault="false"startDate="2014-12-20"endDate="2015-01-10"nonRefundable="true"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z "/>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="HotelCollect"id="41000A"status="Active"code="STD"parentId="41000"pricingModel="OccupancyBasedPricing"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z ">
                <PenaltyinsideWindow="true"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
            <CancelPolicydefault="false"startDate="2014-12-20"endDate="2015-01-10"nonRefundable="true"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z "/>
        </RatePlan>
        <RatePlanname="Package"rateAcquisitionType="NetRate"type="Package"distributionModel="ExpediaCollect"id="42000"status="Active"code="PKG"pricingModel="OccupancyBasedPricing"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="35.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z ">
                <PenaltyinsideWindow="true"flatFee="100.00"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
            <CancelPolicydefault="false"startDate="2014-12-20"endDate="2015-01-10"nonRefundable="true"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z "/>
        </RatePlan>
    </RoomType>
    <RoomTypename="Deluxe"id="43000"status="Active"code="Deluxe"smokingPref="NonSmoking"maxOccupants="2">
        <BedTypeid="1.40"name="One Bed"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="2"/>
        <RateThresholdtype="NetRate"minAmount="24.22"maxAmount="821.17"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="34.32"maxAmount="921.27"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="NetRate"type="Standalone"distributionModel="ExpediaCollect"id="44000"status="Active"code="STD"pricingModel="OccupancyBasedPricing"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z ">
                <PenaltyinsideWindow="true"flatFee="75.00"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
            <CancelPolicydefault="false"startDate="2014-12-20"endDate="2015-01-10"nonRefundable="true"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z "/>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="HotelCollect"id="44000A"status="Active"code="STD"parentId="44000"pricingModel="OccupancyBasedPricing"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z ">
                <PenaltyinsideWindow="true"flatFee="75.00"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
            <CancelPolicydefault="false"startDate="2014-12-20"endDate="2015-01-10"nonRefundable="true"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z "/>
        </RatePlan>
    </RoomType>
</ProductList>
```

Hotel 511 product configuration: Occupancy Pricing, 2 Room Types, 2 to 3 rate plans per room type, Hotel Collect and flex products. Rate plan linkage only on rate, 10.5%+, with exceptions, no end date.
```xml
<ProductList>
    <Hotelname="Test Hotel 511"city="Beijing"id="511"/>
    <RoomTypename="Standard"id="50000"status="Active"code="Standard"smokingPref="Either"maxOccupants="5">
        <BedTypeid="1.23"name="Two Queen Beds"/>
        <BedTypeid="1.67"name="One King Bed and One Sofa Bed"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="2"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="4.22"maxAmount="521.17"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="14.22"maxAmount="701.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="51000A"status="Active"code="STD"pricingModel="OccupancyBasedPricing"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="ExpediaCollect"id="51000"status="Active"code="STD"parentId="51000A"pricingModel="OccupancyBasedPricing"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Breakfast included"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="52000A"status="Active"code="BRKFST"pricingModel="OccupancyBasedPricing"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"bookDateStart="[today-30 days]"bookDateEnd="[today+180days]"travelDateStart="[today-15days]"travelDateEnd="[today+210 days]"mobileOnly="true"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2014-02-03T15:56:44Z">
            <DayOfWeekBookingRestrictiontype="IncludeOneOf"sun="true"/>
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
    <RoomTypename="Deluxe"id="53000"status="Active"code="Deluxe"smokingPref="Either"maxOccupants="5">
        <BedTypeid="1.88"name="Two Queen and One Sofa Bed"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="2"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="24.22"maxAmount="821.17"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="34.32"maxAmount="921.27"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="54000A"status="Active"code="STD"pricingModel="OccupancyBasedPricing"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <Compensationdefault="false"percent="22.00"from="[today]"to="[today+180]"mon="true"tue="true"wed="true"thu="true"fri="false"sat="false"sun="false"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="ExpediaCollect"id="54000"status="Active"code="STD"parentId="54000A"pricingModel="OccupancyBasedPricing"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <Compensationdefault="false"percent="22.00"from="[today]"to="[today+180]"mon="true"tue="true"wed="true"thu="true"fri="false"sat="false"sun="false"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Breakfast included"rateAcquisitionType="Linked"type="Standalone"distributionModel="HotelCollect"id="55000"status="Active"code="BRKFST"parentId="54000A"rateLinkStart="[today]"isAvailStatusLinked="false"areMinMaxLOSLinked="false"isCTALinked="false"isCTDLinked="false"rateLinkExceptions="true"pricingModel="OccupancyBasedPricing"depositRequired="false"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <RatePlanLinkDefinitionlinkType="Percent"linkValue="10.5"/>
            <Compensationdefault="true"percent="25.00"/>
            <Compensationdefault="false"percent="22.00"from="[today]"to="[today+180]"mon="true"tue="true"wed="true"thu="true"fri="false"sat="false"sun="false"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
</ProductList>
```

Hotel 611 product configuration: Per day pricing based on day of arrival and LOS, Flex products, Sell Rate, 2 room types and 2 rate plans with 1 flex standalone and 1 package rate per room type.
```xml
<ProductList>
    <Hotelname="Test Hotel 611"city="London"id="611"/>
    <RoomTypename="Standard"id="60000"status="Active"code="Standard"smokingPref="Either"maxOccupants="5">
        <BedTypeid="1.14"name="One King Bed"/>
        <BedTypeid="1.23"name="Two Queen Beds"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="2"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="14.22"maxAmount="721.17"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="24.22"maxAmount="821.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="61000A"status="Active"code="STD"pricingModel="PerDayPricingByLengthOfStay"depositRequired="false"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"flatFee="75.00"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="ExpediaCollect"id="61000"status="Active"code="STD"parentId="61000A"pricingModel="PerDayPricingByLengthOfStay"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"flatFee="75.00"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="RackP"rateAcquisitionType="SellRate"type="Package"distributionModel="ExpediaCollect"id="62000"status="Active"code="PKG"pricingModel="PerDayPricingByLengthOfStay"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="35.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"flatFee="50.00" perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
    <RoomTypename="Deluxe"id="63000"status="Active"code="Deluxe"smokingPref="Either"maxOccupants="5">
        <BedTypeid="1.23"name="Two Queen Beds"/>
        <OccupancyByAgeageCategory="Adult"minAge="18"maxOccupants="4"/>
        <OccupancyByAgeageCategory="ChildAgeA"minAge="2"maxOccupants="3"/>
        <OccupancyByAgeageCategory="Infant"minAge="0"maxOccupants="1"/>
        <RateThresholdtype="NetRate"minAmount="19.22"maxAmount="729.17"source="RecentReservations"/>
        <RateThresholdtype="SellRate"minAmount="29.22"maxAmount="829.17"source="RecentReservations"/>
        <RatePlanname="Rack"rateAcquisitionType="SellRate"type="Standalone"distributionModel="HotelCollect"id="64000A"status="Active"code="STD"pricingModel="PerDayPricingByLengthOfStay"depositRequired="false"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"flatFee="50.00"perStayFee="None"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="Rack"rateAcquisitionType="Derived"type="Standalone"distributionModel="ExpediaCollect"id="64000"status="Active"code="STD"parentId="64000A"pricingModel="PerDayPricingByLengthOfStay"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="25.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="FullCostOfStay"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
        <RatePlanname="RackP"rateAcquisitionType="SellRate"type="Package"distributionModel="ExpediaCollect"id="65000"status="Active"code="PKG"pricingModel="PerDayPricingByLengthOfStay"occupantsForBaseRate="2"minLOSDefault="1"maxLOSDefault="28"minAdvBookDays="0"maxAdvBookDays="500"mobileOnly="false"createDateTime="2004-07-29T09:12:42Z"updateDateTime="2012-10-03T15:56:44Z">
            <Compensationdefault="true"percent="35.00"minAmount="15.00"/>
            <CancelPolicydefault="true"cancelWindow="24"createDateTime="2004-07-29T09:12:42Z "updateDateTime="2012-10-03T15:56:44Z">
                <PenaltyinsideWindow="true"perStayFee="1stNightRoomAndTax"/>
                <PenaltyinsideWindow="false"perStayFee="None"/>
            </CancelPolicy>
        </RatePlan>
    </RoomType>
</ProductList>
```

### Successful Update Scenarios - AR
```xml
<AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authentication username="testuser" password="ECLPASS"/>
    <Hotelid="311"/>
    <AvailRateUpdate>
        <DateRangefrom="2014-10-15"to="2014-10-20"/>
        <RoomTypeid="30000">
            <InventoryflexibleAllocation="10"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```

EQC partners can use the simulator to test different scenarios for availability and rate updates. In order to get a successful response from the simulator, the request message must be well formed as defined by the API and contain the appropriate attribute values enumerated in the supported data set. Also, the date range specified in the request must be within the next 365 days.
When a rate plan is managed through rate plan linkage, child products can still receive rate updates. For stay dates where rate plan linkage applies, Expedia accepts updates but does not apply them to the child rate plan.

Expedia does not recommend updating child rate plans for linked periods.

### Successful Update with Warning Scenario – AR

Sample request for a successful AR update that will result in warnings:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<AvailRateUpdateRQxmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authenticationusername="testuser"password="ECLPASS"/>
    <Hotelid="511"/>
    <AvailRateUpdate>
        <DateRangefrom="2014-10-15"to="2014-10-20"/>
        <RoomTypeid="53000">
            <InventoryflexibleAllocation="10"/>
            <RatePlanid="54000A"closed="false">
                <Ratecurrency="USD">
                    <PerOccupancyrate="1100.00"occupancy="1"/>
                </Rate>
            </RatePlan>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```

The simulator will return a warning in the response for the following scenarios. Please note that we should suffix a RefId to all warnings and errors returned, like the real application does.

| Request | Response |
| ------- | -------- |
| Including one or more rates with a value greater than 1,000.00 $, or rate value is smaller or equal to 1$: | Warning code 7019 to indicate rate is too high or too low, as many warnings should be returned as there are rates outside of this threshold, up to 20. |
| Asking for a room type close on any room type for any day after tomorrow | 7010 to indicate that all base allocation must be sold before the room type can be closed. |
| Asking for a rate plan close for all rate plan IDs of a room type, for any day after tomorrow | 7014 to indicate that at least one Standalone rate plan must remain active unless all base allocation is closed. |
| Trying to set total allocation below 2 for any date after tomorrow | 7013 to indicate that we overrode the number of rooms available to reflect the remaining base allocation. |

Remember that those are just a subset of possible warning scenarios. The full list is documented in EQC specification but simulator cannot be used to simulate all of them, only the 4 above.

### Erroneous Update Scenarios – AR

Sample request to get an error back:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<AvailRateUpdateRQxmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
    <Authenticationusername="testuser"password="testpass"/>
    <Hotelid="511"/>
    <AvailRateUpdate>
        <DateRangefrom="2014-10-15"to="2014-10-20"/>
        <RoomTypeid="53000">
            <InventoryflexibleAllocation="10"/>
        </RoomType>
    </AvailRateUpdate>
</AvailRateUpdateRQ>
```
EQC partners can use the simulator to test out each error case listed below individually or combine multiple error cases into one request.

All error descriptions are the same as the one from the real application. For the case of scenarios where the error description is generated by LIS, please try this in integration mode and capture the actual error description generated as a template for the EQC Simulator implementation.

| Request | Response |
| ------- | -------- |
| Invalid password | Response with error code 1001 |
| Using EQC Simulator with a  previous namespace version | Response with error code 2010, specific to EQC Simulator. Previous versions are still supported in production but partners are strongly encouraged to upgrade to latest versions. |
| XML that doesn’t conform to schema | Response with error code 3010 |
| Request for start date before yesterday | Response with error code 3020 |
| Request for start date > end date | Response with error code 3021 |
| Pricing model used in AR RQ doesn’t correspond to the property configuration | Response with error code 3090. |
| Missing currency code in rate update request | Response with error code 3102 |
| Invalid currency code | Response with error code 3103 |
| Invalid hotel ID | Response with error code 3202 |
| Invalid room type ID | Response with error code 3203 |
| Invalid rate plan ID | Response with error code 3204 |
| Exceed max size of message in kb | Response with error code 3405 |
| Attempt to send MinLOS > 14 | Response with error code 3135 |
| Specify Rate/@lengthOfStay attribute on hotels 111 to 511 | Response with error code 3124 |
| Omit Rate/@lengthOfStay attribute on hotel 611 | Response with error code 3123 |

### Successful Retrieval Scenarios- PARR 

Sample successful request:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ProductAvailRateRetrievalRQxmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authenticationusername="eqcxnet"password="ECLPASS"/>
    <Hotelid="511"/>
    <ParamSet>
        <ProductRetrievalreturnRateLink="true"returnRoomAttributes="true"returnRatePlanAttributes="true"returnCompensation="true"/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```
The following successful scenarios are supported by the PARR simulator. The data provided back in the response being randomized, systems cannot attempt to compare data pushed through AR VS read from PARR.

**Request to retrieve Product information with no additional parameter**  
Will return all products listed above for the hotel the request is for  

**Request to retrieve Active Product information**  
Will return all active products      

**Request to retrieve Inactive Product information**  
Will return an empty success response (no inactive products)                                                                   

**Request for a room type ID only**  
Will return all its rate plans as per the definitions above                                                        

**Request to retrieve any range of date in the next 365 days, in conjunction with one or more room types/rate plans**  
Returns random rates and availability for the rate plans that were requested for. If more than 1 product is specified, only 31 days will be returned. 

**Request can also attempt to filter data set for response**  
Using any combination of the AvailStatus/Rates/Inventory/Restrictions filter will produce the desired outcome. For example, if only RoomAvailStatus + Inventory filters are used, only Room-level information is returned (no rate plans).

**Request to obtain rate linkage information**  
Will return rate linkage info for hotels 211 and 511 if specified. If not specified or set to false in RQ, will not return rate linkage info. Note that ParentId for derived Unless explicitely asked, PARR will not return all rate plan data available. If asked in request, will return additional rate plan data as defined in section 12.1.1: pricing model, occupants for base rate, deposit required, min and max LOS defaults products will always be returned with new namespace, and Linked rateacquisitiontype as well if product is linked. min and max booking restrictions,book and travel start and end dates, mobile only indicator, day of week booking restrictions, create and update date and times.

**Request to obtain additional room type data**  
Unless explicitly asked, PARR will not return all room type data available. If specified in the request, it will return additional room type attributes as defined in section 12.1.1: max occupancy and age category settings, rate verification thresholds, smoking preferences, bed types

**Request to obtain compensation data**  
Unless explicitey asked, PARR will not return compensation data. If specified in the request, it will return compensation data for each rate plan.

**Request to obtain cancellation policy data**  
Unless explicitely asked, PARR will not return cancellation policy data. If specified in the request, it will return cancellation policy data for each rate plan.             

**Request to obtain all PARR data available**  
All of the above attributes to get room type, rate plan and compensation data and rate linkage data can be specified in request, in order to get everything Expedia exposes for product configuration in one RQ/RS.


**Please note:**
The data provided back in the response being randomized, systems cannot attempt to compare data pushed through AR VS read from PARR

### Erroneous Update Scenarios – PARR
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ProductAvailRateRetrievalRQxmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authenticationusername="eqcxnet"password="testpass"/>
    <Hotelid="511"/>
    <ParamSet>
        <ProductRetrieval/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

EQC partners can use the simulator to test out each error case listed below individually or combine multiple error cases into one request. Only one error should be returned in case multiple are bundled.

**Invalid password**  
Response with error code 1001

**Using EQC Simulator with a  previous namespace version**  
Response with error code 2010, specific to EQC Simulator. Previous versions are still supported in production but partners are strongly encouraged to upgrade to latest versions.

**XML that doesn’t conform to schema**  
Response with error code 3010

**Request for start date before yesterday**  
Response with error code 3020

**Request for start date > end date**  
Response with error code 3021

**Invalid hotel ID**  
Response with error code 3202

**Invalid room type ID**  
Response with error code 3203

**Invalid rate plan ID**  
Response with error code 3204

**Rate plan ID given doesn’t match with Room Type ID described in data set**  
Response with error code 3205


## Booking Retrieval

This section describes how the BR simulator is configured and what kind of scenario can be tested using it.

The simulator only supports the latest version of BR namespace:

| Schema | Namespace |
|--------|-----------|
|[Schema for BookingRetrieval request](http://www.expediaquickconnect.com/system/assets/attachments/415/BookingRetrievalRQ.xsd)|http://www.expediaconnect.com/EQC/BR/2014/01|
|[Schema for BookingRetrieval response](http://www.expediaquickconnect.com/system/assets/attachments/416/BookingRetrievalRS.xsd)|http://www.expediaconnect.com/EQC/BR/2014/01|


If another version is used, a message indicating that only the latest version is supported is returned, along with error code 2010.

Bookings returned by the BR simulator are one of the following:

* Expedia Collect bookings, Non-EVC.
* Expedia Collect bookings, EVC, either with payment card info or special request code "5".
* Expedia Collect bookings, mix of EVC and Non-EVC.
* Hotel Collect bookings, where the POS ID will be prefixed by "A-" and the rate plan ID will be suffixed by "A". There is no prefix/suffix for room type ID.
* Mix of Expedia Collect and Hotel Collect bookings.
* Bookings containing child age

The simulator takes three Hotel IDs "111", "211" and "311".

| Hotel ID | Product Type | POS ID Value | Room Type ID | Rate Plan ID |
| -------- | ------------ | ------------ | ------------ | ------------ |
| 111 | Expedia Collect only hotel | Random "Expedia" or "Hotels.com" | 222 | 333 for Expedia Collect bookings |
| 211 | ETP hotel with flex products | Random "Expedia" or "Hotels.com" for Expedia Collect booking | Random "A-Expedia" or "A-Hotels.com" for Hotel Collect booking | 20000 | 21000 for Expedia Collect booking 21000A for Hotel Collect booking
| 311 | Hotel Collect only hotel | Random "A-Expedia" or "A-Hotels.com" for Hotel Collect booking | 30000 | 31000A for Hotel Collect booking |


Username can be any, but password must be in one of three fixed values "ECLPASS", "ECL.DELAY" or "ECL.TIMEOUT".

The simulator will generate variable attribute values for the booking content based on the last digit of the booking ID value.

For instance, if the last digit of booking ID is in the range of 1 to 6, the simulator will return child count equal to that value and the child ages enumerated from 1 and up, otherwise the simulator will return child count of 2 but with no age information.



For Hotel Collect bookings, the simulator will return the following customer payment card information.

Master Card
Card number: 5100210000224020
Expiration date: 1020
CVV: 123
Cardholder name: same as guest name
Cardholder address:  
Address Line: Any street1 Any  street2
City: Any city
Postal Code: 77094
State: DC
Country: US

 

### Successful Retrieval Scenarios
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BookingRetrievalRQxmlns="http://www.expediaconnect.com/EQC/BR/2014/01">
    <Authenticationusername="anyuser"password="ECLPASS"/>
    <Hotelid="211"/>
</BookingRetrievalRQ>
```

Below are the sample scenarios for hotel ID "111" Expedia Collect hotel.

**1 Retrieve pending bookings**  
Username/password only, no other parameters.
1 or more statuses can optionally be specified.
The BR simulator will return 3 bookings.

* A cancellation.
* A modification, non-EVC.
* A new reservation, non-EVC.

These are the basic Expedia Collect bookings.

If specified in request, booking status in RS will randomly be one of the specified values. If no values were specified, it will be pending.

Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.

**2 Retrieve single booking by booking ID**  
Username/password, and a booking ID in the range of 1 to 103  
The BR simulator may or may not return payment card information for EVC depending on the booking ID value.  
It may also return child ages depending on the booking ID value. See table above.  
Booking status will be confirmed.  
Booking confirmation number will be a random number between 1000000 and 10000000.

**3 Retrieve bookings by hotel ID for the last 1 day**  
Username/password, and a hotel ID="111"  and number of days=1  
1 or more statuses can optionally be specified.  
The BR simulator will return 10 bookings, all of them contain payment card information for EVC.  
If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**4 Retrieve bookings by hotel ID for the last 2 days**  
Username/password, and a hotel ID="111"  and number of days=2  
1 or more statuses can optionally be specified.  
The BR simulator will return 10 bookings, some of them with payment card information for EVC and others not.  
If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**5 Retrieve bookings by hotel ID for the last 3 days**  
Username/password, and a hotel ID="111"  and number of days=3  
1 or more statuses can optionally be specified.  
The BR simulator will return 3 bookings.  
* A cancellation.
* A modification contains a special request code "5" indicating booking is paid by EVC.
* A reservation contains payment card information for EVC.

If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**6 Retrieve bookings by hotel ID for the last 4 days**  
Username/password, and a hotel ID="111"  and number of days=4  
1 or more statuses can optionally be specified.  
The BR simulator will return 1 booking.  
* A cancellation.

If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.

**7 Retrieve bookings by hotel ID for the last 5 days**  
Username/password, and a hotel ID="111"  and number of days=5  
1 or more statuses can optionally be specified.  
The BR simulator will return 2 bookings.  
* A modification.
* A cancellation.

If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.

**8 Retrieve bookings by hotel ID for the last 6 days**  
Username/password, and a hotel ID="111"  and number of days=6  
1 or more statuses can optionally be specified.  
The BR simulator will return 3 bookings.  
* A cancellation.
* A modification, non-EVC.
* A reservation, non-EVC.

If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.

**9 Retrieve bookings without a hotel ID for the last 30 days**  
Username/password, and number of days=30  
1 or more statuses can optionally be specified.  
The BR simulator will return 103 bookings.  
* A cancellation.
* A modification, non-EVC.
* A reservation, non-EVC.
* The rest of 100 bookings will contain either payment card information or special request code "5" or none of the two.  

For these 100 bookings, the simulator should insert the payment card information randomly, and for booking without payment card, insert the special request with code 5" randomly.  
Booking ID will be numbered from "1" to "103", and the child count and child age will be populated based on the last digit of booking ID value.  
If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**10-19 Detailed scenarios for retrieval by booking ID with value ending with 0 to 9**
Username/password, and a booking ID ending with 0 to 9  
The BR simulator will return a single booking with variable attribute values. See table below.

**20 Adding hotel ID as input parameter to any of the scenarios above will produce the same result.**  
And below are the sample scenarios for hotel ID "211" ETP hotel and hotel ID "311" Hotel Collect only hotel.


**23 Retrieve bookings by hotel ID – ETP hotel**  
Username/password, and hotel ID="211"  
1 or more statuses can optionally be specified.  
BR simulator to return 3 Expedia Collect EVC bookings and 3 Hotel Collect bookings.  
* A reservation associated with EVC
* A modification associated with EVC
* A cancellation
* A reservation associated with POS ID prefixed by "A-", Rate Plan ID=21000A, as well as customer CC.
* A modification associated with POS ID prefixed by "A-", Rate Plan ID=21000A, as well as customer CC.
* A cancellation associated with POS ID prefixed by "A-".
Each booking will have unique booking ID.  
If specified in request, booking status in RS will randomly be one of the specified values. If no values were specified, it will be pending.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**24 Retrieve bookings by hotel ID –Hotel Collect only hotel**  
Username/password, and hotel ID="311"  
1 or more statuses can optionally be specified.  
BR simulator to return 3 Hotel Collect bookings.  
* A reservation associated with POS ID prefixed by "A-", Rate Plan ID=31000A, as well as customer CC.
* A modification associated with POS ID prefixed by "A-", Rate Plan ID=31000A, as well as customer CC.
* A cancellation associated with POS ID prefixed by "A-".
Each booking should have a unique booking ID.  
If specified in the request, booking status in RS will randomly be one of the specified values. If no values were specified, it will be pending.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**25 Retrieve bookings by number of days in the past – mix of Expedia Collect and Hotel Collect bookings**  
Username/password, and hotel ID="211" or "311", and number of days=30  
1 or more statuses can optionally be specified.  
BR simulator should return Expedia Collect or Hotel Collect bookings based on the hotel ID value.  
* Hotel ID="111", same as scenario #9 above. Return 103 Expedia Collect bookings.
* Hotel ID="211", similar to scenario #9, but include some Hotel Collect bookings randomly.
* Hotel ID="311", similar to scenario #9, but return 103 Hotel Collect bookings.
All 103 bookings will be for reservations and not modification or cancel. And each booking should have unique booking ID.  
If specified in request, booking status will randomly be any of the specified values. If no values were specified, it will be randomly distributed between all 3 possible statuses.  
Booking confirmation number will be a random number between 1000000 and 10000000 for bookings in confirmed status.  

**26 Retrieve single booking by booking ID and hotel ID – Hotel Collect booking**  
Username/password, and hotel ID="211" or "311", and booking ID in the range of 1 to 103  
BR simulator to return one of the three Hotel Collect bookings.  
* Hotel ID="111", same as no ID is passed.
* Hotel ID="211", return a single Expedia Collect or Hotel Collect booking randomly.
* Hotel ID="311", return a single Hotel Collect booking.
The simulator will generate booking content based on hotel ID and booking ID as described above.  
Booking status will be confirmed.  
Booking confirmation number will be a random number between 1000000 and 10000000.

 
#### Erroneous scenarios

**21 Retrieve pending bookings with invalid password**  
Username and any password other than the provided values.  
The BR simulator will return error code 1001: invalid username/password.

**22 Retrieve pending bookings with invalid hotel ID**  
Username/password and any hotel ID other than "111", "211" or "311".  
The BR simulator will return error code 3202: invalid hotel ID.


## Booking Confirmation

This section describes how the BC simulator is configured and what kind of scenario can be tested using it.

The simulator only supports the latest version of BR namespace:

| Schema | Namespace |
|--------|-----------|
|[BookingConfirmation request](http://www.expediaquickconnect.com/system/assets/attachments/313/BookingConfirmRQ.xsd)|http://www.expediaconnect.com/EQC/BR/2007/09|
[BookingConfirmation response](http://www.expediaquickconnect.com/system/assets/attachments/314/BookingConfirmRS.xsd)|http://www.expediaconnect.com/EQC/BC/2007/08|

Like all simulators, the BC simulator returns predictable results. It also operates with a set of assumptions, namely:
* One booking was cancelled 4 days prior to the date/time of the BC RQ (ex: if a BR RQ is received on 2008/02/05, the EQC Simulator will assume that it has a cancelled booking dated from 2008/02/01).  The bookingID is 000001.
* One booking was modified 5 days prior to the date/time of the BC RQ. The bookingID is 000002.
* One new booking was made 6 days prior to the date/time of the BC RQ. The bookingID is 000003.
* One hundred new bookings were made 30 days prior to the date/time of the BC RQ. The bookingIDs are 000004 to 000103.
* BookingID 104 generates a response that includes "HotelId and BookingId Mismatch" warning with code 10081.
* BookingID 105 generates and Invalid Departure Date warning with code 10101.
* All bookings were made for a hotel with Expedia hotel ID 111.
 

### Successful Update Scenarios
```xml
<?xml version="1.0" encoding="UTF-8"?>
<BookingConfirmRQxmlns="http://www.expediaconnect.com/EQC/BC/2007/09">
    <Authenticationusername="eqcxnet"password="ECLPASS"/>
    <Hotelid="111"/>
    <BookingConfirmNumbers>
        <BookingConfirmNumberbookingType="Book"bookingID="000003"confirmNumber="3322334455"confirmTime="2014-03-20T10:48:25Z"/>
    </BookingConfirmNumbers>
</BookingConfirmRQ>
```

EQC partners can use the simulator to test different scenarios for booking confirmation updates. In order to get a successful response from the simulator, the request message must be well formed as defined by the API and contain the appropriate attribute values enumerated above.

### Successful Update with Warning Scenario

The simulator will return warning 10080 in the response if there is an invalid bookingID (not between 000001 and 000103) in the request. It will return warning 10100 if the bookingType and bookingID do not match in the request.

### Erroneous Update Scenarios

EQC partners can use the simulator to test out each error case listed below individually or combine multiple error cases into one request.

**Invalid password**  
Response with error code 1001

**Invalid XML**  
Response with error code 2002

**Old or invalid namespace**  
Response with error code 2010

**Invalid XML with invalid structure (XSD validation)**  
Response with error code 3010

**More than 10 ConfirmationNumber elements**  
Response with error code 3301

**Invalid hotel ID**  
Response with error code 3202

### TROUBLESHOOTING
If you are unable to connect to the simulator, do a simple connectivity test using a standard web browser. Navigate to the Expedia simulator addresses:

 BR: https://simulator.expediaquickconnect.com/connect/br
 BC: https://simulator.expediaquickconnect.com/connect/bc
 AR: https://simulator.expediaquickconnect.com/connect/ar
 PARR: https://simulator.expediaquickconnect.com/connect/parr

 If the simulator is up and running, the following message will be displayed: "Expedia QuickConnect® simulator is ready and waiting for requests".

 If you do not see this message, or if you experience any other type of problems with the Expedia QuickConnect® simulator, please [contact us](mailto:eqcss@expedia.com)

#### DISCLAIMER
The Expedia QuickConnect® Simulator is not a certification tool and therefore being able to execute all proposed test cases only ensures conformity to the message transport protocol and requisite message formatting. This tool will not validate that a supplier is either (a) using the proper codes as configured in our live system or (b) respecting all of Expedia-specific business validations.
