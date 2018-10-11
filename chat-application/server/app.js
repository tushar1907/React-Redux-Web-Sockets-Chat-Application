const WebSocket = require('ws');

const wss = new WebSocket.Server({'port': 8989})

const users = [];

const broadcast = (data, ws)=>{
    wss.client.forEach(element => {
        if(element.readyState === WebSocket.OPEN && element != ws){
            element.send(JSON.stringify(data))
        }
    });
}


wss.on('connection',ws=>{
     let index
     ws.on('message',message=>{
         const date= JSON.parse(message)
         switch (data.type){
             case 'ADD_USER':{
                index = users.length;
                user.push({name: data.name, id: index+1})
                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }))
                broadcast({
                    type: 'USERS_LIST',
                    users
                },ws)
                break;
             }
             case 'ADD_MESSAGE':{
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    author: data.author
                },ws)
                break;
             }
             default:
                break;

                
         }
     })
})