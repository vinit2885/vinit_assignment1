import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  person: Person[] = [{
    firstname: 'Vinit',
    lastname: 'Agrawal',
    dob:'01-08-1983',
    phone:9769676493
  }];
  Perssons = [];
  addFormValues(e){        
    var firstname = ((document.getElementById("fname") as HTMLInputElement).value).toString();
    var lastname = ((document.getElementById("lname") as HTMLInputElement).value).toString();
    var dob = ((document.getElementById("dob") as HTMLInputElement).value).toString();
    var phone = parseInt(((document.getElementById("phone") as HTMLInputElement).value));
    //this.person.push({firstname:firstname,lastname:'{lastname}',dob:'{dob}',phone:{phone});
    this.person.push({'firstname':firstname,'lastname':lastname,'phone':phone,'dob':dob});
    console.log(this.person);

  }
  constructor() { }

  ngOnInit() {
  }

}
