const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
// require("dotenv").config();

// client.login(process.env.DISCORD_TOKEN);
client.login(
	"NzQ0NjU3OTYyMjY5NjcxNTE1.GjFbu1.6QI3IuIBOPxPKuRE8yzDiTC4MqOR7W2ZGZCbcA"
);

client.on("ready", () => {
	console.log(`Bienvenido ${client.user.tag}! Alpha Version`);
	console.log("El Bot esta listo!");
	client.user.setActivity(`-h para información`, {
		type: "PLAYING", //Status: PLAYING, WATCHING, STREAMING,
		//url: "https://www.twitch.tv/spectrasonic117",
	});
});

//Version Control
client.on("message", (message) => {
	if (message.content === "-version") {
		const embed = new MessageEmbed()
			.setTitle("Omnispectra")
			.addField("Version", "v 1.14.1 Alpha")
			.setTimestamp()
			.setFooter(
				"Developed by Spectrasonic",
				"https://i.imgur.com/38vtU7x.png"
			)
			.setColor(0x63ffd9);

		message.channel.send(embed);
	}

	if (message.content === "-invite") {
		message.channel.send("Generando Invitación...");
		const embed = new MessageEmbed()
			.setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
			.setTitle("Invite Omnispectra")
			.addField(
				"Clic aqui para Invitar",
				"http://bit.ly/InviteOmnispectra"
			)
			.setTimestamp()
			.setFooter(
				"Developed by Spectrasonic",
				"https://i.imgur.com/38vtU7x.png"
			)
			.setColor(0x63ffd9);
		message.channel.send(embed);
	}

	if (message.content === "-h") {
		const embed = new MessageEmbed()
			.setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
			.setTitle("Omnispectra bot")
			.setDescription("Omnispectra")
			.addField("Version de Omnispectra", "v 1.14.1 Alpha")
			.addField("Use -invite", "Para generar una invitacion del bot")
			.addField("Use -commands", "Para ver lista de comandos")

			.setTimestamp()
			.setFooter(
				"Developed by Spectrasonic",
				"https://i.imgur.com/38vtU7x.png"
			)
			.setColor(0x63ffd9);
		message.channel.send(embed);
	}

	if (message.content === "-commands") {
		const embed = new MessageEmbed()
			.setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
			.setTitle("Comandos Del Bot")
			.setDescription("Omnispectra Bot commands")
			.addField("-version", "Muestra la versión actual bot")
			.addField("-invite", "Muestra una invitacion del bot bot")
			.addField("-h", "Muestra Informacion del Bot")
			.addField("-special", "Muestra los agradecimientos especiales")
			.addField("-respuesta", "Muestra las respuestas del bot")
			.addField("Use -github", "Para ver el repositorio publico")
			.addField("-j", "Entrar a VC")
			.addField("-l", "Salir de VC")

			.setTimestamp()
			.setFooter(
				"Developed by Spectrasonic",
				"https://i.imgur.com/38vtU7x.png"
			)
			.setColor(0x63ffd9);
		message.channel.send(embed);
	}

	if (message.content === "-respuesta") {
		const embed = new MessageEmbed()
			.setAuthor("Omnispectra", "https://i.imgur.com/Ip5LmMl.png")
			.setTitle("Respuestas del Bot")
			.setDescription("Cuando pones la palabra el bot te responde")
			.addField("a", "-> ª")
			.addField("sonic", "-> el jeshejojo")
			.addField("once, 11", "-> Chupalo entonce")
			.addField("lord", "-> Valdomero")
			.addField("marcelo", "-> Agacháte y Conocélo")
			.addField("e", "-> Imagen del meme E")
			.setTimestamp()
			.setFooter(
				"Developed by Spectrasonic",
				"https://i.imgur.com/38vtU7x.png"
			)
			.setColor(0x63ffd9);
		message.channel.send(embed);
	}
});

client.on("message", (message) => {
	let msg = message.content.toLowerCase();
	switch (msg) {
		case "-github":
			message.channel.send(
				"https://github.com/spectrasonic117/Omnispectra"
			);
			break;
		case "hola":
			message.channel.send(
				"https://tenor.com/view/its-alive-gif-11313763"
			);
			break;
		case "a" | "A" | "ª":
			message.channel.send("A");
			break;
		case "sonic":
			message.channel.send("el jeshejojo");
			break;
		case "once":
		case "11":
			message.channel.send("Chupalo entonce");
			break;
		case "lord":
			message.channel.send("Valdomero");
			break;
		case "marcelo":
			message.channel.send("Agacháte y Conocélo");
			break;
		case "mapi":
			message.channel.send("HIZO PUUUN!!! 💥💥💥");
			break;
		case "ile":
			message.channel.send("Grrr!");
			break;
		case "dyesi":
			message.channel.send("Chan Chan Chaaaaaan!");
			break;
		case "mar":
			message.channel.send("NAAAAAAMBREEE!!!");
			break;
		case "hila":
			message.channel.send("Ojos negros, piel canela 🎶 🎵");
			break;
		case "poto":
			message.channel.send("Poto ʕ•ᴥ•ʔ");
			message.delete();
			break;
		case "e":
			message.channel.send("https://i.imgur.com/TR2RqTi.jpg");
			break;
		default:
			console.log("Comandono reconocido...");
	}
});

//Voice Control
client.on("message", async (message) => {
	if (!message.guild) return;

	if (message.content === "-j") {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			message.channel.send("¡Conectado con éxito!");
			message.delete();
		} else {
			message.reply("Necesitas estar en un canal de voz primero :)");
			message.delete();
		}
	}

	if (message.content === "-l") {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.leave();
			message.channel.send("¡Desconectado con éxito!");
			message.delete();
		} else {
			message.reply("Ya no estoy en un canal de voz :)");
			message.delete();
		}
	}
});
