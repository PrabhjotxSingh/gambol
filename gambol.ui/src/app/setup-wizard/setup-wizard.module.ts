import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupWizardComponent } from './setup-wizard.component';
import { AppRoutingModule } from '../app-routing.module';
import { StartSetupComponent } from './start-setup/start-setup.component';
import { NameEntryComponent } from './name-entry/name-entry.component';
import { ColorEntryComponent } from './color-entry/color-entry.component';
import { EndSetupComponent } from './end-setup/end-setup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SetupWizardComponent,
    StartSetupComponent,
    NameEntryComponent,
    ColorEntryComponent,
    EndSetupComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class SetupWizardModule {}
