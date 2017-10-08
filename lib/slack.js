'use strict'

const _ = require('lodash')
const promiseRetry = require('promise-retry')
const sleep = require('promise.sleep')
const { WebClient } = require('@slack/client')
const throat = require('throat')

class Slack {
  constructor({ token, iconUrl }) {
    this.client = new WebClient(token)
    this.iconUrl = iconUrl
  }

  notifyMessages({ channel, messages }) {
    return Promise.all(messages.map(throat(1, message => promiseRetry(async () => {
      const body = message.body
      if (_.size(body) === 0) return

      await this.client.chat.postMessage(channel, body, {
        icon_url: this.iconUrl,
        username: 'ChatWork',
      })
      await sleep(1000)
    }))))
  }
}

module.exports = Slack
