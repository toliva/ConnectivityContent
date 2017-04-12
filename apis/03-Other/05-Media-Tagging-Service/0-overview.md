# Overview

The Media Tagging Service enables developers to understand the content of an image by leveraging existing machine learning models in an easy to use REST API. Integration with Expedia domain like DesMet and Gaia is also provided.

Here is the list of the external services available through this service:

- Google Vision API: [https://cloud.google.com/vision/](https://cloud.google.com/vision/)
- Microsoft Computer Vision API: [https://www.microsoft.com/cognitive-services/en-us/computer-vision-api](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api)
- Pollo Loco (Expedia - experimental): In house Image classification Neural Network trained on Lodging Images (room, bathroom, lobby, etc)


# Media Tagging Service Usage Guide

## How to use the Tagging API?

Simply POST an URL or the Image binary to the REST endpoint of the service. The response will contain all the information that the external services discovered analyzing the pixels of the provided image.

### Example providing the image URL

```
curl -X POST --header 'Content-Type: multipart/form-data' --header 'Accept: */*' 'http://services.expediapartnercentral.com/imgtagging/service/search/[APK]?verbose=false&mediaUrl=[URL]'
```
Where

- APK: the Application Key
- URL: the URL of the image to analyze

### Concrete Examples

#### Input Image 1

![figure1](/files/imgtagging_fig1.jpg "Figure 1")

#### Response from service

```json
{
  "mediaUrl": "http://payorwait.com/wp-content/uploads/2016/11/Arrival.jpg",
  "filename": null,
  "label": [
    {
      "source": "MICROSOFT_VISION",
      "name": "person",
      "confidence": 0.999724805355072
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "standing",
      "confidence": 0.8148471117019653
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "people",
      "confidence": 0.6929631233215332
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "posing",
      "confidence": 0.6628249883651733
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "people_group",
      "confidence": 0.5390625
    },
    {
      "source": "GOOGLE_VISION",
      "name": "people",
      "confidence": 0.8929030299186707
    },
    {
      "source": "GOOGLE_VISION",
      "name": "audience",
      "confidence": 0.7217474579811096
    }
  ],
  "safesearch": [
    {
      "source": "MICROSOFT_VISION",
      "name": "adult",
      "confidence": 0.007412955164909363
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "racy",
      "confidence": 0.010760887525975704
    },
    {
      "source": "GOOGLE_VISION",
      "name": "adult",
      "confidence": 0.2
    },
    {
      "source": "GOOGLE_VISION",
      "name": "medical",
      "confidence": 0.2
    },
    {
      "source": "GOOGLE_VISION",
      "name": "spoof",
      "confidence": 0.2
    },
    {
      "source": "GOOGLE_VISION",
      "name": "violence",
      "confidence": 0.2
    }
  ],
  "landmark": [],
  "text": [
    {
      "source": "GOOGLE_VISION",
      "name": "description",
      "value": "浦T\n"
    }
  ],
  "face": [
    {
      "source": "MICROSOFT_VISION",
      "name": "face",
      "age": 43,
      "gender": "Male",
      "confidence": 0,
      "faceRectangle": {
        "width": 280,
        "height": 280,
        "left": 597,
        "top": 38
      }
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "face",
      "age": 26,
      "gender": "Female",
      "confidence": 0,
      "faceRectangle": {
        "width": 269,
        "height": 269,
        "left": 1415,
        "top": 216
      }
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "face",
      "age": 39,
      "gender": "Female",
      "confidence": 0,
      "faceRectangle": {
        "width": 203,
        "height": 203,
        "left": 1091,
        "top": 359
      }
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "face",
      "age": 48,
      "gender": "Female",
      "confidence": 0,
      "faceRectangle": {
        "width": 182,
        "height": 207,
        "left": 1737,
        "top": 323
      }
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "face",
      "age": 61,
      "gender": "Male",
      "confidence": 0,
      "faceRectangle": {
        "width": 189,
        "height": 189,
        "left": 133,
        "top": 201
      }
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "face",
      "age": 32,
      "gender": "Male",
      "confidence": 0,
      "faceRectangle": {
        "width": 151,
        "height": 151,
        "left": 833,
        "top": 303
      }
    }
  ]
}
```
_*Minor modification done to response above for clarity_

#### Face detection overlay

![figure1](/files/imgtagging_fig2.png "Figure 2")


#### Input Image 2

![figure3](/files/imgtagging_fig3.jpg "Figure 3")

#### Response from service

```json
{
  "mediaUrl": "http://www.gomadrid.com/sights/royal-palace.jpg",
  "filename": null,
  "label": [
     {
      "source": "MICROSOFT_VISION",
      "name": "road",
      "confidence": 0.9917759895324707
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "outdoor",
      "confidence": 0.9785417914390564
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "building",
      "confidence": 0.8720086216926575
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "government building",
      "confidence": 0.8116967082023621
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "building_",
      "confidence": 0.7734375
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "outdoor_",
      "confidence": 0.00390625
    },
    {
      "source": "GOOGLE_VISION",
      "name": "plaza",
      "confidence": 0.9118772149085999
    },
    {
      "source": "GOOGLE_VISION",
      "name": "landmark",
      "confidence": 0.874650239944458
    },
    {
      "source": "GOOGLE_VISION",
      "name": "city",
      "confidence": 0.7963883280754089
    },
    {
      "source": "GOOGLE_VISION",
      "name": "town square",
      "confidence": 0.7591147422790527
    },
    {
      "source": "GOOGLE_VISION",
      "name": "palace",
      "confidence": 0.6427467465400696
    },
    {
      "source": "GOOGLE_VISION",
      "name": "downtown",
      "confidence": 0.6211763620376587
    },
    {
      "source": "GOOGLE_VISION",
      "name": "facade",
      "confidence": 0.5975915193557739
    },
    {
      "source": "GOOGLE_VISION",
      "name": "panorama",
      "confidence": 0.5064948797225952
    },
    {
      "source": "GOOGLE_VISION",
      "name": "cityscape",
      "confidence": 0.5026489496231079
    }
  ],
  "landmark": [
    {
      "source": "GAIA",
      "name": "Joy Madrid, Madrid, Spain",
      "confidence": 1,
      "lat": "40.417203",
      "lng": "-3.70647",
      "value": "6228741"
    },
    {
      "source": "GOOGLE_VISION",
      "name": "Royal Palace of Madrid",
      "confidence": 0.9437345862388611,
      "lat": "40.418258",
      "lng": "-3.714022636413574",
      "address": {
        "address": "Real Alcázar de Madrid, 28013 Madrid, Spain",
        "city": "Madrid",
        "country": "Spain",
        "longName": "Royal Palace of Madrid"
      }
    },
    {
      "source": "GOOGLE_VISION",
      "name": "Madrid",
      "confidence": 0.8963629603385925,
      "lat": "40.424996",
      "lng": "-3.692161",
      "address": {
        "address": "Real Alcázar de Madrid, 28013 Madrid, Spain",
        "city": "Madrid",
        "country": "Spain",
        "longName": "Royal Palace of Madrid"
      }
    }
  ],
  "text": [],
  "face": []
}
```
_*Minor modification done to response above for clarity_
