import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  validateString(value: string, mimSize: number, maxSize: number, name: string) : 
    {res: boolean, msg: string}
  {
    const trimmedValue: string = value.trim();
    let res: boolean = true, msg: string = '';
    
    if (trimmedValue.length == 0) {
      res = false;
      msg = `Field ${name} empty`;
    } else if (trimmedValue.length < mimSize) {
      res = false;
      msg = `Field ${name} too short`;
    } else if (trimmedValue.length > maxSize) {
      res = false;
      msg = `Field ${name} too long`;
    }

    return {
      res,
      msg
    };
  }
}
