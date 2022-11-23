import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.get("https://hyperdata.it", { responseType: 'text', observe: 'response' },).subscribe({
      next: data => {
        this.stuff = JSON.stringify(data);

      },
      error: error => {
        this.stuff = error.message;
        console.error('There was an error!', error);
      },

    });
  }
}




