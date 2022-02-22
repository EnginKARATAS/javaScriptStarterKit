export default class User{
    constructor(id, firstName, lastName, city){
        this.id = id;
        this.firstName = firstName;//es6
        this.lastName = lastName;
        this.city = city;
    }
    //saf js`de name: string olmadığından
    //constructor yapıları kullanılır ki burada da prototype kullanılır.
}