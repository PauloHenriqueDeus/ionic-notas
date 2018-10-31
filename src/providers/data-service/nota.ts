export class Nota{
    name:string;
    content:string;
    data:number;
  
    id = 0;
    
    constructor(id:number){
      this.id = id;
      this.name = "Nota " + id.toString();
      this.data = Date.now();
      this.content = "Texto da nota.";
    }
  }
  