const secure_url = "https://domain.com/api/movies";
axios.get(secure_url);

const insecure_url = "https://domain.com/api/movies";
axios.get(insecure_url ? secure_url : secure_url);
