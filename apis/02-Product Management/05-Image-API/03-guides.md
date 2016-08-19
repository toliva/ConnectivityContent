# FAQ & Guides
This section contains various Frequently Asked Questions, as well as documentation that will help partners understand how Expedia works, and also how to use the image API.

<a name="/howtogetstarted"></a>
## How to Get Started for First Time API Users
In order to get started with using the API, it is required to register with Expedia and obtain API credentials. It is also possible to obtain the rights to use a test property to run some tests before going to production with a new integration. To get started, new partners need to send an email to eqcss@expedia.com.

Please note that partners must contact Expedia in order to be able to start uploading new images, even if they already have an existing EQC account. Expedia always need to add rules to enable the download of images from a new host.

## How to Get Authorized to Access Specific Properties
In order to be able to manage properties in production, partners need to be authorized by either Expedia, or the properties that chose to do business with their system.

After a partner successfully registered with Expedia (see [above section](#/howtogetstarted) for details on how to get started), properties can decide to select the partner and authorize them via Expedia PartnerCentral. When this happens, the partner will get an email notification. The email will contain the confirmation that the partner is now authorized to manage this hotel via API calls. It will also either contain a specific set of credentials for this property, or will indicate that the partner's unique account was authorized to manage this additional property. Whether a partner is given a unique account, or one per property, is decided at time of registration with Expedia.

## Image API Versioning Documentation and Maintenance Strategy for Older Versions

Image API online documentation will only be maintained for the latest available version. When a new version is published, the documentation on this portal will only reflect the latest version of the API. Moreover, older versions will be kept for at most 6 months after the release of a new version, to give partners time to migrate. Partners using older versions will be notified when versions are slated for retirement and be given time to migrate over.

## How Does the Image Add (POST) work?

Partners interested in uploading images to Expedia can do so using the POST feature. When a partner post a new image for a property, Expedia will first validate that the reference given is valid and can be accessed. Partners need to make sure Expedia knows about the host where images reside, as Expedia need to authorize this host first before the partner can upload images.

After Expedia validated that it can access the image location, a successful response will be returned, along with the image resource ID.

If the image is not corrupted, and meets the minimum size requirements, it should then eventually be published, within a few minutes. There is currently no mechanism to proactively inform partners of images that either went live, or failed to be published. It is the partner responsibility to verify the status of its images using either the GET images, or getting each image individually by resource ID to confirm they do get published.

If the image is either corrupted, or doesn't meet Expedia minimum size requirements, it will be reach the REJECTED state, along with an appropriate comment explaining why it was rejected. At this point, the partner should DELETE this image and re-submit it for processing after fixing the problem (either providing a higher resolution image or a non-corrupted file).

If the image is accepted, it will quickly be published. After that, Expedia will audit all images within a few hours to make sure they meet [Expedia guidelines](https://expediagso.secure.force.com/kb/articles/en_US/Policy/About-Rejected-Photos/?q=Photos&l=en_US&fs=Search&pn=1). If they do not meet the guidelines, they will be inactivated. This information can be found by reading the image meta data and looking for the status inactive, as well as the comments that might be included with the image.

## Why can't I Delete a Published Image?

It is currently not possible to delete published images, but it is possible to inactivate them via a status update to hide them from Expedia website. After 5 years, inactive published images will be automatically deleted by Expedia.

## Can I GET/Read all images that Expedia has for my property?

The Image API will currently only allow partners to read the images they added via the API. Some images added via Expedia PartnerCentral might also be visible, but only if they were added recently, after June 2016. The API will soon be improved to allow Expedia Partners to read all existing images for their properties, but it is currently not possible. This documentation will be updated once this becomes possible.

## Can I Assigne an Image to One or More Room Types?

By providing the roomTypes array with the room types' resource IDs, partners can tell Expedia which images belong to which room types. Expedia allows partners to specify one or more room types when they add a new images. For each room type, partners can specify wether the image should be the featured one or not.

It is also possible to modify an image's meta data with PATCH to change the room type(s) assignment: partners can either add different room types, remove any room type association, or just change the room types.

The room type resource IDs need to be provided. To obtain room type resource IDs, the [Product API](/apis/product-management/product-api/quick-start.html) can be used.

## Can I Upload Multiple Images at Once?

It is currently not possible to send multiple images at once via the API. Images have to be sent one by one.

## Does Expedia Provide Guidelines and Best Practices for Images?

Expedia does provide a [Photo Guidelines document](https://a.travel-assets.com/epc/content-ui/trunk/9b41a87/pdf/PhotoTips.en-US.pdf) to its partners on what makes great images.

## Do I Have to Upload Various Sizes of the Same Image?

Expedia expects the highest possible resolution for the image that gets uploaded. Expedia will then take care of producing all the required derivatives to make the image experience optimal across all its pages and features.

## What is the Optimal Image Resolution?

Expedia recommends at least 2,880 pixels on the image's longest side. Images that have less than 900 pixels on either sides will be refused.

## Can I Upload Image Files Directly to Expedia Without Having the Images Hosted Somewhere on the Internet?

The Image API only supports receiving a reference to a file available somewhere online. For partners who want to push files to us, they will have to use Expedia PartnerCentral to do so.

## Can Expedia support locations other than HTTP/HTTPS servers on the open internet?

Expedia can also accept an Amazon Web Services (AWS) S3 location. Please contact Expedia if you'd like more details on this option. Expedia cannot currently accept other types of locations like FTP or SFTP.


## Modifying with PATCH

The PATCH modify operation is a way for our partners to only send what they'd like to modify on a resource. 

Expedia implemented the Merge-PATCH strategy. Partners can send any of the top level elements they'd wish to modify, and omit the ones they do not want to change. Expedia will take care of merging the resource updates and preserve what was not included at the resource's top level.

It is important to note that any top level object is treated as a full overlay even when using Merge-PATCH. For example, if a partner decides to include the roomTypes object to modify the image's room type assignment, all the elements/values of that object need to be included as this specific object update will be treated as a full overlay.


