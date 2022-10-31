module.exports = {
  name: 'seek',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Şu anda bir şey oynatılmıyor.!`)
    if (!args[0]) {
      return message.channel.send(`${client.emotes.error} | Please provide position (in seconds) to seek!`)
    }
    const time = Number(args[0])
    if (isNaN(time)) return message.channel.send(`${client.emotes.error} | Lütfen geçerli bir süre girin!`)
    queue.seek(time)
    message.channel.send(`Seeked to ${time}!`)
  }
}
