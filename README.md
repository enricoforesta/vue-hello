# Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

## Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

# Logica

1. Nell html collego il CDN di vueJs.

2. Creo un div con un id, dove tutto il contenuto sarà gestito da vue.

3. Creo un h1 con dentro il nome della variabile contenuta in data.

4. nel Js con la destrutturazione dal vue ci prendiamo "createApp" che ci servirà per creare il contenuto che stamperemo a schermo.

5. Per inserire l'immagine, usiamo il V-blind prima del src dell img per poi passargli il link dell'iimagine, in questo modo scriviamo negli attributi e non dentro il tag.
    ES. "<img :src="photo" alt=""> oppure "<img V-blind:src="photo" alt="">. 
"


