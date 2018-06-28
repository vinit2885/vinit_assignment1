import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tmpname = "vinit";
  selectedvalue='';
  myarr = ['a','b','c'];
  addValues(tmpname){    
    this.myarr.push(tmpname);
    console.log("clicked ",this.myarr);
  }
  populatevalue(poplatevalue){
    this.selectedvalue = poplatevalue;
  }
}

