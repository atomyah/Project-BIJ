import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueSharedService {
  // 受け渡しを行うプロパティ
  public currentTitle = '';
  public currentCollectionNameValue: string = ''; // collectionNameを入れるvalue. patient, doctors, mediasのcollectonName変数から渡ってくる。

  // basicsdataはベンゾ一般知識でのみ使用するデータオブジェクト. 他のコンポーネントでは使用しない
  public basicsdata = null;


  constructor() { }

}
