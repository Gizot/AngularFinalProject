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

  

}
