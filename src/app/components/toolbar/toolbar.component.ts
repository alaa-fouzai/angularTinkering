import { Component, OnInit } from '@angular/core';
import { SidenavserviceService } from '../sidebar/sidenavservice.service';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private sidenav :SidenavserviceService,private tools:ToolbarService) { }
  showtoolbar :any;
  ngOnInit(): void {
    this.showtoolbar=this.tools.getshowtoolbar();
  }
  Togglesidenav() {
    this.sidenav.toggle();
  }

}
