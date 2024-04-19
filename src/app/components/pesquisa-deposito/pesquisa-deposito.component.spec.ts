import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PesquisaDepositoComponent} from './pesquisa-deposito.component';

describe('PesquisaDepositoComponent', () => {
  let component: PesquisaDepositoComponent;
  let fixture: ComponentFixture<PesquisaDepositoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaDepositoComponent]
    });
    fixture = TestBed.createComponent(PesquisaDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
