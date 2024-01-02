const isAuthenticated = false;
const access_token= "";
const baseUrl= "https://partner-api.cartrust.sa";
const user_id= "";

function approve(access_token,user_id) {
    this.isAuthenticated = true;
    this.access_token = access_token;
    this.user_id=user_id;
    // set localStorage
    localStorage.setItem(
      "auth",
      JSON.stringify({
        access_token: access_token,
        user_id:user_id,
        isAuthenticated: this.isAuthenticated,
      })
    );
  }

  function reject() {
  
  }

  function retrieveAuth() {
    // get localStorage
    if (
      localStorage.getItem("auth") &&
      JSON.parse(localStorage.getItem("auth"))?.access_token
    ) {
        result= JSON.parse(localStorage.getItem("auth"));
      return {
        isAuthenticated : result.isAuthenticated,
        access_token:result.access_token
        
      }
    }else{

       return {
        isAuthenticated : false,
        access_token:""
      }
    }
}
function logOut(){
  const endpointUrl = `/api/v2/logout`;
  const fullUrl = baseUrl + endpointUrl;

   // Make a POST request
   fetch(fullUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + retrieveAuth().access_token
      },
      
  })
      .then((response) => response.json())
      .then((data) => {
          
        this.isAuthenticated = false;
        this.access_token = "";
        // clear localStorage
        localStorage.clear();
        location.href = "login.html"
      })
      .catch((error) => {
          console.error("Error:", error);
          // Handle errors
      });
}
 function fetchProfile(access_token , redirect_url) {
    const endpointUrl = `/api/v2/profile`;
    const fullUrl = baseUrl + endpointUrl;
    fetch(fullUrl, { 
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
          }
        })
        .then((res) => res.json())
        .then((data) => {

                if (data.profile_found == true) { 
                    location.href= `${redirect_url}.html`;
                }
               else{
                location.href = "sign-up.html"
               }
            
        }).catch(error => {
            console.error('Error fetching data:', error);
        })
        
}
function convertArabicToEnglish(arabicNumber) {
  const arabicNumerals = '٠١٢٣٤٥٦٧٨٩';
  const englishNumerals = '0123456789';

  const arabicToEnglishMap = new Map([...arabicNumerals].map((numeral, index) => [numeral, englishNumerals[index]]));

  return arabicNumber.replace(/[٠-٩]/g, (match) => arabicToEnglishMap.get(match));
}

