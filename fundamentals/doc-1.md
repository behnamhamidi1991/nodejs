# Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

```javascript
app.METHOD(PATH, HANDLER);
```

Where:
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.

# Routing

https://expressjs.com/en/guide/routing.html

# Middleware

https://expressjs.com/en/guide/using-middleware.html
