import { Component } from '@angular/core';
import { MyServiceBase } from './my-service.base';

export class MyServiceMock extends MyServiceBase {
   getMessage(): string {
     return 'MyServiceMock';
   }
}
