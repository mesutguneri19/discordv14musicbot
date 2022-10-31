module.exports = {
  name: 'pause',
  aliases: ['pause', 'hold'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    if (queue.paused) {
      queue.resume()
      return message.channel.send('Senin için tekrar başlattım :)')
    }
    queue.pause()
    message.channel.send('Senin için durdurdum :)')
  }
}
