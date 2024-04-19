import {Injectable} from '@angular/core';
import {apiUsuario} from "../../../lib/axios";

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor() {
  }

  async cadastrarTelefone(dadosTelefone: any): Promise<void> {
    try {
      await apiUsuario.post('/telefone/cadastro', {...dadosTelefone});
      console.log('Cadastro de telefone realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar telefone:', error);
      throw error;
    }
  }

}
