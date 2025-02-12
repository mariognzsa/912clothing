const products =
[
    /*{
        "id": 7,
        "title": "Traumatismo",
        "description": "Oversize, Combed cotton fabric",
        "price": 349,
        "discount": 100,
        "season_released": "1",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/7/7_front.webp"
        ]
    },
    {
        "id": 1,
        "title": "Dirty",
        "description": "Oversize, Combed cotton fabric",
        "price": 349,
        "discount": 0,
        "season_released": "2",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/1/1_front.webp",
            "src/img/1/1_back.webp"
        ]
    },
    {
        "id": 2,
        "title": "Forgiving",
        "description": "Oversize, Combed cotton fabric",
        "price": 349,
        "discount": 0,
        "season_released": "2",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/2/2_front.webp",
            "src/img/2/2_back.webp"
        ]
    },
    {
        "id": 3,
        "title": "Ramirez",
        "description": "Oversize, Combed cotton fabric",
        "price": 349,
        "discount": 14.32,
        "season_released": "2",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/3/3_front.webp"
        ]
    },
    {
        "id": 4,
        "title": "Dear God",
        "description": "Oversize, Cotton fabric/Polyester",
        "price": 439,
        "discount": 0,
        "season_released": "3",
        "extras": "sticker_pack",
        "sizes": [
            "M",
            "L"
        ],
        "images": [
            "src/img/4/4_front.webp",
            "src/img/4/4_back.webp"
        ]
    },
    {
        "id": 5,
        "title": "Prayers",
        "description": "Oversize, Combed cotton fabric",
        "price": 359,
        "discount": 0,
        "season_released": "3",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/5/5_front.webp",
            "src/img/5/5_back.webp"
        ]
    },
    {
        "id": 6,
        "title": "Revamp",
        "description": "Oversize longsleeve, Combed cotton fabric",
        "price": 379,
        "discount": 100,
        "season_released": "3",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/6/6_front.webp",
            "src/img/6/6_back.webp"
        ]
    },
    {
        "id": 8,
        "title": "Cops",
        "description": "Crop top, Cotton fabric",
        "price": 319,
        "discount": 21.94,
        "season_released": "3",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/8/8_front.webp"
        ]
    },
    {
        "id": 9,
        "title": "Dear god",
        "description": "Crop top, Cotton fabric",
        "price": 319,
        "discount": 100,
        "season_released": "3",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/9/9_front.webp"
        ]
    },
    {
        "id": 10,
        "title": "Lips",
        "description": "Crop top, Cotton fabric",
        "price": 319,
        "discount": 100,
        "season_released": "3",
        "extras": "sticker_pack",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/10/10_front.webp"
        ]
    },
    {
        "id": 11,
        "title": "Sticker Pack",
        "description": "Sticker pack collection 01, 02, 03.",
        "price": 50,
        "discount": 0,
        "season_released": "3",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            "src/img/11/11_front.webp",
            "src/img/11/11_back.webp"
        ]
    },
    {
        "id": 12,
        "title": "Sexual Matters",
        "description": "Oversize, Combed cotton fabric.",
        "price": 379,
        "discount": 21.10,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/12/12_front.webp",
            "src/img/12/12_back.webp"
        ]
    },
    {
        "id": 13,
        "title": "Face Me",
        "description": "Oversize, Combed cotton fabric.",
        "price": 459,
        "discount": 34.85,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/13/13_front.webp",
            "src/img/13/13_back.webp"
        ]
    },
    {
        "id": 14,
        "title": "Hate and Hurt",
        "description": "Oversize, Combed cotton fabric.",
        "price": 379,
        "discount": 21.10,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/14/14_front.webp",
            "src/img/14/14_back.webp"
        ]
    },
    {
        "id": 15,
        "title": "Make me violent",
        "description": "Oversize, Combed cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/15/15_front.webp",
        ]
    },
    {
        "id": 16,
        "title": "Intentions",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/16/16_front.webp",
        ]
    },
    {
        "id": 17,
        "title": "Sexual Matters Top",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/17/17_front.webp",
        ]
    },
    {
        "id": 18,
        "title": "Hate and Hurt Top",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/18/18_front.webp",
        ]
    },
    {
        "id": 19,
        "title": "Blood Spilled",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "4",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/19/19_front.webp",
        ]
    },
    {
        "id": 20,
        "title": "Top Dirty",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 6.26,
        "season_released": "2",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/20/20_front.webp",
        ]
    },
    {
        "id": 22,
        "title": "Top Forgiving",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "2",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/22/22_front.webp",
        ]
    },
    {
        "id": 21,
        "title": "Top Ramirez",
        "description": "Crop top, Cotton fabric.",
        "price": 319,
        "discount": 21.94,
        "season_released": "2",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/21/21_front.webp",
        ]
    },
     {
         "id": 12,
         "title": "Six sex special edition",
         "description": "Sticker pack collection 01, 02, 03",
         "price": 50,
         "discount": 0,
         "season_released": "4",
         "extras": "",
         "sizes": [
             "Unisize"
         ],
         "images": [
             "src/img/11/11_front.webp",
             "src/img/11/11_back.webp"
         ]
    },*/
    {
        "id": 24,
        "title": "⚚ 01 ⚚",
        "description": "100% leather jacket, screen printed",
        "price": 3000,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            "src/img/24/24_back.jpg",
            "src/img/24/24_front.jpg"
        ]
    },
    {
        "id": 25,
        "title": "⚚ 02 ⚚",
        "description": "Denim jacket screen printed",
        "price": 2000,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            
            "src/img/25/25_back.jpg",
            "src/img/25/25_front.jpg"
        ]
    },
    {
        "id": 26,
        "title": "⚚ 03 ⚚",
        "description": "100% cotton dress shirt, screen printed",
        "price": 2000,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            "src/img/26/26_front.jpg"
        ]
    },
    {
        "id": 27,
        "title": "⚚ 04 ⚚",
        "description": "Denim pants, screen printed",
        "price": 1500,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            "src/img/27/27_front.jpg",
        ]
    },
    {
        "id": 28,
        "title": "⚚ 05 ⚚",
        "description": "100% leather jacket, screen printed",
        "price": 3000,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            "src/img/28/28_back.jpg",
            "src/img/28/28_front.jpg"
        ]
    },
    {
        "id": 32,
        "title": "Revelaciones",
        "description": "Cotton 260 gms, screen printed",
        "price": 500,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "src/img/32/32_front.jpg",
            "src/img/32/32_back.jpg"
        ]
    },
    {
        "id": 33,
        "title": "Sin remordimiento",
        "description": "Embroidery design",
        "price": 350,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            "src/img/33/33_front.jpg",
            "src/img/33/33_side.jpg"
        ]
    },
    {
        "id": 30,
        "title": "Alquimia",
        "description": "screen printed",
        "price": 400,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "Unisize"
        ],
        "images": [
            
            "src/img/30/30_side.jpg",
            "src/img/30/30_front.jpg"
        ]
    },
    {
        "id": 29,
        "title": "99Allah",
        "description": "crop top, screen printed",
        "price": 350,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/29/29_front.jpg",
        ]
    },
    {
        "id": 31,
        "title": "Carne",
        "description": "Crop top, Cotton fabric",
        "price": 400,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            
            "src/img/31/31_front.jpg",
            "src/img/31/31_back.jpg"
        ]
    },
    {
        "id": 23,
        "title": "@",
        "description": "Crop top, Cotton fabric.",
        "price": 300,
        "discount": 0,
        "season_released": "5",
        "extras": "",
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "images": [
            "src/img/23/23_front.jpg"
        ]
    },
];

export default products;
