import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from "@angular/common";

import {UsuarioComponent} from './components/usuario/usuario.component';
import {ContaComponent} from './components/conta/conta.component';
import {TransferenciaComponent} from './components/transferencia/transferencia.component';
import {SaqueComponent} from './components/saque/saque.component';
import {DepositoComponent} from './components/deposito/deposito.component';
import {TelefoneComponent} from "./components/telefone/telefone.component";
import {EnderecoComponent} from "./components/endereco/endereco.component";
import {MenuNavegacaoComponent} from './components/menu-navegacao/menu-navegacao.component';
import {TabelaDepositoComponent} from './components/tabela-deposito/tabela-deposito.component';
import {TabelaTransferenciaComponent} from './components/tabela-transferencia/tabela-transferencia.component';
import {TabelaSaqueComponent} from './components/tabela-saque/tabela-saque.component';
import {PesquisaDepositoComponent} from './components/pesquisa-deposito/pesquisa-deposito.component';
import {PesquisaSaqueComponent} from './components/pesquisa-saque/pesquisa-saque.component';
import {PesquisaTransferenciaComponent} from './components/pesquisa-transferencia/pesquisa-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ContaComponent,
    TelefoneComponent,
    TransferenciaComponent,
    SaqueComponent,
    DepositoComponent,
    EnderecoComponent,
    MenuNavegacaoComponent,
    TabelaDepositoComponent,
    TabelaTransferenciaComponent,
    TabelaSaqueComponent,
    PesquisaDepositoComponent,
    PesquisaSaqueComponent,
    PesquisaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FieldsetModule,
    InputTextModule,
    KeyFilterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    DatePipe,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
