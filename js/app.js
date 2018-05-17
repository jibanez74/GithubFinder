// init Github class
const github = new Github;

// form input value
const searchUser = document.getElementById('searchUser');


// init event listener
searchUser.addEventListener('keyup', (e) => {

  // get input value
  const searchStr = e.target.value;

  if (searchStr !=== '') {
    github.getUser(searchStr)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert
        } else {
          // show profile
        }
      });
  } else {
    // clear profile
  }


});