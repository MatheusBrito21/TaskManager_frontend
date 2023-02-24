import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { CriarTarefaComponent } from './components/tarefas/criar-tarefa/criar-tarefa.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { TarefasListAbertasComponent } from './listas/tarefas-list-abertas/tarefas-list-abertas.component';
import { TarefasListFechadasComponent } from './listas/tarefas-list-fechadas/tarefas-list-fechadas.component';
import { TarefasListTodasComponent } from './listas/tarefas-list-todas/tarefas-list-todas.component';

const routes: Routes = [
  {path:'', component:NavComponent,children:[
    {path:'', component:HomeComponent},
    {path:'tarefas', component:TarefasComponent, children:[
      {path:'todas',component:TarefasListTodasComponent},
      {path:'abertas',component:TarefasListAbertasComponent},
      {path:'fechadas',component:TarefasListFechadasComponent},
      {path:'criar',component:CriarTarefaComponent}
    ]},
    {path:'progresso', component:ProgressoComponent}
  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
