import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['../../common.css', './admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  hide = true;
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
