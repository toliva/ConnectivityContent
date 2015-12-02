# FAQ & Guides
This section contains various Frequently Asked Questions, as well as documentation that will help partners understand how Expedia works, and also how to use the product API to correctly reflect partner's intent when managing room types and rate plans.

<a name="/howtogetstarted"></a>
## How to Get Started for First Time API Users
In order to get started with using the API, it is required to register with Expedia and obtain API credentials. It is also possible to obtain the rights to use a test property to run some tests before going to production with a new integration. To get started, new partners need to send an email to eqcss@expedia.com.

## How to Get Authorized to Access Specific Properties
In order to be able to manage properties in production, partners need to be authorized by either Expedia, or the properties that chose to do business with their system.

After a partner is registered with Expedia successfully, properties can decide to select the partner and authorize them via Expedia PartnerCentral. When this happens, the partner will get an email informing him that the partner authorized him for access. The email will either contain a specific set of credentials for this property, or will indicate that the partner's unique account was authorized to manage this additional property. Whether a partner is given a unique account, or one per property, is decided at time of registration with Expedia.

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

When a property opted in the program, all its standalone rate plans are requirement to be enabled for ExpediaTravelerPreference. In order to create an ExpediaTravelerPreference-enabled rate plan with the least amount of information, it minimally needs to contain 2 distribution rules, along with a partner code for each. The partner code doesn't have to be different between ExpediaCollect and HotelCollect rules, but it has to be unique to this specific rate plan. Example:

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

### What if my System Requires 2 Distinct Rate Plans to Support the ExpediaTravelerProgram?

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

## Modify as a full overlay
The modify (PUT) operation is a full overlay. The payload of the modify request needs to include all the elements/attributes returned by read (GET) of this resource (with the exception of the entity element). In the context of a room type modify, if elements such as bed types or age categories are removed, the system will understand this as the user wanting to remove them from the room type.

Partners are expected to first issue a GET request to read the resource, and then edit what they need to change. Once done, they should resubmit the whole payload with the changes. Issuing a GET first, before making any modification, is quite important as changes to resources can be made via other means. Partners or Expedia Market Managers can make changes via ExpediaPartnerCentral. To find out the latest state of the resource, it is best to do a GET first before making any change to it.

For the most part, partners are allowed to modify the same objects that are manageable in the create operation. In the context of the room type, it is true for most objects/elements. In the context of a rate plan, some things cannot be changed after creation, like the distribution models for example.

It is currently not possible to make partial updates to a resource.

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
| includeBedType | Bedding | Yes | Part of a grouping of 2 elements. Only 1 of the 2 will be used if both are specified in this group. Bed type name might not be used as is for the more complicated options. Expedia can defautl to use "Multiple Beds". |
| bedroomDetails | Bedding | Yes | Part of a grouping of 2 elements. Only 1 of the 2 will be used if both are specified in this group. |
| includeSmokingPref | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| accessibility | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. Indicate if room is accessible to wheelchairs. |
| view | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| featuredAmenity | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| area | Key Features | Yes | Part of a grouping of 5 elements. Expedia will use a maximum of 2 attributes from this group. |
| customLabel | - | Yes | Always used in name if provided. |

For more information about the various possible values and constraints on each of these attributes, please refer to the [API Definition section](reference.html#/definitions/RnsAttributesDTO).

## Understanding Cancellation & Change Policy
The Cancellation & Change Policy is applicable when a customer either wants to cancel a reservation or when he makes a change to a reservation that would cause the total amount of the initial reservation to be different. Changes impacting the reservation rate include: a change of room type, rate plan, occupancy or dates. The Cancellation & Change Policy is defined with the following attributes in the Expedia system:

| Attribute Name | Description |
| -------------- | ----------- |
| Deadline | Penalty window defined in hours. Hours are relative to checkin date and the property's cancellation time (property level configuration that is available in read-only mode under the property resource). Min 0, max 999 hours. |
| Penalty | Value should match one of the [predefined values](reference.html#/definitions/perStayFeeEnum). |
| Amount | Flat amount that can be charged if customer cancels. |

Cancellation and change policy is optional when creating a new rate plan.
- If provided, partners are required to provide at least one deadline in hours, and a cancellation penalty.
- If no cancellation policy is provided in a create rate plan request, Expedia will try to select one which already exists, is refundable, and was most recently used by an active rate plan of the same type (standalone, package or corporate)
- If no cancellation policy can be found due to not having any active rate plan of the required type, we will default to a standard cancellation policy where the cancellation deadline is set to 24h from guest arrival, the penalty for cancelling inside this deadline is one night room and tax, and there is no penalty for cancelling outside of this deadline. 

When providing a cancel policy, partners can provide one or two defaultPenalties object.
- At least one defaultPenalty must be provided, with a deadline set to 0.
- If no other default penalty is provided, there will be a single strategy applied, defined by that defaultPenalty per stay fee and amount.
- In addition to the default penalty with a deadline set at 0, only one additional defaultPenalty can be provided (for a total of 2). 
- If a second penalty is provided, its deadline must be greater than 0, and less than 1000.
- It is currently not possible to provide more than 2 defaultPenalties. Expedia can only manage 2 different penalties per cancellation & change policy.

**Example 1** : Considering the following policy: 
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

**Example 2** : variation of the above example, where 
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
  
**Example 3** : if a policy is non-refundable, partner should send:
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
