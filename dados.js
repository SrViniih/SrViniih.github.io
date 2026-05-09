const categorias = [
    { 
        id: 'desayunos', 
        nome: 'Desayunos', 
        itens: [
            'Tostada con aceite | Pan artesanal tostado con aceite de oliva virgen extra. | 2,50€',
            'Tostada con mermelada | Acompañada de mantequilla asturiana de alta calidad. | 2,80€',
            'Tostada con mermelada jamón serrano | El contraste perfecto entre dulce y salado. | 4,50€',
            'Tostada con tomate | Un clásico mediterráneo con tomate natural triturado. | 3,00€',
            'Tortilla de patata | Receta tradicional jugosa con huevos de corral. | 3,50€',
            'Tortilla francesa | Ligera y preparada al momento con dos huevos. | 3,00€',
            'Sandwich bacon | Crujiente bacon ahumado en pan de molde tostado. | 4,20€',
            'Sandwich vegetal | Frescura total con lechuga, tomate, espárragos y huevo. | 4,80€',
            'Americano | Café largo e intenso para empezar bien el día. | 1,80€',
            'Bizcocho casero | Horneado diariamente en nuestra cocina. | 2,50€',
            'Croissant | Bollería artesana con auténtico sabor a mantequilla. | 1,80€',
            'Croissant jamón y queso | Calentito y fundido, ideal para un tentempié. | 3,50€'
        ] 
    },
    { 
        id: 'tablas', 
        nome: 'Tablas Completas', 
        itens: [
            'Cachopo individual | Selección especial de los mejores productos de la casa. | 16,00€',
            'Cachopo para dos | Variedad de quesos locales acompañados de frutos secos. | 28,00€',
            'tabla taramundi | El equilibrio entre embutidos ibéricos y quesos artesanos. | 18,50€'
        ] 
    },
    { 
        id: 'platos', 
        nome: 'Platos Combinados', 
        itens: [
            'Rabas | Selección del chef con los productos más frescos del mercado. | 12,50€',
            'Lomo a la plancha | Filetes de lomo adobado, huevo frito y patatas. | 11,00€',
            'Prechuga la plancha | Medio pollo jugoso con guarnición tradicional. | 10,50€',
            'Ternera a la plancha | Carne de ternera premium con patatas y pimientos. | 14,90€'
        ] 
    },
    { 
        id: 'sartenes', 
        nome: 'Sartenes Taramundi', 
        itens: [
            'Huevos rotos | Salteado de gulas con ajo, guindilla e hilos de huevo. | 9,50€',
            'Huevos rotos con jijas | Con chorizo local, patatas panadera y huevos rotos. | 10,50€',
            'Huevos rotos con morcilla | Chorizo de aldea frito con base de patatas crujientes. | 10,50€',
            'Huevos con torrezno | Nuestra especialidad con ingredientes secretos de temporada. | 11,50€',
            'Huevos rotos con lacón | Mix de verduras de la huerta salteadas con patata. | 10,00€',
            'Huevos rotos jamón serrano | Pulpo a la gallega sobre cama de patata y pimentón. | 12,00€',
            'Huevos con bacon | Variedad de setas silvestres con jamón y huevo. | 9,50€'
        ] 
    },
    { 
        id: 'hamburguesas', 
        nome: 'Hamburguesas', 
        itens: [
            'Clásica | 180g de carne, lechuga, tomate y cebolla. | 8,50€',
            'Clásica doble | Doble ración de queso fundido para los amantes do lácteo. | 11,50€',
            'Krispy clásica | Nuestra burger estrella con salsa especial de la casa. | 9,50€',
            'Krispy clásica doble | Hamburguesa de garbanzos y espinacas con alioli vegetal. | 12,50€',
            'Suprema | Con extra de bacon crujiente y cebolla caramelizada. | 10,50€',
            'Suprema krispy | Pechuga de pollo rebozada con cereales y mayonesa suave. | 10,50€',
            'Suprema doble | Dos discos de carne finos y costrosos con queso cheddar. | 13,50€',
            'Suprema krispy doble | Bañada en salsa barbacoa ahumada y aros de cebolla. | 13,50€',
            'Taramundi | Sabor tradicional con huevo frito y pimientos. | 12,00€'
        ] 
    },
    { 
        id: 'raciones', 
        nome: 'Raciones', 
        itens: [
            'torrezno | Crujientes por fuera con nuestra salsa picante secreta. | 6,50€',
            'Patatas 3 salsas | A la romana, frescos y con un toque de limón. | 7,50€',
            'Patatas bravas | Cremosas por dentro, receta de la familia. | 6,00€',
            'Patatas de la casa | Unos pican y otros no, directos de la huerta. | 7,00€',
            'Rabas | Marinadas con especias y fritas al punto de miel. | 11,00€',
            'Fingers | Gambas peladas saltadas con ajo y aceite de oliva. | 9,50€',
            'Alitas | Patata, atún y verduras con mayonesa artesanal. | 8,50€',
            'Calamares | Con queso fundido, guacamole y carne picada. | 12,00€'
        ] 
    },
    { 
        id: 'bocatas', 
        nome: 'Bocatas', 
        itens: [
            'Calamares | Lomo, jamón serrano, pimiento frito y alioli. | 7,50€',
            'Lomo | Un clásico indispensable en pan recién horneado. | 6,00€',
            'Bacon con queso | Filetes de lomo a la plancha con queso fundido. | 6,50€',
            'Rabas | Verduras asadas, hummus y brotes tiernos. | 7,50€',
            'Ternera | Ternera de primera con un toque de ajo y sal gorda. | 8,50€',
            'Bocatas de  la casa | Tradición pura: tortilla de patata en pan de barra. | 7,00€',
            'Panceta | El bocata definitivo con los mejores cortes de carne. | 6,50€'
        ] 
    },
    { 
        id: 'sandwich', 
        nome: 'Sandwich y Perritos', 
        itens: [
            'Sandwich mixto | Jamón york y queso fundido en pan de molde. | 4,50€',
            'Sandwich bacon  | Pollo, bacon, huevo, lechuga, tomate y mayonesa. | 5,80€',
            'Sandwich vegetal | Salchicha Frankfurt grande, ketchup e mostaza. | 5,50€',
            'Perrito clásico | Con cebolla frita, queso y nuestra salsa brava. | 4,50€',
            'Perrito Taramundi | Espárragos, huevo duro, lechuga y mayonesa. | 6,00€'
        ] 
    },
    { 
        id: 'ensaladas', 
        nome: 'Ensaladas de la Casa', 
        itens: [
            'Ensalada clásica | Pollo crujiente, costrones, queso parmesano y salsa césar. | 9,50€',
            'Ensalada mixta | Lechuga, tomate, cebolla, atún, huevo duro y aceitunas. | 8,50€',
            'Ensala César | Gourmet: brotes, frutos secos, queso de cabra y miel. | 11,00€'
        ] 
    },
    { 
        id: 'postres', 
        nome: 'Postres', 
        itens: [
            'Tarta de Queso | Receta casera súper cremosa con frutos rojos. | 5,50€',
            'Tarta de queso y tres chocolate | Con leche condensada y caramelo artesanal. | 6,00€'
        ] 
    }
];