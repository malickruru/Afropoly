// objet joueur
// le constructeur
function Joueur (photo,nom,libre,couleur,argent,position,){
    this.photo = photo;
    this.nom=nom;
    this.couleur=couleur;
    this.argent=argent;
    this.position=position;
    this.libre=libre;   
}

//les instances
chapeau=new Joueur ("../Afropoly/assets/cowboy-hat.png","le chapeau",true);
cheval=new Joueur ("../Afropoly/assets/horse.png","le cheval",true);
chien=new Joueur ("../Afropoly/assets/dog.png","le chien",true);
brouette=new Joueur ("../Afropoly/assets/wheelbarrow.png","la brouette",true);
voiture=new Joueur ("../Afropoly/assets/vehicle.png","la voiture",true);
chaussure=new Joueur ("../Afropoly/assets/sneakers.png","la chaussure",true);
pipe=new Joueur ("../Afropoly/assets/smoking-pipe.png","la pipe",true);
fer=new Joueur ("../Afropoly/assets/iron.png","le fer à repasser",true);
DeAcoudre=new Joueur ("../Afropoly/assets/thimble.png","le dé à coudre",true);
bateau=new Joueur ("../Afropoly/assets/boat.png","le bateau",true);

const TABLEAU_JOUEUR = [
    chapeau,
    cheval,
    chien,
    brouette,
    voiture,
    chaussure,
    pipe,
    fer,
    DeAcoudre,
    bateau
]

console.log(TABLEAU_JOUEUR);
