 
 ## Instructions
Trenitalia ha bisogno di un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65 

## Steps
-Richiedere all'utente tramite input i 2 valori (prima i km e dopo la sua età)
-Stampiamo in console i 2 valori
-Stabiliamo il prezzo del biglietto con una variabile
-Eseguiamo delle operazioni math:
   - la prima sarà il prezzo totale del viaggio 
    - dopo che scopriamo il prezzo del viaggio, tramite  SE  (la condizionale) aplichiamo quanto segue:
          - SE ha l' età compressa tra 0-18 anni dal prezzo totale avrà un sconto di 20% ALTRIMENTI SE
          - ha l'età tra i 18-64 anni il prezzo sarà invariato ALTRIMENTI SE
          - ha l'età sopra 65 anni avrà lo sconto di 40%

## Tools
- variabili let o const
- prompt
- if else 
- operators arithmetic 
- comparisons 

