import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DepositoService} from "../../services/deposito/deposito.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  depositoForm!: FormGroup;

  constructor(private fb: FormBuilder, private depositoService: DepositoService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.depositoForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: ['', Validators.required],
      dataDeposito: ['', Validators.required],
    });
  }

  async submitForm() {
    if (this.depositoForm.valid) {
      try {
        const dataDeposito = this.datePipe.transform(this.depositoForm.value.dataDeposito, 'yyyy-MM-ddTHH:mm:ss');
        const dadosDeposito = {...this.depositoForm.value, dataDeposito};
        await this.depositoService.fazerDeposito(dadosDeposito);
        console.log('Depósito realizado com sucesso!');
      } catch (error) {
        console.error('Erro ao fazer depósito:', error);
      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
