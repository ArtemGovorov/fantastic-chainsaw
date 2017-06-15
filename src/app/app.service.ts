import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// inteface
import { RegDetails } from './registration/models/common/registration.interface'

@Injectable()
export class AppService {
  
  formData: RegDetails;
  
  constructor( private http: Http ) {}
}