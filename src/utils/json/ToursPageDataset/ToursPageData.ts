import imagesData from "../TourImages.json";
export type ImageArray = string[];
export type TourContent = string[];
export type points = string[];
export interface IHighlights {
  name:string,
  points:points,
  underlined: string
}
export interface ToursPoints {
  url:string,
  point:string,
  lineThrough:boolean
}
export interface IToursIncluded {
  name:string,
  points:ToursPoints[],
  underlined: string
}

export interface IComment {
  picture: string;
  name: string;
  comment: string;
  date: string;
}

export interface IReviews {
  name: string;
  count: string;
  reviewRate: string;
  underlined1: string;
  underlined2: string;
  comments: IComment[];
}

export interface IAccordionItem {
  name: string;
  items: string[];
}

export interface IAccordionSection {
  accordions: IAccordionItem[];
}
export interface IOther {
  url:string,
  heading:string,
  desc:string
}

interface IGuestOption {
  value: number;
  label: string;
}

export interface IPriceListItem {
  item: string;
  price: number;
  symbol: string,
}

export interface IPricing {
  pp: number;
  ppName: string;
  rate: string;
  reviews: string;
  guest: IGuestOption[];
  priceList: IPriceListItem[];
}


const ToursPageDetails = {
  paths: [
    { name: 'Home', url: '/' },
    { name: 'Tours', url: '/tours' },
    { name: 'Knuckles Top Tours', url: '/tours/tour-details' }
  ],
  tourPageDetails: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Facilisi nullam vehicula ipsum a arcu. A iaculis at erat pellentesque adipiscing. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Quis viverra nibh cras pulvinar. Quam quisque id diam vel quam elementum. Eros donec ac odio tempor orci suscipit tellus mauris a diam maecenas. Tristique senectus et netus et malesuada fames ac turpis egestas. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar."
  ],
  locationSource: 'https://i.postimg.cc/nzDCrXcj/tours-Asstes.jpg',
  imagesData,
  heading:'Explore The Wonders Of The Earth',
  highlights: {
    name: 'Highlights',
    points:[
        'Mauris pharetra et ultrices neque ornare.',
        'Duis ultricies lacus sed turpis tincidunt id. Dolor morbi non arcu risus quis varius quam. Est ante in nibh mauris molestie a iaculis.',
        'Facilisis volutpat est velit egestas dui id. Eu tincidunt tortor aliquam nulla facilisi cras. Gravida quis blandit facilisi malesuada turpis cursus.'
    ],
    underlined: 'See more'
  },
  tour:{
    name: 'What’s tour included',
    points: [
      {url: 'https://i.postimg.cc/1zDMP9V9/4x4.jpg', point:'4×4 WD cars',lineThrough:false },
      {url: 'https://i.postimg.cc/sxgJp76X/camel-1.png', point:'Experience Mountain Safari drivers',lineThrough:false},
      {url: 'https://i.postimg.cc/76VVGmNd/driver.jpg', point:'The camp is equipped with Bedouin style tents, carpeted and with traditional seating',lineThrough:false},
      {url: 'https://i.postimg.cc/RhpLGhyT/sleeping-bag.png', point:'Clean sleeping bags for everyone',lineThrough:false},
      {url: 'https://i.postimg.cc/j5KcSGyy/tent.jpg', point:'Mauris pharetra', lineThrough:true}
    ],
    underlined: 'Show all'
  },
  reviews:{
    name: 'Reviews',
    count: '57',
    reviewRate:'4.8',
    underlined1:'Write a review',
    underlined2: 'Show all reviews',
    comments: [
      {picture:'https://i.postimg.cc/Jz1TS1QH/Ellipse-19.png', name:'Debra Patel', comment:'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleif.', date:'Apr 18, 2021' },
      {picture:'https://i.postimg.cc/WbmW9D0P/Ellipse-19-1.png', name:'Eugene Andrews', comment:'Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleif.', date:'Apr 18, 2021' },
    ]
  },
  accordions:[
    {name: 'What to bring' , items: ['guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.']},
    {name: 'Terms & Conditions', items:[' typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas, Airbnb collects and pays sales and tourism taxes automatically on your behalf as well.', 'After each Host Service, Guests and Hosts will have an opportunity to review each other. Your Review must be accurate and may not contain any discriminatory, offensive, defamatory, or other language that violates our Content Policy or Review Policy. Reviews are not verified by Airbnb for accuracy and may be incorrect or misleading.']},
  ],
  other:[
    {url: 'https://i.postimg.cc/Nf688j0z/handshake-3.jpg', heading:'Sharing Tour', desc:'This is a sharing tour, you may share some or all of the itinerary with other clients'},
    {url: 'https://i.postimg.cc/9MN4tv30/time-1.jpg', heading:'Duration: 7-8 Hours', desc:'Check availability to see starting times'},
    {url: 'https://i.postimg.cc/5NdqFCfz/ticket-2.jpg', heading:'Mobile Ticketing', desc:'Use your phone or print your voucher'},
    {url: 'https://i.postimg.cc/HkTw61cs/power-off.jpg', heading:'Free Cancellation', desc:'Use your phone or print your voucher'},
    {url: 'https://i.postimg.cc/j2NHFs4C/checklist.jpg', heading:'Instant Confirmation', desc:''}
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
  }
};

export default ToursPageDetails;

export const TourPackageDataSet = {
  packageData:[
    {
      category: "Nature and Wildlife Tours",
      heading: "Knuckles Mountain Hiking",
      time: "3+ days",
      facilities: "4-6 guests · Entire home · 5 beds · 3 bath · Wifi · Kitchen · Free parking",
      rate: "5.0",
      count: "(318 reviews)",
      price: "$325",
      images:[
          'https://i.postimg.cc/MTFcm778/Image.png',
          'https://i.postimg.cc/JhKHGVt0/Image-1.png',
          'https://i.postimg.cc/wB9sqTqn/Image-2.png'
      ]
    },
    {
      category: "Nature and Wildlife Tours",
      heading: "Knuckles Mountain Hiking",
      time: "3+ days",
      facilities: "4-6 guests · Entire home · 5 beds · 3 bath · Wifi · Kitchen · Free parking",
      rate: "5.0",
      count: "(318 reviews)",
      price: "$325",
      images: [
          'https://i.postimg.cc/kM0K4Y8m/ella-3621804-640.jpg',
          'https://i.postimg.cc/fWtYMQVC/sri-lanka-2726045-640.jpg',
          'https://i.postimg.cc/wM3wWY7b/istockphoto-1196492117-1024x1024.jpg'
      ]
    },
    {
      category: "Nature and Wildlife Tours",
      heading: "Knuckles Mountain Hiking",
      time: "3+ days",
      facilities: "4-6 guests · Entire home · 5 beds · 3 bath · Wifi · Kitchen · Free parking",
      rate: "5.0",
      count: "(318 reviews)",
      price: "$325",
      images: [
        'https://i.postimg.cc/63MHLp5v/istockphoto-615835420-1024x1024.jpg',
        'https://i.postimg.cc/J0Hs6sxH/Image-3.png',
        'https://i.postimg.cc/x87thpmj/istockphoto-889806348-1024x1024.jpg'
      ]
    },
    {
      category: "Nature and Wildlife Tours",
      heading: "Knuckles Mountain Hiking",
      time: "3+ days",
      facilities: "4-6 guests · Entire home · 5 beds · 3 bath · Wifi · Kitchen · Free parking",
      rate: "5.0",
      count: "(318 reviews)",
      price: "$325",
      images: [
        'https://i.postimg.cc/VLtHC1MK/hero3.jpg',
        'https://i.postimg.cc/GtyLVQhP/monkey-4036088-640.jpg',
        'https://i.postimg.cc/J7vjWL95/Rectangle-718.png'
      ]
    },
    {
      category: "Nature and Wildlife Tours",
      heading: "Knuckles Mountain Hiking",
      time: "3+ days",
      facilities: "4-6 guests · Entire home · 5 beds · 3 bath · Wifi · Kitchen · Free parking",
      rate: "5.0",
      count: "(318 reviews)",
      price: "$325",
      images: [
        'https://i.postimg.cc/7brHk2fF/elephant-4037451-640.jpg',
        'https://i.postimg.cc/MT4Z94xK/meditate-5375835-640.jpg',
        'https://i.postimg.cc/J7vjWL95/Rectangle-718.png'
      ]
    }
  ],
  checkboxGroups : [
    {
      header: 'Categories',
      mapName:'Categories',
      options: ['Mountain Hiking', 'Tuk Tuk Tours', 'Cycling','Camping','Nature and outdoors','Try Sri Lankan Food','Sports','Art and culture'],
    },
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
  paths: [
    { name: 'Home', url: '/' },
    { name: 'Tours', url: '/tours' }
  ],
}