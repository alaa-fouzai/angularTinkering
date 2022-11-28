import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private messageSource = new Subject<String>();
  public showtoolbar :boolean = true;
  constructor() { }
  getshowtoolbar(){
    return this.showtoolbar;
  }
  setshowToolBar(state: boolean) {
    this.showtoolbar = state;
  }
  public getMessage(): Observable<String> {
    return this.messageSource.asObservable();
  }
  public setMessage(message: String) {
    return this.messageSource.next(message);
  }

}
