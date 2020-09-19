import { Token } from './token';

export class User {
  id: string;
  login: string;
  email: string;
  visibleName: string;
  token: string;

  constructor() {
    this.id = '';
    this.login = '';
    this.email = '';
    this.visibleName = '';
    this.token = '';
  }
}
