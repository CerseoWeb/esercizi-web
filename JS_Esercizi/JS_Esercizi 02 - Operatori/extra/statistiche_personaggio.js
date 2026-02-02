/**
 * Esercizio Extra: Statistiche Personaggio RPG
 * 
 * DESCRIZIONE:
 * In un gioco di ruolo, il danno inflitto dipende da Forza, Arma e Bonus.
 * 
 * Istruzioni:
 * 1. Dichiara variabili per: 'forzaBase' (num), 'dannoArma' (num), 'moltiplicatoreCritico' (num, es 1.5).
 * 2. Dichiara una variabile booleana 'colpoCritico' (true o false).
 * 3. Dichiara una variabile booleana 'nemicoInDifesa' (true o false).
 * 
 * 4. Logica del Danno:
 * - Il 'dannoBase' è (forzaBase + dannoArma).
 * - Se 'colpoCritico' è true, il dannoBase viene moltiplicato per 'moltiplicatoreCritico'. 
 * (NOTA: Non puoi usare IF. Usa l'operatore ternario se lo conosci, oppure usa la matematica: 
 * danno * (1 + (0.5 * colpoCritico)) -> JavaScript converte true in 1 e false in 0).
 * - Se 'nemicoInDifesa' è true, il danno finale viene dimezzato (diviso 2).
 * 
 * 5. Calcola e stampa il danno finale in un unico passaggio logico o passaggi sequenziali.
 * 
 * Sfida Matematica: Prova a risolvere sfruttando il fatto che true vale 1 e false vale 0 nei calcoli matematici.
 * 
 * Esempio di test:
 * - forzaBase = 50, dannoArma = 20, moltiplicatoreCritico = 2, colpoCritico = true, nemicoInDifesa = false => danno finale = 140
 * - forzaBase = 30, dannoArma = 10, moltiplicatoreCritico = 1.5, colpoCritico = false, nemicoInDifesa = true => danno finale = 20
 * - forzaBase = 40, dannoArma = 15, moltiplicatoreCritico = 2, colpoCritico = true, nemicoInDifesa = true => danno finale = 55
 */
