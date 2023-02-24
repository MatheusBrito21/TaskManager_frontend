import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private service:TarefaService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private router: Router){}

  titulo:FormControl = new FormControl(null,Validators.minLength(3));
  descricao: FormControl = new FormControl(null, Validators.maxLength(100))
  dataInicio:FormControl = new FormControl(null,Validators.required);
  dataTermino:FormControl = new FormControl(null,Validators.required);

  criarTarefa():void{
    this.service.create(this.tarefa).subscribe(resposta=>{
      this.toast.success('Tarefa criada com sucesso!','Nova tarefa.');
      this.router.navigate(['tarefas/todas'])
    })
  }

  validaCampos(): boolean{
    return this.titulo.valid && this.dataInicio.valid && this.dataTermino.valid
  }
}


