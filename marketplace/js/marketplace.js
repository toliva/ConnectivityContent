define(function() {

    var allProviders = [
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.87,
                "company": "1HotelSolution.com Co., Ltd.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "1HotelRez",
                "type": "CRS",
                "website": "www.1hotelrez.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Aaron Hotels and Hostels Holding GmbH",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Autoupdate",
                "type": "CRS",
                "website": "http://www.beds-to-web.de/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Accubook",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "AccuSell",
                "type": "CM",
                "website": "accubook.net"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "AciGrup S.L",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Acinet",
                "type": "PMS",
                "website": "http://acigrup.com/v3/"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.97,
                "company": "Active Metrics",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "Synergy",
                "type": "CM",
                "website": "www.activemetrics.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.98,
                "company": "alixon gmbh",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HostelOffice / DormProject",
                "type": "PMS",
                "website": "www.dormproject.ch"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.66,
                "company": "Allotz",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Allotz Channel Manager",
                "type": "CM",
                "website": "www.allotz.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.95,
                "company": "ALTABIX",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "FlowLink",
                "type": "CRS",
                "website": "https://www.cityexpress.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Anand Systems Inc",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "ASI Front Desk (v5.3+)",
                "type": "PMS",
                "website": "www.AnandSystems.com"
            },
            {
                "availSuccess": 0.9,
                "bookSuccess": 0.98,
                "company": "AROBS Transilvania Software",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RateWizz",
                "type": "CM",
                "website": "www.ratewizz.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.98,
                "company": "Arpies Yazlm Bilgisayar Danmanlk Turizm Tic. Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Arpies Yazilim",
                "type": "PMS",
                "website": "http://www.sistemhotelsoftware.com/Home/ChannelManager"
            },
            {
                "availSuccess": 0.91,
                "bookSuccess": 0.7,
                "company": "AsiaTech Hospitality Solution Pvt Ltd",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "AsiaTech",
                "type": "CRS",
                "website": "https://www.asiatech.in"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Athena Information Systems",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "TravelLink",
                "type": "CM",
                "website": "http://www.athena.com.tw"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "Athena Solutions",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "HermesHotels",
                "type": "CRS",
                "website": "http://www.hermeshotels.it/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.95,
                "company": "Aurum Marketing srl",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Aurum Hotels Interface",
                "type": "CRS",
                "website": "NULL"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.98,
                "company": "AvaiBook",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "AvaiBook",
                "type": "CM",
                "website": "www.avaibook.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Availpro",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Availpro",
                "type": "CM",
                "website": "http://site.availpro.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "AVAILROOM S.L.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "AVAILROOM",
                "type": "PMS",
                "website": "www.availroom.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.42,
                "company": "Avantio VRMS",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Avantio",
                "type": "CM",
                "website": "www.avantio.es"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.98,
                "company": "Avenues South Asias",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "ResAvenue Channel Manager",
                "type": "CM",
                "website": "www.resavenue.com"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 0.97,
                "company": "Avirato",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Avirato",
                "type": "CM",
                "website": "www.avirato.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "AxisRooms Travel Distribution Solutions Pvt. Ltd.",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "AxisRooms",
                "type": "CM",
                "website": "www.axisrooms.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.85,
                "company": "B and B Ireland",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "B and B Ireland",
                "type": null,
                "website": "NULL"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.95,
                "company": "b4checkin",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "B4Checkin",
                "type": "CRS",
                "website": "www.b4checkin.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.87,
                "company": "BBliverate Octorate",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Octorate",
                "type": "CM",
                "website": "www.octorate.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "beds24",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Beds24 PMS",
                "type": "PMS",
                "website": "www.beds24.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.93,
                "company": "BeGenius",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BookinGenius",
                "type": "CM",
                "website": "www.begenius.it"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Beijing Miot. Ltd.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Advanced Purchase"
                ],
                "system": "Yunzhanggui",
                "type": "PMS",
                "website": "www.360pms.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.94,
                "company": "Berry Software",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "iGems",
                "type": "CM",
                "website": "www.igems.co.za"
            },
            {
                "availSuccess": 0.9,
                "bookSuccess": 0.8,
                "company": "BillyPDS",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "BillyPDS",
                "type": "CM",
                "website": "http://www.bookingmanager.com/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.84,
                "company": "Bohemia REI",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Pattayasunnyrentals.net",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.93,
                "company": "BookandLink",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "BookandLink",
                "type": "CRS",
                "website": "http://www.bookandlink.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.93,
                "company": "Bookassist",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Channel Connect",
                "type": "CM",
                "website": "bookassist.com"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 1.0,
                "company": "Booki Tech S.r.l.s",
                "featuresSupported": [
                    "Displays All Point of Sale Brands"
                ],
                "restrictionsSupported": [],
                "system": "Booki Tech",
                "type": "CM",
                "website": "https://cm.bookitech.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.95,
                "company": "Booking Automation Inc",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BookingAutomation",
                "type": "PMS",
                "website": "BookingAutomation.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.92,
                "company": "Booking Experts",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Booking Experts",
                "type": "PMS",
                "website": "www.bookingexperts.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "BookingCenter",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "BookingCenter",
                "type": "CM",
                "website": "www.bookingcenter.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "BookingLite",
                "featuresSupported": [
                    "Displays All Point of Sale Brands"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BookingLite",
                "type": "PMS",
                "website": "https://bookinglite.ru"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.96,
                "company": "BookingPal",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "BookingPal",
                "type": "CM",
                "website": "IMPORTANT"
            },
            {
                "availSuccess": 0.89,
                "bookSuccess": 0.87,
                "company": "BookLogic",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "MaxiChannel Manager",
                "type": "CRS",
                "website": "www.BookLogic.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.96,
                "company": "Brasil Bookings",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Brasil Bookings",
                "type": "PMS",
                "website": "www.brasilbookings.com.br"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "BusyRooms",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BusyRooms",
                "type": "CM",
                "website": "www.busy-rooms.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "CE Computer Engineering AG",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "QOnline CRS",
                "type": "CRS",
                "website": "SwissQualityHotels.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.86,
                "company": "ChannelManager.com.au",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "ChannelManager.com.au",
                "type": "CM",
                "website": "channelmanager.com.au"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.85,
                "company": "ChannelRUSH",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "ChannelRUSH Channel Manager",
                "type": "CM",
                "website": "www.channelrush.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.19,
                "company": "Che Lagarto Hostel",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Che Lagarto",
                "type": "CRS",
                "website": "www.chelagarto.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.91,
                "company": "CHINAOnline",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "COL switch - Green Tree Chain",
                "type": "CM",
                "website": "http://www.chinaonline.net.cn/home_new_eng/index.asp"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.95,
                "company": "CHINAOnline",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "COL switch - Jin Jiang Chain",
                "type": "CM",
                "website": "http://www.chinaonline.net.cn/home_new_eng/index.asp"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Clips",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "Neppan",
                "type": "CM",
                "website": "http://www.clips.co.jp/"
            },
            {
                "availSuccess": 0.77,
                "bookSuccess": null,
                "company": "Club Mahindra Hotels & Resorts",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Crest CRS",
                "type": "CRS",
                "website": "www.clubmahindra.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "Compusoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Compusoft",
                "type": "PMS",
                "website": "www.compusoft.dk"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.95,
                "company": "Constellation",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Elloha/Constellation",
                "type": "CRS",
                "website": "http://www.elloha.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Coral-Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "ORBE (ONLINE RESERVATION BOOKING ENGINE)",
                "type": "CM",
                "website": "http://www.coral-technologies.com/en/orbe/acerca-de-orbe.html"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.97,
                "company": "Cultuzz",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Cultuzz Channel Manager",
                "type": "CM",
                "website": "www.cultuzz.de"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 1.0,
                "company": "CWD S.r.l",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BookOn",
                "type": "CM",
                "website": "www.bookon.org"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "DeepThink LLC",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "ThinkReservations",
                "type": "PMS",
                "website": "www.thinkreservations.com"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.95,
                "company": "DerbySoft",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "DHotelier",
                "type": "CRS",
                "website": "http://www.derbysoft.com/"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.8,
                "company": "DerbySoft",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "One by DerbySoft",
                "type": "CM",
                "website": "http://www.dsone.com/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "Digital Arbitrage",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "My Allocator",
                "type": "CM",
                "website": "https://www.myallocator.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "DigitalDruid",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HotelDruid",
                "type": "CM",
                "website": "www.hoteldruid.com"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.99,
                "company": "Dingus Services",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "Dingus CM",
                "type": "CM",
                "website": "http://www.dingus-services.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.89,
                "company": "Direct Hotels Pvt Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "eGlobe Solutions",
                "type": "PMS",
                "website": "http://eglobe-solutions.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.94,
                "company": "DirectWithHotels",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "DirectWithHotels System",
                "type": "CM",
                "website": "http://www.directwithhotels.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.86,
                "company": "e4jConnect",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "e4j - Extensionsforjoomla.com",
                "type": "CRS",
                "website": "https://e4jconnect.com"
            },
            {
                "availSuccess": null,
                "bookSuccess": null,
                "company": "Earth, Sea & Sky Vacations",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "V12/ISILink",
                "type": "CRS",
                "website": "cabovillas.com"
            },
            {
                "availSuccess": 0.53,
                "bookSuccess": 0.96,
                "company": "EASEROOM (Unit of GI Hospitalities Private Limited)",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "EaseRoom Channel Manager",
                "type": "CRS",
                "website": "https://www.easeroom.com/"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.93,
                "company": "Easy-Rez",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Easy-Rez CRS",
                "type": "CRS",
                "website": "https://www.easy-rez.com"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.95,
                "company": "Efimatica",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Obehotel",
                "type": "CM",
                "website": "www.obehotel.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "eGate by CNS",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "eGate by CNS",
                "type": "PMS",
                "website": "NULL"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Engisoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Bird iCRS",
                "type": "CRS",
                "website": "www.engisoft.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Engisoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Bird iCRS - Acta Hotels",
                "type": "CRS",
                "website": "www.engisoft.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "EpicBrain",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Octopus",
                "type": "PMS",
                "website": "https://admin.12go.co.kr"
            },
            {
                "availSuccess": 0.93,
                "bookSuccess": 0.99,
                "company": "Ericsoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Ericsoft ChannelManager",
                "type": "CM",
                "website": "www.ericsoft.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.86,
                "company": "Estar Group",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BookingEstar",
                "type": "CRS",
                "website": "http://www.estargroup.it"
            },
            {
                "availSuccess": 0.88,
                "bookSuccess": 0.96,
                "company": "Eviivo",
                "featuresSupported": [
                    "Product API",
                    "Property API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "Eviivo 2.0",
                "type": null,
                "website": "www.eviivo.com"
            },
            {
                "availSuccess": 0.88,
                "bookSuccess": 0.91,
                "company": "Eviivo",
                "featuresSupported": [
                    "Product API",
                    "Property API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "Eviivo 2.0 (Expedia)",
                "type": null,
                "website": "www.eviivo.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "eZee Technosys",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "eZee Absolute",
                "type": "PMS",
                "website": "www.ezeeabsolute.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.97,
                "company": "eZee Technosys",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "eZee Centrix",
                "type": "CM",
                "website": "www.ezeecentrix.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "EzyRez",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "EzyChannel",
                "type": "CM",
                "website": "http://www.ezyrez.com.au"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.96,
                "company": "Fairbridge Inns EQC",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "FairCloud PMS",
                "type": "PMS",
                "website": "NULL"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.36,
                "company": "Fairbridge Inns EQC",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "xMitter",
                "type": "PMS",
                "website": "www.xmitter.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Fastbooking",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "FastBooking Channel Manager",
                "type": "CM",
                "website": "http://www.fastbooking.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "FeelFree",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "FeelFree",
                "type": null,
                "website": "NULL"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "Figaro",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "Figaro - Channel Manager",
                "type": "CM",
                "website": "www.evols.it"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Finite-Systems",
                "featuresSupported": [
                    "Value Add Promotions",
                    "Displays All Point of Sale Brands"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Finite Software Systems CM",
                "type": "CM",
                "website": "www.finite-soft.com"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.95,
                "company": "Five Star Hotel Systems Corporation",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Five Star Software",
                "type": "PMS",
                "website": "http://www.fivestarhotelsystems.com/products_services/products_services.htm"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Freetobook",
                "featuresSupported": [
                    "Product API",
                    "Property API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Freetobook System",
                "type": "CM",
                "website": "www.freetobook.com"
            },
            {
                "availSuccess": 0.85,
                "bookSuccess": 0.96,
                "company": "Frontdesk Anywhere",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Frontdesk Anywhere PMS",
                "type": "PMS",
                "website": "frontdeskanywhere.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.86,
                "company": "Frontdesk24",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Frontdesk24",
                "type": "PMS",
                "website": "frontdesk24.ru"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Galaxy H\u00f4tels",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Galaxy H\u00f4tels",
                "type": "CRS",
                "website": "galaxy-hotels.fr"
            },
            {
                "availSuccess": 0.93,
                "bookSuccess": 0.97,
                "company": "Gestione Albergo Srl",
                "featuresSupported": [
                    "Value Add Promotions",
                    "Displays All Point of Sale Brands"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "LeoPortals Manager",
                "type": "CM",
                "website": "www.gestionealbergo.it"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.34,
                "company": "GIMH",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "GIMH Channel Manager",
                "type": "CM",
                "website": "http://www.gimh.es/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Global Network Connection",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "EZ Site Controller",
                "type": "CM",
                "website": "http://www.ezsitecontroller.jp/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Global Serviced Apartments",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Global Serviced Apartments, LLC",
                "type": "PMS",
                "website": "globalservicedapts.com"
            },
            {
                "availSuccess": 0.89,
                "bookSuccess": 0.96,
                "company": "GMS",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "GMS Channel Manager",
                "type": "CM",
                "website": "https://www.gms.info/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "GNA",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "GnaHS Channel Manager",
                "type": "CM",
                "website": "www.gna.es"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.94,
                "company": "Gracesoft Software",
                "featuresSupported": [
                    "PCI Attestation Supplied"
                ],
                "restrictionsSupported": [],
                "system": "Easy InnKeeping",
                "type": "PMS",
                "website": "http://gracesoft.com/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.85,
                "company": "Greeka / Syncrez",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Syncrez",
                "type": "CM",
                "website": "www.syncrez.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Grupo Posadas",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through",
                    "Advanced Purchase"
                ],
                "system": "AltiusPar",
                "type": "CRS",
                "website": "http://www.altiuspar.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "GrupoCITEC",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "SIRO Channel Manager",
                "type": null,
                "website": "NULL"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "GTH Solutions YieldPlanet",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "YieldPlanet",
                "type": "CM",
                "website": "https://www.yieldplanet.com/"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.99,
                "company": "Gubse AG",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Sihot PMS",
                "type": "PMS",
                "website": "https://www.sihot.com/en/modules/sihotpms"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "GuestCentric Systems",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Evolution CRS",
                "type": "CRS",
                "website": "www.guestcentric.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "GuestCentric Systems",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "GuestCentric Systems Channel Manager",
                "type": "CM",
                "website": "http://www.guestcentric.com/features/channel-management/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Guestline Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Roomlynx",
                "type": "CM",
                "website": "www.guestline.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Harizma Holdings Lanka",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Effective Tours",
                "type": "CRS",
                "website": "https://EffectiveTours.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "HDN Global",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "HDN Global",
                "type": "CM",
                "website": "http://www.hdnglobal.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "High Level Software",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "High Level PMS",
                "type": "PMS",
                "website": "http://www.high-level-software.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.82,
                "company": "Highland Vision",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Highland Vision Bookings",
                "type": "CM",
                "website": "http://www.highlandvision.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Hirum",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "Hisite",
                "type": "CM",
                "website": "www.hirum.com.au"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.9,
                "company": "Hospitality Technology International (Pty) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "eRes",
                "type": "CRS",
                "website": "http://www.hti-systems.co.za/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.88,
                "company": "Hospitality Technology International (Pty) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "eRes - aha",
                "type": null,
                "website": "http://www.hti-systems.co.za/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.88,
                "company": "Hospitality Technology International (Pty) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "eRes - ThornyBush",
                "type": "CRS",
                "website": "http://www.hti-systems.co.za/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.93,
                "company": "Hospitality Technology International (Pty) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "eRes\u00a0- Apollo Hotels",
                "type": "CRS",
                "website": "http://www.hti-systems.co.za/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.95,
                "company": "Hospitality Technology International (Pty) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "eRes\u00a0- Legend Hotels",
                "type": "CRS",
                "website": "http://www.hti-systems.co.za/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.97,
                "company": "Hospitality Technology International (Pty) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "eRes\u00a0- Tsogo Sun Hotels",
                "type": "CRS",
                "website": "http://www.hti-systems.co.za/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Host Hotel Systems",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Host PMS",
                "type": "PMS",
                "website": "www.hostpms.com"
            },
            {
                "availSuccess": 0.83,
                "bookSuccess": 0.85,
                "company": "Hostaway",
                "featuresSupported": [
                    "Product API"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "Hostaway",
                "type": "CM",
                "website": "www.hostaway.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.98,
                "company": "Hosteeva LLC",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Hosteeva",
                "type": "CRS",
                "website": "https:// www.hosteeva.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Hostel System",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "FrontDesk Master",
                "type": "PMS",
                "website": "www.frontdeskmaster.com"
            },
            {
                "availSuccess": 0.93,
                "bookSuccess": 1.0,
                "company": "Hotel Availabilities LTD",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HotelAvailabilities",
                "type": "CM",
                "website": "https://hotelavailabilities.com"
            },
            {
                "availSuccess": 0.93,
                "bookSuccess": 0.99,
                "company": "Hotel Concepts",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Rezexchange",
                "type": "CM",
                "website": "https://amadeus-hospitality.com/central-reservations-system/rezexchange/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.95,
                "company": "Hotel Link Solutions",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotel Link Solutions",
                "type": "CM",
                "website": "www.hotellinksolutions.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.88,
                "company": "Hotel Profi",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotel Profi",
                "type": "PMS",
                "website": "www.hotel-profi.de"
            },
            {
                "availSuccess": 0.89,
                "bookSuccess": 0.85,
                "company": "Hotel Story",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotelstory",
                "type": "CM",
                "website": "www.hotelstory.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.81,
                "company": "Hoteladvisor.net",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hoteladvisor",
                "type": "PMS",
                "website": "travelaps.com"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": null,
                "company": "Hotelan",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "ComHotel",
                "type": "CM",
                "website": "www.hotelan.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "Hoteliers Dot Guru Pte. Ltd.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hoteliers.Guru Channel Management",
                "type": "CM",
                "website": "https://www.hoteliers.guru"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "hoteliers.com",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "hoteliers.com",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Hoteliga",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hoteliga",
                "type": "CM",
                "website": "www.hoteliga.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "HotelNet",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "HotelNet CRS",
                "type": "CRS",
                "website": "www.hotel-net.it"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "HotelNetSolutions",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "HotelNetSolutions",
                "type": "CM",
                "website": "www.hotelnetsolutions.de"
            },
            {
                "availSuccess": null,
                "bookSuccess": 0.16,
                "company": "Hoteloga",
                "featuresSupported": [
                    "Product API",
                    "Property API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "HotelOga",
                "type": "PMS",
                "website": "www.hoteloga.com"
            },
            {
                "availSuccess": 0.88,
                "bookSuccess": null,
                "company": "HotelOnline",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "HotelOnline",
                "type": null,
                "website": "NULL"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "HotelPartner",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HotelPartner CRS",
                "type": "CRS",
                "website": "hotelpartner-ym.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.98,
                "company": "HotelRunner",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "HotelRunner",
                "type": "CRS",
                "website": "www.hotelrunner.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "HotelWebservice GMBH",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "HotelWebservice Channel Manager",
                "type": "CM",
                "website": "www.hotelwebservice.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.87,
                "company": "Hotetec Accomodation SL",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Hotetec",
                "type": "CRS",
                "website": "http://www.travelopenapps.org/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "HSystem",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HUNIT",
                "type": "CM",
                "website": "www.hsystem.com.br"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.86,
                "company": "Hubs1",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Hubs1",
                "type": "CRS",
                "website": "www.hubs1.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.86,
                "company": "IAI S.A",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "IdoSell Booking",
                "type": "PMS",
                "website": "http://www.idosell.com/"
            },
            {
                "availSuccess": 0.83,
                "bookSuccess": 0.97,
                "company": "IBS Hospitality Solutions (Formerly HBSi)",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through",
                    "Advanced Purchase"
                ],
                "system": "Demand Gateway",
                "type": "CM",
                "website": "http://www.ibsplc.com/products/hospitality-solutions/demand-gateway"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.98,
                "company": "IBS Hospitality Solutions (Formerly HBSi)",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through",
                    "Advanced Purchase"
                ],
                "system": "Demand Gateway - Disney",
                "type": "CM",
                "website": "http://www.hotelbookingsolutions.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "IBS Hospitality Solutions (Formerly HBSi)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Demand Gateway - Fairmont",
                "type": "CM",
                "website": "http://www.hotelbookingsolutions.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.92,
                "company": "Icewoods Digital Technology",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Tour Echo",
                "type": "CM",
                "website": "http://www.TOURWOODS.com"
            },
            {
                "availSuccess": 0.61,
                "bookSuccess": 0.84,
                "company": "Icnea Tecnologia S.L.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Icnea",
                "type": "PMS",
                "website": "http://icnea.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Idiso",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Idiso",
                "type": "CRS",
                "website": "www.idiso.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Idiso",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Sirius",
                "type": "CRS",
                "website": "www.idiso.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "IGM",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "IGM Synergy Hotel CRS",
                "type": "CRS",
                "website": "http://www.roomleader.com/"
            },
            {
                "availSuccess": 0.89,
                "bookSuccess": 0.88,
                "company": "Image Technology Systems",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "VisualMatrix",
                "type": "PMS",
                "website": "https://vmpms.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Impactiv, Inc",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Innkeepers Advantage",
                "type": null,
                "website": "Innkeepersadvantage.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "IMS Media",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "My Bookings",
                "type": "CM",
                "website": "www.my-bookings.org/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "Indra",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "TMS for Hotels",
                "type": "CRS",
                "website": "http://www.tmsforhotels.com/"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.98,
                "company": "Indra",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "TMS for Hotels -  nhHotels",
                "type": "CRS",
                "website": "http://www.tmsforhotels.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Inn Style",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Inn Style",
                "type": "PMS",
                "website": "www.innstyle.co.uk"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.96,
                "company": "INNfinity Hospitality",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "INNfinity V2",
                "type": "PMS",
                "website": "http://www.innfinity.com"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.98,
                "company": "InnGenius Property Management Solutions",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Inn-Connect Channel Manager",
                "type": "PMS",
                "website": "http://www.inngeniuspms.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "InnQuest Software",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "roomMaster",
                "type": "PMS",
                "website": "www.innquest.com"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 0.99,
                "company": "innRoad",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "innRoad PMS",
                "type": "PMS",
                "website": "www.innroad.com"
            },
            {
                "availSuccess": 0.65,
                "bookSuccess": 0.95,
                "company": "Innsoft, Incorporated",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Check-Inn PMS",
                "type": "PMS",
                "website": "www.innsoft.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Interalp Touristik",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Interalp",
                "type": "CM",
                "website": "http://www.interalp-touristik.com/de/channel-manager.html"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit",
                "type": "CRS",
                "website": "http://www.reservit.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit - Brithotel",
                "type": "CRS",
                "website": "www.reservit.com"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 1.0,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit - Citotel",
                "type": "CRS",
                "website": "www.reservit.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit - FastHotel",
                "type": "CRS",
                "website": "www.reservit.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit - Logis Hotels",
                "type": "CRS",
                "website": "http://www.reservit.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit - SEH Hotels",
                "type": "CRS",
                "website": "http://www.reservit.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Reservit - Zenitude",
                "type": "CRS",
                "website": "http://www.reservit.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Interface Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "ReservIT Softbooker Canada",
                "type": "CRS",
                "website": "www.softbooker.com"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.79,
                "company": "Internettare",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Easyram",
                "type": "CM",
                "website": "www.easyram.it"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Ipernet",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Iperbooking channel Manager",
                "type": "CM",
                "website": "www.iperbooking.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Ipnordic A/S",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HotelBoss",
                "type": "PMS",
                "website": "www.hotelboss.dk"
            },
            {
                "availSuccess": 0.85,
                "bookSuccess": 0.85,
                "company": "IQWARE",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "IQWare PMS",
                "type": "PMS",
                "website": "www.iqwareinc.com/"
            },
            {
                "availSuccess": 0.93,
                "bookSuccess": 0.88,
                "company": "ITF CROUP CO.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Maximum Length of Stay"
                ],
                "system": "RabbitJetsPMS",
                "type": "PMS",
                "website": "rabbitjets.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "JR Systems",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Rakutsu",
                "type": "CM",
                "website": "http://www.raku-2.jp/"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 0.8,
                "company": "KE-Booking",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "KE-Booking CRS",
                "type": "PMS",
                "website": "www.ke-booking.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "LemonPixel.pl",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotres.pl",
                "type": "CRS",
                "website": "www.hotres.pl"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Levart",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Levart Channel Manager",
                "type": "CM",
                "website": "http://www.levartdistributionsystems.com.au/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Lexicon Travel Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Lexicon",
                "type": null,
                "website": "LexiconTravelTech.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Lodgegate",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Lodgegate PMS",
                "type": "PMS",
                "website": "www.lodgegate.com"
            },
            {
                "availSuccess": 0.9,
                "bookSuccess": 0.97,
                "company": "LuxuryRes",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "EzRes",
                "type": "PMS",
                "website": "www.luxuryres.com"
            },
            {
                "availSuccess": 0.61,
                "bookSuccess": 0.99,
                "company": "Madeep",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Mad Booking",
                "type": "CM",
                "website": "www.madeep.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.9,
                "company": "Magarental AG",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "MAGARENTAL",
                "type": "CRS",
                "website": "https://www.magarental.com/en/software/magarental"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.69,
                "company": "Mallorca Soft",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Astro Hotel",
                "type": "PMS",
                "website": "www.mallorcasoft.es"
            },
            {
                "availSuccess": 0.91,
                "bookSuccess": 1.0,
                "company": "MaxiMojo Software (Pvt.) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hospitality Solutions Mantra",
                "type": "CM",
                "website": "www.maximojo.com"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.85,
                "company": "MaxiMojo Software (Pvt.) Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotel Mantra",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.92,
                "company": "Maxxton India Technologies Pvt. Ltd.",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Newyse",
                "type": "PMS",
                "website": "www.maxxton.com"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.91,
                "company": "MediaLab Sofware Engineering S.N.C.",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "MainApps - Magellano",
                "type": "CM",
                "website": "www.magellano.info"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Meridian",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Meridian Reservation Systems",
                "type": "CRS",
                "website": "http://www.reservationsystems.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Mingus Software",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotello",
                "type": "PMS",
                "website": "http://www.mingus.biz/en/index.htm"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Misterbooking",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Misterbooking CM",
                "type": "CM",
                "website": "https://www.misterbooking.com"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.82,
                "company": "MM-One Group Srl",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "BookingOne Connect",
                "type": "CRS",
                "website": "http://www.mm-one.com/"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.98,
                "company": "Motel Software Solutions",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Mini Hotel",
                "type": "PMS",
                "website": "www.minihotelpms.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "MR Group SAS",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "MRGroup",
                "type": "CM",
                "website": "www.booknowhotel.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.97,
                "company": "Nebiz",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "HotelXP",
                "type": "PMS",
                "website": "www.hotelxp.it"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.8,
                "company": "Netroomz",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "Freeloader",
                "type": "CM",
                "website": "www.netroomz.com.au"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Netskin.net",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotel.BB",
                "type": "CM",
                "website": "https://www.hotel.bb/"
            },
            {
                "availSuccess": 0.73,
                "bookSuccess": 1.0,
                "company": "NewBook Pty Ltd",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "NewBook",
                "type": "CRS",
                "website": "www.newbook.cloud"
            },
            {
                "availSuccess": 0.89,
                "bookSuccess": 1.0,
                "company": "Nexteam SRL",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "BookingExpert Italy",
                "type": "CM",
                "website": "www.bookingexpert.it"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "NextPax",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Lodgix Property Management System",
                "type": "CRS",
                "website": "http://www.nextpax.com"
            },
            {
                "availSuccess": 0.86,
                "bookSuccess": 0.92,
                "company": "NextPax",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "NextPax",
                "type": null,
                "website": "www.NextPax.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Nightsbridge",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "NightsBridge PMS",
                "type": "PMS",
                "website": "http://site.nightsbridge.com/pms-connector/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Nivera Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Reseliva",
                "type": "PMS",
                "website": "www.reseliva.com"
            },
            {
                "availSuccess": 0.81,
                "bookSuccess": 0.98,
                "company": "NORTHWIND",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Maestro Property Management-PMS",
                "type": "PMS",
                "website": "www.maestropms.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Nova XS Tecnologia da Informa\u00e7\u00e3o LTDA.",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Nova XS",
                "type": "CRS",
                "website": "www.novaxs.com.br"
            },
            {
                "availSuccess": 0.76,
                "bookSuccess": 0.89,
                "company": "O Hotel Suites Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Ostays",
                "type": "PMS",
                "website": "Http://ostays.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.96,
                "company": "Odalys",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Odalys CRS",
                "type": "CRS",
                "website": "NULL"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Old Town Apartments",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Old Town Apartments System",
                "type": "CM",
                "website": "www.apartmentsapart.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "Omnibees CRS",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Omnibees (HoteisNet)",
                "type": "CM",
                "website": "www.omnibees.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "one UP",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "one UP",
                "type": "CM",
                "website": "www.1-up.co.uk"
            },
            {
                "availSuccess": 0.0,
                "bookSuccess": 0.81,
                "company": "ONETECH solution",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "ONETECH PMS",
                "type": "PMS",
                "website": "www.onetechsolution.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Online Systems",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Chart PMS",
                "type": "PMS",
                "website": "http://www.online-int.com.au"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "OnRes Systems Inc",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "AccomPro",
                "type": "CM",
                "website": "http://software.onressystems.com/"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.99,
                "company": "Open Hotel Inc",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Open Hotel PMS",
                "type": "PMS",
                "website": "www.openhotel.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Oracle Hospitality",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Micros Channel Manager Europe",
                "type": "CM",
                "website": "www.micros.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Oracle Hospitality",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Micros Channel Manager USA/Canada",
                "type": "CM",
                "website": "www.micros.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Oracle Hospitality",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Micros Suite 8 EMEA",
                "type": "CM",
                "website": "www.micros.com"
            },
            {
                "availSuccess": 0.88,
                "bookSuccess": 0.87,
                "company": "Oravel Stays Pvt. Ltd.",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "OYORooms",
                "type": "CRS",
                "website": "http://www.oyorooms.com"
            },
            {
                "availSuccess": 0.87,
                "bookSuccess": 0.41,
                "company": "Oreve Technologies",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Room online",
                "type": "PMS",
                "website": "http://www.oreve-technologies.com/index.php"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Otelia.it",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Otelia Channel Manager",
                "type": "CM",
                "website": "https://otelia.io/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Otelms",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Otelms Channel Manager",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.97,
                "company": "Passepartout",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Passepartout Welcome",
                "type": "CM",
                "website": "www.passepartout.net"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 0.97,
                "company": "Perfect Hands Solutions Pvt. Ltd",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Perfect Hands Solutions",
                "type": "PMS",
                "website": "www.perfecthandssolutions.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "PHOBS",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "PHOBS CRS",
                "type": "CRS",
                "website": "www.phobs.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.18,
                "company": "Pierre et Vacances - EQC",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Center Parcs",
                "type": null,
                "website": "https://www.pierreetvacances.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.87,
                "company": "Pierre et Vacances - EQC",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Pierre et Vacances - CRS",
                "type": "CRS",
                "website": "https://www.pierreetvacances.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Planet Winner",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Planet Winner",
                "type": "CM",
                "website": "http://www.winner-hotelsoftware.com/en"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.95,
                "company": "PMS Cloud LP",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "PMS Cloud",
                "type": "PMS",
                "website": "www.pmscloud.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.97,
                "company": "Prestige Software",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Prestige",
                "type": "CM",
                "website": "www.cloudhospitality.es"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.97,
                "company": "Prestige Software",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Prestige - AGA Hotels",
                "type": "CM",
                "website": "www.prestige-inet.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Prestige Software",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Prestige - Iberostar",
                "type": "CM",
                "website": "www.prestige-inet.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": null,
                "company": "Prestige Software",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Prestige - Magic Costa Blanca",
                "type": "CM",
                "website": "www.prestige-inet.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Prestige Software",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Prestige - Pierre & Vacances",
                "type": "CM",
                "website": "www.prestige-inet.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Primal-RES",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Channels Easy",
                "type": "CM",
                "website": "PRIMAL-RES.GR"
            },
            {
                "availSuccess": 0.86,
                "bookSuccess": 0.98,
                "company": "Profit Room",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Profitroom",
                "type": "CM",
                "website": "http://www.profitroom.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Promoir BV",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Roomer PMS",
                "type": "PMS",
                "website": "http://www.roomerpms.com"
            },
            {
                "availSuccess": 0.9,
                "bookSuccess": 0.98,
                "company": "Protel Hotel Software",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Protel - PMS",
                "type": "PMS",
                "website": "www.protel.net"
            },
            {
                "availSuccess": 0.91,
                "bookSuccess": 0.94,
                "company": "Pyn Booking",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Pyn Booking",
                "type": "PMS",
                "website": "pynbooking.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "QNT S.r.l",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Simple Booking Channel Manager",
                "type": "CM",
                "website": "http://www.simplebooking.it/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.92,
                "company": "Queensborough Group",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Q Book",
                "type": null,
                "website": "https://www.queensboroughgroup.co.uk/hotel-online-booking/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "QuickYield",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "QuickManager",
                "type": "CM",
                "website": "www.quickyield.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.95,
                "company": "Rate Tiger",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Rate Tiger Connect",
                "type": "CM",
                "website": "www.erevmax.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Rate Tiger",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Rate Tiger Suite",
                "type": "CM",
                "website": "www.erevmax.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "RateGain",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RateGain",
                "type": "CM",
                "website": "http://www.rategain.com/yieldgain_hotels.htm"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "RateGain",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RateGain AR-Only",
                "type": "CM",
                "website": "http://www.rategain.com/yieldgain_hotels.htm"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Redawning",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Redawning",
                "type": "CRS",
                "website": "redawning.com"
            },
            {
                "availSuccess": 0.91,
                "bookSuccess": 0.96,
                "company": "Rentals United Integration (formerly Holiday Velvet)",
                "featuresSupported": [
                    "Product API"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Rentals United",
                "type": "PMS",
                "website": "rentalsunited.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.85,
                "company": "RESCON24",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Gastrodat",
                "type": "CM",
                "website": "www.gastrodat.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "ReservHOTEL International",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Global Connection",
                "type": "CRS",
                "website": "www.reservhotel.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "ResOnline",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "ResOnline Channel Manager",
                "type": "CM",
                "website": "http://www.resonline.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Resonline LLC",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Resonline LLC Europe",
                "type": "CRS",
                "website": "www.resonline.ru"
            },
            {
                "availSuccess": 0.83,
                "bookSuccess": 0.89,
                "company": "Resort Data Processing, Inc.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RDPWin",
                "type": "PMS",
                "website": "http://www.resortdata.com/"
            },
            {
                "availSuccess": null,
                "bookSuccess": 0.85,
                "company": "ResRequest",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "ResRequest",
                "type": "PMS",
                "website": "www.resrequest.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": null,
                "company": "Revparguru",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Revparguru Channel Manager for EQC",
                "type": "CM",
                "website": "www.revparguru.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 1.0,
                "company": "RezNext Global Solutions",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RezNext",
                "type": "CM",
                "website": "http://www.reznext.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "RHN",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Rez Online",
                "type": "CM",
                "website": "http://www.r-h-n.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "Rio Tera - Ag\u00eancia Web Ltda",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Bukly CM",
                "type": "CM",
                "website": "www.bukly.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.98,
                "company": "RMS (Aust) Pty Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "RMS",
                "type": "PMS",
                "website": "https://www.rmscloud.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "ROIBACK",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "ROIBACK CRS",
                "type": "CRS",
                "website": "http://www.roiback.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.88,
                "company": "Roomito Online Pvt Ltd",
                "featuresSupported": [
                    "Product API"
                ],
                "restrictionsSupported": [],
                "system": "Roomito Channel Manager",
                "type": "CM",
                "website": "www.mghworld.net"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.98,
                "company": "RoomRaccoon",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RoomRaccoon",
                "type": "PMS",
                "website": "https://www.roomraccoon.com/en/all-in-one/pms/page"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.95,
                "company": "Roomsy",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Roomsy PMS",
                "type": "PMS",
                "website": "www.roomsy.com"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "RSI International",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "RoomKey",
                "type": "PMS",
                "website": "www.roomkeypms.com"
            },
            {
                "availSuccess": 0.93,
                "bookSuccess": 0.94,
                "company": "RuralGest Sistemas de Reservas S.L",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "RuralGest",
                "type": "CM",
                "website": "www.ruralgest.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.96,
                "company": "Saaranya Hospitality Technologies Pvt Ltd",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Instaconnekt",
                "type": null,
                "website": "instaconnekt.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 1.0,
                "company": "SabeeApp",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "SabeeApp",
                "type": "PMS",
                "website": "www.sabeeapp.com"
            },
            {
                "availSuccess": 0.63,
                "bookSuccess": 0.97,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "InnLink CRS",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS  - Morgans",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.89,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Club Quarters",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Commune",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Kimpton",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Loews",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Noble House",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Northland",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Pacifica",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 1.0,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Rosewood",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.87,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Shilo Inn",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Sonesta",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Trump International",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Vantage Hospitality",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.98,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Viceroy",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "Sabre Hospitality Solutions (SynXis)",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Full Pattern Length of Stays: Arrival",
                    "Full Pattern Length of Stays: Stay-Through"
                ],
                "system": "SynXis CRS - Westmont",
                "type": "CRS",
                "website": "http://www.sabrehospitality.com/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Sanha Information Technology INC",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "Sanha",
                "type": "CM",
                "website": "www.sanhait.co.kr"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.47,
                "company": "Sceptre Hospitality Resources",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Magnuson CRS",
                "type": null,
                "website": "http://www.sceptrehospitality.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "Sceptre Hospitality Resources",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Value Place EQC",
                "type": "CRS",
                "website": "http://www.sceptrehospitality.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "Sceptre Hospitality Resources",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Value Place EQC - HMC",
                "type": "CRS",
                "website": "http://www.sceptrehospitality.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "Sceptre Hospitality Resources",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Windsurfer CRS",
                "type": "CRS",
                "website": "https://shr.global/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "Scottish Youth Hostels Association",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "SYHA",
                "type": "CRS",
                "website": "www.syha.org.uk"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 1.0,
                "company": "Seanuts Co., Ltd",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "TL Lincoln",
                "type": "CM",
                "website": "https://www.seanuts.co.jp/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Seekda Gmbh",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Seekda Channel Connect",
                "type": "CM",
                "website": "https://seekda.com/en/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.99,
                "company": "Seekom",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "iBex Accommodation",
                "type": "CM",
                "website": "web.seekom.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.79,
                "company": "Selena",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Hera Net Manager",
                "type": "CM",
                "website": "www.selena.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Semper",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Semper",
                "type": "CRS",
                "website": "https://www.semper.co.za/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Sigesgroup",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Sysdat",
                "type": "PMS",
                "website": "http://www.sysdat-turismo.it/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Silverbyte",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Optima PMS",
                "type": "PMS",
                "website": "http://www.silverbyte.com/index.html"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.9,
                "company": "Sinergia Soluciones",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Todoalojamiento.com",
                "type": "CRS",
                "website": "www.sinergiasoluciones.com.ar"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Sirvoy",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Sirvoy Reservation System",
                "type": "PMS",
                "website": "www.sirvoy.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Siteminder",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Siteminder RDXAmerica",
                "type": "CM",
                "website": "http://www.siteminder.com.au"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Siteminder",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Siteminder RDXAPAC",
                "type": "CM",
                "website": "http://www.siteminder.com.au"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Siteminder",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Siteminder RDXEurope",
                "type": "CM",
                "website": "http://www.siteminder.com.au"
            },
            {
                "availSuccess": 0.67,
                "bookSuccess": 0.98,
                "company": "Sleep and Go S.L",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "fnsManager",
                "type": "CM",
                "website": "http://www.fnsrooms.com/"
            },
            {
                "availSuccess": 0.78,
                "bookSuccess": null,
                "company": "Slimtrader",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "MoBiashara",
                "type": "CM",
                "website": "www.slimtrader.com"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.72,
                "company": "Slope",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Slope",
                "type": null,
                "website": "www.slope.it"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "smartHOTEL.nl",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "smartHOTEL.nl",
                "type": "CM",
                "website": "http://www.smarthotel.nl"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.96,
                "company": "SMI Co.,Ltd.",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Yadochokun",
                "type": "CRS",
                "website": "http://yado.smijp.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.88,
                "company": "Smoobu GmbH",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Smoobu Channel Manager",
                "type": "CRS",
                "website": "www.smoobu.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.96,
                "company": "Softbrands INFOR",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "HMS by Softbrands",
                "type": "PMS",
                "website": "http://www.infor.com/"
            },
            {
                "availSuccess": 0.84,
                "bookSuccess": 0.87,
                "company": "Solutions Plus s.r.l.",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Kross Booking Suite",
                "type": "CRS",
                "website": "www.krossbooking.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Sonder",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Sonder Channel Manager",
                "type": "CM",
                "website": "www.sonder.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "STAAH",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "STAAH",
                "type": "CM",
                "website": "www.staah.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Stardekk",
                "featuresSupported": [
                    "Product API",
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Cubilis by Stardekk",
                "type": "CM",
                "website": "www.cubilis.com"
            },
            {
                "availSuccess": 0.51,
                "bookSuccess": 0.83,
                "company": "Startnow",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "All Inn",
                "type": "CRS",
                "website": "www.startnow.kr"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 0.88,
                "company": "Stays Solutions Limited",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay"
                ],
                "system": "stays\u2122",
                "type": "CRS",
                "website": "www.stays.net"
            },
            {
                "availSuccess": 0.85,
                "bookSuccess": 0.97,
                "company": "Strait Solutions",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "MyUkTravel",
                "type": "PMS",
                "website": "www.straitpms.com"
            },
            {
                "availSuccess": 0.85,
                "bookSuccess": 0.99,
                "company": "Strait Solutions",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Strait PMS",
                "type": "PMS",
                "website": "www.straitpms.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Surehigh International Technology Group",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Hotelnabe Channel Manager",
                "type": "CM",
                "website": "http://www.surehigh.com.tw/hotelnabe/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "SWITCHBOARD",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "SWITCH.CM",
                "type": "PMS",
                "website": "http://switch.cm/"
            },
            {
                "availSuccess": 0.9,
                "bookSuccess": 0.36,
                "company": "Synthense LSI Software",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Hotel In",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "TDS Network International",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "WebPMSpro/ColibriPMS",
                "type": "PMS",
                "website": "www.colibripms.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "Tecnes Milano s.r.l",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "RoomCloud/ParityRate",
                "type": "CM",
                "website": "www.parityrate.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.98,
                "company": "Telicom",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotelia PMS",
                "type": "PMS",
                "website": "http://telicom.ca/"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Temairazu",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Temairazu Channel Manager",
                "type": "CM",
                "website": "www.temairazu.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.96,
                "company": "Tesipro",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Sigh Ulyses",
                "type": "CRS",
                "website": "http://www.tesipro.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.97,
                "company": "The Ascott Limited",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "Capitaland (Ascott) ODX",
                "type": "PMS",
                "website": "www.the-ascott.com"
            },
            {
                "availSuccess": 0.95,
                "bookSuccess": 0.95,
                "company": "Tokeet",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Tokeet Channel Manager",
                "type": "CRS",
                "website": "www.tokeet.com"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 1.0,
                "company": "Tosom srl",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Booking Evolution",
                "type": "CM",
                "website": "www.bookingevolution.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.91,
                "company": "Tourisoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Globres",
                "type": "CM",
                "website": "http://www.hotel-spider.com"
            },
            {
                "availSuccess": 0.92,
                "bookSuccess": 0.97,
                "company": "Tourisoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotel-Spider",
                "type": "CM",
                "website": "http://www.hotel-spider.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "Tourisoft",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hotel-Spider V4",
                "type": null,
                "website": "http://www.tourisoft.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "Tourist Data Shop Ltd",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "TOMAS",
                "type": "CM",
                "website": "www.tomas.travel"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "TourOnline AG",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "DIRS21",
                "type": "CRS",
                "website": "http://www.dirs21.de/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "Toyoko Inn Co., Ltd",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay"
                ],
                "system": "Toyoko Inn Connectivity",
                "type": "CRS",
                "website": "https://www.toyoko-inn.com/eng/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Trading Estate Service srl",
                "featuresSupported": [
                    "Value Add Promotions",
                    "Displays All Point of Sale Brands"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "VRBookings",
                "type": "PMS",
                "website": "www.vrbookings.com"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.98,
                "company": "Traiwan",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Traiwan",
                "type": "CM",
                "website": "https://traiwan.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "TravelClick",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "TravelClick Channel Management",
                "type": "CM",
                "website": "http://www.travelclick.com/en/homepage"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "TravelClick",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "TravelClick iHotelier CRS",
                "type": "CRS",
                "website": "www.travelclick.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Travelline",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Travelline Channel Manager",
                "type": "CM",
                "website": "http://travellineus.com"
            },
            {
                "availSuccess": 0.91,
                "bookSuccess": 0.96,
                "company": "Trypid, Inc",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Hoteratus",
                "type": "CRS",
                "website": "www.hoteratus.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "UAB GTI SOLUTIONS",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "YieldPartner Channel Manager",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.73,
                "company": "UniVisit",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Advanced Purchase"
                ],
                "system": "UniVisit CDMS",
                "type": "CM",
                "website": "http://www.univisit.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Update247",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Update247 CM",
                "type": "CM",
                "website": "www.update247.com.au"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 1.0,
                "company": "UseRoss",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Advanced Purchase"
                ],
                "system": "UseRoss EQC",
                "type": "CM",
                "website": "http://useross.com.au/"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 0.87,
                "company": "V3",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "V3 Channel Manager",
                "type": null,
                "website": "NULL"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.96,
                "company": "Vacationspal",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Vacationspal",
                "type": "PMS",
                "website": "http://www.vacationspal.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Vertical Booking",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Booking Blastness",
                "type": "CM",
                "website": "NULL"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Vertical Booking",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Vertical Booking",
                "type": "CM",
                "website": "https://www.verticalbooking.com/en"
            },
            {
                "availSuccess": 0.96,
                "bookSuccess": 1.0,
                "company": "Viato Travel",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure",
                    "Advanced Purchase"
                ],
                "system": "Viato ChannelManager",
                "type": "CM",
                "website": "http://viato.travel"
            },
            {
                "availSuccess": 0.98,
                "bookSuccess": 1.0,
                "company": "Visit Technology",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "BookVisit",
                "type": "CM",
                "website": "www.bookvisit.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.94,
                "company": "Wanda Hotels & Resorts",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "KWS",
                "type": "CRS",
                "website": "https://www.wanda.cn/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.88,
                "company": "Wealthywalker",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Wealthywalker",
                "type": "CM",
                "website": "www.wealthywalker.com"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "Web Data Software, LLC",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "Elliott Realty PMS for EQC",
                "type": "PMS",
                "website": "http://www.webdatasoftware.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "webres GmbH",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Web.res",
                "type": "CRS",
                "website": "www.webres.de"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Welcome Computer Systems",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Welcome Connect",
                "type": "CM",
                "website": "http://welcome-systems.uk"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.97,
                "company": "World Web Technologies",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "WebRezPro-PMS",
                "type": "PMS",
                "website": "https://www.webrezpro.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.99,
                "company": "Wubook Srl",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "WooDoo",
                "type": "CM",
                "website": "http://wubook.net"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.78,
                "company": "Xmedia",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Channel Messenger",
                "type": "CRS",
                "website": "http://www.channelmessenger.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.91,
                "company": "XN Hotel Systems",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival"
                ],
                "system": "XN Hotel Systems",
                "type": "CRS",
                "website": "http://www.xnprotel.com/"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": 0.98,
                "company": "Xotelia",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Xotelia",
                "type": "CM",
                "website": "https://www.xotelia.com/"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 1.0,
                "company": "Xtreeme GmbH",
                "featuresSupported": [
                    "Value Add Promotions"
                ],
                "restrictionsSupported": [],
                "system": "Planyo",
                "type": "CRS",
                "website": "https://www.planyo.com"
            },
            {
                "availSuccess": 0.99,
                "bookSuccess": 0.98,
                "company": "XYZT",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "e-GDS Channel Manager",
                "type": "CM",
                "website": "www.xyzt.pt"
            },
            {
                "availSuccess": 1.0,
                "bookSuccess": null,
                "company": "Yadoken",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "Yadoken",
                "type": "CM",
                "website": "http://www.yadoken.net/"
            },
            {
                "availSuccess": 0.97,
                "bookSuccess": 0.99,
                "company": "Zadego GmbH",
                "featuresSupported": [],
                "restrictionsSupported": [
                    "Minimum Length of Stay",
                    "Maximum Length of Stay",
                    "Closed to Arrival",
                    "Closed to Departure"
                ],
                "system": "easybooking / zadego GmbH",
                "type": "CRS",
                "website": "https://www.easybooking.at/en/"
            },
            {
                "availSuccess": 0.94,
                "bookSuccess": 0.95,
                "company": "ZARI (Yellotravel Inc.)",
                "featuresSupported": [],
                "restrictionsSupported": [],
                "system": "ZARI",
                "type": "PMS",
                "website": "http://zari.me"
            }
        ]
    ;

    var details = new Vue({
        el: '#system-details',
        data: {
            system: '',
            company: '',
            type: '',
            availableFeatures: [
                "PCI Attestation Supplied",
                "Property API",
                "Product API",
                "Value Add Promotions",
                "Displays All Point of Sale Brands"
            ],
            availableRestrictions: [
                "Full Pattern Length of Stays: Arrival",
                "Closed to Arrival",
                "Closed to Departure",
                "Full Pattern Length of Stays: Stay-Through",
                "Minimum Length of Stay",
                "Maximum Length of Stay",
                "Advanced Purchase"
            ]
        },
        computed: {
            numFeaturesSupported: function() {
                var n = 0;
                for (var i in this.availableFeatures) {
                    if (this.featureSupported(this.availableFeatures[i])) {
                        n++;
                    }
                }
                return n;
            },
            numRestrictionsSupported: function() {
                var n = 0;
                for (var i in this.availableRestrictions) {
                    if (this.restrictionSupported(this.availableRestrictions[i])) {
                        n++;
                    }
                }
                return n;
            }
        },
        methods: {
            open: function(p) {
                this.system = p['system'];
                this.company = p['company'];
                this.type = p['type'];
                this.featuresSupported = p['featuresSupported'];
                this.restrictionsSupported = p['restrictionsSupported'];
                $(this.$el).foundation('open');
                Foundation.reInit('equalizer');
            },
            featureSupported: function(f) {
                return this.featuresSupported && this.featuresSupported.indexOf(f) >= 0;
            },
            restrictionSupported: function(r) {
                return this.restrictionsSupported && this.restrictionsSupported.indexOf(r) >= 0;
            }
        },
        mounted: function() {
            $(this.$el).foundation();
        }
    });
    var app = new Vue({
        el: '#systems-list',
        data: {
            country: '',
            language: '',
            typeCM: false,
            typePMS: false,
            typeCRS: false,
            liveSupport: false,
            productUpdate: false,
            sortedBy: 'score',
            providers: [],
        },
        methods: {
            filteredByType: function(p) {
                if (this.typeCM || this.typePMS || this.typeCRS) {
                    return !((this.typeCM && p.type == 'CM') || (this.typePMS && p.type == 'PMS') || (this.typeCRS && p.type == 'CRS'));
                }
                return false;
            },
            sortBySystem: function(a, b) {
                var x = a['system'].toLowerCase();
                var y = b['system'].toLowerCase();
                return (x < y) ? -1 : (x > y) ? 1 : 0;
            },
            sortByCompany: function(a, b) {
                var x = a['company'].toLowerCase();
                var y = b['company'].toLowerCase();
                return (x < y) ? -1 : (x > y) ? 1 : 0;
            },
            sortByScore: function(a, b) {
                var x = parseFloat(a['score']);
                var y = parseFloat(b['score']);
                return y - x; // desc
            },
            setProviders: function(p) {
                this.providers = p;
                this.sort(this.providers, this.sortedBy);
            },
            sort: function(p, field) {
                switch (field) {
                    case 'system':
                        p.sort(this.sortBySystem);
                        break;
                    case 'company':
                        p.sort(this.sortByCompany);
                        break;
                    case 'score':
                        p.sort(this.sortByScore);
                        break;
                }
            },
            show: function(p) {
                details.open(p);
            },
            onResize: function() {
                var main = $('#systems-list .filter');
                var side = $('#off-canvas .filter');

                if (main.is(":visible")) {
                    $('#off-canvas').foundation('close');
                    if (main.children().length == 0) {
                        side.children().detach().appendTo(main);
                    }
                } else {
                    if (side.children().length == 0) {
                        main.children().detach().appendTo(side);
                    }
                }
            },
            onScroll: function() {
                // Can be in off-canvas
                var fill = $('.systems .filter .fill');
                var h = fill.height();
                var d = 0;
                if (fill.parents('#off-canvas').length == 0) {
                    var ref = $(this.$el).find('.list');
                    d = ref.height() - (fill.parent().height() - h);
                    if (d < 1) {
                        d = 0;
                    }
                }
                if (Math.abs(d - h) > 1) {
                    fill.height(d);
                }
            }
        },
        computed: {
            filteredProviders: function() {
                var results = [];
                for (i in this.providers) {
                    var p = this.providers[i];
                    if (this.filteredByType(p)) {
                        continue;
                    }
                    results.push(p);
                }
                return results;
            }
        },
        watch: {
            sortedBy: function(val) {
                this.sort(this.providers, val);
            }
        },
        mounted: function() {
            $(this.$el).foundation();
            this.onResize();
            this.onScroll();
        }
    });
    app.setProviders(allProviders);
    $(window).resize(function() {
        clearTimeout(app.resizeTimer);
        app.resizeTimer = setTimeout(function() { app.onResize(); }, 100);
    });
    $(window).scroll(function() {
        clearTimeout(app.scrollTimer);
        app.scrollTimer = setTimeout(function() { app.onScroll(); }, 100);
    });

    return {
        init: function () {}
    }

});
