import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  
  public showtoolbar :boolean = true;
  constructor() { }
  getshowtoolbar(){
    return this.showtoolbar;
  }
  setshowToolBar(state: boolean) {
    this.showtoolbar = state;
  }
}
