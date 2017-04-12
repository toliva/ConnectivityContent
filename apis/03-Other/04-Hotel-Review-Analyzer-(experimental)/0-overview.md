# Overview

This application analyze text in order to extract key group of words and assign them a sentiment score. It was developed using Expedia’s user hotel reviews and therefore yields better results when used on text similar to an hotel review.

The application is built as a 3 step pipeline process. First step is to identify the group of interesting words. This is the **Named Entity Recognition** (a.k.a _NER_) extraction process. Then, the sentence are broken into **opinion unit**. Each unit is then attributed a **sentiment score**. Finally, each group of words is attributed the sentiment score of the opinion unit they are part of.

[Pipeline](/files/htlrvw_fig1.png)

## Named Entity Recognition]

The NER model was learned using a sample of 700 Expedia User Hotel Reviews (random sample from January 2015 US Expedia.com). The reviews were manually annotated to identify 4 types of categories:

*   **Room** : "Parts" of a room, whether or not they are the target of reviewer sentiment. "Things" part (or not) of the actual room the reviewer stayed in. (e.g., "I wish the **room** had a **whirlpool bath**."). Things a reviewer finds in the room but that are not really "part" of the room are not extracted, for example, "I did find a long blonde hair in the **bathtub**," ("long blonde hair" will not be extracted).

*   **Property** : "Parts" of a hotel, whether or not they are the target of sentiment. Property also covers things like hotel services, policies, design/decor/ambiance, cleanliness, and price/fees/charges. Extraction occurs whether or not it is part of the actual hotel the reviewer stayed at, and whether or not it actually existed (e.g., "I wish the hotel had a **pool**," "The hotel I stayed at last year had a **private beach**, but this one didn’t.").

*   **Location** : Things a reviewer found in the vecinity of the hotel they stayed at. If a reviewer mentions the lack of some amenity in the neighborhood of the hotel, we extract it as well. Example: "Located right by the **mall** and major **shopping area** and **eating places**".

*   **Miscellaneous** : This category covers entities that abstractly refer to the hotel itself, the room itself, the location itself, the experience/stay/vacation/trip, amenities, etc. It helps evaluating the overall sentiment on abstract concepts. Example: Great **hotel** and even better food!


#### Example

Here is an example of concept extraction on a review. The words extracted by the NER process are colored. Each category of entity has it’s own color.

[NER](/files/htlrvw_fig2.png)

### Sentiment Classification

Once mentions have been identified in the review, the sentence is broken down into opinion unit (part of sentence which should contain a single sentiment). Each opinion unit is then sent to a Sentiment Classifier (currently we use Expedia’s Affinity Prime Sentiment Classifier — built from user review as well). The sentiment score is a float [0, 1] where a high value indicate a positive sentiment and a near zero value a negative sentiment. All mentions part of a given opinion unit will be assigned the opinion unit’s sentiment score.

#### Example

[Sentiment](/files/htlrvw_fig3.png)

### Getting Help

Hotel Review Analyzer is developped by the Rubicon team (hipchat: 'EWE CS: Rubicon' | DL: Rubicon) located in the Montreal office. It is an open source initiative and anyone is welcome to contribute to its development. Please feel free to reach out to us for any questions or feedback you may have.

The application is the result of work by Brooke Cowan and Guy Masse

## Rest API

Simply POST the text to analyze to the endpoint: "/service/v1/analyze"

### Usage example

#### Curl Request

```
curl 'http://services.expediapartnercentral.com/htlrvw/service/v1/analyze' -i -X POST -H 'Accept: application/json' -d 'I love this hotel'
```

#### Http Request

```
    POST /service/v1/analyze HTTP/1.1
    Accept: application/json
    Host: localhost:8080
    Content-Length: 17

    I love this hotel
```
