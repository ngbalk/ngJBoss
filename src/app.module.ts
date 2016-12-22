import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './ngJBoss.component';
import { StartProcessComponent } from './components/startProcess.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, StartProcessComponent, LoginComponent ],
  bootstrap:    [ AppComponent, StartProcessComponent, LoginComponent ],
  providers: [ LoginService ]
})
export class AppModule { }
