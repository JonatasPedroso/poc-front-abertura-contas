import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioIdServiceService} from "../../services/UsuarioIDServer/UsuarioIdService.service";
import {TelefoneService} from "../../services/telefone/telefone.service";
import Swal from "sweetalert2";

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
        await Swal.fire({
          title: "Sucesso!",
          text: "Cadastro de telefone realizado com sucesso!",
          icon: "success"
        });
      } catch (error) {
        await Swal.fire({
          title: "Erro!",
          text: `Erro ao cadastrar telefone: ${error}`,
          icon: "error"
        });
      }
    } else {
      await Swal.fire({
        title: "Erro!",
        text: "Por favor, preencha o formulário corretamente.",
        icon: "warning"
      });
    }
  }
}

