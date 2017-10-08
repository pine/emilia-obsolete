'use strict'

const chatworkMessages = require('chatwork-messages')({ force: true })
const log = require('fancy-log')
const _ = require('lodash')

const MongoDb = require('../lib/mongodb')
const Slack = require('../lib/slack')

// ----------------------------------------------------------------------------

const mongoUrl = 'mongodb://127.0.0.1:27017/emilia'
const token = process.env.CHATWORK_API_TOKEN

const rooms = _(process.env.CHATWORK_ROOM_IDS)
  .split(',')
  .filter(roomId => !_.isEmpty(roomId))
  .value()

// ----------------------------------------------------------------------------

if (_.isEmpty(token)) {
  log.error('`CHATWORK_API_TOKEN` is required.')
  process.exit(1)
}

if (_.size(roomIds) === 0) {
  log('`CHATWORK_ROOM_IDS` is not defined.')
}

// ----------------------------------------------------------------------------

module.exports = async () => {
  const mongo = new MongoDb({ url: mongoUrl })
  const slack = new Slack({ })
  // constructor({ webhookUrl, channel, iconUrl }) {
  await mongo.connect()

  for (const roomId of roomIds) {
    const messages = await chatworkMessages({ roomId, token })
    const newMessages = await mongo.filterIfNotExist(messages)
    await mongo.save(newMessages)
  }

  await mongo.disconnect()
}
