import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

const routes: Routes = [
  {path:'', component:NavComponent,children:[
    {path:'', component:HomeComponent},
    {path:'tarefas', component:TarefasComponent, children:[
      {path:'todas',component:TabelaComponent},
      {path:'abertas',component:TabelaComponent},
      {path:'andamento',component:TabelaComponent},
      {path:'fechadas',component:TabelaComponent}
    ]},
    {path:'progresso', component:ProgressoComponent}
  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
