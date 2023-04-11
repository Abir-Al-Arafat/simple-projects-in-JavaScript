// class for user interface
class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    // method for displaying profile
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="d-grid btn btn-primary mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success">Followers: ${user.followers}</span>
                        <span class="badge bg-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }

    // method for clearing ui
    clearProfile(){
        this.profile.innerHTML = '';
    }

    // shows repos
    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });

        // output repos
        document.getElementById('repos').innerHTML = output;
    }

    // method for showing alert message
    showAlert(message, className){
        // clears any previous alert
        this.clearAlert();
        // create tag
        const div = document.createElement('div');
        // adding class
        div.className = className;
        // adds text
        div.innerHTML = `<p>${message}</p>`;

        // getting important classes
        const searchContainer = document.querySelector('.search-container');
        const mainField = document.querySelector('.search');

        // inserting tag
        searchContainer.insertBefore(div, mainField);

        // alert timeout after 3 sec
        setTimeout(() => this.clearAlert(), 3000);

    }

    // method for clearing alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        // checking if alert exists
        if(currentAlert){
            currentAlert.remove();
        }
    }
}