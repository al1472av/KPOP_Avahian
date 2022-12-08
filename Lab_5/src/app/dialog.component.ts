import { Component, Inject ,OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {User} from './user';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  user:User;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {this.user = data; }
  
    ngOnInit():void{}

    addFavourite(){
        this.dialogRef.close(this.user);
        console.log(this.user);
    }

    Cancel(): void {
      this.dialogRef.close();
    }
  
}