import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookCreateComponent } from './book-create.component';

describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(async () => {
    console.log('book-create beforeEach 1 (async)');
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, HttpClientModule, MatInputModule, BrowserAnimationsModule ],
      declarations: [ BookCreateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  beforeEach(() => {
    console.log('book-create beforeEach 2 (=>)');
    // fixture = TestBed.createComponent(BookCreateComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
