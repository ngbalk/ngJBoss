import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
	constructor(private http : Http){
  	}
  	public login(){
  		console.log("login");
		var username = "jboss";
		var password = "jboss00$";
		var creds = "username=" + username + "&password=" + password;
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		this.http.post('http://localhost:8081/kie-server/services/rest/server', creds, {
			headers: headers
		})
		.map(res => console.log(res.json()));  	
	}
}