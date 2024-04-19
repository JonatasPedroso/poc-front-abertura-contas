import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DepositoService} from "../../services/deposito/deposito.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-pesquisa-deposito',
  templateUrl: './pesquisa-deposito.component.html',
  styleUrls: ['./pesquisa-deposito.component.css']
})
export class PesquisaDepositoComponent {
  depositoForm: FormGroup;
  deposito: any;

  constructor(private formBuilder: FormBuilder, private depositoService: DepositoService, private datePipe: DatePipe) {

    this.depositoForm = this.formBuilder.group({
      idDepositoField: ['']
    });
  }


  async search() {
    const idDeposito = this.depositoForm.value.idDepositoField;
    try {
      this.deposito = await this.depositoService.pesquisarDeposito(idDeposito);
      this.deposito.dataDeposito = this.datePipe.transform(this.deposito.dataDeposito, 'dd/MM/yyyy HH:mm:ss');
    } catch (error) {
      await Swal.fire({
        title: "Erro!",
        text: `Erro ao pesquisar deposito: ${error}`,
        icon: "error"
      });
    }
  }
}
