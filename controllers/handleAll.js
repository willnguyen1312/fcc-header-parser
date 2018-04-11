const matchAll = require("string.prototype.matchall");

function hello(ctx) {
  const language = ctx.header["accept-language"];
  const agent = ctx.header["user-agent"];
  const software = agent.substring(agent.indexOf("(") + 1, agent.indexOf(")"));
  ctx.body = {
    ipaddress: ctx.ip,
    language: language.slice(0, language.indexOf(",")),
    software
  };
}

module.exports = {
  hello
};
