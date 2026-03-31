import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Vitrine } from './vitrine/vitrine';
import { DetalheProdutoComponent } from './pages/detalhe-produto/detalhe-produto';


export const routes: Routes = [
    {path:"", component:Vitrine},
    {path:"cadastro", component:Cadastro},
    { path: 'detalhe-produto/:id', component: DetalheProdutoComponent }
];
