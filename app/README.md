To run the project on your machine, you will need MySQL or docker installed to start MySQL.

So, open your terminal and: 
--name mysql-container -e MYSQL_ROOT_PASSWORD=docker -d -p 3306:3306 mysql:5.7. 

cd ./app/back-end 

npm start

/*wait some seconds until the container creates, and the server exposes 3001 PORT*/

cd ../front-end

npm start 

/*Now your 3000 PORT is open to browser use*/

Enjoy!!
 