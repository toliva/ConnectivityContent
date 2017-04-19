## Quick Start

The Accelerator API enables Expedia partners to read, create, edit and delete accelerators via an API, without having to use Expedia PartnerCentral (EPC) or contact their market manager. 

### Disclaimer

Note that for the purpose of this documentation and to be consistent with the wording used throughout the API, the terms "**variable margins**" will be used interchangeably with the term "**accelerators**".

### Authentication

The Accelerator API uses a Basic Authorization scheme. The same credentials used to manage properties via EQC today are compatible with the Accelerator API.

### Getting Started
The simplest way to start interacting with the Accelerator API is to access the 
<a href="https://services.expediapartnercentral.com/accelerator/v1/hotels/12933870/variablemargins" target="_blank">https://services.expediapartnercentral.com/accelerator/v1/hotels/12933870/variablemargins</a> endpoint in a browser, and input EQC API username and password when prompted for it.

Partners working with Expedia APIs for the first time and interested in testing this right away can use the following test account to try the above URL:
```
username: EQCtest12933870
password: ew67nk33
```

**Note**: the URL above contains the hotel ID `12933870` which belongs to the test account. When using your own EQC API credentials, you will need to specify one of your own hotel IDs. For the purpose of this getting started guide, we'll be using the test account and its test hotel for all the examples.

Clicking on the URL above should return the following JSON document:

```json
{
  "HotelID": 12933870,
  "VariableMargins": [
    {
      "VariableMarginID": 200090903,
      "StartDate": "2017-05-01",
      "EndDate": "2017-05-07",
      "CreateDate": "2017-04-19 08:31:23",
      "VariableMarginPercentage": 10
    }
  ]
}
```

As you can see, this hotel currently has a single accelerator. Let's add a second one.

For that, you will need to issue a HTTP `POST` command. The example below uses the `curl` command line utility, but feel free to use your web service client of choice.

```bash
curl -X POST \
  https://services.expediapartnercentral.com/accelerator/v1/hotels/12933870/variablemargins \
  -H 'accept: application/json' \
  -H 'authorization: Basic RVFDdGVzdDEyOTMzODcwOmV3NjduazMz' \
  -H 'content-type: application/json' \
  -d '{
  "StartDate": "2017-05-08",
  "EndDate": "2017-05-11",
  "VariableMarginPercentage": 15
}'
```

This command should return a JSON document that looks like this:

```json
{
  "HotelID": 12933870,
  "VariableMargins": [
    {
      "VariableMarginID": 200090903,
      "StartDate": "2017-05-01",
      "EndDate": "2017-05-07",
      "CreateDate": "2017-04-19 08:31:23",
      "VariableMarginPercentage": 10
    },
    {
      "VariableMarginID": 200090908,
      "StartDate": "2017-05-08",
      "EndDate": "2017-05-11",
      "CreateDate": "2017-04-19 08:58:25",
      "VariableMarginPercentage": 15
    }
  ]
}
```

You can see that the hotel now has two accelerators.

You also have the ability to update a specific accelerator by issuing a `PUT` command. Let's update the one we've just added changing its percentage and increasing it to 20:

```bash
curl -X PUT \
  https://services.expediapartnercentral.com/accelerator/v1/hotels/12933870/variablemargins/200090908 \
  -H 'accept: application/json' \
  -H 'authorization: Basic RVFDdGVzdDEyOTMzODcwOmV3NjduazMz' \
  -H 'content-type: application/json' \
  -d '{
	"VariableMarginID": 200090908,
    "StartDate": "2017-05-08",
    "EndDate": "2017-05-11",
    "VariableMarginPercentage": 20
}'
```

From the output, we see that the percentage has been updated:

```json
{
  "HotelID": 12933870,
  "VariableMargins": [
    {
      "VariableMarginID": 200090903,
      "StartDate": "2017-05-01",
      "EndDate": "2017-05-07",
      "CreateDate": "2017-04-19 08:31:23",
      "VariableMarginPercentage": 10
    },
    {
      "VariableMarginID": 200090908,
      "StartDate": "2017-05-08",
      "EndDate": "2017-05-11",
      "CreateDate": "2017-04-19 08:58:25",
      "VariableMarginPercentage": 20
    }
  ]
}
```

Ok, time to clean up. Let's delete this accelerator, which we feel is not improving our sort rank for this hotel like we had anticipated:

```bash
curl -X DELETE \
  https://services.expediapartnercentral.com/accelerator/v1/hotels/12933870/variablemargins/200090908 \
  -H 'accept: application/json' \
  -H 'authorization: Basic RVFDdGVzdDEyOTMzODcwOmV3NjduazMz' \
```

The `DELETE` command simply returns a HTTP status code of `200` when successful. You can validate the effect of the delete by reading the acceleratos for the hotel again.

This rounds up the basic operations of the accelerator API. You can review the complete [reference](reference.html) documentation and expirement with all the different operations using the [try it](try-it.html) section.