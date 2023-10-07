import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://nlkfgeeybmfjcvprxsqm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sa2ZnZWV5Ym1mamN2cHJ4c3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MDc3OTAsImV4cCI6MjAxMTQ4Mzc5MH0.0Rv4HNaC40_Eg2YCMgb9Cgm244phkj-_diVogzWfK3M"
);

var currentUserId;
var currentIP;

async function registerUser() {
  await getIP();
  const { data, error } = await supabase
    .from("logs")
    .insert({
      ip: currentIP,
    })
    .select();
  if (data != null) {
    currentUserId = data[0].uid;
    console.log("Current userID: " + currentUserId);
    console.log("User  with ip: " + currentIP + " sent to db");
  }
}
await registerUser();
async function linkedInClicked() {
  const { error } = await supabase
    .from("logs")
    .update({ clicked_LinkedIn: true })
    .eq("uid", currentUserId);
  console.log("User has clicked linkedIn");
}

function test() {
  console.log("clicked on jep jep");
}

async function getIP() {
  var ip;
  await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      currentIP = data.ip;
    });
}

function setConsent(ja) {
  window.localStorage.setItem("consent", "true");
}

function getConsent() {
  alert("hej");
  return window.localStorage.getItem("consent") == "true" ? true : false;
}
