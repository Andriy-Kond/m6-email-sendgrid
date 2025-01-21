# Example send email by broker [sendgrid](sendgrid.com)

# Packages

## Server and HTTP-requests processing

- `express` - create server package. Node.js framework for build web-applications and API. Gave instruments for routing, processing requests and response.
- `cors` - allows setup support CORS (Cross-Origin Resource Sharing), for server accepting requests from other domains or ports.
- `logger` - brocker for logging HTTP-requests for Node.js

## Configuration

- `dotenv` - allows save confidential data (such as API keys, passwords) in an .env file and load them to environment variables
- `cross-env` - provides the ability to set environment variables for cross-platform environments, such as Windows, Linux or MacOS via the console.

## Data validation

- `joi` - package for schemas describing and validating data against those schemas. Used for validating request body, arguments and other data.
- `mongoose-validator` - package for integration a validation library with Mongoose, allowing you to validate field values in MongoDB schemas.

## Database

- `mongoose`- an object-document module for MongoDB. Provides a schema for data modeling and data interaction via JavaScrip.

## Logging

- `morgan` - Middleware for HTTP requests logging. Used for track incoming requests and server responses.

## Other tools

- `nanoid` - generator of uniq short keys. Used for example for creating user IDs or tokens.
- `nodemon` - tool for automatic restarting Node.js-applications after code changes during development. Eliminates the need manually restart the server.
