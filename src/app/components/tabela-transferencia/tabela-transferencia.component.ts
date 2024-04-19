import {Component, OnInit} from '@angular/core';
import {TransferenciaService} from "../../services/transferencia/transferenciaservice.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tabela-transferencia',
  templateUrl: './tabela-transferencia.component.html',
  styleUrls: ['./tabela-transferencia.component.css']
})
export class TabelaTransferenciaComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.transferenciaService.listarTransferencias().then((transferencias: any[]) => {
      this.transferencias = transferencias.map(transferencia => {
        transferencia.dataTransferencia = this.datePipe.transform(transferencia.dataTransferencia, 'dd/MM/yyyy 0H:0M:0S')
        return transferencia;
      });
    }).catch(error => {
      console.error('Erro ao carregar as transferencias:', error);
    });
  }
}
