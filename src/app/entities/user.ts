import { Plan } from './plan';

export class User {
    id: number
    username: string
    password: string
    firstName: string
    lastName: string
    activePlan: Plan
    usedData: number

    constructor(
        id: number,
        username: string,
        password: string,
        firstName: string,
        lastName: string,
        activePlan: Plan,
        usedData: number
    ){
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.activePlan = activePlan;
        this.usedData = usedData;
    }
}