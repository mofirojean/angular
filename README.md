# Angular Projects

This repository includes a suite of Angular projects along with their descriptions that can help give you a better overview of what Angular is all about. This set of projects makes use of various Angular features and shows how to use Angular in different situations.

## Table of Contents

- [1. Building an SPA Application with Scully and Angular Router](#1-building-an-spa-application-with-scully-and-angular-router)
- [2. Building an Issue Tracker Application with Reactive Forms and Clarity](#2-building-an-issue-tracker-application-with-reactive-forms-and-clarity)
- [3. Building a PWA Weather Application Using Angular Service Worker](#3-building-a-pwa-weather-application-using-angular-service-worker)
- [4. Building a WYSIWYG Editor for the Desktop Using Electron](#4-building-a-wysiwyg-editor-for-the-desktop-using-electron)
- [5. Building a Mobile Photo Geotagging Application Using Capacitor and 3D Maps](#5-building-a-mobile-photo-geotagging-application-using-capacitor-and-3d-maps)
- [6. Building a Mobile Application with Ionic and Capacitor](#6-building-a-mobile-application-with-ionic-and-capacitor)
- [7. Building an SSR Application for a GitHub Portfolio Using Angular](#7-building-an-ssr-application-for-a-github-portfolio-using-angular)
- [8. Building an Enterprise Portal Using Nx Monorepo Tools and NgRx](#8-building-an-enterprise-portal-using-nx-monorepo-tools-and-ngrx)
- [9. Building a Component UI Library Using Angular CLI and Angular CDK](#9-building-a-component-ui-library-using-angular-cli-and-angular-cdk)

---

### 1. Building an SPA Application with Scully and Angular Router

In this project, we will build a personal blog using the Angular framework and enhance it with Jamstack characteristics using the Scully site generator. Initially, we will scaffold a new Angular application and enable it for routing. We will then create the basic layout of our application by adding some barebones components. As soon as we have a working Angular application, we will add blog support to it using Scully. We will then create some blog posts using Markdown files and display them on the home page of our application.

---

### 2. Building an Issue Tracker Application with Reactive Forms and Clarity

In this project, we will build an Angular application for managing and tracking issues using reactive forms and Clarity. Initially, we will display a list of issues in a table that we can sort and filter. We will then create a form for allowing users to report new issues. Finally, we will create a modal dialog for resolving an issue. We will also go the extra mile and turn on suggestions when reporting an issue to help users avoid duplicate entries.

---

### 3. Building a PWA Weather Application Using Angular Service Worker

We can access a web application using different types of devices, such as a desktop, mobile, or tablet, and over various types of networks, such as broadband, Wi-Fi, and cellular. A web application should work seamlessly and provide the same user experience independently of the device and the network of the user.

Progressive Web Apps (PWAs) are applications built with a collection of techniques with the previous considerations in mind. One popular technique is the service worker, which improves the loading time of a web application. In this chapter, we will use the service worker implementation of the Angular framework to build a PWA that displays the weather of a city using the OpenWeather API.

- Setting up the OpenWeather API
- Displaying weather data
- Enabling offline mode with the service worker
- Staying up to date with in-app notifications
- Deploying our app with Firebase Hosting

---

### 4. Building a WYSIWYG Editor for the Desktop Using Electron

In this project, we will build a desktop WYSIWYG editor that keeps its content local to the filesystem. Initially, we will build it as an Angular application using `ngx-wig`, a popular WYSIWYG Angular library. We will then convert it to a desktop application using Electron and learn how to synchronize content between Angular and Electron. We will also see how to persist the content of the editor into the filesystem. Finally, we will package our application as a single executable file that can be run in a desktop environment.

---

### 5. Building a Mobile Photo Geotagging Application Using Capacitor and 3D Maps

In this project, we will build a mobile application that can take photos according to the current location and preview them on a map. Initially, we will learn how to create a mobile application using Angular and Ionic. We will then use Capacitor to take photos using the camera of the mobile device and tag them with the current location via GPS. We will upload those photos to Firebase along with their location data. Finally, we will use CesiumJS to load location data on a 3D globe along with a preview of the photo.

---

### 6. Building a Mobile Application with Ionic and Capacitor

Angular is a cross-platform JavaScript framework that can be used to build applications for different platforms such as web, desktop, and mobile. Moreover, it allows developers to use the same code base and apply the same web techniques to each platform, enjoying the same experience and performance.

In this chapter, we will investigate how we can build mobile applications using Angular. `Ionic` is a popular UI toolkit that allows us to build mobile applications using web technologies such as Angular. The Capacitor library greatly enhances Ionic applications by enabling them to run natively on Android and iOS devices.

- Creating a mobile application with Ionic
- Taking photos with Capacitor
- Storing data in Firebase
- Previewing photos with CesiumJS

---

### 7. Building an SSR Application for a GitHub Portfolio Using Angular

A typical Angular application follows the Single-Page Application (SPA) approach, where each page is created in the DOM of the browser while the user interacts with the application. A web server hosts the application and serves only the main page, usually called `index.html`, at application startup.

`Server-Side Rendering (SSR)` is a technique that follows an entirely different approach for application rendering than SPA. It uses the server to prerender pages when the user requests them at runtime. Rendering content on the server dramatically enhances the performance of a web application and improves its Search Engine Optimization (SEO) capabilities. To perform SSR in an Angular application, we use a library called Angular Universal.

- Building an Angular application with the GitHub API
- Integrating Angular Universal
- Prerendering content during build
- Enhancing SEO capabilities

---

### 8. Building an Enterprise Portal Using Nx Monorepo Tools and NgRx

Typical enterprise applications usually consist of a backend and a frontend system. The backend is responsible for interacting with a database for data persistence and exposes a REST API. The frontend communicates with the backend system via the REST interface to exchange data.

A popular tool in the Angular ecosystem that embraces monorepo architecture is `Nx`. Combining an Nx monorepo application with a state management library can significantly improve your application. `NgRx`, a popular state management library for Angular applications, can help us maintain a consistent and manageable global state.

- Creating a monorepo application using Nx
- Creating user-specific portals
- Managing application state with NgRx
- Visualizing data with graphs

---

### 9. Building a Component UI Library Using Angular CLI and Angular CDK

An Angular application consists of Angular components that are organized into modules. When components need to share a similar appearance or behavior across modules, we extract their functionality into reusable components and group them in a shared module.

The Angular CLI includes all the necessary tooling for creating libraries with Angular. The Angular Component Dev Kit (CDK) provides a broad range of functionalities for creating accessible and high-performance UI components. In this project, we will combine them with Bulma, a modern CSS framework, to create a simple component UI library from scratch.

- Creating a library with the Angular CLI
- Building a draggable card list
- Interacting with the clipboard
- Publishing an Angular library to npm
- Using components as Angular elements

### 9. Building a phonebook with Angular

A phonbook application built using Angular, TailwindCSS, PrimeNg and JSON web server