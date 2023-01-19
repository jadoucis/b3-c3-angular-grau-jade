import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapDetailComponent } from './ldap-detail.component';

describe('LdapDetailComponent', () => {
  let component: LdapDetailComponent;
  let fixture: ComponentFixture<LdapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LdapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
