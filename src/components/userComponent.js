import User from "../model/user.js";
import { UserService } from "../services/userService.js";

console.log("usercomponent yüklendi")
let userService = new UserService;

let user1 = new User(1,"engin","karatas","kocaeli");

userService.add(user1)

console.log(userService.list()) 
console.log(userService.getById(1)) 


 

