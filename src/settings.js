export let DOMAIN;
export let BASENAME;

if (process.env.NODE_ENV === "production") {
  DOMAIN = "http://52.173.141.79/";
  BASENAME = "/app-boston/build";
} else {
  //DEV
  DOMAIN = "http://localhost:3001/";
  BASENAME = "/";
}