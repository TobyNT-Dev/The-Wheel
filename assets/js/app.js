let wheelPosition = 0
let spinningProgress = false

const daresConst = [
    "Gruppen vælger et ord du skal afslutte alle dine sætninger med indtil det er din tur igen!",
    "Lad resten af gruppen DM en person på din Instagram!", 
    "Spørg om lov, før du rejser dig op resten af spillet!", 
    "Gruppen blander en ulækker drink som du skal drikke!", 
    "Nævn de 3 sidste google-søgninger du har lavet!", 
    "Gentag alt hvad personen til højre for dig siger, indtil det er din tur igen!", 
    "Hvisk en hemmelighed til personen til venstre for dig!", 
    "Du må kun hviske de næste 5 minutter!", 
    "Næste gang du bander skal du bunde din drink!", 
    "stå på et ben, indtil det er din tur igen!", 
    "drik en ekstra tår på de næste 3 fælles skål!", 
    "Fortæl gruppen hvad din 'bodycount' er!", 
    "tag dine sko af indtil det er din tur igen!", 
    "resten af gruppen på poste en story på din instagram!",   
    "sig ja til alt indtil det har været din tur igen",  
    "fortæl hvad dit bedste score-trick i byen er", 
    "lad gruppen skrive til 3 personer på din Tinder / anden dating app", 
    "drik hvis du er i et forhold - du er kedelig!",
    "Find et billede af en positiv graviditets-test, og send den til dit crush!",
    "snak med en udlandsk accent indtil det er din tur igen!",
    "Du må ikke snakke indtil det er din tur igen!",
    "Skriv til en af dine venner at du er forelsket i dem!",
    "Drik hvis du har et crush på en af deltagerne af spillet!",
    "Stirrekonkurrence med din venstre sidemakker! - Taberen drikker!",
    "Hvis du kigger på din telefon inden for de næste 15 minutter skal du bunde!",
    "Lad resten af gruppen poste en opdatering på din facebook!",
    "Lav 'Fuck, Marry, Kill' til resten af gruppen!",
    "Drik hvis gruppen kan få dig til at grine inden det er din tur igen!",
    "Drik en tår af din venstre sidemakkers drink!",
    "!PAYBACK TIME! - Du må vælge hvem der skal drikke!",
]

let dares = [
    "Gruppen vælger et ord du skal afslutte alle dine sætninger med indtil det er din tur igen!",
    "Lad resten af gruppen DM en person på din Instagram!", 
    "Spørg om lov, før du rejser dig op resten af spillet!", 
    "Gruppen blander en ulækker drink som du skal drikke!", 
    "Nævn de 3 sidste google-søgninger du har lavet!", 
    "Gentag alt hvad personen til højre for dig siger, indtil det er din tur igen!", 
    "Hvisk en hemmelighed til personen til venstre for dig!", 
    "Du må kun hviske de næste 5 minutter!", 
    "Næste gang du bander skal du bunde din drink!", 
    "stå på et ben, indtil det er din tur igen!", 
    "drik en ekstra tår på de næste 3 fælles skål!", 
    "Fortæl gruppen hvad din 'bodycount' er!", 
    "tag dine sko af indtil det er din tur igen!", 
    "resten af gruppen på poste en story på din instagram!",   
    "sig ja til alt indtil det har været din tur igen",  
    "fortæl hvad dit bedste score-trick i byen er", 
    "lad gruppen skrive til 3 personer på din Tinder / anden dating app", 
    "drik hvis du er i et forhold - du er kedelig!",
    "Find et billede af en positiv graviditets-test, og send den til dit crush!",
    "snak med en udlandsk accent indtil det er din tur igen!",
    "Du må ikke snakke indtil det er din tur igen!",
    "Skriv til en af dine venner at du er forelsket i dem!",
    "Drik hvis du har et crush på en af deltagerne af spillet!",
    "Stirrekonkurrence med din venstre sidemakker! - Taberen drikker!",
    "Hvis du kigger på din telefon inden for de næste 15 minutter skal du bunde!",
    "Lad resten af gruppen poste en opdatering på din facebook!",
    "Lav 'Fuck, Marry, Kill' til resten af gruppen!",
    "Drik hvis gruppen kan få dig til at grine inden det er din tur igen!",
    "Drik en tår af din venstre sidemakkers drink!",
    "!PAYBACK TIME! - Du må vælge hvem der skal drikke!",
]
    let dareText = document.getElementById('dareText')
    let dareNumber
// let truths = [
//     "Hvad er din største hemmelighed?", 
//     "Hvornår løj du sidst, og om hvad?", 
//     "Har du nogensinde gjort noget ulovligt?", 
//     "Er du nogensinde blevet anholdt?", 
//     "Er der nogen i dette rum du har et crush på?", 
//     "Hvad er det mærkeligste sted du har haft sex?", 
//     "Hvad er din største frygt?", 
//     "Hvad er dit største Turn-off?", 
//     "har du et hemmeligt talent? - hvis ja, hvad?", 
//     "Gruppen må blive enige om et valgfrit spørgsmål til dig!", 
//     "Nævn din største 'Guilty Pleaseure'!", 
//     "hvis du kun kunne lytte til én sang resten af dit liv, hvilken sang skulle det så være?", 
//     "Hvornår kastede du sidst op?", ]

//Removes Popup and resets the "dares" array
function resetDares() {
    dares = dares.concat(daresConst);
    document.getElementById('alertContainer').style.transition = "2s"
    document.getElementById('alertContainer').style.opacity = "0"
    setTimeout(() =>{
        document.getElementById('alertContainer').style.display = "none"
        document.getElementById('alertContainer').style.transition = "0s"
    }, 2000);
    console.log(dares);
    console.log(daresConst);
}
//roll wheel, when "Spin" button is clicked.
function rollWheel() {
    //checks if the wheel is spinning. if not, then spins the wheel.
    if (spinningProgress == false) {
        dareText.style.opacity = "0"
        document.getElementById('spinThis').style.transition = "8s"
        wheelPosition = Math.floor((Math.random() * 360) + 0)
        
        document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
        if (wheelPosition >= 15 && wheelPosition <= 45 || wheelPosition >= 105 && wheelPosition <= 135 || wheelPosition >= 195 && wheelPosition <= 225 || wheelPosition >= 285 && wheelPosition <= 315) {
            console.log(wheelPosition)
            dareText.style.transition = "0s"
            spinningProgress = true
            wheelPosition = wheelPosition + 3600
            document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"

            dareNumber = Math.floor((Math.random() * dares.length) + 0)
            dareText.style.transition = "1.5s"
            setTimeout(() =>{
                document.getElementById('option-1').style.animation = "text-blink 500ms infinite"
                document.getElementById('spinThis').style.transition = "0s"
                wheelPosition = wheelPosition - 3600
                document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
                
                dareText.innerHTML = dares[dareNumber]
                dareText.style.opacity = "1"
                setTimeout(() =>{
                    document.getElementById('option-1').style.animation = "none"
                    spinningProgress = false
                    dares.splice(dareNumber, 1)
                    console.log(dares)
                    if (dares.length == 0) {
                        document.getElementById('alertContainer').style.display = "unset"
                        document.getElementById('alertContainer').style.opacity = "0"
                        document.getElementById('alertContainer').style.transition = "2s"
                        setTimeout(() =>{
                            document.getElementById('alertContainer').style.opacity = "1"
                        }, 1000);
                    }
                }, 3500);
        }, 8000);
    }
    else if (wheelPosition >= 45 && wheelPosition <= 75 || wheelPosition >= 135 && wheelPosition <= 165 || wheelPosition >= 225 && wheelPosition <= 255 || wheelPosition >= 315 && wheelPosition <= 345) {
        console.log(wheelPosition)
        spinningProgress = true
        wheelPosition = wheelPosition + 3600
        document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
        
        setTimeout(() =>{
            document.getElementById('option-2').style.animation = "text-blink 500ms infinite"
            document.getElementById('spinThis').style.transition = "0s"
            wheelPosition = wheelPosition - 3600
            document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
            setTimeout(() =>{
                document.getElementById('option-2').style.animation = "none"
                spinningProgress = false
            }, 3500);
        }, 8000);
    }
    else if (wheelPosition >= 75 && wheelPosition <= 105 || wheelPosition >= 165 && wheelPosition <= 195 || wheelPosition >= 255 && wheelPosition <= 285) {
        console.log(wheelPosition)
        spinningProgress = true
        wheelPosition = wheelPosition + 3600
        document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
        
        setTimeout(() =>{
            document.getElementById('option-3').style.animation = "text-blink 500ms infinite"
            document.getElementById('spinThis').style.transition = "0s"
            wheelPosition = wheelPosition - 3600
            document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
            setTimeout(() =>{
                document.getElementById('option-3').style.animation = "none"
                spinningProgress = false
            }, 3500);
        }, 8000);
    }
    else if (wheelPosition <= 15 && wheelPosition >= 0 || wheelPosition >= 345) {
        console.log(wheelPosition)
        spinningProgress = true
        wheelPosition = wheelPosition + 3600
        document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
        
        setTimeout(() =>{
            document.getElementById('option-4').style.animation = "text-blink 500ms infinite"
            document.getElementById('spinThis').style.transition = "0s"
            wheelPosition = wheelPosition - 3600
            document.getElementById('spinThis').style.transform = "rotate(" + wheelPosition + "deg)"
            setTimeout(() =>{
                document.getElementById('option-4').style.animation = "none"
                spinningProgress = false
            }, 3500);
        }, 8000);
    }
}
}
