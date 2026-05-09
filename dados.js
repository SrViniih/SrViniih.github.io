const categorias = [
    { 
        id: 'desayunos', 
        nome: 'Desayunos', 
        itens: [
            'Tostada con aceite | Pan artesanal tostado con aceite de oliva virgen extra.',
            'Tostada con mermelada | Acompañada de mantequilla asturiana de alta calidad.',
            'Tostada con mermelada jamón serrano | El contraste perfecto entre dulce y salado.',
            'Tostada con tomate | Un clásico mediterráneo con tomate natural triturado.',
            'Tortilla de patata | Receta tradicional jugosa con huevos de corral.',
            'Tortilla francesa | Ligera y preparada al momento con dos huevos.',
            'Sandwich bacon | Crujiente bacon ahumado en pan de molde tostado.',
            'Sandwich vegetal | Frescura total con lechuga, tomate, espárragos y huevo.',
            'Americano | Café largo e intenso para empezar bien el día.',
            'Bizcocho casero | Horneado diariamente en nuestra cocina.',
            'Croissant | Bollería artesana con auténtico sabor a mantequilla.',
            'Croissant jamón y queso | Calentito y fundido, ideal para un tentempié.'
        ] 
    },
    { 
        id: 'tablas', 
        nome: 'Tablas Completas', 
        itens: [
            'Tabla Taramundi | Selección especial de los mejores productos de la casa.',
            'Tabla de Quesos | Variedad de quesos locales acompañados de frutos secos.',
            'Tabla Mixta Taramundi | El equilibrio entre embutidos ibéricos y quesos artesanos.'
        ] 
    },
    { 
        id: 'platos', 
        nome: 'Platos Combinados', 
        itens: [
            'Plato del Día | Selección del chef con los productos más frescos del mercado.',
            'Combinado de Lomo | Filetes de lomo adobado, huevo frito y patatas.',
            'Pollo Asado con Patatas | Medio pollo jugoso con guarnición tradicional.',
            'Entrecot con Guarnición | Carne de ternera premium con patatas y pimientos.'
        ] 
    },
    { 
        id: 'sartenes', 
        nome: 'Sartenes Taramundi', 
        itens: [
            'Sartén de Gulas | Salteado de gulas con ajo, guindilla e hilos de huevo.',
            'Sartén Asturiana | Con chorizo local, patatas panadera y huevos rotos.',
            'Sartén de Chorizo | Chorizo de aldea frito con base de patatas crujientes.',
            'Sartén de la Casa | Nuestra especialidad con ingredientes secretos de temporada.',
            'Sartén Vegetariana | Mix de verduras de la huerta salteadas con patata.',
            'Sartén de Pulpo | Pulpo a la gallega sobre cama de patata y pimentón.',
            'Sartén de Setas | Variedad de setas silvestres con jamón y huevo.'
        ] 
    },
    { 
        id: 'hamburguesas', 
        nome: 'Hamburguesas', 
        itens: [
            'Clásica | 180g de carne, lechuga, tomate y cebolla.',
            'Queso Extrema | Doble ración de queso fundido para los amantes do lácteo.',
            'Taramundi Burger | Nuestra burger estrella con salsa especial de la casa.',
            'Veggie Delight | Hamburguesa de garbanzos y espinacas con alioli vegetal.',
            'Bacon Lover | Con extra de bacon crujiente y cebolla caramelizada.',
            'Pollo Crispy | Pechuga de pollo rebozada con cereales y mayonesa suave.',
            'Doble Smash | Dos discos de carne finos y costrosos con queso cheddar.',
            'BBQ Special | Bañada en salsa barbacoa ahumada y aros de cebolla.',
            'Hambúrguer de la Abuela | Sabor tradicional con huevo frito y pimientos.'
        ] 
    },
    { 
        id: 'raciones', 
        nome: 'Raciones', 
        itens: [
            'Patatas Bravas | Crujientes por fuera con nuestra salsa picante secreta.',
            'Calamares | A la romana, frescos y con un toque de limón.',
            'Croquetas Caseras | Cremosas por dentro, receta de la familia.',
            'Pimientos Padrón | Unos pican y otros no, directos de la huerta.',
            'Alitas de Pollo | Marinadas con especias y fritas al punto de miel.',
            'Gambas al Ajillo | Gambas peladas saltadas con ajo y aceite de oliva.',
            'Ensaladilla Rusa | Patata, atún y verduras con mayonesa artesanal.',
            'Nachos Taramundi | Con queso fundido, guacamole y carne picada.'
        ] 
    },
    { 
        id: 'bocatas', 
        nome: 'Bocatas', 
        itens: [
            'Serranito | Lomo, jamón serrano, pimiento frito y alioli.',
            'Bocata de Calamares | Un clásico indispensable en pan recién horneado.',
            'Lomo con Queso | Filetes de lomo a la plancha con queso fundido.',
            'Bocata Vegano | Verduras asadas, hummus y brotes tiernos.',
            'Pepito de Ternera | Ternera de primera con un toque de ajo y sal gorda.',
            'Bocata de Tortilla | Tradición pura: tortilla de patata en pan de barra.',
            'Especial Taramundi | El bocata definitivo con los mejores cortes de carne.'
        ] 
    },
    { 
        id: 'sandwich', 
        nome: 'Sandwich y Perritos', 
        itens: [
            'Sandwich Mixto | Jamón york y queso fundido en pan de molde.',
            'Sandwich Club | Pollo, bacon, huevo, lechuga, tomate y mayonesa.',
            'Hot Dog Clásico | Salchicha Frankfurt grande, ketchup e mostaza.',
            'Hot Dog Especial | Con cebolla frita, queso y nuestra salsa brava.',
            'Vegetal Sandwich | Espárragos, huevo duro, lechuga y mayonesa.'
        ] 
    },
    { 
        id: 'ensaladas', 
        nome: 'Ensaladas de la Casa', 
        itens: [
            'César | Pollo crujiente, costrones, queso parmesano y salsa césar.',
            'Mixta | Lechuga, tomate, cebolla, atún, huevo duro y aceitunas.',
            'Ensalada Taramundi | Gourmet: brotes, frutos secos, queso de cabra y miel.'
        ] 
    },
    { 
        id: 'postres', 
        nome: 'Postres', 
        itens: [
            'Tarta de Queso | Receta casera súper cremosa con frutos rojos.',
            'Flan Casero | Con leche condensada y caramelo artesanal.'
        ] 
    }
];