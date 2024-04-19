import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from "../../services/usuario/usuario-service.service";
import { DatePipe } from "@angular/common";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioServiceService,
    private datePipe: DatePipe,
    private router: Router
  ) {
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
        await Swal.fire({
          title: "Sucesso!",
          text: "Cadastro realizado com sucesso!",
          icon: "success"
        });
        await this.router.navigate(['/cadastrarendereco']);
      } catch (error) {
        await Swal.fire({
          title: "Erro!",
          text: `Erro ao realizar cadastro: ${error}`,
          icon: "error"
        });
      }
    } else {
      await Swal.fire({
        title: "Atenção!",
        text: "Por favor, preencha o formulário corretamente.",
        icon: "warning"
      });
    }
  }
}
