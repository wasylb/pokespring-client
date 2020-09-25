import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { StatusData } from '../models/status-data';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackbar: MatSnackBar) {
  }

  public showMessage(apiCallback: StatusData) {
    const {status, message} = apiCallback;
    this.snackbar.open(message, status, {
      panelClass: ['mat-toolbar', status === 'Success' ? 'mat-warn' : 'mat-accent'],
      duration: 3000
    });
  }
}
