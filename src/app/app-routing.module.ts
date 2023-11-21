import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaListarComponent } from "./pages/listagem-tarefas/listagem-tarefas.component";
import { CadastrarTarefa } from "./pages/cadastrar-tarefa/cadastrar-tarefa.component";
import { TarefaListarConcluidasComponent } from "./pages/listagem-tarefas-concluidas/listagem-tarefas-concluidas.component";
import { TarefaListarSemComponent } from './pages/listagem-tarefas-sem/listagem-tarefas-sem.component';



const routes: Routes = [
  {
    path : "",
    component : TarefaListarComponent
  },
  {
    path : "cadastro",
    component : CadastrarTarefa
  },
  {
    path : "concluidas",
    component : TarefaListarConcluidasComponent
  },
  {
    path : "sem",
    component : TarefaListarSemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
