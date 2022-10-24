const core = require('@actions/core');
const sslChecker = require("ssl-checker");

// Get inputs
const hostname = core.getInput('hostname');
const port = core.getInput('port' = 443);

async function getDetails() {
  details = await sslChecker(hostname, { method: "GET", port: port });
  // set output
  core.setOutput('details', details);
}

// call getDetails
getDetails(hostname);
