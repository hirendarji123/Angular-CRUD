import { Component, OnInit } from '@angular/core';
import { DatapassingService} from '../datapassing.service';
import{Data} from '../data';
import { DataserviceService} from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css'],
  providers:[DatapassingService,DataserviceService]
})
export class ShowuserComponent implements OnInit {

  showdata:any;
 updatedata :any;
  constructor(private router: Router,private datapassing:DatapassingService ,private dataserviceService:DataserviceService) {}

  ngOnInit(): void {
    this.getdatatoshow();
  }
   
  getdatatoshow()

  {

    return this.dataserviceService.getdata().subscribe(res=>{
      this.showdata=res as Data[];
    });
 }
 
 updatebyid(id :string)
 {
   console.log(id);
   this.dataserviceService.getdatabyid(id).subscribe(res=>
        {
        this.updatedata = res;
         console.log(this.updatedata);
         this.router.navigate(['/update']);
         this.datapassing.dataforupdate(this.updatedata);
        });

    console.log("end");
 }

    delete1(id:string) 
    {
      
       this.dataserviceService.deletefinal(id).subscribe(res=>{

      
         this.getdatatoshow();
         this.router.navigate(['/showuser']);
       });
       
   }
}
