import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { InfoComponent } from '../info/info.component';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  public version: string = environment.VERSION;
  public read_the_docs: string = environment.read_the_docs;
  public app_name: string = environment.app_name;

  constructor(public dialog: MatDialog)
  {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggleBeheer() {
    this.isExpanded = !this.isExpanded;
  }

  toonInfo()
  {
    const dialogRef = this.dialog.open(InfoComponent, {
      data: {bericht: this.app_name + " is bedoeld om meer inzicht te krijgen over de financiële administratie binnen het huishouden", titel: this.app_name + " v" + this.version},
      panelClass: 'dialog-delete',
      disableClose: true
    });
  }
}
