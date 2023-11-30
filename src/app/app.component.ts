
import { Component} from '@angular/core';
import { SharedService } from './shared.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title ='bookslibrary';
  book: any;

  constructor(private service:SharedService){
  }

  books: any=[];
  refreshbooks(){
  this.service.getBooks().subscribe((res)=>{
  console.log(res);
  this.books=res;
  })
  }


  ngOnInit(){
  this.refreshbooks();
  }

  addBooks (newBooks: string) {
  this.service.addBook (newBooks).then((res)=>{
  console.log(res);
  this.refreshbooks();

  })
  }

  deleteBooks (id: string) {
  this.service.deleteBook (id).then((res)=>{
  console.log(res);
  this.refreshbooks();
  })
  }







  }


