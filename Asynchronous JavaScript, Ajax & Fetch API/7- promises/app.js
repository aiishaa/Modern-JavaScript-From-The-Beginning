// console.log("Aisha");
// setTimeout(() => {
//     console.log("fathy")
// }, 1000);

// console.log("Zaki");

const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post two'},
]

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPost(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// // This is a synchronous ways
// createPost({title: 'Post Three', body: 'This is post three'});
// getPost();

function createPost(post, callback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            let error = false;
            
            if(!error){
                resolve();
            } else{
                reject('Error: Something went wrong');
            }

        }, 2000);
    });
}

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

// This is Asynchronous ways
createPost({title: 'Post Three', body: 'This is post three'})
.then(getPost)
.catch(function(error){
    console.log(error);
});