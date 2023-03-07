
// // curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
// // -d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
// // %2F%2Flocalhost:3000 https://accounts.spotify.com/api/token

// const getRefreshToken = async () => {

//     const params = {
//         grant_type: "authorization_code",
//         code: "AQDCDW-YuETene_JKxq3HBi6rha4sARIfXpGGBq2Y0WQK7RxB8lGWzz5EQpAAUeQ_ZECKE6mg8P7YbnblPpSpktJXCWW4AwUmA2Ds2KF_1o3YpawD_9T6kV3qVI8iwrS_kDqdOIHnWt2mAvEzrx0yMhxj1t5mZua7cXE04kJTnp9q8H6Sy5_wVBkXrLNtewnasEwkJsWgxPYKxf0u3uqbiGgOabT",
//         redirect_uri: "http%3A%2F%2Flocalhost:3000"
//     }

//     const body = Object.keys(params)
//     .map((key) => {
//       const encodedKey = encodeURIComponent(key);
//       const encodedValue = encodeURIComponent(params[key]);
//       return `${encodedKey}=${encodedValue}`;
//     })
//     .join("&");


//     try{
//     const url = "https://accounts.spotify.com/api/token";
//     const CLIEND_ID = "68791faae9424a7fb710cde2ee996e87"
//     const SECRET  = "e7d2cfa60b0e4b66a5f089af182cb883"

//     const base64 = Buffer.from(`${CLIEND_ID}:${SECRET}`).toString("base64");
//     console.log("base64", base64) //Njg3OTFmYWFlOTQyNGE3ZmI3MTBjZGUyZWU5OTZlODc6ZTdkMmNmYTYwYjBlNGI2NmE1ZjA4OWFmMTgyY2I4ODM=

//     const headers = {
//         Authorization: `Basic ${base64}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//     }
//     const response = await fetch(url, {
//         method: "POST",
//         headers,
//         body
        
//     });

//      console.log(response);
//     if(!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
//     }

//     const data = await response.json();

//     return data;
// } catch (error) {
//     console.log(error)
// }
// }

// async function main() {
//     const data = await getRefreshToken();
//     console.log(data);
// }

// main();

/**
 * NOTES
 */







curl -d client_id=68791faae9424a7fb710cde2ee996e87 -d client_secret=e7d2cfa60b0e4b66a5f089af182cb883 -d grant_type=authorization_code -d code=AQCsH_Dn6m36mgjc8qGcww9UgtlNlw4m88n3sjpNg0J4ILt4DKNhUmeXYowYvleF6DNqtF1qQqBk1FRiN_FzWlsPEvlgEsc_ohugPG461cCqd2S7qeEh4baES3xO8fzOmU8JkZRL4J4FIsROC-z4hd7iIO7UKu-QmoUHx-PqY740bDMjSU0zq-fdKOhkgfWoYgqsZYDw1WM6e2dnzn1CGYyHd4FC -d redirect_uri=http://localhost:3000 https://accounts.spotify.com/api/token

BQAmmi-RJOReSQta0ZbLFQ0MP7E2Hxr32A55ElhT2a7ANyhmmXq_7j8PqaArYbbA_uEQrP5L_SrqAFP3bp277A6ANs7tcSfP6TQ2C-4Qid_LjribMO_95u-SUnvmhNwbzs9hpWhqf7oI8pGSXN8ivKp4yAMhSFA7FPNpaMUeuR2sfrcKx4cb664
{"access_token":"BQAmmi-RJOReSQta0ZbLFQ0MP7E2Hxr32A55ElhT2a7ANyhmmXq_7j8PqaArYbbA_uEQrP5L_SrqAFP3bp277A6ANs7tcSfP6TQ2C-4Qid_LjribMO_95u-SUnvmhNwbzs9hpWhqf7oI8pGSXN8ivKp4yAMhSFA7FPNpaMUeuR2sfrcKx4cb664","token_type":"Bearer","expires_in":3600,"refresh_token":"AQAPOHdvsjsFBmqD8tHyRZfrIMp0fAabHFGxwY5qUV-6tOge8IA5iI2OFCgb2CgpUmkynk-D3ThfIecJ6jB7do3PySrqrABQj312D3BI_e8kQBoG5FjrNBhc3k3FpgM8KlQ","scope":"user-read-currently-playing user-top-read"}