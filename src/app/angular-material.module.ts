import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatSortModule,
  MatChipsModule,
  MatTabsModule
} from '@angular/material';

// import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    // MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatTabsModule
  ],
  exports:
  [MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, // needed to fox 'errorStateMatcher' issue
    MatSidenavModule,
    // MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatTabsModule
  ]
})
export class AngularMatModule { }
