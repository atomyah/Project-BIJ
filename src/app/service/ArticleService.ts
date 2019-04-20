/*
import { Article } from './article';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
    providedIn: 'root'
  })
export class ArticleService {
    formData: Article;

    articlesRef: AngularFirestoreCollection<Article>;
    articleRef: Observable<Article[]>;

    constructor(private firestore: AngularFirestore) {
        this.articlesRef = this.firestore.collection('patientsarticles');
     }

    getArticle() {
        return this.articlesRef.snapshotChanges();
    }
}

*/