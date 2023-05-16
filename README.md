# Frontend Share now challenge

## How run the application
* Locally with npm running by the following command
````
  npm run dev
````

* Docker container
````
docker-compose up --build 
````

* The application will run in the port ```8000```

## Architecture
* I followed the default architecture that Vue 3 provides 
in the scaffold. I would like to apply atomic pattern to the project
but due time reasons I could not perform.
* I used typescript instead javascript ```.ts``` and ```.tsx```
* Centralized file to make the HTTP cals ``/api``
* You'll see that the pages can be refactored into small components for reuse
them, for instance error handling.
* Default page for not matched route.


