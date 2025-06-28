//String 

const producto = "Monitor 20 pulgadas";
const producto1 = "Computadora de escritorio";

console.log(producto,length); // Longitud de la cadena
console.log(producto1);

console.log(producto.toUpperCase()); // Convertir a mayúsculas
console.log(producto1.toLowerCase()); // Convertir a minúsculas

console.log(producto.indexOf("20")); // Buscar la posición de un texto
console.log(producto1.indexOf("escritorio")); // Buscar la posición de un texto

console.log(producto1.includes("escritorio")); // Verifica si un texto está incluido
console.log(producto1.includes("portátil")); // Verifica si un texto está incluido

console.log(producto1.startsWith("Computadora")); // Verifica si un texto comienza con
console.log(producto1.endsWith("escritorio")); // Verifica si un texto termina con

console.log(producto1.charAt(0)); // Obtener el carácter en una posición específica
console.log(producto1.charAt(producto1.length - 1)); // Obtener el último carácter

console.log(producto1.slice(0, 11)); // Extraer una parte de la cadena
console.log(producto1.slice(11)); // Extraer desde una posición hasta el final

console.log(producto1.substring(0, 11)); // Extraer una parte de la
// cadena (similar a slice pero no acepta índices negativos)
console.log(producto1.split(" ")); // Dividir la cadena en un array por espacios
console.log(producto1.split(" ")); // Dividir la cadena en un array por espacios
console.log(producto1.replace("escritorio", "portátil")); // Reemplazar un texto por otro
console.log(producto1.replace(/escritorio/g, "portátil")); // Reemplazar todas las ocurrencias de un texto por otro

console.log(producto1.trim()); // Eliminar espacios al inicio y al final de la cadena
console.log(producto1.trimStart()); // Eliminar espacios al inicio de la cadena
console.log(producto1.trimEnd()); // Eliminar espacios al final de la cadena


console.log(producto1.length); // Longitud de la cadena
console.log(producto1.lastIndexOf("o")); // Buscar la última ocurrencia de un texto

console.log(producto1.localeCompare("Computadora de escritorio")); // Comparar cadenas
console.log(producto1.localeCompare("Laptop de escritorio")); // Comparar cadenas


console.log(producto1.localeCompare("Computadora de escritorio", "es", { sensitivity: 'base' })); // Comparar cadenas con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { sensitivity: 'accent' })); // Comparar cadenas con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { sensitivity: 'case' })); // Comparar cadenas con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { sensitivity: 'variant' })); // Comparar cadenas con sensibilidad

console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'search' })); // Comparar cadenas para búsqueda
console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'sort' })); // Comparar cadenas para ordenamiento

console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'search', sensitivity: 'base' })); // Comparar cadenas para búsqueda con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'sort', sensitivity: 'base' })); // Comparar cadenas para ordenamiento con sensibilidad

console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'search', sensitivity: 'accent' })); // Comparar cadenas para búsqueda con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'sort', sensitivity: 'accent' })); // Comparar cadenas para ordenamiento con sensibilidad

console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'search', sensitivity: 'case' })); // Comparar cadenas para búsqueda con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'sort', sensitivity: 'case' })); // Comparar cadenas para ordenamiento con sensibilidad

console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'search', sensitivity: 'variant' })); // Comparar cadenas para búsqueda con sensibilidad
console.log(producto1.localeCompare("Computadora de escritorio", "es", { usage: 'sort', sensitivity: 'variant' })); // Comparar cadenas para ordenamiento con sensibilidad