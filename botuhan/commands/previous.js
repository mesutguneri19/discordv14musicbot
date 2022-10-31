module.exports = {
  name: 'previous',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    const song = queue.previous()
    message.channel.send(`${client.emotes.success} | Şu anda çalınan:\n${song.name}`)
  }
}
