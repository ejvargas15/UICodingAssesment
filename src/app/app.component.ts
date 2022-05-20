import { Component, OnInit  } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'api-angular';
  dataList: any;

  ngOnInit() {
		// API Call
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
			'x-rapidapi-key': 'your-api-key'
		});
		this.http
			.get('https://jsonplaceholder.typicode.com/photos').toPromise().then(data=>{
        this.dataList = data;
        console.log(this.dataList);
      })
			
	}
}
