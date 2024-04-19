import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PesquisaSaqueComponent} from './pesquisa-saque.component';

describe('PesquisaSaqueComponent', () => {
  let component: PesquisaSaqueComponent;
  let fixture: ComponentFixture<PesquisaSaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaSaqueComponent]
    });
    fixture = TestBed.createComponent(PesquisaSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
