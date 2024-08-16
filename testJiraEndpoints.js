// Update with the correct values with which you want to test the Jira endpoints
const CLOUD_INSTANCE_URL = "";
const JIRA_ENDPOINT = "";
const accountId = "";

export default function testJiraEndpoints(addon) {
  addon.on("host_settings_saved", function (clientKey, data) {
    addon.authenticate(true);
    console.log("host_settings_saved");
    console.log(data);

    const fields = {};

    // By default httpClient makes requests on behalf of the add-on
    // add .asUserByAccountId to make the request on behalf of a user
    const httpClient = addon.httpClient({
      clientKey,
    });
    httpClient.asUserByAccountId(accountId).put(
      {
        url: CLOUD_INSTANCE_URL + JIRA_ENDPOINT,
        json: { fields },
      },
      (err, res, body) => {
        console.log("Response status code:", res.statusCode);
        console.log("Response body:", body);
        console.log("Error:", err);
      }
    );
  });
}
