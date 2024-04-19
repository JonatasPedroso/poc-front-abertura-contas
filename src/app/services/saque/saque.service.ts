import {Injectable} from '@angular/core';
import {apiConta} from "../../../lib/axios";

@Injectable({
  providedIn: 'root'
})
export class SaqueService {

  constructor() {
  }

  async listarSaques(): Promise<any[]> {
    try {
      const response = await apiConta.get("/saque");
      return response.data;
    } catch (error) {
      console.error('Erro ao listar saques:', error);
      throw error;
    }
  }

  async pesquisarSaque(idSaque: string): Promise<any[]> {
    try {
      const response = await apiConta.get(`/saque/${idSaque}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar saque:', error);
      throw error;
    }
  }

  async fazerSaque(dadosSaque: any): Promise<void> {
    try {
      await apiConta.post('/saque/sacar', dadosSaque);
    } catch (error) {
      console.error('Erro ao fazer saque:', error);
      throw error;
    }
  }
}



