class Ui {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // this method will display the user's info, but WILL NOT display repos
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
    `;
  }

  // method to clear the profile section if the search query does not match an existing github user
  clearProfile () {
    this.profile.innerHTML = ``;
  }

  showAlert () {
    // clear out alerts
    this.clearAlerts();
    
    // create the alert html element
    const div = document.createElement('div');
    div.className('alert alert-danger');
    div.appendChild(document.createTextNode('Profile was not found!'));

    // grab the card with the class of search
    const searchCard = document.querySelector('.search');

    // grab the container where the alerts will be displayed
    const searchContainer = document.querySelector('.search-container');

    // insert the alert
    searchContainer.insertBefore(div, searchCard);

    // remove the alert after 3 secs
    setTimeout(() => this.clearAlerts, 3000);
  }

  clearAlerts () {
    // grab the alerts
    const alerts = document.querySelector('.alert');

    // if there is an alert, remove it
    if (alerts) {
      alerts.remove();
    }
  }
}