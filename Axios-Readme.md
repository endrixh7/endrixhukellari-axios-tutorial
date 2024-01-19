# Axios tutorial

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

    - Fetch data using Axios
        - import axios
        - create a fetch function
            - try/catch
                - 'response.data' is the actual data
                - destructure data
            - display data
            - giant object
        - error will display as network error (404)
        - Dont forget:
            - useEffect()

### Axios Headers
    - second argument for GET
    - axios.get(url, {})
    - third argument in requests with data, for POST Request
    - axios.post(url, {data}, {})
    - We are going to make a request to Random Dad Joke
        - useState
    - Make request
        - Destructure the data
    - Dont forget to add 'headers' and 'accept'
    - use useState to render the data
    - Done ✅

### POST Request
    - send data to the server
    - axios.post(url, {data})
    - more options (auth header) - axios.post(url, {data}, {})
    - POST request through a Form
    - After you did a POST request go to Network Tab
        - POST
        - 201 Created
    - See the payload
    - Try to leave empty one of the fields
        - axios will throw an error

### Global Defaults
    - axios.defaults.baseURL = 'https://api.example.com';
    - axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    - axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    - Global is like a 'variable' can be created on the top of the file and can be called everywhere
        - You can add settings inside and call them to another file
    - Note:
        - This type of method is not good with JWT
        - We are going to fix this using Custom instance
### Update - no common property anymore
    - omit the common property from the defaults
    - example:
        - axios.defaults.headers.common['Accept'] = 'application/json'  ❌
        - axios.defaults.headers.['Accept'] = 'application/json'        ✅
    - '.common returns' a undefined thats why they removed
    
    Scenario:
        - Create a folder 'axios'
        - Within 'axios' folder create a 'global.js' file, here we are going to put some 'headers'
        - Import this file inside of the 'App.js'
        - Now run the server
        - Open Network Tab
        - Go to requests
        - Open the 'request' that we did a few seconds ago
            - Check 'Headers'
            - Go to 'Request Headers'
                - We will see 'Accept' application/json
            - Well we didnt specified at our axios request but we set a global header
            - We can set more 'Headers'
        - Downside:
            - Lets make the second request on the next URL (server)
            - See the 'Headers'
                - We will see the same 'info'

### Custom Instance
    - Multiple requests to the same URL
        - Create 'root' url
    - Add 'the global' only when we invoke the function that we need
        - Only then will be added 'the global'

### Axios Interceptors
    - Used for complex app (user auth)
    - Interceptors can be added to 'global' instance and 'custom-instance';
    - Interceptors has 'parameters';
    - Interceptors has :
        - request
        - response
    - Important:
        - Dont add the 'common' property
    - We can control all the application with interceptors
        - control request
        - control errors