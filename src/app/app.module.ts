import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyServiceBase } from './my-service.base';
import { MyServiceMock } from './my-service-mock';
import { MyService } from './my-service';

const isMock = Math.random() > 0.5;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: MyServiceBase, useClass: (isMock) ? MyServiceMock : MyService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
