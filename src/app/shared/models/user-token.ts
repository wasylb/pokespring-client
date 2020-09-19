import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { User } from './user';

export interface UserToken {
  user: User;
  token: string;
}
