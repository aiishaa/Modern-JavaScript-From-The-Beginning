class EasyHTTP{
    // Make an HTTP GET Request
    // Promises are used to handle asynchronous operations in JavaScript
    // Fetch API does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP POST Request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP PUT Request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP DELETE Request
    async delete(url){
        const response = await fetch(url)
        const resData = await 'Resource deleted...';
        return resData;
    }
}
