(function()  {
    'use strict';
    
    console.log('Letras do nome separadas');
    var name = 'Daniel';

    for(var i=0; i<name.length; i++){
        console.log(name[i] + ' é a ' + (i+1) + 'ª letra do seu nome');
    }

    var fullName = 'daniel-aguiar';

    var newName = fullName.split('-').map(function(name) {
        return name[0].toUpperCase() + name.slice(1);
    });

    console.log(newName.join( ' ' ));

    console.log('My friends');

    var friends = ['Zoio','Zed','Jailson','Faustão','Sua Mãe'];

    var newFriends = friends.reduce(function(acumulado, atual, index){
        var separator = friends.length - 1 === index ? ' e ' : ', ';
        return acumulado + separator + atual;
    });

    console.log(newFriends);

    console.log('Troca de letras');
    console.log('Roberto'.replace('to','ta'));

    console.log('Parte de uma string');
    console.log('Fernando'.slice(3,));

    console.log('Nome com as letras intercaladas');
    var myName = 'Daniboy';
    var myNewName = [];
    for(var i=0; i<myName.length; i++){
        myNewName.push( i%2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase());
    }

    console.log(myNewName.join(''));
})();