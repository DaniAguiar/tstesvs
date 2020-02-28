(function() {
    'use-strict';

    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro.';

    console.log( text.replace(/Manuel Marques de Sousa/,'Daniel Aguiar'));

    console.log(text.replace(/brasileiro/, 'paulista'));

    console.log(text.replace(/\d/g,'-'));

    console.log(text.replace(/[D-Z]|[a-h]/g, '0'));
})();