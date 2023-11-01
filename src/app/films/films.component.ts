import { Component, OnInit} from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',

})
export class FilmsComponent implements OnInit {
  films? : Film[];
  
 
  constructor(private FilmService:FilmService) {
    
    }

    ngOnInit():void{
      this.films = this.FilmService.listeFilm();
    }
    supprimerFilm(film :Film)
    {
      console.log(film);
      let conf = confirm("Etes-vous sûr ?");
       if (conf)
      this.FilmService.supprimerFilm(film);
      
    }
}

