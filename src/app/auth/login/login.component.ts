import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {Message} from '../../shared/model/message.model';
import {LoginService} from '../../shared/services/login.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {fadeStateTrigger} from '../../shared/animations/fade.animation';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(private usersService: UsersService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta) {
    title.setTitle('Вход в систему');
    meta.addTags([
      {name: 'keywords', content: 'логин, вход, система'},
      {name: 'description', content: 'Страница для входа в систему'}
    ]);
  }

  ngOnInit() {

    this.message = new Message('', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage('you can enter', 'success');
          this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('?')));
        } else if (params['accessDenied']) {
          this.showMessage('You should enter for work', 'warning');
        }
      });

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
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage('no pass');
          }
        } else {
          this.showMessage('no user');
        }
      });
  }

}
