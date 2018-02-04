import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {Message} from '../../shared/model/message.model';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(private usersService: UsersService,
              private loginService: LoginService,
              private router: Router) {

  }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      email: new FormControl('wfm@mail.ru', [Validators.required, Validators.email]),
      password: new FormControl('12345678', [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  onSubmit() {
    const values = this.form.value;
    this.usersService.getUserByEmail(values.email)
      .subscribe((user) => {
        if (user) {
          if (user.password === values.password) {
            this.message.text = '';
            localStorage.setItem('user', JSON.stringify(user));
            this.loginService.login();
            // this.router.navigate(['']);
          } else {
            this.showMessage('no pass');
          }
        } else {
          this.showMessage('no user');
        }
      });
  }

}
