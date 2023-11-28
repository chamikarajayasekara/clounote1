
export const HotelPageDataset = {
    paths: [
        { name: 'Home', url: '/' },
        { name: 'hotels', url: '/hotels' },
    ],
    pricing:{
        pp:500,
        ppName:'person',
        rate:'4.99',
        reviews: '337',
        guest: [
            { value: 1, label: '1 guest' },
            { value: 2, label: '2 guests' },
            { value: 3, label: '3 guests' },
            { value: 4, label: '4 guests' },
            { value: 5, label: '5 guests' },
            { value: 6, label: '6 guests' },
            { value: 7, label: '7 guests' },
            { value: 8, label: '8 guests' },
            { value: 9, label: '9 guests' },
            { value: 10, label: '10 guests' },
            { value: 11, label: '11 guests' },
            { value: 12, label: '12 guests' },
            { value: 13, label: '13 guests' },
            { value: 14, label: '14 guests' },
            { value: 15, label: '15 guests' },
            { value: 16, label: '16 guests' },
            { value: 17, label: '17 guests' },
            { value: 18, label: '18 guests' },
            { value: 19, label: '19 guests' },
            { value: 20, label: '20 guests' },
        ],
        priceList:[
            {item:'More guests discount', price:-300, symbol:'$'},
            {item:'Water bottles fee', price:200,symbol:'$'},
            {item:'guests', price:0, symbol:'$'},
        ]
    },
    checkboxGroups : [
        {
            header: 'Duration',
            mapName:'Duration',
            options: ['Up to 1 hours', '1 - 4 hours', '4 hours to 1 day', '2 - 3 days', '3+ days'],
        },
        {
            header: 'Language',
            mapName:'Language',
            options: ['English', 'French', 'Spannish','Camping','German'],
        },
        {
            header: 'Popular attraction',
            mapName:'PopularAttraction',
            options: ['Corbets Gap', 'Mini Worlds End', 'Knuckles Summit', 'Knuckles Waterfalls'],
        },
        {
            header: 'Special offers',
            mapName:'SpecialOffers',
            options: ['Likely to sell out', 'Special offers'],
        },
    ],
    radioInput: {
        label: 'Type of place',
        options: [
            { value: 'Any type', label: 'Any type' },
            { value: 'Room', label: 'Room' },
            { value: 'Entire place', label: 'Entire place' },
        ]
    },
    packageData:[
        {
            title: "Best stay in Knuckles",
            name: "Travel Partner",
            time: "3+ days",
            price: "$80",
            images:[
                'https://i.postimg.cc/yxmzKHt8/room2.webp',
                'https://i.postimg.cc/fL0NHXvX/room3.webp',
                'https://i.postimg.cc/PqJhw0pS/28b4295a-0b75-4bf6-b14f-5d1872777683.webp',
                'https://i.postimg.cc/x8DSBCsZ/bb1c1072-2ccb-43e7-aa5a-f788bdf09fd9.webp',
                'https://i.postimg.cc/g07pq43m/room1.webp',
            ]
        },
        {
            title: "Condo in Kandy",
            name: "Luxury 3BR Suite",
            time: "7+ days",
            price: "$125",
            images: [
                'https://i.postimg.cc/PqJhw0pS/28b4295a-0b75-4bf6-b14f-5d1872777683.webp',
                'https://i.postimg.cc/cCgcjR9R/11732104-1641-4b58-b7ff-294d7cbd42a2.webp',
                'https://i.postimg.cc/Dz65by4X/1b03b8ad-d9cb-41cc-8472-028fb671dc92.webp',
                'https://i.postimg.cc/jqD0KBBX/5356e42d-0fb8-4cc2-b6e1-7aaddbe46455.webp'
            ]
        },
        {
            title: "Luxury living in Kandy",
            name: "Hotel Rooma",
            time: "3+ days",
            price: "$325",
            images: [
                'https://i.postimg.cc/hjGs8WV3/6fc49daf-a0b3-4c97-8f88-0d2c89bf30b2.webp',
                'https://i.postimg.cc/SQH0KDhp/86118070-6f51-495c-9ab7-480f02febb82.webp',
                'https://i.postimg.cc/hj3rpyr4/8d84204e-7a68-4632-b9df-966c116186b7.webp',
                'https://i.postimg.cc/yxMTzDtw/9194f23d-c18c-4534-8e9b-9aacf5a82302.webp'
            ]
        },
        {
            title: "Nature and Wildlife Tours",
            name: "Knuckles Mountain Hiking",
            time: "3+ days",
            price: "$325",
            images: [
                'https://i.postimg.cc/gj7GcWK9/2e23aef1-54bf-4c23-88e7-98cf91c9135c.webp',
                'https://i.postimg.cc/LXNH7fY8/562536ec-add9-4051-8864-db839d47ee3c.webp',
                'https://i.postimg.cc/TPj2VBTm/805b67d4-aca3-4e56-9ece-44ce1c2324a5.webp',
                'https://i.postimg.cc/3RK8n9wq/9b361618-bfd5-4604-96ce-766a39b6ca3d.webp',
                'https://i.postimg.cc/fyywhLmj/e54fc220-7234-4f77-b55c-948d65802608.webp'
            ]
        },
        {
            title: "Traditional stay in Knuckles",
            name: "Man Mountain Villa",
            time: "2+ days",
            price: "$45",
            images: [
                'https://i.postimg.cc/J7dLwRnK/c00c7708-c70b-4c27-a3b8-ca237a84f646.jpg',
                'https://i.postimg.cc/TYLXfB5x/345e258b-b392-4004-83a1-a08485b15989.webp',
                'https://i.postimg.cc/76KyZkNH/90eaf9c5-f209-44af-b0cd-1ae84974692c.webp',
                'https://i.postimg.cc/5yGd8SGD/abfdd805-d36b-44dd-b73c-e7e7d53428bc.webp',
                'https://i.postimg.cc/sDkCXK5h/d69b8873-d6c1-4462-9d68-a049fff893a5.webp'
            ]
        } ,
        {
            title: "Tiny home in Mathale",
            name: "Riverston Base camp",
            time: "3 beds",
            price: "$45",
            images: [
                "https://i.postimg.cc/wTTnjZtM/b4d94544-4daa-4a42-b040-bbfee48ae482.webp",
                "https://i.postimg.cc/KjQV5rWm/78c0ea65-1afd-4968-bd33-f25489bb2793.webp",
                "https://i.postimg.cc/hPy6zsxr/94e37b00-7c72-4116-af50-e5f2ed3181b4.webp",
                "https://i.postimg.cc/hGx5YqYy/a5e77dd5-48e9-4b77-88ad-9cc3d999365b.webp",
                "https://i.postimg.cc/66hDwtpF/be470fa1-4d4b-4771-bb41-3f602f01ab85.webp",
                "https://i.postimg.cc/JzsgbX5W/db296fc3-95ee-43d6-a1f7-fc03895243d9.webp",
                "https://i.postimg.cc/13bdMzvV/f2bf0aac-4107-45f4-901b-c6d9b6d10576.webp"
            ]
        }
    ],
}