// class for fetching data

class GitHub{
    // client_id and client_secret has been used to fetch data more than 100 times an hour
    constructor(){
        this.client_id = '3c634c1723bf3a43f527';
        this.client_secret = 'a61de50194fbf0c25d2b7626449ab7cc2ff55f17';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // method for getting github profiles and repositories
    async getProfile(user){
        // fetching data from API

        // profile data
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // repositories
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // converting data to JSON
        const profileData = await profileResponse.json();

        const repoData = await repoResponse.json();

        // returning data
        return{
            profile: profileData,
            repos: repoData
        }
    }
}