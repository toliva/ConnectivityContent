# API Reference

The Expedia Conversation Count Service (CCS) is a simple service that retrieves the unread message count by hotel. 

## Get Unread Count for Hotel Endpoint

```
GET https://www.expedia.com/conversations/hotels/{hotelid}/unreadmessages/count
```

This endpoint returns the number of unread messages for a given hotel.

### Request Parameters

| Name           | Parameter Type | Data Type | Values              |
|----------------|----------------|-----------|---------------------|
| 'Client-Id'    | Header         | String    | `hackathon`         |
| 'hotelId'      | Query          | int       | '759'               |
| 'origin'       | Header         | String    | `""`                |

### Response

#### HTTP Status Codes

| Code                    | Reason                                                                          |
|-------------------------|---------------------------------------------------------------------------------|
| 200 OK                  | Request was successful.                                                         |

### Response Content

When Successful, this endpoint responds with a JSON object with 'Content-Type: application/json'.

#### Properties

| Name          | Data Type | Description                        | Example     |
|---------------|-----------|------------------------------------|-------------|
| `unreadCount` | int       | Count of unread messages.          | `3`         |

###### Example Response

```
{
  "unreadCount": 3
}
```
#### HTTP Status Codes

| Code                    | Reason                                                                          |
|-------------------------|---------------------------------------------------------------------------------|
| 400 Bad Request         | `clientId` query parameter and/or request body is invalid.                      |
| 404 Not Found           | "Not Found"                                                                     |
| 401 Unauthorized        | 'Client-Id' is invalid / Incorrect ApiKey                                       |

Specific reasons for a `400 Bad Request ` response status include:
- "Missing request header 'Client-Id' for method parameter of type String"
- "Request value "hotelId" of "-1" is invalid"

Specific reasons for a `404 Not Found ` response status include:
- "Incorrect endpoint"

