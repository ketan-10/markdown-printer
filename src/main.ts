import './style.css'
import showdown from 'showdown';

const main = async (url?: string | null) => {
  
  if(!url) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    url = urlSearchParams.get('url');
    if (!url) {
      throw 'Please provide a url to convert'
   }
  }

  const response = await fetch(url);
  console.log(response);
  if(response.status !== 200){
    throw `Invalid url ${response.url}`
  }
  const text = await response.text();
  if(!text || text.length === 0){
    throw `Invalid url ${response.url}`
  }
  
  const converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    simpleLineBreaks: true,
    ghMentions: true,
    tables: true
  });
  
  converter.setFlavor('github');  
  return converter.makeHtml(text);
}


const retryMain = async (url?: string | null): Promise<string> => {
  try {
    return await main(url);
  } catch (e) { 
    const newURL = prompt(e as string);
    return await retryMain(newURL); // not sure if await is needed here or not, it will chain anyways. -> https://github.com/ketan-10/Testing/blob/master/coroutine-async-await/retry-promise.js
  }
}

const html = await retryMain(null);
const app = document.querySelector<HTMLDivElement>('#content')!  
app.innerHTML = html;
