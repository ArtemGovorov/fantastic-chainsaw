import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { RegDetails, Config, Appliance } from '../../models/common/registration.interface';

const REGISTRATION_API = 'http://localhost:3000';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) {}

  // get the config settings - this will be
  // local on magnolia
  getConfig(): Observable<Config[]> {
    return this.http
      .get(`${REGISTRATION_API}/config`)
      .map((response: Response) => response.json())
      .catch ((error: any) => Observable.throw(error.json()));
  }

  // get the config settings - this will be
  // local on magnolia
  getCustomConfig(): Observable<any> {
    return this.http
      .get(``)
      .map((response: Response) => response.json())
      .catch ((error: any) => Observable.throw(error.json()));
  }
  
  // main post call to server to register / get rates
  postRegDetails(regDetails: RegDetails): Observable<RegDetails> {
    return this.http
      .post(`https://demo4795542.mockable.io/olr`, regDetails)
      .map((response: Response) => response.json())
      .catch ((error: any) => Observable.throw(error.json()));
  }

  // retrive rate - this is for a re-entry into 
  // the app via email etc
  retrieveRates(key: string): Observable<any> {
    return this.http
      .post(`https://demo1851035.mockable.io/rates`, key)
      .map((response: Response) => response.json())
      .catch ((error: any) => Observable.throw(error.json()));
  }
}

