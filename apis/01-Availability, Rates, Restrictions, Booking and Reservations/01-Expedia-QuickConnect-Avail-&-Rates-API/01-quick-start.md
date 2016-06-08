# Quick Start

The Expedia QuickConnect solution (EQC) is a simple interface that allows hotel properties to communicate updates in rates and availability (AR) automatically to Expedia.

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
