import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
import StorageHelper from '../../../libs/helpers/storage.helper';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = ''
  public password: string = ''

  constructor(public apiService: ApiService, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
  }
  
  onClick(){  
    this.apiService.login(this.username,this.password).subscribe({next:(resp) =>{ 
      if(resp != EMPTY){
        StorageHelper.setItem('session',resp)  
        this.router.navigate(['home'])
      }
    }})
  }

}
