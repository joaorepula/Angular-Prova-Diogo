import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaListarComponent } from "./pages/listagem-tarefas/listagem-tarefas.component";
import { CadastrarTarefa } from "./pages/cadastrar-tarefa/cadastrar-tarefa.component";
import { TarefaListarConcluidasComponent } from "./pages/listagem-tarefas-concluidas/listagem-tarefas-concluidas.component";
import { TarefaListarSemComponent } from './pages/listagem-tarefas-sem/listagem-tarefas-sem.component';

import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, TarefaListarComponent, CadastrarTarefa,TarefaListarConcluidasComponent,TarefaListarSemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
