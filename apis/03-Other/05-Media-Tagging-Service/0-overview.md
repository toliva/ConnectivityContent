# Overview

The Media Tagging Service enables developers to understand the content of an image by leveraging existing machine learning models in an easy to use REST API. Integration with Expedia domain like DesMet and Gaia is also provided.

Here is the list of the external services available through this service:

- Google Vision API: [https://cloud.google.com/vision/](https://cloud.google.com/vision/)
- Microsoft Computer Vision API: [https://www.microsoft.com/cognitive-services/en-us/computer-vision-api](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api)
- Pollo Loco (Expedia - experimental): [https://confluence/display/people/Pollo+Loco](https://confluence/display/people/Pollo+Loco)


# Media Tagging Service Usage Guide

## How can I start using the Tagging API?
In order for us to grant you access and integrate to the Image Tagging Service, you will require an Application Key that is unique to you as a client. To request an Application Key, please contact an Expedia Content System team member.

### APK Key
The Application Key is a mandatory parameter that you pass along with each request to allow custom configurations for you as a client. It determine which external service will be used against the image.

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
      "source": "POLLO_LOCO",
      "name": "exercise classes  equip",
      "confidence": 0.15124286711215973
    },
    {
      "source": "POLLO_LOCO",
      "name": "public dining",
      "confidence": 0.1353902816772461
    },
    {
      "source": "POLLO_LOCO",
      "name": "bar",
      "confidence": 0.11602244526147842
    },
    {
      "source": "POLLO_LOCO",
      "name": "interior seating  lobby",
      "confidence": 0.11259689182043076
    },
    {
      "source": "POLLO_LOCO",
      "name": "daytime exterior",
      "confidence": 0.0592648908495903
    },
    {
      "source": "POLLO_LOCO",
      "name": "fancy tables and chairs",
      "confidence": 0.0430346354842186
    },
    {
      "source": "POLLO_LOCO",
      "name": "pool",
      "confidence": 0.04103542119264603
    },
    {
      "source": "POLLO_LOCO",
      "name": "guestroom",
      "confidence": 0.03911784291267395
    },
    {
      "source": "POLLO_LOCO",
      "name": "childrens play",
      "confidence": 0.038818877190351486
    },
    {
      "source": "POLLO_LOCO",
      "name": "food close-ups",
      "confidence": 0.03558284789323807
    },
    {
      "source": "POLLO_LOCO",
      "name": "spa treatment",
      "confidence": 0.03495960682630539
    },
    {
      "source": "POLLO_LOCO",
      "name": "exterior tables and chairs",
      "confidence": 0.024317901581525803
    },
    {
      "source": "POLLO_LOCO",
      "name": "staircases",
      "confidence": 0.01428955513983965
    },
    {
      "source": "POLLO_LOCO",
      "name": "living room  couch area",
      "confidence": 0.01276339590549469
    },
    {
      "source": "POLLO_LOCO",
      "name": "theater",
      "confidence": 0.012606939300894737
    },
    {
      "source": "POLLO_LOCO",
      "name": "bathroom",
      "confidence": 0.01247958280146122
    },
    {
      "source": "POLLO_LOCO",
      "name": "store",
      "confidence": 0.009334200993180275
    },
    {
      "source": "POLLO_LOCO",
      "name": "exterior hotel  grounds building",
      "confidence": 0.009145865216851234
    },
    {
      "source": "POLLO_LOCO",
      "name": "nighttime exterior",
      "confidence": 0.008829398080706596
    },
    {
      "source": "POLLO_LOCO",
      "name": "club",
      "confidence": 0.007954933680593967
    },
    {
      "source": "POLLO_LOCO",
      "name": "exterior gardens  grass  flowers",
      "confidence": 0.007515126373618841
    },
    {
      "source": "POLLO_LOCO",
      "name": "view",
      "confidence": 0.007108139805495739
    },
    {
      "source": "POLLO_LOCO",
      "name": "business",
      "confidence": 0.007000691257417202
    },
    {
      "source": "POLLO_LOCO",
      "name": "hallway",
      "confidence": 0.006221035495400429
    },
    {
      "source": "POLLO_LOCO",
      "name": "casino",
      "confidence": 0.00616369629278779
    },
    {
      "source": "POLLO_LOCO",
      "name": "expedialodgingdomain",
      "confidence": 0.9966335296630859
    },
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
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.9992949366569519
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.9997405409812927
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.9997751712799072
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.9999557733535767
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.9989660978317261
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.998730480670929
    },
    {
      "source": "GOOGLE_VISION",
      "name": "face",
      "confidence": 0.5044012665748596
    }
  ]
}
```

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
      "source": "POLLO_LOCO",
      "name": "daytime exterior",
      "confidence": 0.5034130811691284
    },
    {
      "source": "POLLO_LOCO",
      "name": "nighttime exterior",
      "confidence": 0.13225647807121277
    },
    {
      "source": "POLLO_LOCO",
      "name": "view",
      "confidence": 0.09548067301511765
    },
    {
      "source": "POLLO_LOCO",
      "name": "exterior tables and chairs",
      "confidence": 0.05084248632192612
    },
    {
      "source": "POLLO_LOCO",
      "name": "beach",
      "confidence": 0.03614275902509689
    },
    {
      "source": "POLLO_LOCO",
      "name": "guestroom",
      "confidence": 0.02777954936027527
    },
    {
      "source": "POLLO_LOCO",
      "name": "exterior hotel  grounds building",
      "confidence": 0.022127972915768623
    },
    {
      "source": "POLLO_LOCO",
      "name": "vehicles",
      "confidence": 0.0216482225805521
    },
    {
      "source": "POLLO_LOCO",
      "name": "public dining",
      "confidence": 0.019630715250968933
    },
    {
      "source": "POLLO_LOCO",
      "name": "pool",
      "confidence": 0.016346778720617294
    },
    {
      "source": "POLLO_LOCO",
      "name": "natural bodies of water",
      "confidence": 0.014622102491557598
    },
    {
      "source": "POLLO_LOCO",
      "name": "exterior gardens  grass  flowers",
      "confidence": 0.010899748653173447
    },
    {
      "source": "POLLO_LOCO",
      "name": "lounge chairs",
      "confidence": 0.008657568134367466
    },
    {
      "source": "POLLO_LOCO",
      "name": "bar",
      "confidence": 0.006256825290620327
    },
    {
      "source": "POLLO_LOCO",
      "name": "interior seating  lobby",
      "confidence": 0.005917399190366268
    },
    {
      "source": "POLLO_LOCO",
      "name": "snow",
      "confidence": 0.0054323310032486916
    },
    {
      "source": "POLLO_LOCO",
      "name": "exercise classes  equip",
      "confidence": 0.0043890150263905525
    },
    {
      "source": "POLLO_LOCO",
      "name": "fancy tables and chairs",
      "confidence": 0.0031166658736765385
    },
    {
      "source": "POLLO_LOCO",
      "name": "childrens play",
      "confidence": 0.0019564186222851276
    },
    {
      "source": "POLLO_LOCO",
      "name": "sport courts",
      "confidence": 0.0019383939215913415
    },
    {
      "source": "POLLO_LOCO",
      "name": "theater",
      "confidence": 0.0016249462496489286
    },
    {
      "source": "POLLO_LOCO",
      "name": "spa treatment",
      "confidence": 0.0015942780300974846
    },
    {
      "source": "POLLO_LOCO",
      "name": "recreational equip",
      "confidence": 0.0010675310622900724
    },
    {
      "source": "POLLO_LOCO",
      "name": "food close-ups",
      "confidence": 0.0008689835667610168
    },
    {
      "source": "POLLO_LOCO",
      "name": "golf",
      "confidence": 0.0008333433652296662
    },
    {
      "source": "POLLO_LOCO",
      "name": "expedialodgingdomain",
      "confidence": 0.9139528274536133
    },
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
  "safesearch": [
    {
      "source": "MICROSOFT_VISION",
      "name": "adult",
      "confidence": 0.006336831022053957
    },
    {
      "source": "MICROSOFT_VISION",
      "name": "racy",
      "confidence": 0.008572145365178585
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
