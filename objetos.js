var assert = require("assert");

//EJERCICIO 1
function Rectangulo (base, altura){
  this.base = base;
  this.altura = altura;
  this.area = function(){
    var resultado = 0;
    if (isNaN(parseInt(this.base)) || (isNaN(parseInt(this.altura)))){
      resultado = "Te falta un parámetro";
    } else {
      resultado = this.base * this.altura;
    }
    return resultado;
  }
}

var rectanguloUno = new Rectangulo(10,10);
var rectanguloDos = new Rectangulo("10", 10);
var rectanguloTres = new Rectangulo(0.5, 10);
var rectanguloCuatro = new Rectangulo(10, "");

//EJERCICIO 2
function FechaNacimiento (nombre, dia, mes, anio){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
  this.fecha = new Date;
  this.anioActual = this.fecha.getFullYear();
  this.mesActual = this.fecha.getMonth();
  this.diaActual = this.fecha.getDate();
  this.edad = function (){
    var resultado = "";
    if(this.mes > this.mesActual + 1) // Aún no se ha cumplido años
    {
      resultado =  ("La edad actual de " + this.nombre + " es " + ((this.anioActual - 1) - this.anio ));
    }
    else if ((this.mes  == (this.mesActual + 1)) && (this.dia > this.diaActual)) // Si aún no cumple los años dentro del mes
    {
      resultado = ("La edad actual de " + this.nombre + " es " + ((this.anioActual - 1) - this.anio ));
    }
    else if ((this.mes  == (this.mesActual + 1)) && (this.dia < this.diaActual)) // Si cumplió los años dentro del mes
    {
      resultado = ("La edad actual de " + this.nombre + " es " + (this.anioActual - this.anio));
    }
    else {
      resultado = ("La edad actual de " + this.nombre + " es " + (this.anioActual - this.anio ));
    }
    return resultado;
  }
}

var su = new FechaNacimiento ("Sú", 23, 8, 1991);
var luisa = new FechaNacimiento ("Luisa", 25, 2, 1995);
var beth = new FechaNacimiento ("Beth", 10, 6, 1991);
var luis = new FechaNacimiento ("Luis", 30, 6, 1956);

//EJERCICIO 3
function Persona (nombre, edad, pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.hablar = function(){
    if (Array.isArray(this.pasatiempo)){
      var pasatiempoString = "";
      if (this.pasatiempo.length == 2){
        pasatiempoString = this.pasatiempo.join().toLowerCase().replace(",", " y ");
      }
      else if (this.pasatiempo.length > 2){
        var ultimo = this.pasatiempo.pop();
        pasatiempoString = this.pasatiempo.join().toLowerCase().replace(",", ", ").concat(" y " + ultimo);
      }
    }
    else {
        pasatiempoString = this.pasatiempo.toLowerCase();
    }
    var mayusNombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    return ("Hola soy " + mayusNombre + " tengo " + this.edad + " años y me gusta " + pasatiempoString);
  }
}

var leslie = new Persona("Leslie", 22, ["leer", "escuchar música"]);
var brandon = new Persona("Brandon", 26, "TOCAR GUITARRA");
var renzo = new Persona("renzo", 27, ["bailar", "JUGAR", "leer"]);

// TEST 1
describe('Ejercicios Objetos', function(){
  describe('Ejercicio 1', function(){
    it('Prueba de 10 y 10', function(){
      assert.equal(100, rectanguloUno.area());
    });
    it('Prueba de "10" y 10', function(){
      assert.equal(100, rectanguloDos.area());
    });
    it('Prueba de 0.5 y 10', function(){
      assert.equal(5, rectanguloTres.area());
    });
    it('Prueba de 10 y nada', function(){
      assert.equal("Te falta un parámetro", rectanguloCuatro.area());
    });
  });
  describe('Ejercicio 2', function(){
    it('Prueba Sú, 23, 8, 1991', function(){
      assert.equal("La edad actual de Sú es 25", su.edad());
    });
    it('Prueba Luisa, 23, 8, 1995', function(){
      assert.equal("La edad actual de Luisa es 22", luisa.edad());
    });
    it('Prueba Beth, 10, 6, 1991', function(){
      assert.equal("La edad actual de Beth es 26", beth.edad());
    });
    it('Prueba Luis, 30, 6, 1956', function(){
      assert.equal("La edad actual de Luis es 60", luis.edad());
    });
  });
  describe('Ejercicio 3', function(){
    it('Prueba Leslie, 22, [leer, escuchar música] (con dos pasatiempos)', function(){
      assert.equal("Hola soy Leslie tengo 22 años y me gusta leer y escuchar música", leslie.hablar());
    });
    it("Prueba Brandon, 26, TOCAR GUITARRA (nombre en minúscula y pasatiempo string mayuscula)" , function(){
      assert.equal("Hola soy Brandon tengo 26 años y me gusta tocar guitarra", brandon.hablar());
    });
    it("Prueba renzo tengo 27 años y me gusta bailar, JUGAR y leer (nombre en minuscula mas de 2 pasatiempos)", function(){
      assert.equal("Hola soy Renzo tengo 27 años y me gusta bailar, jugar y leer", renzo.hablar());
    });
  });
});
