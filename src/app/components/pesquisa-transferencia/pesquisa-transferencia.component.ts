import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {TransferenciaService} from "../../services/transferencia/transferenciaservice.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-pesquisa-transferencia',
  templateUrl: './pesquisa-transferencia.component.html',
  styleUrls: ['./pesquisa-transferencia.component.css']
})
export class PesquisaTransferenciaComponent {
  transferenciaForm: FormGroup;
  transferencia: any;

  constructor(private formBuilder: FormBuilder, private transferenciaService: TransferenciaService, private datePipe: DatePipe) {
    this.transferenciaForm = this.formBuilder.group({
      idTransferenciaField: ['']
    });
  }

  async search() {
    const idTransferencia = this.transferenciaForm.value.idTransferenciaField;
    try {
      this.transferencia = await this.transferenciaService.pesquisarTransferencia(idTransferencia);
      this.transferencia.dataTransferencia = this.datePipe.transform(this.transferencia.dataTransferencia, 'dd/MM/yyyy HH:mm:ss');
    } catch (error) {
      await Swal.fire({
        title: "Erro!",
        text: `Erro ao pesquisar transferência: ${error}`,
        icon: "error"
      });
    }
  }
}
