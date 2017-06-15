import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Observable';

// service
import { RegistrationService } from '../../../services/common/registration.service';
import { AppService } from '../../../../app.service';

// interface
import { Config, RegDetails } from '../../../models/common/registration.interface';

@Component({
  selector: 'registration',
  styleUrls:['registration.component.css'],
  template:`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="col-6">

        <!--
          pass in form as parent
          pass in array of titles    
        -->
        <customer-details
          [parent]="form"
          [customer]="details"
          [config]="configuration">
          <h2>Customer details:</h2>
        </customer-details>

        <!--
          pass in form as parent
          pass in array of titles, appliances & prices    
        -->
        <appliance-details
          [parent]="form"
          [config]="configuration">
          <h2>Appliance Details:</h2>
        </appliance-details>

        <button
          type="submit"
          [disabled]="form.invalid">
          Submit
        </button>
      
        <!--
          pass in form as parent
        -->
        <overview-panel
          [parent]="form">
          <h2>Overview Panel</h2> 
        </overview-panel>
      </div>
      <div class="col-6">
        <h2>Form contents (Local)</h2>
        <pre>{{ form.value | json }}</pre>

        <h2>Form contents (mock API)</h2>
        <pre>{{ details | json }}</pre>
      </div>
    </form>  
  `
})
export class RegistrationComponent implements OnInit {

  // Setup mock config
  configuration: Config[];
  details: RegDetails[];
  destination: string;
  // data: Observable<any> = this.route.data;

  // formBuilder helper
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private regService: RegistrationService,
    private appService: AppService
  ){}

  // fire OnInit, sets API calls to config data
  // and local stored regDetails 
  ngOnInit(){
    // get config settings
    this.regService.getConfig()
      .subscribe(data => this.configuration = data);

      // debugging routes
      this.router.events
        .subscribe(event => {
          if (event instanceof NavigationStart) {
            console.log(event);
          };
          if (event instanceof NavigationEnd) {
            console.log(event);
          };
        });

      let customConfig: any = window["config"];
      console.log('inside app', customConfig);
  }

  // form base settings - this is where we'd use the local stored data to populate the form
  form = this.fb.group({
    customer: this.fb.group({
      title: '',
      firstName: ['', Validators.required ],
      lastName: '',
      line1: '',
      line2: '',
      town: '',
      postcode: '',
      email: '',
      phone: ''
    }), 
    appliance: this.createAppliance()
  })

  // dynamically build new instances of appliances
  // this can be used when developing multiple applicances
  createAppliance(){
    return this.fb.group({
      type: '',
      dateOfPurchase: '',
      price: '',
      modelNumber: '',
      serialNumber: '',
    })
  }

  // init onSubmit
  onSubmit(event: RegDetails){
    // post form data and act on reponse
    this.regService.postRegDetails(this.form.value).subscribe((data: any) => {
        // store the data in localService
        this.appService.formData = data;

        // set localStorage
        // this could be a token or key
        localStorage.setItem('token', 'valid');

        // based on the data received back either route to confirmation or overview
        // rates const signifies an upsale route
        const rates = false
        if (rates) {
          // call upSale route
          // yet to be declared
          this.handleView('/overview');
        } else {
          // call overview route
          this.handleView('/confirmation');
        }
    }, error => {
        localStorage.removeItem('token');
        console.log('Error', error);
    });
  }

  handleView(destination: string){
    // route and use resolve in 'registration.resolve.ts'
    // to fetch the data back from the REST API
    this.router.navigate([destination]);
  }
}
