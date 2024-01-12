# API Portfolio Next 24

This is api to serve Ygor's portfolio website.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) - version >= 18.0.0

## Getting Started

Follow these steps to run the application locally.

### 1. Clone the Repository

```
git clone https://github.com/YgorBravimR/api-portfolio-next-24.git
cd api-portfolio-next-24
```

2. Install Dependencies

```
yarn install
```

3. Configure Environment Variables
Create a .env file in the root of the project and add any necessary environment variables.

```
PORT=3333
```

4. Start the application
If it's the first time running the application, start the database:
```
yarn prisma:reset
```
If you already started the database, run the application in development mode:

```
yarn dev
```

## Folder Structure
The application is architectured in a controller -> use-case -> repository pattern, where i have the main server.ts file calling the controller, then calling by each specific use case, then calling the repository to make the database requests.
 <br/> <br/>
/prisma: Prisma ORM configurations and schema files <br/>
/src: Source code of the application <br/>
/src/controllers: Controller files, handling the requests. <br/>
/src/env: Verification of format of environment variables. <br/>
/src/lib: Specific libraries configurations. <br/>
/src/repositiores: Database connections. <br/>
/src/types: Typescript interfaces. <br/>
/src/use-case: Specific usages. <br/>
/routes.ts: All application routes. <br/>
/server.ts: Main server file. <br/>

License
This project is licensed under the MIT License.
