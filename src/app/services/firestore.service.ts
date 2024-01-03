import {inject, Injectable} from '@angular/core';
import {Firestore, collectionData, collection, addDoc, doc, docData, deleteDoc} from '@angular/fire/firestore';
import {map, Observable} from 'rxjs';
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import {CollectionReference} from "@angular/fire/compat/firestore";
import {Song} from "../models/song";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);
  songsCollection
  constructor() {
  this.songsCollection=collection(this.firestore,'songs')
  }

  getSongs():Observable<Song[]>{
    return  collectionData(this.songsCollection,{idField: 'id'}).pipe(map(songs => songs as Song[])
    );
  }
  addSong(song:Song){
      return addDoc(this.songsCollection, song);
  }

  getSongById(id:string){
    const noteDocRef = doc(this.firestore, `songs/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Song>;
  }

  deleteSong(song: Song) {
    const noteDocRef = doc(this.firestore, `songs/${song.id}`);
    return deleteDoc(noteDocRef);
  }
}
