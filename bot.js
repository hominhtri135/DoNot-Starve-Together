//bot đang chạy trên discord.js v13, node.js v16.6.2

const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let fs = require('fs');
let moment = require('moment');

let path = 'C:/Program Files (x86)/Steam/steamapps/common/Don\'t Starve Together Dedicated Server/data/out.json'; //thay đổi thư mục cài đặt game tại đây
let path2 = 'C:/Program Files (x86)/Steam/steamapps/common/Don\'t Starve Together Dedicated Server/data/in.json'; //thay đổi thư mục cài đặt game tại đây

let Prefix = ","
let lastModified = 0;
let channelHook = 0;
let color = 0xffc623;
let icon = "https://img.icons8.com/pastel-glyph/48/ffc623/bullhorn-megaphone--v2.png"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  try{
	  if(!fs.existsSync(path)){
			var str = {message: "", time: Date.now()}
		fs.writeFileSync(path,JSON.stringify(str));
	  }
  }
  catch(err){console.log(err)}
  try{
	  if(!fs.existsSync(path2)){ 
		  fs.writeFileSync(path2, "");
	  }
  }
  catch(err){console.log(err)}
	fd = undefined;
  try{
  fd = fs.openSync(path,'r');
  } catch(err){console.log(err)}
	try{
	 var data = fs.statSync(path)
		lastModified = data.mtime.toISOString();
		console.log("last modified changed to " + lastModified);
	}
	catch (err){console.log(err);}
	 try{
		fs.closeSync(fd);
	 }
	 catch(err){
		 console.log(err);
	 }
});

client.on('message', message => {
	if (message.content == "!link" && channelHook == 0) { 
		channelHook = message.channel;
		message.delete();
		var interval = setInterval (function () {
			fs.open(path,'r',(err, fd) => {
				if(err){
					console.log(err);
					return;
				} 
				else{ 
					fs.stat(path, (err, data) => {
					let previousLMM = moment(lastModified);
					let rightNow = data.mtime.toISOString();
					let folderLMM = moment(rightNow);
					let res = !(folderLMM.isSame(previousLMM, 'second')); //seconds granularity
					if(res){
						try {
							let data = JSON.parse(fs.readFileSync(path, 'utf8'))
							switch(data.title){
								case "chat":
								  color = 0xc0cfb2;
								  break;
								case "announce":
								  color = 0xffc623;
								  icon = "https://img.icons8.com/pastel-glyph/48/ffc623/bullhorn-megaphone--v2.png";
								  break;
								case "death":
								  color = 0xf93163;
								  icon = "https://img.icons8.com/pastel-glyph/48/fa314a/happy-skull--v1.png";
								  break;
								case "join_game":
								  color = 0x7eff03;
								  icon = "https://img.icons8.com/ios-filled/48/7eff03/login-rounded-right.png";
								  break;
								case "leave_game":
								  color = 0xc2d3e0;
								  icon = "https://img.icons8.com/ios-filled/48/c2d3e0/logout-rounded-left.png";
								  break;
								case "resurrect":
								  color = 0x00f6f0;
								  icon = "https://img.icons8.com/ios-filled/48/00f6f0/like--v1.png";
								  break;
								case "kicked_from_game":
								  color = 0xff0000;
								  icon = "https://img.icons8.com/ios-filled/48/ff0000/action2.png";
								  break;
								case "banned_from_game":
								  color = 0xff0000;
								  icon = "https://img.icons8.com/ios-glyphs/48/ff0000/remove-user-male.png";
								  break;
								case "item_drop":
								  color = 0xb20000;
								  icon = "https://img.icons8.com/ios-filled/48/b20000/gift.png";
								  break;
								case "vote":
								  color = 0x99FFCC;
								  icon = "https://img.icons8.com/ios-filled/48/99FFCC/elections.png";
								  break;
								case "dice_roll":
								  color = 0xfb827a;
								  icon = "https://img.icons8.com/ios-filled/48/fb827a/available-updates.png";
								  break;
								case "mod":
								  color = 0xff00ff;
								  icon = "https://img.icons8.com/ios-filled/48/ff00ff/maintenance.png";
								  break;
								default:
								  color = 0xffc623;
								  icon = "https://img.icons8.com/pastel-glyph/48/ffc623/bullhorn-megaphone--v2.png";
							} 
							
							if (data.title == "chat") {
								const embed = new MessageEmbed()
									.setAuthor(String(data.name) + ": " + String(data.message),data.character);
								message.channel.send(embed);
							} else {
								const embed = new MessageEmbed()
									.setTitle(String(data.name))
									.setColor(color)
									.setDescription(String(data.message))
									.setThumbnail(icon);
								message.channel.send(embed);
							}
						} catch (err) {
						  console.error(err);
						}
						lastModified = rightNow;
					}
					try{
						fs.closeSync(fd);
					} catch(err){
						console.log(err);
					}
					});
				}
			});
		}, 500); 
	}
	
		if(message.content.startsWith(Prefix) && message.channel == channelHook){
		SendToDontStarve(message.author.username,message.content.substring(1).replace("/",""))
	}
	
	if(message.author.id == "Your-User-ID"){ //thay đổi ID User Discord tại đây
		if(message.content.startsWith("!ban ") && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/TheNet:Ban('" + message.content.substring(5) + "')")
		}
		if(message.content.startsWith("!kick ") && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/TheNet:Kick('" + message.content.substring(6) + "')")
		}
		if(message.content == "!regenerate" && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_regenerateworld()");
		}
		if(message.content.startsWith("!rollback ") && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_rollback("+message.content.substring(10)+")")
		}
		if(message.content.startsWith("!drop ") && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/AllPlayers["+message.content.substring(6)+"].components.inventory:DropEverything()")
		}
		if(message.content.startsWith("!despawn ") && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_despawn(AllPlayers["+message.content.substring(9)+"])")
		}
		if(message.content.startsWith("!kill ") && message.channel == channelHook){
			message.delete();
			if (message.content.substring(6) == "all") {
				SendToDontStarve(message.author.username,"/for i, v in ipairs(AllPlayers) do AllPlayers[i]:PushEvent('death') end")
			} else {
				SendToDontStarve(message.author.username,"/AllPlayers["+message.content.substring(6)+"]:PushEvent('death')")
			}
		}
		if(message.content.startsWith("!help ") && message.channel == channelHook){
			message.delete();
			if (message.content.substring(6) == "all") {
				SendToDontStarve(message.author.username,"/for i, v in ipairs(AllPlayers) do AllPlayers[i]:PushEvent('respawnfromghost') end")
			} else {
				SendToDontStarve(message.author.username,"/AllPlayers["+message.content.substring(6)+"]:PushEvent('respawnfromghost')")
			}
		}
		if(message.content == "!list" && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/str = '' for i, v in ipairs(AllPlayers) do str = str..string.format('[%d] (%s) %s <%s>', i, v.userid, v.name, v.prefab).. '\\n' end SendToDiscord('announce','announce','[Server]',str)")
		}
		if(message.content.startsWith("!announce ") && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_announce('" + message.content.substring(10) + "')")
		}
		if(message.content == "!save" && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_save()")
		}
		if(message.content == "!reset" && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_reset()")
		}
		if(message.content == "!shutdown" && message.channel == channelHook){
			message.delete();
			SendToDontStarve(message.author.username,"/c_shutdown(true)")
		}
		if(message.content == "!help" && message.channel == channelHook){
			message.delete();
			const embed = new MessageEmbed()
				.setTitle("Các lệnh của BOT")
				.setColor(color)
				.addField(":warning:**Đặt kênh chat cho BOT (Bắt Buộc dùng khi mới bật BOT)**:warning:","```!link```")
				.addField("Chat In Game","```"+Prefix+"Xin chào```")
				.addField("Ban","```!ban KU_123ABC```", true)
				.addField("Kick","```!kick KU_123ABC```", true)
				.addField("Tái tạo lại thế giới","```!regenerate```")
				.addField("Save SV","```!save```",true)
				.addField("Reset SV","```!reset```",true)
				.addField("Shutdown SV","```!shutdown```",true)
				.addField("Rollback (mặc định tối đa 5 lần save)","```!rollback 1```")
				.addField("Thông báo đến server","```!announce Đây là thông báo```")
				.addField("Danh sách người chơi","```!list```")
				.addField("Cứu người chơi thứ 1 trong `!list`","```!help 1```",true)
				.addField("Cứu tất cả","```!help all```",true)
				.addField("Drop mọi vật phẩm trong kho của người chơi","```!drop 1```")
				.addField("Giết người chơi thứ 1 trong `!list`","```!kill 1```",true)
				.addField("Giết tất cả","```!kill all```",true)
				.addField("Chọn lại nhân vật cho người chơi","```!despawn 1```")
			message.channel.send(embed);
		}
	}
});

function SendToDontStarve(_name, _message){
	fs.open(path2,'w',(err, fd) => {
			try {
				var str = {time:Date.now(), name:_name,message:_message}
				  fs.writeFileSync(path2, JSON.stringify(str));
				  
				} catch (err) {
				  console.error(err);
				}
			try{
				fs.closeSync(fd);
				 }
				 catch(err){
					 console.log(err);
				 }
		});
}


client.login('Your-Token'); //Thay đổi token BOT Discord của bạn tại đây
