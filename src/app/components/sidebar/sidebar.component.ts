import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavserviceService } from './sidenavservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;
  
  constructor(public side : SidenavserviceService) {
    
   }
  ngOnInit(): void {
    this.side.setSidenav(this.sidenav);
  }


}
