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
| Hotel Collect-only Properties |
| ExpediaTravelerPreference Properties (offering both Expedia Collect and Hotel Collect products) |

Property API supports the onboarding of new properties that offer Expedia Collect, Hotel Collect, OR both Expedia Collect and Hotel Collect products. 

## Billing Setup

| Supported   | Not Supported |
| ---------   | ------------- |
| Centralized | Billing for independent properties |

Property API supports clients that can centrally handle billing for its associated properties.  For Expedia Collect products, this would require that the API partner send invoices to ExpediaPay for any properties it onboards via the Property API.  Individual properties can not invoice Expedia directly.

## Updating property content or attributes via API

| Supported            | Not Supported |
| ---------            | ------------- |
| Updating properties onboarded via Property API | Updating properties that were not onboarded via Property API |
| Content Attributes & Property settings         | See SetPropertyDetails documentation |
| Update via submitting a Full Overlay           | Update via PATCH         |

After onboarding a property using the Property API, many of the attributes submitted via onboarding can be updated by sending a full overlay update to the Property API.  The Property API cannot be used to update properties that were onboarded by methods other than the Property API.  After initial onboarding by the Property API some settings some updates, such as latitude/longitude, will be accepted by the Property API but not processed.  See the SetPropertyDetails documentation for a listing of attributes that are not updatable via the Property API.

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
