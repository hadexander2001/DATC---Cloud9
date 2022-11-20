import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'RagweedAlert';
  public apiUrl = "http://127.0.0.1:8000/alerts/";
  constructor(private http:HttpClient) { }

  alertListJson:any

  ngOnInit(): void {
    this.alertListJson = this.http.get(this.apiUrl).subscribe(
      data => this.alertListJson = data
    )
  }

  // define seperate function for get and post
  // probably move apiUrl to seperate api endpoints file

}
