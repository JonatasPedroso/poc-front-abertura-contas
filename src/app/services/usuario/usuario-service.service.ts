import {Injectable} from '@angular/core';
import {apiUsuario} from "../../../lib/axios";
import {UsuarioIdServiceService} from "../UsuarioIDServer/UsuarioIdService.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private usuarioIdService: UsuarioIdServiceService) { }

  async cadastrarUsuario(dadosUsuario: any): Promise<void> {
    try {
      const response = await apiUsuario.post('/usuario/cadastro', dadosUsuario);
      const userID =  response.data.idUsuario;
      this.usuarioIdService.setUserId(userID);
    } catch (error) {
      console.error('Erro ao cadastrar Usuario:', error);
      throw error;
    }
  }
}
