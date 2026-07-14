# Creating a Basic HTTP Server in Node.js

This example shows how to create a basic HTTP server using Node.js. The server listens for incoming requests, logs each request to a file, parses the URL, and returns different responses based on the requested route.

## Steps

1. Import the required modules.
   • `http` creates the server.
   • `fs` writes request logs to a file.
   • `url` parses the request URL.

2. Create a request handler function.
   • Every incoming request is received in the `req` object.
   • Responses are sent using the `res` object.

3. Ignore unnecessary browser requests.
   • Browsers automatically request `/favicon.ico`.
   • Chrome DevTools may request `/.well-known/appspecific/com.chrome.devtools.json`.
   • These requests are ignored because they are not part of the application.

4. Log every request.
   • Store the request URL, HTTP method, and timestamp in a `log.txt` file using `fs.appendFile()`.

5. Parse the URL.
   • `url.parse(req.url, true)` separates the pathname and query parameters.
   • Example:
   • `/about?usrname=Ali`
   • Pathname: `/about`
   • Query: `{ usrname: "Ali" }`

6. Handle routes using a `switch` statement.
   • `/` returns the home page.
   • `/about` returns a personalized greeting.
   • `/contact` simulates a delayed response.
   • `/signup` handles both GET and POST requests.
   • Any unknown route returns a 404 response.

7. Start the server.
   • `http.createServer(handler)` creates the server.
   • `server.listen(8000)` starts listening on port `8000`.

## Request Handler

```javascript
function handler(req, res) {
    if (req.url == "/favicon.ico") return res.end();
    if (req.url == "/.well-known/appspecific/com.chrome.devtools.json") return res.end();

    const log = `${Date.now()}: New Request Received from ${req.url} and request method is ${req.method}\n`;

    const urlDetail = url.parse(req.url, true);
    console.log(urlDetail);

    fs.appendFile("log.txt", log, (err) => {

        switch (urlDetail.pathname) {

            case "/":
                res.end("Welcome to server");
                break;

            case "/about":
                res.end(`welcome ${urlDetail.query.usrname}`);
                break;

            case "/contact":
                res.write("Just 1 minute...\n");
                setTimeout(() => {
                    res.end("0370 61 68 427");
                }, 5000);
                break;

            case "/signup":
                if (req.method == "GET") {
                    res.end("This is a signup form");
                } else if (req.method == "POST") {
                    // Database query
                    res.end("Success");
                }
                break;

            default:
                res.end("404 Page Not Found");
                break;
        }

    });
}

const myServer = http.createServer(handler)
myServer.listen(8000, () => console.log("Server Started"));
```
