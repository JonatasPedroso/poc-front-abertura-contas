import {Component, OnInit} from '@angular/core';
import {SaqueService} from "../../services/saque/saque.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tabela-saque',
  templateUrl: './tabela-saque.component.html',
  styleUrls: ['./tabela-saque.component.css']
})
export class TabelaSaqueComponent implements OnInit {
  saques: any[] = [];


  constructor(private saqueService: SaqueService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.saqueService.listarSaques().then((saques: any[]) => {
      this.saques = saques.map(saque => {
        saque.dataSaque = this.datePipe.transform(saque.dataSaque, 'dd/MM/yyyy 0H:0M:0S');
        return saque;
      });
    }).catch(error => {
      console.error('Erro ao carregar os saques:', error);
    });
  }
}
