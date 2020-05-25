import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private connection: any;
  private proxy: any;

  constructor() { 

  }

  public initializeSignalRConnection(): void {
    console.log("ola");
    let signalRServerEndPoint = "http://smartflow.azurewebsites.net/signalr";
    console.log(signalRServerEndPoint);

    this.connection = $.hubConnection(signalRServerEndPoint);
    this.proxy = this.connection.createHubProxy('sendHandShake');
    console.log("teste")

    this.proxy.on('messageReceived', (serverMessage) => this.onMessageReceived(serverMessage));

    console.log("ok");
    this.connection.start().done((data: any) => {
      console.log('Connected to Notification Hub');
      this.broadcastMessage();
  }).catch((error: any) => {
      console.log('Notification Hub error -> ' + error);
  });

}

private broadcastMessage(): void {  
  this.proxy.invoke('sendHandShake', '12','2222','worten',"456")
     .catch((error: any) => {
         console.log('broadcastMessage error -> ' + error); 
      });
    }

private onMessageReceived(serverMessage: string) {
  console.log('New message received from Server: ' + serverMessage);
}

}

