import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Article } from '../../service/article';
import { map } from "rxjs/operators"; // 追加
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { ArticleService } from 'src/app/service/ArticleService';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  
  articlesRef: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

    //フォームグループ
    editForm: FormGroup;

    articlenum: string; // articleのid番号をarticleid変数に格納

  constructor(private firestore: AngularFirestore, private fb: FormBuilder, private router: ActivatedRoute) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    console.log('numは、' + this.articlenum);
    this.articlesRef = this.firestore.collection<Article>('patientsarticles', ref => ref.where('num', '==', this.articlenum));
    this.articles = this.articlesRef.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Article;
        const id = action.payload.doc.id;
        const num = action.payload.doc.data().num;
        return { id,num,  ...data };
        });
      }));   
    console.log('articlesは、' + JSON.stringify(this.articles)); // うまくいってもarticlesは、{"_isScalar":false,"source":{"_isScalar":false},"operator":{}}というメッセージはでる
    console.log('subscribeしたものは、' + this.articles.subscribe() );
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [''],
      num: ['',[Validators.required, Validators.maxLength(2)]],
      title: ['', [Validators.required]],
      title_origin: [''],
      date: [''],
      content: ['', [Validators.required]],
      author: [''],
      author_prof: [''],
      pictpath: [''],
      feature: [''],
    });  
  }
  
  // ゲッターを作成
get num() {
  return this.editForm.get('num')
}
get title() {
  return this.editForm.get('title')
}
get title_origin() {
  return this.editForm.get('title_origin')
}
get date() {
  return this.editForm.get('date')
}
get content() {
  return this.editForm.get('content')
}
get author() {
  return this.editForm.get('author')
}
get author_prof() {
  return this.editForm.get('author_prof')
}
get pictpath() {
  return this.editForm.get('pictpath')
}
get feature() {
  return this.editForm.get('feature')
}


// 選んだ記事のnumをURLに持って記事編集画面に飛ぶ
 // idだとどうしてもデータを持ち出してくれない。admin/edit-article/" + article.id 
 // numで持ち出して編集フォーム記事へ。そしてidを使って特定された記事をupdateということになる
updateData(item: Article) {
  console.log('item.idはね、' + item.id);
  this.firestore
  .collection('patientsarticles')
  .doc(item.id)
  .update({
    num: item.num,
    title: item.title,
    title_origin: item.title_origin,
    date: item.date,
    content: item.content,
    author: item.author,
    author_prof: item.author_prof,
    pictpath: item.pictpath,
    feature: item.feature,
  })
  .then(() => {
    alert(item.title + 'の記事を更新した');
    console.log(item.title + 'の記事を更新した');
  });

}

}
