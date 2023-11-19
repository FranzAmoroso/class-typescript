
// Recupero l'elemento inputN e cast a HTMLInputElement
let inputN = document.querySelector('#inputN') as HTMLInputElement;

//definiamo il valore che passa dall'input è di tipo number. Assegnato alla variabile x
let x =  Number(inputN.value);


// Definizione di una classe astratta Persona con proprietà nome, cognome ed eta
abstract class Persona {

    // Proprietà di sola lettura, visibili a tutte le classi che estendono Persona
    constructor(
      public readonly nome: string,
      public cognome: string,
      protected eta: number
    ) {
      this.nome = nome;
      this.cognome = cognome;
      this.eta = eta;
    }
  
    // Metodo astratto che deve essere implementato dalle classi figlie
    abstract presenta(): void;
  
    // Metodo che saluta un'altra persona stampando il nome, cognome ed eta
    saluta(persona: Persona): void {
      console.log(
        `Ciao ${persona.nome} ${persona.cognome}, molto piacere, hai ${persona.eta} anni`
      );
    }
  }
  
  // Definizione di una classe Studente che estende la classe Persona
  class Studente extends Persona {

    // La classe Studente ha una proprietà aggiuntiva chiamata materiaPrefer
    constructor(
      readonly nome: string,
      cognome: string,
      eta: number,
      private materiaPrefer: string
    ) {
      // Chiamata al costruttore della classe madre (Persona)
      super(nome, cognome, eta);
    }
  
    // Implementazione del metodo presenta() richiesto dalla classe madre
    presenta(): void{
      console.log(`ciao sono ${this.nome} ${this.cognome} ho ${this.eta} anni`);
    }
  
    // Metodo che cambia l'età dello studente
    cambiaEta(nummer: number): number {
      this.eta = nummer
      return nummer
    }
  }
  
   
   
   // Creazione di un'istanza della classe Studente
   const studente: Studente = new Studente("Giovanni", "Adreotti", 16, 'informatica');

  
  // Aggiunta di un listener per l'evento di submit del form
  document.querySelector('form').addEventListener('submit', (event) => {
    
    event.preventDefault();

    // Chiamata al metodo cambiaEta dello studente con il valore dell'input convertito a numero
    if(isNaN(x)){
        console.log("inserisci un valore nell'input", x);  
    }else{ 
        
        //Cambia il valore di eta dello studente
        studente.cambiaEta(Number(inputN.value))

        //Mostra se il metodo cambiaEta funziona
        studente.presenta()
    }
  });
    

  
  
  // Chiamata ai metodi presenta() e saluta() dello studente
  studente.presenta();
  studente.saluta(studente);
  
  // Definizione di una classe Preside con un metodo statico per ottenere un'istanza singola
  class Preside {
    private static instace: Preside;
  
    // Costruttore privato
    private constructor(private nome: string, private cognome: string) {}
  
    // Metodo statico per ottenere un'istanza singola della classe Preside
    static getInstance(): Preside {
      if (Preside.instace) {
        return Preside.instace;
      }
      Preside.instace = new Preside('Marco', 'Filippo');
      return Preside.instace;
    }
  
    // Metodo che presenta il preside
    presenta(): void {
      console.log(`buongiorno sono il preside ${this.nome} ${this.cognome}`);
    }
  }
  
  // Chiamata al metodo presenta() della classe Preside tramite il metodo statico getInstance()
  Preside.getInstance().presenta();
  