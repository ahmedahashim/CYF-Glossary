export class Fetcher {
  constructor(url = 'https://cyf-glossary-api.glitch.me/api') {
    this.url = url
  }
  // Getter
  get getURL() {
    return this.url;
  }



  async fetchTermByPath(props) {
    const { match: { params } } = props;
    const url = `${this.url}/singleterm?term=${params.term}&topic=${params.topic}`
    console.log(url);
    var response = await fetch(url)
    response =  await response.json()
  return response
  }


  async fetchTermsByParams(props) {
    const { match: { params } } = props;
    const url = `${this.url}/search?query=${params.query}`
    var response = await fetch(url)
    response =  await response.json()
  return response
  }

}
