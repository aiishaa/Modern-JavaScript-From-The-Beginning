const http = new easyHTTP;

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(posts);
//     }
// });

// GET a Single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, posts){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(posts);
//     }
// });

// Create data
const data = {
    title: 'Custome post',
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
// function(err, posts){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(posts);
//         }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data,
// function(err, posts){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(posts);
//         }
// });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response){
    if(err){
        console.log(err);
    }
    else{
        console.log(response);
    }
});
