import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';

//import para requisições http
import { HttpClientModule } from '@angular/common/http';


//imports dos componentes do projeto
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { HomeComponent } from './components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { TarefasListTodasComponent } from './listas/tarefas-list-todas/tarefas-list-todas.component';
import { TarefasListAbertasComponent } from './listas/tarefas-list-abertas/tarefas-list-abertas.component';
import { TarefasListFechadasComponent } from './listas/tarefas-list-fechadas/tarefas-list-fechadas.component';
import { CriarTarefaComponent } from './components/tarefas/criar-tarefa/criar-tarefa.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AtualizarTarefaComponent } from './components/tarefas/atualizar-tarefa/atualizar-tarefa.component';
import { DeletarTarefaComponent } from './components/tarefas/deletar-tarefa/deletar-tarefa.component';
import {MatRadioModule} from '@angular/material/radio';
 





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TarefasComponent,
    ProgressoComponent,
    HomeComponent,
    TarefasListTodasComponent,
    TarefasListAbertasComponent,
    TarefasListFechadasComponent,
    CriarTarefaComponent,
    AtualizarTarefaComponent,
    DeletarTarefaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
