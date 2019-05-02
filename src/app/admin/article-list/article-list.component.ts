import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../service/article';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; // 追加

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['../../common.css','./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {
  articlesRef: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  //親コンポーネントから受け取るプロパティ
  @Input() collectionNameValue: string;
  //admin-topのセレクトボタンの切り替えでコレクション名を獲得するため、Firestoreへの接続はコードは
  //すべてngOnInit()からngOnChanges()へ移した。すなわち作業の最初の作業は必ずセレクトボタンの切り替え
  //から始めるということ。

  
  constructor(
    private firestore: AngularFirestore, 
    private router: Router,
    ) {}


  ngOnInit() {
    console.log("@@@ngOnInit");
  }


 // 選んだ記事のnumをURLに持って記事編集画面に飛ぶ
 // idだとどうしてもデータを持ち出してくれない。admin/edit-article/" + article.id 
 // numで持ち出して編集フォーム記事へ。そしてidを使って特定された記事をupdateということになる
  async goEdit(article: Article) {
    console.log("■■■■■■" + this.collectionNameValue);
    await this.router.navigate(["admin/edit-article/" + article.num + '/' + this.collectionNameValue]);
    console.log("■■■■■■" + "admin/edit-article/" + article.num + '/' + this.collectionNameValue);
  }

  // 記事を削除する
  onDelete(article: Article) {
    if (confirm("消しちゃうよ～?")) {
      this.articlesRef
      .doc(article.id)
      .delete()
      .then(() => {
        alert('削除完了！');
        console.log('削除完了');
      });
    } 
  }

   ngOnChanges() {
    console.log("@@@ngOnChanges");
    console.log("■■■" + this.collectionNameValue); 
    this.articlesRef = this.firestore.collection<Article>(this.collectionNameValue);//親コンポーネントadmin-topから受け取ったプロパティcollectionNameValue
    this.articles = this.articlesRef.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Article;
        const id = action.payload.doc.id;
        const num = action.payload.doc.data().num;
        return { id,num,  ...data };
        });
      })); 
  }

     //以降はイベント履歴の記録用
  ngDoCheck() {
    console.log("@@@ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("@@@ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("@@@ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("@@@ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("@@@ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("@@@ngOnDestroy");
  }

}
