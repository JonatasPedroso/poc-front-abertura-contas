import {Component, OnInit} from '@angular/core';
import {DepositoService} from "../../services/deposito/deposito.service";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-tabela-deposito',
  templateUrl: './tabela-deposito.component.html',
  styleUrls: ['./tabela-deposito.component.css']
})
export class TabelaDepositoComponent implements OnInit {
  depositos: any[] = [];

  constructor(private depositoService: DepositoService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.depositoService.listarDepositos().then((depositos: any[]) => {
      this.depositos = depositos.map(deposito => {
        deposito.dataDeposito = this.datePipe.transform(deposito.dataDeposito, 'dd/MM/yyyy 0H:0M:0S')
        return deposito;
      });
    }).catch(error => {
      Swal.fire({
        title: "Erro!",
        text: `Erro ao carregar os depositos: ${error}`,
        icon: "error"
      });
    });
  }
}
