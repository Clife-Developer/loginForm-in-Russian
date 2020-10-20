import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-p',
  templateUrl: './new-p.component.html',
  styleUrls: ['./new-p.component.scss']
})
export class NewPComponent implements OnInit {

  obj:any;
  constructor( private contactsService:ContactsService) {


   }
  
   
  // passed=false;
   addNewContact(form)
   {
     
      console.log(form.value);
      /*
      console.log(form.value.title);
      console.log(form.value.author);

      const cont={
                   id:form.value.id,
                   title:form.value.title,
                   author:form.value.author
                 }
  
      this.contactsService.createContacts(cont).subscribe(data=>
      {});

*/

   }

   returnPar()
   {
     this.contactsService.getParams().subscribe(data=>{
       console.log(data);
     });
   }

   updateData(contactId)
   {
    const cont={
      id:contactId,
      title:"clife",
      author:"Biko"
    }

      this.contactsService.updatedContacts(contactId,cont).subscribe(data=>
      {  
      });
   }
  
   deleId(id)
   {
     this.contactsService.deleteData(id).subscribe((data)=>
     {
     });
   }
  ngOnInit(): void {
  // this.obj=this.contactsService.getContacts();

  this.contactsService.getContacts().subscribe(data=>
    {
      this.obj=data;
    }); 
  }

}
