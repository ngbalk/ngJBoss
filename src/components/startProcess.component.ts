import { Component }      from '@angular/core';
@Component({
  selector: 'start-process',
  templateUrl: './src/templates/start-process-template.html'
})
export class StartProcessComponent { 
	startProcess(){
		console.log("process started");
	}
}