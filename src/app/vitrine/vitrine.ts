import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-vitrine',
  templateUrl: './vitrine.html',
  styleUrls: ['./vitrine.css'],
  imports: [CommonModule, RouterLink]
})
export class Vitrine {

  
  constructor(private router: Router) {}

  verDetalhe(produto: any) {
  this.router.navigate(['/detalhe', produto.codigo]);
  }

  lista: Produto[] = [
    {
      codigo: 1,
      nome: "Whey Protein Concentrado 900g",
      descritivo: "Suplemento proteico concentrado para auxiliar no ganho de massa muscular e recuperação pós-treino.",
      valor: 129.9,
      promo: 109.9,
      quantidade: 0
    },
    {
      codigo: 2,
      nome: "Creatina Monohidratada 300g",
      descritivo: "Creatina pura que auxilia no aumento de força, potência e desempenho nos treinos.",
      valor: 89.9,
      promo: 74.9,
      quantidade: 40
    },
    {
      codigo: 3,
      nome: "Pré-Treino Explosive Energy 300g",
      descritivo: "Fórmula estimulante com cafeína e aminoácidos para melhorar foco, energia e resistência.",
      valor: 119.9,
      promo: 99.9,
      quantidade: 35
    },
    {
      codigo: 4,
      nome: "BCAA 4:1:1 200g",
      descritivo: "Aminoácidos de cadeia ramificada para recuperação muscular e redução da fadiga.",
      valor: 79.9,
      promo: 64.9,
      quantidade: 30
    },
    {
      codigo: 5,
      nome: "Glutamina 300g",
      descritivo: "Suplemento que auxilia na recuperação muscular e fortalecimento do sistema imunológico.",
      valor: 69.9,
      promo: 59.9,
      quantidade: 0
    },
    {
      codigo: 6,
      nome: "Hipercalórico Mass Gain 3kg",
      descritivo: "Suplemento hipercalórico indicado para ganho de peso e aumento de massa muscular.",
      valor: 159.9,
      promo: 139.9,
      quantidade: 20
    },
    {
      codigo: 7,
      nome: "Barra de Proteína Chocolate 60g",
      descritivo: "Barra rica em proteínas ideal para lanches rápidos e reposição nutricional.",
      valor: 9.9,
      promo: 7.9,
      quantidade: 100
    },
    {
      codigo: 8,
      nome: "Coqueteleira 600ml",
      descritivo: "Garrafa com misturador interno ideal para preparar shakes de suplementos.",
      valor: 24.9,
      promo: 19.9,
      quantidade: 60
    },
    {
      codigo: 9,
      nome: "Multivitamínico Atleta 120 cápsulas",
      descritivo: "Complexo vitamínico e mineral para suporte nutricional diário e melhora da performance.",
      valor: 59.9,
      promo: 49.9,
      quantidade: 45
    },
    {
      codigo: 10,
      nome: "Ômega 3 1000mg 120 cápsulas",
      descritivo: "Suplemento de óleo de peixe rico em EPA e DHA para saúde cardiovascular e cerebral.",
      valor: 54.9,
      promo: 44.9,
      quantidade: 55
    }
  ];
}