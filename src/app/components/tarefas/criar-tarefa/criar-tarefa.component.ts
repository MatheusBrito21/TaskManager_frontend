import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(private service:TarefaService){}

  titulo:FormControl = new FormControl(null,Validators.minLength(3));
  dataInicio:FormControl = new FormControl(null,Validators.required);
  dataTermino:FormControl = new FormControl(null,Validators.required);

  criarTarefa():void{
    this.service.create(this.tarefa).subscribe(resposta=>{
      console.log('Tarefa cadastrada!')
    })
  }
}


