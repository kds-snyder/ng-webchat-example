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
        const directLine = BotChat.createDirectLine({
            secret: '80cTqez07cM.cwA.dwc.ZJ4loNdOhdA7h-HHWt2iI6kXOvQV-Dd5IO1UoCi6zpk',
            webSocket: false
        });

        BotChat.renderWebChat({
            directLine: directLine,
            userID: 'USER_ID'
        }, this.botWindowElement.nativeElement);

        directLine.postActivity({
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
