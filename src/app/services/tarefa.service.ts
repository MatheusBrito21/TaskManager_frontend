import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tarefa } from '../models/tarefa-model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>('http://localhost:8080/tarefas');
  }

  findAbertas(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>('http://localhost:8080/tarefas/abertas');
  }

  findAndamento(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>('http://localhost:8080/tarefas/andamento');
  }

  findFechadas(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>('http://localhost:8080/tarefas/fechadas');
  }

}
