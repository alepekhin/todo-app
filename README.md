# Yet another "Todo" app

"Todo" is a well known simple web application like "Hello world" in other languages.  
Here we build this application with mongo db, Nest.js and GraphQL in backend  
and Next.js, Redux and GrapghQL client in frontend.

## How to run

Prerequsites: node, yarn, mongodb are installed, database `myapp` and collection `todos` are created

- start database
```
docker start mongodb
```
- start backend
```
cd backend;yarn start:dev
```
- start frontend in another terminal
```
cd frontend;yarn start
```
- to start storybook: `yarn storybook`









