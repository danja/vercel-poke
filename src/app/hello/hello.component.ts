import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  template: `<div>Hello {{value}}</div>`,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {

  stuff: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    var heads = {};
    // headers: new HttpHeaders({ 'Accept': 'application/json' }), 
    var response; // headers: new HttpHeaders({ 'Accept': 'application/json'}) {options: { 'Accept': 'application/json' }}
    this.http.get("https://echo.hyperdata.it", { responseType: 'text', observe: 'response' },).subscribe({
      //  headers: heads 
      next: data => {

        //        this.stuff = data
        this.stuff = JSON.stringify(data)
        console.log("data = \n");
        console.log(data);
        for (var key in data.headers) {
          console.log(key + " : " + "\n");
        }
      },
      error: error => {
        this.stuff = error.message;
        console.error('error', error);
      },

    }); // wake up vercel
  }
}




