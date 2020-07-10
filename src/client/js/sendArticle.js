export const sendArticle = async ( url = '', data = '')=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },      
    body: JSON.stringify (data),       
  });
// this is the answer from the server which made API call
  try {
    const newData = await response.json();
    // update UI
   document.getElementById('polarity').innerHTML = newData.polarity;
   document.getElementById('subjectivity').innerHTML = newData.subjectivity;
   document.getElementById('polarity_confidence').innerHTML = newData.polarity_confidence;
   document.getElementById('subjectivity_confidence').innerHTML = newData.subjectivity_confidence;
   console.log(newData);
   return true;
  }catch(error) {
    console.log("error", error);
    return false;
  }
}

//window.sendArticle = sendArticle;