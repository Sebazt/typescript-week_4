const numArray: number[] = [1, 2, 3, 4, 5, 6, 10, 50, 42, 11];
const nameArray: string[] = [
  "juan",
  "sebastian",
  "pepito",
  "catalina",
  "sergio",
];

/* FOR EACT puede tener dos parametros. */
const arrayNumber = () => {
  numArray.forEach((num, index) => {
    console.log(`${num} -- ${index}`);
  });
};
arrayNumber();

/* MAP */

const arrayMap = () => {
  const arrayNombre: string[] = [];
  nameArray.map((name) => {
    arrayNombre.push(name);
  });
  console.log(arrayNombre);
};
arrayMap();

/* filter */

const arrayFilter = () => {
  const arrayNumberFilter: number[] = [];
  numArray.filter((x) => {
    if (x % 2 === 0 && x >= 10) {
      arrayNumberFilter.push(x);
    } else {
      ("no hay número pares");
    }
  });
  console.log(arrayNumberFilter)
};
arrayFilter();

/* FIND , envia solo a primera coincidencia*/
function arrayFind(){
  const presupuesto = [
    {
      city: "Medellín",
      budget: 5000,
    },
    {
      city: "Bogota",
      budget: 4999,
    },
    {
      city: "Calí",
      budget: 2000,
    },
  ];
  
  const result = presupuesto.find( item => item.budget > 4999)
  console.log(result);
  
}
arrayFind();

/*  findIndex devuelve la el indice */

function arrayFindIndex() {
  const presupuesto = [
    {
      city: "Medellín",
      budget: 5000,
    },
    {
      city: "Bogota",
      budget: 4999,
    },
    {
      city: "Calí",
      budget: 2000,
    },
  ];

  const result = presupuesto.findIndex((item) => item.budget === 2000);
  console.log(`Este metodo arroja el indice ${result}`);
}
arrayFindIndex();

/* REDUCE */

const arrayReduce = ()=>{
  const result = numArray.reduce((previo, item, index)=>{
    return previo + item /*  result es = result + item   suma tooodo el array*/
  })
  console.log(result);

  function maxMin(){
    const resultado = numArray.reduce((prev,item,index)=>{
      return Math.max(prev,item)
    }, 1)
    console.log(`resultado del mayor es ${resultado}`)
  }
  maxMin()
}
arrayReduce();

/* EVERY test cont todos los elementos para ver si cumple una condición */

const arrayEvery = () =>{
  let verdad = false;
  numArray.every((x)=>{
    if(x > 0){
      verdad = true
    }
  })
  console.log(verdad);
  /* la forma correcta de hacerlo es :  */
  const pasados = numArray.every((x)=> x < 0 );
  console.log(pasados)
}
arrayEvery()

/* con some es para averiguar si almenos uno cumple el condicional */
const arraySome = () =>{
  const noPasados = numArray.some(x => x <= 0)
  console.log(noPasados);
}
arraySome()

/* includes */

const arrayIncludes = () =>{
  console.log(numArray.includes(2))
}
arrayIncludes()

/* SORT ordenar arrays */

const arraySort = () =>{
  let arreglo = [...numArray] /* creo una copia */
  arreglo.sort((i,j)=>{
    /* return i - j */ /* menor a mayor */
    return j - i; /* mayor a menor */
  });
  console.log(arreglo)
}
arraySort()