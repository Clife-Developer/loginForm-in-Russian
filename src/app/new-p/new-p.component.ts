import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-p',
  templateUrl: './new-p.component.html',
  styleUrls: ['./new-p.component.scss']
})
export class NewPComponent implements OnInit {

  constructor(){}

  ngOnInit():void{

  }

  addNewContact(formName)
  {
    
    formName.reset();
  }
}
