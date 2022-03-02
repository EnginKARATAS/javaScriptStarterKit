import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../model/user.js";
import { UserService } from "../services/userService.js";

console.log("usercomponent yüklendi")
let userService = new UserService(new MongoLogger());

let user1 = new User(1,"engin","karatas","kocaeli");

userService.add(user1)

// console.log(userService.list()) 
// console.log(userService.getById(1)) 

console.log("----------w------")

userService.load();
console.log(userService.customers)
console.log("----------aaa------")
console.log(userService.employees) 
console.log("----------aaa------")
console.log(userService.errors)



 

