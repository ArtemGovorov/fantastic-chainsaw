import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

// interface
import { Config, RegDetails } from '../../../models/common/registration.interface';

@Component({
  selector: 'confirmation-details',
  template:
  `
    <div>Overview</div>
    <button (click)="goBack()">
      back
    </button>
    <div>
      The resolved data is: {{resolvedData | json}}
    </div>
    <pre>{{ details | json }}</pre>
  `
})

export class ConfirmationComponent implements OnInit {

  resolvedData: any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){

    this.route.data
    .subscribe(val => {
      this.resolvedData = val["data"];
      console.log('Value in confirmation: ',val['data']);
    });
  }

  goBack(){
    this.router.navigate([''])
  }
}