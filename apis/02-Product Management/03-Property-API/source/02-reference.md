# Reference

## Supported Use Cases

The Property API currently supports property consolidators, such as channel managers, which has access to content for properties/hotels and has a centralized inventory, booking, and billing.  The property API can support properties that are either Expedia Collect or Expedia Traveler Preference (ETP).

The following use cases are not currently supported:
- Providers that cannot handle billing for Expedia Collect properties.
- Providers must use ExpediaPay for eBilling.
- Providers can not update content for properties that were not onboarded by Property API.

## Authentication

Basic Authentication in HTTP header, using your Expedia Partner Central (EPC) credentials.  Please work with your account manager to activate your credentials for test and production API access.

## Environments

| Environment | Host |
| ----------- | -----|
| Test        | https://int.services.expediapartnercentral.com |
| Production  | https://services.expediapartnercentral.com |

# Endpoints

| Method | Endpoint | HTTP Verb | Description |
| ------ | -------- | --------- | ----------- |
| [Set Property Details](./SetPropertyDetails "Set Property Details API Method") | PUT | /properties/v1/{EPC account id} | PUT property information to initiate onboarding or update an existing property by sending a full overlay. PATCH is not supported.  |
| [Get Property Details](./GetPropertyDetails "Set Property Details API Method") | GET | /properties/v1/{EPC account id}/{provider property ID} | GET property information |
| [Get Property Status](./GetPropertyStatus "Get Property Status API Method") | GET | /properties/v1/{EPC account id}/{provider property ID}/status | GET current state of the specified property (Onboarding Successful, Onboarding Failed, etc.) |
| [Deactivate Property](./DeactivateProperty "Deactivate Property API Method") | DELETE | /properties/v1/{EPC account id}/{provider property ID} | De-activates property in Expedia system |

# API Response - Acknowledgement / Errors

After submitting a request for any of the endpoints listed in the section above, acknowledgement or errors will be returned in the http headers.

| http Code | Description | Retry? | Notes |
| 2xx | Success Message | No | |
| 202 | Request successfully received and is processing. | No | To get processing status, see the status attribute contained in the response body |
| 4xx | Error Message | No | |
| 400 | Validation Error | No | Must address errors listed in the Validation attribute contained within the response body and resubmit. |
| 5xx | Internal Error | Yes | Internal system error when attempting to process message. |


# Certification Process

First, explore the Property API in the interactive [Try it out](./quickstart) documentation.  To gain access to the test environment, you will need to contact your account manager to set up your Property API account and enable your EPC credentials for API access.  Complete the following questionaire to assist in the account setup.  When testing is complete, work with your account manager to enable your EPC account for production API access.

# Support

Contact TBD
