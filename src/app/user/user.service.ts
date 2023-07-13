import { Injectable } from '@angular/core';
import { User } from './user';
import { defaultusers } from 'src/assets/defaultusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User [] = []

  constructor() { }

  setUsers() : void {
    this.users = defaultusers;
  }

  getUsers() : User[] {
    return this.users;
  }
  createUser(user : User) : void {
    this.users.push(user);
  }
  editUser (editUser: User, id : number) : void {
    this.users = this.users.map(user=> {
      if(user.userId === id)
      user = editUser
      return user;
    })
  }

  deleteUser(id : number): void {
    this.users = this.users.filter((user) => user.userId !== id);
  }

  findById(id : number): User | undefined {
    return this.users.find((user)=> user.userId === Number(id)) 
  }
  findByUserName(username : string) : User | undefined {
    return this.users.find((user)=> user.username === username)
  }
  findByEmail (email : string) : User | undefined {
    return this.users.find((user)=> user.email === email)
  }
  checkOfUsersIsUnique(username : string, email : string, id : number): boolean {
    if(this.users.find((user)=> user.username === username.toLowerCase()) !== undefined
    &&this.findByUserName(username.toLowerCase())!.userId !== id)
    return false ;
    else if (this.users.find((user)=>user.email === email.toLowerCase()) !== undefined 
    && this.findByEmail(email.toLowerCase())!.userId !== id)
      return false ;
    else
      return true ;
  }
  userCount() : number {
    return this.users.length ; 
  }
  
  }




  


