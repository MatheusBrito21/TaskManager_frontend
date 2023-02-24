import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa-model';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-atualizar-tarefa',
  templateUrl: './atualizar-tarefa.component.html',
  styleUrls: ['./atualizar-tarefa.component.css']
})

export class AtualizarTarefaComponent {
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

  titulo:FormControl = new FormControl(null,Validators.minLength(3));
  descricao: FormControl = new FormControl(null, Validators.maxLength(100))
  dataInicio:FormControl = new FormControl(null,Validators.required);
  dataTermino:FormControl = new FormControl(null,Validators.required);
  status:FormControl = new FormControl(null,Validators.required);


  findById():void{
    this.service.findById(this.tarefa.id).subscribe(resposta=>{
      this.tarefa = resposta
      console.log(this.tarefa.id,this.tarefa.titulo)
    })
  }

  update():void{
    this.service.update(this.tarefa).subscribe(resposta=>{
      this.tarefa = resposta
      console.log('Tarefa encontrada!')
    })
  }

  delete():void{
    this.service.delete(this.tarefa).subscribe(resposta=>{
      this.tarefa = resposta
      console.log('Tarefa deletada!')
    })
  }

  setStatus(status: string): void{
      this.tarefa.status = status;
    }

  validaCampos(): boolean{
    return this.titulo.valid && this.dataInicio.valid && this.dataTermino.valid
  }
}

