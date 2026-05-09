// Destaques que aparecem no primeiro carrossel
const recomendados = [
    "Cachopo Individual | El clásico asturiano, empanado a la perfección. | 16,00€",
    "Tabla Taramundi | Mix de quesos y embutidos de la región. | 18,50€"
];

// Destaques que aparecem no segundo carrossel (Pratos Novos)
const pratosNovos = [
    "Burger Taramundi | Con huevo frito, pimientos y nuestra salsa secreta. | 12,00€",
    "Tarta de Queso y Chocolate | Una explosión de sabor artesanal. | 6,50€",
    "Combo Krispy | Pollo crujiente con cereales y mayonesa suave. | 10,50€"
];
const categorias = [
    { 
        id: 'desayunos', 
        nome: 'Desayunos', 
        itens: [
            'Tostada con aceite | Pan artesanal tostado con aceite de oliva virgen extra. | 3,30€',
            'Tostada con mermelada | Acompañada de mantequilla asturiana de alta calidad. | 3,30€',
            'Tostada con mermelada jamón serrano | El contraste perfecto entre dulce y salado. | 3,50€',
            'Tostada con tomate | Un clásico mediterráneo con tomate natural triturado. | 3,50€',
            'Tortilla de patata | Receta tradicional jugosa con huevos de corral. | 4,00€',
            'Tortilla francesa | Ligera y preparada al momento con dos huevos. | 4,00€',
            'Sandwich mixto | Crujiente bacon ahumado en pan de molde tostado. | 4,50€',
            'Sandwich bacon | Crujiente bacon ahumado en pan de molde tostado. | 5,50€',
            'Sandwich vegetal | Frescura total con lechuga, tomate, espárragos y huevo. | 6,00€',
            'Americano | Café largo e intenso para empezar bien el día. | 4,70€',
            'Bizcocho casero | Horneado diariamente en nuestra cocina. | 3,30€',
            'Croissant | Bollería artesana con auténtico sabor a mantequilla. | 3,30€',
            'Croissant jamón y queso | Calentito y fundido, ideal para un tentempié. | 4,50€'
        ] 
    },
    { 
        id: 'tablas', 
        nome: 'Tablas Completas', 
        itens: [
            'Cachopo individual | Selección especial de los mejores productos de la casa. | 20,00€',
            'Cachopo para dos | Variedad de quesos locales acompañados de frutos secos. | 33,00€',
            'tabla taramundi | El equilibrio entre embutidos ibéricos y quesos artesanos. | 30,00€'
        ] 
    },
    { 
        id: 'platos', 
        nome: 'Platos Combinados', 
        itens: [
            'Rabas | Selección del chef con los productos más frescos del mercado. | 10,00€',
            'Lomo a la plancha | Filetes de lomo adobado, huevo frito y patatas. | 10,00€',
            'Prechuga la plancha | Medio pollo jugoso con guarnición tradicional. | 10,00€',
            'Ternera a la plancha | Carne de ternera premium con patatas y pimientos. | 11,50€'
        ] 
    },
    { 
        id: 'sartenes', 
        nome: 'Sartenes Taramundi', 
        itens: [
            'Huevos rotos | Salteado de gulas con ajo, guindilla e hilos de huevo. | 8,00€',
            'Huevos rotos con jijas | Con chorizo local, patatas panadera y huevos rotos. | 9,00€',
            'Huevos rotos con morcilla | Chorizo de aldea frito con base de patatas crujientes. | 9,00€',
            'Huevos con torrezno | Nuestra especialidad con ingredientes secretos de temporada. | 9,00€',
            'Huevos rotos con lacón | Mix de verduras de la huerta salteadas con patata. | 9,00€',
            'Huevos rotos jamón serrano | Pulpo a la gallega sobre cama de patata y pimentón. | 9,00€',
            'Huevos con bacon | Variedad de setas silvestres con jamón y huevo. | 9,00€'
        ] 
    },
    { 
        id: 'hamburguesas', 
        nome: 'Hamburguesas', 
        itens: [
            'Clásica | 180g de carne, lechuga, tomate y cebolla. | 7,20€',
            'Clásica doble | Doble ración de queso fundido para los amantes do lácteo. | 9,50€',
            'Krispy clásica | Nuestra burger estrella con salsa especial de la casa. | 7,20€',
            'Krispy clásica doble | Hamburguesa de garbanzos y espinacas con alioli vegetal. | 8,20€',
            'Suprema | Con extra de bacon crujiente y cebolla caramelizada. | 8,20€',
            'Suprema krispy | Pechuga de pollo rebozada con cereales y mayonesa suave. | 8,20€',
            'Suprema doble | Dos discos de carne finos y costrosos con queso cheddar. | 9,70€',
            'Suprema krispy doble | Bañada en salsa barbacoa ahumada y aros de cebolla. | 8,70€',
            'Taramundi | Sabor tradicional con huevo frito y pimientos. | 10,70€'
        ] 
    },
    { 
        id: 'raciones', 
        nome: 'Raciones', 
        itens: [
            'torrezno | Crujientes por fuera con nuestra salsa picante secreta. | 5,70€',
            'Patatas 3 salsas | A la romana, frescos y con un toque de limón. | 5,00€',
            'Patatas bravas | Cremosas por dentro, receta de la familia. | 5,50€',
            'Patatas de la casa | Unos pican y otros no, directos de la huerta. | 7,70€',
            'Rabas | Marinadas con especias y fritas al punto de miel. | 9,00€',
            'Fingers | Gambas peladas saltadas con ajo y aceite de oliva. | 9,00€',
            'Alitas | Patata, atún y verduras con mayonesa artesanal. | 10,00€',
            'Calamares | Con queso fundido, guacamole y carne picada. | 11,00€'
        ] 
    },
    { 
        id: 'bocatas', 
        nome: 'Bocatas', 
        itens: [
            'Calamares | Lomo, jamón serrano, pimiento frito y alioli. | 6,20€',
            'Lomo | Un clásico indispensable en pan recién horneado. | 6,70€',
            'Bacon con queso | Filetes de lomo a la plancha con queso fundido. | 6,70€',
            'Rabas | Verduras asadas, hummus y brotes tiernos. | 7,20€',
            'Ternera | Ternera de primera con un toque de ajo y sal gorda. | 8,20€',
            'Bocatas de  la casa | Tradición pura: tortilla de patata en pan de barra. | 8,20€',
            'Panceta | El bocata definitivo con los mejores cortes de carne. | 6,70€'
        ] 
    },
    { 
        id: 'sandwich', 
        nome: 'Sandwich y Perritos', 
        itens: [
            'Sandwich mixto | Jamón york y queso fundido en pan de molde. | 5,70€',
            'Sandwich bacon  | Pollo, bacon, huevo, lechuga, tomate y mayonesa. | 6,20€',
            'Sandwich vegetal | Salchicha Frankfurt grande, ketchup e mostaza. | 6,70€',
            'Perrito clásico | Con cebolla frita, queso y nuestra salsa brava. | 6,20€',
            'Perrito Taramundi | Espárragos, huevo duro, lechuga y mayonesa. | 7,20€'
        ] 
    },
    { 
        id: 'ensaladas', 
        nome: 'Ensaladas de la Casa', 
        itens: [
            'Ensalada clásica | Pollo crujiente, costrones, queso parmesano y salsa césar. | 7,00€',
            'Ensalada mixta | Lechuga, tomate, cebolla, atún, huevo duro y aceitunas. | 8,70€',
            'Ensala César | Gourmet: brotes, frutos secos, queso de cabra y miel. | 8,70€'
        ] 
    },
    { 
        id: 'postres', 
        nome: 'Postres', 
        itens: [
            'Tarta de Queso | Receta casera súper cremosa con frutos rojos. | 4,00€',
            'Tarta de queso y tres chocolate | Con leche condensada y caramelo artesanal. | 4,00€'
        ] 
    }
    
];