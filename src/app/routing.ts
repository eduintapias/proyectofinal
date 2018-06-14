import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './global/pages/home/home.component';

const routerM:Routes = [
    {path:'', component:HomeComponent}
 ];
 export const appRouter = RouterModule.forRoot(routerM);
  
