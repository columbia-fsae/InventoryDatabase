const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');

// set up UI
const setupUI = (user) => {
    if (user) {
        if(user.admin) {
            adminItems.forEach(item => item.style.display = 'block');
        }
        //account info
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <div> Logged in as ${user.email}</div><br>
            <div> System: ${doc.data().bio}</div><br>
            <div class="blue-text"> ${user.admin ? 'Admin' : ''}</div>
            `;
            accountDetails.innerHTML = html;
        })
        
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = "block");
        loggedOutLinks.forEach(item => item.style.display = "none");
    } else {
        adminItems.forEach(item => item.style.display = 'none');
        // hide account info
        accountDetails.innerHTML = '';
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = "none");
        loggedOutLinks.forEach(item => item.style.display = "block");
    }
}

// setup guides
const setupGuides = (data) => {
    // check if there is any length on the data (logged in users)
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            console.log(guide);
            const li = `
                <li>
                    <div class="collapsible-header grey lighten-4">${guide.title}</div>
                    <div class="collapsible-body white">${guide.content}</div>
                </li>
            `;
            html += li;
        });
        guideList.innerHTML = html;
    } else {
        guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });