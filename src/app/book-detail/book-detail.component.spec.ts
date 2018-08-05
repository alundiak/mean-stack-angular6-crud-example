import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDetailComponent } from './book-detail.component';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async () => {
    console.log('book-detail beforeEach 1 (async)');
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, HttpClientModule ],
      declarations: [ BookDetailComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  } );

  beforeEach(() => {
    console.log('book-detail beforeEach 2 (=>)');
    // fixture = TestBed.createComponent(BookDetailComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
