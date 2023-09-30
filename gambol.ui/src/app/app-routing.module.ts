import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeSplashComponent } from './welcome-splash/welcome-splash.component';
import { HomeComponent } from './home/home.component';
import { SetupWizardComponent } from './setup-wizard/setup-wizard.component';
import { StartSetupComponent } from './setup-wizard/start-setup/start-setup.component';
import { NameEntryComponent } from './setup-wizard/name-entry/name-entry.component';
import { ColorEntryComponent } from './setup-wizard/color-entry/color-entry.component';
import { EndSetupComponent } from './setup-wizard/end-setup/end-setup.component';

const routes: Routes = [
  { path: '', component: WelcomeSplashComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'setup-wizard',
    component: SetupWizardComponent,
    children: [
      { path: 'start-setup', component: StartSetupComponent },
      { path: 'name-entry', component: NameEntryComponent },
      { path: 'color-entry', component: ColorEntryComponent },
      { path: 'end-setup', component: EndSetupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
