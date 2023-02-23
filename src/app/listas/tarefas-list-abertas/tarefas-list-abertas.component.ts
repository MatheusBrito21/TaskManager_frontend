import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Tarefa } from 'src/app/models/tarefa-model';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas-list-abertas',
  templateUrl: './tarefas-list-abertas.component.html',
  styleUrls: ['./tarefas-list-abertas.component.css']
})
export class TarefasListAbertasComponent {
  ELEMEMENT_DATA:Tarefa[] = []

  displayedColumns: string[] = ['titulo', 'desc', 'dataIn', 'dataEnd','status'];
  dataSource = new MatTableDataSource<Tarefa>(this.ELEMEMENT_DATA);

  
  constructor(private service:TarefaService){
   }
  ngOnInit(): void {
    this.findOpen()
  }

  findOpen(){
    this.service.findAbertas().subscribe(resposta=>{
      this.ELEMEMENT_DATA=resposta;
      this.dataSource = new MatTableDataSource<Tarefa>(resposta);
    })
  }
}
