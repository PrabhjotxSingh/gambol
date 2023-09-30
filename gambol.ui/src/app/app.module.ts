import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupWizardModule } from './setup-wizard/setup-wizard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SetupWizardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
