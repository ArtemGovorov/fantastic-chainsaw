// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// containers
import { RegistrationComponent } from './containers/common/registration/registration.component';
import { ConfirmationComponent } from './containers/common/confirmation/confirmation.component';

// components
import { CustomerDetailsComponent } from './components/common/customer-details/customer-details.component';
import { ApplianceDetailsComponent } from './components/common/appliance-details/appliance-details.component';
import { OverviewPanelComponent } from './components/common/overview-panel/overview-panel.component';

// service
import { RegistrationService } from './services/common/registration.service';

// module
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';

// resolve
import { RegistrationResolve } from './containers/common/registration/registration.resolve'

export const routes: Routes = [
  {
    path: '',
    component:  RegistrationComponent,
  },
  {
    path: 'confirmation',
    // use guard to prevent access to routes
    canActivate: [ AuthGuard ],
    component: ConfirmationComponent,
    resolve: {
        data: RegistrationResolve
    }
  }
]

@NgModule({
    declarations: [
      RegistrationComponent,
      CustomerDetailsComponent,
      ApplianceDetailsComponent,
      OverviewPanelComponent,
      ConfirmationComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forChild(routes)
    ],
    // remove that routing is no set up
    // exports: [
    //   RegistrationComponent,
    // ],
    providers: [
      RegistrationService,
      RegistrationResolve
    ]
})
export class RegistrationModule {}