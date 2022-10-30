import {
  boynerShopColor,
  boynerOutletColor,
  boynerSportsColor,
  boynerDynamicColor,
  boynerActiveColor,
  boynerYkmColor,
} from "../theme";

export const shopsArray = [
  {
    id: 1,
    theme: boynerShopColor,
    name: "Boyner Mağazalar",
    data: [
      {
        name: "Boyner Adana 01 Burda",
        address:
          "Ahmet Remzi Yüreğir Mah. Cemal Beriker Bulvarı Boyner mağazası Seyhan Adana",
        phone: "Tel: 3229991443",
        city: 1,
      },
      {
        name: "Boyner Afyon",
        address: "Afyon Güvenevler Mah. Park Kapı no: Z-M39  Afyon",
        phone: "Tel: 0 272 222 09 11",
        city: 3,
      },
      {
        name: "Boyner Cepa",
        address:
          "17.Sokak, Cepa Avm Mustafa Kemal Mah. Eskişehir Yolu 7.Km Söğütözü  Ankara",
        phone: "Tel: +90 (312) 219-73-33",
        city: 6,
      },
      {
        name: "Boyner Panora",
        address:
          "14.Blok , Panora Avm, Oran Türkiye Ticaret Merkezi Çankaya  Ankara",
        phone: "Tel: +90 (312) 491-48-00",
        city: 6,
      },
      {
        name: "Boyner Ankamall",
        address:
          "Gazi, Gazi Konya Devlet Yolu, Mevlana Blv. No:2, 06560 Yenimahalle/Ankara  Ankara",
        phone: "Tel: 0312 541 10 49",
        city: 6,
      },
      {
        name: "Boyner Kentpark",
        address:
          "Eskişehir Yolu üzeri 7. Km. Mustafa Kemal Mah. No:164 Kat: 1- 82C Çankaya  Ankara",
        phone: "Tel: 0 312 219 90 61",
        city: 6,
      },
      {
        name: "Boyner Antalya",
        address: "Migros Avm Arapsuyu Mah. 100.Yıl Bulvarı Konyaaltı  Antalya",
        phone: "Tel: +90 (242) 230-14-70",
        city: 7,
      },
      {
        name: "Boyner Antalya Agora",
        address:
          "Altınova Sinan Mahallesi, Aksekili Sk., 07170 Kepez/Antalya  Antalya",
        phone: "Tel: 0242 999 32 70",
        city: 7,
      },
      {
        name: "Boyner Alanya",
        address:
          "Alanyum Alışveriş Merkezi Cumhuriyet Mah. Çevreyolu Üzeri No:201  Antalya",
        phone: "Tel: 0242 515 26 80",
        city: 7,
      },
      {
        name: "Boyner Aydın Forum",
        address: "Orta Mah. Müze Bulvarı No:1 Aydın Forum AVM  Aydın",
        phone: "Tel: 0 256 232 02 50",
        city: 9,
      },
      {
        name: "Boyner Ayvalık",
        address: "Atatürk Cad.No:101 Ayvalık  Balıkesir",
        phone: "Tel: 0 266 312 10 48",
        city: 10,
      },
      {
        name: "Boyner 10 Burda Balıkesir",
        address:
          "10 Burda AVM Plevne mahallesi Yeni İzmir yolu üzeri mahal alanı GF43 GF44 FF20 Altıeylül Balıkesir  Balıkesir",
        phone: "Tel: 0850 283 1252",
        city: 10,
      },
      {
        name: "Boyner Korupark",
        address: "Koru Park Avm Adnan Menderes Mah. Mudanya Cad. Emek  Bursa",
        phone: "Tel: +90 (224) 241-46-46",
        city: 16,
      },
      {
        name: "Boyner İnegöl",
        address: "Osmaniye Mah. Altay Cad. No:2 İnegöl AVM İnegöl  Bursa",
        phone: "Tel: 0 224 713 30 41",
        city: 16,
      },
      {
        name: "Boyner Suryapı",
        address:
          "Odunluk Mahallesi, Mihraplı Cd. 6/A, 16110 Nilüfer/Bursa  Bursa",
        phone: "Tel: 0224 999 67 10",
        city: 16,
      },
      {
        name: "Boyner Çanakkale 17 Burda",
        address:
          "Barbaros Mahallesi Atatürk Caddesi No: 207 Çanakkale - 17 Burda AVM  Çanakkale",
        phone: "Tel: 0286 220 04 21",
        city: 17,
      },
      {
        name: "Boyner Denizli Forum",
        address:
          "Çamlık Mah. Doğan Demircioğlu Cad. No 2 Kat 1-2 Demokrasi Meydanı/Denizli  Denizli",
        phone: "Tel: +90 (258) 215-10-10",
        city: 20,
      },
      {
        name: "Boyner Ceylan Diyarbakır",
        address:
          "Şanlıurfa Yolu 5. Km. Yeni Hal Kavşağı Ceylan Karavil Park Alışveriş Merkezi K:1 Yenişehir, Diyarbakır  Diyarbakır",
        phone: "Tel: 0412 502 04 28",
        city: 21,
      },
      {
        name: "Boyner Diyarbakır Forum",
        address:
          "Forum Diyarbakır Alışveriş Merkezi Mağaza No: FF70-GF62 Yenişehir İlçesi, Şilbe Mahallesi, Ada No: 363 Parsel No: 2 Diyarbakır  Diyarbakır",
        phone: "Tel: 0.412. 502 29 90",
        city: 21,
      },
      {
        name: "Boyner Edirne Erasta",
        address:
          "Edirne Erasta Avm İç kapı no: F01-128/129 Kirişhane Mah. Merkez  Edirne",
        phone: "phone:",
        city: 22,
      },
      {
        name: "Boyner Elazığ Park",
        address: "Malatya Cad. Park 23 AVM no:70  Elazığ",
        phone: "Tel: 0 424 502 03 23",
        city: 23,
      },
      {
        name: "Boyner Elazığ",
        address: "Cumhuriyet mahallesi, Malatya Cd. No:10/2, 23040  Elazığ",
        phone: "Tel: 0424 502 03 23",
        city: 23,
      },
      {
        name: "Boyner Eskişehir",
        address:
          "Kanatlı Avm Hoşnudiye Mah. İsmet İnönü Cad. Tepebaşı  Eskişehir",
        phone: "Tel: +90 (222) 231-46-00",
        city: 26,
      },
      {
        name: "Boyner Antakya PrimeMall",
        address:
          "33.Sok. Gaziantep Prime Mall Osman Gazi Mah. Prof. Dr. Necmettin Erbekan Cad. Şehitkamil  Gaziantep",
        phone: "Tel: +90 (342) 290-33-05",
        city: 27,
      },
      {
        name: "Boyner Sankopark",
        address:
          "Sarıgüllük Mahallesi, Mareşal Fevzi Çakmak Bulvarı Sankopark AVM Kat:1 / R145 Şehitkamil  Gaziantep",
        phone: "Tel: 0 342 339 06 01",
        city: 27,
      },
      {
        name: "Boyner Antakya Primall",
        address:
          "PrimeMall AVM Akasya Mah. Şükrü Balcı Cad. no:203 no:18  Hatay",
        phone: "Tel: +90 (326) 290-10-40",
        city: 31,
      },
      {
        name: "Boyner İskenderun",
        address:
          "Prime Mall Avm Numune Mah. Eyüp Sultan Cad. İskenderun  Hatay",
        phone: "Tel: +90 (326) 619-20-80",
        city: 31,
      },
      {
        name: "Boyner Antakya Palladium",
        address:
          "Haraparası Mah. İzzet Güçlü Sokak Palladium AVM No: 26/B-1 73/A -B  Hatay",
        phone: "Tel: 0 326 214 34 24",
        city: 31,
      },
      {
        name: "Boyner Isparta",
        address:
          "Süleyman Demirel Bulvarı Bahçelievler Mah.156 Cd.No.33 Kat: 1 Boyner Mgz no: 125/C 32100 Isparta  Isparta",
        phone: "Tel: +90 (246) 227-28-28",
        city: 32,
      },
      {
        name: "Boyner Isparta Meydan",
        address:
          "Yayla Mah. 118 Cad. C Blok Dıs Kapı No: 27/R İc Kapı No: 3 Merkez Isparta Meydan Avm  Isparta",
        phone: "Tel: 246 227 28 28",
        city: 32,
      },
      {
        name: "Boyner Mersin",
        address:
          "Forum Alışveriş Merkezi Güvenevler Mah. 20. Cadde No:1 Yenişehir/Mersin  Mersin",
        phone: "Tel: +90 (324) 331-55-35",
        city: 33,
      },
      {
        name: "Boyner Akasya",
        address:
          "Ankara Devlet Yolu Haydarpaşa Yönü 4. KM Çeçen Sokak Acıbadem  İstanbul",
        phone: "Tel: 0 216 510 68 30",
        city: 34,
      },
      {
        name: "Boyner Akbatı",
        address: "Sanayi Mah. Esenkent Mevki 1655 Sokak No:6  İstanbul",
        phone: "Tel: 0 212 397 72 10",
        city: 34,
      },
      {
        name: "Boyner Capitol",
        address:
          "Capitol Avm Küçük bakkalköy Mah. Tophanelioğlu Cad. Altunizade  İstanbul",
        phone: "Tel: +90 (216) 651-20-54",
        city: 34,
      },
      {
        name: "Boyner İstanbul Forum",
        address:
          "Forum İstanbul Alışveriş Merkezi Kocatepe Mahallesi,Paşa Caddesi 34045 Bayrampaşa  İstanbul",
        phone: "Tel: 0 212 640 35 75",
        city: 34,
      },
      {
        name: "Boyner İstinye Park",
        address:
          "İstinye Park avm Pınar Mah. İstinye Bayırı Cad. Sarıyer  İstanbul",
        phone: "Tel: +90 (212) 345-50-71",
        city: 34,
      },
      {
        name: "Boyner Marmara Forum",
        address:
          "Marmara Forum AVM Osmaniye Mah. Ekrem Kurt Bulvarı E-5 yolu üzeri MS 005B, MS 011, S190 Bakırköy/İstanbul  İstanbul",
        phone: "Tel: 0 212 466 61 41",
        city: 34,
      },
      {
        name: "Boyner Marmara Park",
        address: "Marmara Park Avm Güzelyurt Mah. 1.Cad. Esenyurt  İstanbul",
        phone: "Tel: +90 (212) 854-31-04",
        city: 34,
      },
      {
        name: "Boyner Cevahir",
        address:
          "Meşrutiyet Mah., Büyükdere Cad 22/A, 34400 Şişli/İstanbul  İstanbul",
        phone: "Tel: 0 212 380 03 43",
        city: 34,
      },
      {
        name: "Boyner Emaar",
        address:
          "Ünalan Mahallesi, Libadiye Cd No:88, 34700 Üsküdar/İstanbul  İstanbul",
        phone: "Tel: 0216 510 30 01",
        city: 34,
      },
      {
        name: "Boyner Hilltown",
        address:
          "Aydınevler Mahallesi, Çamlıca Sitesi Yolu Sk., 34765 Maltepe/İstanbul  İstanbul",
        phone: "Tel: 0216 225 63 00",
        city: 34,
      },
      {
        name: "Boyner Maltepe Park",
        address:
          "Carrefoursa Maltepepark AVM Cevizli M. Tugay yolu C. No:67 Cevizli-Maltepe /  İstanbul",
        phone: "Tel: 0 216 515 11 35",
        city: 34,
      },
      {
        name: "Boyner Mall Of İstanbul",
        address:
          "ZİYA GÖKALP MAH.SÜLEYMAN DEMİREL CAD. NO:7 İKİTELLİ KAPI NO:221-418 BAŞAKŞEHİR  İstanbul",
        phone: "Tel: 0850 522 34 84",
        city: 34,
      },
      {
        name: "Boyner İstanbul Havalimanı",
        address:
          "Tayakadın Mahallesi Terminal Caddesi No:1 İç Kapı No: 740534 Arnavutköy İstanbul  İstanbul",
        phone: "Tel: 0212) 999 57 98",
        city: 34,
      },
      {
        name: "Boyner Metropol İstanbul",
        address:
          "Atatürk Mh., Ertuğrul Gazi Cd., No:2Z Metropol İstanbul Alışveriş Merkezi, D12 Blok B2 Katı No: B2-029 B1 Katı B1- 054 Ataşehir / İstanbul  İstanbul",
        phone: "Tel: 2169994419",
        city: 34,
      },
      {
        name: "Boyner Vadi",
        address: "Ayazağa Mah. Cendere Cad. No:109/C Sarıyer  İstanbul",
        phone: "Tel: 2129777402",
        city: 34,
      },
      {
        name: "Boyner Cadde",
        address: "Caddebostan Mah. Bağdat Cad. No:319-321 Kadıköy  İstanbul",
        phone: "Tel: 0216 385 14 09",
        city: 34,
      },
      {
        name: "Boyner Viaport",
        address:
          "Viaport Avm İç Kapı NO: 300 Yenişehir Mah. Pendik/İstanbul  İstanbul",
        phone: "Tel: 2169777401",
        city: 34,
      },
      {
        name: "Boyner Pangaltı",
        address:
          "Lotus Pangaltı Halaskargazi Cd No 38 34371 Sisli İstanbul  İstanbul",
        phone: "Tel: 2129777403",
        city: 34,
      },
      {
        name: "Boyner Balçova Kipa",
        address: "Balçova Kipa AVM Mithatpaşa Cad. No: 1462  İzmir",
        phone: "Tel: +90 (232) 259-18-00",
        city: 35,
      },
      {
        name: "Boyner Çiğli Kipa",
        address: "Yeni Havaalanı Cd. No:40 Kipa Alışveriş Merkezi İzmir  İzmir",
        phone: "Tel: +90 (232) 386-58-00",
        city: 35,
      },
      {
        name: "Boyner İzmir Hilltown",
        address:
          "Mavişehir Mahallesi 6522 Sokak No:1, Boyner mağazası 1.Kat GF.L13 ve 2. Kat FF.L19 Karşıyaka Hilltown AVM İzmir",
        phone: "Tel: 02329990826",
        city: 35,
      },
      {
        name: "İzmir Point Bornova",
        address:
          "Yeşilova Mah. 4174. Sok. B1-B2 Blok No:84 Point Bornova AVM Bornova/İzmir İç Kapı No: Zemin Kat Z02 No , 1.kat 101  İzmir",
        phone: "Tel: 0 232 203 11 85",
        city: 35,
      },
      {
        name: "Boyner İzmir İstinye Park",
        address:
          "Bahçelerarası Mah. Şehit Bnb. Ali Resmi Tufan Sok. No:3 “ İç Kapı No: 1B29, 1B30, 1B31, 2B03, 2B04, 2B05 Balçova  İzmir",
        phone: "Tel: 2329777400",
        city: 35,
      },
      {
        name: "Boyner Kars",
        address: "Orta Kapı Mah. Seyit Yusuf Bey Cad. No:75 Kars  Kars",
        phone: "Tel: 0 474 212 32 33",
        city: 36,
      },
      {
        name: "Boyner Kayseri Forum",
        address: "Kayseri Forum Avm Hunat Mah. Melikgazi  Kayseri",
        phone: "Tel: +90 (352) 231-06-09",
        city: 38,
      },
      {
        name: "Boyner 41 Burda",
        address:
          "Sanayi, Ömer Türkçakal Blv. No:7, 41040 İzmit/Kocaeli  Kocaeli",
        phone: "Tel: 0262 888 4270",
        city: 41,
      },
      {
        name: "Boyner Gebze Center",
        address:
          "Tatlıkuyu Mh. Gebze Center No:107/5 41400 Gebze / Kocaeli.  Kocaeli",
        phone: "Tel: 0 262 646 95 51",
        city: 41,
      },
      {
        name: "Boyner Konya",
        address:
          "Feritpaşa Mah. Kule Cad No:8 Kule Site Alışveriş Merkezi  Konya",
        phone: "Tel: +90 (332) 236-62-62",
        city: 42,
      },
      {
        name: "Boyner Kütahya",
        address: "Atatürk Bulvarı (Türk Petrol Yanı)  Kütahya",
        phone: "Tel: 0 274 225 15 75",
        city: 43,
      },
      {
        name: "Boyner Malatya",
        address: "Malatya Park Avm İnönü Mah. İnönü Cad. Merkez  Malatya",
        phone: "Tel: +90 (422) 212-74-04",
        city: 44,
      },
      {
        name: "Boyner Kahramanmaraş",
        address: "Trabzon Caddesi No:49 / Kahramanmaraş  K.Maraş",
        phone: "Tel: 0 344 231 49 42",
        city: 46,
      },
      {
        name: "Boyner Bodrum Midtown",
        address:
          "Kemer Mevkii, Ortakent, Midtown Avm Turgutreis Yolu Cumhuriyet Cad. Bodrum  Muğla",
        phone: "Tel: +90 (252) 358-76-10",
        city: 48,
      },
      {
        name: "Boyner Rize",
        address: "Kazım Karabekir Caddesi No:32 Merkez  Rize",
        phone: "Tel: 0464 217 1 217",
        city: 53,
      },
      {
        name: "Boyner Rize",
        address:
          "Rize Şimal Avm İç kapı no : Z-004 / 1-05 / 1-081 -- Müftü Mah. Atatürk Cad. No:548 Eski Stad yeri  Rize",
        phone: "Tel: 464 217 12 17",
        city: 53,
      },
      {
        name: "Boyner Adapazarı Agora",
        address:
          "Agora Adapazarı AVM Eski Kazım Paşa Cad. Arabacı Mah. No: 14  Sakarya",
        phone: "Tel: 0 264 502 00 92",
        city: 54,
      },
      {
        name: "Boyner Serdivan",
        address:
          "Arabacı Alanı Mah. Mehmet Akif Ersoy Cad. Serdivan AVM No:62  Sakarya",
        phone: "Tel: 0 264 777 17 60",
        city: 54,
      },
      {
        name: "Boyner Samsun",
        address:
          "Samsun Piazza Avm Eski Otogar Mevkii Çarşamba Cad. Merkez  Samsun",
        phone: "Tel: +90 (362) 290-27-27",
        city: 55,
      },
      {
        name: "Boyner Çorlu",
        address: "Orion Alışveriş Merkezi No: B 04  Tekirdağ",
        phone: "Tel: 0 282 673 46 12",
        city: 59,
      },
      {
        name: "Boyner Trabzon Forum",
        address:
          "Değirmendere, Forum Avm Kalkınma Mah. Devlet Sahil Yolu Cad. Merkez  Trabzon",
        phone: "Tel: 0 462 330 05 06",
        city: 61,
      },
      {
        name: "Boyner Urfa Piazza",
        address:
          "Bahçelievler, 11 Nisan Fuar Cad. No:42, Şanlıurfa Merkez/Şanlıurfa  Şanlıurfa",
        phone: "Tel: 0414 215 14 14",
        city: 63,
      },
      {
        name: "Boyner Van",
        address: "Mustafa Çohaz Bulvarı No: 115  Van",
        phone: "Tel: 0 432 212 43 13",
        city: 65,
      },
      {
        name: "Boyner Batman Petrol City",
        address:
          "Batman Petrol City AVM Gültepe Mah. Yeni Çağ Cad. Aydın Güney Site No:24/A Batman/Merkez  Batman",
        phone: "Tel: 0488 502 12 49",
        city: 72,
      },
    ],
  },
  {
    id: 2,
    theme: boynerOutletColor,
    name: "Boyner Outlet",
    data: [
      {
        name: "Boyner Outlet Starcity",
        address:
          "Starcity AVM 1. Kat Köyaltı Mevkii Merkez Mahallesi Değirmenbahçe Caddesi Kavak Sokak No:2 Yenibosna İstanbul",
        phone: "Tel: +90 (212) 603-40-84",
        city: 34,
      },
      {
        name: "Boyner Outlet İkitelli",
        address:
          "Deposite Outlet İş Mrk. 1.Bodrum İkitelli OSB. K.Çekmece İstanbul",
        phone: "Tel: 0 212 671 48 08",
        city: 34,
      },
      {
        name: "Boyner Outlet Optimum",
        address:
          "E-5 üzeri İstiklal Sok 10/4 - 1K97 Yenisahra, Kadıköy İstanbul",
        phone: "Tel: 0 216 664 18 90",
        city: 34,
      },
      {
        name: "Boyner Outlet 212",
        address:
          "212 Avm. Mahmutbey Merkez Mah. Taşocağı Cad. No: 5 34217 Bağcılar İstanbul",
        phone: "phone:",
        city: 34,
      },
      {
        name: "Boyner Outlet Eskişehir Neo",
        address:
          "Eskişehir Kütahya Yolu Üzeri Çamlıca Mah Gülperi Sokak NEO AVM Eskişehir",
        phone: "Tel: 0 222 310 42 22",
        city: 26,
      },
      {
        name: "Boyner Outlet Park Bornova",
        address:
          "Park Bornova Outlet Ankara Caddesi No:192 35040 Bornova İzmir",
        phone: "Tel: 0 232 373 96 00",
        city: 35,
      },
      {
        name: "Boyner Outlet Westpark",
        address: "R.Şevket İnce mah. 2148/9 Sokak No:1/28-29-30 İzmir",
        phone: "Tel: 0232 570 09 30",
        city: 35,
      },
      {
        name: "Boyner Outlet Selway",
        address:
          "Balçova Çeşme Karayolu Çetin Emeç mah. Selway Outlet AVM A Blok Kıvanç sok. No 10B İç kapı 1B04 İzmir",
        phone: "phone:",
        city: 35,
      },
      {
        name: "Boyner Ankara Optimum Outlet",
        address:
          "Etiler Mah. Ayaş Ankara Yolu Bulvarı No:93 Boyner Mağazası ZK-2-3-4 no Etimesgut Ankara",
        phone: "Tel: 0 312 281 41 30",
        city: 6,
      },
      {
        name: "Siirtpark Outlet",
        address:
          "Kooperatif Mah. Hükümet Bulvarı Cad. No:88/1 Magaza no: 6-7-8-9 Siirt",
        phone: "phone:",
        city: 56,
      },
      {
        name: "Boyner Outlet KUMSMALL",
        address:
          "KUMSMALL FACTORY ALIŞVERİŞ MERKEZİ Oymaağaç mah. 5062 cad. Zemin kat ZK-M NO:102-103 116-069 KOCASİNAN/KAYSERİ",
        phone: "phone:",
        city: 38,
      },
    ],
  },
  {
    id: 3,
    theme: boynerSportsColor,
    name: "Boyner Sports",
    data: [
      {
        name: "Boyner Sports Batman",
        address:
          "Batman Park Avm Kültür Mah. Turgut Özal Bulvarı Merkez  Batman",
        phone: "Tel: +90 (488) 290-11-57",
        city: 72,
      },
      {
        name: "Boyner Sports Cevahir",
        address: "Büyükdere Cad. No:22 Cevahir AVM İstanbul  İstanbul",
        phone: "Tel: +90 (212) 380-00-48",
        city: 34,
      },
      {
        name: "Boyner Sports Rize",
        address:
          "İsmail Kahraman Kültür Merkezi Altı Cumhuriyet Cad. Merkez Rize",
        phone: "Tel: +90 (464) 212-30-20",
        city: 53,
      },
      {
        name: "Boyner Sports Adana",
        address:
          "Adana Optimum Alışveriş ve Eğlence Merkezi | Hacı Sabancı Bulvarı No:28 Yüreğir, Adana",
        phone: "Tel: 0 322 333 33 31",
        city: 1,
      },
      {
        name: "Boyner Sports Terracity",
        address: "Fener Mah.Tekelioğlu Cad.No:55 Lara  Antalya",
        phone: "Tel: 0 242 324 61 61",
        city: 7,
      },
      {
        name: "Boyner Sports MarkAntalya",
        address: "Tahılpazarı Mah., Kazım Özalp Caddesi No:84, 07025  Antalya",
        phone: "Tel: 0242 999 10 97",
        city: 7,
      },
      {
        name: "Boyner Sports Alanya",
        address: "Şekerhane Mah. Hacet Cad. No:7 Alanya / ANTALYA",
        phone: "Tel: (0242) 502 63 91",
        city: 7,
      },
      {
        name: "Boyner Sports Mavibahçe",
        address:
          "Mavişehir Mahallesi, Caher Dudayev Blv, 35540 Karşıyaka/İzmir ",
        phone: "Tel: 0232 502 57 19",
        city: 35,
      },
      {
        name: "Boyner Sports Adıyaman",
        address:
          "Adıyaman Park AVM Yeni Sanayi Mah. 2819 Sk. No.70 Merkez Adıyaman",
        phone: "Tel: 0416 202 18 05",
        city: 2,
      },
    ],
  },
  {
    id: 4,
    theme: boynerDynamicColor,
    name: "Boyner Dynamic",
    data: [
      {
        name: "Boyner Mall Of İstanbul Dynamic",
        address:
          "Ziya Gökalp Mah. Süleyman Demirel Cad. No: 7 İkitelli–Başakşehir Mall Of İstanbul Alışveriş Merkezi İstanbul",
        phone: "Tel: 02129777401",
        city: 34,
      },
    ],
  },
  {
    id: 5,
    theme: boynerActiveColor,
    name: "Boyner Active",
    data: [
      {
        name: "Boyner ACity Active",
        address:
          "Fatih Sultan Mehmet Bulvarı no:244 Yeni Mahalle Ankara Acity Alışveriş Merkezi Zemin kat Mağaza no: 116 Ankara",
        phone: "Tel: 0 (312) 387-36-42",
        city: 6,
      },
      {
        name: "Boyner Active Buyaka",
        address:
          "Fatih Sultan Mehmet Mahallesi Balkan Caddesi No:56 B/160 Ümraniye/İstanbul Buyaka Avm B2 Kat İç Kapı No:20 İstanbul",
        phone: "Tel: 2169777400",
        city: 34,
      },
    ],
  },
  {
    id: 6,
    theme: boynerYkmColor,
    name: "YKM",
    data: [
      {
        name: "YKM Adana",
        address: "Öğretmenler Bulvarı M1 Tepe AVM No:4 Adana",
        phone: "Tel: 0 322 271 01 04",
        city: 1,
      },
      {
        name: "YKM Konak",
        address: "SSK Sitesi E Blok No:9/B Konak İzmir",
        phone: "Tel: 0 232 441 49 51",
        city: 35,
      },
      {
        name: "YKM Mersin Forum",
        address:
          "Forum Mersin AVM Güven Evler Mah. 20.Cad. No : 1 FS Blok 48 Mersin",
        phone: "Tel: 0 324 331 52 30",
        city: 33,
      },
    ],
  },
];
