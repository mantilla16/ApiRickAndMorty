import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApirickService } from '../services/apirick.service';
import { CharacterInterface } from '../interface/character.interface';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit{

  characterList: CharacterInterface[] = [];
  constructor(private apiService: ApirickService ){}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.apiService.getCharacters().subscribe({
      next: (result)=>{
        this.characterList = result.results;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
