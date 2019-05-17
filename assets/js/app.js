const dataa = document.querySelector("#here");


db.collection("blogs").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let p1 = document.createElement('div');
        p1.setAttribute('id', doc.id)
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p2.innerHTML = "<h1>" + doc.data().title + "</h1>";
        p3.innerHTML = doc.data().content + "<br><br><hr><br><br>";
        p1.appendChild(p2);
        p1.appendChild(p3);
        dataa.appendChild(p1)
    
    });
});