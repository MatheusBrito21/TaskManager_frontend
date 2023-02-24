import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AtualizarTarefaComponent } from './components/tarefas/atualizar-tarefa/atualizar-tarefa.component';
import { CriarTarefaComponent } from './components/tarefas/criar-tarefa/criar-tarefa.component';
import { DeletarTarefaComponent } from './components/tarefas/deletar-tarefa/deletar-tarefa.component';
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
      {path:'criar',component:CriarTarefaComponent},
      {path:'todas/update/:id',component:AtualizarTarefaComponent},
      {path:'todas/delete/:id',component:DeletarTarefaComponent},
      {path:'fechadas/update/:id',component:AtualizarTarefaComponent},
      {path:'fechadas/update/:id',component:AtualizarTarefaComponent},
      {path:'fechadas/delete/:id',component:DeletarTarefaComponent},
      {path:'abertas/update/:id',component:AtualizarTarefaComponent},
      {path:'abertas/update/:id',component:AtualizarTarefaComponent},
      {path:'abertas/delete/:id',component:DeletarTarefaComponent},
    ]},
    

  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
