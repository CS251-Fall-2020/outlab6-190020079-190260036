import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name1 : string = "Ridayesh Parab";
  name2 : string = "Richeek Das";
  rollNo1 : string = "190020079";
  rollNo2 : string = "190260036";
  email1 : string = "ridayesh@cse.iitb.ac.in";
  email2 : string = "richeek@cse.iitb.ac.in";

  constructor() { }

  ngOnInit(): void {
  }

}
