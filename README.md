# AutoService

Created as Bachelor Thesis in Ternopil Ivan Puluj National Technical University. "Development of a website for a autoservice using Spring Framework". Bachelor Thesis presentation in Ukrainian: [PDF](docs/Презентація.pdf).

## Installation

Go to [Docker Hub](https://hub.docker.com) and install Docker Desktop


After this start Docker Desktop and clone git repository

```bash
git clone https://github.com/TNTU-121-Software-Engineering/FIS-SE-SPs-42-Yaroslav-Lapovets-bachelor-thesis.git
cd FIS-SE-SPs-42-Yaroslav-Lapovets-bachelor-thesis
```
And start Docker

```bash
docker-compose up
```


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
- Java 22.0.1
- SpringBoot 2.7.3
- SpringBoot Web 2.7.3
- SpringBoot Data JPA 2.7.3
- SpringBoot Security 2.7.3
- JWT(jjwt) 0.9.1
- HTML 5
- CSS 3
- JS 22.3.0
- React 18.3.1
- Lombok 1.18.30
- PostgreSQL 42.4.1
- Apache Maven 3.8.6
- Docker 26.1.1
