import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioIdServiceService} from "../../services/UsuarioIDServer/UsuarioIdService.service";
import {TelefoneService} from "../../services/telefone/telefone.service";

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {
  telefoneForm!: FormGroup;

  constructor(private fb: FormBuilder, private telefoneService: TelefoneService, private usuarioIdService: UsuarioIdServiceService) {
  }

  ngOnInit(): void {
    this.telefoneForm = this.fb.group({
      idUsuario: [''],
      ddd: ['', Validators.required],
      telefone: ['', Validators.required]
    });

    this.usuarioIdService.getUserId().subscribe(userId => {
      if (userId) {
        this.telefoneForm.patchValue({
          idUsuario: userId
        });
      }
    });
  }

  async submitForm() {
    if (this.telefoneForm.valid) {
      try {
        await this.telefoneService.cadastrarTelefone(this.telefoneForm.value);
        console.log('Cadastro de telefone realizado com sucesso!');
      } catch (error) {
        console.error('Erro ao cadastrar telefone:', error);
      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}

