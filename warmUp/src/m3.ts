{

interface Developer<T,C=null>{
    name: string;
    computer:{
        barand: string,
        model:string,
        relese:number;
    },
    smartTab:T,
    car?: C
}
interface Huwaei{ // create Dynamic value T
    name:string;
    version:number;
    display:string
}
const internDeveloper: Developer<Huwaei>={
    name: "Mr HangMan",
    computer:{
        barand: "Asus",
        model:"vi65",
        relese:2066,
    },
    smartTab:{
        name:"Huwaei",
        version:2008,
        display:'oled3k'
    }
}

interface Apple{  // create Dynamic value  T
    name:string;
    version:number;
    heartTrack:boolean;
    sleepTrack:boolean;
}
interface Dunlop{
    name:string;
    model:string;
    version:string;
}
const FullDeveloper: Developer<Apple,Dunlop>={
    name: "Mr Man",
    computer:{
        barand: "Apple Mac",
        model:"vi65",
        relese:2026,
    },
    smartTab:{
        name:"Apple",
        version:2007,
        heartTrack:true,
        sleepTrack:true,
    },
    car:{
        name:'Dunlop',
        model:"rt-67",
        version:"3007",

    }
}


}