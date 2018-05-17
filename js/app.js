// init class Github
const github = new Github;

// init Ui class
const ui = new Ui;

// grab search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

  // grab the text from input
  const query = e.target.value;

  // evaluate query variable and execute the appropriate methods
  if (query !== '') {
    // make api request
    github.getUser(query).then(data => {
      if (data.profile.message === 'Not Found') {
        // display an alert to indicate that no profile matches the query entered
        ui.showAlert();
      } else {
        // display basic profile info
        ui.showProfile(data.profile);
      }
    });
  } else {
    // if query does not match any user/profile, clear profile section
    ui.clearProfile();
  }

});