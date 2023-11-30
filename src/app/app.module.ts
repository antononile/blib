import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';




//Forms
import { FormsModule } from '@angular/forms';

//Material design modules


//Routes
import{RouterModule, Routes} from"@angular/router";
import { SharedService } from './shared.service';

import{AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment.development';
import firebase from 'firebase/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';



const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'book/:id',component:BookComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'edit-book/:id',component:EditBookComponent},
  {path:'delete-book/:id',component:DeleteBookComponent}

]

 const firebaseConfig = {
  apiKey: "AIzaSyCQ4uOrEcHzqZTQb2FLWNMPQkUEjLnnpjg",
  authDomain: "blib-8bc77.firebaseapp.com",
  projectId: "blib-8bc77",
  storageBucket: "blib-8bc77.appspot.com",
  messagingSenderId: "705930550138",
  appId: "1:705930550138:web:b9db8dc30cbfadcca094c3"
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],


  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes),    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()), AngularFireModule.initializeApp(environment.firebase)

  ],

  providers: [SharedService],


  bootstrap: [AppComponent]
})
export class AppModule { }
