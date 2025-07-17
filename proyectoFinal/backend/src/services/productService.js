const products = [
    {
        "id": 1,
        "nombre": "Anillo de Plata Elegante",
        "descripcion": "Anillo de plata esterlina 925 con un diseño minimalista y elegante, ideal para cualquier ocasión.",
        "precio": 59.99,
        "imagen_url": "https://www.joyeriatictac.com/7908-ultralarge_default/anillo-plata-media-alianza-circonita-talla-brillante-.jpg"
    },
    {
        "id": 2,
        "nombre": "Collar de Oro Rosa",
        "descripcion": "Collar con baño de oro rosa de 18 quilates, adornado con un colgante en forma de corazón.",
        "precio": 129.99,
        "imagen_url": "https://www.joyeriajuanmanuel.com/wp-content/uploads/2020/11/38.-scaled.jpg"
    },
    {
        "id": 3,
        "nombre": "Pendientes de Diamante",
        "descripcion": "Pendientes de oro blanco de 14 quilates con incrustaciones de diamantes genuinos.",
        "precio": 499.99,
        "imagen_url": "https://carlosguinot.com/wp-content/uploads/A01940065.jpg"
    },
    {
        "id": 4,
        "nombre": "Pulsera de Perlas",
        "descripcion": "Pulsera de perlas cultivadas en agua dulce, con cierre de plata esterlina.",
        "precio": 89.99,
        "imagen_url": "https://grupovalorum.es/wp-content/uploads/2022/08/Pulsera-Perlas-Oro-1.jpg"
    },
    {
        "id": 5,
        "nombre": "Reloj de Oro Clásico",
        "descripcion": "Reloj de oro con correa de cuero genuino, resistente al agua y con cristal de zafiro.",
        "precio": 299.99,
        "imagen_url": "https://joyeriadaveri.com/wp-content/uploads/2022/12/R451.jpg"
    }
]

exports.getAllProduct = async () => {
    return products
}