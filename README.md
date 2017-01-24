# Emilia
[![CircleCI](https://circleci.com/gh/pine/Emilia/tree/master.svg?style=shield)](https://circleci.com/gh/pine/Emilia/tree/master) [![Dependency Status](https://gemnasium.com/badges/github.com/pine/Emilia.svg)](https://gemnasium.com/github.com/pine/Emilia)

Emilia is a private tool that transfer chat messages from ChatWork to Slack (with [chatwork-to-slack](https://github.com/pine613/chatwork-to-slack) module).

## Getting started
### 1. Create OpenShift Account
### 2. Create OpenShift Application
Cartridges
 - [Custom Node.js cartridge for OpenShift](https://github.com/icflorescu/openshift-cartridge-nodejs)
 - [MongoDB](https://hub.openshift.com/addons/21-mongodb)
 - [Cron](https://hub.openshift.com/addons/26-cron)

### 3. Add environment variables
```
$ rhc env set CHATWORK_ROOM_ID=12345 \
              CHATWORK_API_TOKEN=TOKEN \
              SLACK_WEBHOOK_URL=https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxx \
              SLACK_CHANNEL_NAME=channel \
              SLACK_ICON_URL=http://example.com/icons/chatwork.png -a appname
```

### 4. Deploy
```
$ git remote add deploy ssh://xxxxxxxxxxxxxxxxxxxxxxxx@appname-domain.rhcloud.com/~/git/appname.git/
$ git push deploy master
```

## License
ISC License
