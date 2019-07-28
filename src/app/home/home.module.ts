import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { HeaderComponent } from '../common/header/header.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';


@NgModule({
  declarations: [HomeComponent,HeaderComponent,SidebarComponent, PlayerComponent, PlayerstatisticsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
