require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// ======================
// /vozo-ping
// ======================
app.command("/vozo-ping", async ({ ack, respond }) => {
  const start = Date.now();

  await ack();

  const latency = Date.now() - start;

  await respond({
    text: `🏓 Pong!\nLatency: ${latency}ms`
  });
});

// ======================
// /vozo-help
// ======================
app.command("/vozo-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
`🤖 Vozo Bot Commands

/vozo-ping - Check latency
/vozo-joke - Random joke
/vozo-catfact - Random cat fact
/vozo-help - Show commands`
  });
});

// ======================
// /vozo-joke
// ======================
app.command("/vozo-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    await respond({
      text:
`😂 ${response.data.setup}

${response.data.punchline}`
    });
  } catch (error) {
    await respond({
      text: "❌ Failed to fetch a joke."
    });
  }
});

// ======================
// /vozo-catfact
// ======================
app.command("/vozo-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://catfact.ninja/fact"
    );

    await respond({
      text: `🐱 ${response.data.fact}`
    });
  } catch (error) {
    await respond({
      text: "❌ Failed to fetch a cat fact."
    });
  }
});

// ======================
// DM / Message Reply
// ======================
app.message(async ({ message, say }) => {
  if (message.subtype) return;

  await say(
    `Hello <@${message.user}>! 👋\nI am Vozo Bot.\nType /vozo-help to see my commands.`
  );
});

// ======================
// Start Bot
// ======================
(async () => {
  await app.start();
  console.log("🤖 Vozo Bot is running!");
})();