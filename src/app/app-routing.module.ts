import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }