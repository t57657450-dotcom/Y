// players.js - پایگاه کامل لیگ مجازی مربیان
// 19 تیم + بازیکنان بازار + اسطوره‌ها
// این فایل را کامل جایگزین players.js قبلی کن

const TEAMS = {
  "Real Madrid": {
    country: "🇪🇸 اسپانیا",
    nameFa: "رئال مادرید"
  },

  "Barcelona": {
    country: "🇪🇸 اسپانیا",
    nameFa: "بارسلونا"
  },

  "Manchester United": {
    country: "🏴 انگلیس",
    nameFa: "منچستریونایتد"
  },

  "Manchester City": {
    country: "🏴 انگلیس",
    nameFa: "منچسترسیتی"
  },

  "Liverpool": {
    country: "🏴 انگلیس",
    nameFa: "لیورپول"
  },

  "Arsenal": {
    country: "🏴 انگلیس",
    nameFa: "آرسنال"
  },

  "Chelsea": {
    country: "🏴 انگلیس",
    nameFa: "چلسی"
  },

  "Paris Saint-Germain": {
    country: "🇫🇷 فرانسه",
    nameFa: "پاری سن ژرمن"
  },

  "Bayern Munich": {
    country: "🇩🇪 آلمان",
    nameFa: "بایرن مونیخ"
  },

  "Juventus": {
    country: "🇮🇹 ایتالیا",
    nameFa: "یوونتوس"
  },

  "Inter Milan": {
    country: "🇮🇹 ایتالیا",
    nameFa: "اینتر"
  },

  "Persepolis": {
    country: "🇮🇷 ایران",
    nameFa: "پرسپولیس"
  },

  "Esteghlal": {
    country: "🇮🇷 ایران",
    nameFa: "استقلال"
  },

  "Sepahan": {
    country: "🇮🇷 ایران",
    nameFa: "سپاهان"
  },

  "Tractor": {
    country: "🇮🇷 ایران",
    nameFa: "تراکتور"
  },

  "Al Nassr": {
    country: "🇸🇦 عربستان",
    nameFa: "النصر"
  },

  "Benfica": {
    country: "🇵🇹 پرتغال",
    nameFa: "بنفیکا"
  },

  "Porto": {
    country: "🇵🇹 پرتغال",
    nameFa: "پورتو"
  },

  "Inter Miami": {
    country: "🇺🇸 آمریکا",
    nameFa: "اینتر میامی"
  }
};


/*
==================================================
 بازیکنان رئال مادرید
==================================================
*/

const REAL_MADRID = [

  {
    id: "rm-courtois",
    name: "Thibaut Courtois",
    nameFa: "تیبو کورتوا",
    team: "Real Madrid",
    position: "GK",
    overall: 90,
    country: "Belgium"
  },

  {
    id: "rm-lunin",
    name: "Andriy Lunin",
    nameFa: "آندری لونین",
    team: "Real Madrid",
    position: "GK",
    overall: 80,
    country: "Ukraine"
  },

  {
    id: "rm-trent",
    name: "Trent Alexander-Arnold",
    nameFa: "ترنت الکساندر آرنولد",
    team: "Real Madrid",
    position: "RB",
    overall: 86,
    country: "England"
  },

  {
    id: "rm-carvajal",
    name: "Dani Carvajal",
    nameFa: "دنی کارواخال",
    team: "Real Madrid",
    position: "RB",
    overall: 83,
    country: "Spain"
  },

  {
    id: "rm-militao",
    name: "Éder Militão",
    nameFa: "ادر میلیتائو",
    team: "Real Madrid",
    position: "CB",
    overall: 85,
    country: "Brazil"
  },

  {
    id: "rm-rudiger",
    name: "Antonio Rüdiger",
    nameFa: "آنتونیو رودیگر",
    team: "Real Madrid",
    position: "CB",
    overall: 85,
    country: "Germany"
  },

  {
    id: "rm-huijsen",
    name: "Dean Huijsen",
    nameFa: "دین هویسن",
    team: "Real Madrid",
    position: "CB",
    overall: 84,
    country: "Spain"
  },

  {
    id: "rm-mendy",
    name: "Ferland Mendy",
    nameFa: "فرلان مندی",
    team: "Real Madrid",
    position: "LB",
    overall: 81,
    country: "France"
  },

  {
    id: "rm-carreras",
    name: "Álvaro Carreras",
    nameFa: "آلوارو کارراس",
    team: "Real Madrid",
    position: "LB",
    overall: 82,
    country: "Spain"
  },

  {
    id: "rm-tchouameni",
    name: "Aurélien Tchouaméni",
    nameFa: "اورلین شوامنی",
    team: "Real Madrid",
    position: "CDM",
    overall: 85,
    country: "France"
  },

  {
    id: "rm-camavinga",
    name: "Eduardo Camavinga",
    nameFa: "ادواردو کاماوینگا",
    team: "Real Madrid",
    position: "CM",
    overall: 84,
    country: "France"
  },

  {
    id: "rm-valverde",
    name: "Federico Valverde",
    nameFa: "فدریکو والورده",
    team: "Real Madrid",
    position: "CM",
    overall: 88,
    country: "Uruguay"
  },

  {
    id: "rm-bellingham",
    name: "Jude Bellingham",
    nameFa: "جود بلینگام",
    team: "Real Madrid",
    position: "CAM",
    overall: 90,
    country: "England"
  },

  {
    id: "rm-guler",
    name: "Arda Güler",
    nameFa: "آردا گولر",
    team: "Real Madrid",
    position: "CAM",
    overall: 82,
    country: "Turkey"
  },

  {
    id: "rm-brahim",
    name: "Brahim Díaz",
    nameFa: "ابراهیم دیاز",
    team: "Real Madrid",
    position: "RW",
    overall: 82,
    country: "Morocco"
  },

  {
    id: "rm-vinicius",
    name: "Vinícius Júnior",
    nameFa: "وینیسیوس جونیور",
    team: "Real Madrid",
    position: "LW",
    overall: 90,
    country: "Brazil"
  },

  {
    id: "rm-mbappe",
    name: "Kylian Mbappé",
    nameFa: "کیلیان امباپه",
    team: "Real Madrid",
    position: "ST",
    overall: 91,
    country: "France"
  },

  {
    id: "rm-endrick",
    name: "Endrick",
    nameFa: "اندریک",
    team: "Real Madrid",
    position: "ST",
    overall: 77,
    country: "Brazil"
  }

];


/*
==================================================
 بازیکنان بارسلونا
==================================================
*/

const BARCELONA = [

  {
    id: "bar-joangarcia",
    name: "Joan García",
    nameFa: "خوان گارسیا",
    team: "Barcelona",
    position: "GK",
    overall: 82,
    country: "Spain"
  },

  {
    id: "bar-szczesny",
    name: "Wojciech Szczęsny",
    nameFa: "وویچک شزنی",
    team: "Barcelona",
    position: "GK",
    overall: 82,
    country: "Poland"
  },

  {
    id: "bar-pena",
    name: "Iñaki Peña",
    nameFa: "ایناکی پنیا",
    team: "Barcelona",
    position: "GK",
    overall: 76,
    country: "Spain"
  },

  {
    id: "bar-kounde",
    name: "Jules Koundé",
    nameFa: "ژول کونده",
    team: "Barcelona",
    position: "RB",
    overall: 87,
    country: "France"
  },

  {
    id: "bar-ericgarcia",
    name: "Eric García",
    nameFa: "اریک گارسیا",
    team: "Barcelona",
    position: "CB",
    overall: 80,
    country: "Spain"
  },

  {
    id: "bar-araujo",
    name: "Ronald Araújo",
    nameFa: "رونالد آرائوخو",
    team: "Barcelona",
    position: "CB",
    overall: 86,
    country: "Uruguay"
  },

  {
    id: "bar-cubarsi",
    name: "Pau Cubarsí",
    nameFa: "پائو کوبارسی",
    team: "Barcelona",
    position: "CB",
    overall: 84,
    country: "Spain"
  },

  {
    id: "bar-christensen",
    name: "Andreas Christensen",
    nameFa: "آندریاس کریستنسن",
    team: "Barcelona",
    position: "CB",
    overall: 84,
    country: "Denmark"
  },

  {
    id: "bar-balde",
    name: "Alejandro Balde",
    nameFa: "آلخاندرو بالده",
    team: "Barcelona",
    position: "LB",
    overall: 82,
    country: "Spain"
  },

  {
    id: "bar-dejong",
    name: "Frenkie de Jong",
    nameFa: "فرنکی دی‌یونگ",
    team: "Barcelona",
    position: "CM",
    overall: 87,
    country: "Netherlands"
  },

  {
    id: "bar-pedri",
    name: "Pedri",
    nameFa: "پدری",
    team: "Barcelona",
    position: "CM",
    overall: 91,
    country: "Spain"
  },

  {
    id: "bar-fermin",
    name: "Fermín López",
    nameFa: "فرمین لوپز",
    team: "Barcelona",
    position: "CAM",
    overall: 82,
    country: "Spain"
  },

  {
    id: "bar-gavi",
    name: "Gavi",
    nameFa: "گاوی",
    team: "Barcelona",
    position: "CM",
    overall: 84,
    country: "Spain"
  },

  {
    id: "bar-olmo",
    name: "Dani Olmo",
    nameFa: "دنی اولمو",
    team: "Barcelona",
    position: "CAM",
    overall: 84,
    country: "Spain"
  },

  {
    id: "bar-ferran",
    name: "Ferran Torres",
    nameFa: "فران تورس",
    team: "Barcelona",
    position: "LW",
    overall: 82,
    country: "Spain"
  },

  {
    id: "bar-raphinha",
    name: "Raphinha",
    nameFa: "رافینیا",
    team: "Barcelona",
    position: "RW",
    overall: 88,
    country: "Brazil"
  },

  {
    id: "bar-yamal",
    name: "Lamine Yamal",
    nameFa: "لامین یامال",
    team: "Barcelona",
    position: "RW",
    overall: 91,
    country: "Spain"
  },

  {
    id: "bar-lewandowski",
    name: "Robert Lewandowski",
    nameFa: "رابرت لواندوفسکی",
    team: "Barcelona",
    position: "ST",
    overall: 89,
    country: "Poland"
  }

];


/*
==================================================
 بازیکنان منچستریونایتد
==================================================
*/

const MANCHESTER_UNITED = [

  {
    id: "mun-lammens",
    name: "Senne Lammens",
    nameFa: "سن لمِنس",
    team: "Manchester United",
    position: "GK",
    overall: 78,
    country: "Belgium"
  },

  {
    id: "mun-darlow",
    name: "Karl Darlow",
    nameFa: "کارل دارلو",
    team: "Manchester United",
    position: "GK",
    overall: 74,
    country: "England"
  },

  {
    id: "mun-dalot",
    name: "Diogo Dalot",
    nameFa: "دیوگو دالوت",
    team: "Manchester United",
    position: "RB",
    overall: 82,
    country: "Portugal"
  },

  {
    id: "mun-mazraoui",
    name: "Noussair Mazraoui",
    nameFa: "نصیر مزراوی",
    team: "Manchester United",
    position: "RB",
    overall: 81,
    country: "Morocco"
  },

  {
    id: "mun-deligt",
    name: "Matthijs de Ligt",
    nameFa: "ماتیاس دی‌لیخت",
    team: "Manchester United",
    position: "CB",
    overall: 84,
    country: "Netherlands"
  },

  {
    id: "mun-martinez",
    name: "Lisandro Martínez",
    nameFa: "لیساندرو مارتینز",
    team: "Manchester United",
    position: "CB",
    overall: 85,
    country: "Argentina"
  },

  {
    id: "mun-yoro",
    name: "Leny Yoro",
    nameFa: "لنی یورو",
    team: "Manchester United",
    position: "CB",
    overall: 82,
    country: "France"
  },

  {
    id: "mun-maguire",
    name: "Harry Maguire",
    nameFa: "هری مگوایر",
    team: "Manchester United",
    position: "CB",
    overall: 79,
    country: "England"
  },

  {
    id: "mun-dorgu",
    name: "Patrick Dorgu",
    nameFa: "پاتریک دورگو",
    team: "Manchester United",
    position: "LB",
    overall: 79,
    country: "Denmark"
  },

  {
    id: "mun-shaw",
    name: "Luke Shaw",
    nameFa: "لوک شاو",
    team: "Manchester United",
    position: "LB",
    overall: 79,
    country: "England"
  },

  {
    id: "mun-ugarte",
    name: "Manuel Ugarte",
    nameFa: "مانوئل اوگارته",
    team: "Manchester United",
    position: "CDM",
    overall: 80,
    country: "Uruguay"
  },

  {
    id: "mun-bruno",
    name: "Bruno Fernandes",
    nameFa: "برونو فرناندز",
    team: "Manchester United",
    position: "CAM",
    overall: 88,
    country: "Portugal"
  },

  {
    id: "mun-mainoo",
    name: "Kobbie Mainoo",
    nameFa: "کوبی ماینو",
    team: "Manchester United",
    position: "CM",
    overall: 81,
    country: "England"
  },

  {
    id: "mun-mount",
    name: "Mason Mount",
    nameFa: "میسون مونت",
    team: "Manchester United",
    position: "CAM",
    overall: 80,
    country: "England"
  },

  {
    id: "mun-cunha",
    name: "Matheus Cunha",
    nameFa: "ماتئوس کونیا",
    team: "Manchester United",
    position: "ST",
    overall: 84,
    country: "Brazil"
  },

  {
    id: "mun-mbeumo",
    name: "Bryan Mbeumo",
    nameFa: "برایان امبومو",
    team: "Manchester United",
    position: "RW",
    overall: 85,
    country: "Cameroon"
  },

  {
    id: "mun-sesko",
    name: "Benjamin Šeško",
    nameFa: "بنیامین ششکو",
    team: "Manchester United",
    position: "ST",
    overall: 84,
    country: "Slovenia"
  },

  {
    id: "mun-amad",
    name: "Amad Diallo",
    nameFa: "آماد دیالو",
    team: "Manchester United",
    position: "RW",
    overall: 82,
    country: "Ivory Coast"
  }

];


/*
==================================================
 بازیکنان منچسترسیتی
==================================================
*/

const MANCHESTER_CITY = [

  {
    id: "mci-donnarumma",
    name: "Gianluigi Donnarumma",
    nameFa: "جانلوئیجی دوناروما",
    team: "Manchester City",
    position: "GK",
    overall: 89,
    country: "Italy"
  },

  {
    id: "mci-trafford",
    name: "James Trafford",
    nameFa: "جیمز ترافورد",
    team: "Manchester City",
    position: "GK",
    overall: 77,
    country: "England"
  },

  {
    id: "mci-lewis",
    name: "Rico Lewis",
    nameFa: "ریکو لوئیس",
    team: "Manchester City",
    position: "RB",
    overall: 80,
    country: "England"
  },

  {
    id: "mci-khusanov",
    name: "Abdukodir Khusanov",
    nameFa: "عبدالقادر خوسانوف",
    team: "Manchester City",
    position: "CB",
    overall: 80,
    country: "Uzbekistan"
  },

  {
    id: "mci-dias",
    name: "Rúben Dias",
    nameFa: "روبن دیاز",
    team: "Manchester City",
    position: "CB",
    overall: 87,
    country: "Portugal"
  },

  {
    id: "mci-stones",
    name: "John Stones",
    nameFa: "جان استونز",
    team: "Manchester City",
    position: "CB",
    overall: 84,
    country: "England"
  },

  {
    id: "mci-gvardiol",
    name: "Joško Gvardiol",
    nameFa: "یوشکو گواردیول",
    team: "Manchester City",
    position: "CB",
    overall: 85,
    country: "Croatia"
  },

  {
    id: "mci-ake",
    name: "Nathan Aké",
    nameFa: "ناتان آکه",
    team: "Manchester City",
    position: "CB",
    overall: 82,
    country: "Netherlands"
  },

  {
    id: "mci-rodri",
    name: "Rodri",
    nameFa: "رودری",
    team: "Manchester City",
    position: "CDM",
    overall: 91,
    country: "Spain"
  },

  {
    id: "mci-reijnders",
    name: "Tijjani Reijnders",
    nameFa: "تیجانی رایندرز",
    team: "Manchester City",
    position: "CM",
    overall: 85,
    country: "Netherlands"
  },

  {
    id: "mci-bernardo",
    name: "Bernardo Silva",
    nameFa: "برناردو سیلوا",
    team: "Manchester City",
    position: "CM",
    overall: 88,
    country: "Portugal"
  },

  {
    id: "mci-kovacic",
    name: "Mateo Kovačić",
    nameFa: "ماتئو کواچیچ",
    team: "Manchester City",
    position: "CM",
    overall: 83,
    country: "Croatia"
  },

  {
    id: "mci-foden",
    name: "Phil Foden",
    nameFa: "فیل فودن",
    team: "Manchester City",
    position: "RW",
    overall: 88,
    country: "England"
  },

  {
    id: "mci-cherki",
    name: "Rayan Cherki",
    nameFa: "رایان چرکی",
    team: "Manchester City",
    position: "CAM",
    overall: 82,
    country: "France"
  },

  {
    id: "mci-doku",
    name: "Jeremy Doku",
    nameFa: "جرمی دوکو",
    team: "Manchester City",
    position: "LW",
    overall: 84,
    country: "Belgium"
  },

  {
    id: "mci-savinho",
    name: "Savinho",
    nameFa: "ساوینیو",
    team: "Manchester City",
    position: "RW",
    overall: 82,
    country: "Brazil"
  },

  {
    id: "mci-haaland",
    name: "Erling Haaland",
    nameFa: "ارلینگ هالند",
    team: "Manchester City",
    position: "ST",
    overall: 91,
    country: "Norway"
  },

  {
    id: "mci-marmoush",
    name: "Omar Marmoush",
    nameFa: "عمر مرموش",
    team: "Manchester City",
    position: "ST",
    overall: 84,
    country: "Egypt"
  }

];


/*
==================================================
 بازیکنان لیورپول
==================================================
*/

const LIVERPOOL = [

  {
    id: "liv-alisson",
    name: "Alisson",
    nameFa: "آلیسون",
    team: "Liverpool",
    position: "GK",
    overall: 89,
    country: "Brazil"
  },

  {
    id: "liv-mamardashvili",
    name: "Giorgi Mamardashvili",
    nameFa: "گیورگی مامارداشویلی",
    team: "Liverpool",
    position: "GK",
    overall: 84,
    country: "Georgia"
  },

  {
    id: "liv-frimpong",
    name: "Jeremie Frimpong",
    nameFa: "جرمی فریمپونگ",
    team: "Liverpool",
    position: "RB",
    overall: 85,
    country: "Netherlands"
  },

  {
    id: "liv-bradley",
    name: "Conor Bradley",
    nameFa: "کانر بردلی",
    team: "Liverpool",
    position: "RB",
    overall: 79,
    country: "Northern Ireland"
  },

  {
    id: "liv-vandijk",
    name: "Virgil van Dijk",
    nameFa: "ویرجیل فن‌دایک",
    team: "Liverpool",
    position: "CB",
    overall: 89,
    country: "Netherlands"
  },

  {
    id: "liv-konate",
    name: "Ibrahima Konaté",
    nameFa: "ابراهیما کوناته",
    team: "Liverpool",
    position: "CB",
    overall: 85,
    country: "France"
  },

  {
    id: "liv-gomez",
    name: "Joe Gomez",
    nameFa: "جو گومز",
    team: "Liverpool",
    position: "CB",
    overall: 79,
    country: "England"
  },

  {
    id: "liv-robertson",
    name: "Andy Robertson",
    nameFa: "اندی رابرتسون",
    team: "Liverpool",
    position: "LB",
    overall: 82,
    country: "Scotland"
  },

  {
    id: "liv-kerkez",
    name: "Milos Kerkez",
    nameFa: "میلوش کرکز",
    team: "Liverpool",
    position: "LB",
    overall: 80,
    country: "Hungary"
  },

  {
    id: "liv-gravenberch",
    name: "Ryan Gravenberch",
    nameFa: "رایان گراونبرخ",
    team: "Liverpool",
    position: "CM",
    overall: 85,
    country: "Netherlands"
  },

  {
    id: "liv-macallister",
    name: "Alexis Mac Allister",
    nameFa: "الکسیس مک‌آلیستر",
    team: "Liverpool",
    position: "CM",
    overall: 87,
    country: "Argentina"
  },

  {
    id: "liv-szoboszlai",
    name: "Dominik Szoboszlai",
    nameFa: "دومینیک سوبوسلای",
    team: "Liverpool",
    position: "CAM",
    overall: 85,
    country: "Hungary"
  },

  {
    id: "liv-wirtz",
    name: "Florian Wirtz",
    nameFa: "فلوریان ویرتز",
    team: "Liverpool",
    position: "CAM",
    overall: 89,
    country: "Germany"
  },

  {
    id: "liv-gakpo",
    name: "Cody Gakpo",
    nameFa: "کودی خاکپو",
    team: "Liverpool",
    position: "LW",
    overall: 84,
    country: "Netherlands"
  },

  {
    id: "liv-diaz",
    name: "Luis Díaz",
    nameFa: "لوئیس دیاز",
    team: "Liverpool",
    position: "LW",
    overall: 86,
    country: "Colombia"
  },

  {
    id: "liv-salah",
    name: "Mohamed Salah",
    nameFa: "محمد صلاح",
    team: "Liverpool",
    position: "RW",
    overall: 89,
    country: "Egypt"
  },

  {
    id: "liv-isak",
    name: "Alexander Isak",
    nameFa: "الکساندر ایساک",
    team: "Liverpool",
    position: "ST",
    overall: 88,
    country: "Sweden"
  },

  {
    id: "liv-ekitike",
    name: "Hugo Ekitiké",
    nameFa: "هوگو اکیتیکه",
    team: "Liverpool",
    position: "ST",
    overall: 82,
    country: "France"
  }

];// ==========================================
// players.js — بخش ۲ از ۴
// ادامه دیتابیس بازیکنان لیگ مجازی مربیان
// ==========================================

// ==========================
// 🇮🇹 Juventus
// ==========================
PLAYERS.push(
  P("juv_vlahovic","Dusan Vlahovic","🇷🇸","Juventus","ST",84),
  P("juv_yildiz","Kenan Yildiz","🇹🇷","Juventus","LW",81),
  P("juv_openda","Lois Openda","🇧🇪","Juventus","ST",82),
  P("juv_david","Jonathan David","🇨🇦","Juventus","ST",83),
  P("juv_conceicao","Francisco Conceicao","🇵🇹","Juventus","RW",80),
  P("juv_koopmeiners","Teun Koopmeiners","🇳🇱","Juventus","CM",81),
  P("juv_locatelli","Manuel Locatelli","🇮🇹","Juventus","CDM",81),
  P("juv_thuram","Khephren Thuram","🇫🇷","Juventus","CM",82),
  P("juv_mckennie","Weston McKennie","🇺🇸","Juventus","CM",79),
  P("juv_miretti","Fabio Miretti","🇮🇹","Juventus","CM",77),
  P("juv_cambiaso","Andrea Cambiaso","🇮🇹","Juventus","LB",80),
  P("juv_kalulu","Pierre Kalulu","🇫🇷","Juventus","CB",79),
  P("juv_gatti","Federico Gatti","🇮🇹","Juventus","CB",79),
  P("juv_bremer","Bremer","🇧🇷","Juventus","CB",85),
  P("juv_kelly","Lloyd Kelly","🏴","Juventus","CB",78),
  P("juv_cabal","Juan Cabal","🇨🇴","Juventus","LB",76),
  P("juv_perin","Mattia Perin","🇮🇹","Juventus","GK",80),
  P("juv_digregorio","Michele Di Gregorio","🇮🇹","Juventus","GK",82)
);

// ==========================
// 🇮🇹 Inter Milan
// ==========================
PLAYERS.push(
  P("int_lautaro","Lautaro Martinez","🇦🇷","Inter Milan","ST",89),
  P("int_thuram","Marcus Thuram","🇫🇷","Inter Milan","ST",84),
  P("int_taremi","Mehdi Taremi","🇮🇷","Inter Milan","ST",79),
  P("int_barella","Nicolo Barella","🇮🇹","Inter Milan","CM",86),
  P("int_calhanoglu","Hakan Calhanoglu","🇹🇷","Inter Milan","CM",87),
  P("int_mkhitaryan","Henrikh Mkhitaryan","🇦🇲","Inter Milan","CM",81),
  P("int_frattesi","Davide Frattesi","🇮🇹","Inter Milan","CM",82),
  P("int_dimarco","Federico Dimarco","🇮🇹","Inter Milan","LWB",86),
  P("int_dumfries","Denzel Dumfries","🇳🇱","Inter Milan","RWB",84),
  P("int_bastoni","Alessandro Bastoni","🇮🇹","Inter Milan","CB",87),
  P("int_acerbi","Francesco Acerbi","🇮🇹","Inter Milan","CB",80),
  P("int_pavard","Benjamin Pavard","🇫🇷","Inter Milan","CB",83),
  P("int_devrij","Stefan de Vrij","🇳🇱","Inter Milan","CB",82),
  P("int_bisseck","Yann Bisseck","🇩🇪","Inter Milan","CB",78),
  P("int_zielinski","Piotr Zielinski","🇵🇱","Inter Milan","CM",81),
  P("int_sommer","Yann Sommer","🇨🇭","Inter Milan","GK",83),
  P("int_martinez","Josep Martinez","🇪🇸","Inter Milan","GK",78)
);

// ==========================
// 🇫🇷 PSG
// ==========================
PLAYERS.push(
  P("psg_demb","Ousmane Dembele","🇫🇷","Paris Saint-Germain","RW",91),
  P("psg_kvara","Khvicha Kvaratskhelia","🇬🇪","Paris Saint-Germain","LW",87),
  P("psg_barcola","Bradley Barcola","🇫🇷","Paris Saint-Germain","LW",86),
  P("psg_lee","Lee Kang-in","🇰🇷","Paris Saint-Germain","CAM",82),
  P("psg_ramos","Goncalo Ramos","🇵🇹","Paris Saint-Germain","ST",80),
  P("psg_ko","Kang-in Lee","🇰🇷","Paris Saint-Germain","CAM",82),
  P("psg_vitinha","Vitinha","🇵🇹","Paris Saint-Germain","CM",87),
  P("psg_neves","Joao Neves","🇵🇹","Paris Saint-Germain","CM",86),
  P("psg_fabian","Fabian Ruiz","🇪🇸","Paris Saint-Germain","CM",85),
  P("psg_zaire","Warren Zaire-Emery","🇫🇷","Paris Saint-Germain","CM",83),
  P("psg_mayulu","Senny Mayulu","🇫🇷","Paris Saint-Germain","CAM",77),
  P("psg_hakimi","Achraf Hakimi","🇲🇦","Paris Saint-Germain","RB",88),
  P("psg_pacho","Willian Pacho","🇪🇨","Paris Saint-Germain","CB",82),
  P("psg_beraldo","Lucas Beraldo","🇧🇷","Paris Saint-Germain","CB",78),
  P("psg_hakimi2","Nuno Mendes","🇵🇹","Paris Saint-Germain","LB",86),
  P("psg_marquinhos","Marquinhos","🇧🇷","Paris Saint-Germain","CB",87),
  P("psg_donnarumma","Gianluigi Donnarumma","🇮🇹","Paris Saint-Germain","GK",89)
);

// ==========================
// 🇩🇪 Bayern Munich
// ==========================
PLAYERS.push(
  P("bay_kane","Harry Kane","🏴","Bayern Munich","ST",90),
  P("bay_musiala","Jamal Musiala","🇩🇪","Bayern Munich","CAM",90),
  P("bay_olise","Michael Olise","🇫🇷","Bayern Munich","RW",86),
  P("bay_gnabry","Serge Gnabry","🇩🇪","Bayern Munich","LW",82),
  P("bay_coman","Kingsley Coman","🇫🇷","Bayern Munich","LW",84),
  P("bay_diaz","Luis Diaz","🇨🇴","Bayern Munich","LW",86),
  P("bay_jackson","Nicolas Jackson","🇸🇳","Bayern Munich","ST",82),
  P("bay_kimmich","Joshua Kimmich","🇩🇪","Bayern Munich","CDM",88),
  P("bay_goretzka","Leon Goretzka","🇩🇪","Bayern Munich","CM",82),
  P("bay_pavlovic","Aleksandar Pavlovic","🇩🇪","Bayern Munich","CDM",80),
  P("bay_laimer","Konrad Laimer","🇦🇹","Bayern Munich","CM",81),
  P("bay_guerreiro","Raphael Guerreiro","🇵🇹","Bayern Munich","LB",82),
  P("bay_davies","Alphonso Davies","🇨🇦","Bayern Munich","LB",84),
  P("bay_ito","Hiroki Ito","🇯🇵","Bayern Munich","CB",79),
  P("bay_upamecano","Dayot Upamecano","🇫🇷","Bayern Munich","CB",84),
  P("bay_tah","Jonathan Tah","🇩🇪","Bayern Munich","CB",84),
  P("bay_stanisic","Josip Stanisic","🇭🇷","Bayern Munich","CB",80),
  P("bay_neuer","Manuel Neuer","🇩🇪","Bayern Munich","GK",86),
  P("bay_urbig","Jonas Urbig","🇩🇪","Bayern Munich","GK",76)
);

// ==========================
// 🇵🇹 Benfica
// ==========================
PLAYERS.push(
  P("ben_di_maria","Angel Di Maria","🇦🇷","Benfica","RW",84),
  P("ben_pavlidis","Vangelis Pavlidis","🇬🇷","Benfica","ST",83),
  P("ben_aursnes","Fredrik Aursnes","🇳🇴","Benfica","CM",82),
  P("ben_kokcu","Orkun Kokcu","🇹🇷","Benfica","CM",82),
  P("ben_schjelderup","Andreas Schjelderup","🇳🇴","Benfica","LW",76),
  P("ben_akturkoglu","Kerem Akturkoglu","🇹🇷","Benfica","LW",79),
  P("ben_barreiro","Leandro Barreiro","🇱🇺","Benfica","CM",76),
  P("ben_bah","Alexander Bah","🇩🇰","Benfica","RB",78),
  P("ben_otamendi","Nicolas Otamendi","🇦🇷","Benfica","CB",81),
  P("ben_silva","Antonio Silva","🇵🇹","Benfica","CB",81),
  P("ben_araujo","Tomas Araujo","🇵🇹","Benfica","CB",77),
  P("ben_carreras","Alvaro Carreras","🇪🇸","Benfica","LB",81),
  P("ben_trubin","Anatoliy Trubin","🇺🇦","Benfica","GK",81)
);

// ==========================
// 🇵🇹 Porto
// ==========================
PLAYERS.push(
  P("por_pepe","Pepe","🇧🇷","Porto","RW",79),
  P("por_samu","Samu Aghehowa","🇪🇸","Porto","ST",82),
  P("por_omorodion","Samu Omorodion","🇪🇸","Porto","ST",82),
  P("por_galeno","Galeno","🇧🇷","Porto","LW",81),
  P("por_varela","Alan Varela","🇦🇷","Porto","CDM",81),
  P("por_nico","Nico Gonzalez","🇪🇸","Porto","CM",80),
  P("por_mora","Rodrigo Mora","🇵🇹","Porto","CAM",78),
  P("por_eustaquio","Stephen Eustaquio","🇨🇦","Porto","CM",78),
  P("por_joao_mario","Joao Mario","🇵🇹","Porto","RB",78),
  P("por_wendell","Wendell","🇧🇷","Porto","LB",77),
  P("por_cardoso","David Carmo","🇵🇹","Porto","CB",76),
  P("por_pedro","Pepe","🇵🇹","Porto","CB",81),
  P("por_diogo","Diogo Costa","🇵🇹","Porto","GK",84)
);

// ==========================
// 🇸🇦 Al Nassr
// ==========================
PLAYERS.push(
  P("nas_cr7","Cristiano Ronaldo","🇵🇹","Al Nassr","ST",89),
  P("nas_mane","Sadio Mane","🇸🇳","Al Nassr","LW",83),
  P("nas_talisca","Anderson Talisca","🇧🇷","Al Nassr","CAM",80),
  P("nas_brozovic","Marcelo Brozovic","🇭🇷","Al Nassr","CDM",82),
  P("nas_ali","Sadio Mane","🇸🇳","Al Nassr","LW",83),
  P("nas_fofana","Seko Fofana","🇨🇮","Al Nassr","CM",80),
  P("nas_otavio","Otavio","🇵🇹","Al Nassr","CAM",81),
  P("nas_boushal","Nawaf Boushal","🇸🇦","Al Nassr","RB",72),
  P("nas_laporte","Aymeric Laporte","🇪🇸","Al Nassr","CB",83),
  P("nas_alawjami","Ali Lajami","🇸🇦","Al Nassr","CB",73),
  P("nas_almowallad","Waleed Abdullah","🇸🇦","Al Nassr","GK",70)
);

// ==========================
// 🇺🇸 Inter Miami
// ==========================
PLAYERS.push(
  P("mia_messi","Lionel Messi","🇦🇷","Inter Miami","RW",89),
  P("mia_suarez","Luis Suarez","🇺🇾","Inter Miami","ST",82),
  P("mia_busc","Sergio Busquets","🇪🇸","Inter Miami","CDM",82),
  P("mia_alba","Jordi Alba","🇪🇸","Inter Miami","LB",80),
  P("mia_rojas","Matias Rojas","🇵🇾","Inter Miami","CAM",78),
  P("mia_redondo","Federico Redondo","🇦🇷","Inter Miami","CM",77),
  P("mia_gressel","Julian Gressel","🇩🇪","Inter Miami","RM",76),
  P("mia_aviles","Tomas Aviles","🇦🇷","Inter Miami","CB",75),
  P("mia_frey","David Martinez","🇻🇪","Inter Miami","CB",74),
  P("mia_weigandt","Marcelo Weigandt","🇦🇷","Inter Miami","RB",74),
  P("mia_callender","Drake Callender","🇺🇸","Inter Miami","GK",76)
);// ==========================================
// 🇪🇸 Real Madrid
// ==========================================
PLAYERS.push(
  P("rm_courtois","Thibaut Courtois","🇧🇪","Real Madrid","GK",89),
  P("rm_lunin","Andriy Lunin","🇺🇦","Real Madrid","GK",81),
  P("rm_militao","Eder Militao","🇧🇷","Real Madrid","CB",85),
  P("rm_rudiger","Antonio Rudiger","🇩🇪","Real Madrid","CB",85),
  P("rm_huijsen","Dean Huijsen","🇪🇸","Real Madrid","CB",82),
  P("rm_asencio","Raul Asencio","🇪🇸","Real Madrid","CB",78),
  P("rm_trent","Trent Alexander-Arnold","🏴","Real Madrid","RB",85),
  P("rm_cucurella","Marc Cucurella","🇪🇸","Real Madrid","LB",83),
  P("rm_carreras","Alvaro Carreras","🇪🇸","Real Madrid","LB",81),
  P("rm_dumfries","Denzel Dumfries","🇳🇱","Real Madrid","RB",84),
  P("rm_bellingham","Jude Bellingham","🏴","Real Madrid","CAM",90),
  P("rm_valverde","Federico Valverde","🇺🇾","Real Madrid","CM",89),
  P("rm_tchouameni","Aurelien Tchouameni","🇫🇷","Real Madrid","CDM",84),
  P("rm_camavinga","Eduardo Camavinga","🇫🇷","Real Madrid","CM",84),
  P("rm_arda","Arda Guler","🇹🇷","Real Madrid","CAM",81),
  P("rm_bsilva","Bernardo Silva","🇵🇹","Real Madrid","CAM",88),
  P("rm_thiago","Thiago Pitarch","🇪🇸","Real Madrid","CM",72),
  P("rm_vini","Vinicius Junior","🇧🇷","Real Madrid","LW",90),
  P("rm_mbappe","Kylian Mbappe","🇫🇷","Real Madrid","ST",91),
  P("rm_brahim","Brahim Diaz","🇪🇸","Real Madrid","RW",82),
  P("rm_endrick","Endrick","🇧🇷","Real Madrid","ST",78),
  P("rm_rodrygo","Rodrygo","🇧🇷","Real Madrid","RW",85),
  P("rm_gonzalo","Gonzalo Garcia","🇪🇸","Real Madrid","ST",76)
);

// ==========================================
// 🇪🇸 Barcelona
// ==========================================
PLAYERS.push(
  P("bar_szczesny","Wojciech Szczesny","🇵🇱","Barcelona","GK",82),
  P("bar_penya","Inaki Pena","🇪🇸","Barcelona","GK",75),
  P("bar_terstegen","Marc-Andre ter Stegen","🇩🇪","Barcelona","GK",86),
  P("bar_cubarsi","Pau Cubarsi","🇪🇸","Barcelona","CB",82),
  P("bar_araujo","Ronald Araujo","🇺🇾","Barcelona","CB",86),
  P("bar_inigo","Inigo Martinez","🇪🇸","Barcelona","CB",82),
  P("bar_christensen","Andreas Christensen","🇩🇰","Barcelona","CB",82),
  P("bar_kounde","Jules Kounde","🇫🇷","Barcelona","CB",86),
  P("bar_balde","Alejandro Balde","🇪🇸","Barcelona","LB",81),
  P("bar_cancelo","Joao Cancelo","🇵🇹","Barcelona","RB",84),
  P("bar_pedri","Pedri","🇪🇸","Barcelona","CM",89),
  P("bar_gavi","Gavi","🇪🇸","Barcelona","CM",84),
  P("bar_dejong","Frenkie de Jong","🇳🇱","Barcelona","CM",87),
  P("bar_casado","Marc Casado","🇪🇸","Barcelona","CDM",78// ==========================================
// 🏴 Chelsea
// ==========================================
PLAYERS.push(
  P("che_sanchez","Robert Sanchez","🇪🇸","Chelsea","GK",80),
  P("che_penders","Mike Penders","🇧🇪","Chelsea","GK",75),
  P("che_sharman","Teddy Sharman-Lowe","🏴","Chelsea","GK",72),
  P("che_colwill","Levi Colwill","🏴","Chelsea","CB",82),
  P("che_tosin","Tosin Adarabioyo","🏴","Chelsea","CB",80),
  P("che_fofana","Wesley Fofana","🇫🇷","Chelsea","CB",80),
  P("che_sarr","Mamadou Sarr","🇫🇷","Chelsea","CB",76),
  P("che_hato","Jorrel Hato","🇳🇱","Chelsea","LB",80),
  P("che_cucurella","Marc Cucurella","🇪🇸","Chelsea","LB",83),
  P("che_gusto","Malo Gusto","🇫🇷","Chelsea","RB",80),
  P("che_palestra","Marco Palestra","🇮🇹","Chelsea","RB",74),
  P("che_caicedo","Moises Caicedo","🇪🇨","Chelsea","CDM",85),
  P("che_essugo","Dario Essugo","🇵🇹","Chelsea","CDM",76),
  P("che_enzo","Enzo Fernandez","🇦🇷","Chelsea","CM",84),
  P("che_palmer","Cole Palmer","🏴","Chelsea","CAM",88),
  P("che_neto","Pedro Neto","🇵🇹","Chelsea","RW",82),
  P("che_gittens","Jamie Gittens","🏴","Chelsea","LW",78),
  P("che_delap","Liam Delap","🏴","Chelsea","ST",79),
  P("che_jackson","Nicolas Jackson","🇸🇳","Chelsea","ST",82),
  P("che_joao","Joao Pedro","🇧🇷","Chelsea","ST",81),
  P("che_ansenlmino","Aaron Anselmino","🇦🇷","Chelsea","CB",75)
);// ==========================================
// 🏴 Chelsea
// ==========================================
PLAYERS.push(
  P("che_sanchez","Robert Sanchez","🇪🇸","Chelsea","GK",80),
  P("che_penders","Mike Penders","🇧🇪","Chelsea","GK",75),
  P("che_sharman","Teddy Sharman-Lowe","🏴","Chelsea","GK",72),
  P("che_colwill","Levi Colwill","🏴","Chelsea","CB",82),
  P("che_tosin","Tosin Adarabioyo","🏴","Chelsea","CB",80),
  P("che_fofana","Wesley Fofana","🇫🇷","Chelsea","CB",80),
  P("che_sarr","Mamadou Sarr","🇫🇷","Chelsea","CB",76),
  P("che_hato","Jorrel Hato","🇳🇱","Chelsea","LB",80),
  P("che_cucurella","Marc Cucurella","🇪🇸","Chelsea","LB",83),
  P("che_gusto","Malo Gusto","🇫🇷","Chelsea","RB",80),
  P("che_palestra","Marco Palestra","🇮🇹","Chelsea","RB",74),
  P("che_caicedo","Moises Caicedo","🇪🇨","Chelsea","CDM",85),
  P("che_essugo","Dario Essugo","🇵🇹","Chelsea","CDM",76),
  P("che_enzo","Enzo Fernandez","🇦🇷","Chelsea","CM",84),
  P("che_palmer","Cole Palmer","🏴","Chelsea","CAM",88),
  P("che_neto","Pedro Neto","🇵🇹","Chelsea","RW",82),
  P("che_gittens","Jamie Gittens","🏴","Chelsea","LW",78),
  P("che_delap","Liam Delap","🏴","Chelsea","ST",79),
  P("che_jackson","Nicolas Jackson","🇸🇳","Chelsea","ST",82),
  P("che_joao","Joao Pedro","🇧🇷","Chelsea","ST",81),
  P("che_ansenlmino","Aaron Anselmino","🇦🇷","Chelsea","CB",75)
);

// ==========================================
// 🇮🇷 Persepolis
// ==========================================
PLAYERS.push(
  P("per_alipour","Ali Alipour","🇮🇷","Persepolis","ST",75),
  P("per_amiri","Vahid Amiri","🇮🇷","Persepolis","LW",73),
  P("per_alishah","Omid Alishah","🇮🇷","Persepolis","CM",72),
  P("per_sarlak","Milad Sarlak","🇮🇷","Persepolis","CDM",71),
  P("per_ahmadzadeh","Farshad Ahmadzadeh","🇮🇷","Persepolis","RW",72),
  P("per_terry","Serdar Dursun","🇹🇷","Persepolis","ST",74),
  P("per_gholizadeh","Ali Gholizadeh","🇮🇷","Persepolis","RW",76),
  P("per_kanaanizadegan","Mohammad Hossein Kanaanizadegan","🇮🇷","Persepolis","CB",75),
  P("per_pouraliganji","Morteza Pouraliganji","🇮🇷","Persepolis","CB",72),
  P("per_ostad","Hossein Kanaanizadegan","🇮🇷","Persepolis","CB",73),
  P("per_faraji","Farshad Faraji","🇮🇷","Persepolis","RB",71),
  P("per_golsi","Alexis Guendouz","🇩🇿","Persepolis","GK",75)
);

// ==========================================
// 🇮🇷 Esteghlal
// ==========================================
PLAYERS.push(
  P("est_rezaeian","Ramin Rezaeian","🇮🇷","Esteghlal","RB",75),
  P("est_hashemnejad","Mehdi Hashemnejad","🇮🇷","Esteghlal","RW",73),
  P("est_jalali","Abbas Jalali","🇮🇷","Esteghlal","LW",72),
  P("est_niknafs","Zobair Niknafs","🇮🇷","Esteghlal","CM",70),
  P("est_cheshmi","Roozbeh Cheshmi","🇮🇷","Esteghlal","CB",73),
  P("est_moradmand","Mohammad Hossein Moradmand","🇮🇷","Esteghlal","CB",72),
  P("est_silva","Rafael Silva","🇧🇷","Esteghlal","CB",73),
  P("est_ghoddousi","Armin Sohrabian","🇮🇷","Esteghlal","CB",72),
  P("est_ahmadi","Hosseini Ahmadi","🇮🇷","Esteghlal","CM",69),
  P("est_blanco","Gustavo Blanco","🇦🇷","Esteghlal","ST",72),
  P("est_koushik","Koushik","🇮🇷","Esteghlal","ST",68),
  P("est_guerron","Joffre Guerron","🇪🇨","Esteghlal","ST",70)
);

// ==========================================
// 🇮🇷 Sepahan
// ==========================================
PLAYERS.push(
  P("sep_daneshgar","Mohammad Daneshgar","🇮🇷","Sepahan","CB",74),
  P("sep_ahmadzadeh","Farshad Ahmadzadeh","🇮🇷","Sepahan","LW",72),
  P("sep_moradmand","Mohammad Hossein Moradmand","🇮🇷","Sepahan","CB",72),
  P("sep_khalilzadeh","Shahriar Moghanlou","🇮🇷","Sepahan","ST",76),
  P("sep_ghoddousi","Roozbeh Cheshmi","🇮🇷","Sepahan","CDM",71),
  P("sep_yazdani","Khaled Ebrahimi","🇮🇷","Sepahan","CB",70),
  P("sep_rezaei","Kaveh Rezaei","🇮🇷","Sepahan","ST",73),
  P("sep_hosseini","Hossein Hosseini","🇮🇷","Sepahan","GK",76),
  P("sep_ahmadi","Mohammad Karimi","🇮🇷","Sepahan","CM",73),
  P("sep_shekar","Reza Shekari","🇮🇷","Sepahan","CAM",72),
  P("sep_asadi","Ali Asadi","🇮🇷","Sepahan","RW",71)
);

// ==========================================
// 🇮🇷 Tractor
// ==========================================
PLAYERS.push(
  P("tra_ricardo","Ricardo Alves","🇵🇹","Tractor","CM",76),
  P("tra_daneshi","Mehdi Hashemnejad","🇮🇷","Tractor","RW",73),
  P("tra_trazie","Dragan Ceran","🇷🇸","Tractor","ST",74),
  P("tra_shahriar","Shahriar Moghanlou","🇮🇷","Tractor","ST",76),
  P("tra_bozorg","Amirhossein Hosseinzadeh","🇮🇷","Tractor","CAM",73),
  P("tra_rahmani","Sajjad Ashouri","🇮🇷","Tractor","CM",70),
  P("tra_moharrami","Mohammad Naderi","🇮🇷","Tractor","LB",71),
  P("tra_beyranvand","Alireza Beiranvand","🇮🇷","Tractor","GK",78),
  P("tra_karimi","Shahin Tavakoli","🇮🇷","Tractor","CB",72),
  P("tra_bozan","Irfan Buzan","🇮🇷","Tractor","CM",69),
  P("tra_abdian","Mehdi Abdian","🇮🇷","Tractor","RW",68)
);

// ==========================================
// 💰 بازیکنان بازار نقل‌وانتقالات
// ==========================================
const MARKET_PLAYERS = [
  MP("market_salah","Mohamed Salah","🇪🇬","RW",89,45,"Trabzonspor",true),
  MP("market_osimhen","Victor Osimhen","🇳🇬","ST",87,45,"Galatasaray",false),
  MP("market_kdb","Kevin De Bruyne","🇧🇪","CAM",88,35,"Napoli",true),
  MP("market_hojlund","Rasmus Højlund","🇩🇰","ST",81,35,"Napoli",false),
  MP("market_chiesa","Federico Chiesa","🇮🇹","LW",82,20,"market",false),
  MP("market_dybala","Paulo Dybala","🇦🇷","SS",85,20,"Roma",false),
  MP("market_pulisic","Christian Pulisic","🇺🇸","RW",85,25,"Milan",false),
  MP("market_modric","Luka Modrić","🇭🇷","CM",84,15,"Milan",true),
  MP("market_rabiot","Adrien Rabiot","🇫🇷","CM",82,20,"Milan",false),
  MP("market_theo","Theo Hernández","🇫🇷","LB",86,30,"Al Hilal",true),
  MP("market_neymar","Neymar","🇧🇷","LW",86,12,"Santos",true),
  MP("market_antony","Antony","🇧🇷","RW",78,22,"Real Betis",true),
  MP("market_xavi_simons","Xavi Simons","🇳🇱","CAM",84,30,"Tottenham",false),
  MP("market_tonali","Sandro Tonali","🇮🇹","CM",84,30,"Tottenham",false),
  MP("market_kudus","Mohammed Kudus","🇬🇭","RW",82,28,"Tottenham",false),
  MP("market_marmoush","Omar Marmoush","🇪🇬","ST",83,32,"Tottenham",true),
  MP("market_vandven","Micky van de Ven","🇳🇱","CB",83,25,"Tottenham",false),
  MP("market_robertson","Andy Robertson","🏴","LB",82,18,"Tottenham",false),
  MP("market_richarlison","Richarlison","🇧🇷","ST",81,22,"Tottenham",false),
  MP("market_mudryk","Mykhailo Mudryk","🇺🇦","LW",78,20,"Tottenham",false),
  MP("market_savinho","Savinho","🇧🇷","RW",82,25,"Tottenham",false),
  MP("market_goretzka","Leon Goretzka","🇩🇪","CM",82,20,"Aston Villa",false),
  MP("market_tielemans","Youri Tielemans","🇧🇪","CM",82,20,"Aston Villa",false),
  MP("market_watkins","Ollie Watkins","🏴","ST",84,30,"Aston Villa",true),
  MP("market_pau","Pau Torres","🇪🇸","CB",82,20,"Aston Villa",false),
  MP("market_martinez","Emiliano Martínez","🇦🇷","GK",86,28,"Aston Villa",true),
  MP("market_brandt","Julian Brandt","🇩🇪","CAM",82,18,"Dortmund",false),
  MP("market_schlotterbeck","Nico Schlotterbeck","🇩🇪","CB",84,25,"Dortmund",true),
  MP("market_guirassy","Serhou Guirassy","🇬🇳","ST",84,28,"Dortmund",false),
  MP("market_cambiaso","Andrea Cambiaso","🇮🇹","LB",80,25,"Juventus",true),
  MP("market_douglas","Douglas Luiz","🇧🇷","CM",81,20,"Juventus",false),
  MP("market_lukaku","Romelu Lukaku","🇧🇪","ST",84,25,"Napoli",false),
  MP("market_greenwood","Mason Greenwood","🏴","ST",82,28,"Fenerbahçe",false),
  MP("market_son","Son Heung-min","🇰🇷","LW",85,25,"LAFC",false),
  MP("market_ramos","Sergio Ramos","🇪🇸","CB",80,10,"Monterrey",true),
  MP("market_marcos","Marcos Leonardo","🇧🇷","ST",79,25,"Al Hilal",false)
];

PLAYERS.push(...MARKET_PLAYERS);

// ==========================================
// 👑 اسطوره‌ها
// ==========================================
const LEGENDS = [
  L("legend_maldini","Paolo Maldini","🇮🇹","LB",92,800,false,"دیوار دفاعی"),
  L("legend_beckenbauer","Franz Beckenbauer","🇩🇪","CB",91,750,true,"بازی‌سازی از عقب"),
  L("legend_baresi","Franco Baresi","🇮🇹","CB",91,700,true,"رهبری خط دفاع"),
  L("legend_carlos","Roberto Carlos","🇧🇷","LB",91,700,false,"اورلپ سریع و شوت‌های سنگین"),
  L("legend_puyol","Carles Puyol","🇪🇸","CB",89,600,true,"جنگندگی و دوئل"),
  L("legend_cafu","Cafu","🇧🇷","RB",90,700,true,"اورلپ از جناح راست"),
  L("legend_r9","Ronaldo Nazário","🇧🇷","ST",91,900,true,"تمام‌کنندگی مرگبار"),
  L("legend_henry","Thierry Henry","🇫🇷","ST",91,800,true,"فرار پشت دفاع"),
  L("legend_etoo","Samuel Eto’o","🇨🇲","ST",89,700,true,"ضدحملات سریع"),
  L("legend_eusebio","Eusébio","🇵🇹","ST",92,800,true,"شوت‌های قدرتمند"),
  L("legend_dinho","Ronaldinho","🇧🇷","LW",92,900,false,"دریبل غیرقابل پیش‌بینی"),
  L("legend_robben","Arjen Robben","🇳🇱","RW",90,800,true,"کات‌این با پای چپ"),
  L("legend_figo","Luís Figo","🇵🇹","RW",90,700,true,"دریبل و ارسال"),
  L("legend_ribery","Franck Ribéry","🇫🇷","LW",89,700,true,"تغییر جهت ناگهانی"),
  L("legend_garrincha","Garrincha","🇧🇷","RW",91,800,true,"تهدید یک‌به‌یک"),
  L("legend_zidane","Zinedine Zidane","🇫🇷","CAM",92,900,false,"کنترل و پاس خلاقانه"),
  L("legend_xavi","Xavi","🇪🇸","CM",90,800,true,"کنترل ریتم بازی"),
  L("legend_iniesta","Andrés Iniesta","🇪🇸","CM",91,850,true,"کنترل در فضاهای تنگ"),
  L("legend_pirlo","Andrea Pirlo","🇮🇹","CM",90,750,true,"پاس‌های بلند دقیق"),
  L("legend_gerrard","Steven Gerrard","🏴","CM",90,800,true,"شوت از راه دور"),
  L("legend_gullit","Ruud Gullit","🇳🇱","CM",91,850,true,"قدرت و تکنیک"),
  L("legend_matthaus","Lothar Matthäus","🇩🇪","CM",91,800,true,"توپ‌گیری و انتقال"),
  L("legend_lampard","Frank Lampard","🏴","CM",89,700,true,"نفوذ از خط دوم")
];

PLAYERS.push(...LEGENDS);
