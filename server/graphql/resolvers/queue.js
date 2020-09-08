const { withFilter }= require('apollo-server')
const ADDED_TO_QUEUE = 'ADDED_TO_QUEUE'
const REMOVED_FROM_QUEUE = 'REMOVED_FROM_QUEUE'
const { PubSub } = require('apollo-server');
// const pubsub = new PubSub();

const queueResolver = {
  Query: {
    getQueue: async (parent, {roomId}, {models}) => {
      try {
        const queue = await models.Queue.findAll({where: {roomId}})
        return queue
      } catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    addToQueue: async (parent, args, { models, pubSub }) => {
      try {
        const songToAdd = await models.Queue.create({...args, roomId: args.roomId})
        await pubSub.publish(ADDED_TO_QUEUE, {roomId: args.roomId, addedToQueue: songToAdd})
        return songToAdd
      } catch (err) {
        console.log(err)
      }
    }, 
    removeFromQueue: async (parent, {uri, roomId}, { models, pubSub}) => {
        try {
          const songToRemove = await models.Queue.findOne({where: {uri, roomId}})
          songToRemove.destroy()
          const newQueue = await models.Queue.findAll({where: {roomId}})
          await pubSub.publish(REMOVED_FROM_QUEUE, {roomId, removedFromQueue: newQueue})
          return newQueue
        } catch (err) {
          console.log(err)
        }
      }
  },
  Subscription: {
      addedToQueue: {
        subscribe: withFilter(
          (parent, args, {pubSub}) => pubSub.asyncIterator([ADDED_TO_QUEUE]),
                (payload, variables) => {
                        return payload.roomId === variables.roomId;
                    }),
      },
      removedFromQueue: {
        subscribe: withFilter(
          (parent, args, {pubSub}) => pubSub.asyncIterator([REMOVED_FROM_QUEUE]),
                (payload, variables) => {
                        return payload.roomId === variables.roomId;
                    }),
      },
  }
}

module.exports = queueResolver
