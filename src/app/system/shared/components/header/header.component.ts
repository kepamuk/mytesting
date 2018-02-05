import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../../shared/services/login.service';
import {Router} from '@angular/router';
import {User} from '../../../../shared/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

}
