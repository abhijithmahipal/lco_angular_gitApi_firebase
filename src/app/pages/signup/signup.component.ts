import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    this.auth.signUp(email, password).then((res) => {
      this.router.navigateByUrl('/');
      this.toastr.success('Signup success');
    }).catch((err) => {
      console.log(err.message);
      this.toastr.error('Signup failed');
    });
  }
}

