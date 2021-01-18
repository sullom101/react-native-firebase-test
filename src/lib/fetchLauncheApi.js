

export const fetchLauncheApi = async () => {
  try {

    let response = await fetch('https://launchlibrary.net/1.4/launch/next/5');
    let json = await response.json();
    console.log('*****', json);
    return json.launches;
  } 
  catch (error) {
    console.error(error);
  }
};
