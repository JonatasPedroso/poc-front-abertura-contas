import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabelaSaqueComponent} from './tabela-saque.component';

describe('TabelaSaqueComponent', () => {
  let component: TabelaSaqueComponent;
  let fixture: ComponentFixture<TabelaSaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaSaqueComponent]
    });
    fixture = TestBed.createComponent(TabelaSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
