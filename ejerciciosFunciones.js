var assert = require("assert");
//Ejercicio 1
function multiplicarNum (arr, num){
  var res = 0;
  if (Array.isArray(arr)){
    res = arr.reduce(function(valorAnterior, valorActual){
      return valorAnterior * valorActual;
    });
  }
  if (!isNaN(arr)){
    res = arr;
  }
  if (!isNaN(num)){
    res = res * num;
  }
  return res;
}

// Ejercicio 2
function ejercicio2 (telefonos, filtro){
    return telefonos.filter(function(a){
      var primeras = a.toString().substr(0,3);
      var ultimas = a.toString().substr(-3);
      return (primeras == filtro || ultimas == filtro);
    });
}

//Ejercicio 3
function esMultiplo (arr,num){
  var resultado = [];
  var arrModulos = arr.forEach(function(item){
    if ((item % num) == 0){
      return resultado.push(item);
    }
  });
  return resultado;
}

//Ejercicio 4
function dobleYsuma (arr){
  var resultado = arr.map(function(item){
    return (item * 2) + 1;
  });
  return resultado;
}

//Ejercicio 5
function convertirCelsius (arrCelsius){
  var gradosFarenheit = [];
  var resultado = arrCelsius.map(function(item){
      var grados = (item * (9/5) ) + 32;
      return gradosFarenheit.push(grados);
  });
  return gradosFarenheit;
}

//Ejercicio 6
function multiplicar (arr){
  return arr.reduce(function(valorAnterior, valorActual, indice, vector){
    return valorAnterior * valorActual;
  });
}

//Ejercicio 7
function filtrarEdades (arrEdades){
  var resultado = [];
  var arrEdadesFiltro = arrEdades.forEach(function(edad){
    if ((edad > 18)){
      return resultado.push(2017 - edad);
    }
  });
  return resultado;
}

//Test Ejercicio 1

describe("Ejercicios Arrays", function(){
  describe("Ejercicio 1", function(){
    it("Prueba [2,3] y 10", function(){
      assert.equal(60, multiplicarNum([2,3],10));
    });
    it("Prueba [2,3] y hola", function(){
      assert.equal(6, multiplicarNum([2,3],"Hola"));
    });
    it("Prueba [2,3] y nada", function(){
      assert.equal(6, multiplicarNum([2,3]));
    });
    it("Prueba 2 y 3", function(){
      assert.equal(6, multiplicarNum(2,3));
    });
  });
  describe("Ejercicio 2 ", function(){
    it("Prueba [996548337, 997616207], 207", function(){
      assert.deepEqual([997616207], ejercicio2([996548337, 997616207],207));
    });
    it("Prueba [996548337, 97616207], 207", function(){
      assert.deepEqual([97616207], ejercicio2([996548337, 97616207],207));
    });
  });
  describe("Ejercicio 3", function(){
    it("¿Es múltiplo?", function(){
      assert.deepEqual([7, 21, 77, 35], esMultiplo([7, 21, 44, 80, 77, 35],7));
    });
  });
  describe("Ejercicio 4", function(){
    it("Doblar y sumar", function(){
      assert.deepEqual([5, 11, 15, 5, 7, 17, 21], dobleYsuma([2, 5, 7, 2, 3, 8, 10]));
    });
  });
  describe("Ejercicio 5", function(){
    it("Grados Farenheit", function(){
      assert.deepEqual([32, 41, 50, 59, 68], convertirCelsius([0, 5, 10, 15, 20]));
    });
  });
  describe("Ejercicio 6", function(){
    it("Multiplicacion 2", function(){
      assert.equal(24, multiplicar([1, 2, 3, 4]));
    });
  });
  describe("Ejercicio 7", function(){
    it("Edades", function(){
      assert.deepEqual([1997, 1928], filtrarEdades([20, 16, 89, 6]));
    });
  });
});
