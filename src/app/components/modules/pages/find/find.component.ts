import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  public namePokemon : string = ''
  public image : string = ''
  public flag : boolean = false

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    
  }

  find(){
    if (this.namePokemon !== '') {
      this.flag = !this.flag;
      this.apiService.searchPokemon(this.namePokemon).subscribe((data : any) => {
        // console.log(data);
        this.image = data.sprites.other.dream_world.front_default
        // this.image = data.sprites.front_default
        this.namePokemon = data.name
      })
    }
    
  }

}
