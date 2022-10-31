module.exports = {
  name: 'resume',
  aliases: ['resume', 'unpause'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor!`)
    if (queue.paused) {
      queue.resume()
      message.channel.send('Geçerli oynatma tekrar başlatıldı :)')
    } else {
      message.channel.send('Önce geçerli oynatmayı durdurmalısın!')
    }
  }
}
