import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SaqueService} from "../../services/saque/saque.service";
import {DatePipe} from "@angular/common";

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
      console.error('Erro ao pesquisar saque:', error);
    }
  }
}
