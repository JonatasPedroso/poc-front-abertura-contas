import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SaqueService} from "../../services/saque/saque.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-pesquisa-saque',
  templateUrl: './pesquisa-saque.component.html',
  styleUrls: ['./pesquisa-saque.component.css']
})
export class PesquisaSaqueComponent {
  saqueForm: FormGroup;
  saque: any;

  constructor(private formBuilder: FormBuilder, private saqueService: SaqueService, private datePipe: DatePipe) {

    this.saqueForm = this.formBuilder.group({
      idSaqueField: ['']
    });
  }


  async search() {
    const idSaque = this.saqueForm.value.idSaqueField;
    try {
      this.saque = await this.saqueService.pesquisarSaque(idSaque);
      this.saque.dataSaque = this.datePipe.transform(this.saque.dataSaque, 'dd/MM/yyyy HH:mm:ss');
    } catch (error) {
      await Swal.fire({
        title: "Erro!",
        text: `Erro ao pesquisar saque: ${error}`,
        icon: "error"
      });
    }
  }
}
