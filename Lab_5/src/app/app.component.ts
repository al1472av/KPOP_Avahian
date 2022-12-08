import { Component,OnInit} from '@angular/core';
import { UserService } from './user.service';
import {User} from './user';
import { DialogComponent } from './dialog.component';
import { MatDialog} from '@angular/material/dialog';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Lab5';
  users: User[] = [];
  favourites:User[] = [];
    constructor(private service:UserService,public dialog: MatDialog) {}
    ngOnInit() {
        this.service.getUsers().subscribe((res: any) => {
          for(let i = 0; i < res.results.length;i++){
            var item:User = {
              id:i,
              name:res.results[i].name.first,
              email:res.results[i].email,
              login:res.results[i].login.username,
              password:res.results[i].login.password,
              cell:res.results[i].cell
            }
            this.users.push(item);
          }

        })
    }

   
    showUser(index:number){
      const dialogRef = this.dialog.open(DialogComponent, {
        data: this.users[index]
      });
      dialogRef.afterClosed().subscribe(result => {
        this.favourites = [...this.favourites,result];
        if(result == undefined && this.favourites.length>=1){this.favourites.pop();this.favourites.length-1;}
        console.log(this.favourites);
      });
    }

}
