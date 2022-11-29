import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToolbarService } from 'src/app/components/toolbar/toolbar.service';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public inputIndex :any;
  name:any;
  constructor(private tools:ToolbarService,private indexs:IndexService) { }
  id:any;
  res:any;
  ngOnInit(): void {
    this.name=new FormControl('',[Validators.required]);
    this.inputIndex = new FormGroup({
      name: new FormControl()
    });

    this.res =this.indexs.getid().subscribe(
      (val) => {console.log("logging GET value", val);
      this.id = val
    }
  );

  }
  public changeName() {
    this.name =this.inputIndex.get('name').value;
    this.tools.setMessage(this.name);
    
  }

}
