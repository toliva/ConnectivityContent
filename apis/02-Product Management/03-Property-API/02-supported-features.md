# Supported Features

Property API supports the following use cases:

- Onboard a new property into Expedia's Lodging System by submitting property-level details, such as a property's name, address, and attributes.
- Update the record of a property that was previously onboarded by the Property API by you.
- Retrieve a record of the property that was previously onboarded via the Property API by you.
- Get the status of a property, e.g. Onboarding Completed, Onboarding Failed.

After a property is onboarded via the Property API, products can be defined via the [Product API](../product-api/quick-start.html), and rates/availability can be loaded using the [EQC API](/apis/availability-rates-restrictions-booking-and-reservations/eqc-api/reference.html).

The following sections indicate specific use cases that are supported or not supported by the Property API.

## Distribution Model

| Supported   | Not Supported |
| ---------   | ------------- |
| Expedia Collect-only Properties | Changing a property's distribution model via API |
| Hotel Collect-only Properties | |
| ExpediaTravelerPreference Properties (offering both Expedia Collect and Hotel Collect products) | |

Property API supports the onboarding of new properties that offer Expedia Collect, Hotel Collect, OR both Expedia Collect and Hotel Collect products. 

## Billing Setup

| Supported   | Not Supported |
| ---------   | ------------- |
| Centralized & DeCentralized | Billing for independent properties |

Property API supports two scenarios:

1)     Connectivity partners that can centrally handle billing and payments for their associated properties. For Expedia Collect bookings, this would require that the API partner uploads consolidated invoices via ExpediaPartnerCentral for any properties onboarded via the property API, and to be able to receive payment centrally for the net rates being invoiced for. Similarly for Hotel Collect bookings, they would be required to work with a centralized account for consolidated commission payments.

2)     Decentralized billing is also supported - this means a connectivity provider can onboard multiple property managers on their behalf and Expedia can maintain financial relationships directly at the property manager level.
Sample Onboarding RQ for DeCentralized billing Onboarding can be found [here](/files/SetPropertyDetails for DeCentralized Partners.pdf)

To note, individual properties working on an individual billing/payments basis can not be onboarded via the API.

## Updating property content or attributes via API

| Supported            | Not Supported |
| ---------            | ------------- |
| Content Attributes & Property settings         | See SetPropertyDetails documentation |
| Update via submitting a Full Overlay           | Update via PATCH         |

After onboarding a property using the Property API, many of the attributes submitted via onboarding can be updated by sending a full overlay update to the Property API.  After initial onboarding by the Property API some updates, such as latitude/longitude, will be accepted by the Property API but not processed.  See the SetPropertyDetails documentation for a listing of attributes that are not updatable via the Property API.

## Retrieving Some Types of Property Info via API

| Supported | Not Supported |
| --------- | ------------- |
| Retrieve most current record of property attributes submitted | Retrieve record of attributes as seen on Expedia's websites |

Sending a request to /properties/v1/myCompany/myPropertyId will provide a listing of attributes which was most recently submitted to the Property API.  The response does not represent which attributes are displayed on the website or how it is displayed.  The SetPropertyDetails documentation provides a description of attributes that may be moderated or excluded from display.


## Onboarding

| Supported | Not Supported |
| --------- | ------------- |
| Onboard a new property | Onboard a property that already exists on Expedia |

A property will not be onboarded if it already exists in Expedia's system for any provider.  This is typically determined if a property that exists at the same physical location has been previously onboarded.
