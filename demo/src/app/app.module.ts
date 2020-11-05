import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowuserComponent } from './showuser/showuser.component';      
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService} from './dataservice.service';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DatapassingService} from './datapassing.service';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ShowuserComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [DataserviceService,DatapassingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
