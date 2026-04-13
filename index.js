let scoreHome=0;
let scoreGuest=0;
let homeEl=document.getElementById("scoreHome")
let guestEl=document.getElementById("scoreGuest")


function addOnePointHome(){
    scoreHome+=1
    homeEl.textContent=scoreHome
    if(scoreHome>scoreGuest)
    {
        document.getElementById("teamHome").style.background="Yellow"
        document.getElementById("teamGuest").style.background="transparent"        
    }

}
function addTwoPointHome(){
    scoreHome+=2
    homeEl.textContent=scoreHome
    if(scoreHome>scoreGuest)
    {
        document.getElementById("teamHome").style.background="Yellow"
        document.getElementById("teamGuest").style.background="transparent"        
    }

}
function addThreePointHome(){
    scoreHome+=3
    homeEl.textContent=scoreHome
    if(scoreHome>scoreGuest)
    {
        document.getElementById("teamHome").style.background="Yellow"
        document.getElementById("teamGuest").style.background="transparent"        
    }

}
function addOnePointGuest(){
    scoreGuest+=1
    guestEl.textContent=scoreGuest
    if(scoreGuest>scoreHome)
    {
        document.getElementById("teamGuest").style.background="Yellow"
        document.getElementById("teamHome").style.background="transparent"

    }

}
function addTwoPointGuest(){
    scoreGuest+=2
    guestEl.textContent=scoreGuest
     if(scoreGuest>scoreHome)
    {
        document.getElementById("teamGuest").style.background="Yellow"
        document.getElementById("teamHome").style.background="transparent"

    }

}
function addThreePointGuest(){
    scoreGuest+=3
    guestEl.textContent=scoreGuest
     if(scoreGuest>scoreHome)
    {
        document.getElementById("teamGuest").style.background="Yellow"
        document.getElementById("teamHome").style.background="transparent"

    }

}
function startnew(){
   scoreHome=0
   scoreGuest=0
   homeEl.textContent=scoreHome
   guestEl.textContent=scoreGuest
    document.getElementById("teamGuest").style.background="transparent"
        document.getElementById("teamHome").style.background="transparent"

}

