import { InvalidParameterError } from "../error/InvalidParameterError";

export class User{
    constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: UserRole
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getRole(){
        return this.role;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setEmail(email: string){
        this.email = email;
    }

    setPassword(password: string){
        this.password = password;
    }

    setRole(role: UserRole){
        this.role = role;
    }

    static toUserModel(user: any): User {
        return new User(user.id, user.name, user.email, user.password, stringToUserRole(user.role));
      }

}


export const stringToUserRole = (input: string): UserRole => {
    switch (input) {
      case "NORMAL":
        return UserRole.NORMAL;
      case "ADMIN":
        return UserRole.ADMIN;
      default:
        throw new InvalidParameterError("Invalid user role");
    }
  };

export interface UserInputDTO{
    email: string;
    password: string;
    name: string;
    role: string;
}

export interface LoginInputDTO{
    email: string;
    password: string;
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}