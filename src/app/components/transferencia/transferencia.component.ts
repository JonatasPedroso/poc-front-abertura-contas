import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransferenciaService} from "../../services/transferencia/transferenciaservice.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";

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
        await Swal.fire({
          title: "Sucesso!",
          text: "Transferencia realizado com sucesso!",
          icon: "success"
        });
      } catch (error) {
        await Swal.fire({
          title: "Erro!",
          text: `Erro ao fazer transferencia: ${error}`,
          icon: "error"
        });
      }
    } else {
      await Swal.fire({
        title: "Erro!",
        text: "Por favor, preencha o formulário corretamente.",
        icon: "warning"
      });
    }
  }
}
