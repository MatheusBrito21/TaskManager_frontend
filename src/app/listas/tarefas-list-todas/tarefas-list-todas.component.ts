import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Tarefa } from 'src/app/models/tarefa-model';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas-list-todas',
  templateUrl: './tarefas-list-todas.component.html',
  styleUrls: ['./tarefas-list-todas.component.css']
})


export class TarefasListTodasComponent implements OnInit {
  ELEMEMENT_DATA:Tarefa[] = []

  displayedColumns: string[] = ['titulo', 'desc', 'dataIn', 'dataEnd','status','acoes'];
  dataSource = new MatTableDataSource<Tarefa>(this.ELEMEMENT_DATA);

  
  constructor(private service:TarefaService){
   }
  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.service.findAll().subscribe(resposta=>{
      this.ELEMEMENT_DATA=resposta;
      this.dataSource = new MatTableDataSource<Tarefa>(resposta);
    })
  }
}



/*
  TASK:Tarefa[] = [
    {
      id:1,
      dataInicio:Date.now(),
      dataTermino:Date.now(),
      titulo:'Teste',
      descricao:'Descricao',
      status:['Aberta']
    }
  ]
   
  
  displayedColumns: string[] = ['titulo', 'desc', 'dataIn', 'dataEnd','status'];
  dataSource = new MatTableDataSource<Tarefa>(this.TASK);*/