//array main notes,,
const arrayNotes = [
    {
        id:1,
        title:'La mama del mati',
        content:'uhhh guacho la mama del mati y la prima de ja xd',
        date:'17/10/2000',
        img:'./assests/maestroSplinter.jpg'
   },
   {
        id:2,
        title:'Minecraft',
        content:'hacer granja de experiencia',
        date:'07/10/2005',
        img:'./assests/floppa.jpg'
   },
   {
        id:3,
        title:'boviano ataca denuevo',
        content:'skibidid dub dub yes ye sskibidi dip dip',
        date:'',
        img:'./assests/rei.jpg'
   }
];

//second stage logic

const containerNotes = document.getElementById('container-notes')

arrayNotes.forEach((note) =>{

    const div = document.createElement('div')

    div.classList.add('notesClass')

    div.innerHTML =`
    <h3>${note.title} n°${note.id}</h3>
    <p>${note.content}</p>
    <br>
    <img src="${note.img}">
    `
    containerNotes.appendChild(div)
})