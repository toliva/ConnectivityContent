# FAQ & Guides
This section contains various Frequently Asked Questions, as well as documentation that will help partners understand how Expedia works, and also how to use the product API to correctly reflect partner's intent when managing room types and rate plans.

<a name="/howtogetstarted"></a>
## How to Get Started for First Time API Users
In order to get started with using the API, it is required to register with Expedia and obtain API credentials. It is also possible to obtain the rights to use a test property to run some tests before going to production with a new integration. To get started, new partners need to send an email to eqcss@expedia.com.

## How to Get Authorized to Access Specific Properties
In order to be able to manage properties in production, partners need to be authorized by either Expedia, or the properties that chose to do business with their system.

After a partner successfully registered with Expedia (see [above section](#/howtogetstarted) for details on how to get started), properties can decide to select the partner and authorize them via Expedia PartnerCentral. When this happens, the partner will get an email notification. The email will contain the confirmation that the partner is now authorized to manage this hotel via API calls. It will also either contain a specific set of credentials for this property, or will indicate that the partner's unique account was authorized to manage this additional property. Whether a partner is given a unique account, or one per property, is decided at time of registration with Expedia.

## Understanding Expedia Lodging Data Model
In the Expedia lodging data model, properties, room types and rate plans are stored according to the following hierarchy:
- Each property has 0 or more room types
- Each room type has one or more rate plans
- Each rate plan belongs to a single room type
- Each rate plan is associated with a single cancellation policy and a single set of additional guest amounts.
The Product API enables partners to first create a room type, and subsequently create rate plans for that room type. For every room type created, the partner is expected to add rate plans to it even if the system will not enforce this rule automatically.
- Additionally, for most of our partners, their contract requires that they offer a package rate plan for each standalone rate plan made available to Expedia.

The following example illustrates the model and gives an overview of the type of data that needs to be set at various levels.

![Data Model Overview with an Example](/images/ExpDataModelToday.png)

## Simplified mapping process with Product API
In order to be able to start sending inventory and rates to Expedia, time consuming manual steps used to be required:
- Contact Expedia via either phone or email to make sure the right room types and rate plans are created
- Work with the connectivity system provider to acquire the room types and rate plans loaded in the Expedia system, through either a CSV spreadsheet or an API call
- Manually look at the room types and rate plans in the connectivity system, and map them to the corresponding Expedia room types and rate plan IDs

With the new product API, these steps can go away. Once the room types and rate plans are defined and exist in the partner connectivity system, the partner simply needs to automatically call the product API to create the room types and rate plans. In the responses returned by the API, the IDs required for mapping are included. The system will know right away what are the IDs to be subsequently used and should be able to map them automatically, right away, using the product API response.

![Simplified Mapping Process Overview](/images/mapping-process.png)

## Does Expedia Offer JSON Schema Files for Product API?

Expedia does not offer JSON schemas, but we do offer a [Swagger.json](https://services.expediapartnercentral.com/products/swagger.json) file that should enable our partners to build an integration to Expedia Product API quickly. For more information, please watch our [Video Tutorial](/apis/product-management/product-api/video.html).

## Product API Versioning Documentation and Maintenance Strategy for Older Versions

Product API online documentation will only be maintained for the latest available version. When a new version is published, the documentation on this portal will only reflect the latest version of the API. Moreover, older versions will be kept for at most 6 months after the release of a new version, to give partners time to migrate. Partners using older versions will be notified when versions are slated for retirement and be given time to migrate over.

<a name="v1v2diff"></a>
## Changes between Product API V1 and V2

On June 10th, a new version of the product API was released. A few non-backward compatible changes were made to the room type resource, requiring Expedia to version the API.

Here's an overview of all the changes and new features contained in V2.

### Versioning 

Product API V1 contained the major version within the URL of all its resources. With V2, the version is moved to the content-type and accept headers, to allow for greater flexibility in the versioning of the various resources.

More information about versioning in V2 with http headers can be found in the [reference section](reference.html#/versioning).

### New Occupancy Definition

The way Expedia collects occupancy information has changed significantly. In V1, partners used to give information about max occupancy of the room, and then max occupancy for up to 6 different age categories. For example, assuming a room took up to 4 guests, with some children and infant, a partner could have defined something like this:
```json
"maxOccupants": 4,
"occupancyByAge": [{
    "ageCategory": "Adult",
    "minAge": 13,
    "maxOccupants": 3
},
{
    "ageCategory": "ChildAgeA",
    "minAge": 5,
    "maxOccupants": 2
},
{
    "ageCategory": "Infant",
    "minAge": 0,
    "maxOccupants": 0
    }
]
```

In the new V2 model, partners need to call out which age categories are supported by the room, but only provide count for adults in children. The above example in V2 model becomes:
```json
"ageCategories": [{
    "category": "Adult",
    "minAge": 13
},
{
    "category": "ChildAgeA",
    "minAge": 5
},
{
    "category": "Infant",
    "minAge": 0
}
],
"maxOccupancy": {
    "total": 4,
    "adults": 3,
    "children": 2
}
```

For more information about age categories and occupancies, please see [Understanding Occupancy and Age Category Settings in the Room Type Resource](#/occupancyAgeCategory) in this section.
### New Bed Type Definition

The way Expedia collects bedding information has now changed in a significant way. When it came to bed type configuration for a room, in V1, partners were constrained to a list of 240 possible values, for all possible combinations of bed types. For example, a partner who needed to configure a room with 1 double bed and 2 single beds had to do it using bed type id 1.66 from the list of predefined configurations Expedia maintained:
```json
"bedTypes": [{
    "id": "1.66",
    "name": "1 double and 2 single beds"
}]
```

With the new bed type model, partners just have to give us a count for each bed type they support. The above example becomes:
```json
"standardBedding": [{
    option": [{
        "quantity": 1,
        "type": "Full Bed",
        "size": "Full"
    },
    {
        "quantity": 2,
        "type": "Twin Bed",
        "size": "Twin"
    }]
}]
```

Partners now have unlimited options in defining and combining bed types available for a given room type. Please review the [BeddingOption section](reference.html#/definitions/BeddingOptionDTO) of the API Definition for more information.

Another change introduced in this space is to restrict room types to only offer 2 bed type configuration options. It is not possible anymore to specify that a given room type can be offered in 3 or more possible configurations and have guest choose between 3 or more configurations at time of booking.

#### Extra Bedding Definition

Expedia also streamlined the management of extra bedding configuration. It used to be managed as amenities under a room type in V1. It is now part of the room type resource. Partners who support extra beds like crib or rollaway can now give this information as part of the room type resource definition, along with any extra charge that customers might incur should they request these extra beds at the property.

Example of how extra beds are provided within the room type resource:
```json
"extraBedding": [{
    "quantity": 1,
    "type": "Rollaway Bed",
    "size": "Full",
    "surcharge": {
        "type": "Per Day",
        "amount": 20
     }
},
{
    "quantity": 1,
    "type": "Crib",
    "size": "Crib",
    "surcharge": {
    "type": "Free"
    }
}]
```

Please review the [ExtraBed section](#/definitions/ExtraBedDTO) of the API definition for more information.

### Smoking Preference

Within the room type resource, the structure for expressing smoking preferences was streamlined and simplied. In V1, to specify a room type supported both smoking and non-smoking configurations, a partner would specify:

```json
"smokingPreferences": [{
    "id": "2.1",
    "name": "Non-Smoking"
},
{
    "id": "2.2",
    "name": "Smoking"
}]
```

In V2, it becomes simply:
```json
"smokingPreferences":["Smoking","Non-Smoking"]
```
More information about this can be found in the [API Definition](reference.html#/definitions/smokingPreferenceEnum).

### PATCH Operation

In V2, Expedia introduced the possibility to perform partial update operations on all its resources. Please see [Modify: partial or full overlay?](#/update) in this section, or visit the sections about PATCH for [Room Type](reference.html#/PatchRoomType) or [Rate plan](reference.html#/PatchRatePlan) in the API Defintion for more information.

### Cancel Policy Exceptions

In V2, Expedia exposed the possibility to define cancel policy exceptions. On top of the default cancellation penalty, partners can now define exceptions (up to 500) in the future. For more informatino about cancel policy in general, including exception, please see [Understanding Change and Cancel Policy](#/cancelpolicy)

## Expedia Traveler Preference Program: What Is It, and How Is It Reflected in the Property and Rate Plan Resources?

Expedia Traveler Preference (ETP) is a program allowing customer to decide whether pay for their reservation at the time of booking or at the hotel.

In order to be able to offer this option to their customers, Expedia requires from the participating properties that they allow their rate plans to be sold either as ExpediaCollect, where Expedia will collect payment from customer at time of booking, or HotelCollect, where the property will collect payment from the customer at time of check out.

### Identifying ExpediaTravelerPreference Properties

To identify if a property is enabled on the program, the property resource will return an array of 2 distributionModels: ExpediaCollect and HotelCollect:
```JSON
        "distributionModels": [
            "ExpediaCollect",
            "HotelCollect"
        ],
```
### Identifying ExpediaTravelerPreference Rate Plans

When properties have opted in the program, all their standalone rate plans are required to be enabled for the ExpediaTravelerPreference program. It will translate in having 2 different distribution rules configured for each rate plan. For example, when doing a GET on a rate plan enabled for the program, something like this would be returned:
```JSON
 {
    "entity": 
        {
            "resourceId": 200086494,
            ...
            "distributionRules": [
                {
                    "expediaId": "200086494",
                    "partnerCode": "ABC123",
                    "distributionModel": "ExpediaCollect",
                    "manageable": true,
                    "compensation": {
                        "percent": 0.25,
                        "minAmount": 20
                    }
                },
                {
                    "expediaId": "200086494A",
                    "partnerCode": "DEF123",
                    "distributionModel": "HotelCollect",
                    "manageable": false,
                    "compensation": {
                        "percent": 0.25
                    }
                }
            ],
            ...
                }
}
```

### Creating ExpediaTravelerPreference Rate Plans

When a property opted in the program, all its standalone rate plans are required to be enabled for ExpediaTravelerPreference. In order to create an ExpediaTravelerPreference-enabled rate plan with the least amount of information, it minimally needs to contain 2 distribution rules, along with a partner code for each. The partner code doesn't have to be different between ExpediaCollect and HotelCollect rules, but it has to be unique across all the rate plans under the room type it is created under. Example:

```JSON
{
        "distributionRules": [
            {
                "partnerCode": "A123",
                "distributionModel": "ExpediaCollect"
            },
            {
                "partnerCode": "D123",
                "distributionModel": "HotelCollect"
            }
        ]
    }
}
```
This will create a rate plan with these 2 codes, and will default everything else.

### What if a Partner System Requires 2 Distinct Rate Plans to Support the ExpediaTravelerPreference Program?

Partners that use 2 distinct rate plans to support the ExpediaTravelerPreference program will need to combine these into 1 rate plan creation request to Expedia. Partners should provide us the codes for their ExpediaCollect and HotelCollect versions under the appropriate distribution rules. They should then consume our responses and map the Expedia IDs returned as part of each distribution rule to obtain the IDs that will later have to be used to interpret booking messages or push avail/rate messages to Expedia.

## Getting Active or All resources when calling a list endpoint
By default, when partners call one of the list endpoints (properties, room types or rate plans), only active resources are returned. To get all resources including ones that might not be active at the moment, an optional status parameter can be added, with value all. Example for the properties list:

```HTML
/properties?status=all
```

This becomes quite important to understand when partners are in the process of creating new room types. By default, room types are created as inactive in Expedia system, and will only become active once the first active rate plan is added. Therefore, if a partner successfully creates a room type, and then attempts to call the /roomTypes endpoint with no parameters, the partner will not receive the room type back in the response, unless they add ?status=all:
```HTML
/products/v1/properties/123/roomTypes?status=all
```
<a name="update"></a>
## Modify: partial or full overlay?

Expedia offers 2 different methods to make changes to products: PUT or PATCH. This guide intends to give an overview of both options. Partners interested in learning more should refer to the [API Definition](reference.html#modify-an-existing-rate-plan).

### Modifying with PUT

The PUT modify operation is a full overlay. The payload of the modify request needs to include all the elements/attributes returned by read (GET) of this resource (with the exception of the entity element). In the context of a room type modify, if elements such as bed types or age categories are removed, the system will understand this as the user wanting to remove them from the room type.

When making use of the PUT method, Partners are expected to first issue a GET request to read the resource, and then edit what they need to change. Once done, they should resubmit the whole payload with the changes. Issuing a GET first, before making any modification, is quite important as changes to resources can be made via other means. Partners or Expedia Market Managers can make changes via ExpediaPartnerCentral. To find out the latest state of the resource, it is best to do a GET first before making any change to it.

For the most part, partners are allowed to modify the same objects that are manageable in the create operation. In the context of the room type, it is true for most objects/elements. In the context of a rate plan, some things cannot be changed after creation, like the distribution models for example.

### Modifying with PATCH

The PATCH modify operation is a way for our partners to only send what they'd like to modify on a resource. Currently only support on the rate plan resource, but soon to be expanded on all resources. 

Expedia implemented the Merge-PATCH strategy. Partners can send any of the top level elements they'd wish to modify, and omit the ones they do not want to change. Expedia will take care of merging the resource updates and preserve what was not included at the resource's top level.

It is important to note that any top level object is treated as a full overlay even when using Merge-PATCH. For example, if a partner decides to include the cancelPolicy object, all the elements/values of that object need to be included as this specific object update will be treated as a full overlay.

## Understanding Expedia's Logic Around Room Names

When naming their room types, partners using the room type resource are required to provide the name in one of 2 ways:
- Use one of the predefined room names
- Building a name from room-level attributes

Expedia is unable to accept free text room names from its partners. Because Expedia has points of sale in more than 45 languages, and want to offer the best experience to all its customers around the world, it requires to receive names in a structured way, to enable instant availability in all languages.

### Using Predefined Names
When using a predefined room name, creating a room type is quite straightforward. When it comes to providing the name, all a partner has to do is provide one of these predefined names under the value element:
```JSON
{
...
  "name": {
    "value": "Junior Suite"
  },
...
}
```

[Available predefined room names](reference.html#/definitions/PredefinedRoomNamesEnum) can be found in the API Definition section.

### Using Room Name Attributes
For partners who want to convey more information about their room with their room names,  Expedia offers the possibility to build a name from structured attributes. There are up to 10 different attributes that can be used to build a name. However, because Expedia also has a constraint on the lenght of the room names, not all 10 attributes can be used all at once.

It is recommended for our partners to provide all the attributes they would like to be part of the name. Expedia will then only use the ones deemed more relevant if too many attributes are received. Example with all attributes selected:
```JSON
{
...
  "name": {
    "attributes": {
      "typeOfRoom": "Studio",
      "roomClass": "Basic",
      "includeBedType": true,
      "bedroomDetails": "1 Bedroom",
      "includeSmokingPref": true,
      "accessibility": true,
      "view": "Beach View",
      "featuredAmenity": "Hot Tub",
      "area": "Corner",
      "customLabel": "Blue Room"
    }
  },
...
}
```

For partners who want more control over their names and which attributes get used, they can refer to the table below indicating our groupings and what is the maximum number of attributes Expedia will use from each group.

| Attribute name | Group | Optional | Explanation |
| -------------- | ----- | -------- | ----------- |
| typeOfRoom | - | No | Required and always used. |
| roomClass | - | Yes |  Always used in name if provided. |
| includeBedType | Bedding | Yes | Part of a grouping of 2 elements. Only 1 of the 2 will be used if both are specified in this group. Bed type name might not be used as is for the more complicated options. Expedia can default to use "Multiple Beds". |
| bedroomDetails | Bedding | Yes | Part of a grouping of 2 elements. Only 1 of the 2 will be used if both are specified in this group. |
| includeSmokingPref | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| accessibility | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. Indicate if room is accessible to wheelchairs. |
| view | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| featuredAmenity | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| area | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| customLabel | - | Yes | Always used in name if provided. |

For more information about the various possible values and constraints on each of these attributes, please refer to the [API Definition section](reference.html#/definitions/RnsAttributesDTO).

<a name="cancelpolicy"></a>
## Understanding Cancellation & Change Policy
The Cancellation & Change Policy is applicable when a customer either wants to cancel a reservation or when he makes a change to a reservation that would cause the total amount of the initial reservation to be different. Changes impacting the reservation rate include: a change of room type, rate plan, occupancy or dates. For more detailed information on Cancellation & Change Policy please see the [reference](reference.html#/definitions/CancelPolicyDTO).

Cancellation and change policy is optional when creating a new rate plan.
- If provided, partners are required to provide at least one defaultPenalty with one deadline in hours, and a penalty.
- If no cancellation policy is provided in a create rate plan request, Expedia will try to select one which already exists, is refundable, and was most recently used by an active rate plan of the same type (standalone, package or corporate)
- If no cancellation policy can be found due to not having any active rate plan of the required type, we will default to a standard cancellation policy where the cancellation deadline is set to 24h from guest arrival, the penalty for cancelling inside this deadline is one night room and tax, and there is no penalty for cancelling outside of this deadline. 

When providing a cancel policy, partners can provide one or two defaultPenalties object.
- At least one defaultPenalty must be provided, with a deadline set to 0.
- If no other default penalty is provided, there will be a single strategy applied, defined by that defaultPenalty per stay fee and amount.
- In addition to the default penalty with a deadline set at 0, only one additional defaultPenalty can be provided (for a total of 2). 
- If a second penalty is provided, its deadline must be greater than 0, and less than 1000.
- It is currently not possible to provide more than 2 defaultPenalties. Expedia can only manage 2 different penalties per cancellation & change policy.

Partners can optionally add exceptions objects.
- startDate and endDate are both required
- It is not allowed to provide exceptions with end dates in the past in a create or update message. Exceptions with end dates in the past will not be returned in GET responses.
- Exception date ranges cannot overlap: if more than 1 exception is provided, Expedia will make sure that there are no date overlaps between 2 exception objects.
- The rules and validations around the penalties included in an exception are the same as with the defaultPenalties object (min 1, max 1 deadlines, deadline 0 required, etc.)

When exceptions are defined, Expedia will apply a cancel policy to a booking based on the booking start/arrival date. See example 1 below for a concrete example of what this means.

**Example 1** : Assume a cancel policy with only one exception defined:
- By default, if a customer cancels 72h or less before a property's cancellation time, the customer pays the full amount of the reservation. If he cancels more than 72h before the property's cancellation time, the customer pays no penalty.
- For dates from June 2nd to July 15th inclusively, the rate plan is not refundable.

To reflect such terms, a partner should send:
```JSON
{
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "FullCostOfStay",
        "amount": 0
      }, {
        "deadline": 72,
        "perStayFee": "None",
        "amount": 0
      }
    ],
    "exceptions": [
      {
        "startDate": "2016-06-02",
        "endDate": "2016-07-15",
        "penalties": [
          {
            "deadline": 0,
            "perStayFee": "FullCostOfStay",
            "amount": 0
          }
        ]
      }
    ]
  }
}
```

**How will Expedia decide which penalty to apply to a booking based on example 1's policy?** 
Expedia picks a cancel policy to apply based on arrival date. For example:
- Assume a booking is made for arrival on June 1st, for 3 nights:  because the arrival date is outside of the range of dates covered by the exception, the default policy applies. 
- Assume a booking is made for arrival on July 15th, for 3 nights: because the arrival date falls on the last date of the exception, the exception policy applies.

**Example 2** : Considering the following policy: 
- If a customer cancels between 24h or less before property's cancellation time, the customer pays for one night.
- If a customer cancels more than 24h before property's cancellation time, the customer pays no penalty.

To reflect such terms, a partner should send:
```JSON
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "1stNightRoomAndTax",
        "amount": 0.0
      }, {
        "deadline": 24,
        "perStayFee": "None",
        "amount": 0.0
      }
    ]
  }
```

**Example 3** : variation of the above example, where 
- cancellations within 24h of property cancellation time deadline should be charged 1 night room and tax
- cancellations further out should incur a 5 unit of currency penalty (for example 5 GBP for a London, UK property, assuming property rate acquisition type is SellLAR)

To reflect such terms, a partner should send:
```JSON
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "1stNightRoomAndTax",
        "amount": 0.0
      }, {
        "deadline": 24,
        "perStayFee": "None",
        "amount": 5.0
      }
    ]
  }
```
  
**Example 4** : if a policy is non-refundable, partner should send:
```JSON
  "cancelPolicy": {
    "defaultPenalties": [
      {
        "deadline": 0,
        "perStayFee": "FullCostOfStay",
        "amount": 0.0
      }
    ]
  }
```

## Optional Fields in a Rate Plan Create Request
In a rate plan create request, most fields are optional. If an optional field is not provided, it will be defaulted per specific rules found in the API Definition section. 

Some of the fields cannot be set by the user; these will default to values defined by Expedia. 

The create response will contain all the fields originally provided in the request. It also includes the default values of the fields that were not provided in the request. If an error occurred, the response contains one or more errors.

*About optional fields*: some optional fields may not have any values defined in the Expedia system. In this case the fields are omitted completely in the response.

*About fields documented as not accepted in request, but returned in response*: If such fields (e.g. Compensation) are provided in the request, the API validates that the data provided matches what Expedia defaults to. Otherwise, the API rejects the rate plan creation with an error message indicating why it was rejected. For example, a partner does not need to specify the Compensation in the product create request. If a partner was to include the compensation elements in a request, the API will check whether it matches the property contract, and reject the message if does not. 

<a name="occupancyAgeCategory"></a>
## Understanding Occupancy and Age Category Settings in the Room Type Resource

Age categories are used for 2 different things in Expedia system: confirm if the room supports adults and children, and define additional guest amounts per age category. 

Occupancy settings define the maximum occupancy of the room by number of adulds, children and total. Unlike the age categories, there's no granularity in the configuration for children. There is however a relationship between the age categories and the occupancy settings. If a room accepts children in its occupancy, and a partner wants to define a maxium number of children under the occupancy element, Expedia will expect that the age categories include at least one ChildAge category, or Infant. If it is not the case, Expedia will reject the message.

When a room supports children and infants, assuming a room can accomodate up to 4 people, Expedia would expect to receive a configuration similar to this:
```json
{
    "ageCategories": [
        {
            "category": "Adult",
            "minAge": 18
        },
        {
            "category": "ChildAgeA",
            "minAge": 0
        }
    ],
    "maxOccupancy": {
        "total": 4,
        "adults": 4,
        "children": 3
    }
}
```

If a room doesn't support children, Expedia would expect to receive something like this:
```json
{
    "ageCategories": [
        {
            "category": "Adult",
            "minAge": 18
        }
    ],
    "maxOccupancy": {
        "total": 4,
        "adults": 4
    }
}
```

If a room supports children, but only older children (for example 16+), Expedia would expect to receive something like this:
```json
{
    "ageCategories": [
        {
            "category": "Adult",
            "minAge": 18
        },
        {
            "category": "ChildAgeA",
            "minAge": 16
        }
    ],
    "maxOccupancy": {
        "total": 4,
        "adults": 4,
        "children": 3
    }
}
```
A partner who intends to charge children as adults and only accept older children of 16+ could consider doing something like this as well:
```json
{
    "ageCategories": [
        {
            "category": "Adult",
            "minAge": 16
        }
    ],
    "maxOccupancy": {
        "total": 4,
        "adults": 4
    }
}
```

