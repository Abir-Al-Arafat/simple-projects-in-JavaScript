// class for fetching data

class GitHub{
    // client_id and client_secret has been used to fetch data more than 100 times an hour
    constructor(){
        this.client_id = '3c634c1723bf3a43f527';
        this.client_secret = 'd5abdb7f20b9dfa845b3c6783eaaf2fe843c9665';
    }

    // method for getting github profiles and repositories
    async getProfile(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return{
            profile: profileData
        }
    }
}