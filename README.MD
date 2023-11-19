
# TypeScript: Introduzione alle Classi e Concetti Avanzati

Questo progetto TypeScript illustra vari concetti relativi all'uso delle classi, dai concetti di base alle funzionalità avanzate.

## Classi di Base in TypeScript

### Creare una Classe

Definizione di una classe di base senza proprietà o metodi specifici.

### Aggiungere Proprietà

Aggiunta di proprietà come nome e cognome a una classe.

### Creare un Costruttore con Parametri

Implementazione di un costruttore che accetta parametri come nome e cognome.

### Metodi con Tipi di Dati

Introduzione ai metodi all'interno delle classi con tipi di dati specificati.

## Modificatori di Accesso

- `public`: Accessibile ovunque.
- `private`: Accessibile solo all'interno della classe.
- `protected`: Accessibile all'interno della classe e nelle classi estese.

## Altri Concetti Importanti

### Shorthand Costruttore

Utilizzo dello shorthand per definire e assegnare proprietà nel costruttore.

### Proprietà Readonly

Utilizzo di proprietà `readonly` per impedire la modifica dei valori dopo l'inizializzazione.

### Creare una Classe Figlia con Costruttore Default e `super`

Estensione di una classe creando una classe figlia con un costruttore che chiama il costruttore della classe madre.

### Proprietà e Metodi Statici

Introduzione alle proprietà e ai metodi statici, che appartengono alla classe anziché a un'istanza.

### Classi Astratte

Definizione di classi astratte contenenti metodi astratti, senza implementazioni specifiche.

### Singleton con Costruttore Privato e `static instance`

Implementazione di un pattern singleton per garantire un'unica istanza della classe.

## Utilizzo dell'Esempio di Codice

Il file `app.ts` contiene un esempio pratico che utilizza molte delle funzionalità descritte sopra. Viene creata un'istanza di una classe `Studente`, vengono eseguiti metodi e viene illustrato l'uso del singleton con una classe `Preside`.
