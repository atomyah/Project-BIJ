import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../service/article';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; // 追加

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articlesRef: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  constructor(private firestore: AngularFirestore, public router: Router) {
    this.articlesRef = this.firestore.collection<Article>('patientsarticles');
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
  

  ngOnInit() {
  }

 // 選んだ記事のnumをURLに持って記事編集画面に飛ぶ
 // idだとどうしてもデータを持ち出してくれない。admin/edit-article/" + article.id 
 // numで持ち出して編集フォーム記事へ。そしてidを使って特定された記事をupdateということになる
  async goEdit(article: Article) {
    await this.router.navigate(["admin/edit-article/" + article.num]);
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

}
