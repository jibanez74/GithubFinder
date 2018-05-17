class Github {

  constructor () {
    this.client_id = 'ead3f9f29dbe627f300e';
    this.client_secret = '9d9d89d1545d03e7cecbe51abd91068a4b204e81';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser (user) {
    // url for user info
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // url for user repos
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return { profile, repos }
  }

}