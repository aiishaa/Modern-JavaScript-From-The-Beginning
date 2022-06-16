// Init github
const github = new Github;

// init ui
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
        // Make http request
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show alert
                ui.showAlert('User not found!', 'alert alert-danger');
            } else{
                console.log(data);
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

        })
    } else{
        // Clear the profile
        ui.clearProfile();
    }
})