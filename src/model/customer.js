import User from "./user.js";

export default class Customer extends User{
    constructor(id, firstName, lastName, city, creditCartNumber){
        super(id, firstName, lastName, city)
        this.creditCartNumber = creditCartNumber;
    }
}