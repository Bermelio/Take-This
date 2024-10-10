// ============== array main notes =================
const arrayNotes = [
     {
         id: 1,
         title: 'Probando',
         content: 'testing pagina web',
         img: ''
     },
     {
         id: 2,
         title: 'Carpintera',
         content: 'Comprar platicola, seruchin y eso',
         img: ''
     },
     {
         id: 3,
         title: 'Yaguarete',
         content: 'Salvar yaguarete de Salta',
         img: ''
     },
     {
         id: 4,
         title: 'Fulvo',
         content: 'Comprar pelota, botines, medias we tenia que comprar todo',
         img: ''
     }
 ];
 
 // =================== random img ================= 
 const collectionImg = [
     'assests/argentina.jpg',
     'assests/fiat-uno.jpg',
     'assests/floppa.jpg',
     'assests/fulvo.jpg',
     'assests/maestroSplinter.jpg',
     'assests/mondongo.jpg',
     'assests/rei.jpg',
     'assests/skeleto.jpg'
 ];
 
 function randomImg(collectionImg) {
     const randomIndex = Math.floor(Math.random() * collectionImg.length);
     return collectionImg[randomIndex];
 }
 
 // ========= render total =========
 const containerNotes = document.getElementById('containerNotes');
 
 function renderNotes() {
     containerNotes.innerHTML = '';
     arrayNotes.forEach((note) => {
         const div = document.createElement('div');
         div.classList.add('notesClass');
         div.innerHTML = `
             <h3>${note.title} n°${note.id}</h3>
             <p>${note.content}</p>
             <br>
             <img src="${note.img}">
         `;
         containerNotes.appendChild(div);
     });
 }
 
 arrayNotes.forEach(note => {
     note.img = randomImg(collectionImg);
 });
 
 renderNotes();
 
 // ============== function ====================  
 const newNote = document.getElementById('newNote');
 const btnClose = document.getElementById('btnClose');
 
 newNote.addEventListener('mouseover', () => {
     modalContainer.classList.add('modalToggle');
 });
 
 btnClose.addEventListener('click', () => {
     modalContainer.classList.remove('modalToggle');
 });
 
 // ========================  Fill form ===================
 const title = document.getElementById('title');
 const content = document.getElementById('text');
 const btnSave = document.getElementById('btnSave');
 
 btnSave.addEventListener('click', (e) => {
     e.preventDefault();
 
     const pushNote = {
         id: arrayNotes.length + 1,
         title: title.value,
         content: content.value,
         img: randomImg(collectionImg)
     };
 
     arrayNotes.push(pushNote);
     renderNotes();
     title.value = '';
     content.value = '';
 });
 