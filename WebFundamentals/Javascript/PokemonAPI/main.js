function PKMNlist (start, end) {
    for (var i=start; i <= end; i++)
        $('#PKMNimg').append('<img id="DexNum'+i+'"src="http://pokeapi.co/media/img/' + i + '.png" alt="PKMN Pic">');
}

$(document).ready(function(){
    PKMNlist(25,75);
});