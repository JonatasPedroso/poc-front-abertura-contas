import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabelaDepositoComponent} from './tabela-deposito.component';

describe('TabelaDepositoComponent', () => {
  let component: TabelaDepositoComponent;
  let fixture: ComponentFixture<TabelaDepositoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaDepositoComponent]
    });
    fixture = TestBed.createComponent(TabelaDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
