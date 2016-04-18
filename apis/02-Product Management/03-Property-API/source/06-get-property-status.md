# GetPropertyStatus API

The onboarding process is an asynchronous workflow, so this endpoint should be polled to retrieve the latest status of the property and its assigned Expedia ID.

## Example Request

GET /properties/v1/mycompany/1234/status

## Example Reponse

 ```javascript

 {
       entity: {
              provider: 'mycompany',
              providerPropertyId:  1234,
              expediaId: null,
              code:  'OnboardingFailed',
              reasonCodes: [ 'InvalidLatLong', 'MissingPhoneNumber' ]
              timestampUtc: '2015-08-26T00:01:06.055Z',
              messages: [
                     'Invalid latitude/longitude: 0.0/0.0.',
                     'No valid phone numbers found.'
              ]
       }
}

The reasonCodes field represents all the reasons the property has a particular status.

| Status Code | Reason Codes |
| Onboarding Failed | PropertyDisabled |
| | MissingExpediaId |
| | MissingContactInfo |
| | BookableProvidersExist |
| | InvalidPropertyName |
| | InvalidCoordinates |
| | NoValidAddresses |
| | NoValidPhoneNumbers |
| | InvalidCountryCode |
| | UnsupportedLocation |
| | PropertySuspended |
| | EpcOnboardingInProgress |
| | OfacCheckFailed |
| | MissingBillingCurrencyCode |
| | InternalError |
| PropertySaved | None |
| ExpediaIdAssigned | None |
| FinanceSetupPending | None |
| VendorIdAssigned | None |
| OnboardingSucceeded | None |
