import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { EpisodesComponent } from './episodes/episodes.component';

export const routes: Routes = [
    {path:'', component: CharacterComponent },
    {path:'episodes', component: EpisodesComponent}
];
