# Inventory and Supply Microservices Web Application

This is an inventory cloud application where internal organizational users can register their email and log into a web client, post photos of North American Veneer Logs to the feed and include details, ie., species,
diameter, length and price for each log item.


## Tasks

### Setup Docker Environment
You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the project directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`

