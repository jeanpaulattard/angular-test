import { Component } from '@angular/core';
import { MyServiceBase } from './my-service.base';

export class MyService extends MyServiceBase {
   getMessage(): string {
     return 'MyService';
   }
}
