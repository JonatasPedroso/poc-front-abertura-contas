import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {ContaComponent} from "./components/conta/conta.component";
import {EnderecoComponent} from "./components/endereco/endereco.component";
import {TelefoneComponent} from "./components/telefone/telefone.component";
import {SaqueComponent} from "./components/saque/saque.component";
import {DepositoComponent} from "./components/deposito/deposito.component";
import {TransferenciaComponent} from "./components/transferencia/transferencia.component";
import {TabelaDepositoComponent} from "./components/tabela-deposito/tabela-deposito.component";
import {TabelaTransferenciaComponent} from "./components/tabela-transferencia/tabela-transferencia.component";
import {TabelaSaqueComponent} from "./components/tabela-saque/tabela-saque.component";
import {PesquisaDepositoComponent} from "./components/pesquisa-deposito/pesquisa-deposito.component";
import {PesquisaSaqueComponent} from "./components/pesquisa-saque/pesquisa-saque.component";
import {PesquisaTransferenciaComponent} from "./components/pesquisa-transferencia/pesquisa-transferencia.component";

const routes: Routes = [
  {
    path:'',
    component:UsuarioComponent
  },
  {
    path:'cadastrarconta',
    component:ContaComponent
  },
  {
    path:'cadastrarendereco',
    component:EnderecoComponent
  },
  {
    path:'cadastrartelefone',
    component:TelefoneComponent
  },
  {
    path:'fazersaque',
    component:SaqueComponent
  },
  {
    path:'fazerdeposito',
    component:DepositoComponent
  },
  {
    path:'fazertransferencia',
    component:TransferenciaComponent
  },
  {
    path:'listardepositos',
    component:TabelaDepositoComponent
  },
  {
    path:'listartransferencias',
    component:TabelaTransferenciaComponent
  },
  {
    path:'listarsaques',
    component:TabelaSaqueComponent
  },
  {
    path:'pesquisarsaque',
    component:PesquisaSaqueComponent
  },
  {
    path:'pesquisartransferencia',
    component:PesquisaTransferenciaComponent
  },
  {
    path:'pesquisardeposito',
    component:PesquisaDepositoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
