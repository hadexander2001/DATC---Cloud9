import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { endpoints } from '../shared/endpoints';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'RagweedAlert';
  constructor() { }

  ngOnInit(): void { }
}
