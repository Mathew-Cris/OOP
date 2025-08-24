//Inherittance
class Phone{
  constructor(Model,OS){
    this.Model = Model;
    this.OS = OS;
  }
  startUP(){
    console.log(`Phone Model: ${this.Model}\nPhone OS: ${this.OS}\nPhone CPU: ${this.CPU}\nStartup...`);
  }
}
//the class Android inherits the class phone
class Android extends Phone{
  constructor(Model,OS,CPU){
    super(Model,OS);
    this.CPU = CPU;
  }
}

const phone01 = new Android("Realme C25s", "Android OS", "Mediatek Helio G85");

phone01.startUP();
