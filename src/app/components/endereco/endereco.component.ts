import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EnderecoService} from "../../services/endereco/endereco.service";
import {UsuarioIdServiceService} from "../../services/UsuarioIDServer/UsuarioIdService.service";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  enderecoForm!: FormGroup;

  constructor(private fb: FormBuilder, private enderecoService: EnderecoService, private usuarioIdService: UsuarioIdServiceService) { }

  ngOnInit(): void {
    this.enderecoForm = this.fb.group({
      idUsuario: [''],
      rua: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      numero: ['', Validators.required],
      uf: ['', Validators.required],
    });

    this.usuarioIdService.getUserId().subscribe(userId => {
      if (userId) {
        this.enderecoForm.patchValue({
          idUsuario: userId
        });
      }
    });
  }

  async submitForm() {
    if (this.enderecoForm.valid) {
      try {
        await this.enderecoService.cadastrarEndereco(this.enderecoForm.value);
        console.log('Cadastro de telefone realizado com sucesso!');
      } catch (error) {
        console.error('Erro ao cadastrar telefone:', error);
      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
