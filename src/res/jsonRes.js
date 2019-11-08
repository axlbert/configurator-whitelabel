import images from './images';
import strings from './strings';
import { OptionType, MachineType, DescribeView } from '../components/Page/MachineConfigure/MachineType'

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
        design: OptionType,
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
            {name: 'Abnehmbare Kippbrückenverlängerung', image:''},
            {name: 'Fernentriegelung', image:''},
            {name: 'Rollplane', image:''},
            {name: 'Keine', image:''},
        ],
        multiSelection: true
    },
    
}

export default content;
