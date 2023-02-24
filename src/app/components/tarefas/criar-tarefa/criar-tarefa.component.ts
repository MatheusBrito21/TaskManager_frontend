import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa-model';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent {

  tarefa: Tarefa={
    id:'',
    titulo:'',
    descricao:'',
    dataInicio:'',
    dataTermino:'',
    status:'ABERTA'
  }

  constructor(private service:TarefaService){
    
  }

  criarTarefa():void{
    this.service.create(this.tarefa).subscribe(resposta=>{
      console.log('Tarefa cadastrada!')
    })
  }
}


