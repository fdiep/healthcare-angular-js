# Healthcare AngularJS Sample App

This application will successfully retreive blog posts and glossary items from healthcare.gov. Follow the instructions below to run locally.

### Installation

This app requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd healthcare
$ npm i
$ npm start
```

This will start the development server listening on port `8080`.

### Production

For production simply run the following command to create the build.

```sh
$ cd healthcare
$ npm i
$ npm run build
```

### Areas for improvement

This application is currently woking as designed. Below are some areas for future improvements.

- Add spinner to show app in loading state
- Add pagination and infinite scroll when displaying posts and glossary items
- Add unit tests for controllers and services

[node.js]: <http://nodejs.org>
