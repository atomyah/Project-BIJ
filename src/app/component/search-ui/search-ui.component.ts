import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from '../../class/faqpost';
import { map } from "rxjs/operators"; // 追加
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.css']
})
export class SearchUiComponent implements OnInit {
  post: Post[];
  posts: Observable<Post[]>;
  postsCollection: AngularFirestoreCollection<Post>;
  commentsfaqsJSON: string;

  searchConfig = {
    ...environment.algolia
  };

  showResults: boolean = false;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
   // this.getPosts();
  }

  async searchChanged(query) {
    if (query.length) {
     this.showResults = true;
    } else {
     this.showResults = false;
    }
  }


  /* 簡単なやり方。posts: Observable<Post[]>;にObservableをつけない。posts: Post[];とする  
 
    this.postsCollection.valueChanges().subscribe(data => { // データをvalueChanges()で監視、変更があったらsubscribe(data)でそれを取得
     this.posts = data;
    });
  */

  getPosts() {
    this.postsCollection = this.db.collection<Post>(
      'commentsfaqs', ref => ref
        .orderBy('created', 'asc')
        );   // コレクションの参照・並べ替え 
    this.postsCollection.valueChanges().subscribe(data => { // データをvalueChanges()で監視、変更があったらsubscribe(data)でそれを取得
     this.post = data;
     const exportJSON = JSON.stringify(this.post);
      console.log('this.postsは、' + JSON.stringify(this.post));
    
      this.commentsfaqsJSON = exportJSON;
    });
  }

  /* Angularで検索機能を組み込むとき… searchPosts()*/
  keyword: string;
  searchkey: string;
  searchPosts(searchkey: string) {
    this.keyword = searchkey;
    console.log('■キーワードは、' + this.keyword)
    this.postsCollection = this.db.collection<Post>(
      'commentsfaqs', ref => ref
        .where('message', 'array-contains', this.keyword)
        .orderBy('created', 'asc')
//        .startAt(this.keyword)
//        .endAt("\uf8ff")
        );
    this.posts = this.postsCollection.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Post;
        const id = action.payload.doc.id;
        const uid = action.payload.doc.data().uid;
        const userName = action.payload.doc.data().userName;
        console.log('■idは、' + id);
        console.log('■userNameは、' + userName);
        return { id,uid,  ...data };
        });
      }));
      console.log('subscribeしたものは、' + this.posts.subscribe() );
  
  }
 /* ここまで…Angularで検索機能を組み込むとき… searchPosts() 【結論】FirestoreでLIKEキーワードは使えないのでAlgoliaを使うしかない！*/

}
