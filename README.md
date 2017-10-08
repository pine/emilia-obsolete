# Emilia
[![CircleCI](https://circleci.com/gh/pine/Emilia/tree/master.svg?style=shield)](https://circleci.com/gh/pine/Emilia/tree/master) [![Dependency Status](https://gemnasium.com/badges/github.com/pine/Emilia.svg)](https://gemnasium.com/github.com/pine/Emilia)

Emilia is a private tool that transfer chat messages from ChatWork to Slack (with [chatwork-messages](https://github.com/pine/chatwork-messages) module).

## Requirements

- Node v`$(cat .node-version)`
- Yarn

## Running Locally

```
$ git clone https://github.com/pine/Emilia.git
$ cd Emilia
$ yarn
$ yarn start
```

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## License
MIT &copy; Pine Mizune
