import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData,deleteDoc,doc} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getBooks(){
    let booksCollection= collection(this.fs, 'books');
     return collectionData(booksCollection,{idField:'id'});
    }
    addBook (desc:string) {
    let data = {description: desc};
    let booksCollection= collection(this.fs, 'books');
    return addDoc (booksCollection, data);
    }
    deleteBook(id:string){
    let docRef=doc(this.fs,'notes/'+id);
    return deleteDoc (docRef);

    }
    }
