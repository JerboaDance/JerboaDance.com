const photos = [
    {
        uri:"company/JaimeWaliczek.jpg",
        photographerId:"WarrenWoo" 
    },
    {
        uri:"company/ChelseaReinschmidt.jpg",
        photographerId:"WarrenWoo" 
    },
    {
        uri:"performances/AnimalNature.jpg",
        photographerId:"LaurenWhite"
    }
];

const photographers = {
    WarrenWoo: {
        name: "Warren Woo",
        website: "https://www.warren-woo.com/"
    },
    LaurenWhite: {
        name: "Lauren White"
    }
}

export function findByUri(uri) {
    // TODO make this match subpaths via regex and be caseinsensitive
    const matchingPhotos = photos.filter( photo => photo.uri === uri);
    const photoCredit = {};
    if (matchingPhotos.length > 0) {
        photoCredit.photographer = photographers[matchingPhotos[0].photographerId]
    }
    return photoCredit;
}

export default {findByUri};