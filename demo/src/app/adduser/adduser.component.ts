import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';

import {Router} from '@angular/router';
import {Data} from '../data';
import{ DataserviceService} from '../dataservice.service';

import { DatapassingService } from '../datapassing.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[DataserviceService]
})
export class AdduserComponent implements OnInit {

  constructor( private router:Router, private datasrvice :DataserviceService,private datapassing :DatapassingService) { }
  objArray=["ream","marvel","electrical","formware"];
  form :FormGroup;
  data = new Data();
  userdata =[];


        ngOnInit(): void 
        {
          this.form =new FormGroup (
            {
              userName :new FormControl(''),
              userId : new FormControl(''),
              deviceName : new FormControl(''),
              department :new FormControl('')
              
          
            });
            
          }

        getdatas()
          { 
            this.datasrvice.getdata().subscribe((res) => {
                  this.userdata= res as Data[];
              });
              this.senddatatoshow();
          }
            onsubmit()
            {
              
              this.data =this.form.value;
                console.log(this.data);
                
                alert(" enter sucessfuly");
                this.form.reset();
                this.datasrvice.senddata(this.data);
                this.getdatas();
                this.router.navigate(['/showuser']);
            }
  
            senddatatoshow()
            {
               this.datapassing.getdatatoadduser(this.userdata);

            }



}
