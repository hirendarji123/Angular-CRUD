import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl} from '@angular/forms';
import { Data} from '../data';
import {DatapassingService} from '../datapassing.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor( private datapassing :DatapassingService) { }
  objArray=["ream","marvel","electrical","formware"];
  forms :FormGroup;
  data = new Data();

  
  ngOnInit(): void 
  {
    this.forms =new FormGroup (
      {
        userName :new FormControl(''),
        userId : new FormControl(''),
        deviceName : new FormControl(''),
        department :new FormControl('')
      });
      
      console.log(this.datapassing.updatedata);
    }

}
