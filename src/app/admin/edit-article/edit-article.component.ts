import { Input, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Article } from '../../service/article';
import { map } from "rxjs/operators"; // 追加
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['../../common.css', './edit-article.component.css']
})
export class EditArticleComponent implements OnInit {  
  articlesRef: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  //親コンポーネントから受け取るプロパティ
  // @Input() collectionNameValue: string;
  //admin-topのセレクトボタンの切り替えでコレクション名を獲得するため、Firestoreへの接続はコードｈ
  //すべてngOnInit()からngOnChanges()へ移した。すなわち作業の最初の作業は必ずセレクトボタンの切り替え
  //から始めるということ。  

    //フォームグループ
    editForm: FormGroup;

    articlenum: string; // articleのid番号をarticleid変数に格納

    collectionName: string;
    // コレクション名（patientsarticles, doctorsarticles, mediasarticlesのどれか）
    // article-listのgoEdit()から'admin/edit-article/1/doctorsarticles'というURLで渡されてくる.
    /*
        Article(article.ts)インターフェースの内容
          export interface Article {
                collectionName?: string; // 追加
                id?: string; // 追加
                num: string;
                title: string;
                title_origin: string;
                date: string;
                content: string;
                author: string;
                author_prof: string;
                pictpath: string;
                feature: string;
          }
    */

  constructor(
    private firestore: AngularFirestore, 
    private fb: FormBuilder, 
    private router: ActivatedRoute
    ) {
    this.articlenum = this.router.snapshot.paramMap.get('num'); // 記事number取得
    this.collectionName = this.router.snapshot.paramMap.get('collectionName'); // コレクション名取得
    console.log('■■■■■■numは、' + this.articlenum);
    console.log('■■■■■■collectionNameは、' + this.collectionName);
    this.articlesRef = this.firestore.collection<Article>(this.collectionName, ref => ref.where('num', '==', this.articlenum));
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
 // 注意！！idだとどうしてもデータを持ち出さしてくれない。admin/edit-article/" + article.id が無理。
 // numで持ち出して編集フォーム記事のvalueへ貼りつけ。そしてidを使って特定された記事をupdateということになる
updateData(item: Article) {
  console.log('item.idはね、' + item.id);
  this.firestore
  .collection(this.collectionName)
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
