import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    console.log('Service initialized...');
  }

getUsers() {
  return this.http.get(`${this.uri}/getusers/`);
}

getUserId(id) {
  return this.http.get(`${this.uri}/getuser/${id}`);
}

addUser(first, last, telephone) {
  const user = {
    first_name: first,
    last_name: last,
    telephone: telephone
  };

  return this.http.post(`${this.uri}/insertuser/`, user);
}

deleteUser(id) {
    return this.http.get(`${this.uri}/deleteuser/${id}`);
}



}
