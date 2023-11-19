# Typescript

## Creare una classe
     
    class Persona(){} 

## aggiungere proprietà

    class Persona(){
        nome : string
        cognome : string
    }

## creare costruttore con parametri

    construct(nome : string, cognome : string){
        this.nome = nome;
        this.cognome = cognome
    }

## metodi con tipi di dati

- il metodo è una funzione che si svolge all'interno della classe a cui possiamo assegnare una volta chiamata.

## modificatori di accesso: private, public e protected

    public : posso chiamare ovunque
    private : posso chiamare all'interno della classe
    protected : posso chiamarlo all'interno della classe e nelle classi extends con dei metodi
## shorthand costruttore
## proprieta readonly

- al momento in cui definiamo redonly una proprietà non la possiamo più cambiare il valore
## creare classe figlia costruttore default e super
## protected
## proprietà e metodi static

    nella proprietà static : possiamo chiamare la classe senza creare l'oggetto.

## classi astratte

sono classi che contengono uno o più metodi astratti
-nei methodi abstract non possiamo inserire delle implementazioni, possiamo solo dichiararle
## singleton con private constructor e static instace

- il singleton è un pattern di programmazione che ci obbliga a utilizzare un unica instanza di una classe



Creato una classe TypeScript chiamata Persona. Questa classe ha due proprietà: nome e cognome, entrambe di tipo stringa. Il costruttore della classe accetta due parametri (nome e cognome) e li assegna alle rispettive proprietà della classe usando la parola chiave this.

La classe ha anche due metodi:

    Il metodo presenta() stampa un messaggio di presentazione sulla console, utilizzando i valori delle proprietà nome e cognome dell'istanza corrente della classe.

    Il metodo saluta(persona: Persona) accetta un parametro di tipo Persona chiamato persona. Questo metodo stampa un messaggio di saluto personalizzato sulla console, utilizzando le proprietà nome e cognome della persona passata come argomento.

Infine, hai creato tre istanze della classe Persona:

    persona con nome "Giovanni" e cognome "Falcone".
    persona1 con nome "Maria" e cognome "Filiberto".
    persona2 con nome "Francesco" e cognome "Millemaci".

Hai chiamato il metodo presenta() sull'istanza persona1 per mostrarne la presentazione sulla console. Successivamente, hai chiamato il metodo saluta() sull'istanza persona2, passando persona1 come argomento, per visualizzare un messaggio di saluto personalizzato sulla console.


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
