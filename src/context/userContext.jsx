export class UserContext {
    constructor(name, email, isLoggedIn) {
        this.name = name;
        this.email = email;
        this.isLoggedIn = isLoggedIn;
    }
    login(name, email) {
        this.name = name;
        this.email = email;
        this.isLoggedIn = true;
    }
    logOff() {
        this.name = '';
        this.email = '';
        this.isLoggedIn = false;
    }
}