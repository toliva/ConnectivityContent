# FAQ & Guides

Due to the high volume of hotels updating their rates and availability information on Expedia through an XML interface, Expedia QuickConnect enforces the following:

- Expedia does not support connection to the QuickConnect Service directly via IP Address, as this address is subject to change without notice. If the EQC partner generally prefers IP Addresses for communication performance reasons, it may consider implementing an address caching strategy to reduce DNS lookups for the URLs. 

####Retry
-    Retry strategy if EQC partner cannot establish communication: If EQC partner receives an error from their application, saying it cannot connect to Expedia QuickConnect (including a connection refused), the EQC partner should perform retries.
-    Retry strategy in case of specific errors returned in XML response: EQC partners should implement retry strategy to handle messages that fail because of communication/network errors  (error code equal to or greater than 4000):
-  Expedia QuickConnect is in maintenance mode
-  Expedia QuickConnect is experiencing temporary problems
-  A network error occurred
This retry strategy should be different than the retry where the communication cannot be established. 

####Concurrency
Expedia QuickConnect only allows one connection at a time per hotel. EQC partners cannot send concurrent requests to update the same hotel. Requests should be queued in the hotel system.

####Included Features
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

