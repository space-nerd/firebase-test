document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("MUp9WmcPDzlcni3URPtk");

  myPost.get().then((doc) => {
    const data = doc.data();
    document.write(data.title + `<br>`);
    document.write(data.createdAt);
  });
});
