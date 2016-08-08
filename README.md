# Content Readme

## Check for broken links

Use this link to run a report to find any broken links.

1. lct.teamcity.sb.karmalab.net/project.html?projectId=partner_api_web
2. run Check Links. 
3. view the site-link-results reports under the artifacts link in teamcity
4. fix any broken links in your files or notify the relevant team(s) of broken links in their files


## Swagger Cross-Domain Support
To use the Swagger-UI, HTTP requests from our site need to be able to hit JSON endpoints on an external server (which is hosting Swagger).  This can be a problem as these requests
are cross-domain, which is a security measure most browsers have in place to stop malicious scripts accessing and manipulating content on another site, with the credentials of the
currently logged-in user.

Due to this, server admins are required to explicitly allow pages to be accessed cross-domain, and are otherwise blocked by the browser. To allow Swagger to be accessed externally,
the following should be done:

1. Add the Access-Control-Allow-Origin header to the Swagger JSON endpoint (requested via HTTP GET), as well as  to our host:

   ```
   Access-Control-Allow-Origin: http://www.foo.com
   ```
   Or simply allow any host to access the page:
   ```
   Access-Control-Allow-Origin: *
   ```
2. Additionally, browsers will do a "preflight" request.  This is a HTTP OPTIONS request (not GET or POST) to each endpoint of your host, sent before the actual HTTP POST/GET/etc request.  The response to these requests should have:
  
   2.1. The same ```Access-Control-Allow-Origin``` header as in Step 1.
   2.2. A comma-separated list of HTTP Methods supported by the endpoint. Eg.

  ```
  Access-Control-Allow-Methods: GET, POST, DELETE
  ```
   2.3. If your endpoint requires authentication or cookies (eg. HTTP Basic Auth), then add the following header:
   
   ```
   Access-Control-Allow-Credentials: true
   ```
   2.4. If your endpoint requires certain header parameters set (eg. X-User-Id), then add the following header with a comma-separated list of header parameters:
   
   ```
   Access-Control-Allow-Headers: X-User-Id, Client-Id, Content-Type
   ```
   > Note: You may be able to use '*' instead of listing each header individually
   
   2.5. If your endpoint *returns* header parameters you would like to expose (eg. X-Response-Id), then add the following header:
   
   ```
   Access-Control-Expose-Headers: X-Response-Id, Content-Type
   ```
   > Note: You may be able to use '*' instead of listing each header individually
   
   2.6. Swagger-UI also provide their own guide on setting up CORS (Cross-Origin Resource Sharing) available on the bottom of their [Github Page](https://github.com/swagger-api/swagger-ui#cors-support]).
   
  For more information, try the [Wiki Page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#Preflight_example) for it.
  
