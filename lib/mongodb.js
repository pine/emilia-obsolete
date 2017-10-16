'use strict'

const { MongoClient } = require('mongodb')

class MongoDb {
  constructor({ url }) {
    this.url = url
    this.db = null
  }

  async connect() {
    this.db = await MongoClient.connect(this.url)
  }

  disconnect() {
    return this.db.close()
  }

  save(messages) {
    if (messages.length > 0) {
      const collection = this.db.collection('messages')
      return collection.insertMany(messages)
    }
    return Promise.resolve()
  }

  async filterIfNotExist(messages) {
    const collection = this.db.collection('messages')
    const messageIds = messages
      .map(message => message.message_id.toString())

    const savedMessages = await collection.find({
      message_id: { $in: messageIds }
    }).toArray()
    const savedMessageIds = savedMessages
      .map(message => message.message_id.toString())

    return messages.filter(message =>
      !savedMessageIds.includes(message.message_id)
    )
  }
}

module.exports = MongoDb
