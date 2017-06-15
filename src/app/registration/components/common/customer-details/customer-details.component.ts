import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegDetails, Config } from  '../../../models/common/registration.interface';

@Component({
  selector: 'customer-details',
  template: `
    <div class="col-12" [formGroup]="parent">
      <div formGroupName="customer">
        <ng-content select="h2"></ng-content>
        <select
          formControlName="title"
          id="title">
          <option value="">Select</option>
          <option
            *ngFor="let title of config?.titles"
            [value]="title.value">
          {{ title.value }}  
          </option>
        </select>

        <label for="firstName">First name</label>
        <input
          type="text"
          formControlName="firstName"
          [ngClass]="{'error': required('firstName')}">

        <label for="lastName">Last name</label>
        <input
          type="text"
          formControlName="lastName">

        <label for="line1">Line1</label>
        <input
          type="text"
          formControlName="line1">

        <label for="line2">Line2</label>
        <input
          type="text"
          formControlName="line2">

        <label for="town">Town</label>
        <input
          type="text"
          formControlName="town">
        
        <label for="postcode">Postcode</label>
        <input
          type="text"
          formControlName="postcode">

        <h2>Contact details:</h2>
        <label for="email">Email</label>
        <input
          type="email"
          formControlName="email">

        <label for="phone">Phone</label>
        <input
          type="phone"
          formControlName="phone">
        </div>
    </div>
  `
})
export class CustomerDetailsComponent {

  // declare inputs to match what is passed into this component
  // see registration.component.ts
  // eg [parent="form"] 
  @Input()
  parent: FormGroup;

  @Input()
  customer: RegDetails[];
  
  @Input()
  config: Config[];
  
  constructor() {}
  
  required(name: string) {
    return (
      this.parent.get(`customer.${name}`).hasError('required') && 
      this.parent.get(`customer.${name}`).touched
    );
  }
}