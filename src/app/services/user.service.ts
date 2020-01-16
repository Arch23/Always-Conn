import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Plan } from '../entities/plan';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private systemUsers: User[]

  constructor() { 
    this.systemUsers = [
      {
        'id': 1,
        'username': 'noda',
        'password': 'psswrd',
        'firstName': 'Vinicius',
        'lastName': 'Noda',
        'activePlan': null,
        'usedData': null
      },
      {
        'id': 2,
        'username': 'user',
        'password': 'psswrd',
        'firstName': 'User',
        'lastName': '1',
        'activePlan': null,
        'usedData': null
      }
    ];
  }

  getAll() {
    return this.systemUsers;
  }

  getUserById(id: number) {
    return this.systemUsers.find(
      (user: User) => user.id == id
    );
  }

  getUserByUsername(username: string) {
    return this.systemUsers.find(
      (user: User) => user.username == username
    );
  }

  selectPlan(currentUser: User,selectedPlan: Plan) {
    this.systemUsers.forEach(
      (user: User) => {
        if(user.id == currentUser.id){
          user.activePlan = selectedPlan;
        }
      }
    );
  }
}
