class Paquete {
    constructor(id, nombre, tipo, caracteristicas /**array */, precio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo
        this.caracteristicas = caracteristicas;
        this.precio = precio
    }
}

class Destino {
    constructor(id, nombre, descripcion, imgs /*array*/, fechaInicio, fechaFinal, paquetes /**array */) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imgs = imgs;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal
        this.paquetes = paquetes; // basico, premiun y vip 
    }
}



const destinos = [
    new Destino(
        1,
        'San Salvador',
        'San Salvador es la capital y la ciudad más grande de El Salvador. Es un importante centro cultural, económico y político del país. El destino ofrece una combinación única de historia, arte y belleza natural. Algunos lugares de interés incluyen el Teatro Nacional, el Museo de Arte de El Salvador y el Parque Nacional El Boquerón.',
        ['centro-2.jpg', 'imagen2.jpg', 'imagen3.jpg'],
        '2023-06-01',
        '2023-06-07',
        [new Paquete(1, 'Paquete 1', 'Basico', ['Transporte', 'Hospedaje', 'Desayuno'], 100), 
        new Paquete(9, 'Paquete 9', 'Premiun', ['Transporte', 'Hospedaje', 'Desayuno', 'Almuerzo', 'Cena'], 350), 
        new Paquete(6, 'Paquete 6', 'Vip', ['Transporte', 'Hospedaje', 'Desayuno', 'Almuerzo', 'Cena'], 250)]
    ),
    new Destino(
        2,
        'Ruta de las Flores',
        'La Ruta de las Flores es una ruta turística en El Salvador que se caracteriza por sus hermosos paisajes, pueblos pintorescos y plantaciones de café. El recorrido incluye visitas a varios municipios, donde los visitantes pueden disfrutar de coloridos mercados, iglesias coloniales, cascadas y senderos naturales. Es un destino ideal para los amantes de la naturaleza y la cultura.',
        ['rutaFloresJ.jpg', 'imagen5.jpg', 'imagen6.jpg'],
        '2023-07-10',
        '2023-07-15',
        [new Paquete(2, 'Paquete 2', 'Basico', ['Transporte', 'Hospedaje', 'Almuerzo'], 150), 
        new Paquete(8, 'Paquete 8', 'Premiun', ['Transporte', 'Hospedaje', 'Desayuno', 'Cena'], 280), new Paquete(5, 'Paquete 5', 'Vip', ['Transporte', 'Hospedaje', 'Desayuno', 'Cena'], 180)]
    ),
    new Destino(
        3,
        'Playa El Tunco',
        'Playa El Tunco es uno de los destinos de playa más populares de El Salvador. Es conocido por sus hermosas olas para practicar surf, su ambiente relajado y su animada vida nocturna. Los visitantes pueden disfrutar de actividades acuáticas, como surf, buceo y paddleboarding, o simplemente relajarse en la playa y disfrutar de los hermosos atardeceres. También hay una gran variedad de restaurantes y bares para explorar.',
        ['elTunco.jpg   ', 'imagen8.jpg', 'imagen9.jpg'],
        '2023-08-20',
        '2023-08-25',
        [ new Paquete(3, 'Paquete 3', 'Basico', ['Transporte', 'Hospedaje', 'Cena'], 120),
        new Paquete(7, 'Paquete 7', 'Premiun', ['Transporte', 'Hospedaje', 'Desayuno', 'Almuerzo'], 300),
        new Paquete(4, 'Paquete 4', 'Vip', ['Transporte', 'Hospedaje', 'Desayuno', 'Almuerzo'], 200)]
    )

];

class dbContext {
    constructor(data) {
        this.data = data;
    }
}

const instance = new  dbContext(destinos);