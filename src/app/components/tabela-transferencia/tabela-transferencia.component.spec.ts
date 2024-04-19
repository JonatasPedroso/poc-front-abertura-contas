import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabelaTransferenciaComponent} from './tabela-transferencia.component';

describe('TabelaTransferenciaComponent', () => {
  let component: TabelaTransferenciaComponent;
  let fixture: ComponentFixture<TabelaTransferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaTransferenciaComponent]
    });
    fixture = TestBed.createComponent(TabelaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
