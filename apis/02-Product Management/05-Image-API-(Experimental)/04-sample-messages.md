# Sample Messages
This section contains sample messages illustrating how to interact with the Image API. Examples are currently not available, but will soon be added.

## Reading all Active Images
To read all active images, a GET of /images for the property will return them:
```
GET https://services.expediapartnercentral.com/properties/12933870/images
Accept: application/json
```

```json
{
  "entity": [
    {
      "resourceId": "6d266700-f59c-4f61-be81-fd43e4da9d4e",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/6d266700_b.jpg",
      "status": "Active",
      "state": "Published",
      "categoryCode": "SUNDECK",
      "propertyFeatured": true,
      "lastUpdateDateTime": "2016-08-19T15:29:00Z",
      "originalImageUrl": "https://epc-photos-prod.s3.amazonaws.com/12933870/d2889492-c134-41f6-a6fe-21dca6a4a161.jpg"
    },
    {
      "resourceId": "b3c659b8-7ca1-4a6c-8d6a-a2b54438b024",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/b3c659b8_b.jpg",
      "status": "Active",
      "state": "Published",
      "lastUpdateDateTime": "2016-08-23T21:09:00Z",
      "originalImageUrl": "https://s3-us-west-2.amazonaws.com/eps-website/IMG_0134.JPG"
    }
  ]
}
```

## Reading all Images (Active and Inactive)
To read all images, a query parameter needs to be passed to the GET images query:
```
GET https://services.expediapartnercentral.com/properties/12933870/images?status=all
Accept: application/json
```

```
{
  "entity": [
    {
      "resourceId": "6d266700-f59c-4f61-be81-fd43e4da9d4e",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/6d266700_b.jpg",
      "status": "Active",
      "state": "Published",
      "categoryCode": "SUNDECK",
      "propertyFeatured": true,
      "lastUpdateDateTime": "2016-08-19T15:29:00Z",
      "originalImageUrl": "https://epc-photos-prod.s3.amazonaws.com/12933870/d2889492-c134-41f6-a6fe-21dca6a4a161.jpg"
    },
    {
      "resourceId": "b3c659b8-7ca1-4a6c-8d6a-a2b54438b024",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/b3c659b8_b.jpg",
      "status": "Active",
      "state": "Published",
      "lastUpdateDateTime": "2016-08-23T21:09:00Z",
      "originalImageUrl": "https://s3-us-west-2.amazonaws.com/eps-website/IMG_0134.JPG"
    },
    {
      "resourceId": "4b2ec261-83b8-4272-9ba9-2beae6f40ac4",
      "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/a54345gh_b.jpg",
      "status": "Inactive",
      "state": "Published",
      "lastUpdateDateTime": "2016-08-23T21:11:00Z",
      "originalImageUrl": "https://s3-us-west-2.amazonaws.com/eps-website/IMG_0444.JPG"
    }
  ]
}
```

## Adding a New Image for a Property With Minimum Data
To add a new image to a property, only the image location is needed.
```
POST https://services.expediapartnercentral.com/properties/12933870/images
Accept: application/json
Content-Type: application/json
{
      "originalImageUrl": "https://s3-us-west-2.amazonaws.com/eps-website/IMG_0134.JPG"
}
```

```
201 Created
Content-Type:  application/json; charset=UTF-8
{
  "entity": {
    "resourceId": "b3c659b8-7ca1-4a6c-8d6a-a2b54438b024",
    "state": "Received"
  }
}
```

## Adding a New Image for Multiple Room Types
To add a new image to a property and have it assigned to some room types, an array of all the room types this image should be assigned to is needed. In this example, we assign a new image to 3 room types, using the room types resource IDs found via the Product API.
```
POST https://services.expediapartnercentral.com/properties/12933870/images
Accept: application/json
Content-Type: application/json
{
  "categoryCode": "GUESTROOM_VIEW",
  "originalImageUrl": "https://s3-us-west-2.amazonaws.com/eps-website/050.jpg",
  "roomTypes": [
    {
      "resourceId": 201357985,
      "roomTypeFeatured": false
    },
    {
      "resourceId": 201357986,
      "roomTypeFeatured": false
    },
    {
      "resourceId": 201603136,
      "roomTypeFeatured": true
    }
  ],
  "status": "Active"
}
```

```
201 Created
Content-Type:  application/json; charset=UTF-8
{
  "entity": {
    "resourceId": "b3626ff5-f89f-45ed-9d64-0f0285a96015",
    "state": "Received"
  }
}
```

## Verifying State of a Newly Added Image
To verify the status of a newly added image and make sure it gets published, a GET with the resource ID of the image would provide the information.

```
GET https://services.expediapartnercentral.com/properties/12933870/images/b3626ff5-f89f-45ed-9d64-0f0285a96015
Accept: application/json
```

```
{
  "entity": {
    "resourceId": "b3626ff5-f89f-45ed-9d64-0f0285a96015",
    "publishedImageUrl": "https://images.trvl-media.com/hotels/13000000/12940000/12933900/12933870/b3626ff5_b.jpg",
    "status": "Active",
    "state": "Published",
    "categoryCode": "GUESTROOM_VIEW",
    "roomTypes": [
      {
        "resourceId": 201357985,
        "roomTypeFeatured": false
      },
      {
        "resourceId": 201357986,
        "roomTypeFeatured": false
      },
      {
        "resourceId": 201603136,
        "roomTypeFeatured": true
      }
    ],
    "lastUpdateDateTime": "2016-08-24T15:05:00Z",
    "originalImageUrl": "https://s3-us-west-2.amazonaws.com/eps-website/050.jpg"
  }
}
```

