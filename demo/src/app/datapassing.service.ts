import { Injectable } from '@angular/core';
import {Data} from './data';


@Injectable({
  providedIn: 'root'
})
export class DatapassingService {

  finaldata =[];
  updatedata :Data;

  constructor() { }

  getdatatoadduser(data) :any
  {
    this.finaldata = data;

  }

  senddatatoshow()
  {
    return this.finaldata;
  }

  dataforupdate(data :Data)
  {
    this.updatedata = data;
    console.log( this.updatedata);

  }
}
