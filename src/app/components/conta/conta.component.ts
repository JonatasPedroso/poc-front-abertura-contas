import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  contaForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contaForm = this.fb.group({
      numero: ['', Validators.required],
      agencia: ['', Validators.required],
      banco: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contaForm.valid) {
      console.log(this.contaForm.value);
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
