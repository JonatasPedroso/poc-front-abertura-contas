import {Injectable} from '@angular/core';
import {apiConta} from "../../../lib/axios";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor() {
  }

  async listarTransferencias(): Promise<any[]> {
    try {
      const response = await apiConta.get("/transferencia");
      return response.data;
    } catch (error) {
      console.error('Erro ao listar transferencias:', error);
      throw error;
    }
  }

  async pesquisarTransferencia(idTransferencia: string): Promise<any[]> {
    try {
      const response = await apiConta.get(`/transferencia/${idTransferencia}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao listar saques:', error);
      throw error;
    }
  }

  async fazerTransferencia(dadosTransferencia: any): Promise<void> {
    try {
      await apiConta.post('transferencia/transferir', dadosTransferencia);
    } catch (error) {
      console.error('Erro ao fazer transferencia:', error);
      throw error;
    }
  }
}
