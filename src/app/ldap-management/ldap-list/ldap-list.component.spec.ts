import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapListComponent } from './ldap-list.component';

describe('LdapListComponent', () => {
  let component: LdapListComponent;
  let fixture: ComponentFixture<LdapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LdapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
