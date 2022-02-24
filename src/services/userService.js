import { users } from "../data/users.js";
import DataError from "../model/dataError.js";

export class UserService{
    constructor(loggerService){
        this.users = [];
        this.customers = [];
        this.employees = [];
        this.errors = [];
        this.loggerService = loggerService;
    }
    load(){
        for (const user of users) {
            if (user.type == "customer") {
                console.log(`${user.firstName} ${user.lastName} add to customer array`)
                this.customers.push(user)
            }
            else if (user.type == "employee"){
                console.log(`${user.firstName} ${user.lastName} add to employee array`)
                this.employees.push(user)
            }
            else{
                console.log(`${user.firstName} ${user.lastName} add but type have errors`)
                this.errors.push(new DataError("user type error", user))
            }
        }
    }
    add(user){
        console.log("eklendi" + user.firstName);
        this.users.push(user);
        this.loggerService.log(user);
    }
    list(){
        return this.users;
    }
    getById(id){
        return this.users.find(u => u.id === id)
    }
}