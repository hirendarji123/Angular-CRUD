import { Injectable } from '@angular/core';
import { Data} from './data';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   baseURL = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getdata()
  {
    return this.http.get(this.baseURL);
  }
  
  getdatabyid(id: String) :any 
  {
    return this.http.get(this.baseURL+id);
  }


senddata(data :Data)
  {
    console.log(data);
    return this.http.post(this.baseURL,data).subscribe(res=>
      {
        
      });
  }

 deletefinal(id:string) :any
 {
  
   return this.http.delete(this.baseURL+id);
 }  


  
}
