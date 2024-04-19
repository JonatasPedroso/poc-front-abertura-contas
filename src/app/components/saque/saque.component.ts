import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SaqueService} from "../../services/saque/saque.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  saqueForm!: FormGroup;

  constructor(private fb: FormBuilder, private saqueService: SaqueService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.saqueForm = this.fb.group({
      conta: ['', Validators.required],
      valor: ['', Validators.required],
      dataSaque: ['', Validators.required],
    });
  }

  async submitForm() {
    if (this.saqueForm.valid) {
      try {
        const dataSaque = this.datePipe.transform(this.saqueForm.value.dataSaque, 'yyyy-MM-ddTHH:mm:ss');
        const dadosSaque = {...this.saqueForm.value, dataSaque};
        await this.saqueService.fazerSaque(dadosSaque);
        console.log('Saque realizado com sucesso!');

      } catch (error) {
        console.error('Erro ao fazer Saque:', error);

      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}
