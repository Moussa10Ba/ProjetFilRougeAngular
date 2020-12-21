import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule, MatListOption} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatRadioButton} from '@angular/material/radio';


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatGridListModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
