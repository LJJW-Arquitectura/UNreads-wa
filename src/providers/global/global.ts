import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
	public authenticatedId: number = 0;
	public user: string = '';

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
  }

}
