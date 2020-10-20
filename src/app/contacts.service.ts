import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
;



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient:HttpClient) { }

  getContacts()
  {
    let httpheaders=new HttpHeaders(
      {
        'content-type':'application/json',
        'Authorization':'Bucker25'
      }

    );
     //to add a custom heeader(s)
     httpheaders=httpheaders.set('surname','Mhlongo');

    
    
    return this.httpClient.get('http://localhost:3000/posts', {headers:httpheaders});
  }


  createContacts(bodyForm)
  {
    const httpheaders=new HttpHeaders();
    //httpheaders.append('content-type','application/json');
    //httpheaders.append('Authorization','sdfdfs');
    return this.httpClient.post('http://localhost:3000/posts',bodyForm);
    
  }

  updatedContacts(contactIds,updatedData)
  {
     const ApiUrl="http://localhost:3000/posts/"+contactIds;

     return this.httpClient.put(ApiUrl,updatedData);
  }

  deleteData(delId)
  {
    const del='http://localhost:3000/posts/'+delId;
   return this.httpClient.delete(del);
  }

  getParams()
  {
    const par=new HttpParams({
      fromObject:{
        id:'2'
      }
    //using fromString
    //fromString:'id=${3},name={Clife}'
    });
      return this.httpClient.get('http://localhost:3000/posts/',{params:par});
   
  }


  /*
  getContacts()
  {
   const contacts=[
      {
        name:'Clife',id:22
      },
      {
        name:'Mhlongo',id:33
      }
    ]

    return contacts;
  }
 */
} 
