const isAuthenticated = false;
const access_token= "";
const user_id= "";
let paymentDetails ={
    mileage:"",
    origin: "",
    color: "",
    purpose_of_use: "",
    accidents: "",
    maintenance_history: "",
    certified: "",
    modified: "",
    Service_Contract: "",
    warranty: "",
    ct_score: "",
    manufacturer_id: "",
    model_id: "",
    year_id: "",
    trim_id: "",
    plate_no: "",
};


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
    this.isAuthenticated = false;
    this.access_token = "";
    // clear localStorage
    localStorage.removeItem("auth");
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
    }
  }