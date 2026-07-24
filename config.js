/* ==========================================================
   Firebase の設定
   ----------------------------------------------------------
   Firebase コンソールで取得した設定です。
   （手順は README.md の「家族で共有する設定」を参照）

   ここに書かれている apiKey は「公開前提の識別子」であり、
   秘密鍵ではありません。実際の保護は Realtime Database の
   セキュリティルールと、18文字の合言葉が担っています。
   ========================================================== */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAvG3VAl89nPwpDxmFKLrFPhiyWHpd2nfQ",
  authDomain: "kazoku-choshi.firebaseapp.com",
  databaseURL: "https://kazoku-choshi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kazoku-choshi",
  storageBucket: "kazoku-choshi.firebasestorage.app",
  messagingSenderId: "16624087634",
  appId: "1:16624087634:web:1eb99ea9245f9addbfe58b"
};
