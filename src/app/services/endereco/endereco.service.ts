import {Injectable} from '@angular/core';
import {apiUsuario} from "../../../lib/axios";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  async cadastrarEndereco(dadosEndereco: any): Promise<void> {
    try {
      await apiUsuario.post('/endereco/cadastro', {...dadosEndereco});
      console.log('Cadastro de endereço realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar telefone:', error);
      throw error;
    }
  }
}
