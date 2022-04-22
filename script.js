let ol = document.querySelector('ol')

let li = ol.children[4];


ol.insertBefore(li,ol.childNodes[0]);



/*exercice 2*/

let main = document.querySelector('main');
let section2 = main.children[1];
let section3 = main.children[2]

let h21 = section2.children[0]
let div = section3.children[0]

let h22 = div.children[0]
div.insertBefore(h21,div.childNodes[0])
section2.insertBefore(h22,section2.childNodes[0])



/*exercice 3 */ 

main.removeChild(section3)
