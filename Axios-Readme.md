# React Query Tutorial
    - prerequisite:
	- axios tutorial

## Axios tutorial

### Axios Setup
    - Axios is not the part of the React library
    - Axios can be used with all front end frameworks
    - Most popular

    - npm i
    - npm start

    Take a look at 'components' folder and 'examples' subfolder
        1- first request
        2- headers
        3- post request
        4- global instance
        5- custom instance
        6- interceptors

### Axios GET Request
    - npm install axios
    - npm start

    - We are going to work with 'first request'
        - import axios
        - axios.get(url)
        - axios.post(url)
        - axios.patch(url)
        - axios.delete(url)
        
    - Returns a promis
    - Response data located in data object
    - error in error.response
    - default will be 'GET'

    

1- Local Server - back-end setup
	- node server with endpoints
	- install dependencies
	- start server - npm start
2- Front End Setup - front-end setup
	- install dependencies
	- run server
	- It's a CRUD App - Bud Store
	- General overview:
		- main.jsx
		- Form.jsx - no logic
			- after submit will communicate with server/ local data to server data
		- items.jsx
			- grab items
			- iterate over
			- return data
		- singleItem.jsx
			- grab item
			- edit/delete functionality
		- ReadMe is there to clarify everything