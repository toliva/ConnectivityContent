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
| MediaTaggingService | Tag Image (POST) | POST https://services.expediapartnercentral.com/image-tag/v1 | mediaUrl -or- File  |
| MediaTaggingService | Tag Image -- including Pollo Loco (POST) | POST https://services.expediapartnercentral.com/image-tag/v2 | mediaUrl -or- File  |


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
| Accept | String | Required | Accept: application/json |
| Content-Type | String | Required* | Content-Type: multipart |

### Format – Response
| Header | Type | Input Format |
| ------ | ---- | ------------ |
| Content-Type | String | Content-Type: application/json |

## Basic Response Wrapper Structure with Entity and Errors
All responses provided by the API will either contain an HTTP Entity element, which may represent a single object or an array of objects, or an Errors object for an array of errors. 

### Response Details

When you call this service you need to either provide a valid URL (targeting an image) or you send the binary file itself.

The service will download the image and send it to different image recognition APIs. The information is then gathered and bundled into the MediaTaggingResponse.

#### MediaTaggingResponse 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `mediaUrl`             | String   | The media URL received from the request (if using mediaUrl).                                        |
| `filename`              | String    | The name of the file received from the request (if using the binary file content).                                                |
| `label`              | List<Label>    | The list of tags of type label found for this image.                                               |
| `landmark`              | List<Landmark>    | The list of tags of type landmark found for this image.                                               |
| `text`              | List<Text>    | The sentences of text external APIs were able to read in the image ([OCR](https://en.wikipedia.org/wiki/Optical_character_recognition)).                                               |
| `face`              | List<Face>    | The list of tags of type face found for this image.                                               |
| `safesearch`              | List<SafeSearch>    | The list of tags of type safesearch for this image. These special tags can be used for image auto-moderation.                                              |

#### Label 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `source`                | String    | The name of the external API that yielded this tag.                                                    |
| `name`            | String    | The label. It either identify an object found in the image (ex: church) or something the image is about (ex: symmetry).              |
| `confidence`            | Float    | A confidence level ranging from 0 to 1 provided by the external API.             |

#### Landmark 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `source`                | String    | The name of the external API that yielded this tag.                                                    |
| `name`            | String    | The name of the landmark identified within the image.              |
| `confidence`            | Float    | A confidence level ranging from 0 to 1 provided by the external API.             |
| `lat`            | Float    | Latitude of the identified landmark |
| `lng`            | Float    | Longitude of the identified landmark |
| `value`            | Integer    | *This value is only set when the landmark was found within Gaia; it correspond to the Gaia Id of the landmark. |
| `address`            | LandmarkAddress    | Address of the landmark. |

#### Landmark 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `address`                | String    | Address line                                                  |
| `city`            | String    | City name              |
| `county`            | String    | Country name             |
| `longName`            | String    | More detailed name |

#### Text 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `source`                | String    | The name of the external API that yielded this tag.                                                    |
| `name`            | String    | "description"              |
| `value`            | String    | The text read via OCR            |

#### Face 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `source`                | String    | The name of the external API that yielded this tag.                                                    |
| `name`            | String    | "face"              |
| `gender`            | String    | Predicted sex of the person: "Male" or "Female" (provided by MICROSOFT_VISION only)            |
| `age`            | Integer    | Predicted age of the person (provided by MICROSOFT_VISION only)            |
| `confidence`            | Float    | (provided by GOOGLE_VISION only)            |
| `faceRectangle`            | FaceRectangle    | Position of the face detected in the image.            |

#### FaceRectangle 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `width`                | Integer    | Width of the rectangle bounding the detected face.                                                   |
| `height`            | Integer    | Height of the rectangle bounding the detected face.              |
| `top`            | Integer    | Position 'top' of the rectangle bounding the detected face.          |
| `left`            | Integer    | Postion 'left' of the rectangle bounding the detected face.          |

#### SafeSearch 

| Property              | Data Type | Description                                                                                             |
|-----------------------|-----------|---------------------------------------------------------------------------------------------------------|
| `source`                | String    | The name of the external API that yielded this tag.                                                    |
| `name`            | String    | Name of the moderation rule (ex: adult, violence, spoof or medical)           |
| `confidence`            | Float    | A confidence level ranging between 0 and 1. Where 1 means the image should be censored.            |
