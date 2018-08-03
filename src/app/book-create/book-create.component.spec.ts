import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { /*FormsModule,*/ ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookCreateComponent } from './book-create.component';

// import { AngularMatModule } from '../angular-material.module'
// import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { MatInputModule } from '@angular/material';
// And what about mat-icon ?
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ /*FormsModule,*/ ReactiveFormsModule, HttpClientModule, RouterTestingModule, MatInputModule, BrowserAnimationsModule ],
      declarations: [ BookCreateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      // providers: [
      //   {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
      // ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
