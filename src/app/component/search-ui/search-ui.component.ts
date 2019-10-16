import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from '../../class/faqpost';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.css']
})
export class SearchUiComponent implements OnInit {
  posts: Post[];
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


  getPosts() {
    this.postsCollection = this.db.collection('commentsfaqs', ref => ref.orderBy('created', 'asc'))  // コレクションの参照・並べ替え 
    this.postsCollection.valueChanges().subscribe(data => { // データをvalueChanges()で監視、変更があったらsubscribe(data)でそれを取得
     this.posts = data;
     const exportJSON = JSON.stringify(this.posts);
      console.log('this.postsは、' + JSON.stringify(this.posts));
    
      this.commentsfaqsJSON = exportJSON;
    });
  }

  /* Angularで検索機能を組み込むとき…？  */
  keyword: string;
  searchkey: string;
  searchPosts(searchkey: string) {
    this.keyword = searchkey;
    console.log('■キーワードは、' + this.keyword)
    this.postsCollection = this.db.collection<Post>(
      'commentsfaqs', ref => ref
        .where('message', '==', 'this.keyword')
        .orderBy('created', 'asc')
        );       

  /* 簡単なやり方。posts: Observable<Post[]>;にObservableをつけない。posts: Post[];とする
    this.postsCollection.valueChanges().subscribe(data => { // データをvalueChanges()で監視、変更があったらsubscribe(data)でそれを取得
     this.posts = data;
    });
  */
/* 
    this.posts = this.postsCollection.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Post;
        const id = action.payload.doc.id;
        const uid = action.payload.doc.data().uid;
        return { id,uid,  ...data };
        });
      }));
      console.log('subscribeしたものは、' + this.posts.subscribe() );
*/
  }


}
