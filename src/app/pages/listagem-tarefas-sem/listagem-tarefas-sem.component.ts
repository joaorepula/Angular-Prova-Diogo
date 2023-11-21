import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';

import { Router } from "@angular/router";

@Component({
  selector: 'app-tarefas-listar-concluidas',
  templateUrl: './listagem-tarefas-sem.component.html',
  styleUrls: ['./listagem-tarefas-sem.component.css']
})
export class TarefaListarSemComponent {

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
    this.client.get<Tarefa[]>("https://localhost:7015/api/tarefa/listarNaoConcluidas")
      .subscribe({
        next: (tarefa) => {
          this.tarefas = tarefa;
        }, 
        error: (erro) => {
          console.log(erro);
        }
      })
  }
}
