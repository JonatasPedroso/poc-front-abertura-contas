import {Injectable} from '@angular/core';
import {apiConta} from "../../../lib/axios";
import {UsuarioIdServiceService} from "../UsuarioIDServer/UsuarioIdService.service";

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private usuarioIdService: UsuarioIdServiceService) {
  }

  async cadastrarConta(dadosConta: any): Promise<void> {
    try {
      await apiConta.post('/conta/cadastro', dadosConta);
    } catch (error) {
      console.error('Erro ao cadastrar Usuario:', error);
      throw error;
    }
  }
}
