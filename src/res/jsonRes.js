import images from './images';
import strings from './strings';

const jsonRes = {
    categories: [
        {name: strings.categories.configurator, image: images.categories.hekto_logo},
        {name: strings.categories.settings, image: images.categories.settings},
        {name: strings.categories.usedMachines, image: images.categories.usedMachines},
        {name: strings.categories.service, image: images.categories.service},
        {name: strings.categories.mediaLibrary, image: images.categories.mediaLibrary},
        {name: strings.categories.offerManagement, image: images.categories.offerManagement},
        {name: strings.categories.userManagement, image: images.categories.userManagement},
        {name: strings.categories.priceLists, image: images.categories.priceLists}
    ]
}

export default jsonRes;
