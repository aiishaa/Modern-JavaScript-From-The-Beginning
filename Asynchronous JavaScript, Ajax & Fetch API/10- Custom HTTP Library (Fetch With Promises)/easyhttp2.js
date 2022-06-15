class EasyHTTP{
    // Make an HTTP GET Request
    // Promises are used to handle asynchronous operations in JavaScript
    // Fetch API does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
    get(url){
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
        });
    }

    // Make an HTTP POST Request
    post(url, data){
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
        });
    }

    // Make an HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
        });
    }

    // Make an HTTP DELETE Request
    delete(url){
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(() => resolve('Resource deleted...'))
        .catch(error => reject(error));
        });
    }
}
