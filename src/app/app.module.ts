// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// custom modules
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';

// core component
import { AppComponent } from './app.component';

// custom components
import { NotFoundComponent } from './not-found.component';

// app / core service
import { AppService } from './app.service';

export const routes: Routes = [
  {  path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),

    // custom modules
    RegistrationModule,
    AuthModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
