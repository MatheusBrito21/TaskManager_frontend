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
  findById(id:any): Observable<Tarefa>{
    return this.http.get<Tarefa>(`http://localhost:8080/tarefas/${id}`);
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

  create(tarefa: Tarefa):Observable<Tarefa>{
    return this.http.post<Tarefa>('http://localhost:8080/tarefas',tarefa);
  }

  update(tarefa:Tarefa):Observable<Tarefa>{
    return this.http.put<Tarefa>(`http://localhost:8080/tarefas/update/${tarefa.id}`,tarefa)
  }

  delete(id:any):Observable<Tarefa>{
    return this.http.delete<Tarefa>(`http://localhost:8080/tarefas/delete/${id}`)
  }

 
}
