import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mensagem : string = "";
  obj: Cliente = new Cliente();

  gravar(){
      let json = JSON.stringify(this.obj); //Serializar
      localStorage.setItem("meuCliente", json);
      this.mensagem = "Cliente gravado com sucesso!!!";
  }
}
