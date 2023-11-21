import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';

import { Router } from "@angular/router";

@Component({
  selector: 'app-tarefas-listar',
  templateUrl: './listagem-tarefas.component.html',
  styleUrls: ['./listagem-tarefas.component.css']
})
export class TarefaListarComponent {

  TarefaId: number = 0;
  UsuarioId: number = 0;
  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient, private router: Router){ 
    /*const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['usuario']) {
      this.usuario = state['usuario'] as Usuario;
    }*/
  }

  ngOnInit() : void{
    this.client.get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        next: (tarefa) => {
          this.tarefas = tarefa;
        }, 
        error: (erro) => {
          console.log(erro);
        }
      })
  }

  redirecionar(): void {
    this.router.navigate(["cadastro"]);
  }
  redirecionarSemFim(): void {
    this.router.navigate(["concluidas"]);
  }
  redirecionarComFim(): void {
    this.router.navigate(["sem"]);
  }
}
