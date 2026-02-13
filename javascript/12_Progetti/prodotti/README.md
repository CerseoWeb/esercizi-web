# Negozio Online

Questo è un progetto del corso Web.
Dovrai creare una pagina web che mostra prodotti recuperati da un'API (locale), con funzionalità di visualizzazione dettagli e filtri (opzionali).

Le funzionalità principali da implementare sono:
1. **Recuperare i prodotti da API** - Usare `fetch` per ottenere i dati da un'API locale
2. **Mostrare i prodotti in una tabella** - immagine, nome, prezzo, disponibilità
3. **Modale dei dettagli** - Quando clicchi su un prodotto mostra un modale (finestra popup) con tutte le info (immagine grande, nome, descrizione, prezzo, disponibilità) e un pulsante "×" per tornare alla tabella.
4. **Bonus - Filtri** - Aggiungere filtri di ricerca per nome e categoria (opzionale)

## Come Iniziare

1. **Creare la Repository su GitHub**
    * Vai su [github.com](https://github.com) e crea una nuova repository (In alto un pulsante "+" e poi "New Repository")
    * Repository Name: `NegozioWeb` → Create Repository
    * **Copia l'URL** della repo (es: `https://github.com/[tuonome]/NegozioWeb.git`)

2. **Clonare la Repository**
    ```bash
    git clone https://github.com/[tuonome]/NegozioWeb.git
    cd NegozioWeb
    ```

3. **Copiare i File Base**: copia i file forniti (`index.html`, `style.css`, `script.js`, `README.md`) nella tua cartella di progetto.

4. **Apri il Progetto in VSCode**: Da dentro vs code, apri la cartella del progetto (`File → Open Folder`).\
*NOTA*: Prima di iniziare, assicurati di aver fatto il login a GitHub da VSCode, in modo da poter fare commit e push direttamente dall'editor.

5. **Commit Iniziale**: Dopo aver copiato i file, è importante fare un commit iniziale per avere una base di partenza.
Nel tab di VSCode, vai su "Source Control" (icona del ramo git) e vedrai i file non tracciati. Aggiungili al commit e scrivi un messaggio chiaro come "Initial commit: HTML + CSS structure", poi fai commit+push.

6. **Struttura HTML**: In questo primo punto faremo la struttura base della pagina assieme, in modo da mostrare come lavorare con Git e fare commit frequenti.
   ```
   🎯 Colleghiamo i vari files
   1. Collega il file CSS in index.html
   2. Collega il file JS in index.html
   3. Creiamo un div con class "container" che conterrà tutta la pagina
   → commit: "HTML: aggiunta struttura tabella"
   ```
   ```
   🎯 Creiamo l'HTML della tabella
   1. Tabella vuota
   2. Header della tabella con: Immagine, Nome, Prezzo, Disponibilità
   3. Body con id "tabellaProdotti" (dove inseriremo i prodotti dinamicamente)
   → commit: "HTML: aggiunta struttura tabella"
   ```
   ```
   🎯 Creiamo il modale
   1. Div con class "modal nascosto" e id "modale"
   2. Div interno con class "modal-content"
   3. Contenuto del modal:
     - H2 con id "prodottoNome"
     - Immagine con id "prodottoImmagine"
     - Paragrafo con id "prodottoDescrizione"
     - Paragrafo con id "prodottoPrezzo"
     - Paragrafo con id "prodottoDisponibilita"
     - span con id "chiudi" e class "close" con dentro il simbolo "×"
   → commit: "HTML: aggiunta struttura modal"
   → push o sincronizzazione per salvare su GitHub
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
