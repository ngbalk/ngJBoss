import { Component }      from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'login',
  templateUrl: './src/templates/login-template.html'
})
export class LoginComponent { 
	constructor(private loginService : LoginService){}

	private login(){
		console.log("Logging in");
		this.loginService.login();
	}
}
