# FAQ & Guides
This section contains various Frequently Asked Questions, as well as documentation that will help partners understand how Expedia works, and also how to use the Deposit API.

## Deposit Policy Overview

### What is a Deposit Policy?
A deposit policy is what defines the customer's payment schedule, when the rate plan purchased is sold as HotelCollect. This is possible for hotels offering the HotelCollect model and for hotels participating in the Expedia Traveler Preference program and offering both HotelCollect and ExpediaCollect options to travelers. In that case, the deposit policy will be applicable to HotelCollect bookings only, as ExpediaCollect bookings are always paid in full to Expedia at time of booking.

By default, properties on Expedia do not have any deposit policies. For properties working on the HotelCollect model, this means that payment for a booking is expected to be 100% collected at the property, at time of checkout, from the guest directly. If the property wants to collect any amount from the customer before checkin at the property, a deposit policy needs to be defined and applied to the rate plans requiring a deposit.

### What does a Deposit Policy contain?
A deposit policy is formed of up to 2 components: a default policy, and up to 4 exception policies. It is possible to only have a default policy, or to only have exceptions.

Within a policy, between 1 and 4 payment installments can be defined. It is possible to define timing of these installments as: time of booking, days prior to checkin, or time of checkin.

The amounts to pay can be either fixed amounts, % of the total booking value, or a certain number of nights. For example, a property who would like to collect 10% of the booking value  at time of booking, and the reminder at time of checkin:
```json
{
    "defaultPolicy": {"payments": [
        {
            "type": "PERCENT",
            "value": 10,
            "when": {"type": "UPON_BOOKING"}
        },
        {
            "type": "REMAINDER",
            "when": {"type": "UPON_ARRIVAL"}
        }
    ]}
}
```

When the policy is an exception, a start date, end date and applicable days of week need to be defined as part of the exception. Up to 15 different date ranges can be specified with any given exception. For example, if a property wants to set a Policy where there is only an exception specifying that for a the month of August 2017, the full payment needs to be made at time of booking:
```json
{
    "exceptionPolicies": [
        {
            "dateRanges": [
                {
                    "startDate": "2017-07-30",
                    "endDate": "2017-08-30",
                    "daysOfWeek": [
                        "SUN",
                        "MON",
                        "TUE",
                        "WED",
                        "THU",
                        "FRI",
                        "SAT"
                    ]
                }
            ],
            "description": "High Season",
            "payments": [{
                "type": "PERCENT",
                "value": 100,
                "when": {"type": "UPON_BOOKING"}
            }]
        }
    ]
}
```

### How should I use the Expedia APIs to manage my Deposit Policy?
The Deposit API allows partners to manage the deposit policy defined for their properties. It is possible to set the policy (via the PUT operation), read the policy (via the GET operation), or remove the policy (via the DELETE operation).

When using the PUT operation, it will either add the policy if none exists, or replace the existing policy if one already exists.

Once a policy exists, it is important to indicate which rate plans should make use of it. By default, when a policy is added for the first time, no rate plan will be defined to use one. To indicate which rate plans should make use of it, partners can use either Expedia Partner Central and manually enable rate plans, or use the Expedia Product API to update any rate plan that should require a deposit. The PATCH operation can be used to update the depositRequired flag on the rate plan resource of the Product API. More information can be found in the [Product API FAQ & Guides section](/apis/product-management/product-api/guides.html#/patchdepositrequired).

## Can I Have Different Deposit Policies Defined for Different Rate Plans of My Property?
It is **not** possible to have different deposit policies for different rate plans. The Deposit Policy is configured at the property level, and will apply to any rate plan enabled for making use of it.

## Do I need a Deposit Policy When My Cancel Policy Already States When There are Penalties Cancelling?

The short answer is yes. In the Expedia system, Deposit and Cancel Policies are 2 very distinct things. For a HotelCollect booking, it is required to have a deposit policy defined and have the rate plan enabled for it, if the intent is to charge anything prior to the guest checking in to the hotel. 

For example, assume a property defined a cancel policy stating that the rate is non-refundable 7 days prior to checkin. If the intent is to charge the full amount of the reservation 7 days prior to checkin, a deposit policy Defined needs to be defined, indicating that the full amount of the reservation will be charged 7 days prior to checkin.

<a name="howtogetstarted"></a>
## How to Get Started for First Time API Users
In order to get started with using the API, it is required to register with Expedia and obtain API credentials. It is also possible to obtain the rights to use a test property to run some tests before going to production with a new integration. To get started, new partners need to send an email to <a href="mailto:eqcss@expedia.com">eqcss@expedia.com</a>.

## How to Get Authorized to Access Specific Properties
In order to be able to manage properties in production, partners need to be authorized by either Expedia, or the properties that chose to do business with their system.

After a partner successfully registered with Expedia (see [above section](#howtogetstarted) for details on how to get started), properties can decide to select the partner and authorize them via Expedia PartnerCentral. When this happens, the partner will get an email notification. The email will contain the confirmation that the partner is now authorized to manage this hotel via API calls. It will also either contain a specific set of credentials for this property, or will indicate that the partner's unique account was authorized to manage this additional property. Whether a partner is given an unique account, or one per property, is decided at registration time.

## Deposit API Versioning Documentation and Maintenance Strategy for Older Versions
Deposit API online documentation will only be maintained for the latest available version. When a new version is published, the documentation on this portal will only reflect the latest version of the API. Moreover, older versions will be kept for at most 6 months after the release of a new version, to give partners time to migrate. Partners using older versions will be notified when versions are slated for retirement and be given time to migrate over.

## Can I get a JSON schema or Swagger file to Facilitate my Development?
Expedia doesn't offer JSON schemas, but a swagger JSON file can be found at 
<https://services.expediapartnercentral.com/properties/depositPolicy/swagger.json>
