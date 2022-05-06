window.onload = function () {

    const defaultLiffId = "1588829646-2oD6Xl03";   // change the default LIFF value if you are not using a node server

    // DO NOT CHANGE THIS
    let myLiffId = "";

    myLiffId = defaultLiffId;
    initializeLiffOrDie(myLiffId);

};
var uid ;
/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {

    initializeLiff(myLiffId);

}

/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {

        });
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {


    // check if the user is logged in/out, and disable inappropriate button
    if (liff.isLoggedIn()) {
        //document.getElementById('liffLogin').style.display = '';
        //document.getElementById('liff').style.display = 'none';


        liff.getProfile().then(function (profile) {
            //document.getElementById('userIdProfileField').textContent = profile.userId;
            //document.getElementById('displayNameField').textContent = profile.displayName;
            uid = profile.userId;
            //const profilePictureDiv = document.getElementById('profilePictureDiv');
            //if (profilePictureDiv.firstElementChild) {
            //    profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            //}
            //const img = document.createElement('img');
            //img.src = profile.pictureUrl;
            //img.style = "max-width:100%;"
            //img.alt = 'Profile Picture';
            //profilePictureDiv.appendChild(img);



            //document.getElementById('statusMessageField').textContent = profile.statusMessage;
            //toggleProfileData();
        }).catch(function (error) {
            window.alert('Error getting profile: ' + error);
        });
    }



}

function login(){
    $.post("login.do",{uid:uid}).done(function(){
        /*liff.sendMessages([{
                type: 'text',
                text: 'Hello, World!',
            }, ])
            .then(() => {
                window.alert('Message sent');
            })
            .catch((error) => {
                window.alert('Error sending message: ' + error);
            });*/
        liff.closeWindow();
    });
    
}