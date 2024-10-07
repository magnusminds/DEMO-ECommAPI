import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getUsers() {
    return this.get('users');
  }

  addUser(param: UserInterface) {
    return this.post('users', param);
  }
}
