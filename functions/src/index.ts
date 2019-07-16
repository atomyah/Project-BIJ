import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as rp from 'request-promise';

// firebase の初期化
admin.initializeApp();

// MEMO: simple が true の場合、 3XX のステータスコードを返却された時でもエラーとなる模様
const request = rp.defaults({simple: false});

const FIRESTORE_COLLECTION = 'commentsfaqs';
const LINE_ACCESS_TOKEN = 'TPLQOqDiwyeKswArXqLIo7G3nlGro1xOiXML6U5URZx';

// functions にデプロイする関数
// とあるコレクションにドキュメントを作成すると、LINEに通知します。
// MEMO: ドキュメントに対し、「作成」「更新」「削除」を取得することができます。詳細は下記参照
//       https://firebase.google.com/docs/functions/firestore-events?hl=ja
export const lineNotify = functions.firestore
  .document(FIRESTORE_COLLECTION + '/{doc}')
  .onCreate((snap, context) => {

  // line へ通知
  request({
    uri : 'https://notify-api.line.me/api/notify',
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + LINE_ACCESS_TOKEN
    },
    form: {
      'message': 'Success!!!\r\n' + FIRESTORE_COLLECTION + 'にドキュメントが作成されました。'
    }
  }).then(function(response) { // 成功時 (3XX)
    // LINE Notify からのレスポンスを Functions のログに出力
    console.log('User has %d repos', response.length);
    console.log('response :' + response);
    return null;
  }).catch(function (err) { // 失敗時 (4XX or 5XX)
    Error(err);
   });
  return null;
});