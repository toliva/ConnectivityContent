# Sample Messages

## Requesting all active room types and rate plans configuration
The following example shows how to request all active room types and rate plans for a hotel, and what the response will be like. These requests do not ask for rate linkage or room type attributes.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="1780042"/>
    <ParamSet>
        <ProductRetrieval/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <ProductList>
        <Hotel id="1780042" name="EQC Test Hotel (OBP)" city="Region Test"/>
        <RoomType id="200004626" code="Ocean View" name="Ocean View" status="Active">
            <RatePlan id="200020648" code="RoomOnly" name="STANDALONE" status="Active" type ="Standalone" distributionModel=" ExpediaCollect " rateAcquisitionType="NetRate"/>
        </RoomType>
        <RoomType id="200028738" code="Dlx" name="Deluxe room" status="Active">
            <RatePlan id="200141446" code="RoomOnly" name="Bed and Breakfast" status="Active" type="Standalone" distributionModel=" ExpediaCollect " rateAcquisitionType="NetRate"/>
        </RoomType>
    </ProductList>
</ProductAvailRateRetrievalRS>
```

## Requesting all active room types and rate plans configurations along with rate linkage information and additional room type attributes

### Request:
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="734658"/>
    <ParamSet>
        <ProductRetrieval returnRateLink="true" returnRoomAttributes="true"/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response:
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
	<ProductList>
		<Hotel id="734658" name="EQC Test Hotel (OBP)" city="Region Test"/>
		<RoomType id="463364" code="Ocean View" name="Ocean View" status="Active" smokingPref="Either" maxOccupants="3">
			<BedType id="15" name="One Queen Bed"/>
			<OccupancyByAge ageCategory="Adult" minAge="18" maxOccupants="2"/>
			<OccupancyByAge ageCategory="Infant" minAge="0" maxOccupants="1"/>
			<RateThreshold type="NetRate" minAmount="7.61" maxAmount="380.74" source="RecentReservations"/>
			<RateThreshold type="SellRate" minAmount="11.38" maxAmount="569.07" source="RecentReservations"/>
			<RatePlan id="25324749" code="RoomOnly" name="STANDALONE" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType=" Derived" parentId="25324749A"/>
			<RatePlan id="25324749A" code="RoomOnly" name="STANDALONE" status="Active" type="Standalone" distributionModel="HotelCollect" rateAcquisitionType="SellRate"/>
			<RatePlan id="253248761" code="RoomOnly" name="STANDALONE" status="Active" type="Package" distributionModel="ExpediaCollect" rateAcquisitionType=" Linked" parentId="25324749A" rateLinkStart="2013-07-01" isAvailStatusLinked="true" areMinMaxLOSLinked="true" isCTALinked="true" isCTDLinked="false" rateLinkExceptions="false">
				<RatePlanLinkDefinition linkType="Percent" linkValue="-10"/>
			</RatePlan>
		</RoomType>
		<RoomType id="463365" code="Dlx" name="Deluxe room" status="Active" smokingPref="Either" maxOccupants="2">
			<BedType id="14" name="One King Bed"/>
			<OccupancyByAge ageCategory="Adult" minAge="18" maxOccupants="2"/>
			<RateThreshold type="NetRate" minAmount="12.61" maxAmount="480.74" source="RecentReservations"/>
			<RateThreshold type="SellRate" minAmount="18.38" maxAmount="769.07" source="RecentReservations"/>
			<RatePlan id="25324750" code="BRKFST" name="Bed and Breakfast" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType=" Derived" parentId="25324750A"/>
			<RatePlan id="25324750A" code="BRKFST" name="Bed and Breakfast" status="Active" type="Standalone" distributionModel="HotelCollect" rateAcquisitionType=" SellRate"/>
			<RatePlan id="25324991" code="PBRKFST" name="Bed and Breakfast PKG" status="Active" type="Package" distributionModel="ExpediaCollect" rateAcquisitionType=" Linked" parentId="25324750A" rateLinkStart="2013-07-01" isAvailStatusLinked="true" areMinMaxLOSLinked="true" isCTALinked="true" isCTDLinked="false" rateLinkExceptions="false">
				<RatePlanLinkDefinition linkType="Percent" linkValue="-10"/>
			</RatePlan>
		</RoomType>
	</ProductList>
</ProductAvailRateRetrievalRS>
```

## Requesting all room types and rate plans configuration, including inactive products
The following example shows how to request all active and inactive room types and rate plans for a hotel, and what the response will be like. This hotel has 1 active and 1 inactive room type. For the active room type, there is 1 inactive rate plan, and 3 active rate plans.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
  <Authentication username="testuser" password="testpass" />
  <Hotel id="1780110" />
      <ParamSet>
          <ProductRetrieval productStatus="All"/>
  </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
  <ProductList>
    <Hotel id="1780110" name="EQC Test Hotel (PDP) EUR" city="Region Test"/>
    <RoomType id="203167" code="Standard room with two single beds" name="Superior Double" status="Inactive">
      <RatePlan id="493950" code="HB" name="BAR" status="Inactive" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
      <RatePlan id="493951" code="BB" name="Advance Purchase Rate" status="Inactive" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
    </RoomType>
    <RoomType id="205429" code="Deluxe Room" name="Standard Double" status="Active">
      <RatePlan id="500699" code="RoomOnly" name="3 Nights" status="Inactive" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
      <RatePlan id="200069194" code="T10" name="BAR" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
      <RatePlan id="200069201" code="T696" name="The Organizers" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
      <RatePlan id="200069203" code="T154" name="Advance Purchase Rate" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
    </RoomType>
  </ProductList>
</ProductAvailRateRetrievalRS>
```

## Requesting information for all products of an hotel, for 1 day
The following example shows how to request all active products' avail, rates and restriction data for 1 day. Note that this hotel has 2 room types and 1 rate plan per room type.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <Authentication username="testuser" password="testpass"/>
   <Hotel id="1780109"/>
   <ParamSet>
      <AvailRateRetrieval from="2012-08-01" to="2012-08-01"/>
   </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <AvailRateList>
      <Hotel id="1780109"/>
      <AvailRate date="2012-08-01">
         <RoomType id="205408" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="14" totalInventoryAvailable="14" totalInventorySold="0" />
            <RatePlan id="2114446" closed="false">
               <Rate currency="EUR">
                  <PerOccupancy rate="60.00" occupancy="1"/>
                  <PerOccupancy rate="100.00" occupancy="2"/>
                  <PerOccupancy rate="135.00" occupancy="3"/>
                  <PerOccupancy rate="160.00" occupancy="4"/>
                  <PerOccupancy rate="195.00" occupancy="5"/>
                  <PerOccupancy rate="228.00" occupancy="6"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
          </RoomType>
      </AvailRate>
      <AvailRate date="2012-08-01">
         <RoomType id="277433" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="3" totalInventoryAvailable="3" totalInventorySold="1"/>
            <RatePlan id="804009" closed="false">
               <Rate currency="EUR">
                  <PerOccupancy rate="5.00" occupancy="1"/>
                  <PerOccupancy rate="66.00" occupancy="2"/>
                  <PerOccupancy rate="15.00" occupancy="3"/>
                  <PerOccupancy rate="20.00" occupancy="4"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
         </RoomType>
      </AvailRate>
   </AvailRateList>
</ProductAvailRateRetrievalRS>
```

##	Requesting all room type-level avail and rate data for an hotel

The following example shows how to request all room type data for a hotel for 3 days, using the request filters.
### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <Authentication username="testuser" password="testpass"/>
   <Hotel id="1780109"/>
   <ParamSet>
      <AvailRateRetrieval from="2012-08-01" to="2012-08-03" rates="false" restrictions="false" rateAvailStatus="false"/>
   </ParamSet>
</ProductAvailRateRetrievalRQ>

### Response
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <AvailRateList>
      <Hotel id="1780109"/>
      <AvailRate date="2012-08-01">
         <RoomType id="205408" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="14" totalInventoryAvailable="14" totalInventorySold="0"/>
         </RoomType>
      </AvailRate>
      <AvailRate date="2012-08-02">
         <RoomType id="205408" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="14" totalInventoryAvailable="14" totalInventorySold="0"/>
         </RoomType>
      </AvailRate>
      <AvailRate date="2012-08-03">
         <RoomType id="205408" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="14" totalInventoryAvailable="14" totalInventorySold="2"/>
         </RoomType>
      </AvailRate>
       <AvailRate date="2012-08-01">
         <RoomType id="277433" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="3" totalInventoryAvailable="3" totalInventorySold="1"/>
         </RoomType>
      </AvailRate>
      <AvailRate date="2012-08-02">
         <RoomType id="277433" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="3" totalInventoryAvailable="3" totalInventorySold="0"/>
         </RoomType>
      </AvailRate>
      <AvailRate date="2012-08-03">
         <RoomType id="277433" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="3" totalInventoryAvailable="3" totalInventorySold="3"/>
         </RoomType>
      </AvailRate>
   </AvailRateList>
</ProductAvailRateRetrievalRS>
```

## Requesting all active rate plans' avail and rate data for a specific room type
The following request shows how to request all active rate plans for a specific room type, for one day. Note that specifying only a room type ID implies all rate plans will be returned.

### Request 
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <Authentication username="testuser" password="testpass"/>
   <Hotel id="1780109"/>
   <ParamSet>
      <AvailRateRetrieval from="2012-08-01" to="2011-08-01">
        <RoomType id="205408"/>      
      </AvailRateRetrieval>
   </ParamSet>
</ProductAvailRateRetrievalRQ>
```
### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <AvailRateList>
      <Hotel id="1780109"/>
      <AvailRate date="2012-08-01">
         <RoomType id="205408" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="14" totalInventoryAvailable="14" totalInventorySold="2"/>
            <RatePlan id="2114446" closed="false">
               <Rate currency="EUR">
                  <PerOccupancy rate="60.00" occupancy="1"/>
                  <PerOccupancy rate="100.00" occupancy="2"/>
                  <PerOccupancy rate="135.00" occupancy="3"/>
                  <PerOccupancy rate="160.00" occupancy="4"/>
                  <PerOccupancy rate="195.00" occupancy="5"/>
                  <PerOccupancy rate="228.00" occupancy="6"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
         </RoomType>
      </AvailRate>
   </AvailRateList>
</ProductAvailRateRetrievalRS>
```

## Requesting 1 rate plan for 400 days
The following request shows an attempt to query 400 days for 1 rate plan. The response will actually only contain 365 days. The PARR API never returns more than 365 days per response when a rate plan is requested.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="1780110"/>
    <ParamSet>
        <AvailRateRetrieval from="2011-08-01" to="2013-01-01">
            <RoomType id="205429">
                <RatePlan id="200069194"/>
            </RoomType>
        </AvailRateRetrieval>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
   <AvailRateList>
      <Hotel id="1780110"/>
      <AvailRate date="2011-08-01">
         <RoomType id="205429" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="50" totalInventoryAvailable="50" totalInventorySold="0"/>
            <RatePlan id="200069194" closed="false">
               <Rate currency="EUR">
                  <PerDay rate="110.00"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
         </RoomType>
      </AvailRate>
      <AvailRate date="2011-08-02">
         <RoomType id="205429" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="50" totalInventoryAvailable="50" totalInventorySold="0"/>
            <RatePlan id="200069194" closed="false">
               <Rate currency="EUR">
                  <PerDay rate="110.00"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
         </RoomType>
      </AvailRate>
      <AvailRate date="2011-08-03">
         <RoomType id="205429" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="50" totalInventoryAvailable="50 totalInventorySold="0""/>
            <RatePlan id="200069194" closed="false">
               <Rate currency="EUR">
                  <PerDay rate="110.00"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
         </RoomType>
      </AvailRate>
[… hiding dates 2011-08-04 to 2012-07-29 to reduce message size]
      <AvailRate date="2012-07-30">
         <RoomType id="205429" closed="false">
            <Inventory baseAllocation="0" flexibleAllocation="50" totalInventoryAvailable="50" totalInventorySold="0"/>
            <RatePlan id="200069194" closed="false">
               <Rate currency="EUR">
                  <PerDay rate="110.00"/>
               </Rate>
               <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
            </RatePlan>
         </RoomType>
      </AvailRate>
</ProductAvailRateRetrievalRS>
```

## Requesting all room types and rate plans for 365 days
The following request shows an attempt to request all products for one hotel for the next 365 days. The response will only contain the closest first 31 days from the start date, and the other dates will not be returned, as a request for multiple products is constrained by our system to only return a maximum of 31 days at once. The hotel has 2 room types, each with 2 rate plans.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="testuser" password="testpass"/>
    <Hotel id="2333447"/>
    <ParamSet>
        <AvailRateRetrieval from="2011-08-01" to="2012-07-30"/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <AvailRateList>
        <Hotel id="2333447"/>
        <AvailRate date="2012-08-01">
            <RoomType id="352546" closed="false">
                <Inventory baseAllocation="12" flexibleAllocation="43" totalInventoryAvailable="55" totalInventorySold="0"/>
                <RatePlan id="1110018" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="134.99" occupancy="1"/>
                        <PerOccupancy rate="134.99" occupancy="2"/>
                        <PerOccupancy rate="154.99" occupancy="3"/>
                        <PerOccupancy rate="174.99" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
                <RatePlan id="1110020" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="131.39" occupancy="1"/>
                        <PerOccupancy rate="131.39" occupancy="2"/>
                        <PerOccupancy rate="151.39" occupancy="3"/>
                        <PerOccupancy rate="171.39" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
            </RoomType>
            <RoomType id="352550" closed="false">
                <Inventory baseAllocation="0" flexibleAllocation="32" totalInventoryAvailable="32" totalInventorySold="0"/>
                <RatePlan id="1110024" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="138.37" occupancy="1"/>
                        <PerOccupancy rate="138.37" occupancy="2"/>
                        <PerOccupancy rate="158.37" occupancy="3"/>
                        <PerOccupancy rate="178.37" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
                <RatePlan id="1110025" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="134.68" occupancy="1"/>
                        <PerOccupancy rate="134.68" occupancy="2"/>
                        <PerOccupancy rate="154.68" occupancy="3"/>
                        <PerOccupancy rate="174.68" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
            </RoomType>
        </AvailRate>
[… hiding dates 2011-08-02 to 2011-08-30 to reduce message size]
        <AvailRate date="2012-08-31">
            <RoomType id="352546" closed="false">
                <Inventory baseAllocation="12" flexibleAllocation="43" totalInventoryAvailable="55" totalInventorySold="0"/>
                <RatePlan id="1110018" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="134.99" occupancy="1"/>
                        <PerOccupancy rate="134.99" occupancy="2"/>
                        <PerOccupancy rate="154.99" occupancy="3"/>
                        <PerOccupancy rate="174.99" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
                <RatePlan id="1110020" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="131.39" occupancy="1"/>
                        <PerOccupancy rate="131.39" occupancy="2"/>
                        <PerOccupancy rate="151.39" occupancy="3"/>
                        <PerOccupancy rate="171.39" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
            </RoomType>
            <RoomType id="352550" closed="false">
                <Inventory baseAllocation="0" flexibleAllocation="32" totalInventoryAvailable="32" totalInventorySold="0"/>
                <RatePlan id="1110024" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="138.37" occupancy="1"/>
                        <PerOccupancy rate="138.37" occupancy="2"/>
                        <PerOccupancy rate="158.37" occupancy="3"/>
                        <PerOccupancy rate="178.37" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
                <RatePlan id="1110025" closed="false">
                    <Rate currency="CAD">
                        <PerOccupancy rate="134.68" occupancy="1"/>
                        <PerOccupancy rate="134.68" occupancy="2"/>
                        <PerOccupancy rate="154.68" occupancy="3"/>
                        <PerOccupancy rate="174.68" occupancy="4"/>
                    </Rate>
                    <Restrictions minLOS="1" maxLOS="28" closedToArrival="false" closedToDeparture="false"/>
                </RatePlan>
            </RoomType>
        </AvailRate>
    </AvailRateList>
</ProductAvailRateRetrievalRS>
```

## Requesting Rate Plan Linkage Information
The following request shows an attempt to request all active products, and include rate plan linkage information. The response will contain rate plan linkage information for the products that have linkage defined. The hotel has 1 room type and 4 rate plans, where 1 has rate plan linkage rule defined.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
  <Authentication username="testuser" password="testpass" />
  <Hotel id="7794" />
      <ParamSet>
          <ProductRetrieval returnRateLink="true"/>
  </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
  <ProductList>
    <Hotel id="7794" name="The Test Hotel In Milan" city="Milan"/>
    <RoomType id="16273" code="GDX" name="Grand Deluxe Room" status="Active">
      <RatePlan id="201426724" code="ROOMONLY" name="Non refundable" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
      <RatePlan id="44900" code="EXPEP" name="Non refundable" status="Active" type="Package" distributionModel="ExpediaCollect" rateAcquisitionType="Linked" parentId="201426724" rateLinkStart="2013-06-13" isAvailStatusLinked="true" areMinMaxLOSLinked="true" isCTALinked="true" isCTDLinked="false" rateLinkExceptions="false">
        <RatePlanLinkDefinition linkType="Percent" linkValue="-10.0"/>
      </RatePlan>
      <RatePlan id="201172715" code="ROOMONLY" name="C37172" status="Active" type="Standalone" distributionModel="ExpediaCollect" rateAcquisitionType="NetRate"/>
      <RatePlan id="201172715A" code="C37172" name="C37172" status="Active" type="Standalone" distributionModel="HotelCollect" rateAcquisitionType="Derived" parentId="201172715"/>
    </RoomType>
  </ProductList>
</ProductAvailRateRetrievalRS>
```

## Requesting all available product attributes
The following request and response shows all the information that our PARR service can return. It will include rate linkage, room type and rate plan attributes, compensation details and cancellation policy.

### Request
```xml
<ProductAvailRateRetrievalRQ xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <Authentication username="eqcxnet" password="ECLPASS"/>
    <Hotel id="211"/>
    <ParamSet>
        <ProductRetrieval returnRateLink="true" returnRoomAttributes="true" returnRatePlanAttributes="true" returnCompensation="true" returnCancelPolicy="true"/>
    </ParamSet>
</ProductAvailRateRetrievalRQ>
```

### Response
```xml
<ProductAvailRateRetrievalRS xmlns="http://www.expediaconnect.com/EQC/PAR/2013/07">
    <ProductList>
        <Hotel name="Test Hotel 211" city="Montreal" id="211"/>
        <RoomType name="Standard" id="20000" status="Active" code="Standard" smokingPref="Either" maxOccupants="3">
            <BedType id="1.14" name="One King Bed"/>
            <OccupancyByAge ageCategory="Adult" minAge="18" maxOccupants="3"/>
            <OccupancyByAge ageCategory="ChildAgeA" minAge="0" maxOccupants="2"/>
            <RateThreshold type="NetRate" minAmount="15.12" maxAmount="715.87" source="RecentReservations"/>
            <RateThreshold type="SellRate" minAmount="25.21" maxAmount="919.17" source="RecentReservations"/>
            <RatePlan name="Rack" rateAcquisitionType="NetRate" type="Standalone" distributionModel="ExpediaCollect" id="21000" status="Active" code="STD" pricingModel="PerDayPricing" occupantsForBaseRate="2" minLOSDefault="1" maxLOSDefault="28" minAdvBookDays="0" maxAdvBookDays="500" mobileOnly="false" createDateTime="2004-07-29T09:12:42Z" updateDateTime="2012-10-03T15:56:44Z">
                <Compensation default="true" percent="25.00" minAmount="15.00"/>
                <CancelPolicy default="true" nonRefundable="true" createDateTime="2010-03-21T09:30:45Z" updateDateTime="2011-01-01T12:15:55Z"/>
            </RatePlan>
            <RatePlan name="Rack" rateAcquisitionType="Derived" type="Standalone" distributionModel="HotelCollect" id="21000A" status="Active" code="STD" parentId="21000" pricingModel="PerDayPricing" occupantsForBaseRate="2" depositRequired="false" minLOSDefault="1" maxLOSDefault="28" minAdvBookDays="0" maxAdvBookDays="500" mobileOnly="false" createDateTime="2004-07-29T09:12:42Z" updateDateTime="2012-10-03T15:56:44Z">
                <Compensation default="true" percent="25.00"/>
                <CancelPolicy default="true" nonRefundable="true" createDateTime="2010-03-21T09:30:45Z" updateDateTime="2011-01-01T12:15:55Z"/>
            </RatePlan>
            <RatePlan name="Breakfast included" rateAcquisitionType="NetRate" type="Standalone" distributionModel="ExpediaCollect" id="22000" status="Active" code="BRKFST" pricingModel="PerDayPricing" occupantsForBaseRate="2" minLOSDefault="1" maxLOSDefault="28" minAdvBookDays="0" maxAdvBookDays="500" mobileOnly="false" bookDateStart="2014-01-01" bookDateEnd="2014-06-30" travelDateStart="2014-05-01" travelDateEnd="2014-09-01" createDateTime="2012-07-29T09:12:42Z" updateDateTime="2013-12-23T12:51:54Z">
                <DayOfWeekBookingRestriction type="StartOn" thu="true" fri="true" sat="true"/>
                <DayOfWeekBookingRestriction type="EndOn" sun="true" thu="true" fri="true" sat="true"/>
                <Compensation default="true" percent="25.00" minAmount="15.00"/>
                <Compensation default="false" percent="22.00" from="2014-06-01" to="2014-12-31" mon="true" tue="true" wed="true" thu="true" fri="false" sat="false" sun="false"/>
                <CancelPolicy default="true" nonRefundable="true" createDateTime="2010-03-21T09:30:45Z" updateDateTime="2011-01-01T12:15:55Z"/>
            </RatePlan>
        </RoomType>
        <RoomType name="Deluxe" id="23000" status="Active" code="Deluxe" smokingPref="NonSmoking" maxOccupants="2">
            <BedType id="1.15" name="One Queen Bed"/>
            <OccupancyByAge ageCategory="Adult" minAge="18" maxOccupants="2"/>
            <RateThreshold type="NetRate" minAmount="15.12" maxAmount="715.87" source="RecentReservations"/>
            <RateThreshold type="SellRate" minAmount="25.21" maxAmount="919.17" source="RecentReservations"/>
            <RatePlan name="Rack" rateAcquisitionType="NetRate" type="Standalone" distributionModel="ExpediaCollect" id="24000" status="Active" code="STD" pricingModel="PerDayPricing" occupantsForBaseRate="2" depositRequired="false" minLOSDefault="1" maxLOSDefault="28" minAdvBookDays="0" maxAdvBookDays="500" mobileOnly="false" createDateTime="2004-07-29T09:12:42Z" updateDateTime="2012-10-03T15:56:44Z">
                <Compensation default="true" percent="25.00" minAmount="15.00"/>
                <CancelPolicy default="true" nonRefundable="true" createDateTime="2010-03-21T09:30:45Z" updateDateTime="2011-01-01T12:15:55Z"/>
            </RatePlan>
            <RatePlan name="Rack" rateAcquisitionType="Derived" type="Standalone" distributionModel="HotelCollect" id="24000A" status="Active" code="STD" parentId="24000" pricingModel="PerDayPricing" occupantsForBaseRate="2" depositRequired="false" minLOSDefault="1" maxLOSDefault="28" minAdvBookDays="0" maxAdvBookDays="500" mobileOnly="false" createDateTime="2004-07-29T09:12:42Z" updateDateTime="2012-10-03T15:56:44Z">
                <Compensation default="true" percent="25.00"/>
                <CancelPolicy default="true" nonRefundable="true" createDateTime="2010-03-21T09:30:45Z" updateDateTime="2011-01-01T12:15:55Z"/>
            </RatePlan>
            <RatePlan name="Breakfast included" rateAcquisitionType="Linked" type="Standalone" distributionModel="ExpediaCollect" id="25000" status="Active" code="BRKFST" parentId="22000" rateLinkStart="2014-07-01" rateLinkEnd="2015-02-01" isAvailStatusLinked="true" areMinMaxLOSLinked="true" isCTALinked="true" isCTDLinked="false" rateLinkExceptions="false" pricingModel="PerDayPricing" occupantsForBaseRate="2" minLOSDefault="1" maxLOSDefault="28" minAdvBookDays="0" maxAdvBookDays="500" mobileOnly="false" createDateTime="2004-07-29T09:12:42Z" updateDateTime="2012-10-03T15:56:44Z">
                <RatePlanLinkDefinition linkType="Amount" linkValue="20.0"/>
                <Compensation default="true" percent="25.00" minAmount="15.00"/>
                <CancelPolicy default="true" nonRefundable="true" createDateTime="2010-03-21T09:30:45Z" updateDateTime="2011-01-01T12:15:55Z"/>
            </RatePlan>
        </RoomType>
    </ProductList>
</ProductAvailRateRetrievalRS>
```