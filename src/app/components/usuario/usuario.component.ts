import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioServiceService} from "../../services/usuario/usuario-service.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioServiceService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      cnpj: ['', Validators.required]
    });
  }

  async submitForm() {
    if (this.usuarioForm.valid) {
      try {
        const dataNascimento = this.datePipe.transform(this.usuarioForm.value.dataNascimento, 'yyyy-MM-ddTHH:mm:ss');
        const dadosUsuario = {...this.usuarioForm.value, dataNascimento};
        await this.usuarioService.cadastrarUsuario(dadosUsuario);
        console.log('Cadastro realizado com sucesso!');

      } catch (error) {
        console.error('Erro ao fazer Cadastro:', error);

      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
