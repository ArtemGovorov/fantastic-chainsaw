import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Appliance } from '../../../models/common/registration.interface';

@Component({
  selector: 'overview-panel',
  template: `
    <div class="overview" [formGroup]="parent">
      <ng-content select="h2"></ng-content>
      <div *ngIf="parent.controls.appliance.valid">
        Type: {{ parent.value.appliance.type }}<br />
        DateOfPurchase: {{ parent.value.appliance.dateOfPurchase }}<br />
        Price: {{ parent.value.appliance.price }}<br />
        ModelNumber: {{ parent.value.appliance.modelNumber }}<br />
        SerialNumber: {{ parent.value.appliance.serialNumber }}
      </div>
    </div> 
  `
})

export class OverviewPanelComponent {
  
  // declare inputs to match what is passed into this component
  // see registration.component.ts
  // eg [parent="form"] 
  @Input()
  parent: FormGroup;

  constructor() {}

}