# API Definition

## Authentication
Partner must include a valid username/password in the HTTP header of the request using the below format: 
```
Authorization: Basic <username and password encoded by Base64>
```
Example: 
```
Authorization: Basic RVFDdGVzdDEyOTMzODcwOmV3NjduazMz
```
Where "RVFDdGVzdDEyOTMzODcwOmV3NjduazMz" is the string "EQCtest12933870:ew67nk33" (username:password) Base64-encoded.

For more information about getting started for the first time, and authorization, please refer to the [FAQ & Guides section](guides.html#/howtogetstarted)

## API Principles & Standards

- **HTTP 1.1** : Our API only supports HTTP 1.1. Requests made with HTTP 1.0 explicitly will be denied.
- **JSON** : The service will return a JSON document containing the result of the analysis.

## Resources & Endpoints Overview
* All of Expedia APIs now live under the https://services.expediapartnercentral.com/ domain. API  users should make sure to only ever use the fully qualified domain name in their requests to our APIs, and never try to guess/hardcode the IP this address resolves to. In order to provide a robust, highly available and scalable solution, Expedia can change the IPs being used without notice.

| Resource | Supported Operations | Production Endpoint | Parameters |
| -------- | -------------------- | ------------------- | ---------- |
| HotelReviewAnalysis | Analyze Hotel Review (POST) | POST https://services.expediapartnercentral.com/hotel-review/service/v1/analyze | None  |


## HTTP Status Code

The API will leverage HTTP status codes as defined by RFC 2616, Section 10. More specifically, users should expect the following from the API: 

| Status Code | Meaning |
| ----------- | ------- |
| 200 | Success |
| 400 | Errors induced by user due to incorrect input |
| 401 | Authentication error |
| 403 | Authorization error |
| 404 | Invalid resource |
| 500 | Internal system error (shouldn’t be retried) |

## HTTP Headers
HTTP headers are slightly different between a request made to the EPS Product API, and responses returned.

### Format – Request
| Header | Type | Required | Input Format |
| ------ | ---- | -------- | ------------ |
| Authorization | String | Required | Authorization: Basic [username:password encoded by Base64] |
| Content-Type | String | Required* | Content-Type: application/json |
| Accept | String | Required | Accept: application/json |

### Format – Response
| Header | Type | Input Format |
| ------ | ---- | ------------ |
| Content-Type | String | Content-Type: application/json |

## Basic Response Wrapper Structure with Entity and Errors
All responses provided by the API will either contain an HTTP Entity element, which may represent a single object or an array of objects, or an Errors object for an array of errors. 

### HotelReviewAnalysis

The service analyze the POST'ed text and returns it along with a list of the extracted entities. The response gives the different words with their position within the given text.

#### Example

Here is the text the application analyzed:

> Great location to access central Madrid overlooking Plaza de Espagne. The staff were always helpful and interested in what our plans were and offered helpful local advice. All facilities at the hotel were excellent. The wellness centre managed to revive us all after a hard day of galleries, shops and Plazas. Excellent

```json
{
  "success": true,
  "result": {
    "text": "Great location to access central Madrid overlooking Plaza de Espagne. The staff were always helpful and interested in what our plans were and offered helpful local advice. All facilities at the hotel were excellent. The wellness centre managed to revive us all after a hard day of galleries, shops and Plazas. Excellent",
    "entities": [
      {
        "tokens": [
          {
            "word": "location",
            "position": 6
          }
        ],
        "type": "Miscellaneous",
        "sentiment": 0.9982513292865749
      },
      {
        "tokens": [
          {
            "word": "hotel",
            "position": 194
          }
        ],
        "type": "Miscellaneous",
        "sentiment": 0.9865033927843053
      },
      {
        "tokens": [
          {
            "word": "staff",
            "position": 220
          }
        ],
        "type": "Property",
        "sentiment": 0.8928477090956729
      },
      {
        "tokens": [
          {
            "word": "Plazas",
            "position": 302
          }
        ],
        "type": "Location",
        "sentiment": 0.8928477090956729
      }
    ]
  }
}
```

#### HotelReviewAnalysis 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `success`             | Boolean   | True or False. Tells if the analysis completed successfully                                             |
| `result`              | Result    | The complex object containing the result of the analysis                                                |

#### Result 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `text`                | String    | A copy of the text analyzed; source of this Result.                                                     |
| `entities`            | List<Entity>    | The list of entities extracted from the text. An entity is a group of word identified as part of a specific category.              |

#### Entity 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `tokens`              | List<Token>    | The list of token part of this entity.                                                    |
| `type`            | String   | The category of this entity (either Property, Room, Location or Miscellaneous. See [here](/apis/other/hotel-review-analyzer/overview.html) for more details on the categories.            |
| `sentiment`            | Float   | Sentiment score, between 0 and 1 where 0 is very negative and 1 very positive.              |

#### Token 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `word`              | String    | Word part of the Entity                                                    |
| `position`            | Integer   | Starting index of this word within the analyzed text.            |
