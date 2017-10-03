import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
    notification: any = {};

    constructor(private appHttpService: AppHttpService) {}

    send(e) {
        e.preventDefault();
        
        this.appHttpService.builder('notifications').insert(this.notification)
            .then(() => {
                window.Materialize.toast('Mensagem enviada com sucesso', 3000, 'light-green');
            });
    }
}
