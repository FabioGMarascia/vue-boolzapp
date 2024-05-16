const { createApp } = Vue;

createApp({
	data() {
		return {
			contacts: [
				{
					name: "Michele",
					avatar: "./img/avatar_1.png",
					visible: true,
					messages: [
						{
							date: ["10/01/2020", "15:30"],
							message: "Hai portato a spasso il cane?",
							status: "sent",
						},
						{
							date: ["10/01/2020", "15:50"],
							message: "Ricordati di stendere i panni",
							status: "sent",
						},
						{
							date: ["10/01/2020", "16:15"],
							message: "Tutto fatto!",
							status: "received",
						},
					],
				},
				{
					name: "Fabio",
					avatar: "./img/avatar_2.png",
					visible: true,
					messages: [
						{
							date: ["20/03/2020", "16:30"],
							message: "Ciao come stai?",
							status: "sent",
						},
						{
							date: ["20/03/2020", "16:30"],
							message: "Bene grazie! Stasera ci vediamo?",
							status: "received",
						},
						{
							date: ["20/03/2020", "16:35"],
							message: "Mi piacerebbe ma devo andare a fare la spesa.",
							status: "sent",
						},
					],
				},
				{
					name: "Samuele",
					avatar: "./img/avatar_3.png",
					visible: true,
					messages: [
						{
							date: ["28/03/2020", "10:10"],
							message: "La Marianna va in campagna",
							status: "received",
						},
						{
							date: ["28/03/2020", "10:20"],
							message: "Sicuro di non aver sbagliato chat?",
							status: "sent",
						},
						{
							date: ["28/03/2020", "16:15"],
							message: "Ah scusa!",
							status: "received",
						},
					],
				},
				{
					name: "Alessandro B.",
					avatar: "./img/avatar_4.png",
					visible: true,
					messages: [
						{
							date: ["10/01/2020", "15:30"],
							message: "Lo sai che ha aperto una nuova pizzeria?",
							status: "sent",
						},
						{
							date: ["10/01/2020", "15:50"],
							message: "Si, ma preferirei andare al cinema",
							status: "received",
						},
					],
				},
				{
					name: "Alessandro L.",
					avatar: "./img/avatar_5.png",
					visible: true,
					messages: [
						{
							date: ["10/01/2020", "15:30"],
							message: "Ricordati di chiamare la nonna",
							status: "sent",
						},
						{
							date: ["10/01/2020", "15:50"],
							message: "Va bene, stasera la sento",
							status: "received",
						},
					],
				},
				{
					name: "Martina",
					avatar: "./img/avatar_6.png",
					visible: true,
					messages: [
						{
							date: ["10/01/2020", "15:30"],
							message: "Ciao Claudia, hai novità?",
							status: "sent",
						},
						{
							date: ["10/01/2020", "15:50"],
							message: "Non ancora",
							status: "received",
						},
						{
							date: ["10/01/2020", "15:51"],
							message: "Nessuna nuova, buona nuova",
							status: "sent",
						},
					],
				},
				{
					name: "Federico",
					avatar: "./img/avatar_7.png",
					visible: true,
					messages: [
						{
							date: ["10/01/2020", "15:30"],
							message: "Fai gli auguri a Martina che è il suo compleanno!",
							status: "sent",
						},
						{
							date: ["10/01/2020", "15:50"],
							message: "Grazie per avermelo ricordato, le scrivo subito!",
							status: "received",
						},
					],
				},
				{
					name: "Alice",
					avatar: "./img/avatar_8.png",
					visible: true,
					messages: [
						{
							date: ["10/01/2020", "15:30"],
							message: "Ciao, andiamo a mangiare la pizza stasera?",
							status: "received",
						},
						{
							date: ["10/01/2020", "15:50"],
							message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
							status: "sent",
						},
						{
							date: ["10/01/2020", "15:51"],
							message: "OK!!",
							status: "received",
						},
					],
				},
			],
			activeContact: null,
			check: false,
			myMessage: `my-message-box`,
			myMessagePosition: `justify-content-end`,
			userMessage: `user-message-box`,
			inputMessage: ``,
		};
	},
	methods: {
		messageList(contact) {
			this.activeContact = contact;
			this.check = true;
		},
		recivedSent(chat) {
			return chat.status == `sent` ? this.myMessage : this.userMessage;
		},
		positionMessage(chat) {
			if (chat.status == `sent`) {
				return this.myMessagePosition;
			}
		},
		addMessage() {
			this.contacts[this.activeContact].messages.push({
				date: ["10/01/2020", "20:51"],
				message: this.inputMessage,
				status: "sent",
			});
			this.inputMessage = ``;
			setTimeout(() => {
				this.contacts[this.activeContact].messages.push({
					date: ["10/01/2020", "20:51"],
					message: `ok`,
					status: "recived",
				});
			}, 1000);
		},
	},
	mounted() {
		console.log(this.contacts[2].messages[1]);
	},
}).mount("#app");
