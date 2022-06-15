// Get From Local Text File
document.getElementById('button1').addEventListener('click', getText);

function getText(){
    // Return promises
    fetch('test.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error));
}

// Get Local Json File
document.getElementById('button2').addEventListener('click', getJson);

function getJson(){
    // Return promises
    fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}

// Get From External API
document.getElementById('button3').addEventListener('click', getExternal);

function getExternal(){
    // Return promises
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}