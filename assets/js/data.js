// Catálogo Humo Latino — generado a partir de la lista de precios oficial (Octubre y Noviembre)
const CATEGORIES = {
  "laser": {
    "nombre": "Láser",
    "desc": "Proyectores y escáneres láser monocolor y RGB con control DMX, automáticos y audiorítmicos para eventos y discotecas."
  },
  "cabezas-moviles": {
    "nombre": "Cabezas Móviles",
    "desc": "Luminarias robotizadas tipo Beam, Spot y Wash con prisma, ruedas de gobos y rotación continua."
  },
  "pares-led": {
    "nombre": "Pares LED",
    "desc": "Focos Par de alta potencia RGB, RGBW y 6 en 1 para escenarios, tarimas, bodas y baños de color."
  },
  "efectos": {
    "nombre": "Efectos",
    "desc": "Luces de animación, multi-efectos y semiesferas para fiestas, bares y centros de entretenimiento."
  },
  "blinder": {
    "nombre": "Blinder",
    "desc": "Cegadoras de alta intensidad tipo COB blanco cálido/frío para momentos climáticos en tarimas y conciertos."
  },
  "barras-led-paneles": {
    "nombre": "Barras LED / Paneles",
    "desc": "Barras y paneles lineales para washes, texturas y fondos de escenario."
  },
  "maquinas-de-humo-y-burbujas": {
    "nombre": "Máquinas de Humo y Burbujas",
    "desc": "Generadores de humo, líquidos densos de larga duración y máquinas de burbujas para resaltar la iluminación."
  },
  "controladores-dmx": {
    "nombre": "Controladores DMX",
    "desc": "Consolas analógicas y digitales DMX para programar escenas, memorias y shows de luces profesionales."
  },
  "equipos-dj": {
    "nombre": "Equipos DJ",
    "desc": "Reproductores estándar de club, controladores profesionales y mezcladores de última tecnología para DJs."
  },
  "cabinas-y-bajos": {
    "nombre": "Cabinas y Monitores",
    "desc": "Cabinas activas y pasivas, monitores de estudio y subwoofers para sonido en vivo y eventos."
  },
  "amplificadores-y-potencias": {
    "nombre": "Amplificadores y Potencias",
    "desc": "Etapas de potencia multicanal clase H y TD para touring, amplificadores de bajo y multi-instrumento."
  },
  "microfonos": {
    "nombre": "Micrófonos",
    "desc": "Sistemas inalámbricos digitales, solapas lavalier, micrófonos de estudio condensador y diademas."
  },
  "accesorios-y-bases": {
    "nombre": "Bases y Accesorios",
    "desc": "Muebles rack para transporte, adaptadores para cabinas, bases y soportes de micrófono."
  }
};
const BRANDS = {
  "pro-dj-lighting": "PRO DJ LIGHTING",
  "pro-dj": "PRO DJ",
  "big-dipper": "BIG DIPPER",
  "pioneer-dj": "PIONEER DJ",
  "alphatheta": "ALPHATHETA",
  "behringer": "BEHRINGER",
  "beta-three": "BETA THREE",
  "turbo-sound": "TURBOSOUND",
  "bugera": "BUGERA",
  "aston": "ASTON",
  "boya": "BOYA",
  "lab-gruppen": "LAB GRUPPEN"
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
  },
  {
    "cod": 526,
    "categoria": "LASER",
    "categoria_nombre": "Láser",
    "categoria_slug": "laser",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "B102RGB/4",
    "precio": 645000,
    "features": [
      "Potencia de diodos: R: 120mW, G: 40mW, B: 400mW",
      "Modos de trabajo: Automático, audio rítmico, DMX",
      "Canales DMX: 15 Canales DMX",
      "Ángulo de apertura: 22°",
      "Dimensiones: 535 x 208 x 167.3 mm",
      "Peso: 5.5 kg"
    ]
  },
  {
    "cod": 8952,
    "categoria": "LASER",
    "categoria_nombre": "Láser",
    "categoria_slug": "laser",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PL1000 PRO",
    "precio": 610000,
    "features": [
      "Láser graficador con animaciones RGB",
      "Conectividad: Incorpora Bluetooth y compatible con app Lovely Draw para textear y graficar",
      "Potencia óptica: Rojo: 200mW, Verde: 200mW, Azul: 600mW",
      "Modos de control: Audio rítmico, Automático, DMX, esclavo, control remoto",
      "Canales DMX: 16 CH / 36 CH",
      "Consumo eléctrico: 45W - Ángulo de escaneo: ±30°",
      "Distancia de proyección: 10 metros",
      "Alimentación: AC 110-240V 50-60Hz",
      "Dimensiones: 23.5 x 20.5 x 17.2 cm",
      "Incluye: Cable de poder, manual, platina de agarre, control remoto"
    ]
  },
  {
    "cod": 8837,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LM1915R",
    "precio": 540000,
    "features": [
      "Cabeza móvil Moving Head RGBW 4 en 1 con efectos de anillo",
      "Fuente de luz: 19 x 15W LEDs RGBW + 66 x 0.2W tiras LED RGB 3-en-1",
      "Consumo eléctrico: ~210W - Voltaje: AC 100-240V 50/60Hz",
      "Control: DMX512, modo automático, modo audio rítmico, Maestro-esclavo, RDM",
      "Canales DMX: 15 / 24 / 32 canales",
      "Zoom óptico motorizado: 8° a 60°",
      "Movimiento: Pan 540° horizontal / Tilt 270° vertical",
      "Frecuencia de estroboscopio: 1 - 30 Hz",
      "Dimensiones del producto: ~325 x 210 x 430 mm - Peso neto: ~6.4 kg"
    ]
  },
  {
    "cod": 10642,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LM0740L",
    "precio": 675000,
    "features": [
      "Cabeza móvil 4 en 1 con LEDs de color en el borde",
      "Potencia: 7 LEDs de 40W cada uno",
      "Colores: RGBW (rojo, verde, azul, blanco)",
      "Modos de operación: DMX, automático, activado por sonido, maestro/esclavo",
      "Canales DMX: 14 o 16 canales - Ángulo de haz: 4°",
      "Movimiento: Pan 540°, Tilt 270°",
      "Voltaje: AC 100-240V",
      "Dimensiones: 450 x 330 x 510 mm - Peso: 8 kg - Protección: IP20"
    ]
  },
  {
    "cod": 8175,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LM0740",
    "precio": 735000,
    "features": [
      "Tipo de producto: Stage Lighting profesional",
      "Fuente de luz: 7 LEDs de 40W cada uno",
      "Colores: RGBW (rojo, verde, azul, blanco)",
      "Modos de operación: DMX, automático, activado por sonido, maestro/esclavo",
      "Canales DMX: 14 o 16 canales - Ángulo de haz: 4°",
      "Movimiento: Pan 540°, Tilt 270°",
      "Voltaje: AC 100-240V - Potencia nominal: 350W",
      "Dimensiones: 340 x 260 x 400 mm - Peso: 8 kg - Protección: IP33"
    ]
  },
  {
    "cod": 982,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LM108",
    "precio": 515000,
    "features": [
      "Configuración: 36 LEDs de 3W (8 rojos, 10 verdes, 10 azules, 8 blancos)",
      "Vida útil: 50.000 horas - Potencia: 150W",
      "Modo de trabajo: Audiorítmico, automático, DMX, maestro - esclavo",
      "Número de canales DMX: 9 / 16 canales",
      "Ángulo de movimiento: X 540°, Y 270°",
      "Dimensiones: 25.2 x 15.5 x 31.3 cm - Peso: 11.2 kg"
    ]
  },
  {
    "cod": 7746,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LS105",
    "precio": 860000,
    "features": [
      "Cabeza móvil tipo Spot con aro multicolor",
      "Luz principal: LED blanco de 100W",
      "Rueda de color: 7 colores + blanco",
      "Rueda de gobos: 7 figuras + Prisma",
      "Aro perimetral: 21 LEDs multicolor de 0.2W alrededor del lente",
      "Modo de trabajo: Automático, DMX, Audiorítmico, Maestro/esclavo",
      "Canales DMX: 14 canales DMX",
      "Dimensiones: 35.1 x 25.4 x 24 cm"
    ]
  },
  {
    "cod": 8178,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LS35",
    "precio": 285000,
    "features": [
      "Tipo de producto: Mini Stage Lighting Spot",
      "Fuente de luz: LED blanco de 30W + 12 LEDs RGB 3 en 1 de 0.2W",
      "Canales DMX: 10 o 12 canales",
      "Ángulo de movimiento: Pan 540°, Tilt 270°",
      "Voltaje: AC 100-240V - Potencia: 45W",
      "Dimensiones: 175 x 146 x 286 mm - Protección IP: IP33",
      "Aplicaciones: Ideal para DJs, salones de eventos y discotecas"
    ]
  },
  {
    "cod": 10572,
    "categoria": "CABEZAS MOVILES",
    "categoria_nombre": "Cabezas Móviles",
    "categoria_slug": "cabezas-moviles",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "BSW200",
    "precio": 1175000,
    "features": [
      "Cabeza móvil 3 en 1 (Beam - Spot - Wash)",
      "Fuente de luz: 1 LED blanco de 150W + 24 LEDs RGB de 0.2W",
      "Potencia total: 240W",
      "Rueda de color: 7 colores + blanco - Prisma: 3 prismas rotativos",
      "Canales DMX: 20 canales",
      "Modos de control: DMX512, Automático, Sonido, Maestro/esclavo",
      "Enfoque: Motorizado de alta precisión",
      "Ángulo de movimiento: Panorámica 540°, inclinación 270° (16 bits)",
      "Peso neto: 6.5 kg"
    ]
  },
  {
    "cod": 7301,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LP001N",
    "precio": 145000,
    "features": [
      "Configuración: 54 LEDs x 3W (R: 12, G: 18, B: 18, W: 6)",
      "Potencia: 127W",
      "Modos de operación: Automático, audio rítmico, DMX, master - slave",
      "Canales DMX: 4 / 8 canales DMX",
      "Dimensiones: 21.2 x 26 x 10.4 cm - Peso: 1.7 kg",
      "Empaque: Precio por unidad, disponible para despacho en caja master"
    ]
  },
  {
    "cod": 10643,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC1818",
    "precio": 240000,
    "features": [
      "Potencia lumínica: 18 LEDs de 18W (R, G, B, Verde lima, Ámbar, UV, 6 en 1)",
      "Canales DMX: 12 canales",
      "Modos de control: DMX512, Automático, Sonido, Maestro-esclavo",
      "Potencia nominal: 150W",
      "Dimensiones: 28 x 12 x 30 cm - Peso: 2.5 kg"
    ]
  },
  {
    "cod": 10573,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC1218",
    "precio": 200000,
    "features": [
      "PAR LED 6 en 1 de alta gama",
      "Configuración: 12 LEDs x 18W (RGB + Ámbar + Lima + UV)",
      "Modos de trabajo: Audiorítmico, DMX, automático",
      "Carcasa metálica con excelente disipación térmica y doble herraje"
    ]
  },
  {
    "cod": 8685,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC120",
    "precio": 105000,
    "features": [
      "Luz par LED de perfil plano: 60 LEDs de 2W RGBW 4 en 1",
      "Potencia nominal: 120W",
      "Canales DMX: 4 / 8 canales",
      "Modos de control: Automático, sonido, DMX, maestro-esclavo",
      "Dimensiones: 235 x 235 x 65 mm - Peso neto: 3.8 kg"
    ]
  },
  {
    "cod": 10644,
    "categoria": "PARES LED",
    "categoria_nombre": "Pares LED",
    "categoria_slug": "pares-led",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LPC018",
    "precio": 75000,
    "features": [
      "Par LED compacto: 54 LEDs x 1.5W RGB",
      "Potencia nominal: 50W",
      "Control: Auto, Sound, DMX, Master-slave, Remote control",
      "Canales DMX: 7 canales",
      "Vida útil: 50.000 horas - Ángulo de apertura: 25°",
      "Empaque: Precio por unidad, venta en pares"
    ]
  },
  {
    "cod": 4208,
    "categoria": "BLINDER",
    "categoria_nombre": "Blinder",
    "categoria_slug": "blinder",
    "marca": "BIG DIPPER",
    "marca_slug": "big-dipper",
    "modelo": "LC001-H",
    "precio": 190000,
    "features": [
      "Lámpara Blinder COB de alta potencia: 100W",
      "Temperatura dual: 2 colores (blanco cálido: 3200K / blanco frío: 5600K)",
      "Modos de operación: Automático, audio rítmico, DMX, master - slave",
      "Canales DMX: 2 / 4 canales DMX",
      "Dimensiones: 22.5 x 26 x 24 cm"
    ]
  },
  {
    "cod": 4438,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "F1500",
    "precio": 315000,
    "features": [
      "Generador de humo para escenarios y grandes recintos",
      "Potencia: 1500W",
      "Tiempo de precalentamiento: 8 minutos",
      "Capacidad del tanque: 2.4 Litros",
      "Distancia de proyección: 3.5 metros",
      "Salida de humo: 15 metros cúbicos / minuto",
      "Control: Con cable y control remoto inalámbrico",
      "Dimensiones: 39 x 25 x 28 cm - Peso: 2.8 kg"
    ]
  },
  {
    "cod": 4440,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "F400",
    "precio": 120000,
    "features": [
      "Máquina de humo ultra-compacta para fiestas y pequeños eventos",
      "Potencia: 400W",
      "Tiempo de precalentamiento: 8 minutos",
      "Capacidad del tanque: 2.4 Litros",
      "Distancia de proyección: 3.5 metros",
      "Salida de humo: 14 metros cúbicos / minuto",
      "Dimensiones: 29 x 15 x 14 cm - Peso: 1.8 kg"
    ]
  },
  {
    "cod": 451,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "LÍQUIDO GALÓN (Humo)",
    "precio": 65000,
    "features": [
      "Líquido para máquinas de humo profesional",
      "Presentación: Galón de 3.7 Litros",
      "Humo blanco denso de larga permanencia",
      "Fórmula base agua sin olor, no deja residuos y no es tóxico"
    ]
  },
  {
    "cod": 452,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "LITRO HUMO",
    "precio": 28000,
    "features": [
      "Líquido de humo profesional en botella de 1 Litro",
      "Produce humo blanco uniforme ideal para resaltar rayos láser y luces",
      "Fórmula base agua que cuida el calderín de tu máquina"
    ]
  },
  {
    "cod": 1096,
    "categoria": "MAQUINAS DE HUMO Y BURBUJAS",
    "categoria_nombre": "Máquinas de Humo y Burbujas",
    "categoria_slug": "maquinas-de-humo-y-burbujas",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "LITRO BURBUJAS",
    "precio": 28000,
    "features": [
      "Líquido especial para máquinas de burbujas",
      "Presentación: Botella de 1 Litro",
      "Baja viscosidad formulado para generar burbujas consistentes que flotan por más tiempo",
      "Inoloro y seguro para interiores y fiestas infantiles"
    ]
  },
  {
    "cod": 5681,
    "categoria": "CONTROLADORES DMX",
    "categoria_nombre": "Controladores DMX",
    "categoria_slug": "controladores-dmx",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PC384 DMX",
    "precio": 375000,
    "features": [
      "Consola controladora DMX de 384 canales",
      "16 Faders de 2 capas y control para 12 scanners",
      "Faders dedicados para velocidad (Speed) y tiempo de desvanecimiento (Fade Time)",
      "Entrada y salida DMX estándar de 3 pines + Entrada MIDI",
      "Memoria: 30 bancos cada uno con 8 escenas (240 escenas en total)",
      "6 Chases programables de hasta 240 escenas cada uno",
      "Incluye lámpara LED con cuello de ganso flexible",
      "Dimensiones: 18.3 x 52 x 7.3 cm - Peso: 3 kg"
    ]
  },
  {
    "cod": 4181,
    "categoria": "CONTROLADORES DMX",
    "categoria_nombre": "Controladores DMX",
    "categoria_slug": "controladores-dmx",
    "marca": "PRO DJ LIGHTING",
    "marca_slug": "pro-dj-lighting",
    "modelo": "PC192 DMX",
    "precio": 185000,
    "features": [
      "Consola controladora DMX de 192 canales",
      "2 Páginas de canales (A: 1-8, B: 9-16)",
      "Control para 12 Fixtures independientes",
      "6 Chases programables con velocidad ajustable",
      "8 Faders físicos asignados a canales",
      "23 Bancos de memoria (8 escenas por banco)",
      "Dimensiones: 13.2 x 48.2 x 7.3 cm - Peso: 2.5 kg"
    ]
  },
  {
    "cod": 6106,
    "categoria": "AMPLIFICADORES Y POTENCIAS",
    "categoria_nombre": "Amplificadores y Potencias",
    "categoria_slug": "amplificadores-y-potencias",
    "marca": "BEHRINGER",
    "marca_slug": "behringer",
    "modelo": "KXD15",
    "precio": 1850000,
    "features": [
      "Amplificador Multi-Instrumento y Teclados",
      "Parlante 15\" Turbosound + Driver de 1\"",
      "Potencia Bi-Amplificada de 600W",
      "Procesador de efectos Klark Teknik de 24 bits con 100 presets",
      "4 Canales con control independiente de volumen y envío FX",
      "Ecualizador gráfico de 7 bandas con detector de retroalimentación FBQ",
      "Conectores: 1 entrada XLR, 3 entradas estéreo TS, 1 aux RCA, salidas XLR/TRS y salida subwoofer",
      "Dimensiones: 48.3 x 56.9 x 37.2 cm - Peso: 22.4 kg"
    ]
  },
  {
    "cod": 8913,
    "categoria": "AMPLIFICADORES Y POTENCIAS",
    "categoria_nombre": "Amplificadores y Potencias",
    "categoria_slug": "amplificadores-y-potencias",
    "marca": "BUGERA",
    "marca_slug": "bugera",
    "modelo": "BXD15",
    "precio": 1680000,
    "features": [
      "Amplificador para bajo eléctrico de 1000 vatios",
      "Parlante 15\" Turbosound de ingeniería británica",
      "Preamplificador MOSFET de alto voltaje con sonido valvular cálido",
      "Tecnología de gestión DYNAMIZER para pegada máxima",
      "Compresor clásico de estudio y ecualizador dedicado",
      "Gabinete inclinable tipo cuña para escenario"
    ]
  },
  {
    "cod": 7683,
    "categoria": "AMPLIFICADORES Y POTENCIAS",
    "categoria_nombre": "Amplificadores y Potencias",
    "categoria_slug": "amplificadores-y-potencias",
    "marca": "LAB GRUPPEN",
    "marca_slug": "lab-gruppen",
    "modelo": "PLM 12K44SP",
    "precio": 27195000,
    "features": [
      "Etapa de potencia de touring de 4 canales con Dante integrado",
      "Potencia: 4 x 3000W (12.000W RMS total)",
      "Procesador Lake Controller incorporado con EQ paramétrico y filtros FIR",
      "Gestión racional de energía (RPM) configurable por canal",
      "Software CAFÉ para monitoreo y diseño acústico de sistemas",
      "Topología de salida Clase TD con conectores Speakon"
    ]
  },
  {
    "cod": 7876,
    "categoria": "AMPLIFICADORES Y POTENCIAS",
    "categoria_nombre": "Amplificadores y Potencias",
    "categoria_slug": "amplificadores-y-potencias",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "G8-4CH",
    "precio": 1380000,
    "features": [
      "Potencia de audio profesional de 4 canales Clase H",
      "Potencia a 8Ω: 800W x 4 / Potencia a 4Ω: 1150W x 4",
      "32 Transistores NJW0281 (8 pares por canal)",
      "Respuesta en frecuencia: 20 Hz – 20 kHz ±0.3 dB - THD < 0.03%",
      "Factor de amortiguación > 500 para control óptimo de bajas frecuencias",
      "Entradas XLR y RCA, salidas Speakon y bornes - Peso: 21 kg"
    ]
  },
  {
    "cod": 8505,
    "categoria": "AMPLIFICADORES Y POTENCIAS",
    "categoria_nombre": "Amplificadores y Potencias",
    "categoria_slug": "amplificadores-y-potencias",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "G6-4CH",
    "precio": 1260000,
    "features": [
      "Potencia de audio profesional de 4 canales Clase H",
      "Potencia a 8Ω: 600W x 4 / Potencia a 4Ω: 850W x 4",
      "32 Transistores de alta potencia NJW0281",
      "Sensibilidad de entrada ajustable: 0.775V / 1.0V / 1.4V",
      "Protección térmica, sobrecarga, corto circuito y soft-start",
      "Entradas XLR balanceadas y RCA, salidas Speakon"
    ]
  },
  {
    "cod": 4049,
    "categoria": "AMPLIFICADORES Y POTENCIAS",
    "categoria_nombre": "Amplificadores y Potencias",
    "categoria_slug": "amplificadores-y-potencias",
    "marca": "LAB GRUPPEN",
    "marca_slug": "lab-gruppen",
    "modelo": "FP 14000",
    "precio": 11235000,
    "features": [
      "Amplificador de 2 canales Clase TD para touring y subwoofers gigantes",
      "Potencia estéreo: 2 x 7000W @ 2Ω / 2 x 4400W @ 4Ω / 2 x 2350W @ 8Ω",
      "Modo Bridge (Puente): 1 x 14000W @ 4Ω / 1 x 8800W @ 8Ω",
      "Protocolo NomadLink para comunicación y control de red",
      "Dip switch para ajuste de ganancia y limitador de pico VPL",
      "Chasis ultraliviano de 12 kg en 2 unidades de rack"
    ]
  },
  {
    "cod": 1175,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BEHRINGER",
    "marca_slug": "behringer",
    "modelo": "K5",
    "precio": 690000,
    "features": [
      "Monitor de estudio biamplificado activo de 5 pulgadas",
      "Diseñado por Keith R. Klawitter (fundador de KRK Systems)",
      "Tweeter de cúpula de seda de 1\" y woofer de fibra de vidrio de 5\"",
      "Potencia: 150W Clase D - SPL máximo: 100 dB @ 1m",
      "Respuesta de frecuencia: 50 Hz a 20 kHz",
      "Entradas: 1x XLR balanceado, 1x 1/4\" TRS balanceado, 1x RCA",
      "Nota: Precio por unidad, venta en pares"
    ]
  },
  {
    "cod": 6102,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BEHRINGER",
    "marca_slug": "behringer",
    "modelo": "B208D",
    "precio": 895000,
    "features": [
      "Cabina activa de 2 vías ultra-compacta",
      "Woofer de 8\" de larga excursión + Driver de compresión de 1.35\"",
      "Potencia: 200W Clase D",
      "Entrada combo XLR / Jack 1/4\" para línea o micrófono con control de nivel",
      "Ecualizador de 2 bandas (graves/agudos) y salida de línea XLR",
      "Respuesta en frecuencia: 65 Hz - 20 kHz - SPL máx: 113 dB",
      "Dimensiones: 24.9 x 20.5 x 37.2 cm - Peso: 8.5 kg"
    ]
  },
  {
    "cod": 124,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BEHRINGER",
    "marca_slug": "behringer",
    "modelo": "B115MP3",
    "precio": 1435000,
    "features": [
      "Cabina activa de 2 vías con reproductor MP3 integrado",
      "Woofer de 15\" + Driver de 1.35\"",
      "Potencia: 1000W Max Clase D",
      "Reproductor de audio USB MP3 con controles y pantalla LCD",
      "Mezclador de 2 canales con entradas híbridas XLR/TRS y salida XLR link",
      "Compatible con micrófonos inalámbricos Behringer Wireless USB",
      "Dimensiones: 71.3 x 42.7 x 31.3 cm - Peso: 17.7 kg"
    ]
  },
  {
    "cod": 126,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BEHRINGER",
    "marca_slug": "behringer",
    "modelo": "B112MP3",
    "precio": 1275000,
    "features": [
      "Cabina activa de 2 vías con reproductor de audio USB MP3",
      "Woofer de 12\" + Driver de compresión de 1.35\"",
      "Potencia: 1000W Max Clase D",
      "2 Entradas híbridas XLR/TRS, salida XLR link y EQ de 2 bandas",
      "Compatible con sistemas inalámbricos Behringer ULM",
      "Dimensiones: 56.8 x 34.2 x 27.0 cm - Peso: 12.5 kg"
    ]
  },
  {
    "cod": 303,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BETA THREE",
    "marca_slug": "beta-three",
    "modelo": "MU18B",
    "precio": 1560000,
    "features": [
      "Subwoofer / Bajo pasivo profesional de 18\"",
      "Potencia: 500W RMS / 2000W Pico - Impedancia: 8 Ohms",
      "Sensibilidad (1W @ 1m): 97 dB - SPL máximo: 124 dB / 130 dB Pico",
      "Respuesta de frecuencia (-3dB): 40 Hz - 300 Hz",
      "Construcción en madera de abedul de 18 mm de alta densidad",
      "1 Entrada y 1 salida Speakon NL4",
      "Dimensiones caja: 75 x 71 x 67 cm - Peso: 42.5 kg"
    ]
  },
  {
    "cod": 313,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BETA THREE",
    "marca_slug": "beta-three",
    "modelo": "N10F",
    "precio": 720000,
    "features": [
      "Cabina pasiva de dos vías para intemperie y aplicaciones versátiles",
      "Woofer de 10\" + Driver de 1.5\"",
      "Potencia: 250W RMS - Impedancia: 8 Ohms",
      "Sensibilidad: 95 dB 1W @ 1m - SPL máx: 119 dB",
      "Respuesta en frecuencia: 65 Hz - 18 kHz (±3 dB)",
      "Gabinete inyectado en ABS duradero con puntos de anclaje",
      "Incluye bases angulares para usar como monitor de piso",
      "Dimensiones: 32.1 x 32.1 x 46.4 cm - Peso: 10 kg"
    ]
  },
  {
    "cod": 285,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "BETA THREE",
    "marca_slug": "beta-three",
    "modelo": "X15i",
    "precio": 2085000,
    "features": [
      "Cabina pasiva profesional de 15\" en madera de abedul de 15 mm",
      "Parlante de 15\" + Driver de compresión de 3\"",
      "Potencia: 500W RMS - Impedancia: 8 Ohms",
      "Respuesta en frecuencia (-3dB): 40 Hz – 16 kHz",
      "Sensibilidad: 98 dB 1W @ 1m - SPL máx: 121 dB / 127 dB pico",
      "Dispersión de bocina: 60° x 60° - Conectores: Speakon x 2"
    ]
  },
  {
    "cod": 168,
    "categoria": "CABINAS Y BAJOS",
    "categoria_nombre": "Cabinas y Monitores",
    "categoria_slug": "cabinas-y-bajos",
    "marca": "TURBOSOUND",
    "marca_slug": "turbo-sound",
    "modelo": "M10",
    "precio": 1485000,
    "features": [
      "Cabina activa de dos vías con tecnología Klark Teknik DSP",
      "Woofer de 10\" + Driver de compresión de 1\"",
      "Potencia: 600W MAX Clase D",
      "Respuesta en frecuencia: 55 Hz – 20 kHz ±3 dB - SPL máx: 126 dB pico",
      "2 Entradas híbridas XLR/TRS mic/línea y 1 salida de mezcla XLR",
      "Ecualizador de 2 bandas y filtro paso altos conmutable a 100 Hz",
      "Gabinete de polipropileno inyectado con vaso para trípode de doble ángulo",
      "Dimensiones: 522 x 329 x 294 mm - Peso: 13.3 kg"
    ]
  },
  {
    "cod": 331,
    "categoria": "ACCESORIOS Y BASES",
    "categoria_nombre": "Bases y Accesorios",
    "categoria_slug": "accesorios-y-bases",
    "marca": "BETA THREE",
    "marca_slug": "beta-three",
    "modelo": "N-8/N-8A 6.ZJ.04",
    "precio": 80000,
    "features": [
      "Adaptador metálico para base estándar de cabinas N8 y N8A",
      "Construcción en acero fundido para montaje firme en trípodes",
      "Nota: Precio por pareja de adaptadores"
    ]
  },
  {
    "cod": 6007,
    "categoria": "ACCESORIOS Y BASES",
    "categoria_nombre": "Bases y Accesorios",
    "categoria_slug": "accesorios-y-bases",
    "marca": "BETA THREE",
    "marca_slug": "beta-three",
    "modelo": "MU408A STAND",
    "precio": 40000,
    "features": [
      "Base metálica para montaje y soporte de altavoces MU408A",
      "Estructura de fijación reforzada",
      "Nota: Precio por unidad"
    ]
  },
  {
    "cod": 720,
    "categoria": "ACCESORIOS Y BASES",
    "categoria_nombre": "Bases y Accesorios",
    "categoria_slug": "accesorios-y-bases",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "M-80",
    "precio": 30000,
    "features": [
      "Soporte de micrófono de mesa tipo trípode",
      "Construcción en plástico ABS resistente con ajuste de ángulo vertical",
      "Incluye espuma protectora antipop para micrófono y tornillo adaptador"
    ]
  },
  {
    "cod": 251,
    "categoria": "ACCESORIOS Y BASES",
    "categoria_nombre": "Bases y Accesorios",
    "categoria_slug": "accesorios-y-bases",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "MX-2",
    "precio": 345000,
    "features": [
      "Mueble rack en aluminio de 12 espacios estándar (19 pulgadas)",
      "Base superior escualizable con inclinación ajustable para mezclador de DJ o consola",
      "Altura: 1 metro con 4 ruedas / rodachines reforzados con freno",
      "Incluye tornillería completa y manual de instrucciones"
    ]
  },
  {
    "cod": 10724,
    "categoria": "EQUIPOS DJ",
    "categoria_nombre": "Equipos DJ",
    "categoria_slug": "equipos-dj",
    "marca": "ALPHATHETA",
    "marca_slug": "alphatheta",
    "modelo": "DJM-V5",
    "precio": 8505000,
    "features": [
      "Mezclador DJ profesional de 3 canales de próxima generación",
      "Transmisor SonicLink integrado para monitoreo inalámbrico de ultra-baja latencia",
      "Filtros LPF, HPF y Cross Pass dedicados por canal",
      "Ecualización de 4 bandas por canal y perilla de compresor",
      "Faders de canal de 60 mm de alta precisión con curva ajustable",
      "Sección Send FX integrada: Delay, Reverb, Shimmer y Echo",
      "Procesamiento de audio a 96 kHz / 64 bits para fidelidad de estudio",
      "Doble puerto USB Type-C, integración directa con Rekordbox y Serato DJ Pro"
    ]
  },
  {
    "cod": 7616,
    "categoria": "EQUIPOS DJ",
    "categoria_nombre": "Equipos DJ",
    "categoria_slug": "equipos-dj",
    "marca": "PIONEER DJ",
    "marca_slug": "pioneer-dj",
    "modelo": "DDJ-REV7",
    "precio": 7875000,
    "features": [
      "Controlador DJ motorizado de 2 canales y 2 Decks estilo scratch profesional",
      "Platos motorizados de 7 pulgadas con sensación vinilo auténtica",
      "Pantallas LCD On-Jog a color de 3.5\" en el centro de cada rueda",
      "Efectos de filtro dedicados en cada canal y palancas de FX estilo batalla",
      "16 Performance Pads con 22 Beat FX integrados",
      "4 Botones de Instant Scratch con samples incorporados",
      "Incluye licencia SERATO DJ PRO - Conectores XLR y RCA profesionales"
    ]
  },
  {
    "cod": 7073,
    "categoria": "EQUIPOS DJ",
    "categoria_nombre": "Equipos DJ",
    "categoria_slug": "equipos-dj",
    "marca": "PIONEER DJ",
    "marca_slug": "pioneer-dj",
    "modelo": "CDJ-3000",
    "precio": 10450000,
    "features": [
      "Reproductor digital insignia para DJs estándar mundial de clubes",
      "Pantalla táctil capacitiva HD de 9 pulgadas a todo color",
      "Jog Wheel rediseñado de 206 mm más suave con display LCD central",
      "Procesador MPU avanzado con reproducción ultra-rápida de audio",
      "Formatos soportados: FLAC, Apple Lossless (ALAC), WAV, AIFF, MP3, AAC hasta 96kHz/24-bit",
      "Pro DJ Link con conexión Gigabit Ethernet para enlazar hasta 6 unidades",
      "Botones Key Sync y Key Shift para mezclas armónicas automáticas"
    ]
  },
  {
    "cod": 10542,
    "categoria": "MICROFONOS",
    "categoria_nombre": "Micrófonos",
    "categoria_slug": "microfonos",
    "marca": "ASTON",
    "marca_slug": "aston",
    "modelo": "ORIGIN",
    "precio": 1145000,
    "features": [
      "Micrófono de condensador de estudio con diafragma grande de 1\" en oro evaporado",
      "Patrón polar cardioide fijo con respuesta transparente de 20 Hz – 20 kHz",
      "Filtro pasa-altos con corte conmutable a 80 Hz y atenuador pad de -10 dB",
      "SPL máximo: 127 dB (137 dB con pad) - Ruido propio extremadamente bajo: 18 dB A",
      "Chasis robusto en acero inoxidable cepillado con shock mount interno",
      "Incluye clip adaptador de soporte y bolsa de transporte"
    ]
  },
  {
    "cod": 8077,
    "categoria": "MICROFONOS",
    "categoria_nombre": "Micrófonos",
    "categoria_slug": "microfonos",
    "marca": "ASTON",
    "marca_slug": "aston",
    "modelo": "ELEMENT BUNDLE",
    "precio": 655000,
    "features": [
      "Micrófono de estudio cardioide con cápsula Ridyon activa de alta velocidad",
      "Respuesta en frecuencia extendida: 20 Hz – 20 kHz",
      "Requiere Phantom Power 48V con indicador luminoso morado en el cuerpo",
      "Sonido cálido y detallado optimizado mediante pruebas ciegas globales",
      "Incluye araña elástica de suspensión shockmount y filtro anti-pop magnético a medida"
    ]
  },
  {
    "cod": 6120,
    "categoria": "MICROFONOS",
    "categoria_nombre": "Micrófonos",
    "categoria_slug": "microfonos",
    "marca": "PRO DJ",
    "marca_slug": "pro-dj",
    "modelo": "E1",
    "precio": 25000,
    "features": [
      "Micrófono de diadema Headset liviano y ergonómico",
      "Conector Mini XLR de 3 pines estándar",
      "Color negro profesional con cuello flexible ajustable",
      "Incluye espuma protectora antipop para respiración y viento"
    ]
  },
  {
    "cod": 10534,
    "categoria": "MICROFONOS",
    "categoria_nombre": "Micrófonos",
    "categoria_slug": "microfonos",
    "marca": "BOYA",
    "marca_slug": "boya",
    "modelo": "BOYALINK 3-02",
    "precio": 375000,
    "features": [
      "Sistema de micrófono inalámbrico dual (2 transmisores + 1 receptor)",
      "Banda de frecuencia digital 2.4 GHz con alcance de hasta 100 metros",
      "Receptor todo-en-uno con conectores intercambiables: USB-C, Lightning y TRS 3.5mm",
      "Compatible con smartphones iPhone, Android, cámaras y computadores",
      "Estuche de carga rígido inteligente con batería integrada (hasta 30 horas totales)",
      "Patrón omnidireccional con función de cancelación de ruido ambiental"
    ]
  },
  {
    "cod": 6887,
    "categoria": "MICROFONOS",
    "categoria_nombre": "Micrófonos",
    "categoria_slug": "microfonos",
    "marca": "BOYA",
    "marca_slug": "boya",
    "modelo": "BY-WM4 PRO",
    "precio": 275000,
    "features": [
      "Sistema de micrófono inalámbrico de solapa lavalier digital 2.4 GHz",
      "1 Transmisor compacto con clip + 1 Receptor",
      "Salida de audífonos en el receptor para monitoreo en vivo de 3.5 mm",
      "Alcance de operación: hasta 60 metros sin obstáculos",
      "Compatible con smartphones, cámaras DSLR, grabadoras de audio y PCs",
      "Alimentación práctica con 2 baterías AAA"
    ]
  },
  {
    "cod": 6888,
    "categoria": "MICROFONOS",
    "categoria_nombre": "Micrófonos",
    "categoria_slug": "microfonos",
    "marca": "BOYA",
    "marca_slug": "boya",
    "modelo": "BY-WM4 PRO-K2",
    "precio": 405000,
    "features": [
      "Sistema de micrófono inalámbrico dual de dos solapas (2 transmisores + 1 receptor)",
      "Ideal para entrevistas, dos personas hablando, vlogs y eventos",
      "Banda digital de 2.4 GHz anti-interferencias",
      "2 Micrófonos lavalier omnidireccionales con antivientos incluidos",
      "Modo de salida seleccionable estéreo / mono",
      "Incluye cables de conexión para cámaras (TRS) y smartphones (TRRS)"
    ]
  }
];
