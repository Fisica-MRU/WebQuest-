function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  let baseDePreguntas = [
    {
      pregunta: "El siguiente gráfico representa el desplazamiento de un autobús partiendo de la estación.Encuentra el enunciados Verdadero.",
      ayuda: "Lo contrario de constante",
      imagen: "w.PNG",
      respuesta: "La velocidad del móvil no es constante",
      distractores: ["La rapidez es constante", "El móvil realiza un MRU", "Su rapidez dismunuye"],
    },
    {
      pregunta: "Un bus va a una velocidad constante de 75km/h en una vía rectilínea. Al acercarse a un túnel, el chofer hace sonar la bocina y escucha su eco de regreso a los 1.5 segundos. Si la velocidad del sonido es 340 m/s ¿A qué distancia se encontraba el bus del túnel al momento de activar la bocina?",
      ayuda: "la respuesta es entre 311.30m y 232m",
      respuesta: "La distancia entre el bus y el túnel era de 270.625 m",
      distractores: ["La distancia entre el bus y el túnel era de 239.37 m.", "La distancia entre el bus y el túnel era de 311.21 m.", "La distancia entre el bus y el túnel era de 541.24."],
    },
    {
      pregunta: "Ana y Josefina están separadas 60 metros y lanzan sus canicas en direcciones opuestas, hacia el centro. La canica de Ana va a una velocidad de 1 m/s y la de Josefina a 2 m/s. ¿En cuánto tiempo se encuentran las canicas y cuántos metros recorrió la canica de Josefina?",
      ayuda: "uno es el doble del otro",
      respuesta: "Las canicas se encontrarán a los 20 segundos y la canica de Josefina recorrió 40 metros.",
      distractores: ["Las canicas se encontrarán a los 30 segundos y la canica de Josefina recorrió 30 metros.", "Las canicas se encontrarán a los 60 segundos y la canica de Josefina recorrió 20 metros.", "Las canicas se encontrarán a los 40 segundos y la canica de Josefina recorrió 40 metros."],
    },
    {
      pregunta: "Dos amigos parten en sus bicicletas desde un mismo punto en direcciones perpendiculares. Juan va a 6 m/s mientras Carolina va 8 m/s.",
      ayuda: "es el distino a los demas",
      respuesta: "A los 20 segundos",
      distractores: ["A los 14.14 segundos ", "A los 14.30 segundos ", "A los 20.07 segundos"],
    },
  ];