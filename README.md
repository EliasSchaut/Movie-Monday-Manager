![](https://img.shields.io/github/v/release/EliasSchaut/Movie-Monday-Manager?color=purple&include_prereleases&label=Release)
![](https://img.shields.io/github/license/EliasSchaut/Movie-Monday-Manager)

# Movie Monday Manager 
A full stack management application for voting movies for weekly movie events.

## Features
- Account-registration with email verification
- Users can vote, add and remove movies
- Users can manage own profile
- Clean and responsive Bootstrap-UI
- 100% usable without client (via REST-API)
- automatic management of voted movies around movie events
- automatic notifications for movie events with the list of interested users

## Installation
1. You need [node.js](https://nodejs.org/en/) installed (version 18.12.1 or newer).
2. Download the [newest version](https://github.com/EliasSchaut/Movie-Monday-Manager/releases) of the code
3. Rename the .env file from ```.env.tmp``` to ```.env```
4. Open the configuration file (now ```.env```) and set values (see [config-section](#configuration) below).
5. Build the project with ```npm run build:all```
6. Run the server with ```npm run start:prod```

## Configuration
This Doc is still work in process

## API-Docs
This project is 100% usable without client via a REST-API!
The routes start with the prefix ```/api``` (e.g. `http://[::1]:3000/api`). 
The api is documented at ```/docs``` route of the website (e.g. `http://[::1]:3000/docs`) visible in the controller-section.

## Dev-Docs
This small guide assumes, that you have already some knowledge about node.js and the used frameworks. 
The whole project is written in [Typescript](https://www.typescriptlang.org/).

### MoMoMat (Backend)
The backend uses the [NestJS](https://nestjs.com/) framework to handle the REST-API with all its corresponding services.
This project (`/src` folder) is dived into 3 main parts: 
The routes (controllers) to handle incoming requests; 
a common section with lots of usefully functions and classes to support the other parts; 
and type definitions for internal data structures and data transmission objects (dto's).

To run the backend in development mode, you need to `npm install` the dependencies and run ```npm run start:dev``` in the root folder of the project. Note, that the client has to be built via `npm run build:client` because the client is only statically served from the  `/client/dist` folder. So every change in the client has to be built to show up in the backend project. Also note, that the database should also be built (see `MoMoMat-DB` below). The backend can generate docs as static website by run `npm run build:doc` and shown by `npm run start:doc`. The backend itself can be build with `npm run build`. The build files are located in the `/dist` folder. The `npm run build:all` command can be used to build everything in with just one step.

### MoMoMat-Client (Frontend)
The frontend uses the [Vue.js](https://vuejs.org/) framework to handle the user interface. 
It can be found in the `/client` folder.

The frontend uses the [Vue Router](https://router.vuejs.org/) defined in `/client/src/router` folder to handle the navigation between the different pages as singe page application. 
The router shows different view components depending on the current route. These view components are defined in the `/client/src/views` folder. Some views use special components defined in the `/client/src/components` folder.

To run the client in development mode, you need to `npm install` the dependencies and run ```npm run dev``` in the `/client` folder.
But in this mode, the backend is disabled and the website cannot interact with any backend route. 
To build the client for production, you need to run `npm run build` in the `/client` folder. The build files are located in the `/client/dist` folder.

### MoMoMat-DB (Database)
The database use [Prisma](https://www.prisma.io/) as ORM to handle the database connection and management. 
Its database schema is defined in the ```/prisma``` folder. 
Which database is used under the hood can be defined in the ```.env``` file.

The scheme can be formatted with ```npx prisma format``` in `/prisma` folder. 
A database can be created via ```npx prisma migrate dev``` from `/prisma` folder or ```npm run build:db``` from root folder. 
