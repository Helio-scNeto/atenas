

# Running The Application

In order to run the application, you need to install Docker on your machine.
After install Docker, just type this command on the root folder: npm run compose:up.
Just wait a few seconds and the application will be ready to use.
It's just access the address http://localhost:3000 on your browser.

# Database Access
If you want to consult the database, these are the connection strings:
Server Host: localhost
Port: 3306 (MySql default port)
Database: EMAIL
Username:root
Password:123456


# Email Query
Alternatively, you can query your emails using [GET] http://localhost:3001/sendForm. It will bring a list of emails that you send to the server.
