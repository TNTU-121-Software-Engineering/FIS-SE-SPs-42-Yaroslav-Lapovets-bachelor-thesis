# AutoService

Created as Bachelor Thesis in Ternopil Ivan Puluj National Technical University. "Development of a website for a autoservice using Spring Framework". Bachelor Thesis presentation in Ukrainian: [PDF](https://github.com/TNTU-121-Software-Engineering/FIS-SE-SPs-42-Yaroslav-Lapovets-bachelor-thesis/docs/Презентація.pdf).

## Installation

Go to [Docker Hub](https://hub.docker.com) and install Docker Desktop


After this start Docker Desktop and clone git repository

```bash
git clone https://github.com/TNTU-121-Software-Engineering/FIS-SE-SPs-42-Yaroslav-Lapovets-bachelor-thesis.git
cd AutoService
```
And start Docker

```bash
docker-compose up
```


Or you can just use only Docker Hub

Move to directory and create docker-compose.yaml file

```bash
cd C:\path\to\your\directory
notepad docker-compose.yaml
```
add this text to docker-compose.yaml
```bash
services:
  frontend:
    image: zeiron/autoservice-frontend:v1
    ports:
      - "3000:3000" # Map frontend container port to host port
    depends_on:
      - backend

  backend:
    image: zeiron/autoservice-backend:v1
    ports:
      - "8080:8080" # Map backend container port to host port
    environment:
      SPRING_PROFILES_ACTIVE: prod
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/autoservice
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: admin
    depends_on:
      - db

  db:
    image: zeiron/custom-postgres:v1
    environment:
      POSTGRES_DB: autoservice
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: admin
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

After saving document write command in console

```bash
docker-compose up
```
Docker download a images from my Docker Hub repository


## Usage

After starting project open browser and follow the [link](localhost:3000)

```bash
localhost:3000
```
Or you can test a back-end using a PostMan [collection](https://api.postman.com/collections/21866450-044f994a-5ac4-40ca-9f8c-23fa4ab926b1?access_key=PMAT-01J10NJ7KRCB7B6PRJBM74SG3B)

### Back-end Endpoints:

Back-end on [link](localhost:8080/api)

```bash
localhost:8080/api
```

Don`t require a token to access
- POST: /login - login
- POST: /register - register

 
Require a token to access
- GET: /orders/{id}/price?bonus={bonus} - total price with discount
- GET: /repairmans/{id}/orders - get all completed orders by repairman id
- GET: /repairmans/{id}/orders/{id}/salary - get salary by order id and repairman id
- GET: /owners/{id}/orders - get orders by owner id
- POST: /owners - add new owner
- POST: /cars - add new car
- POST: /repairmans - add new repairman
- POST: /orders - add new order
- POST: /orders/{id}/goods - add new goods to order
- POST: /orders/{id}/favors - add new favor to order
- POST: /orders/{id}/favors/{id} - add favor by id to order
- PUT: /orders/{id}}/status?newStatus="STATUS" - change order status
- PUT: /cars/{id} - edit car by id
- PUT: /favors/{id} - edit favor by id
- PUT: /goods/{id} - edit googs by id
- PUT: /orders/{id} - edit order by id
- PUT: /owners/{id} - edit owner by id
- PUT: /repairmans/{id} - edit repairman by id
- --

### Used technologies
- Java 20
- SpringBoot
- SpringBoot Data JPA
- SpringBoot Security
- JWT
- HTML
- CSS
- JS
- React
- PostgreSQL
- Maven
- Docker