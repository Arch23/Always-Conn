import { ValidationsService } from './../helpers/validations.service';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Plan } from '../entities/plan';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private systemUsers: User[]

  constructor(
    private validationsService: ValidationsService
  ) { 
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

  selectPlan(currentUser: User,selectedPlan: Plan) : User{
    let tmpUser = null;
    this.systemUsers.forEach(
      (user: User) => {
        if(user.id == currentUser.id){
          user.activePlan = selectedPlan;
          tmpUser = user;
        }
      }
    );

    return tmpUser;
  }

  createNewUser(newUser: User) : 
    {addedUser: User, msg: string}
  {
    if(this.systemUsers.some(
        (user: User) => user.username == newUser.username)
    ){
      return {
        addedUser: null,
        msg: 'Username already in use!'
      };
    }

    let validationResult: {res: boolean, msg: string} = this.validationsService.validateString(newUser.username, 3, 20, 'username');
    if(!validationResult['res']){
      return {
        addedUser: null,
        msg: validationResult['msg']
      };
    }

    validationResult = this.validationsService.validateString(newUser.password, 3, 20, 'password');
    if(!validationResult['res']){
      return {
        addedUser: null,
        msg: validationResult['msg']
      };
    }

    validationResult = this.validationsService.validateString(newUser.firstName, 1, 30, 'first name');
    if(!validationResult['res']){
      return {
        addedUser: null,
        msg: validationResult['msg']
      };
    }

    validationResult = this.validationsService.validateString(newUser.lastName, 1, 60, 'last name');
    if(!validationResult['res']){
      return {
        addedUser: null,
        msg: validationResult['msg']
      };
    }

    console.log('passed all val');
    const nextId: number = Math.max(...this.systemUsers.map((user: User)=>user.id))+1;

    this.systemUsers.push(new User(
      nextId,
      newUser.username,
      newUser.password,
      newUser.firstName,
      newUser.lastName,
      null,
      null
    ));

    return {
      addedUser: this.systemUsers.find((user: User)=>user.id==nextId),
      msg: ''
    };
  }
}
