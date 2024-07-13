import { Component, NgZone } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private zone: NgZone , private dialog: MatDialog) {}
   
  someFunction() {
      this.zone.run(() => this.login())

   } 

  login(){
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {name: 'abc'},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
