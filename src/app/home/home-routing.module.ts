import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import { PlayerComponent } from './player/player.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',
      component:HomeComponent,
      children:[{
        path:'player',
        component:PlayerComponent
      },
    {
      path:'playerStats',
      component:PlayerstatisticsComponent
    }]
   
    }
    ])
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
