const User = require('./user')
const Message = require('./message')
const Room = require('./room')
const RoomUser = require('./roomUser')
const Queue = require('./queue')


Message.belongsTo(User)
Message.belongsTo(Room)

User.hasMany(Message)
User.belongsToMany(Room, {through: RoomUser})

Room.belongsToMany(User, {through: RoomUser})
Room.belongsTo(User)
Room.hasMany(Message)
Room.hasMany(Queue)

Queue.belongsTo(Room)





module.exports = {
  User,
  Message,
  Room,
  RoomUser,
  Queue
}
