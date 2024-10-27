import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.scss'],
})
export class FormLogComponent  implements OnInit {
  
 /*  loginForm: FormGroup; */

  constructor(
    
    /* private formBuilder: FormBuilder */
 ) {
    
    /* this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });*/
  } ;

  ngOnInit() {

  }
  /* onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      console.log('Formulario enviado:', this.loginForm.value);
    }else{
      console.log('Formulario no enviado:');
    }
  } */

}
