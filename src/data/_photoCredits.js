const photos = [
    {
        uri:"company/JaimeWaliczek.jpg",
        photographerId:"WarrenWoo" 
    },
    {
        uri:"company/ChelseaReinschmidt.jpg",
        photographerId:"WarrenWoo" 
    }
];

const photographers = {
    WarrenWoo: {
        name: "Warren Woo",
        website: "https://www.warren-woo.com/"
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

// TODO add a function to get more than one photocredit at a time?

export default {findByUri};