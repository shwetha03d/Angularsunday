import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private builder:FormBuilder,private service:PlayerService,private router:Router ) { }

  player=this.builder.group({
    name:['',Validators.required]
    
  })

  players;

  ngOnInit() {
  }

  
  onSearch(name){
  
   this.service.getPlayerByName(name).subscribe(resp=>{
    let d:any=resp;
    console.log(d);
    this.players=d.data;
    //  console.log(resp);
   },
   err=>{
     console.log(err);
   } )


  }
playerInfo;
  getPlayerDetails(id){
    this.router.navigate(['/home/playerStats'],{queryParams:{"playerId":id}})
  }
}
