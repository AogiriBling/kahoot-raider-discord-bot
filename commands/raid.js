module.exports = {
    name: 'raid',
    description: "Aogiri's Kahoot Raider",
    guildOnly: true,
    execute(message, args){
        if (!args.length) {
          return message.channel.send('**try using command .Help**');
      	} else {
    	    var varPin = `${args}`
          console.log('Raid started by user ' + message.member.id  + ' \(targeting game: ' + `${args}` + '\)')
	      message.channel.send('__**Kahoot Raider :**__  `Started sending bots to` ' + `__**${args} !**__`)
          const KahootSpam = require('kahoot-spam')
          let api = KahootSpam
          api.spam(varPin, "AogiriTree", 256).catch(() => {})
        }
    }
}