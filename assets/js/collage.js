function drag(evento){
    evento.preventDefault();

}

fuction permitriDrop(evento){
    evento.preventDefault();
    var id_foto = evento.dataTranfer.getData('text');
    evento.target.appendChild(document.getElementById(id_foto));
}