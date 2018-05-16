import decode from 'jwt-decode';

export default class AuthService {
    constructor() {
        this.login = this.login.bind(this);
        this.getUser = this.getUser.bind(this);
        this.setToken = this.setToken.bind(this);
        this.getToken = this.getToken.bind(this);
    }

    login(e, username, password) {
        e.preventDefault();

        const header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        };

        if (() => this.loggedIn()){
            header['Authorization'] = 'Bearer' + this.getToken
        }

        let domain ='http://localhost:8000';

        return fetch(`${domain}/login`,{
            method: 'POST',
            headers: header,
            body: JSON.stringify({username,password})
        }).then(res => {
            if(res.ok) {
                return res.json();
            } else {
                console.log("Welp, looks like you don't exist");
                return res.json();
            }
        }).then(res => {
            if(res.message === "ok"){
                this.setToken(res.token);
            }
            return Promise.resolve(res);
        })
    }

    getToken() {
        return localStorage.getItem('tokenID');
    }

    setToken(idToken) {
        console.log(idToken);
        localStorage.setItem('tokenID', idToken);
        console.log(this.getToken());
    }

    logout() {
        localStorage.removeItem('tokenID');
    }

    // This decodes the token so that we know the User Id 
    getUser() {
        return decode(this.getToken());
    }

    // Checks if we are login if there is a token in our local storage 
    loggedIn() {
        const token = this.getToken();
        return !(token == null);
    }
}
