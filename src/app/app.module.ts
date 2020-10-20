import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';//forms modu
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPComponent } from './new-p/new-p.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckInfoInterceptor } from './check-info.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:CheckInfoInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
