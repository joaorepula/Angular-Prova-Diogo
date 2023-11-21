import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Categoria } from "src/app/models/categoria-model";
import { Tarefa } from "src/app/models/tarefa.model";

@Component({
  selector: "app-cadastrar-tarefa",
  templateUrl: "./cadastrar-tarefa.component.html",
  styleUrls: ["./cadastrar-tarefa.component.css"],
})
export class CadastrarTarefa {
  titulo: string = "";
  descricao: string = "";
  quantidade: number = 0;
  categoriaId: number = 0;
  categorias: Categoria[] = [];

  constructor(private client: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.client.get<Categoria[]>("https://localhost:7015/api/categoria/listar").subscribe({
      //A requição funcionou
      next: (categorias) => {
        this.categorias = categorias;
      },
      //A requição não funcionou
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  cadastrar(): void {
    let tarefa = {
      Descricao: this.descricao,
      Titulo: this.titulo,
      CategoriaId: this.categoriaId,
      tarefaId: 0,
      statusId: 1,
      statusDescricao: ""
    };
    console.log(tarefa)
    this.client.post<Tarefa>("https://localhost:7015/api/tarefa/cadastrar", tarefa).subscribe({
      //A requição funcionou
      next: (tarefa) => {
        console.log(tarefa)
      },
      //A requição não funcionou
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
