let data = {
  username: "ellyloel", // No leading @ here
  homeLabel: "ellyloel.com",
  homeUrl: "https://www.ellyloel.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
  data.homeUrl
)}/`;

module.exports = data;
