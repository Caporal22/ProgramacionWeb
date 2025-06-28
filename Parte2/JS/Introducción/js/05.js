// Números

const nombre = "Daniel";
const numero1 = 100;
const numero2 = 200;

console.log(numero1);
console.log(numero2);

// NaN es Not a Number 
// window es un objeto global en el navegador


console.log(numero1 + numero2); // Suma
console.log(numero1 - numero2); // Resta
console.log(numero1 * numero2); // Multiplicación
console.log(numero1 / numero2); // División
console.log(numero1 % numero2); // Módulo (resto de la división)

console.log(numero1 ** 2); // Exponente (potencia)
console.log(Math.sqrt(numero1)); // Raíz cuadrada

console.log(Math.PI); // Valor de PI

console.log(Math.round(3.6)); // Redondear al entero más cercano
console.log(Math.floor(3.6)); // Redondear hacia abajo
console.log(Math.ceil(3.1)); // Redondear hacia arriba

console.log(Math.random()); // Número aleatorio entre 0 y 1
console.log(Math.random() * 100); // Número aleatorio entre 0 y 100
console.log(Math.floor(Math.random() * 100)); // Número aleatorio entre 0 y 99

console.log(Math.max(numero1, numero2)); // Máximo entre dos números
console.log(Math.min(numero1, numero2)); // Mínimo entre dos números
console.log(Math.abs(-50)); // Valor absoluto

console.log(Math.pow(2, 3)); // Potencia (2 elevado a 3)
console.log(Math.sign(-5)); // Signo del número (-1, 0, 1)
console.log(Math.trunc(3.9)); // Parte entera del número (truncamiento)

console.log(Math.hypot(3, 4)); // Hipotenusa de un triángulo rectángulo (3, 4)
console.log(Math.log(10)); // Logaritmo natural
console.log(Math.log10(100)); // Logaritmo base 10

console.log(Math.exp(1)); // Exponencial (e elevado a la potencia 1)
console.log(Math.cos(Math.PI)); // Coseno de un ángulo (en radianes)
console.log(Math.sin(Math.PI / 2)); // Seno de un ángulo (en radianes)
console.log(Math.tan(Math.PI / 4)); // Tangente de un ángulo (en radianes)

console.log(Math.asin(1)); // Arcoseno (inversa del seno)
console.log(Math.acos(0)); // Arcocoseno (inversa del coseno)
console.log(Math.atan(1)); // Arcotangente (inversa de la tangente)
console.log(Math.atan2(1, 1)); // Arcotangente de dos valores (y, x)

console.log(Math.sinh(1)); // Seno hiperbólico
console.log(Math.cosh(1)); // Coseno hiperbólico
console.log(Math.tanh(1)); // Tangente hiperbólica

console.log(Math.asinh(1)); // Arcoseno hiperbólico
console.log(Math.acosh(2)); // Arcocoseno hiperbólico
console.log(Math.atanh(0.5)); // Arcotangente hiperbólica

console.log(Math.imul(2, 3)); // Multiplicación de enteros de 32 bits
console.log(Math.clz32(8)); // Cuenta los bits a la izquierda del primer bit 1 en un entero de 32 bits
console.log(Math.fround(1.5)); // Representación de punto flotante de 32 bits
console.log(Math.signbit(-1)); // Verifica si el número es negativo (signo bit)
console.log(Math.cbrt(27)); // Raíz cúbica
console.log(Math.log1p(1)); // Logaritmo natural de (1 + x)
console.log(Math.expm1(1)); // Exponencial de (e^x - 1)
console.log(Math.log2(8)); // Logaritmo base 2
console.log(Math.log10(1000)); // Logaritmo base 10
console.log(Math.scale(2, 1, 0, 10, 20)); // Escala un número de un rango a otro
console.log(Math.fscale(2, 1, 0, 10, 20)); // Escala un número de un rango a otro (versión de punto flotante)
console.log(Math.hypot(3, 4, 5)); // Hipotenusa de un triángulo rectángulo en 3D




