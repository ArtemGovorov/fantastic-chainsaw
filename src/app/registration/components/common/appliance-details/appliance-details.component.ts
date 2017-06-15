import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegDetails, Config } from '../../../models/common/registration.interface';

@Component({
  selector: 'appliance-details',
  template: `
    <div class="col-12" [formGroup]="parent">
      <div formGroupName="appliance">
        <ng-content select="h2"></ng-content>
        <label for="type">Appliance type</label>
        <select
          formControlName="type"
          id="type">
          <option value="">Select</option>
          <option *ngFor="let applianceType of config?.appliances"
            [value]="applianceType.id">
            {{ applianceType.value }}  
          </option>
        </select>

        <label>Date of Purchase</label>
        <input
          type="date"
          formControlName="dateOfPurchase">

        <label for="price">Purchase Price</label>
        <select
          formControlName="price"
          id="price">
          <option value="">Select</option>
          <option
            *ngFor="let price of config?.prices"
            [value]="price.value">
            {{ price.value }}  
          </option>
        </select>
          
        <label for="modelNumber">Model Number</label>
        <input
            type="text"
            formControlName="modelNumber"
            id="modelNumber">
        <label for="serialNumber">Serial Number</label>
        <input
            type="text"
            formControlName="serialNumber"
            id="serialNumber">
      </div>
    </div>
  `
})
export class ApplianceDetailsComponent {

  // declare inputs to match what is passed into this component
  // see registration.component.ts
  // eg [parent="form"]
  @Input()
  parent: FormGroup;

  @Input()
  config: Config[];

  // declare outputs
  @Output()
  added = new EventEmitter<any>();

  constructor() {}

}