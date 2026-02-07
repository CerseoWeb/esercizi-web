/**
 * Esercizio Extra2: Calcolatore BMI - Indice di Massa Corporea
 * 
 * Descrizione:
 * Calcola l'Indice di Massa Corporea (BMI) e determina la categoria di peso.
 * Questo esercizio richiede di SPEZZARE il lavoro in PIÙ FUNZIONI.
 * 
 * Obiettivo:
 * Implementare due funzioni che lavorano insieme:
 * 1. Una che calcola l'indice BMI
 * 2. Una che determina la categoria di peso basata sul BMI
 * 
 * Istruzioni:
 * 1. Crea una funzione `calcolaBMI(peso, altezza)` che:
 *    - Accetta il peso in kg e l'altezza in metri
 *    - Calcola BMI usando la formula: BMI = peso / (altezza × altezza)
 *    - Restituisce il BMI arrotondato a 1 decimale
 * 
 * 2. Crea una funzione `categorizzaBMI(bmi)` che:
 *    - Accetta il valore del BMI
 *    - Restituisce una categoria in base a questi intervalli:
 *      * BMI < 18.5  →  "Sottopeso"
 *      * 18.5 ≤ BMI < 25  →  "Peso normale"
 *      * 25 ≤ BMI < 30  →  "Sovrappeso"
 *      * BMI ≥ 30  →  "Obeso"
 * 
 * 3. Crea una funzione principale `valutaPeso(peso, altezza)` che:
 *    - Chiama calcolaBMI() per ottenere l'indice
 *    - Chiama categorizzaBMI() per ottenere la categoria
 *    - Restituisce una stringa descrittiva come:
 *      "BMI: 24.5 | Categoria: Peso normale"
 * 
 * Esempio di utilizzo:
 * valutaPeso(70, 1.75) dovrebbe indicare "BMI: 22.9 | Categoria: Peso normale"
 * valutaPeso(100, 1.75) dovrebbe indicare "BMI: 32.7 | Categoria: Obeso"
 * valutaPeso(50, 1.75) dovrebbe indicare "BMI: 16.3 | Categoria: Sottopeso"
 */
