# Weather Forecast

This project was generated with [Ionic CLI] version 6.13.1, built on ionic + angular.

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

## Prerequisite
- Node >14 is needed.
- Run npm install from root folder to install all the packages.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

The global structure of this repository is as follows:
```Text
src:
├───app
│   └───components
│       └───app-header
├───assets
│   └───icon
├───designElements
│   ├───direction
│   ├───temperature
│   └───wind
├───environments
├───features
│   ├───city-detail
│   └───city-list
├───pages
│   ├───city
│   └───home
├───shared
│   ├───components
│   │   ├───city
│   │   ├───page-layout
│   │   └───page-title
│   ├───constants
│   ├───enums
│   ├───interfaces
│   └───services
│       ├───getCity
│       └───getHourlyCityWeather
└───theme
```

## Definitions
### app
Weather forecast is created as the default app in this ionic project. This project is flexible enough to create multiple apps because code is more structured as pages,features, and more shared stuff.

### page
A page is high-level component connected to a route in single page applications. A page will have one or more features.

### feature
A feature component defines a functional behaviour consists of multiple components and services. A feature can be reused across multiple pages and feature in a feature is also possible.

### designElements
As name reflects, these are reusable design elements can be reused in any part of the project.

### shared
A shared folder contains components, services, interfaces, constants, enums, (can also have utils, guards etc.,) which can be reused in any part of the application. Shared components are also reusable components unlike design elements these components have functional behaviour as per the requirements. These may be wrapper around design elements.

### environments
environment.ts -- has environment specific configuration. For instance in our case baseUrl and appId has chances of having different values in different environments. However, for this assignment they remain same.

### assets
Assests related to application.

### app components
App components are components specific to the app.

## Functional Behaviour
- On running ionic serve command application will run on localhost:8100.
- The default route is 'home' which shows 5 cities weather overview. The overview has city name, average temperature and wind speed with direction.
- When click on each city, customer is redirected to full weather forecast of that city and this city URL is independent on its own.
- Since the whole application is the single page, navigation between the pages is fast and doesn't download all the resources again.
- This is Responsive Web Application works on web and mobile resolutions/breakpoints.
- Used available color combination for faster output.
