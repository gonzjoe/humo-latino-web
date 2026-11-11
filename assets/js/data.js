// Catálogo Humo Latino — generado a partir de la lista de precios (columna PÁGINA WEB / REDES SOCIALES)
const CATEGORIES = {
  "laser": {
    "nombre": "Láser",
    "desc": "Proyección láser RGB para animaciones, texturas y efectos de gran formato."
  },
  "cabezas-moviles": {
    "nombre": "Cabezas Móviles",
    "desc": "Cabezales robotizados con movimiento panorámico total para iluminación dinámica."
  },
  "pares-led": {
    "nombre": "Pares LED",
    "desc": "Iluminación de lavado de color, la base de cualquier montaje escénico."
  },
  "efectos": {
    "nombre": "Efectos",
    "desc": "Efectos especiales de luz para intensificar la energía de la pista."
  },
  "blinder": {
    "nombre": "Blinder",
    "desc": "Luz blanca de alto impacto para golpes de luz y momentos climáticos."
  },
  "barras-led-paneles": {
    "nombre": "Barras LED / Paneles",
    "desc": "Barras y paneles lineales para washes, texturas y fondos de escenario."
  },
  "maquinas-de-humo-y-burbujas": {
    "nombre": "Máquinas de Humo y Burbujas",
    "desc": "Generadores de humo y burbujas: la base de toda atmósfera visual."
  }
};
const BRANDS = {
  "pro-dj-lighting": "PRO DJ LIGHTING",
  "big-dipper": "BIG DIPPER"
};
const PRODUCTS = [
  {
    "cod": 7963,
    "categoria": "LASER",
    "categoria_nombre": "Láser",
    "categoria_slug": "laser",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL5000 RGB",
    "features": [
      "Tipo: Láser de animación RGB",
      "Potencia de láser: 5W (Rojo ≥1.5W (638nm), Verde ≥1.5W (520nm), Azul ≥2W (447nm))",
      "Modos de control: Sonido, Automático, DMX, Ilda",
      "Fuente de alimentación: AC100-240V, 50-60Hz",
      "Ángulo de haz: ≤3mrad",
      "Diámetro del haz de salida: 7x8mm",
      "Escáner: 25K",
      "Efecto de destello: Flash"
    ],
    "precio": 1855000
  },
  {
    "cod": 8777,
    "categoria": "LASER",
    "categoria_nombre": "Láser",
    "categoria_slug": "laser",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL1000 RGB",
    "features": [
      "Laser graficador con animaciones RGB,",
      "Rojo: 200mw, verde:200mw, Azul: 600 mW",
      "Modos de control: Audio rítmico, Automático, DMX, escavo ,control remoto",
      "Canales DMX: 16 CH / 7 CH",
      "Consumo electrico: 45W",
      "Angulo de escaneo: ±30°",
      "Distancia de proyeccion: 10 metros",
      "Fuente de alimentacion: AC110-240V 50-60HZ",
      "Dimensiones: 23.5×20.5×17.2CM",
      "Incluye: cable de poder, manual, platina , control remoto"
    ],
    "precio": 585000
  },
  {
    "cod": 8778,
    "categoria": "LASER",
    "categoria_nombre": "Láser",
    "categoria_slug": "laser",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL500 RGB",
    "features": [
      "Laser graficador con diferentes animaciones",
      "Rojo 150mW , Verde; 50mW, Azul; 300mW",
      "Modos de control: Audio rítmico, Automático, DMX, control remoto",
      "Canales DMX: 12CH",
      "Potenci:a 30MW",
      "Fuente de alimentacion: AC110-240V 50-60HZ",
      "Angulo de escaneo: ±30°",
      "Distancia de proyeccion: 10 metros",
      "Dimensiones: 23.5×20.5×17.2CM"
    ],
    "precio": 420000
  },
  {
    "cod": 6090,
    "categoria": "LASER",
    "categoria_nombre": "Láser",
    "categoria_slug": "laser",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL27RGB",
    "features": [
      "Potencia diodo Rojo: 200mW, Verde: 100mW, Azul: 300mW",
      "Modos de trabajo: Audio -Rítmico, automático, DMX",
      "20W",
      "10 Canales DMX",
      "Ángulo de scanner 14.4°",
      "Dimensiones: 17,9 x 16 x 15,4 cm"
    ],
    "precio": 325000
  },
  {
    "cod": 8172,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LB150",
    "features": [
      "Fuente de luz: LED blanco de 100 W Vida útil: 50.000 horas - Potencia nominal: 150 W",
      "12 canales dmx - Abertura de luz: 2,8°",
      "Temperatura de color: 10 000 ~ 12 000 K",
      "Ángulo de movimiento: giro horizontal: 540°, inclinación: 270°",
      "Prisma: 1 rueda de prisma, 8 + 16 prismas * Gobo: 13 + blanco - Color: 11 + blanco",
      "Modo de control: automático/sonido/DMX512/maestro-esclavo",
      "Pantalla LED: pantalla LED táctil a color de 1,7 pulgadas",
      "Tamaño del producto: 292 x 236 x 174,4 mm - Peso neto/peso bruto: 5,9/6,9 kg",
      "Atenuador: atenuación lineal de 0 a 100 %, con 4 curvas de atenuación seleccionables",
      "Estroboscopio: Estroboscopio electrónico, con una frecuencia máxima de 14HZ, y la opción de elegir estroboscopio aleatorio o estroboscopio pulsado"
    ],
    "precio": 715000
  },
  {
    "cod": 7146,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LM70S",
    "features": [
      "7 LEDS de 8W RGBW 4 en 1",
      "Vida útil: 50000 Horas",
      "Potencia: 100W",
      "Modo: Audiorítmico / automático / DMX / maestro - esclavo",
      "Número de canales DMX: 9/16",
      "Ángulo de movimiento: X 540° Y 270°",
      "Dimensiones del producto: 17,6 x 18 x 24,5 cm"
    ],
    "precio": 190000
  },
  {
    "cod": 8136,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PS460",
    "features": [
      "\tFuente de alimentación: AC100-240V, 50/60Hz    *Consumo de energía: 180W",
      "\tFuente de luz: 120W Blanco + tira de LED 24 * 0.2W 5050RGB",
      "\tAtenuador: 0-100% de atenuación lineal",
      "\tRueda de colores: 8 colores, rotación infinita",
      "\tRueda de gobos: abierta + 7 gobos    *Prisma: 5 prismas",
      "\tEstroboscopio: 1-25 veces/seg",
      "\tModo de funcionamiento: DMX512, Audio rítmica, Automático",
      "\tCanal DMX: 14 canales",
      "Rotación de giro/inclinación: 540°/180°, 16 bits, velocidad ajustable, posicionamiento automático electrónico     *Enfoque: Enfoque electrónico",
      "\tApariencia: Plástico resistente a altas temperaturas + material de aleación moldeado",
      "\tTamaño de dimensión:  230×180×400mm"
    ],
    "precio": 915000
  },
  {
    "cod": 8234,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL425 LASER",
    "features": [
      "Tipo: Cabezal móvil LED y láser",
      "Potencia total: 200W",
      "Fuente de luz: 4 LEDs de 25W RGBW (4 en 1) + Láser R+G (50mW)",
      "Voltaje: AC100-240V, 50-60Hz",
      "Movimiento panorámico: 540°",
      "Movimiento de inclinación: 270°",
      "Modos de operación: DMX512, Automático, Sonido",
      "Canales DMX: 1, 3, 4, 8, 9, 10, 14",
      "Efectos: Incluye soporte para empalmar unidades"
    ],
    "precio": 475000
  },
  {
    "cod": 7300,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LP009N",
    "features": [
      "54 Led x 3W (R: 12, G: 12, B: 12, W: 12, A: 6)",
      "136W",
      "modo: automático/ audio rítmico/ dmx/ master – Slave",
      "9 canales DMX",
      "Dimensiones: 21,2 X 26 X 10,4 cm",
      "Peso: 2,25Kg"
    ],
    "precio": 150000
  },
  {
    "cod": 798,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LP005",
    "features": [
      "18 Led x 1W (R: 6, G: 6, B: 6)",
      "26W",
      "Modo: automático/ audio rítmico/ dmx/ master – Slave",
      "7 Canales DMX",
      "Dimensiones: 18,6 x 20,5 x 10,5 cm",
      "Peso: 0,92Kg"
    ],
    "precio": 100000
  },
  {
    "cod": 8177,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC010",
    "features": [
      "4 LEDs de 4W (RGBW 4 en 1)",
      "190W",
      "Modos: Automático, Audio rítmico, DMX512, Maestro-Esclavo",
      "4/8 canales DMX",
      "Dimensiones: 22 x 21 x 23 cm",
      "Peso: 2,5 kg",
      "Vida útil: 50.000 horas",
      "Flujo luminoso: 4.123 lúmenes",
      "CRI: 90",
      "Efectos: Atenuador lineal 0-100%, colores, degradados, saltos y estroboscópico",
      "Control mediante botones funcionales en la parte posterior",
      "Incluye cable de alimentación y soportes de montaje"
    ],
    "precio": 180000
  },
  {
    "cod": 1226,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC007",
    "features": [
      "Par led para iluminacion de escenarios",
      "Potencia:  54 leds x 3 w",
      "Colores RGB 3 en 1 encapsulados",
      "Modos de trabajo: Audio ritmico, automatico, DMX y maestro – esclavo",
      "Canles DMX:  3 / 7",
      "Salida de corriente a otro par led",
      "Incluye cable de poder y platinas de agarre"
    ],
    "precio": 130000
  },
  {
    "cod": 1225,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC006",
    "features": [
      "18 Led x 10W R/G/B/W/A/UV 6 EN 1",
      "Consumo: 200W",
      "Modo: automático/ audio rítmico/ dmx/ master – Slave",
      "11 canales DMX",
      "Dimensiones: 60 X 31 X 63.5 CM",
      "Peso: 2,56kg"
    ],
    "precio": 320000
  },
  {
    "cod": 5656,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "MINI PAR 35UV",
    "features": [
      "3 Led x 5W R/G/B/W/UV (5 EN 1)",
      "Consumo: 20W",
      "modo: automático/ audio rítmico/ dmx/ master – Slave",
      "8 canales DMX",
      "Angulo 25°",
      "Dimensiones: 11,7 x 15 x 12,5 cm",
      "Peso. 0.3 kg"
    ],
    "precio": 90000
  },
  {
    "cod": 8497,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PAR46-WP",
    "features": [
      "Voltaje: AC110-240V, 50/60Hz",
      "Potencia: 100W",
      "LED: 18PCS de 6W RGBWA+UV 6EN1",
      "Color: RGB puede mezclarse en más de 16.7 millones de combinaciones",
      "Ángulo de haz: 25°/45°",
      "Regulador de intensidad: 0-100% lineal",
      "Modos de operación: Auto, DMX512, Sonido, Master/Slave",
      "Canales DMX: 6/10",
      "Protección: IP65 (Impermeable)",
      "Peso Neto: 2 kg | Peso Bruto: 2.5 kg",
      "Tamaño del producto: 22 × 22 × 9 cm"
    ],
    "precio": 355000
  },
  {
    "cod": 7991,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL1810 WP",
    "features": [
      "Tipo: PAR LED Impermeable",
      "Potencia: 18 LEDs de 10W (RGBW 4 en 1)",
      "Voltaje/Frecuencia: 110-240V, 50-60Hz",
      "Modos de operación: Automático, Sonido, DMX",
      "Colores: Rojo, Verde, Azul, Blanco",
      "Efectos: Lavado de color (Wash)",
      "Estándar IP: IP65 (Resistente al agua)"
    ],
    "precio": 380000
  },
  {
    "cod": 7985,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL006+",
    "features": [
      "Tipo: PAR LED",
      "Potencia: 18 LEDs de 15W (RGBWA+UV 6 en 1)",
      "Potencia total: 270W",
      "Voltaje/Frecuencia: 110-240V, 50-60Hz",
      "Modos de operación: Automático, Sonido, DMX",
      "Colores: Rojo, Verde, Azul, Blanco, Ámbar, UV",
      "Efectos: Lavado de color (Wash)"
    ],
    "precio": 235000
  },
  {
    "cod": 7145,
    "categoria": "EFECTOS",
    "categoria_nombre": "Efectos",
    "categoria_slug": "efectos",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LM30A",
    "features": [
      "8 LED tipo Cree de 3W",
      "Vida útil: 5,000 a 10,000 horas",
      "Potencia: 45W",
      "Modo: Audiorítmico / automático / DMX / maestro-esclavo",
      "Número de canales DMX: 7/13",
      "Dimensiones del producto: 27,9 x 16 x 12,5 cm"
    ],
    "precio": 180000
  },
  {
    "cod": 8067,
    "categoria": "EFECTOS",
    "categoria_nombre": "Efectos",
    "categoria_slug": "efectos",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "L002B",
    "features": [
      "Tipo: Magic Ball",
      "Fuente de luz: LED 4x1W",
      "Modos: Automático, Sonido",
      "Incluye parlante de 5W",
      "Alimentación: DC5V 1.5A, batería de 600mA"
    ],
    "precio": 60000
  },
  {
    "cod": 10576,
    "categoria": "EFECTOS",
    "categoria_nombre": "Efectos",
    "categoria_slug": "efectos",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL415 PARTY",
    "features": [
      "\tcabeza móvil de 4 brazos con múltiples funciones",
      "\tBrazos giratorios: 4 led x 15W RGBW 4EN 1 C/U",
      "\tCentro de luz (bee eye) 6 piezas 10 W RGBW 4EN 1 C/U",
      "Laser: Rojo 100Mw Verde 100 Mw",
      "\tStrober cinta cálida: 2 piezas de 5w",
      "\tCanales DMX: 15CH / 21 CH",
      "\tModos de trabajo: Automático, Audio rítmico, DMX, maestro esclavo",
      "\t Angulo de giro en eje X 540°",
      "\t Angulo de giro en eje y 180°",
      "\t Consumo eléctrico： 200W",
      "\tDimensiones: 295 x 295 x 235mm",
      "\tIncluye control remoto, cable de poder, platina"
    ],
    "precio": 460000
  },
  {
    "cod": 7334,
    "categoria": "EFECTOS",
    "categoria_nombre": "Efectos",
    "categoria_slug": "efectos",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL49 PARTY",
    "features": [
      "voltaje: ac90-264v, 50/60hz",
      "consumo de energía: 60w",
      "led strobe/uv: 4pcs uv+blanco 2 en 1 led",
      "efecto de bola mágica led: 1pcs * 12w led rgbw 4in1",
      "luz led par: 4pcs*6w led rgbw 4in1",
      "efecto patrón verde ped: rojo 120mw y verde 30mw",
      "modo de funcionamiento: auto, dmx512, activado por sonido, maestro/esclavo",
      "pantalla: pantalla led de 4 dígitos",
      "canal dmx: 18ch",
      "tamaño del paquete: 9.65*5.51*8.66 pulgadas",
      "g.w: 2.8lb"
    ],
    "precio": 325000
  },
  {
    "cod": 5621,
    "categoria": "BLINDER",
    "categoria_nombre": "Blinder",
    "categoria_slug": "blinder",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LC001-HB BARN DOOR",
    "features": [
      "1 juego de 4 Aletas",
      "Dimensiones cerrado: 26,8 x 26,1 x 1,7 cm"
    ],
    "precio": 55000
  },
  {
    "cod": 8237,
    "categoria": "BLINDER",
    "categoria_nombre": "Blinder",
    "categoria_slug": "blinder",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL4400 BLINDER",
    "features": [
      "Tipo: Luz Blinder LED",
      "4 LED de 100W (blanco cálido y frío)",
      "Temperatura de color: 3200K-5600K",
      "Ángulo de haz: 60°",
      "Modos de operación: Automático, DMX, Master-Slave",
      "Canales DMX: 1/3/4/8/9/10/14",
      "Efectos: Incluye soporte que permite empalmar unidades"
    ],
    "precio": 535000
  },
  {
    "cod": 8236,
    "categoria": "BLINDER",
    "categoria_nombre": "Blinder",
    "categoria_slug": "blinder",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL2200 BLINDER",
    "features": [
      "Tipo: LED Blinder Light",
      "Potencia: 2 led de 100W",
      "Temperatura de color: 3200K-5600K",
      "Ángulo de haz: 60°",
      "Modos: Automático, DMX, Maestro-Esclavo",
      "Color: Blanco cálido y frío",
      "Canal: 8 DMX",
      "Se puede ensamblar en configuraciones de 4 en 1 o 6 en 1"
    ],
    "precio": 330000
  },
  {
    "cod": 8833,
    "categoria": "BARRAS LED / PANELES",
    "categoria_nombre": "Barras LED / Paneles",
    "categoria_slug": "barras-led-paneles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "L1015",
    "features": [
      "10 LEDs RGBW de 15W (4 en 1)",
      "Vida útil: 50.000 horas",
      "Potencia: 200W",
      "Modo: Audio rítmico / automático / DMX / maestro - esclavo",
      "Número de canales DMX: 16",
      "Ángulo de movimiento: X 540° Y 270°",
      "Efecto de haz lineal motorizado",
      "Dimensiones del producto: 33 x 18 x 30 cm aprox",
      "Peso del producto: 7,5 Kg",
      "Peso con empaque: 9 Kg"
    ],
    "precio": 540000
  },
  {
    "cod": 7332,
    "categoria": "BARRAS LED / PANELES",
    "categoria_nombre": "Barras LED / Paneles",
    "categoria_slug": "barras-led-paneles",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL621 UV",
    "features": [
      "Barra Led UV",
      "12 led x 1w",
      "peso 0,9 kg"
    ],
    "precio": 85000
  },
  {
    "cod": 7691,
    "categoria": "BARRAS LED / PANELES",
    "categoria_nombre": "Barras LED / Paneles",
    "categoria_slug": "barras-led-paneles",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL363 WASHER",
    "features": [
      "Tubo led",
      "36 led 3 watts 4 en 1 (RGBW)",
      "1 metro de largo",
      "Uso DMX, audiorrítmico, master/slave, automático y manual"
    ],
    "precio": 375000
  },
  {
    "cod": 5317,
    "categoria": "BARRAS LED / PANELES",
    "categoria_nombre": "Barras LED / Paneles",
    "categoria_slug": "barras-led-paneles",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL243 WASHER",
    "features": [
      "24 Led x 3W RGB (3 EN 1)",
      "Consumo: 80W",
      "modo: automático/ audio rítmico/ dmx/ master – Slave",
      "5/ 8/ 14/ 26/ 50 canales DMX",
      "Dimensiones: 9,1 x 118 x 9,1 cm",
      "Peso: 4kg"
    ],
    "precio": 285000
  },
  {
    "cod": 8496,
    "categoria": "BARRAS LED / PANELES",
    "categoria_nombre": "Barras LED / Paneles",
    "categoria_slug": "barras-led-paneles",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL25A-WP",
    "features": [
      "Barra del apta para intemperie",
      "24 LED de 6W RGBWA+UV 6EN1",
      "RGB puede mezclarse en más de 16.7 millones de combinaciones",
      "Ángulo de haz: 35°",
      "Modos de operación: Auto, DMX512, Sonido, Master/Slave",
      "Canales DMX: 4/8/28/36CH",
      "Protección: IP65",
      "Peso Neto: 4 kg",
      "Tamaño del producto: 105 × 10.5 × 8 cm"
    ],
    "precio": 585000
  },
  {
    "cod": 10641,
    "categoria": "BARRAS LED / PANELES",
    "categoria_nombre": "Barras LED / Paneles",
    "categoria_slug": "barras-led-paneles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LF105",
    "features": [
      "* Luz Estroboscópica LED 1000W",
      "* 864 LEDs RGB 3en1 + 96 LEDs blancos",
      "* AC100–240V 50–60Hz",
      "* DMX512 / Auto / Sonido",
      "* 4CH / 12CH / 32CH",
      "* 8 efectos dinámicos segmentados"
    ],
    "precio": 245000
  },
  {
    "cod": 8974,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "FOG900 LED",
    "features": [
      "Máquina de humo",
      "Potencia: 900w",
      "Control alámbrico e inalámbrico",
      "Distancia control remoto: hasta 25 mts",
      "Capacidad de tanque: 0.9 litros",
      "Tiempo de calentamiento: 2 minutos",
      "Salida de humo: 4500 pies cúbicos x min",
      "Distancia de salida: 5 mts\"\"",
      "6 LED X 3W (2R, 2B, 2G)",
      "Dimensiones: 41,5 x 20 x 18,5 cm",
      "Peso: 3.4kg"
    ],
    "precio": 240000
  },
  {
    "cod": 8971,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "FOG900",
    "features": [
      "Máquina de humo",
      "Potencia: 900w",
      "Control alámbrico e inalámbrico",
      "Distancia control remoto: hasta 25 mts",
      "Capacidad de tanque: 0.9 litros",
      "Tiempo de calentamiento: 2 minutos",
      "Salida de humo: 4500 pies cúbicos x min",
      "Distancia de salida: 5 mts",
      "Dimensiones: 41,5 x 20 x 18,5 cm",
      "Peso: 3.4kg"
    ],
    "precio": 230000
  },
  {
    "cod": 4182,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "F400 LED",
    "features": [
      "Potencia: 400w",
      "Tiempo de precalentamiento: 8 minutos",
      "Capacidad del tanque: 2.4L",
      "Distancia de proyección: 3.5m",
      "Salida del humo: 14m cúbicos / minuto",
      "Peso: 1,8Kg",
      "Dimensiones: 29 x 15 x 14 cm",
      "Luz LED: 3 lentes RGB a 1w"
    ],
    "precio": 130000
  },
  {
    "cod": 5319,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "F900UP-LED",
    "features": [
      "Expulsión de humo vertical",
      "Potencia: 900w",
      "Capacidad de tanque: 1 Litro",
      "Fuente de luz: 6 LED RGB a 3w",
      "Tiempo de precalentamiento: 5 minutos",
      "Volumen de humo: 18000 pies cúbicos / minuto",
      "Rango de control remoto: 20mts",
      "Dimensiones: 34 x 28 x 16 cm",
      "Peso 2.8Kg"
    ],
    "precio": 385000
  },
  {
    "cod": 4439,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "F900",
    "features": [
      "Potencia: 900w",
      "Tiempo de precalentamiento: 8 minutos",
      "Capacidad del tanque: 1L",
      "Salida del humo: 18000 pies cúbicos / minuto",
      "Control: con cable y remoto"
    ],
    "precio": 225000
  },
  {
    "cod": 4183,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "F-BUBBLB",
    "features": [
      "Potencia: 22 Watts",
      "Anillo de doble generador de burbujas",
      "Utilizar con líquidos de burbujas certificados"
    ],
    "precio": 110000
  }
];