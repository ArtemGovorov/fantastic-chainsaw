import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

// Observable
import { Observable } from 'rxjs/Observable';

// service
import { RegistrationService } from '../../../services/common/registration.service';
import { AppService } from '../../../../app.service';

// interface
import { Config, RegDetails } from '../../../models/common/registration.interface';

@Injectable()
export class RegistrationResolve implements Resolve<any> {

    details: RegDetails;
    key: string;
    data: Observable<any> = this.route.data;
    constructor(
        private regService: RegistrationService,
        private appService: AppService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
      /* 
        Use (app.service) to retrieve the response from the inital regDetails API post

        If there's no data - for example on a re-entry (via email etc or browser refresh) we make a new call using a localStorage key OR token set into the page via either:

        A: a link from email

        B: or that was set on the inital regDetails API post

        NOTE: This is all contained within a resolve because we want to wait until we recieve a response from the re-entry call BEFORE we load the page.

      */

      console.log('inside resolve');

      console.log('Data in local service: ',this.appService.formData);

      if(this.appService.formData) {
        // data exists - return localData
        return this.appService.formData;
        
      } else {
        // no data
        // fetch the token
        this.key = localStorage.getItem('token');
        console.log('Key / token',this.key);

        // retunr service passing token in      
        return this.regService.retrieveRates(this.key);
      }
  }
}