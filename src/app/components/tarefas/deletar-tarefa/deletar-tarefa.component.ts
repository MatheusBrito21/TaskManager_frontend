import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa-model';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-deletar-tarefa',
  templateUrl: './deletar-tarefa.component.html',
  styleUrls: ['./deletar-tarefa.component.css']
})
export class DeletarTarefaComponent {
  tarefa: Tarefa={
    
    titulo:'',
    descricao:'',
    dataInicio:'',
    dataTermino:'',
    status:'ABERTA'
  }

  constructor(private service:TarefaService,private route: ActivatedRoute){}

  ngOnInit():void{
    this.tarefa.id = this.route.snapshot.paramMap.get('id')
    this.findById()
  }

  
  findById():void{
    this.service.findById(this.tarefa.id).subscribe(resposta=>{
      this.tarefa = resposta
      console.log(this.tarefa.id,this.tarefa.titulo)
    })
  }


  delete():void{
    this.service.delete(this.tarefa.id).subscribe(resposta=>{
      console.log('Tarefa deletada!')
    })
  }

 
}
