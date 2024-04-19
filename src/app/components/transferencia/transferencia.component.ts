import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransferenciaService} from "../../services/transferencia/transferenciaservice.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  transferenciaForm!: FormGroup;

  constructor(private fb: FormBuilder, private transferenciaService: TransferenciaService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.transferenciaForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: ['', Validators.required],
      dataTransferencia: ['', Validators.required]
    });
  }

  async submitForm() {
    if (this.transferenciaForm.valid) {
      try {
        const dataTransferencia = this.datePipe.transform(this.transferenciaForm.value.dataTransferencia, 'yyyy-MM-ddTHH:mm:ss');
        const dadosTransferencia = {...this.transferenciaForm.value, dataTransferencia};
        await this.transferenciaService.fazerTransferencia(dadosTransferencia);
        console.log('Transferencia realizado com sucesso!');

      } catch (error) {
        console.error('Erro ao fazer transferencia:', error);

      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
