import images from './images';
import strings from './strings';
import { 
    OptionType, 
    MachineType, 
    DescribeView, 
    OfferView,  
    UserForm,
    DealerView,
    FinalView
} from '../components/Page/MachineConfigure/ContentView'

export const jsonRes = {
    categories: [
        {name: strings.categories.configurator, image: images.categories.hekto_logo},
        {name: strings.categories.settings, image: images.categories.settings},
        {name: strings.categories.usedMachines, image: images.categories.usedMachines},
        {name: strings.categories.service, image: images.categories.service},
        {name: strings.categories.mediaLibrary, image: images.categories.mediaLibrary},
        {name: strings.categories.offerManagement, image: images.categories.offerManagement},
        {name: strings.categories.userManagement, image: images.categories.userManagement},
        {name: strings.categories.priceLists, image: images.categories.priceLists}
    ],
    trailers: [
        {name: strings.trailers.dreiseitenkipper, image: images.trailers.dreiseitenkipper},
        {name: strings.trailers.dumptruck, image: images.trailers.dumptruck},
        {name: strings.trailers.hooklift, image: images.trailers.hooklift},
        {name: strings.trailers.pusher, image: images.trailers.pusher},
        {name: strings.trailers.platformtrailer, image: images.trailers.platformtrailer},
        {name: strings.trailers.frontend, image: images.trailers.frontend},
    ],
    suspensions: [
        {name: strings.suspensions.singleAxle, image: images.suspensions.singleAxle},
        {name: strings.suspensions.twoAxles, image: images.suspensions.twoAxles},
        {name: strings.suspensions.threeAxles, image: images.suspensions.threeAxles},
        {name: strings.suspensions.tandem, image: images.suspensions.tandem}
    ]
}

const content = {
    name: 'MainScreen',
    step1: {
        stepNumber: 1,
        title: 'Welche Art von Anhänger interessiert Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {
                name: strings.trailers.dreiseitenkipper, 
                image: images.trailers.dreiseitenkipper,
            },
            {
                name: strings.trailers.dumptruck, 
                image: images.trailers.dumptruck,
            },
            {
                name: strings.trailers.hooklift, 
                image: images.trailers.hooklift
            },
            {
                name: strings.trailers.pusher, 
                image: images.trailers.pusher
            },
            {
                name: strings.trailers.platformtrailer, 
                image: images.trailers.platformtrailer
            },
            {
                name: strings.trailers.frontend, 
                image: images.trailers.frontend
            },
        ],
        multiSelection: false
    },
    step2: {
        stepNumber: 2,
        title: 'Welche Art von Fahrwerk benötigen Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {
                name: strings.suspensions.singleAxle, 
                image: images.suspensions.singleAxle
            },
            {
                name: strings.suspensions.twoAxles, 
                image: images.suspensions.twoAxles
            },
            {
                name: strings.suspensions.threeAxles, 
                image: images.suspensions.threeAxles
            },
            {
                name: strings.suspensions.tandem,
                image: images.suspensions.tandem
            }
        ],
        multiSelection: false
    },
    step3: {
        stepNumber: 3,
        title: 'Welches zulässiges Gesamtgewicht wird benötigt?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: OptionType,
        data: [
            {name: '6 Tonnen'},
            {name: '8 Tonnen'},
            {name: '10 Tonnen'},
            {name: '14 Tonnen'},
            {name: '18 Tonnen'}
        ],
        multiSelection: false
    },
    step4: {
        stepNumber: 4,
        title: 'Gibt es besondere Anforderungen an die Abmessungen?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: OptionType,
        data: [
            {name: 'Ja', nextStep: 5},
            {name: 'Nein', nextStep: 6}
        ],
        multiSelection: false
    },
    step5: {
        stepNumber: 5,
        title: 'Welche Anforderungen haben Sie?',
        subtitle: 'Bitte beschreiben Sie Ihre Anforderungen.',
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        design: DescribeView,
        multiSelection: false,
    },
    step6: {
        stepNumber: 6,
        title: 'Welches Bordwandhöhe wünschen Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: OptionType,
        data: [
            {name: '800 mm'},
            {name: '1.000 mm'},
            {name: '1.300 mm'},
            {name: '1.500 mm'},
            {name: '1.800 mm'},
        ],
        multiSelection: false
    },
    step7: {
        stepNumber: 7,
        title: 'Welche Art von Bordwand wünschen Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {name: 'Horizontal geteilte Bordwand', image:''},
            {name: 'Horizontal ungeteilte Bordwand', image:''},
            {name: 'Durchgehend geteilte Bordwand', image:''},
            {name: 'Durchgehend ungeteilte Bordwand', image:''},
            {name: 'HorizPortalfunktion', image:''},
        ],
        multiSelection: false
    },
    step8: {
        stepNumber: 8,
        title: 'Aus welchen Material sollen die Bordwände bestehen?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {name: 'Mehrschichtholz', image:''},
            {name: 'Kunststoff', image:''},
            {name: 'Stahl', image:''}
        ],
        multiSelection: false
    },
    step9: {
        stepNumber: 9,
        title: 'Welche Option wird zusätzlich für den Aufbau benötigt?',
        subtitle: 'Mehrfachauswahl möglich.',
        design: MachineType,
        data: [
            {name: 'Abnehmbare Kippbrückenverlängerung', image:'', selected: false},
            {name: 'Fernentriegelung', image:'', selected: false},
            {name: 'Rollplane', image:'', selected: false},
            {name: 'Keine', image:'', selected: false},
        ],
        multiSelection: true
    },
    step10: {
        stepNumber: 10,
        title: 'Welche Option wird zusätzlich zum Fahrgestell benötigt?',
        subtitle: 'Mehrfachauswahl möglich.',
        design: MachineType,
        data: [
            {name: 'Mehrfachauswahl möglich.', image:''},
            {name: 'Kunststoffkotflügel', image:''},
            {name: '60 km/h Zulassung', image:''},
            {name: 'Zugmaul', image:''},
            {name: '40 km/h Zulassung', image:''},
            {name: 'Keine', image:''},
        ],
        multiSelection: true
    },
    step11: {
        stepNumber: 11,
        title: 'Was möchten Sie vorwiegend transportieren?',
        subtitle: 'Mehrfachauswahl möglich.',
        design: MachineType,
        data: [
            {name: 'Erde', image:''},
            {name: 'Mais', image:''},
            {name: 'Getreide', image:''},
            {name: 'Kartoffeln', image:''},
            {name: 'Sonstiges', image:''}
        ],
        multiSelection: true
    },
    step12: {
        stepNumber: 12,
        title: 'Welche Bereifung wünschen Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {name: 'Ackerbereifung', image:''},
            {name: 'Grobe Ackerbereifung', image:''},
            {name: 'Straßenbereifung', image:''},
            {name: 'Große Straßenbereifung', image:''},
            {name: 'Standard', image:''},
            {name: 'Andere', image:''}
        ],
        multiSelection: false
    },
    step13: {
        stepNumber: 13,
        title: 'Angebot Nr. 218101111',
        subtitle: 'HKD 402',
        design: OfferView,
        data: [
            {
                type: 'A0624', 
                product: 'Bordwände mit Kunststoff-Leichtbauplatten 20mm stark, Bordwandhöhe 1700mm, (Farbe weiß oder in Verbindung mit L 1204;', 
                price: '2.250,00 €'
            },
            {
                type: 'A4024', 
                product: 'hydraulische Bordwandfernentriegelung für Rückwand', 
                price: '333,00 €'
            },
            {
                type: 'A6004', 
                product: 'Aufsteckdreiecke vorne und hinten (300mm) + 2x Mitteldreieck mit abklappbarem Spriegelbaum', 
                price: '222,00 €'
            }
        ],
        multiSelection: false,
        noBasket: true
    },
    step14: {
        stepNumber: 14,
        title: 'Kontaktdaten',
        subtitle: 'Bitte geben Sie Ihre Kontaktdaten an.',
        design: UserForm,
        multiSelection: false,
        noBasket: true
    },
    step15: {
        stepNumber: 15,
        title: 'Händlerauswahl',
        subtitle: 'Bitte wählen Sie einen Händler aus.',
        design: DealerView,
        data: [
            {
                dealer: 'Agrartechnik Altenberg Berndt Bäumer',
                phone: '+49 (0) 169 363 37',
                email: 'bbäumer@agrartechnik-altenberg.com',
                address: 'Kümperstiege 2 48341 Altenberge'

            },
            {
                dealer: 'Agrartechnik Altenberg Berndt Bäumer',
                phone: '+49 (0) 169 363 37',
                email: 'bbäumer@agrartechnik-altenberg.com',
                address: 'Kümperstiege 2 48341 Altenberge'

            },
            {
                dealer: 'Agrartechnik Altenberg Berndt Bäumer',
                phone: '+49 (0) 169 363 37',
                email: 'bbäumer@agrartechnik-altenberg.com',
                address: 'Kümperstiege 2 48341 Altenberge'

            },
            {
                dealer: 'Agrartechnik Altenberg Berndt Bäumer',
                phone: '+49 (0) 169 363 37',
                email: 'bbäumer@agrartechnik-altenberg.com',
                address: 'Kümperstiege 2 48341 Altenberge'

            }
        ],
        multiSelection: false,
        noBasket: true
    },
    step16: {
        stepNumber: 16,
        title: 'Vielen Dank für Ihre Anfrage',
        subtitle: 'Sie erhalten in Kürze eine Bestätigung per Mail.',
        design: FinalView,
        data: [
            {name: 'Zurück zur Startseite', image: images.icons.settlementOffer, redirect: '/home'},
            {name: 'Vergleichsangebot', image: images.icons.backToHome, redirect: '/machine-configure'}
        ],
        multiSelection: false,
        noBasket: true
    }
    
}

export default content;
