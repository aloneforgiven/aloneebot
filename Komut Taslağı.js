const Discord = require('discord.js');


exports.run = function(client, message) {

};

exports.conf = {
  enabled: true, //komutut a�t�k
  guildOnly: false, //sadece servere �zel yapmad�k
  aliases: ['ping','p'], //farkl� �a�r�lar ekledik
  permLevel: 0 //kimlerin kullanabilece�ini yazd�k (bot.js dosyas�nda perm leveller yaz�yor)
};

exports.help = {
  name: 'ping', //ad�n� belirledik (kullanmak i�in gereken komut)
  description: 'Botun pingini g�sterir', //a��klamas�
  usage: 'ping' //komutun kullan�m �ekli (mesela hava <b�lge>)
};

//komut tasla��m�z basit anlat�m�n� zaten dosyalarda bulursunuz
//bu ise bizim komut tasla��m�z
//bunun �zerinden gidece�iz