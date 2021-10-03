// Si vous pechez vraiment en anglais, vous avez les énnoncés en français juste ici : 
// http://finnpauls.de/learnyounode/guide/hello_world.fr.html

// *** 1 *** // 

// Le premier est super trop simple : j'ai réussi du deuxième coup =) 
// Notez qu'il demande des MAJUSCULES 

console.log("HELLO WORLD")

// Ouais c'est tout

// ******************************************************************************************************** //

// *** 2 *** // 

// Le second exercice s'appelle Baby Steps mais il pas pour autant "evident", même si il est quand même court !
// en gros il faut pouvoir lancer le script avec pleins de chiffres derrière et faut qu'il les additionne tous ensemble !
// si vous écrivez $ node .\baby-steps 4 5 7 9 2 3, il faut qu'il rende le résultat de 4 + 5 + 7 + 9 + 2 + 3, peu importe le nombre de chiffres que vous présentez. 

// il faut déjà appeller le argv, c'est à dire un tableau
const { argv } = require('process');
// dans l'énoncé de l'exercice on nous parle d'un objet process. L'objet 'process' a une propriété argv qui est un tableau contenant la ligne de commande complète.
// vous pouvez toujours essayer de la checker de cette façon
console.log("ce que le process.argv fait " + process.argv)

// le i de base n'est utilisé qu'à la seconde ligne. mais il mets à quel position dans le tableau il doit commencer, en l'occurence dans notre cas [2]
// puis il est comparé à la taille de de l'argv via l'objet process, lenght lui donne bien sur la longueur
// le i++ incrémente tous les i jusqu'à la dernière itteration

let result = 0; // création d'une variable number
for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]); // nous demandons un nombre, en fonction des itterations de cacahouette et nous les additionnons avec +=
}
console.log(result); // on retourne le resultat dans la console. Boom Mindblow !
// ça fait beaucoup de texte, mais j'en ai besoin également !

// ******************************************************************************************************** //

// *** 3 *** // 

// L'énoncé numéro 3 nous demande de compter le nombre de sauts de lignes se trouvant dans un fichier texte de notre choix. 
// Pour se faire il nous conseille d'utiliser le composant "fs" en l'appelant en début de fichier 'var fs = require('fs')'
// jusque là c'est cool. 

const fs = require('fs');

// l'énoncé nous conseille d'utiliser la fonction readfileSync pour lire notre texte en 'buffer'. Traduction de l'énoncé : 
// "Les objets Buffer sont l’approche retenue par Node pour représenter efficacement des tableaux de données, qu’il s’agisse de texte ASCII, de binaire ou d’autres formats.""
let cacaouhette = fs.readFileSync('./texte.txt');
console.log(`console log de cacahouette ${cacaouhette}`); // je l'ai console log, ça me donne une jolie liste de chiffres, je suppose que c'est le buffer ? 

// après l'énoncé nous conseille d'utiliser ".tostring();" pour avoir une representation du buffer. J'ai donc supposé que je devais stringer cacahouette
let myrabelle = cacaouhette.toString();
console.log(`console log de myrabelle ${myrabelle}`); // en faisant le console.log, en lançant la fonction, il me lit le texte. J'aurais pu le faire seul en ouvrant le fichier, mais c'est un truc en plus que j'ai pu faire faire au programme (je suppose)

// l'énoncé nous conseille ensuite d'utiliser la fonction '.split()'. On peut également lui donner un limiteur, ici \n (ou \r) pour compter le nombre de retours à la ligne.
let chaussure = myrabelle.split('\n');
console.log(`console log de chaussure ${chaussure}`); // avec ça il nous rend juste le texte de chaussure avec les \r
console.log(`console log de chaussure lenght -1 ${chaussure.length -1}`); // la ça nous donne la réponse, mais l'énoncé nous dit que yora une ligne en trop, d'ou le -1 à la fin.

// On aurait pu écrire ça beaucoup plus rapidement. Je suis allé voir une solution plus élégante. Sur Git j'ai trouvé celle-là. Franchement, j'ai pas le lvl !
// 
// var fs = require('fs');
// var n = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
// console.log(n);
// 