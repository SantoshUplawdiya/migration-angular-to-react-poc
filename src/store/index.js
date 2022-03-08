import { makeAutoObservable,observable,action } from "mobx";

class UserStore {
    user ={
      username:"",
      password:"",
      isAuthenticated:true
    }
    constructor() {
        makeAutoObservable(this,{
            user: observable,
            loginProfile: action
        });
    }
    loginProfile = (payload) => {
        this.user = payload;
    }
}

const userStore = new UserStore();

export default userStore;