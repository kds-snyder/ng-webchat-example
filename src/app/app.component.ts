import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import * as BotChat from 'botframework-webchat';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('botWindow') botWindowElement: ElementRef;

    public ngOnInit(): void {
        const botConnection = new BotChat.DirectLine({
            secret: 'YOUR_SECRET_HERE',
            webSocket: false
        });

        BotChat.App({
            botConnection: botConnection,
            bot: { id: 'ENTER_ID_HERE' },
            adaptiveCardsHostConfig: {},
            user: { id: 'USER_ID', name: 'USER_NAME' },
            resize: 'detect'
        }, this.botWindowElement.nativeElement);

        botConnection.postActivity({
            from: { id: 'USER_ID', name: 'USER_NAME' },
            name: 'requestWelcomeDialog',
            type: 'event',
            value: 'token'
        }).subscribe(
            id => console.log(`Posted activity, assigned ID ${id}`),
            error => console.log(`Error posting activity ${error}`)
        );
    }
}
