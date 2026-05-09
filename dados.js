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
            'Cachopo individual | Selección especial de los mejores productos de la casa.',
            'Cachopo para dos | Variedad de quesos locales acompañados de frutos secos.',
            'tabla taramundi | El equilibrio entre embutidos ibéricos y quesos artesanos.'
        ] 
    },
    { 
        id: 'platos', 
        nome: 'Platos Combinados', 
        itens: [
            'Rabas | Selección del chef con los productos más frescos del mercado.',
            'Lomo a la plancha | Filetes de lomo adobado, huevo frito y patatas.',
            'Prechuga la plancha | Medio pollo jugoso con guarnición tradicional.',
            'Ternera a la plancha | Carne de ternera premium con patatas y pimientos.'
        ] 
    },
    { 
        id: 'sartenes', 
        nome: 'Sartenes Taramundi', 
        itens: [
            'Huevos rotos | Salteado de gulas con ajo, guindilla e hilos de huevo.',
            'Huevos rotos con jijas | Con chorizo local, patatas panadera y huevos rotos.',
            'Huevos rotos con morcilla | Chorizo de aldea frito con base de patatas crujientes.',
            'Huevos con torrezno | Nuestra especialidad con ingredientes secretos de temporada.',
            'Huevos rotos con lacón | Mix de verduras de la huerta salteadas con patata.',
            'Huevos rotos jamón serrano | Pulpo a la gallega sobre cama de patata y pimentón.',
            'Huevos con bacon | Variedad de setas silvestres con jamón y huevo.'
        ] 
    },
    { 
        id: 'hamburguesas', 
        nome: 'Hamburguesas', 
        itens: [
            'Clásica | 180g de carne, lechuga, tomate y cebolla.',
            'Clásica doble | Doble ración de queso fundido para los amantes do lácteo.',
            'Krispy clásica | Nuestra burger estrella con salsa especial de la casa.',
            'Krispy clásica doble | Hamburguesa de garbanzos y espinacas con alioli vegetal.',
            'Suprema | Con extra de bacon crujiente y cebolla caramelizada.',
            'Suprema krispy | Pechuga de pollo rebozada con cereales y mayonesa suave.',
            'Suprema doble | Dos discos de carne finos y costrosos con queso cheddar.',
            'Suprema krispy doble | Bañada en salsa barbacoa ahumada y aros de cebolla.',
            'Taramundi | Sabor tradicional con huevo frito y pimientos.'
        ] 
    },
    { 
        id: 'raciones', 
        nome: 'Raciones', 
        itens: [
            'torrezno | Crujientes por fuera con nuestra salsa picante secreta.',
            'Patatas 3 salsas | A la romana, frescos y con un toque de limón.',
            'Patatas bravas | Cremosas por dentro, receta de la familia.',
            'Patatas de la casa | Unos pican y otros no, directos de la huerta.',
            'Rabas | Marinadas con especias y fritas al punto de miel.',
            'Fingers | Gambas peladas saltadas con ajo y aceite de oliva.',
            'Alitas | Patata, atún y verduras con mayonesa artesanal.',
            'Calamares | Con queso fundido, guacamole y carne picada.'
        ] 
    },
    { 
        id: 'bocatas', 
        nome: 'Bocatas', 
        itens: [
            'Calamares | Lomo, jamón serrano, pimiento frito y alioli.',
            'Lomo | Un clásico indispensable en pan recién horneado.',
            'Bacon con queso | Filetes de lomo a la plancha con queso fundido.',
            'Rabas | Verduras asadas, hummus y brotes tiernos.',
            'Ternera | Ternera de primera con un toque de ajo y sal gorda.',
            'Bocatas de  la casa | Tradición pura: tortilla de patata en pan de barra.',
            'Panceta | El bocata definitivo con los mejores cortes de carne.'
        ] 
    },
    { 
        id: 'sandwich', 
        nome: 'Sandwich y Perritos', 
        itens: [
            'Sandwich mixto | Jamón york y queso fundido en pan de molde.',
            'Sandwich bacon  | Pollo, bacon, huevo, lechuga, tomate y mayonesa.',
            'Sandwich vegetal | Salchicha Frankfurt grande, ketchup e mostaza.',
            'Perrito clásico | Con cebolla frita, queso y nuestra salsa brava.',
            'Perrito Taramundi | Espárragos, huevo duro, lechuga y mayonesa.'
        ] 
    },
    { 
        id: 'ensaladas', 
        nome: 'Ensaladas de la Casa', 
        itens: [
            'Ensalada clásica | Pollo crujiente, costrones, queso parmesano y salsa césar.',
            'Ensalada mixta | Lechuga, tomate, cebolla, atún, huevo duro y aceitunas.',
            'Ensala César | Gourmet: brotes, frutos secos, queso de cabra y miel.'
        ] 
    },
    { 
        id: 'postres', 
        nome: 'Postres', 
        itens: [
            'Tarta de Queso | Receta casera súper cremosa con frutos rojos.',
            'Tarta de queso y tres chocolate | Con leche condensada y caramelo artesanal.'
        ] 
    }
];