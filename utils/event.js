const { EventBus } = require('light-event-bus')
const eventBus=new EventBus()

const authEventListenerHandler=require('../app/events/auth').handle
const eventListenerMappings = []

eventBus.subscribe('authd',authEventListenerHandler({message:"asdmail045@"}))
module.exports = { eventBus }