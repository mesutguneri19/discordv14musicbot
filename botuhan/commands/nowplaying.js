module.exports = {
  name: 'nowplaying',
  aliases: ['np'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey çalınmıyor!`)
    const song = queue.songs[0]
    message.channel.send(`${client.emotes.play} | Çalınan şarkı **\`${song.name}\`**, istekte bulunan ${song.user}`)
  }
}
