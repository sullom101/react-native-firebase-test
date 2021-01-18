const apiEntry = 'https://launchlibrary.net/1.4';

export default class fetchLauncheApi {
  static apiEntry = apiEntry;

  static async fetchData(endpoint) {
    const url = `${apiEntry}/launch/${endpoint}`;
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log('***JSON API**', json);
        return json;
      });
  }

  static async fetchMission(id) {
    const url = `${apiEntry}/mission/${id}`;
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log('***JSON API**', json);
        return json;
      });
  }

  static async fetchLaunchStatus(id) {
    const url = `${apiEntry}/launchstatus/${id}`;
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log('***JSON API**', json);
        return json;
      });
  }
}
