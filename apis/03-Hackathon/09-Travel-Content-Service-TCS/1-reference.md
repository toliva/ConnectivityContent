# Reference

# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [Activity](#activity)
    * [ActivityDescription](#activitydescription)
    * [ActivityDestination](#activitydestination)
    * [ActivityGeo](#activitygeo)
    * [ActivitySection](#activitysection)
    * [Affinity](#affinity)
    * [AffinitySection](#affinitysection)
    * [Article](#article)
    * [ArticleSection](#articlesection)
    * [Author](#author)
    * [DestAffinity](#destaffinity)
    * [DestDescription](#destdescription)
    * [DestGeo](#destgeo)
    * [DestinationSection](#destinationsection)
    * [Hotel](#hotel)
    * [HotelDestination](#hoteldestination)
    * [HotelGeo](#hotelgeo)
    * [HotelPeriod](#hotelperiod)
    * [HotelPricing](#hotelpricing)
    * [HotelSection](#hotelsection)
    * [Image](#image)
    * [Neighborhood](#neighborhood)
    * [NeighborhoodDescription](#neighborhooddescription)
    * [NeighborhoodGeo](#neighborhoodgeo)
    * [NeighborhoodSection](#neighborhoodsection)
    * [NeighborhoodTag](#neighborhoodtag)
    * [NeighborhoodTags](#neighborhoodtags)
    * [Poi](#poi)
    * [PoiAdditionalInfo](#poiadditionalinfo)
    * [PoiDescription](#poidescription)
    * [PoiGeo](#poigeo)
    * [PoiReview](#poireview)
    * [PoiSection](#poisection)
    * [PoiTag](#poitag)
    * [PoiTags](#poitags)
    * [Pricing](#pricing)
    * [SimilarDestination](#similardestination)
    * [SimilarDestinationGeo](#similardestinationgeo)
    * [SimilarDestinationTag](#similardestinationtag)
    * [SimilarDestinationTags](#similardestinationtags)
    * [SimilarSection](#similarsection)
    * [Tip](#tip)
    * [TipAvatar](#tipavatar)
    * [TipGeo](#tipgeo)
    * [TipSection](#tipsection)
    * [TipTag](#tiptag)
    * [TipTags](#tiptags)
    * [metadata](#metadata)
    * [sections](#sections)
  * [Enums](#enums)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Date](#date)
    * [Float](#float)
    * [Int](#int)
    * [Map](#map)
    * [String](#string)
  * [Interfaces](#interfaces)

</details>

## Query 
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sections</strong></td>
<td valign="top"><a href="#sections">sections</a></td>
<td>List of type of section requested : <a href="#activitysection">"ACTIVITY"</a>, "AFFINITY", "ARTICLE", "DESTINATION", "NEIGHBORHOOD", "POI", "SIMILAR_DESTINATION", "TIP"</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">regionId</td>
<td valign="top"><a href="#string">String</a></td>
<td><a href="https://expediaconnectivity.com/apis/hackathon/gaia/overview.html">Gaia ID</a></td>
</tr>
</tbody>
</table>

## Objects

### Activity

Activity information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>activityId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>Activity Id</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td>The static content associated with the data</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#pricing">Pricing</a></td>
<td>The price of activity</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recommendationScore</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>How is the activity scored</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>destination</strong></td>
<td valign="top"><a href="#activitydestination">ActivityDestination</a></td>
<td>Activity information</td>
</tr>
</tbody>
</table>

### ActivityDescription

Description information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>Description of the activity</td>
</tr>
</tbody>
</table>

### ActivityDestination

Destination information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td>Image(s) of this activity</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#activitygeo">ActivityGeo</a></td>
<td>Geography information</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#activitydescription">ActivityDescription</a></td>
<td>Headline of the activity description</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#activitydescription">ActivityDescription</a></td>
<td>Body of the activity description</td>
</tr>
</tbody>
</table>

### ActivityGeo

Geography information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>regionId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td><a href="https://expediaconnectivity.com/apis/hackathon/gaia/overview.html">Gaia ID</a></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### ActivitySection

Activity section

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>activities</strong></td>
<td valign="top">[<a href="#activity">Activity</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Affinity

Affinity description

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>postStayEndorsements</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hotelCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>order</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### AffinitySection

Affinity section

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>affinities</strong></td>
<td valign="top">[<a href="#affinity">Affinity</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Article

Article information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>author</strong></td>
<td valign="top"><a href="#author">Author</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>excerpt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>publicationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### ArticleSection

Article section

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>articles</strong></td>
<td valign="top">[<a href="#article">Article</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Author

Author information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### DestAffinity

Get the affinity information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>displayedName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### DestDescription

Description information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### DestGeo

Get the geography information. Name, country, latitude, longitude

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>regionId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### DestinationSection

Destination Section. Retrieve Affinity, Description, Geo, Images

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#destgeo">DestGeo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#destdescription">DestDescription</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>affinity</strong></td>
<td valign="top"><a href="#destaffinity">DestAffinity</a></td>
<td></td>
</tr>
</tbody>
</table>

### Hotel

Hotel information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>period</strong></td>
<td valign="top"><a href="#hotelperiod">HotelPeriod</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>price</strong></td>
<td valign="top"><a href="#hotelpricing">HotelPricing</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>recommendationScore</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>destination</strong></td>
<td valign="top"><a href="#hoteldestination">HotelDestination</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hotelId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### HotelDestination

Destination information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#hotelgeo">HotelGeo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#destdescription">DestDescription</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#destdescription">DestDescription</a></td>
<td></td>
</tr>
</tbody>
</table>

### HotelGeo

Geography information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>regionId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### HotelPeriod

Period information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td></td>
</tr>
</tbody>
</table>

### HotelPricing

Pricing information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### HotelSection

Hotel section.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hotels</strong></td>
<td valign="top">[<a href="#hotel">Hotel</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Image

Get the image information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>imageMetadataDTO</strong></td>
<td valign="top"><a href="#metadata">metadata</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>alt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>caption</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hero</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Neighborhood

Neighborhood information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#neighborhoodgeo">NeighborhoodGeo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>score</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#neighborhooddescription">NeighborhoodDescription</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#neighborhoodtags">NeighborhoodTags</a></td>
<td></td>
</tr>
</tbody>
</table>

### NeighborhoodDescription

Description information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### NeighborhoodGeo

Geography information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>regionId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### NeighborhoodSection

Neighborhood section.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>neighborhoods</strong></td>
<td valign="top">[<a href="#neighborhood">Neighborhood</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### NeighborhoodTag

Tag information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>displayedName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### NeighborhoodTags

Tags information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top">[<a href="#neighborhoodtag">NeighborhoodTag</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### Poi

Poi information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#poigeo">PoiGeo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>additionalInfo</strong></td>
<td valign="top"><a href="#poiadditionalinfo">PoiAdditionalInfo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#poidescription">PoiDescription</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#poitags">PoiTags</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiAdditionalInfo

Additional information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hours</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>website</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>review</strong></td>
<td valign="top"><a href="#poireview">PoiReview</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>starRating</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reviewSnippet</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiDescription

Description information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiGeo

Geography information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>latitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longitude</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiReview

Review

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>author</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiSection

Poi section.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>pois</strong></td>
<td valign="top">[<a href="#poi">Poi</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiTag

Tag information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PoiTags

Tags information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top">[<a href="#poitag">PoiTag</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### Pricing

Pricing information

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>amount</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>currency</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SimilarDestination

Similar destination information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#image">Image</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#similardestinationgeo">SimilarDestinationGeo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#similardestinationtags">SimilarDestinationTags</a></td>
<td></td>
</tr>
</tbody>
</table>

### SimilarDestinationGeo

Geo information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>regionId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SimilarDestinationTag

Tag information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>displayedName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SimilarDestinationTags

Tags information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top">[<a href="#similardestinationtag">SimilarDestinationTag</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### SimilarSection

Similar section

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>SimilarDestinations</strong></td>
<td valign="top">[<a href="#similardestination">SimilarDestination</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Tip

Tip information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>geo</strong></td>
<td valign="top"><a href="#tipgeo">TipGeo</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>image</strong></td>
<td valign="top"><a href="#image">Image</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>author</strong></td>
<td valign="top"><a href="#tipavatar">TipAvatar</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>body</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tags</strong></td>
<td valign="top"><a href="#tiptags">TipTags</a></td>
<td></td>
</tr>
</tbody>
</table>

### TipAvatar

Tip avatar information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>avatar</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>community</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>username</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### TipGeo

Geo information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### TipSection

Tip section

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Tips</strong></td>
<td valign="top">[<a href="#tip">Tip</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>generatedContent</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>creationDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### TipTag

Tag information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>displayedName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### TipTags

Tags information.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top">[<a href="#tiptag">TipTag</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### metadata

Get the metatadata of an image

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>metadata</strong></td>
<td valign="top"><a href="#map">Map</a></td>
<td></td>
</tr>
</tbody>
</table>

### sections

Tcs Sections

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Article</strong></td>
<td valign="top"><a href="#articlesection">ArticleSection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>SimilarDestination</strong></td>
<td valign="top"><a href="#similarsection">SimilarSection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Hotel</strong></td>
<td valign="top"><a href="#hotelsection">HotelSection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Poi</strong></td>
<td valign="top"><a href="#poisection">PoiSection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Destination</strong></td>
<td valign="top"><a href="#destinationsection">DestinationSection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Affinity</strong></td>
<td valign="top"><a href="#affinitysection">AffinitySection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Activity</strong></td>
<td valign="top"><a href="#activitysection">ActivitySection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Neighborhood</strong></td>
<td valign="top"><a href="#neighborhoodsection">NeighborhoodSection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Tip</strong></td>
<td valign="top"><a href="#tipsection">TipSection</a></td>
<td></td>
</tr>
</tbody>
</table>

## Enums

## Scalars

### Boolean

Built-in Boolean

### Date

Coercing Date

### Float

Built-in Float

### Int

Built-in Int

### Map

Coercing Map

### String

Built-in String


## Interfaces

# Example

```json
{
  "requestId": "c5a5318e9802593f",
  "creationDate": "2017-04-19T18:11:34.029Z",
  "durationInMs": 2040,
  "langId": "EN",
  "sections": {
    "similarDestination": {
      "data": [
        {
          "geo": {
            "name": "Johannesburg",
            "country": " South Africa",
            "regionId": "6051471",
            "audit": {
              "source": "GAIA",
              "transactionType": "Normal"
            }
          },
          "images": [
            {
              "id": "65128",
              "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/65000/65128-Johannesburg-Gauteng-Province.jpg",
              "alt": "Johannesburg - Gauteng, South Africa (multicity)",
              "caption": "Johannesburg - Gauteng which includes a sunset, modern architecture and a high rise building",
              "hero": true,
              "audit": {
                "source": "TOURISM_MEDIA",
                "transactionType": "Normal"
              },
              "imageMetadataDTO": {
                "metadata": {}
              }
            }
          ],
          "tags": {
            "data": [
              {
                "id": "safari",
                "displayedName": "Safaris",
                "order": 0
              },
              {
                "id": "cafe",
                "displayedName": "Cafes",
                "order": 1
              },
              {
                "id": "museum",
                "displayedName": "Museums",
                "order": 2
              }
            ],
            "audit": {
              "source": "AFFINITY_PRIME_SERVICE",
              "transactionType": "Normal"
            }
          },
          "order": 3,
          "score": 0,
          "audit": {
            "transactionType": "Normal"
          },
          "cacheableStatus": "DISTRIBUTABLE",
          "id": "6051471"
        },
        {
          "geo": {
            "name": "Zanzibar",
            "country": " Tanzania",
            "regionId": "4186",
            "audit": {
              "source": "GAIA",
              "transactionType": "Normal"
            }
          },
          "images": [
            {
              "id": "212549",
              "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/212000/212549-Zanzibar.jpg",
              "alt": "Nungwi Beach, Zanzibar, Tanzania (pointofinterest)",
              "caption": "Nungwi Beach",
              "hero": true,
              "audit": {
                "source": "TOURISM_MEDIA",
                "transactionType": "Normal"
              },
              "imageMetadataDTO": {
                "metadata": {}
              }
            }
          ],
          "tags": {
            "data": [
              {
                "id": "snorkeling",
                "displayedName": "Snorkeling",
                "order": 0
              },
              {
                "id": "relaxing",
                "displayedName": "Relaxing",
                "order": 1
              },
              {
                "id": "island",
                "displayedName": "Islands",
                "order": 2
              }
            ],
            "audit": {
              "source": "AFFINITY_PRIME_SERVICE",
              "transactionType": "Normal"
            }
          },
          "order": 4,
          "score": 0,
          "audit": {
            "transactionType": "Normal"
          },
          "cacheableStatus": "DISTRIBUTABLE",
          "id": "4186"
        },
        {
          "geo": {
            "name": "Cape Town",
            "country": " South Africa",
            "regionId": "6046820",
            "audit": {
              "source": "GAIA",
              "transactionType": "Normal"
            }
          },
          "images": [
            {
              "id": "197898",
              "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/197000/197898-Cape-Town.jpg",
              "alt": "Victoria and Alfred Waterfront, Cape Town, South Africa (pointofinterest)",
              "caption": "Victoria and Alfred Waterfront which includes a lake or waterhole",
              "hero": true,
              "audit": {
                "source": "TOURISM_MEDIA",
                "transactionType": "Normal"
              },
              "imageMetadataDTO": {
                "metadata": {}
              }
            }
          ],
          "tags": {
            "data": [
              {
                "id": "mountain",
                "displayedName": "Mountains",
                "order": 0
              },
              {
                "id": "coralReef",
                "displayedName": "Coral Reefs",
                "order": 1
              },
              {
                "id": "cafe",
                "displayedName": "Cafes",
                "order": 2
              }
            ],
            "audit": {
              "source": "AFFINITY_PRIME_SERVICE",
              "transactionType": "Normal"
            }
          },
          "order": 6,
          "score": 0,
          "audit": {
            "transactionType": "Normal"
          },
          "cacheableStatus": "DISTRIBUTABLE",
          "id": "6046820"
        },
        {
          "geo": {
            "name": "Mumbai",
            "country": " India",
            "regionId": "6050062",
            "audit": {
              "source": "GAIA",
              "transactionType": "Normal"
            }
          },
          "images": [
            {
              "id": "97460",
              "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/97000/97460-Mumbai.jpg",
              "alt": "Chhatrapati Shivaji Terminus, Mumbai, India (pointofinterest)",
              "caption": "Chhatrapati Shivaji Terminus showing heritage architecture",
              "hero": true,
              "audit": {
                "source": "TOURISM_MEDIA",
                "transactionType": "Normal"
              },
              "imageMetadataDTO": {
                "metadata": {}
              }
            }
          ],
          "tags": {
            "data": [
              {
                "id": "cafe",
                "displayedName": "Cafes",
                "order": 0
              },
              {
                "id": "temple",
                "displayedName": "Temples",
                "order": 1
              },
              {
                "id": "nature",
                "displayedName": "Nature",
                "order": 2
              }
            ],
            "audit": {
              "source": "AFFINITY_PRIME_SERVICE",
              "transactionType": "Normal"
            }
          },
          "order": 7,
          "score": 0,
          "audit": {
            "transactionType": "Normal"
          },
          "cacheableStatus": "DISTRIBUTABLE",
          "id": "6050062"
        },
        {
          "geo": {
            "name": "London",
            "country": " United Kingdom",
            "regionId": "178279",
            "audit": {
              "source": "GAIA",
              "transactionType": "Normal"
            }
          },
          "images": [
            {
              "id": "219386",
              "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/219000/219386-London.jpg",
              "alt": "London, England, United Kingdom (multicity)",
              "caption": "London featuring a bridge, a city and night scenes",
              "hero": true,
              "audit": {
                "source": "TOURISM_MEDIA",
                "transactionType": "OverridesRemote"
              },
              "imageMetadataDTO": {
                "metadata": {}
              }
            }
          ],
          "tags": {
            "data": [
              {
                "id": "museum",
                "displayedName": "Museums",
                "order": 0
              },
              {
                "id": "theater",
                "displayedName": "Theaters",
                "order": 1
              },
              {
                "id": "urban",
                "displayedName": "Urban",
                "order": 2
              }
            ],
            "audit": {
              "source": "AFFINITY_PRIME_SERVICE",
              "transactionType": "Normal"
            }
          },
          "order": 8,
          "score": 0,
          "audit": {
            "transactionType": "Normal"
          },
          "cacheableStatus": "DISTRIBUTABLE",
          "id": "178279"
        },
        {
          "geo": {
            "name": "Dubai Emirate",
            "country": " United Arab Emirates",
            "regionId": "1079",
            "audit": {
              "source": "GAIA",
              "transactionType": "Normal"
            }
          },
          "images": [
            {
              "id": "60494",
              "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60494-Dubai.jpg",
              "alt": "Dubai Creek, Dubai Emirate, United Arab Emirates (pointofinterest)",
              "caption": "Dubai Creek which includes a river or creek, a bay or harbor and a city",
              "hero": true,
              "audit": {
                "source": "TOURISM_MEDIA",
                "transactionType": "Normal"
              },
              "imageMetadataDTO": {
                "metadata": {}
              }
            }
          ],
          "tags": {
            "data": [
              {
                "id": "cafe",
                "displayedName": "Cafes",
                "order": 0
              },
              {
                "id": "shopping",
                "displayedName": "Shopping",
                "order": 1
              },
              {
                "id": "desert",
                "displayedName": "Deserts",
                "order": 2
              }
            ],
            "audit": {
              "source": "AFFINITY_PRIME_SERVICE",
              "transactionType": "Normal"
            }
          },
          "order": 9,
          "score": 0,
          "audit": {
            "transactionType": "Normal"
          },
          "cacheableStatus": "DISTRIBUTABLE",
          "id": "1079"
        }
      ],
      "generatedContent": {
        "title": {
          "value": "What other places are like Nairobi?",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        },
        "teaser": {
          "value": "Discover similar destinations you might like",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        }
      },
      "creationDate": "2017-04-19T18:11:33.618Z",
      "score": 0,
      "audit": {
        "transactionType": "Normal"
      },
      "cacheableStatus": "DISTRIBUTABLE",
      "cacheable": true
    },
    "activity": {
      "data": [
        {
          "activityId": "172269",
          "destination": {
            "geo": {
              "regionId": "178290",
              "latitude": -1.3569641,
              "longitude": 36.8465564,
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "description": {
              "value": "<p>Explore the natural splendor of the Kenyan plains on a walk through the expansive grasslands of Hell’s Gate National Park, one of few national parks in Kenya to allow foot traffic. Enjoy lunch among locals, and visit a local conservation center to round out your exotic Kenyan excursion.</p>\n<p>After a convenient hotel pickup, travel to Lake Naivasha, the scenic entrance to Hell’s Gate. On the way, stop to snap a few photos of the stunning Rift Valley, with its green slopes gently bending south towards Tanzania.</p>\n<p>Soon you reach Hell’s Gate—the 27 square-mile (70 square-km) park—where a number of beautiful hot springs and gorges speckle the park's spectacular red cliffs. Keep your eyes peeled for wildlife—home to a variety of savanna mammals and birds, including zebras and gazelles.</p>\n<p>Depart the park, then sit down with locals for lunch of regional cuisine at a nearby restaurant. Once you’ve filled up on delicious delicacies, head for the Elsamere Conservation Center. Situated along the shores of Lake Naivasha, explore this former residence of Joy and George Adamson—conservationists famed for raising (and releasing) Elsa the lioness.</p>",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "title": {
              "value": "Small-Group Hell's Gate National Park",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "images": [
              {
                "url": "//a.travel-assets.com/mediavault.le/media/b9aede429ff6ceb0d6039098023001f29ae7f968.jpeg",
                "alt": "1 of 5 photos",
                "hero": true,
                "audit": {
                  "source": "LX",
                  "transactionType": "Normal"
                }
              }
            ],
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "price": {
            "amount": 170,
            "currency": "USD",
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "recommendationScore": 0,
          "generatedContent": {
            "recommendationScoreDesc": {
              "value": "0% of travelers recommend",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "audit": {
            "source": "LX",
            "transactionType": "Normal"
          }
        },
        {
          "activityId": "172249",
          "destination": {
            "geo": {
              "regionId": "178290",
              "latitude": -1.2920659,
              "longitude": 36.8219462,
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "description": {
              "value": "<p>Head to the leafy ex-colonial suburbs of Nairobi to visit 2 of the city’s most famous attractions: the Africa Fund for Endangered Wildlife’s Giraffe Centre and David Sheldrick’s Elephant Orphanage.</p>\n<p>Escape Nairobi’s bustling city center and head towards the leafy suburb of Karen. Sit back and take in the interesting sites of local life on your journey through  East Africa’s largest city, as your driver and guide explains about Nairobi’s history and modern life.</p>\n<p>Your first stop is at the Africa Fund for Endangered Wildlife’s famous Giraffe Centre. The center has pioneered an innovative breeding programme that’s helping to grow the population of the endangered Rothschild giraffe in the wild. Learn more about this fascinating animal and the breeding project as you get up close and personal with the giraffes from the center’s raised walkway.</p>\n<p>Afterwards, head the short distance to David Sheldrick’s Elephant Orphanage, located on the edge of Nairobi National Park. Since its inception, the project has hand-reared more than 150 baby elephants that have beenorphaned in the wild, often due to poaching. The orphanage helps to reintegrate these gorgeous creatures into the wilds of Tsavo National Park in the east of the country. Discover more about this fascinating venture and see the baby elephants being fed by their keepers.</p>\n<p>Head back to central Nairobi, where your tour comes to an end around lunchtime, leaving you free for the rest of the afternoon to explore downtown Nairobi on your own.</p>",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "title": {
              "value": "Small-Group Giraffes & Elephants in Nairobi Tour",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "images": [
              {
                "url": "//a.travel-assets.com/mediavault.le/media/cc85ad157cb9dcd34781199ed8323dd838214321.jpeg",
                "alt": "1 of 5 photos",
                "hero": true,
                "audit": {
                  "source": "LX",
                  "transactionType": "Normal"
                }
              }
            ],
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "price": {
            "amount": 62,
            "currency": "USD",
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "recommendationScore": 0,
          "generatedContent": {
            "recommendationScoreDesc": {
              "value": "0% of travelers recommend",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "audit": {
            "source": "LX",
            "transactionType": "Normal"
          }
        },
        {
          "activityId": "205914",
          "destination": {
            "geo": {
              "regionId": "178290",
              "latitude": -1.366667,
              "longitude": 36.733333,
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "description": {
              "value": "<p>Visit a giraffe breeding and conservation program and learn about one of the rarest breeds, the endangered Rothschild's giraffe. Stroll through the former home of Karen Blixen, the illustrious author of the prominent novel <em>Out of Africa</em>, used in the filming of the Oscar-winning movie.</p>\n<p>Begin your half-day tour with a trip to the Giraffe Center in Nairobi. Admire the valuable work the non-profit organization is attempting to stabilize the rare Rothschild's giraffe population. Learn how over 50 of the striking creatures have been released into the wild, and see the young calves currently residing in the 120-acre (49 ha) site.</p>\n<p>Continue to the Karen Blixen Museum, former home of the Danish novelist and author of <em>Out of Africa</em>. The building still houses many of the original furnishings and some newer pieces donated by the makers of the celebrated film. The museum adds further context to the movie, providing a fascinating glimpse into East African colonial life in the dying years of the British Empire.</p>",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "title": {
              "value": "Karen Blixen Museum & Giraffe Center Half-Day Tour",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "images": [
              {
                "url": "//a.travel-assets.com/mediavault.le/media/7ed8b666766901b2baa08c92a344a87e62e10c9d.jpeg",
                "alt": "1 of 5 photos",
                "hero": true,
                "audit": {
                  "source": "LX",
                  "transactionType": "Normal"
                }
              }
            ],
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "price": {
            "amount": 108,
            "currency": "USD",
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "recommendationScore": 0,
          "generatedContent": {
            "recommendationScoreDesc": {
              "value": "0% of travelers recommend",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "audit": {
            "source": "LX",
            "transactionType": "Normal"
          }
        },
        {
          "activityId": "205896",
          "destination": {
            "geo": {
              "regionId": "178290",
              "latitude": -1.3666667,
              "longitude": 36.8333333,
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "description": {
              "value": "<p>Discover the abundance of wildlife on the doorsteps of Nairobi on a half-day exploration of Nairobi National Park. See its rhino sanctuary, more than 80 species of mammals, and a prolific bird population.</p>\n<p>Drive through the park, accompanied by your proficient guide, as you track the big game. Don't miss the opportunity to spot lions and identify birds from a hugely diverse population.</p>\n<p>Nairobi National Park is the closest park to the capital and one of Kenya's most successful rhinoceros sanctuaries. Your guide takes you on a comprehensive tour of the park's fauna and flora, explaining the different species that call it home as well as the many migratory herbivores that visit during the dry season.</p>",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "title": {
              "value": "Nairobi National Park Half-Day Tour",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "images": [
              {
                "url": "//a.travel-assets.com/mediavault.le/media/b24fa843a1cbb07cf6091712d304eca2e0540471.jpeg",
                "alt": "1 of 5 photos",
                "hero": true,
                "audit": {
                  "source": "LX",
                  "transactionType": "Normal"
                }
              }
            ],
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "price": {
            "amount": 204,
            "currency": "USD",
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "recommendationScore": 0,
          "generatedContent": {
            "recommendationScoreDesc": {
              "value": "0% of travelers recommend",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "audit": {
            "source": "LX",
            "transactionType": "Normal"
          }
        },
        {
          "activityId": "205910",
          "destination": {
            "geo": {
              "regionId": "178290",
              "latitude": -1.2920659,
              "longitude": 36.8219462,
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "description": {
              "value": "<p>Visit 2 wildlife projects, an informative museum, and have lunch in a celebrated restaurant, discovering the best of Nairobi on a full-day tour. See inspiring work done to protect endangered animal infants, and visit the intriguing Karen Blixen Museum, providing context for an Oscar-winning film.</p>\n<p>Uncover multifaceted East African culture as you explore Nairobi. Begin with a visit to the David Sheldrick Wildlife Trust, an organization working to protect Africa's endangered wildlife. Admire work done to support orphaned rhinos and elephants through infancy. Continue to the Giraffe Center, where the endangered Rothschild's giraffe is cared for. More than 50 of these animals have been released back into the wild from this center.</p>\n<p>At the Karen Blixen Museum, learn about the final years of colonial rule in the region, seeing sets and scenery from the multi-award winning movie—<em>Out of Africa</em>. Lunch is quite an experience at Carnivore, famous worldwide for its wide array of grilled meats, including crocodile and antelope, skewered on Maasai swords in an open-air environment.</p>",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "title": {
              "value": "City Highlights Full-Day Tour with Lunch",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "images": [
              {
                "url": "//a.travel-assets.com/mediavault.le/media/9346cf37f64b5bdfad591dbf68662cddfdc772e2.jpeg",
                "alt": "1 of 5 photos",
                "hero": true,
                "audit": {
                  "source": "LX",
                  "transactionType": "Normal"
                }
              }
            ],
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "price": {
            "amount": 213,
            "currency": "USD",
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "recommendationScore": 0,
          "generatedContent": {
            "recommendationScoreDesc": {
              "value": "0% of travelers recommend",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "audit": {
            "source": "LX",
            "transactionType": "Normal"
          }
        },
        {
          "activityId": "172273",
          "destination": {
            "geo": {
              "regionId": "178290",
              "latitude": -1.2920659,
              "longitude": 36.8219462,
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "description": {
              "value": "<p>Get to the heart of the magnificent spirit of Kenya's capital city of Nairobi on this walking tour. Explore like a local to discover its distinctive pulse, marvel over grand parliament buildings, visit the Mzee Jomo Kenyatta Mausoleum, and enjoy an authentic Kenyan lunch.</p>\n<p>Greet your guide, and head off to Uhuru Park, a sprawling plot of land opened to the general public by Kenya's first president, Mzee Jomo Kenyatta. Pass locals tossing frisbees and picnicking during a stroll to the Parliament House, an iconic landmark crowned by an English-style clock tower.</p>\n<p>Continue on to the nearby mausoleum—a grand circular structure with a pathway flanked by Kenyan flags—to discover where Mzee Jomo Kenyatta was interred in 1978. Afterwards, walk to the August 7th Memorial Park, built to commemorate the 1998 bombing of the US Embassy.</p>\n<p>While intersecting this vibrant sector of the city, follow your guide to a local restaurant and indulge in a delicious Kenyan lunch before concluding your tour with a stop at the Kenya National Archives—home to an impressive 40,000 volumes of text about the country.</p>",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "title": {
              "value": "Small-Group Nairobi Experience",
              "audit": {
                "source": "LX",
                "transactionType": "Normal"
              }
            },
            "images": [
              {
                "url": "//a.travel-assets.com/mediavault.le/media/a2f95b2c14592acce960cd32517329eb7f3cc0ee.jpeg",
                "alt": "1 of 5 photos",
                "hero": true,
                "audit": {
                  "source": "LX",
                  "transactionType": "Normal"
                }
              }
            ],
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "price": {
            "amount": 48,
            "currency": "USD",
            "audit": {
              "source": "LX",
              "transactionType": "Normal"
            }
          },
          "recommendationScore": 0,
          "generatedContent": {
            "recommendationScoreDesc": {
              "value": "0% of travelers recommend",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "audit": {
            "source": "LX",
            "transactionType": "Normal"
          }
        }
      ],
      "generatedContent": {
        "title": {
          "value": "What can you do in Nairobi?",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        },
        "teaser": {
          "value": "Fun things to do that match your budget and travel style",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        }
      },
      "creationDate": "2017-04-19T18:11:32.364Z",
      "score": 0,
      "audit": {
        "transactionType": "Normal"
      },
      "cacheableStatus": "DISTRIBUTABLE",
      "cacheable": true
    },
    "destination": {
      "geo": {
        "name": "Nairobi",
        "country": "Kenya",
        "regionId": "178290",
        "latitude": -1.286535,
        "longitude": 36.817329,
        "audit": {
          "source": "GAIA",
          "transactionType": "Normal"
        },
        "id": "178290"
      },
      "description": {
        "small": {
          "id": "178290",
          "value": "Nairobi is calling! Discover its safaris, parks, rafting, and more.",
          "audit": {
            "source": "CGS",
            "transactionType": "Normal"
          }
        },
        "medium": {
          "id": "178290",
          "value": "In the &ldquo;Green City in the Sun&rdquo;, you can enjoy a safari with giraffes, elephants, lions and other wildlife, all within the city limits.",
          "audit": {
            "source": "TOURISM_MEDIA",
            "transactionType": "Normal"
          }
        }
      },
      "images": [],
      "creationDate": "2017-04-19T18:11:34.023Z",
      "audit": {
        "transactionType": "Error",
        "errorMessage": "Destination images are invalid"
      },
      "score": 0,
      "cacheableStatus": "ERROR",
      "cacheable": false,
      "modelVersion": "2"
    },
    "tip": {
      "audit": {
        "transactionType": "Error",
        "errorMessage": "TipLoadException: 404 Unable to load tips"
      },
      "score": 0,
      "cacheableStatus": "ERROR",
      "cacheable": false
    },
    "poi": {
      "data": [],
      "generatedContent": {
        "title": {
          "value": "What are the top landmarks in Nairobi?",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        },
        "teaser": {
          "value": "Don’t miss these must-see sights and attractions",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        }
      },
      "audit": {
        "transactionType": "Error",
        "errorMessage": ""
      },
      "creationDate": "2017-04-19T18:11:17.672Z",
      "score": 0,
      "cacheableStatus": "NON_DISTRIBUTABLE",
      "cacheable": true
    },
    "neighborhood": {
      "data": [],
      "generatedContent": {
        "title": {
          "value": "Discover neighborhoods in Nairobi",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        },
        "teaser": {
          "value": "Get a lay of the land and find the perfect place to stay",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        }
      },
      "audit": {
        "transactionType": "Error"
      },
      "creationDate": "2017-04-19T18:11:17.374Z",
      "score": 0,
      "cacheableStatus": "NON_DISTRIBUTABLE",
      "cacheable": true
    },
    "article": {
      "data": [],
      "audit": {
        "source": "VIEWFINDER",
        "transactionType": "Normal"
      },
      "creationDate": "2017-04-19T18:11:32.259Z",
      "generatedContent": {
        "title": {
          "value": "Learn about Nairobi",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        },
        "teaser": {
          "value": "Local experts explore every corner of Nairobi for you",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        }
      },
      "score": 0,
      "cacheableStatus": "NON_DISTRIBUTABLE",
      "cacheable": true
    },
    "affinity": {
      "data": [
        {
          "order": 1,
          "id": "nature",
          "name": "Nature",
          "score": 2.1078360080718994,
          "hotelCount": 0,
          "postStayEndorsements": 8,
          "reviewCount": 58,
          "audit": {
            "source": "AFFINITY_PRIME_SERVICE",
            "transactionType": "Normal"
          },
          "generatedContent": {
            "endorsementDesc": {
              "value": "8 travelers endorsed this",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "image": {
            "id": "f1027d3d584b49ae0aef9cf8debce1f5.jpeg",
            "url": "https://cdn.lemediavault.com/images/f1027d3d584b49ae0aef9cf8debce1f5.jpeg",
            "hero": false,
            "audit": {
              "source": "MEDIA_VAULT",
              "transactionType": "Fallback"
            }
          }
        },
        {
          "order": 2,
          "id": "safari",
          "name": "Safaris",
          "score": 1.9280352592468262,
          "hotelCount": 25,
          "postStayEndorsements": 6,
          "reviewCount": 71,
          "audit": {
            "source": "AFFINITY_PRIME_SERVICE",
            "transactionType": "Normal"
          },
          "generatedContent": {
            "endorsementDesc": {
              "value": "6 travelers endorsed this",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "image": {
            "id": "405ddf152e09208c1179b00f697ebf7d.jpeg",
            "url": "https://cdn.lemediavault.com/images/405ddf152e09208c1179b00f697ebf7d.jpeg",
            "hero": false,
            "audit": {
              "source": "MEDIA_VAULT",
              "transactionType": "Fallback"
            }
          }
        },
        {
          "order": 3,
          "id": "wildlife",
          "name": "Wildlife",
          "score": 1.6829736232757568,
          "hotelCount": 0,
          "postStayEndorsements": 6,
          "reviewCount": 19,
          "audit": {
            "source": "AFFINITY_PRIME_SERVICE",
            "transactionType": "Normal"
          },
          "generatedContent": {
            "endorsementDesc": {
              "value": "6 travelers endorsed this",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "image": {
            "id": "2bdd76e5e231944a00f40c89aa06c947.jpeg",
            "url": "https://cdn.lemediavault.com/images/2bdd76e5e231944a00f40c89aa06c947.jpeg",
            "hero": false,
            "audit": {
              "source": "MEDIA_VAULT",
              "transactionType": "Fallback"
            }
          }
        },
        {
          "order": 5,
          "id": "park",
          "name": "Parks",
          "score": 1.3005393743515015,
          "hotelCount": 0,
          "postStayEndorsements": 3,
          "reviewCount": 50,
          "audit": {
            "source": "AFFINITY_PRIME_SERVICE",
            "transactionType": "Normal"
          },
          "generatedContent": {
            "endorsementDesc": {
              "value": "3 travelers endorsed this",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "image": {
            "id": "ae59b612bb80f8045b290dd157dd7776.jpeg",
            "url": "https://cdn.lemediavault.com/images/ae59b612bb80f8045b290dd157dd7776.jpeg",
            "hero": false,
            "audit": {
              "source": "MEDIA_VAULT",
              "transactionType": "Fallback"
            }
          }
        },
        {
          "order": 6,
          "id": "cafe",
          "name": "Cafes",
          "score": 0.77838534116745,
          "hotelCount": 0,
          "postStayEndorsements": 8,
          "reviewCount": 4,
          "audit": {
            "source": "AFFINITY_PRIME_SERVICE",
            "transactionType": "Normal"
          },
          "generatedContent": {
            "endorsementDesc": {
              "value": "8 travelers endorsed this",
              "audit": {
                "source": "BOILERPLATE",
                "transactionType": "Normal"
              }
            }
          },
          "image": {
            "id": "3c4ce364a7ddb9010453899968f2e194.jpeg",
            "url": "https://cdn.lemediavault.com/images/3c4ce364a7ddb9010453899968f2e194.jpeg",
            "hero": false,
            "audit": {
              "source": "MEDIA_VAULT",
              "transactionType": "Fallback"
            }
          }
        }
      ],
      "audit": {
        "transactionType": "Normal"
      },
      "creationDate": "2017-04-19T18:11:17.294Z",
      "generatedContent": {
        "title": {
          "value": "What’s Nairobi known for?",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        },
        "teaser": {
          "value": "Dive into the culture and get a taste of Nairobi",
          "audit": {
            "source": "BOILERPLATE",
            "transactionType": "Normal"
          }
        }
      },
      "score": 0,
      "cacheableStatus": "DISTRIBUTABLE",
      "cacheable": true
    }
  }
}
```
