# To-Do Application [Backend]

This is the backend part of a fullstack to-do application, built in native NodeJS and using MySQL as the database.

## How to use

1. Copy the `.env` file from the setup folder to the root directory, and replace the sections in brackets [] with your own data.

2. Enter the following command in the terminal: `npm install`. This will install all the libraries I used during development.

3. Now you can start the application with the `npm run server` command.

- If you're unable to start the server due to an issue with the nodemon library, try running PowerShell as an administrator and enter the following command: `Set-ExecutionPolicy RemoteSigned`.

- If you don't want to use a `.env` file, follow the steps under the section titled "Disabling the .env file".

## Disabling `.env` file
1. I placed a comment in the code where the program uses data from the `.env` file, labeled as "!ENV".

2. Replace the sections in the code with your own data.

- **Warning:** Using the `.env` file is recommended for code clarity. Additionally, the data stored here is securely managed as it is not uploaded to the cloud and is easily editable.

- The list of files that use the .env file:
    - /index.js
    - /db/connect.js

## What i used
- Nodemon (1.0.0): [Documentation](https://nodemon.io/)
- MySql2 (3.11.0) [Documentation](https://sidorares.github.io/node-mysql2/docs/documentation)