## Messages

```
https://marketplace-feed.prod-p.expedia.com/v1/messages
```


### Arguments


| Name                |Parameter Type |Data Type|Example           |
| ------------------- |---------------|---------| -----------------|
| ```hotelId```       | Query         |String   | hotelId=123      |
| ```Client-Id```     | Header        |String   | clientID=client1 |


### Attributes


| Name                |Data Type| Description                                 | Example     |
| ------------------- | --------| --------------------------------------------| ------------|
| ```messages```      | Array   | A collection of message objects.            | ```[...]``` |
| ```message```       | Object  | Contains the details of a single message.   | ```{...}``` |
| ```category```      | String  | The message type.                           | ```"Missing Inventory"``` |
| ```hotelId```       | String  | The hotelId the message is for.             | ```"123"``` |
| ```id```            | String  | A unique identifier for the message.        | ```"95fbaf423d3d6c5cb32a247aedc97d64b9ae1aff"``` |
| ```longMessage```   | String  | The text message intended for the hotelier. | ```"On 2015-10-20 you have only 10 rooms left. Our sales forecast shows that we can sell 5 more rooms."``` |
| ```shortMessage```  | String  | A shorter version of longMessage.           | ```"On 2015-10-20 you can sell 5 more rooms with Expedia. Add inventory now."``` |
| ```values```        | Object  | Contains a map of name value pairs representing attributes for this message. Values vary according to the message category. | ```{"currentRooms": 10}```|

### Try It Out

+++demo
method: get
endpoint: http://marketplace-feed-service.us-west-2.test.expedia.com/v1/messages
param: hotelId
header_param: Client-Id
+++

### Code Examples

Here is an example of writing a simple 'hello, world' example in the language you specified:
```php
echo "Hello, World!";
```
```java
System.out.println("Hello, World!");
```
```js
console.log("Hello, World!");
```
```c
printf("Hello, World!");
```

