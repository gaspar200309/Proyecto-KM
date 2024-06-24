import ImagenesApp from "../../assets/ImagenesApp";

const universidadesData = [
    {
        idU: 1001,

        nombre: 'UMSS (Universidad Mayor de San Simón)',
        info: [
            {
                imgU: ImagenesApp.imgEscudo,
                direccion: '➡Dirección: Av. Oquendo y Jordan',
                telefono: 'Teléfono: 4 4251515 - 4 4525161 - 4 4525161',
                fax: 'Fax: 4530361',
                correo: 'Correo: informaciones@umss.edu.bo',
                enlace: 'https://www.umss.edu.bo/',
            },
          
        ],
        academia: 'Universidades (publica)',
    },

    {
        idU: 1002,
        nombre: 'EMI (Escuela militar de ingeniería)',
        info: [
            {
                imgU: ImagenesApp.imgEmi,
                direccion: '➡Direccion: Av. 23 de Marzo, Zona Muyurina',
                telefono: 'Teléfono: 4531133 - 4530361',
                fax: 'Fax: 4530361',
                
            },
            {
                direccion: '➡Direccion: Av. Lanza entre Oruro y La Paz',
                telefono: 'Teléfono: 4521844',
                correo: 'Correo: cohabamba@adm.emi.edu.bo',
                enlace: 'https://www.emi.edu.bo/',                
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1003,
        nombre: 'USIP (Universidad Simón I. Patiño)',
        info: [
            {
                imgU: ImagenesApp.imgUsip,
                direccion:'➡Dirección: Av. Villazón Nro 22 Km. 1 a Sacaba',
                telefono: 'Teléfono: (591-4) 4539930-4539875',
                fax: 'Fax: (591-4) 4539910',
                correo: 'Correo: info@usip.edu.bo',
                enlace: 'https://usip.edu.bo/', 
            }
         
        ],
        academia: 'Universidades',
    }, 
    {
        idU: 1004,
        nombre: 'Unicen',
        info: [
            {
                imgU: ImagenesApp.imgUnicen,
                direccion:'➡Dirección: Sede Cochabamba - Torre Empresarial C. Santivañez y Junín Nº 240',
                telefono: 'Teléfono: 4252987',
            }, 
            {
                direccion:'➡Dirección: Sede Cochabamba - Torre de Salud Av. Juan de la Rosa Nº 234',
                telefono: 'Teléfono: 4038651',
                enlace: 'http://unicen.edu.bo/',
                
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1005,
        nombre: 'UPB (Universidad Privada Boliviana)',
        info: [
            {
                imgU: ImagenesApp.imgUPB,
                direccion:'➡Dirección: Av. Cap. Victor ustariz Km 6 - 1/2',
                telefono: 'Teléfono: 4268287',
                enlace: 'https://www.upb.edu/',
            }
        ],
        academia: 'Universidades',
    }, 
    {
        idU: 1006,
        nombre: 'UCB (Universidad Catolica Boliviana)',
        info: [
            {
                imgU: ImagenesApp.imgCatolica,
                direccion:'➡Dirección: Z. Tupuraya/Calle M. Marquez esquina Parque Jorge Trigo Andia',
                telefono: 'Teléfono: 4293100',
                enlace: 'https://www.ucb.edu.bo/',
            }
           
        ],
        academia: 'Universidades',
    }, 
    {
        idU: 1007,
        nombre: 'UCATEC (Univ. Pv. de Cs. Administrativas y Tecnológicas)',
        info: [
            {
                imgU: ImagenesApp.imgUcatec,
                direccion:'➡Dirección: Campus Miraflores Calle Guillermo Añez esquina Mariano Borda',
                telefono: 'Teléfono: 4200406',
            }, 
            {
                direccion: '➡Direccion: Campus Centro C. Esteban Arce entre Jordán y Calama',
                telefono: 'Teléfono: 4255295',
                enlace: 'https://ucatec.edu.bo/',
            }
        ],
        academia: 'Universidades',
    }, 
    {
        idU: 1008,
        nombre: 'UPDS (Universidad Privada Domingo Savio)',
        info: [
            {
                imgU: ImagenesApp.imgDomingoSavio,
                direccion: '➡Dirección: C. Irigoyen # 1555, Zona Sarco',
                telefono: 'Teléfono: 442-1743',   
                cel: 'Cel: 591 61681770',
                enlace: 'https://www.upds.edu.bo/',
            }
        ],
        academia: 'Universidades',
     
    },
    {
        idU: 1009,
        nombre: 'UDABOL (Universidad de Aquino de Bolivia)',
        info: [
            {
                imgU: ImagenesApp.imgUdabol,
                direccion: '➡Dirección: Carretera a Sacaba, kilómetro 8 - 1/2. ',
                telefono: 'Teléfono: 4273417',   
                cel: 'Cel: 591 72135778',
                enlace: 'https://www.udabol.edu.bo/',
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1010,
        nombre: 'UNIVALLE (Universidad Privada del Valle)',
        info: [
            {
                imgU: ImagenesApp.imgUnivalle,
                direccion: '➡Dirección: Campus Tiquipaya C. Guillermina Martínez s/n, Tiquipaya',
                telefono: 'Teléfono: 4318800 - 4150100',   
                fax: 'Fax: 4315148 - 4315886'
            },
            {
                direccion: '➡Dirección: Torre Académica América Av.América N° 165',
                telefono: 'Teléfono: 4150300',
                wss: 'Whatsap: +591 79962180'
            },
            {
                direccion: '➡Dirección: EDIF. Polifuncional Univalle Av. Ayacucho N° 256',
                telefono: 'Teléfono: 4150200',
                enlace: 'https://www.univalle.edu/',
            }
        ],
        academia: 'Universidades',       
    },
    {
        idU: 1011,
        nombre: 'UNIFRANZ (Universidad Franz Tamayo)',
        info:[
            {
                imgU: ImagenesApp.imgUnifranz,
                direccion:'➡Direccion: Calle Portales N° 359 esq. Av. G. Villarroel',
                telefono: 'Teléfono: 4798655',
                fax: 'Fax: 4798655',
                correo: 'Correo: unifranz@unifranz.edu.bo',
                enlace: 'https://unifranz.edu.bo/',
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1012,
        nombre: 'UNITEPC (Universidad Técnica Pv. Cosmos)',
        info: [
            {
                imgU: ImagenesApp.imgUnitepc,
                direccion:'➡Dirección: Campus Florida: Av. Blanco Galindo Km 7 1/2, Miguel Lanza esq. Daniel Campos Zona Florida Norte s/n',
                telefono: 'Teléfono: 4374740',
            },
            {
                direccion: '➡Dirección: Campus Colonial: Pasaje Fidelia Sánchez entre Heroínas y España',
                telefono: 'Teléfono: 4250549',
            },
            {
                direccion: '➡Dirección: Campus Juan Pablo: Av. Blanco Galindo s/n km. 4 1/2, entre Av. Cuarta y Carlos Araníbar',
                telefono: 'Teléfono: 4283910',   
                enlace: 'https://unitepc.edu.bo/',
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1013,
        nombre: 'ULAT (Universidad Latinoamericana)',
        info: [
            {
                imgU: ImagenesApp.imgUlat,
                direccion:'➡Dirección: Uruguay #E-836, entre 16 de julio y Oquendo',
                telefono: 'Teléfono: 4509488 - 4221004',
                correo: 'Correo: latinoamericana@ulat.edu.bo',
                enlace: 'http://www.ulat.edu.bo/',
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1014,
        nombre: 'Universidad Salesiana',
        info: [
            {
                imgU: ImagenesApp.imgUniversidadSelesiana,
                direccion:'➡Dirección: Av. La Paz. B. Kami-Colcapirhua',
                telefono: 'Teléfono: 4375671 – 4375674',
                cel: 'Cel: +591 71565440',
                correo: 'Correo: cochabamba@usalesiana.edu.bo',
                enlace: 'https://www.usalesiana.edu.bo/principal/es',
            }
        ],
        academia: 'Universidades',

    },
    {
        idU: 1015,
        nombre: 'UPAL (Universidad Privada Abierta Latinoamericana) ',
        info: [
            {
                imgU: ImagenesApp.imgUpal,
                direccion:'➡Dirección: Calle Túpac Amaru N#1816, esq. Paso del Inca-Z. Norte',
                telefono: 'Teléfono: 4486100',
                correo: 'Correo: upal@upal.edu',
                enlace: 'https://upal.edu.bo/',
            }
        ],
        academia: 'Universidades',
    },
    {
        idU: 1016,
        nombre: 'ESFM (Escuela superior de formación de maestros)',
        info: [
            {
                imgU: ImagenesApp.imgEsfm,
                direccion:'➡Dirección: Unidad Quillacollo: Zona Illataco – parada Trufi 211',
                telefono: 'Teléfono: 4 4392460',
                correo: 'Correo: esfm.simon.rodriguez.quillacollo@gmail.com'
            },
            {
                direccion:'➡Dirección: Unidad Cercado: C. Willam Shakespeare y Sofocles s/n, zona Alto Temporal',
                telefono: 'Teléfono: 4457565',
                correo: 'Correo: uacercado2023@gamil.com'
            },
            {
                direccion:'➡Dirección: Unidad Sacaba: Catachilla Baja Zona Villa Obrajes',
                telefono: 'Teléfono: 4063959',
                correo: 'Correo: ua_sacaba@gmail.com'
            },
            {
                direccion:'➡Dirección: Unidad Tarata: Av. Igualdad (frente a Instituto Agropecuario Tecnologico)',
                telefono: 'Teléfono: 4578028',
                correo: 'Correo: ua_tarata@gamil.com'
            },
            {
                direccion:'➡Dirección: Unidad Villa Tunari: Carretera a chipiriri km 6 1/2',
                cel: 'Cel: 71108183',
                correo: 'Correo: ua_vtunari@gmail.com',
                enlace: 'https://esfmsimonrodriguez.edu.bo/',
            }
        ],
        academia: 'Normales',
    },
    {
        idU: 1017,
        nombre: 'Instituto Tecnológico Sayarinapaj',
        info: [
            {
                imgU: ImagenesApp.imgSayarinapaj,
                direccion:'➡Dirección: Bella Vista Km 8 camino a Liriuni-Quillacollo',
                telefono: 'Teléfono: 436370 - 4567259',
                enlace: 'https://www.facebook.com/Sayarinapaj',
            }
        ],
        academia: 'Institutos',
    }, 
    {
        idU: 1018,
        nombre: 'Instituto Tecnológico Ivan Canelas ',
        info: [
            {
                imgU: ImagenesApp.imgItic,
                direccion: '➡Dirección: Z. Ancoraide altura hacienda Simón I. Patiño-Vinto',
                cel: 'Cel: 69491663',
                enlace: 'https://www.facebook.com/profile.php?id=100063716003226',
            }
        ],
        academia: 'Institutos',
    },
    {
        idU: 1019,
        nombre: 'Instituto tecnológico Maria Cristina ',
        info: [
            {
                imgU: ImagenesApp.imgItmac,
                direccion: '➡Dirección: Av. Capitán Víctor Ustáriz, km 6 1/2-Colcapiruha',
                telefono: 'Teléfono: 4376870',
                correo: 'Correo: tecnologico.mariacristina@gmail.com',
                enlace: 'https://www.tecnologicomariacristina.edu.bo/?fbclid=IwAR0WkMdyB146fm1pS0Q57UjLcjwwA1rOntnaRSHs1C1FiBu5-x91BdpwRmg',
            }
        ],
        academia: 'Institutos',
    }, 
    {
        nombre: 'Instituto tecnológico Padre Antonio Berta',
        info: [
            {
                imgU: ImagenesApp.imgItpab,
                direccion: '➡Dirección: Av. B. Galindo km 7 1/2 (6 cuadras norte) Z. Sumunpaya-Colcapiruha',
                telefono: 'Teléfono: 4223421',
                correo: 'Correo: tecnologico.antoniberta@gamil.com',
                enlace: 'https://www.facebook.com/profile.php?id=100063901956544&locale=es_LA',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto tecnológico Nuestra señora del Pilar',
        info: [
            {
                imgU: ImagenesApp.imgItp,
                direccion: '➡Dirección: Calle Tarwi esquina torrentera La Pajch/ Z. Ticti Norte',
                telefono: 'Teléfono: 4476396',
                cel: 'Cel: +591 65509693',
                correo: 'Correo: maristas.itp@gmail.com',
                enlace: 'https://itp.edu.bo/?fbclid=IwAR1K99idvA8fYGxqSNh0lYQZfbAkLP-pCt-ojtDz9z6-pDp6k2dKQcYhgNw',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto Tecnico nacional de comercio "Alvarez Plata" Nocturno',
        info: [
            {
                imgU: ImagenesApp.imgAlvarezPlataNocturno,
                direccion: '➡Dirección: Av. Ayacucho No. 0415 esquina Jordán',
                telefono: 'Teléfono: 4257971',
                correo: 'Correo: incosccba@gmail.com',
                enlace: 'https://incoscbba.com/web/',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto Tecnico nacional de comercio "Alvarez Plata" Diurno',
        info: [
            {
                imgU: ImagenesApp.imgAlvarezPlataNocturno,
                direccion: '➡Dirección: Av. Ayacucho No. 0415 esquina Jordán',
                telefono: 'Teléfono: 4258041',
                correo: 'Correo: federicoalvarezplata54@gmail.com',
                enlace: 'https://www.facebook.com/profile.php?id=100063085936526&locale=es_LA',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Insituto técnico nacional de comercio',
        info: [
            {
                imgU: ImagenesApp.imgIncos3,
                direccion: '➡Dirección: C. Cincinato Prada, parada final de trufis "Independiente"-Quillacollo',
                enlace: 'https://www.facebook.com/incos3quillacollo?locale=es_LA',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto técnico superior de comercio y administración ESAE',
        info: [
            {
                imgU: ImagenesApp.imgIsae,
                direccion: '➡Dirección: Av. Heroinas esq. Belzu',
                telefono: 'Teléfono: 4569265',
                wss: 'WhatsApp: +591 71423741',
                enlace: 'https://www.facebook.com/esaecbba?locale=es_LA',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto tecnológico boliviano canadiense El Paso',
        info: [
            {
                imgU: ImagenesApp.imgItbc,
                direccion: '➡Dirección: Av. Elías Meneces-El paso',
                telefono: 'Teléfono: 43 1 9017',
                enlace: 'https://www.facebook.com/profile.php?id=100063671336435&locale=es_LA',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Insituto Técnico Sacaba',
        info: [
            {
                imgU: ImagenesApp.imgItsacaba,
                direccion: '➡Dirección: Av. Ciscunvalación esp. Ismael Cespedes',
                telefono: 'Teléfono: 4704264',
                correo: 'Correo: itsainformaticaindustrial@gmail.com',
                enlace: 'https://www.facebook.com/itsacaba/',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto tecnológico "Amor misericordioso" CETAM',
        info: [
            {
                imgU: ImagenesApp.imgCETAM,
                direccion: '➡Dirección: Marquina, Av. Santa Cruz, dos cudras oeste sobre c/ Tupuyan y dos cuadras al norte',
                telefono: 'Teléfono: 4366451',
                correo: 'Correo: cetam.qllo@gmail.com',
                enlace: 'https://www.facebook.com/instituto.tecnologico.cetam/?eid=ARAffc7OsYm6naFWQ-F5D3q4M_VavoMLs2DVhpDbMRBHInmdNbvN',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto tecnológico industrial comercial Puerto Mejillones',
        info: [
            {
                imgU: ImagenesApp.imgItpmejillones,
                direccion: '➡Dirección: Zona villa Graciela (pacata baja) ⠀Calle Senobio Gallardo y calle 6 de junio',
                telefono: 'Teléfono: 4 4490286',
                correo: 'Correo: iticpm@gmail.com',
                enlace: 'https://mejillonescochabamba.blogspot.com/',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto Tecnológico Agropecuario Industrial Tarata - ITAIT',
        info: [
            {
                imgU: ImagenesApp.imgItait,
                direccion: '➡Dirección: Zona Jark´apampa, lado cemeneterio Tarata',
                cel: 'Cel: +591 72700252',
                enlace: 'https://www.facebook.com/profile.php?id=100077370317705',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Escuela Técnica de Salud Boliviano Japonesa de Cooperación Andina ',
        info: [
            {
                imgU: ImagenesApp.imgEtsalud,
                direccion: '➡Dirección: Av. Aniceto Arce ',
                telefono: 'Teléfono: 4404228277 - 425701',
                cel: 'Cel: 79974177',
                correo: 'Correo: transparenciaetsbjca@gmail.com',
                enlace: 'https://www.facebook.com/etsbjca/photos?locale=es_LA',
            }
        ],
        academia: 'Institutos',
    },
    {
        nombre: 'Instituto Profesional San Ignacio ',
        info: [
            {
                imgU: ImagenesApp.imgItsi,
                direccion: '➡Dirección: Av. Capitan Victor Ustariz Km 4 ⠀N° 3246 , Villa Busch',
                telefono: 'Teléfono: 4431716',
                enlace: 'https://www.facebook.com/people/Instituto-Tecnico-San-Ignacio-Cbba/100070298230539/?sk=about',
            }
        ],
        academia: 'Institutos (privada)',
    }
    
];

export default universidadesData;