import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lista } from '../model/lista.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  produtos:Lista[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Lista[]>('http://localhost:3000/lista/').subscribe(results => this.produtos = results);
  }

  deletar(id:any){
    this.http.delete('http://localhost:3000/lista/' + id).subscribe();
    setTimeout(this.refresh, 1000);
  }

  refresh(){
    location.reload();
  }
}