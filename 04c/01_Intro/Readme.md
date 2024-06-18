### Creating chat channels with namespaces

Namespaces are a great way to make sure that our Socket.IO events are not 
emitted globally to all the sockets that are connected to the server. We can 
send messages to a namespace. Only the sockets listening to this namespace will receive the event.

Many applications have multiple customers that should never be mixed together. 
In our URLs, we typically show the use of different domains to keep our customers 
separate so that customer1.website.com has a different result to customer2.website.com. 
In the same way, our Socket.IO sockets can be namespaced to minimize concerns about
intermingling data and messaging.

In this demo, we will set up two separate groups of chat channels. We can post to either group. 
The message will be restricted to the namespace for that group.
