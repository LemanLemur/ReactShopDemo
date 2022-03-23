const initalState = [
        {
            id: 1,
            img: "https://gama24.pl/7678-large_default/miguel-esteva-natalia-gitara-klasyczna-34.jpg",
            name: "Gitara",
            price: 999.50,
        },
        {
            id: 2,
            img: "https://sklep.spolemkielce.pl/wp-content/uploads/2020/10/Lays_chipsy-prosto-z-pieca_jogurt_125g.jpg",
            name: "Lays",
            price: 5.20,
        },
        {
            id: 3,
            img: "https://www.rowerzysta.pl/17208-large_default/rower-gorski-romet-jagabike-26-15-cali-czarny.jpg",
            name: "Rower górski",
            price: 999.50,
        },
        {
            id: 4,
            img: "https://f01.esfr.pl/foto/4/82831930057/565b1dae40156edd0facc47e568aa186/zwieger-obsidian-20-cm,82831930057_8.jpg",
            name: "Nóż kuchenny",
            price: 23.99,
        },
        {
            id: 5,
            img: "https://www.baseneo.pl/galerie/k/kolo-do-plywania-3-kolory-bes_12254.jpg",
            name: "Kółko",
            price: 15.29,
        },
        {
            id: 6,
            img: "https://www.sklep-bcs.pl/galerie/4272_bcs-tip5401ir-v-vi.webp",
            name: "CCTV",
            price: 123.00,
        }
    ];

// manage user state
export default function (state = initalState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
