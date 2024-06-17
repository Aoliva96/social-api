# social-api

## Project Description

A study in building a social network API that utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM to allow users to share their thoughts, react to friends’ thoughts, and create a friends list.

## Contents

- [Introduction](#introduction)
- [Problem](#problem)
- [Solution](#solution)
- [Deployment](#deployment)
- [Collaborators](#collaborators)
- [Resources](#resources)
- [License](#License)

## Introduction

For this project, I was tasked with creating a backend API that handles the routing of data for hypothetical social networking application. Since this project does not have a frontend UI, see the deployment section of this README for a demo detailing its functionality.

## Problem

The client provided me with the following requirements for this project's desired functionality:

- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Solution

I addressed the above problems in the following way:

- I developed the server handling and data routing using Express.
- I developed the MongoDB database and Mongoose ORM.
- I created seed data and related scripts to populate the database with data, using schema models to define its structure.
- I added extra functionality for deleting users, which propagates the deletion out to that user's 'Thoughts' as well.

## Deployment

This project does not have a frontend UI, being purely an API intended for use in other projects. See below for the GitHub repository and a short demo video of me showcasing the API's functionality with Insomnia.

[Link to the GitHub repo for this project](https://github.com/Aoliva96/social-api)

[Link to the project demo video](https://drive.google.com/file/d/1785a6aV-FwBQsWAfhkgwrWAJN_EElPSU/view?usp=sharing)

## Collaborators

While I did not collaborate with anyone on this project, I did utilize GitHub Copilot for illustrating code concepts and providing bugfix suggestions.

## Resources

See the links below to see some of the resources I used for this project:

[Documents - MongoDB Manual v7.0](https://www.mongodb.com/docs/manual/core/document/#the-id-field)

[BSON Types - MongoDB Manual v7.0](https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-objectid)

[do...while - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

I also referenced the week 18 mini-project solution while constructing the basic file structure for this project.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project utilizes the standard MIT License.
