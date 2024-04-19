import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PesquisaTransferenciaComponent} from './pesquisa-transferencia.component';

describe('PesquisaTransferenciaComponent', () => {
  let component: PesquisaTransferenciaComponent;
  let fixture: ComponentFixture<PesquisaTransferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaTransferenciaComponent]
    });
    fixture = TestBed.createComponent(PesquisaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
