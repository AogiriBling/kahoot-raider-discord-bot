const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Commands!",
    guildOnly: true,
    execute(message, args){
    const embed = new MessageEmbed()

    .setTitle("Aogiri Tree")
    .addFields(
		{ name: '**.help ::**', value: '`Shows Help command`'},
		{ name: '**.raid ::**', value: '`.raid (kahoot Pin)`'},
	)
 	message.channel.send(embed)
    }
}