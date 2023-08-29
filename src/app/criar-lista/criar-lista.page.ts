import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lista } from '../model/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-lista',
  templateUrl: './criar-lista.page.html',
  styleUrls: ['./criar-lista.page.scss'],
})

export class CriarListaPage{
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  produtos:Lista[] = [];

  nameButton = "Adicionar";
  dados = {
    id: "",
    produto: "",
    quantidade: ""
};

  constructor(
    private lista:HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lista.get<Lista[]>('http://localhost:3000/lista').subscribe(results => this.produtos = results );
  }

  cadastro(form:any){
    this.lista.post('http://localhost:3000/lista/', form.value, this.httpOptions).subscribe();
    setTimeout(this.refresh, 1000)
    this.router.navigate(['/'])
  }

  refresh(){
    location.reload();
  }
}