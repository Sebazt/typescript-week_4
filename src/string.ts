const stringFunctions = () =>{
  const str: string = "Juan Sebastian Londoño";


  // INDEXOF me muestra el indice dónde empieza la palabra que le pase
  const strIndexOf:number = str.indexOf("Sebas")
  //console.log(strIndexOf)

  // INCLUDES buca y devuelve un booleano
  const strInclude:boolean =str.includes("Lon")
  //console.log(strInclude);

  // SLICE desde el primer indice hasta el que pase como segundo arg.
  const strSlice:string = str.slice(0, 10);
  //console.log(strSlice);

  // SPLIT divide el string en un arragle a través de lo que los divide
  const strSplit:string[] = str.split(" ")
  //console.log(strSplit)

  //STARTSWITH con que empiezo y retorna booleano
  const strStartWith:boolean = str.startsWith("Se")
  //console.log(strStartWith)

  //REPLICA que caracter reemplazo por otro
  const strAllReplacer:string = str.replace("Sebastian", "Sebazt")
  //console.log(strAllReplacer)
}
stringFunctions()