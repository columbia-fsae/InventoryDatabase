const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp();

exports.addAsAdmin = functions.https.onCall((data, context) => {
    parsedData = JSON.parse(data);
    // check request is made by an admin
    if ( context.auth.token.admin !== ture ) {
      return {
        error: 'Only admins can add other admins.'
        }
    };
    // get user and add custom claim to user (admin)
    // get user by email address first
    return admin.auth().getUserByEmail(parsedData.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message: `Success! ${parsedData.email} has been made an admin.`
        }
    }).catch(err => {
        return err;
    });
});