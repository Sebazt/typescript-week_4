class Alumno {
  public nombre: string;
  public edad: number;
  public correo: string;
  public promedio: number;

  constructor(nombre: string, edad: number, correo: string, promedio: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.promedio = promedio;
  }
}

const alumnos: Array<Alumno> = [
  { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
  { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
  { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
  { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
  { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
  {
    nombre: "Maria Contreras",
    edad: 20,
    correo: "mariaC@gmail.com",
    promedio: 10,
  },
  { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
  {
    nombre: "Angelica Galindo",
    edad: 19,
    correo: "angelica@galindo.com",
    promedio: 7,
  },
  { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
  { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
  { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
  {
    nombre: "Daniela Medina",
    edad: 20,
    correo: "danielamedinaC@gmail.com",
    promedio: 7,
  },
];

/* Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos. */

const exercise1 = () => {
  const goodStudents: Alumno[] = [];
  alumnos.filter((studen) => {
    studen.promedio > 6;
    goodStudents.push(studen);
  });
  console.log(
    "---------------------exercise number 1-----------------------------"
  );
  console.log(goodStudents);
};
exercise1();

/* Devuelva una lista de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años. */

const exercise2 = () => {
  const otherStudents: Alumno[] = [];
  alumnos.filter((student) => {
    if (student.promedio < 6 && student.edad > 19) {
      otherStudents.push(student);
    }
  });
  console.log(
    "---------------------exercise number 2-----------------------------"
  );
  console.log(otherStudents);
};
exercise2();

/* Devuelva un arreglo ordenado segun el promedio de forma ascendente. */

const exercise3 = () => {
  const arrayPromedio: Alumno[] = [...alumnos];
  arrayPromedio.sort((prom, prom2) => {
    return prom.promedio - prom2.promedio;
  });
  console.log(
    "---------------------exercise number 3----------------------------"
  );
  console.log(arrayPromedio);
};
exercise3();


/* El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, devuelva un arreglo que cumpla con esta condición */

const exercise4 = () => {
  const badStudents: Alumno[] = [];
  /* alumnos.filter((student) => {
    if (student.promedio <= 4) {
      badStudents.push(student);
    }
  }); */
  alumnos.map((student)=>{
    if(student.promedio <= 4){
      student.promedio += 2
      badStudents.push(student)
    }
  })

  /* for (let i = 0; i < badStudents.length; i++) {
    badStudents[i].promedio = badStudents[i].promedio + 2;
  } */
  console.log(
    "---------------------exercise number 4----------------------------"
  );
  console.log(badStudents);
};
exercise4();

/* Devuelva el promedio general de todos los alumnos */

const exercise5 = () => {
  let total: number = 0;
  alumnos.forEach((item) => {
    total += item.promedio;
  });
  let promedio:number = total / alumnos.length;
  promedio = Math.round((promedio + Number.EPSILON)* 100) /100;
  console.log(
    "---------------------exercise number 5----------------------------"
  );
  console.log(`El promedio general de los alumnos es de ${promedio}`);
};
exercise5();
