import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { IWindow } from 'src/app/notesService/notes.service';

@Injectable({
  providedIn: 'root'
})
export class WebSiteGuard implements CanActivate{

  canActivate(): boolean  {
    const { webkitSpeechRecognition }: IWindow = <IWindow><unknown>window;
    return !!webkitSpeechRecognition;
  }
}
