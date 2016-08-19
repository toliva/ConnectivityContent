# ConnectivityContent

Markdown content for **https://ExpediaConnectivity.com**

Add or edit content on a branch here and once merged to master changes will be reflected on the site within minutes.


# To create new API Documentation

There are 3 ways to get started adding your API content.

1. Manually add a directory for your API and add or copy markdown files as required.  This can be done by cloning this git repo locally and editing locally or via the browser in ewegithub.
2. Use the TeamCity build to generate an initial version of the API documentation based on a swagger endpoint then edit as for method 1.
3. Clone the partner-api-web repo locally and then use node commands to generate the initial API documentation from swagger.


## Method 1. Online editor

- Visit the [ConnectivityContent repo](https://github.com/ExpediaInc/ConnectivityContent)
- Ensure you are logged in
- Navigate to the file you wish to edit
- At the top right is an 'edit' and 'delete' button.
- Save changes as a new branch and create a pull request (for production)
- To create a file, click the '+' icon beside the folder name.  Use '/' to indicate a sub directory (which are auto-created).

#### Previewing changes
A preview version is generated for each branch in this repo
- Push your work to your branch
- Wait a few minutes (or frantically mash the refresh button)
- Navigate to http://your-branch.partner-api-preview.test.expedia.com/
- Bask in the glory of your changes

Note that your branch name may require some transformation before it can be used as a valid preview hostname.  Any non-alphanumeric characters will be replaced with `-`.  For example, a branch called `lindsay/my-great-api` will be available at `http://my-great-api.partner-api-preview.test.expedia.com/`.

=======
## Method 2. Use TeamCity build to generate documentation from swagger URL

A teamcity build can be used to generate the reference documentation file from a Swagger JSON URL [here](https://eps-teamcity.tools.expedia.com/viewType.html?buildTypeId=partner_api_web_InternalApi_SwaggerScript).
Then you can edit as described in Method 1.

![Use TeamCity to build from swagger.json](images/build-from-swagger-json.png)

## Method 3. On a personal build setup
Clone the [ConnectivityContent](https://github.com/ExpediaInc/ConnectivityContent)
Clone the [partner-api-web](https://github.com/ExpediaInc/partner-api-web) repo and follow its README.md.
The steps are essentially:
- Run ```./install.sh``` from within the partner-api-web directory.
- Create a new directory with the name of your new API under internal-api-web/apis. The generater will try and make a sensible name from your directory name. *e.g. my-great-app will be given the name My Great App*
- Create a new **.md** file in the newly-created API directory. *e.g internal-api-web/apis/my-great-app/quick-start.md*
- Return to the partner-api-web directory and run:

  ```
   ./build.sh --content ../ConnectivityContent/;node server.js
  ```
- Open [http://localhost:8080](http://localhost:8080) in your browser.


## Check for broken links

Use the TeamCity link to run a report to find any broken links

1. Partner API Web [TeamCity](https://eps-teamcity.tools.expedia.com/project.html?projectId=partner_api_web&branch_partner_api_web1CommitPhase=__all_branches__)
2. run Check Links. 
3. view the site-link-results reports under the artifacts link in TeamCity
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
  
