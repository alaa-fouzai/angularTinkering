import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolbarService } from 'src/app/components/toolbar/toolbar.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public inputIndex :any;
  name:any;
  constructor(private tools:ToolbarService) { }

  ngOnInit(): void {
    this.name=new FormControl('',[Validators.required]);
    this.inputIndex = new FormGroup({
      name: new FormControl()
    });
  }
  changeName() {
    this.name =this.inputIndex.get('name').value;
    this.tools.setMessage(this.name);
  }

}
