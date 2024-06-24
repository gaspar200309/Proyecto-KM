import ImagenesApp from "../../assets/ImagenesApp";

const carrerasApp = [
  {
    idCar: 101,
    imgSrc: ImagenesApp.imgMedicina,
    titulo: "Medicina",
    duracion: "(5 años)",
    descripcion:
      "Se encargan de prevenir, diagnosticar y tratar enfermedades de origen físico y fisiológico. Asimismo buscan la promoción en salud y el bienestar de la población.",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Centros de salud",
      "Hospitales de primer, segundo y tercer nivel",
      "Proyectos en salud: prevención y  promoción",
      "Instituciones estatales o privadas relacionadas con el área salud",
      "Consultorio privado ",
      "Investigación y docencia en Universidades ",
    ],
    materias: [
      "Anatomía Humana",
      "Histología ",
      "Embriología ",
      "Genética ",
      "Soporte Básico de la vida",
      "Medicina Social ",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo:  ImagenesApp.imgUpal
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo:  ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo:  ImagenesApp.imgUnitepc
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo:  ImagenesApp.imgUlat
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS (Universidad Mayor de San Simón)",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo:  ImagenesApp.imgUdabol
      },
    ],
  },
  {
    idCar: 102,
    imgSrc: ImagenesApp.imgOdontologia,
    titulo: "Odontologia",
    descripcion:
      "Se encarga del diagnóstico, tratamiento y prevención de enfermedades del aparato estomatognático (boca, dientes, mandíbulas, la faringe y estructuras relacionadas que intervienen en los fenómenos de la masticación, deglución y el habla) ",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Ministerio de salud",
      "SEDES",
      "Seguridad social",
      "Consultorio privado",
      "Universidades y centros educativos",
      "Centros hospitalarios",
      "ONGs",
    ],
    materias: [
      "Anatomía humana",
      "Bioquímica",
      "Embriología genética",
      "Histología",
      "Estomatología social e investigación",
      "Quechua",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo:  ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo:  ImagenesApp.imgUpal
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo:  ImagenesApp.imgUnitepc,
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo:  ImagenesApp.imgUnifranz
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo:  ImagenesApp.imgUlat
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
    ],
  },
  {
    idCar: 103,
    imgSrc: ImagenesApp.imgEnfermeria,
    titulo: "Enfermeria",
    descripcion:
      "Se encarga de intevenir de forma reflexiva y científica en los problemas de salud, para mejor la calidad de vida de las personas, familia y comunidad.",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Hospitales Públicos y Privados",
      "Clínicas Privadas",
      "Centros de Salud",
      "Organismos no Gubernamentales",
      "Gestión de Unidades y Servicios de enfermería",
      "Universidades y Centros de Investigación",
      "Fábricas",
      "Industrias",
      "Atención Domiciliaria",
      "Proyectos y programas de promoción, prevención y rehabilitación de la salud",
      "Consultorios Privados",
      "Centros de Rehabilitación de niños discapacitados",
      "Centros de atención Geriátricos",
      "Centro de atención Psiquiátricos",
      "Centros de rehabilitación nutricional",
      "Institutos de educación superior",
    ],
    materias: [
      "Psicología del desarrollo humano",
      "Bioquímica",
      "Enfermería fundamental",
      "Práctica Enfermería Fundamental",
      "Enfermería Comunitaria",
      "Práctica Enfermería Fundamental",
      "Sociología y Antropología",
      "Anatomía y Fisiología",
      "Quechua",
      "Soporte básico de vida",
    ],

    universidades: [
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo:  ImagenesApp.imgUnitepc,
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo:  ImagenesApp.imgUlat
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle,
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol,
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz,
      },
    ],
  },
  {
    idCar: 104,
    imgSrc: ImagenesApp.imgFisioterapia,
    titulo: "Fisioterapia y Kinesiología",
    descripcion:
      "Se orienta al movimiento humano en contexto, caracterizado como expresión e instrumento  del ser humano que garantiza su sobrevivencia y adaptación inteligente ycreativa en un contexto dado",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Empresas públicas y privadas en sus servicios de bienestar social",
      "Hospitales y Clínicas",
      "Consultorios de Salud",
      "Universidades",
      "Municipio y ministerios relacionados con el tema de salud y alimentación",
      "Centros de rehabilitación y deportivos",
      "Organizaciones no gubernamentales y/o fundaciones relacionadas con el área de salud",
    ],
    materias: [
      "Anatomía Funcional",
      "Biofísica",
      "Fisioterapia preventiva",
      "Soporte básico de vida",
      "Psicología Médica",
      "Sistemas orgánicos del cuerpo humano",
      "Antropología",
      "Psicología aplicada",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle,
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc,
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol,
      },
    ],
  },
  {
    idCar: 105,
    imgSrc: ImagenesApp.imgBioquimica,
    titulo: "Bioquímica y Farmacia",
    descripcion:
      "Se encarga del estudio de los procesos de transformación química, las repercusiones en el funcionamiento fisiológico de seres humanos. Ademas de aplicar la p´ractica farmacológica (medicamentos desde el punto de vista de sus acciones,  interacciones y reacciones adversas  en el ser vivo).",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Industrias Farmacéuticas y Farmacológicas",
      "Industrias Alimenticias",
      "Clínicas Privadas",
      "Hospitales Públicos y Privados",
      "Centros de Salud",
      "Laboratorios de Investigación y Desarrollo de Experimentación y Diagnóstico Clínico",
      "Laboratorios Asistenciales y de Servicios",
      "Laboratorios Farmacéuticos",
      "Proyectos y Programas de Promoción y Prevención en Salud",
      "Proyectos y Programas de Medicina Tradicional",
    ],
    materias: [
      "Anatomía",
      "Física",
      "Matemáticas",
      "Biología y Genética",
      "Química General e Inorgánica",
      "Química Orgánica",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB,
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz,
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc,
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo: ImagenesApp.imgUlat,
      },
      {
        nombre: "EMI",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi,
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgUPB,
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec,
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgDomingoSavio,
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol,
      },
      {
        nombre: "Universidad Salesiana de Bolivia",
        enlace: "https://www.usalesiana.edu.bo/principal/es",
        logo: ImagenesApp.imgUniversidadSelesiana,
      },
    ],
  },
  {
    idCar: 106,
    imgSrc: ImagenesApp.imgNutricion,
    titulo: "Nutrición y Dietética",
    descripcion:
      "Diagnóstica la situación nutricional del paciente, e interviene por medio de planes y actividades en favor del bienestar. Realizan prevención y promoción de la salud nutricional.",
    area: "ÁREA DE SALUD",
    lugaresDeTrabajo: [
      "Establecimientos de Salud de Primer, Segundo y Tercer Nivel de Atención del sistema público de Salud",
      "Instituciones y organismos de gestión en salud: Ministerio de Salud, Servicios Departamentales de Salud, Prefecturas, Municipios y otros",
      "Poli consultorios y Hospitales del Sistema de los Seguros de Salud",
      "Consultorios, Clínicas y Policlínicos del sistema privado",
      "Establecimientos y Servicios de Salud y Nutrición de las ONGs y la Iglesia",
      "Centros de Rehabilitación Nutricional públicos y privados",
      "Centros de Asistencia Nutricional",
      "Entidades deportivas y de imagen corporal, para implementar programas de nutrición especializada",
      "Servicios de Alimentación públicos y privados (comedores, albergues, asilos, hoteles, hostales, cuarteles, cárceles, etc.)",
      "Entidades de formación de Recursos Humanos en Nutrición y Dietética",
      "Centros de investigación científica",
    ],
    materias: [
      "Biología y Genética",
      "Anatomía y Fisiología",
      "Química General",
      "Microbiología y Parasitología",
      "Quechua",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle,
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc,
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
    ],
  },
  {
    idCar: 107,
    imgSrc: ImagenesApp.imgSistemas,
    titulo: "Ingenieria de Sistemas",
    descripcion:
      "Maneja recursos de tecnología informática y administración de los mismos. Sus actividades están relacionadas con la organización de equipos desarrollo de  software, aplicaciones, sistemas operativos, administración de centros de  computo.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Modelación y diseño de base de datos",
      "Diseño y configuración de redes",
      "Empresas comerciales",
      "Empresas industriales",
      "Empresas públicas",
      "Empresas de servicios",
      "Desarrollo empresarial particular, que permita a los profesionales informáticos desenvolverse en el mercado creando sus propias empresas",
      "Programación de software",
      "Administración de sistemas",
      "Preparación y evaluación de proyectos",
      "De forma independiente (desarrolladores)",
    ],
    materias: [
      "Matemática",
      "Arquitectura y Tecnología de computadoras",
      "Estructuras de datos",
      "Álgebra",
      "Electrotecnia",
      "Cálculo",
      "Introducción a la programación",
      "Física básica",
    ],
    universidades: [
      {
        nombre: "UMSS (Universidad Mayor de San Simón)",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "EMI (Escuela Militar de Ingeniería)",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi,
      },
      {
        nombre: "USIP (Universidad Simón I. Patiño)",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "Unicen",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UPB (Universidad Privada Boliviana)",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB,
      },
      {
        nombre: "UCB (Universidad Católica Boliviana)",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UCATEC (Univ. Privada de Cs. Administrativas y Tecnológicas)",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      },
      {
        nombre: "UPDS (Universidad Privada Domingo Savio)",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgDomingoSavio
      },
      {
        nombre: "UDABOL (Universidad de Aquino de Bolivia)",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
      {
        nombre: "UNIVALLE (Universidad Privada del Valle)",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UNIFRANZ (Universidad Franz Tamayo)",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNITEPC (Universidad Técnica Pv. Cosmos)",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "ULAT (Universidad Latinoamericana)",
        enlace: "http://www.ulat.edu.bo/",
        logo: ImagenesApp.imgUlat
      },
      {
        nombre: "Universidad Salesiana",
        enlace: "https://www.usalesiana.edu.bo/principal/es",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
      {
        nombre: "UPAL (Universidad Privada Abierta Latinoamericana)",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "ESFM (Escuela Superior de Formación de Maestros)",
        enlace: "https://esfmsimonrodriguez.edu.bo/",
        logo: ImagenesApp.imgEsfm
      },
    ],
  },
  {
    idCar: 108,
    imgSrc: ImagenesApp.imgCivil,
    titulo: "Ingeniería Civil",
    descripcion:
      "Se encarga de analizar y diseñar obras civiles, teniendo en cuenta los parámetros de seguridad, funcionalidad y economía. Construye, supervisa y administra obras civiles, organizando etapas técnicas, administrativas, financieras legales en una obra.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Empresas públicas en el área de construcción, infraestructura, minería, suelos, etc.",
      "Consultorías",
      "Organismos no gubernamentales (ONGs)",
      "Convenios internacionales",
      "Empresas privadas del área de construcción",
    ],
    materias: [
      "Álgebra",
      "Cálculo",
      "Estadística",
      "Geometría descriptiva",
      "Geología",
      "Química general",
      "Introducción a Ingeniería Civil",
      "Física",
      "Dibujo técnico",
    ],

    universidades: [
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo: ImagenesApp.imgUlat
      },
      {
        nombre: "EMI",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi,
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
    ],
  },
  {
    idCar: 109,
    imgSrc: ImagenesApp.imgElectromecanica,
    titulo: "Ingenieria Electromecánica",
    descripcion:
      "Se encarga del diseño, construcción y mantenimiento de sistemas e  instalaciones industriales. Además, del desarrollo de dispositivos y mecanismos de áreas como la automatización, robótica y supervisión de equipos.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Diseño de construcción, montaje, operación y mantenimiento de equipos e instalaciones de equipos y maquinaria",
      "Como director y consultor tanto de empresas o grupos de trabajo",
      "Industria textil",
      "Industria de Hidrocarburos",
      "Industrias en general",
    ],
    materias: [
      "Matemáticas",
      "Dibujo técnico",
      "Ciencia de los materiales",
      "Química básica",
      "Electrotecnia",
      "Cálculo",
      "Álgebra",
      "Física básica",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  
  {
    idCar: 110,
    imgSrc: ImagenesApp.imgElectronica,
    titulo: "Ingeniería Electrónica",
    descripcion:
      "Se encargan del diseño, operación, evaluación y mantenimiento de sistemas electrónicos y de telecomunicación.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Empresas en el área de ensambladoras y comercio electrónico",
      "Empresas de telecomunicaciones",
      "Empresas de control y automatismo",
      "Empresas de audio y vídeo",
    ],
    materias: [
      "Álgebra",
      "Cálculo",
      "Física básica",
      "Introducción a la programación",
      "Probabilidad y estadística",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
    ],
  },
  {
    idCar: 111,
    imgSrc: ImagenesApp.imgAlimentos,
    titulo: "Ingeniería de Alimentos",
    descripcion:
      "Tiene formación en ciencias físicomatemáticas y en tecnologías químicas y agroindustriales le permiten proyectar, organizar y administrar empresas alimentarias, supervisar y efectuar  controles de calidad de empresas agroindustriales y de servicio, desarrollar nuevos productos alimenticios, desarrollar procesos y diseñar equipos adecuados  para explotar racionalmente recursos agrícolas y pecuarios.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Empresas públicas o privadas de elaboración de alimentos, bebidas, lácteos, aceites comestibles, entre otros.",
      "Consultorías",
      "Emprendimientos personales",
    ],
    materias: [
      "Recursos naturales",
      "Laboratorio de química general",
      "Química general",
      "Física básica",
      "Cálculo",
      "Álgebra lineal y teoría matricial",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  {
    idCar: 112,
    imgSrc: ImagenesApp.imgIndustrial,
    titulo: "Ingeniería Industrial",
    descripcion:
      "Desarrollan y supervisan programas destinados a la optimización en el uso de equipos, recursos humanos, tecnología, materiales y procedimientos para incrementar la eficiencia y la productividad de una empresa u organización.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Empresas productivas de la región",
      "Organismos privados y estatales",
      "Asesoría técnica especializada a empresas",
      "Consultoría en problemas específicos a nivel productivo y de servicios",
      "Creación y administración de su propia empresa",
    ],
    materias: [
      "Álgebra",
      "Cálculo",
      "Computación",
      "Física básica",
      "Química general",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgDomingoSavio,
      },
    ],
  },
  {
    idCar: 113,
    imgSrc: ImagenesApp.imgElectrica,
    titulo: "Ingeniería Eléctrica",
    descripcion:
      "Desarrolla metodologías para el diseño, construcción, planificación, explotación e investigación de sistemas eléctricos de potencia.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Operación y mantenimiento en sistemas eléctricos",
      "Montaje de sistemas eléctricos",
      "Empresas de generación térmica, hidroeléctrica, solar y eólicas",
      "Empresas de transmisión",
      "Empresas de distribución",
    ],
    materias: [
      "Álgebra",
      "Cálculo",
      "Física básica",
      "Introducción a la programación",
      "Probabilidad y estadística",
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  {
    idCar: 114,
    imgSrc: ImagenesApp.imgMecanica,
    titulo: "Ingeniería Mecánica",
    descripcion:
      "Se encarga del cálculo, diseño, construcción, selección, instalación, operación y mantenimiento de equipos o sistemas mecánicos.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Industria manufacturera",
      "Industria textil",
      "Industria de Hidrocarburos",
      "Industrias en general",
      "Servicios de mantenimiento",
    ],
    materias: [
      "Álgebra",
      "Cálculo",
      "Dibujo técnico computarizado",
      "Física básica",
      "Química general",
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
    ],
  },
  {
    idCar: 115,
    imgSrc:
      "https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg",
    titulo: "Ingeniería Informática",
    descripcion:
      "Desarrollan sistemas de información, empresariales y gerenciales. También desarrollan software de aplicación para plataformas digitales. Se encargan de la gestión e instalación de redes de computadoras, cableado estructurado, configuración de servidores, administración de centros de cómputo, soporte y asistencia técnica en equipos de computación.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "Sistemas de información",
      "Gerenciales y de dirección",
      "Manejo e implementación de base de datos y en la ingeniería de software",
    ],
    materias: [
      "Álgebra",
      "Cálculo",
      "Física general",
      "Inglés",
      "Introducción a la programación",
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
    ],
  },
  {
    idCar: 116,
    imgSrc: ImagenesApp.imgTelecomunicaciones,
    titulo: "Ingeniería Telecomunicaciones",
    descripcion:
      "Se encarga de diseñar y gestionar redes vinculadas a la comunicación, pudiendo adaptar e incorporar nuevas tecnologías a los procesos productivos, además de liderar y ejecutar proyectos de investigación científica.",
    area: "ÁREA TECNOLÓGICA",
    lugaresDeTrabajo: [
      "En el campo operativo y de dirección en cualquier empresa proveedora de telecomunicaciones en nuestro medio",
      "Cooperativas telefónicas varias y similares",
      "Entidades gubernamentales o privadas en el área de telecomunicaciones, tales como proveedoras de servicios básicos, es decir, proveedoras de energía eléctrica",
      "Telecomunicaciones",
    ],
    materias: [
      "Matemática",
      "Arquitectura y Tecnología de Computadoras",
      "Telecomunicaciones",
      "Álgebra Lineal",
      "Electrotecnia",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgDomingoSavio
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
    ],
  },
  {
    idCar: 117,
    imgSrc: ImagenesApp.imgContabilidad,
    titulo: "Contaduría Pública",
    descripcion:
      "Se dedica a aplicar, manejar e interpretar la contabilidad de una organización o persona, con la finalidad de producir informes para la gerencia y para terceros (de manera independiente o dependiente), que sirven para la toma de decisiones.",
    area: "ÁREA ECONÓMICA",
    lugaresDeTrabajo: [
      "Administración pública",
      "Entidades financieras",
      "Empresas de todo tipo",
      "Fundaciones y ONG's",
      "Empresas de consultoría y auditoría",
      "Emprendimientos personales",
      "Tesorería",
    ],
    materias: [
      "Administración general",
      "Álgebra",
      "Cálculo",
      "Contabilidad básica",
      "Derecho empresarial y comercial",
      "Economía general y política",
      "Matemática financiera",
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",  
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo: ImagenesApp.imgUlat
      },
      {
        nombre: "Universidad Salesiana de Bolivia",
        enlace: "https://www.usalesiana.edu.bo/principal/es",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
    ],
  },
  {
    idCar: 118,
    imgSrc: ImagenesApp.imgAdministracion,
    titulo: "Administración de Empresas",
    descripcion:
      "Se encarga de organizar, controlar y gestionar varios de los recursos con los que una empresa se mueve. Puede trabajar con un sector o área determinada o puede cumplir un rol de Administrador central de una entidad.",
    area: "ÁREA ECONÓMICA",
    lugaresDeTrabajo: [
      "Instituciones educativas",
      "Hospitales",
      "Empresas del sector comercial",
      "Compañías financieras",
      "Instituciones públicas y privadas",
      "Microempresas",
      "Innovación y creación de empresas",
      "Contabilidad",
      "Tesorería",
      "Contabilidad",
    ],
    materias: [
      "Matemáticas",
      "Estadística",
      "Contabilidad",
      "Economía General",
      "Cálculo",
      "Administración general",
      "Álgebra",
      "Información financiera",
      "Introducción a la administración de empresas",
      "Comunicación administrativa",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      },
    ],
  },
  {
    idCar: 119,
    imgSrc: ImagenesApp.imgEconomia,
    titulo: "Economía",
    descripcion:
      "Se encarga del estudio sistemático de los fenómenos económicos locales e internacionales, incluyendo las dimensiones históricas y regionales, sin abandonar el aspecto social.",
    area: "ÁREA ECONÓMICA",
    lugaresDeTrabajo: [
      "El sector privado: Instituciones financieras, Empresas, Comercio",
      "El sector público: Instituciones del Gobierno Central, de Gobiernos Locales, Aduanas",
      "Centros de investigación para el diseño y evaluación de política económica y social",
      "Organismos internacionales y ONGs",
      "Consultorías en sector privado o estatal",
      "Formulación de estrategias y planificación de desarrollo nacional, regional, urbano, local, agrario y ambiental.",
      "Investigación económica",
      "Docente universitario",
      "Innovación y creación de empresas",
    ],
    materias: [
      "Economía general y política",
      "Taller de lenguaje y Redacción",
      "Álgebra",
      "Cálculo",
      "Sociología económica",
      "Historia económica de América Latina",
    ],
    universidades: [
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  
  {
    idCar: 120,
    imgSrc: ImagenesApp.imgComercial,
    titulo: "Ingeniería Comercial",
    descripcion:
      "Está preparado para desempeñarse en: Investigación de mercados, consultoría en gestión comercial y de servicios, planeación y desarrollo de estrategias comerciales y de mercado en empresas comerciales e industriales.",
    area: "ÁREA ECONÓMICA",
    lugaresDeTrabajo: [
      "Banca comercial y de inversión",
      "Firmas comisionistas de Bolsa",
      "Compañías de seguros",
      "Departamentos de Tesorería de entidades financieras y no financieras",
      "Instituciones Públicas",
      "Empresa Privada",
      "Proveedores de software y tecnología para el sector financiero",
      "Información financiera para la toma de decisiones",
      "Introducción a Ingeniería comercial",
    ],
    materias: [
      "Matemáticas",
      "Estadística",
      "Contabilidad básica",
      "Economía General",
      "Cálculo",
      "Administración",
      "Álgebra",
      "Información financiera para la toma de decisiones",
      "Introducción a Ingeniería comercial",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "EMI",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi,
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  {
    idCar: 121,
    imgSrc: ImagenesApp.imgFinanciera,
    titulo: "Ingeniería Financiera",
    descripcion:
      "Se encarga de administrar correctamente el dinero y decidir la mejor fuente de financiamiento para todas las actividades de la empresa. Evalúa los nuevos proyectos de inversión y los organiza para consolidarse en el mercado nacional y proyectarse a nivel internacional.",
    area: "ÁREA ECONÓMICA",
    lugaresDeTrabajo: [
      "Instituciones financieras",
      "Compañías de Seguros",
      "Empresas dedicadas a la producción, distribución y/o comercialización de productos y/o servicios",
      "Departamentos de tesorería de entidades financieras y otras que desarrollen actividades económicas monetarias",
      "Empresas consultoras y de intermediación financiera",
      "Consultor de empresas para analizar, estudiar e interpretar el entorno económico",
      "Promotor de negocios y empresas",
      "Especialista en la creación de estrategias comerciales y manejo de productos y servicios",
      "Investigador de mercados de bienes y servicios",
    ],
    materias: [
      "Matemática",
      "Estadística",
      "Contabilidad",
      "Economía General",
      "Computación",
      "Administración de empresas",
      "Álgebra",
      "Cálculo",
      "Derecho empresarial y comercial",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip

      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
    ],
  },
  {
    idCar: 122,
    imgSrc: ImagenesApp.imgDerecho,
    titulo: "Derecho",
    descripcion:
      "Se encarga de desarrollar propuestas teóricas y prácticas para el funcionamiento óptimo de las instituciones públicas, privadas, organizaciones políticas nacionales e internacionales a nivel legal y jurídico. También se encarga de prestar servicio de asesorías en marketing político y campañas políticas.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Funcionario de la Administración pública de Gobierno Boliviano, Departamental o Municipal",
      "Policía",
      "Fuerzas armadas",
      "Notaría de fe pública",
      "Impuestos internos",
      "Aduana",
      "Registro de derechos reales",
      "Como integrante del órgano Judicial, en la interpretación y aplicación de las normas jurídicas",
      "Abogado independiente, asesorando y representando los intereses de personas naturales o colectivas, de derecho público o privado ante cualquier tipo de organismo nacional o internacional",
      "Principios Constitucionales",
      "El derecho de culturas originarias",
      "Criminología y victimología",
      "Filosofía Jurídica y ética profesional",
    ],
    materias: [
      "Introducción al Derecho",
      "Teorías del Estado",
      "Derecho Romano",
      "Principios Constitucionales",
      "El derecho de culturas originarias",
      "Criminología y victimología",
      "Filosofía Jurídica y ética profesional",
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip

      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo: ImagenesApp.imgUlat
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
    ],
  },
  {
    idCar: 123,
    imgSrc: ImagenesApp.imgTrabajoSocial,
    titulo: "Comunicación Social",
    descripcion:
      "Se encarga de organizar, planificar y transmitir un mensaje de manera adecuada por diferentes medios y redes. También tiene la capacidad de informar, convencer por diferentes canales. Por último elaborar proyectos sociales con la finalidad de generar buena imagen e impacto de instituciones u organizaciones.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Universidades, colegios, institutos y todo centro de enseñanza",
      "Medios de comunicación oral y escrita",
      "Editoriales e imprentas",
      "Agencias de convenciones, turismo y hoteles",
      "Centros de investigación y diversas ONG",
      "Centros culturales y literarios",
      "Empresas de mercadeo",
      "Medios de comunicación audiovisual",
    ],
    materias: [
      "Teorías Sociológicas",
      "Fundamentos de la Filosofía",
      "Técnicas de Investigación Documental",
      "Expresión Oral",
      "Historia de la Comunicación del mundo",
      "Fundamentos psicológicos de la comunicación",
    ],
    universidades: [
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB 
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
    ],
  },
  {
    idCar: 124,
    imgSrc: ImagenesApp.imgPsicologia,
    titulo: "Psicología",
    descripcion:
      "Realiza un estudio, análisis de la conducta y los procesos mentales de las personas o grupos sociales. Elabora y planifica intervenciones con fines terapéuticos y hacia problemáticas individuales o sociales.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Hospitales generales, clínicas",
      "Instituciones de educación preescolar, primaria, secundaria, superior y en instituciones públicas y privadas",
      "ONGs, así como en organizaciones empresariales y comunitarias",
      "Proyectos de prevención frente a problemáticas psicológicas",
      "Consultorios particulares",
    ],
    materias: [
      "Antropología general",
      "Escuelas psicológicas",
      "Ética profesional",
      "Fundamentos Filosóficos",
      "Formación Social Boliviana",
      "Fundamentos de la psicología",
      "Psicofisiología",
      "Psicoestadística",
    ],
    universidades: [
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPAL",
        enlace: "https://upal.edu.bo/",
        logo: ImagenesApp.imgUpal
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
    ],
  },
  {
    idCar: 125,
    imgSrc: ImagenesApp.imgCSEducacion,
    titulo: "Ciencias de la Educación",
    descripcion:
      "Realizan diseño, planificación, evaluación, análisis, desarrollo, dirección, coordinación y gestión de proyectos educativos.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Instituciones estatales o privadas educativas",
      "ONG's y fundaciones",
      "Proyectos sociales y educativos",
      "Municipio y ministerios",
      "Centros de rehabilitación",
      "Tribunales de familia",
      "Corporaciones de asistencia judicial",
      "Poder Judicial",
    ],
    materias: [
      "Fundamentos de las Ciencias de la Educación",
      "Historia General de la Educación",
      "Sociología de la Educación",
      "Realidad Sociocultural Boliviana",
      "Fundamentos de Filosofía",
      "Fundamentos Biológicos de la Educación",
    ],
    universidades: [
      {
        nombre: "ULAT",
        enlace: "http://www.ulat.edu.bo/",
        logo: ImagenesApp.imgUlat
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "Universidad Salesiana de Bolivia",
        enlace: "https://www.usalesiana.edu.bo/principal/es",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
    ],
  },
  {
    idCar: 126,
    imgSrc: ImagenesApp.imgLinguistica,
    titulo: "Lingüística",
    descripcion:
      "Se encarga del estudio del lenguaje humano, sus procesos, reglas, normas y cómo se desarrolla la misma.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Universidades, colegios, institutos y todo centro de enseñanza",
      "Medios de comunicación oral y escrita",
      "Editoriales e imprentas",
      "Agencias de convenciones, turismo y hoteles",
      "Centros de investigación y diversas ONG",
      "Centros culturales y literarios",
      "Centros de Traducción e Interpretación",
      "Freelance (Emprendimientos personales)",
    ],
    materias: ["Inglés Básico", "Lenguaje Básico", "Francés Básico"],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  {
    idCar: 127,
    imgSrc: ImagenesApp.imgTrabajoSocial,
    titulo: "Trabajo Social",
    descripcion:
      "Realiza un trabajo de intervención para mejorar las relaciones humanas. Promueve un cambio social con poblaciones vulnerables.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Instituciones de asistencia social, nacional e internacional, participando en la planificación de proyectos sociales",
      "Empresas públicas y privadas en sus servicios de bienestar social",
      "Hospitales y Clínicas",
      "Consultorios de Salud",
      "Jardines Infantiles",
      "Escuelas básicas",
      "Colegios y Universidades",
      "Escuelas diferenciales",
      "Municipio y ministerios",
      "Centros de rehabilitación",
      "Poder Judicial",
      "Tribunales de familia",
      "Corporaciones de asistencia judicial",
      "Organizaciones no gubernamentales y/o fundaciones",
    ],
    materias: [
      "Antropología general",
      "Psicología de la personalidad y salud mental",
      "Sociología",
      "Psicología de la comunicación",
      "Fundamentos de la Psicología para el trabajo social",
      "Historia e Introducción al trabajo social",
      "Introducción al derecho",
      "Economía",
    ],
    universidades: [
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  {
    idCar: 128,
    imgSrc: ImagenesApp.imgSociologia,
    titulo: "Sociología",
    descripcion:
      "Se encarga del estudio de las relaciones sociales entre los grupos humanos y las leyes que las regulan en las sociedades.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Organizaciones No Gubernamentales",
      "Organizaciones públicas de distintos niveles de jerarquía político-administrativa de la nación",
      "Instituciones educativas de distinto nivel",
      "Universidades Públicas y Privadas",
      "Cooperativas y Juntas vecinales",
      "Organizaciones Territoriales de Base (OTB´s)",
      "Instituciones o centros de investigación",
    ],
    materias: [
      "Antropología social",
      "Economía general",
      "Historia social de Europa",
      "Introducción a la sociología",
      "Lenguaje",
      "Lógica",
      "Quechua",
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
    ],
  },
  {
    idCar: 129,
    imgSrc: ImagenesApp.imgAntropologia,
    titulo: "Antropología",
    descripcion:
      "Se especializa en el estudio y comprensión de las diferentes sociedades y culturas humanas; busca explicar las causas y significados de la diferencia y aportar (con estudios y acciones concretas) para que las personas e instituciones sean sensibles ante esta diversidad.",
    area: "ÁREA SOCIALES HUMANAS ",
    lugaresDeTrabajo: [
      "Instituciones de salud y nutrición",
      "Centros o espacios de educación e interculturalidad",
      "Espacios de desarrollo económico-productivo (rural y urbano)",
      "Espacios de Pluralismo jurídico y sistemas de administración de justicia",
      "En gestiones de Política pública",
      "Centros de investigación en revitalización social y cultural",
      "Proyectos de medio ambiente",
      "Museología",
      "Gestión cultural",
      "Arqueología"
    ],
    materias: [
      "Historia social de Europa",
      "Lenguaje",
      "Lógica",
      "Introducción a la Antropología",
      "Patrimonio cultural tangible e intangible",
      "Epistemología de las ciencias sociales",
      "Museología",
      "Gestión cultural"
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo        
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      }
    ]
    
  },
  //Area de arquitectura
  {
    idCar: 130,
    imgSrc: ImagenesApp.imgArquitectura,
    titulo: "Arquitectura",
    descripcion:
      "Se encarga de diseñar proyectos arquitectónicos y urbanos, desarrollar planes y proyectos, de la dirección y supervisión de obras.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
    lugaresDeTrabajo: [
      "Órganos de gobierno: Ministerios, Gobernaciones y Alcaldías",
      "Empresas públicas o privadas (empresas constructoras, de gestión inmobiliaria y en la industria de la construcción)",
      "Gestión de patrimonio urbano y arquitectónico",
      "Supervisión, fiscalización, administración y dirección de obras y proyectos",
      "Docencia e investigación",
      "Organizaciones no gubernamentales y de cooperación internacional"
    ],
    materias: [
      "Técnicas de representación gráfica",
      "Taller de proyecto",
      "Matemática - Física",
      "Geometría descriptiva",
      "Laboratorio digital CAD",
      "Taller de diseño",
      "Dibujo",
      "Historia",
      "Construcción"
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://www.usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo,
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      }
    ]
    
  },
  {
    idCar: 131,
    imgSrc: ImagenesApp.imgDiseñoDeInteriores,
    titulo: "Diseño de Interiores",
    descripcion:
      "Se encarga de diseñar, gestionar proyectos de tratamiento del espacio, asi como de la remodelación y equipamiento de ambientes interiores y mobiliario.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
    lugaresDeTrabajo: [
      "Instituciones públicas y privadas",
      "Empresas privadas: empresas constructoras y de gestión inmobiliaria",
      "Industria del mueble y de la construcción",
      "Diseño de iluminación y paisajismo",
      "Diseño de stand y escaparatismo",
      "Empresa propia"
    ],
    materias: [
      "Diseño",
      "Construcciones",
      "Matemática - Física",
      "Teoría",
      "Historia",
      "Dibujo",
      "Geometría descriptiva"
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      }
    ]
    
  },
  {
    idCar: 132,
    imgSrc: ImagenesApp.imgTurismo,
    titulo: "Turismo",
    descripcion:
      "Se encargan del diseño, planificación y gestión de recorridos, circuitos y promoción del turismo, asi mismo en la administración de agencias de viajes y empresas hoteleras.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
    lugaresDeTrabajo: [
      "Órganos de gobierno: Ministerios, Gobernaciones y Alcaldías",
      "Embajadas, consulados y organismos de representación internacional",
      "Industria turística, hotelería, agencias de viajes, etc.",
      "Organizaciones no gubernamentales y de cooperación internacional",
      "Empresas privadas"
    ],
    materias: [
      "Teoría del espacio",
      "Práctica de guía",
      "Soporte básico de vida",
      "Introducción al turismo",
      "Historia del arte",
      "Legislación Aplicada",
      "Inglés - Francés",
      "Reserva y Boletaje"
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UNICEN",
        enlace: "http://unicen.edu.bo/",
        logo: ImagenesApp.imgUnicen
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      },
      {
        nombre: "UNIFRANZ",
        enlace: "https://unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      }
    ]
    
  },
  {
    idCar: 133,
    imgSrc: ImagenesApp.imgGastronomia,
    titulo: "Gastronomía",
    descripcion:
      "Se encarga de aplicar conocimientos teórico-científico-tecnológicos con creatividad e innovación en elaboraciones culinarias y preservación de alimentos",
    area: "ÁREA URBANISMO Y TERRITORIO ",
    lugaresDeTrabajo: [
      "Restaurant's",
      "Hoteles",
      "Servicio de catering",
      "Empresas de comida y pastelería",
      "Empresa propia de comida"
    ],
    materias: [
      "Administración",
      "Historia de la Gastronomía",
      "Nutrición y Dietética",
      "Química de Alimentos",
      "Alimentos y Bebidas",
      "Sanidad e Higiene",
      "Lenguaje y Redacción"
    ],
    universidades: [
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      }
    ]
    
  },
  {
    idCar: 134,
    imgSrc: ImagenesApp.imgDiseñoGrafico,
    titulo: "Diseño Gráfico",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA URBANISMO Y TERRITORIO ",
    lugaresDeTrabajo: [
      "Órganos de gobierno y organizaciones no gubernamentales",
      "Empresas públicas y privadas, instituciones educativas, culturales y de eventos",
      "Agencias de diseño gráfico y publicitario",
      "Industria gráfica e imprentas",
      "Medios de comunicación (radio, televisión y prensa)"
    ],
    materias: [
      "Computación Básica",
      "Geometría Descriptiva",
      "Dibujo",
      "Teoría y Manejo del Color",
      "Taller de Diseño",
      "Historia",
      "Expresión Oral y Escrita"
    ],
    universidades: [
      {
        nombre: "UNIFRANZ",
        enlace: "https://www.unifranz.edu.bo/",
        logo: ImagenesApp.imgUnifranz
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "UCATEC",
        enlace: "https://ucatec.edu.bo/",
        logo: ImagenesApp.imgUcatec
      }
    ]
    
  },
  //ÁREA AGROPECUARIA
  {
    idCar: 135,
    imgSrc: ImagenesApp.imgVeterinaria,
    titulo: "Veterinaria y Zootecnia",
    descripcion:
      "Se encarga de la protección, recuperación  y fomento de la salud animal, por otra parte de la optimización de la producción animal  en un proceso de desarrollo sostenible.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Área de producción animal",
      "Área de medicina y salud animal",
      "Área de salud pública veterinaria"
    ],
    materias: [
      "Bioquímica Veterinaria",
      "Matemáticas",
      "Anatomía Descriptiva",
      "Embriología e Histología",
      "Biofísica",
      "Redacción Técnica y Dicción"
    ],
    universidades: [
      {
        nombre: "UNITEPC",
        enlace: "https://unitepc.edu.bo/",
        logo: ImagenesApp.imgUnitepc
      },
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      }
    ]
    
  },
  {
    idCar: 136,
    imgSrc: ImagenesApp.imgAmbiental,
    titulo: "Ingeniería Ambiental",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Empresas o industrias públicas o privadas, con procesos que involucren el manejo de desechos líquidos, sólidos y/o eliminación de gases tóxicos",
      "Organizaciones no gubernamentales y gubernamentales (Secretaría de la Madre Tierra, Alcaldías, etc) en las que requieren profesionales para desarrollar proyectos o estudios de impacto ambiental o restauración ecológica",
      "Como profesional independiente en la elaboración de proyectos, supervisión y gestión de programas ambientales"
    ],
    materias: [
      "Introducción a las ciencias ambientales",
      "Biología",
      "Química General",
      "Matemática",
      "Dibujo Técnico",
      "Formación Integral"
    ],
    universidades: [
      {
        nombre: "USIP",
        enlace: "https://usip.edu.bo/",
        logo: ImagenesApp.imgUsip
      },
      {
        nombre: "EMI",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi,
      },
      {
        nombre: "UCB",
        enlace: "https://www.ucb.edu.bo/",
        logo: ImagenesApp.imgCatolica
      }
    ]
    
  },
  {
    idCar: 137,
    imgSrc: ImagenesApp.imgAgronomia,
    titulo: "Ingeniería Agronómica",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Empresas dedicadas al rubro de la agricultura",
      "Proyectos de agricultura en instituciones privadas o públicas",
      "Proyectos de investigación relacionadas con la producción agrícola",
      "Instituciones públicas relacionadas con el medio ambiente"
    ],
    materias: [
      "Química general e inorgánica",
      "Anatomía y fisiología animal",
      "Cálculo",
      "Dibujo técnico",
      "Morfología y Anatomía vegetal"
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      }
    ]
    
  },
  {
    idCar: 138,
    imgSrc: ImagenesApp.imgAgricola,
    titulo: "Ingeníeria Agrícola",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Proyectos de gestión de recursos naturales renovables, agua y suelo",
      "Empresas dedicadas a la producción agrícola",
      "Instituciones públicas relacionadas con el medio ambiente"
    ],
    materias: [
      "Química general e Inorgánica",
      "Anatomía y Fisiología animal",
      "Cálculo",
      "Dibujo técnico",
      "Morfología y Anatomía vegetal"
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      }
    ]
    
  },
  {
    idCar: 139,
    imgSrc: ImagenesApp.imgForestal,
    titulo: "Ingeniería Forestal",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Ministerios de medio ambiente",
      "Organizaciones del trabajo forestal",
      "Proyectos de medio ambiente y conservación de territorios"
    ],
    materias: [
      "Botánica",
      "Cálculo",
      "Física",
      "Química",
      "Sociología y Antropología",
      "Trabajos Forestales"
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      }
    ]
    
  },
  {
    idCar: 140,
    imgSrc: ImagenesApp.imgAgroindustrial,
    titulo: "Ingeniería Agroindustrial",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Empresas públicas y privadas relacionadas con producción agrícola",
      "Proyectos de medio ambiente y producción agrícola"
    ],
    materias: [
          "Química general",
          "Zootecnia general",
          "Cálculo",
          "Física general",
          "Ecología general",
          "Morfología y anatomía general"
    ],
    universidades: [
      {
        nombre: "UMSS",
        enlace: "https://www.umss.edu.bo/",
        logo: ImagenesApp.imgEscudo
      },
      {
        nombre: "EMI",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi
      }
    ]
    
  },
  {
    idCar: 141,
    imgSrc: ImagenesApp.imgPetrolera,
    titulo: "Ingeniería Petrolera",
    descripcion:
      "Se encarga del diseño de marcas, editoriales  y de la imagen corporativa de empresas, asi mismo diseña escenografiás, stands,  vidrierias, etc. Desarrolla animaciones tradicionales e interactivas y audiovisuales, proyectos de multimedia, redes y plataformas web.",
    area: "ÁREA AGROPECUARIA ",
    lugaresDeTrabajo: [
      "Ingeniería en perforación de pozos de petróleo y gas: Programa, dirige y supervisa los procesos relacionados con la verificación de la presencia y extracción de hidrocarburos",
      "Reservorios: Determina el comportamiento productivo de un campo hidrocarburífero a lo largo de su vida útil",
      "Producción de hidrocarburos: Proyecta programas de producción primaria, secundaria, y mejorada, seleccionando los equipos e instalaciones más adecuadas para una producción racional y eficiente",
      "Tratamiento, Procesos y comercialización: Diseña los procedimientos de refinación, separación e industrialización de productos secundarios provenientes del gas natural o del petróleo diseñando gasoductos, oleoductos y poliductos para el transporte de hidrocarburos a la planta de almacenaje y comercializarlos"
    ],
    materias: [
          "Algebra ",
          "Cálculo",
          "Física",
          "Dibujo para Ingeniería ",
          "Química general "
    ],
    universidades: [
      {
        nombre: "EMI",
        enlace: "https://www.emi.edu.bo/",
        logo: ImagenesApp.imgEmi,
      },
      {
        nombre: "Univalle",
        enlace: "https://www.univalle.edu/",
        logo: ImagenesApp.imgUnivalle
      },
      {
        nombre: "UPB",
        enlace: "https://www.upb.edu/",
        logo: ImagenesApp.imgUPB
      },
      {
        nombre: "UPDS",
        enlace: "https://www.upds.edu.bo/",
        logo: ImagenesApp.imgUniversidadSelesiana
      },
      {
        nombre: "UDABOL",
        enlace: "https://www.udabol.edu.bo/",
        logo: ImagenesApp.imgUdabol
      }
    ],
  },
];

export default carrerasApp;
