
//initialisation
var budget=eval(document.getElementById("BudgetInitial").value);

var joueurSelectionne=[];


//Mise à jour des slot afficher
function MAJslotJoueur(){

var idSlot ;
        radioJoueurTableau = document.querySelectorAll(".radioJoueur");
        radioJoueurTableau.forEach(function(elem){
            if(elem.checked == true){
                NbrDeSlot = elem.value;
            } 
        });

        slotJoueurTableau = document.querySelectorAll(".slot-joueur");
        slotJoueurTableau.forEach(elem => elem.style.display="none");


        while(NbrDeSlot > 0){
            idSlot = "slot-joueur-"+NbrDeSlot;
            document.getElementById(idSlot).style.display = "block";
            NbrDeSlot--;
        }}


    function AugmenterBudget(){
        budget += 5000;
        budget > 60000 ? budget = 60000:null;
       document.getElementById("BudgetInitial").value = budget;  
    }

    function DiminuerBudget(){
        budget -= 5000;
        budget < 10000 ? budget = 10000:null;
        document.getElementById("BudgetInitial").value = budget;  
    }

    //selection du joueur 
    function selectionJoueur(){
    document.querySelectorAll(".selectionJoueur").forEach(
        function(elem){
            TABLEAU_JOUEUR.map(
                function(obj){
                    elem.innerHTML += "<option value="+TABLEAU_JOUEUR.indexOf(obj)+" ><h6>"+obj.nom+"</h6></option>";
                }
            )
        }
    );}

    function photoJoueur(idphotoImg,idselect){
        document.getElementById(idphotoImg).innerHTML="<img class='img-petit' src="+TABLEAU_JOUEUR[document.getElementById(idselect).value].photo+"></img>";
    }
    
    function couleurJoueur(idCouleur,idselectCouleur){
        document.getElementById(idCouleur).style.backgroundColor=document.getElementById(idselectCouleur).value;
    }


    //lorque play est cliquer
    //1. update les paramètres
    function updateParam(){
       var i=0;
    document.querySelectorAll(".selectionJoueur").forEach(
        function(elem){
            idObject=elem.value;
            if(idObject != 100){
            //argent
            TABLEAU_JOUEUR[idObject].argent = document.getElementById("BudgetInitial").value;
            //couleur
            
            TABLEAU_JOUEUR[idObject].couleur = document.querySelectorAll(".classcouleur")[i].value;
            i++;
            
        }else{
                i++;
                
            }
                }
        );
         storeParam();
        
    }
    function storeParam(){
        var i = 1;
        var NbrDeJoueur;
        radioJoueurTableau = document.querySelectorAll(".radioJoueur");
        radioJoueurTableau.forEach(function(elem){
            if(elem.checked == true){
                NbrDeJoueur = elem.value;
            } 
        });
        
        document.querySelectorAll(".selectionJoueur").forEach(
            function (elem){
                if(i<=NbrDeJoueur){
            joueurSelectionne.push(TABLEAU_JOUEUR[elem.value]);
            i++;
        }else{
            i++;
        }
    });
    localStorage.setItem("JoueurSelectionnés",JSON.stringify(joueurSelectionne));
    window.open('../Afropoly/game.html',"_self");
}
