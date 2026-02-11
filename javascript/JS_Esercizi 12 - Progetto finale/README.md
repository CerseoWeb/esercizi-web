# Negozio Online

Questo è il progetto del corso Web.
Dovrai creare una pagina web che mostra prodotti recuperati da un'API (locale), con funzionalità di visualizzazione dettagli e filtri.

Le funzionalità principali da implementare sono:
1. **Recuperare i prodotti da API**
2. **Mostrare i prodotti in una tabella** con:
   - Immagine
   - Nome
   - Prezzo
   - Disponibilità (✅ disponibile / ❌ non disponibile)
3. **Modal dei dettagli** - Quando clicchi su un prodotto:
   - Mostra TUTTE le info (id, nome, descrizione, categoria, prezzo, immagine, disponibilità)
   - Pulsante "Chiudi" per tornare alla lista
4. **Bonus - Filtri:**
   - Barra di ricerca per filtrare per nome
   - Dropdown per categoria

## Come Iniziare

1. **Creare la Repository su GitHub**
    * Vai su [github.com](https://github.com) e crea una nuova repository
    * Nomina: `NegozioWeb`
    * **Copia l'URL** della repo (es: `https://github.com/[tuonome]/NegozioWeb.git`)

2. **Clonare la Repository**
   ```bash
   git clone https://github.com/[tuonome]/NegozioWeb.git
   cd NegozioWeb
   ```

3. **Copiare i File Base**: copia i file forniti (`index.html`, `style.css`, `script.js`) nella tua cartella di progetto.

4. **Apri il Progetto in VSCode**: Da dentro vs code, apri la cartella del progetto (`File → Open Folder`).

5. **Commit Iniziale**: Dopo aver copiato i file, è importante fare un commit iniziale per avere una base di partenza.
Nel tab di VSCode, vai su "Source Control" (icona del ramo git) e vedrai i file non tracciati. Aggiungili al commit e scrivi un messaggio chiaro come "Initial commit: HTML + CSS structure", poi fai commit+push.

6. **Struttura HTML**: In questo primo punto faremo la struttura base della pagina assieme, in modo da mostrare come lavorare con Git e fare commit frequenti.
   ```
   🎯 Creiamo l'HTML della tabella
   1. Tabella vuota
   2. Header della tabella con: Immagine, Nome, Prezzo, Disponibilità
   → commit: "HTML: aggiunta struttura tabella"
   ```
   ```
   🎯 Creiamo il modale
   1. Div con class "modal nascosto" (nascosto di default)
   2. Contenuto del modal: titolo, descrizione, immagine, prezzo, disponibilità
   3. Pulsante "Chiudi" nel modal con class "btn-close"
   → commit: "HTML: aggiunta struttura modal"
   ```

## 📝 Esercizio da Implementare

Dopo la sessione iniziale, si dovranno completare le funzionalità 
indicate dentro il file `script.js` seguendo il workflow Git.

Dopo ogni funzionalità completata, si deve fare un commit con un messaggio chiaro e significativo.
Ogni tanto ricordarsi di fare push per evitare di perdere il lavoro!

Gli esercizi da fare si possono dividere in 3 punti principali:

1. Popolare la tabella con i dati dei prodotti
2. Implementare il modal dei dettagli
3. Bonus: Aggiungere filtri di ricerca e categoria

### Struttura dei Dati
L'API locale restituirà un array di oggetti, dove ogni oggetto rappresenta un prodotto.
Ogni prodotto dovrebbe avere questa struttura (esempio):
```json
{
  "id": 1,
  "nome": "Laptop MacBook Pro",
  "descrizione": "Laptop professionale...",
  "categoria": "Elettronica",
  "prezzo": 2499.99,
  "immagine": "https://...",
  "disponibilita": true
}
```

### 💡 Suggerimenti per l'Implementazione

1. **Dividere il lavoro in funzioni piccole:**
   - `function creaRigaProdotto(product)` → crea HTML di una riga
   - `function mostraProdotti(products)` → riempie la tabella
   - `function toggleModal()` → mostra/nascondi modal

2. **Usa gli event listener:**
   - `click` su riga della tabella → mostra modal e riempi i dettagli
   - `click` su bottone "Chiudi" → nascondi modal

3. **Testing:**
   - Apri la console e verifica che il fetch funzioni (print dei dati come prova)
   - Verifica che la tabella si popoli correttamente
   - Clicca su una riga e verifica che appaia il modal
