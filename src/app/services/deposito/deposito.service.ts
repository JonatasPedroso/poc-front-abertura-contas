import {Injectable} from '@angular/core';
import {apiConta} from "../../../lib/axios";

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  constructor() {
  }

  async listarDepositos(): Promise<any[]> {
    try {
      const response = await apiConta.get("/deposito");
      return response.data;
    } catch (error) {
      console.error('Erro ao listar depositos:', error);
      throw error;
    }
  }

  async pesquisarDeposito(idDeposito: string): Promise<any[]> {
    try {
      const response = await apiConta.get(`/deposito/${idDeposito}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar deposito:', error);
      throw error;
    }
  }

  async fazerDeposito(dadosDeposito: any): Promise<void> {
    try {

      await apiConta.post('/deposito/depositar', dadosDeposito);

    } catch (error) {
      console.error('Erro ao fazer depósito:', error);
      throw error;
    }
  }
}
