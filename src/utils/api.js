import { getFirebase } from 'react-redux-firebase';

const API = {
    firebase: () => {
        const firebase = getFirebase();
        return firebase;
    },
    sendMail: (name, email, content, success) => {
        const firebase = API.firebase();
        firebase.database().ref(`/messages`).push().set({
            name: name,
            email: email,
            content: content
        }, err => {
            if(err) {
                success("We can't send the message");
            } else {
                success("Sent a message");
            }
        })
    },
    getData: (galleryName, success) => {
        const firebase = API.firebase();
        firebase.database().ref(`/${galleryName}`).once('value',
            (snapshot) => {
                success(snapshot.val());
            }, (err) => {
                success([]);
        });
    },
    getImages: (galleryName, photosId, success) => {
        const firebase = API.firebase();
        let urlImages = [];
        for (let item of photosId) {
            let imageRef = firebase.storage().ref().child(`/${galleryName}/${item}`);
            imageRef.getDownloadURL().then(function(url) {
                let objectImage = {};
                objectImage.imageUrl = url;
                objectImage.id = imageRef.name;
                urlImages.push(objectImage)
                success(urlImages);
            }).catch(function(err) {
                success([])
            })
        }
    }
}

export default API;
