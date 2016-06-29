# API Reference

The Expedia Conversation Count Service (CCS) is a simple service that retrieves the unread message count by hotel.

## Authentication

The Conversation Count Service requires HTTP basic auth credentials to be supplied with every request.

Credentials must match a valid hotelier username/password.  If data for a specific hotel or list of hotels is being requested, the credentials must be authorized to access data for those hotels.

## Get Unread Count for Hotel Endpoint

```
GET https://services.expediapartnercentral.com/conversations/hotels/{hotelid}/unreadmessages/count
```

This endpoint returns the number of unread messages for a given hotel.

### Request Parameters

| Name            | Parameter Type | Data Type | Values               |
|-----------------|----------------|-----------|----------------------|
| `Authorization` | Header         | String    | `Basic dGVzdDp0ZXN0` |
| 'hotelId'       | Path           | int       | '759'                |

### Response

#### HTTP Status Codes

| Code                    | Reason                                                                          |
|-------------------------|---------------------------------------------------------------------------------|
| 200 OK                  | Request was successful.                                                         |
| 401 Unauthorized        | Username and/or password was invalid.                                           |
| 403 Forbidden           | User is not authorized to request data for the specified hotel.                 |

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
