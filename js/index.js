// to select inputs from html code 
var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');
// we make array for store all of objects 
var websiteArray;
// this for local storage 

if(localStorage.getItem('website') == null){

 websiteArray = [];

}
else{
  websiteArray = JSON.parse(localStorage.getItem('website'));
  displaySite();
  
}

// this function to add button 
function addWebsite(){
  var website = {
   siteName: siteNameInput.value,
   siteUrl : siteUrlInput.value
  }
  // to add last object into array 
  websiteArray.push(website);
  
// to display array 
  console.log(websiteArray);
  clearForm();
  displaySite();
  
}
// to clear form for better user Interface 
function clearForm(){
  siteNameInput.value = '';
  siteUrlInput.value ='';

}
// for display website information 
function displaySite(){
  var siteList = '' ;

  for(i=0; i < websiteArray.length ; i++ ){
    // to collect all divs in one variable 
    siteList += `
      <tbody>
        <tr>
            <th scope="row">${i+1}</th>
            <td>${websiteArray[i].siteName}</td>
            <td><button class="btn btn-success" onclick ='visitWebsite();'>Visit</button></td>
            <td><button class="btn btn-danger" onclick='deleteWebsite(${i});'>Delete</button></td>
          </tr>
          <tr>


      </tbody>`

  }
  // to replace code in html into variable i use for collect divs 
  document.getElementById('rowData').innerHTML = siteList;
  // this for add product in local storage and we used JSON.stringify to set in local storage string 
  localStorage.setItem('website',JSON.stringify(websiteArray))
  // to delete function 


}
// this function for delete button 
function deleteWebsite(i){ 
 websiteArray.splice(i,1);
  displaySite();


}
// this function for button visit 
function visitWebsite(){
// to get the url from array and open in new tab




}






// anta wa2f 3and el visit button 