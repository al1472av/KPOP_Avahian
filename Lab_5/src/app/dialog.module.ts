import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule}  from '@angular/material/dialog';
  
import { DialogComponent } from './dialog.component';
import { MatIconModule } from '@angular/material/icon';
  
@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    FormsModule,
    MatButtonModule,MatDialogModule,MatIconModule
  ],
})
export class DialogModule {}