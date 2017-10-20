[//]: # (Title: Expedia QuickConnect APIs Users: Important Changes Required)
[//]: # (Date: 2016-11-30)
[//]: # (Category: url change)

We would like to inform our Expedia QuickConnect users that we're working on changes that will require updates by our users.

**New domain name for Expedia QuickConnect APIs Using Dynamic IP Addressing**

At Expedia we strive to build the best and most robust APIs in order to make sure you and your customers can run your business without disruption. As part of our next upgrade, on February 28th, 2017, we plan to replace the current production domain for the Expedia QuickConnect services (https://ws.expediaquickconnect.com/) with a new one: [https://services.expediapartnercentral.com/](https://services.expediapartnercentral.com/)

We kindly ask you to adopt the new domain before **February 28th, 2017**. The new endpoints are available today.

With this new domain, the IP addresses will dynamically change over time and therefore you should use our fully qualified domain name. Please do not attempt to configure connectivity based on an IP address.

Here’s how the different paths to EQC messages are changing:

<div class="blog-table">

<table>

<tbody>

<tr>

<th>Old</th>

<th>New</th>

</tr>

<tr>

<td>[https://ws.expediaquickconnect.com/connect/parr](https://ws.expediaquickconnect.com/connect/parr)</td>

<td>[https://services.expediapartnercentral.com/eqc/parr](https://services.expediapartnercentral.com/eqc/parr)</td>

</tr>

<tr>

<td>[https://ws.expediaquickconnect.com/connect/br](https://ws.expediaquickconnect.com/connect/br)</td>

<td>[https://services.expediapartnercentral.com/eqc/br](https://services.expediapartnercentral.com/eqc/br)</td>

</tr>

<tr>

<td>[https://ws.expediaquickconnect.com/connect/bc](https://ws.expediaquickconnect.com/connect/bc)</td>

<td>[https://services.expediapartnercentral.com/eqc/bc](https://services.expediapartnercentral.com/eqc/bc)</td>

</tr>

<tr>

<td>[https://ws.expediaquickconnect.com/connect/ar](https://ws.expediaquickconnect.com/connect/ar)</td>

<td>[https://services.expediapartnercentral.com/eqc/ar](https://services.expediapartnercentral.com/eqc/ar)</td>

</tr>

</tbody>

</table>

</div>

**Replace PARR with the more modern Product API**

Several months ago we have introduced the Product API. In addition to read room type and rate plan setting, the new API allows you to create and modify products and thus drive efficiency for you and your customers. We invite you to take a look at the Product API on [https://expediaconnectivity.com/developer](https://expediaconnectivity.com/developer).

Going forward, EQC PARR API will not be enhanced with new features.

If you are using EQC PARR for the availability and rates retrieval feature, stay tuned. We will have more updates for you in 2017.

**New self-service test property assignment tool; EQC Simulator to be retired**

We’re excited to announce the release of a new feature enabling you to reserve test properties for all your testing needs. This new self-service feature allows for more robust and complete testing. Log in to [https://expediaconnectivity.com/test-properties/](https://expediaconnectivity.com/test-properties/) with your EPC user credentials to get started. If you need to reserve a test property, and you forgot your password, please use the “forgot password” of the https://www.expediapartnercentral.com login page. If you forgot your username, please reach out to [hothelp@expedia.com](mailto:hothelp@expedia.com) to obtain it.

Expedia will proceed with decommissioning the Expedia QuickConnect Simulator for EQC AR, BR, BC and PARR applications. The simulators will go offline on January 27th, 2017\. Please make sure to use the new test property assignment feature for all your testing needs going forward.

For any questions or concerns about these changes, please reach out to our support specialists at [eqcss@expedia.com](mailto:eqcss@expedia.com).