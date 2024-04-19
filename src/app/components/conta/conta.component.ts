import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContaService} from "../../services/conta/conta.service";
import {UsuarioIdServiceService} from "../../services/UsuarioIDServer/UsuarioIdService.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  contaForm!: FormGroup;

  constructor(private fb: FormBuilder, private contaService: ContaService, private usuarioIdService: UsuarioIdServiceService ) {
  }

  ngOnInit(): void {
    this.contaForm = this.fb.group({
      idUsuario: [''],
      numero: ['', Validators.required],
      agencia: ['', Validators.required],
      banco: ['', Validators.required]
    });

    this.usuarioIdService.getUserId().subscribe(userId => {
      if (userId) {
        this.contaForm.patchValue({
          idUsuario: userId
        });
      }
    });
  }

  async submitForm() {
    if (this.contaForm.valid) {
      try {
        await this.contaService.cadastrarConta(this.contaForm.value);
        await Swal.fire({
          title: "Sucesso!",
          text: "Cadastro de Conta realizado com sucesso!",
          icon: "success"
        });
      } catch (error) {
        await Swal.fire({
          title: "Erro!",
          text: `Erro ao cadastrar Conta: ${error}`,
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
