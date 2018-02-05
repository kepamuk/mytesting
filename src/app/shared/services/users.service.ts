import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((user: User) => {
        return user[0] ? user[0] : undefined;
      });
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post('http://localhost:3000/users', user)
      .map((response: User) => {
        return response;
      });
  }

}
