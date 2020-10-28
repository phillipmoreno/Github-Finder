class GitHub {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const headerResponse = await fetch("./config.json");
    const headers = await headerResponse.json();

    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
