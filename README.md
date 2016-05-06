# Emilia
[![Circle CI](https://img.shields.io/circleci/project/pine/Emilia/master.svg?style=flat-square)](https://circleci.com/gh/pine/Emilia)
[![Dependency Status](https://img.shields.io/david/pine/Emilia.svg?style=flat-square)](https://david-dm.org/pine/Emilia)
[![devDependency Status](https://img.shields.io/david/dev/pine/Emilia.svg?style=flat-square)](https://david-dm.org/pine/Emilia#info=devDependencies)


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
