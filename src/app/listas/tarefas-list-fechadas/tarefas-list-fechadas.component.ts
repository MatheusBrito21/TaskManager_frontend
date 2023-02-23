import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Tarefa } from 'src/app/models/tarefa-model';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas-list-fechadas',
  templateUrl: './tarefas-list-fechadas.component.html',
  styleUrls: ['./tarefas-list-fechadas.component.css']
})
export class TarefasListFechadasComponent {
  ELEMEMENT_DATA:Tarefa[] = []

  displayedColumns: string[] = ['titulo', 'desc', 'dataIn', 'dataEnd','status','acoes'];
  dataSource = new MatTableDataSource<Tarefa>(this.ELEMEMENT_DATA);

  
  constructor(private service:TarefaService){
   }
  ngOnInit(): void {
    this.findClose()
  }

  findClose(){
    this.service.findFechadas().subscribe(resposta=>{
      this.ELEMEMENT_DATA=resposta;
      this.dataSource = new MatTableDataSource<Tarefa>(resposta);
    })
  }
}
