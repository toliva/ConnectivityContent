## Quick Start

The Accelerator API enables Expedia partners to read, create, edit and delete accelerators via an API, without having to use Expedia PartnerCentral (EPC) or contact their market manager. 

### Disclaimer

Note that for the purpose of this documentation and to be consistent with the wording used throughout the API, the terms "**variable margins**" will be used interchangeably with the term "**accelerators**".

### Authentication

The Accelerator API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Accelerator API.

### Getting Started
The simplest way to start interacting with the Accelerator API is to access the 
<a href="https://services.expediapartnercentral.com/accelerator/v1/hotels/3856296/variablemargins" target="_blank">https://services.expediapartnercentral.com/accelerator/v1/hotels/3856296/variablemargins</a> endpoint in a browser, and input EQC API username and password when prompted for it.

Partners working with Expedia APIs for the first time and interested in testing this right away can use the following test account to try the above URL:
```
username: EQCtest12933870
password: ew67nk33
```

**Note**: the URL above contains the hotel ID `3856296` which belongs to the test account. When using your own EQC API credentials, you will need to specify one of your own hotel IDs.

Having used the test account, the URL above should return the following JSON document:

```json
{
  "HotelID": 3856296,
  "VariableMargins": [],
  "Warnings": [
    {
      "WarningCode": 2002,
      "WarningMessage": "Hotel 3856296 does not have variable margins set."
    }
  ]
}
```

If this test hotel had any accelerators, they would have been returned as part of the `VariableMargins` array. Now it's time to start adding some! Please see the [next section](add-variable-margins.html) for instructions on how to add accelerators for your own hotels. 

You can also review the complete [reference](reference.html) documentation and expirement with all the different operations using the [try it](try-it.html) section.