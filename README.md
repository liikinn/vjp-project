# vjp-project
A project for Basics of Web Publishing course in Aalto University

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the project locally:
 1. Run `yarn` in the project directory to install dependencies.
 2. Run `yarn start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the application for production:
 1. Run `yarn build` in the project directory. This builds the application to the `build` folder.
 2. Run `yarn global add serve` and then `serve -s build` to serve the build with a static server. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page includes fake authentication and an admin user.
```
username: admin
password: admin
```

An admin user can add, edit and remove news items on the news feed page.