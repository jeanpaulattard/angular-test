import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MyServiceBase} from './my-service.base';
import {MyServiceMock} from './my-service-mock';
import {MyService} from './my-service';

export let myServiceFactory = () => {

  const isMock = Math.random() > 0.5;

  return isMock ? new MyServiceMock() : new MyService();
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: MyServiceBase, useFactory: myServiceFactory},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
