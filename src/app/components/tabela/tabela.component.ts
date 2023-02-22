import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status:string;

 /*dados do backend 
  private Integer id;
	private LocalDateTime dataInicio;
	private LocalDateTime dataTermino;
	private String titulo;
	private String descricao;
	private Status status;
  */
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'Aberta'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'Aberta'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'Aberta'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'Aberta'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:'Aberta'},
  
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})

export class TabelaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','status'];
  dataSource = ELEMENT_DATA;
}