# Vozo Bot Demo

## Overview

Vozo Bot is a Slack bot that I built using Node.js and Slack Bolt. This Vozo Bot is hosted on Hack Club Nest. It runs all the time, twenty four hours a day seven days a week.

## Features

### `/vozo-ping`

This Vozo Bot command checks how long it takes for Vozo Bot to respond.

Example:

```text

/vozo-ping

🏓 Pong!

Latency:

```

### `/vozo-help`

This Vozo Bot command shows you all the things Vozo Bot can do.

Example:

```text

/vozo-help

🤖 Vozo Bot Commands

/vozo-ping. Check how long it takes for Vozo Bot to respond

/vozo-joke. Get a joke from Vozo Bot

/vozo-catfact. Get a random cat fact from Vozo Bot

/vozo-help. Show all Vozo Bot commands

```

### `/vozo-joke`

This Vozo Bot command gives you a joke.

Example:

```text

/vozo-joke

😂 I dropped a pear in my car this morning.

You should drop another one then you would have a pair.

```

### `/vozo-catfact`

This Vozo Bot command gives you a fact about cats.

Example:

```text

/vozo-catfact

🐱 Julius Caesar, Henri II Charles XI and Napoleon were all afraid of cats.

```

## Deployment

This Vozo Bot is deployed on Hack Club Nest using systemd so Vozo Bot stays online all the time even when my computer is turned off.

## Repository

You can find the source code, for Vozo Bot here:

https://github.com/harshitsuthar839-sys/vozobot
