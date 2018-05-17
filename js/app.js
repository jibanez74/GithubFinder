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
    github.getUser(query).then(data => {
      if (data.profile.message === 'Not Found') {
        console.log('not found');
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    console.log('clear profile');
  }

});