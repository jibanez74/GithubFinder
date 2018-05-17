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

  // display repos
  showRepos(repos) {
    let output = ``;

    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks: ${repo.forms_count}</span>
        </div>
      </div>
    </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  // method to clear the profile section if the search query does not match an existing github user
  clearProfile() {
    this.profile.innerHTML = ``;
  }

  showAlerts () {
    // clear any alerts
    this.clearAlerts();

    // create a div html element to hold alert
    const div = document.createElement('div');

    // format the msg that will go inside the alert
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode('No profile matches your query!'));

    // grab the main container
    const searchContainer = document.querySelector('.search-container');

    // grab the class of the search card
    const searchCard = document.querySelector('.search-card');

    searchCard.insertBefore(div, searchContainer);

    setTimeout(() => {
      this.clearAlerts();
    }, 3000);
  }

  // remove alerts from the ui
  clearAlerts () {
    const alerts = document.querySelector('.alert');

    // if the alert is there, remove it
    if (alerts) {
      alerts.remove();
    }
  }
}