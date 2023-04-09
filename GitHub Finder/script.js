// initializing
const github = new GitHub;
const ui = new UI;


// gets search bar
const searchInput = document.getElementById('search-user');

searchInput.addEventListener('keyup', (e)=>{
    userInput = e.target.value;

    if(userInput !== ''){
        // makes http call
        github.getProfile(userInput)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Shows Alert
            }else{
                // Shows profile
                ui.showProfile(data.profile);
            }
        })
    } else {
        // clears profile
    }
})