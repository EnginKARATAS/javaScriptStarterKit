import User from "./user.js";

export default class Employee extends User{
    constructor(id, firstName, lastName, city, salary){
        super(id, firstName, lastName, city)
        this.salary = salary;
    }
}