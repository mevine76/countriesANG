import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  public monTitre : string;
  public monIntroduction : string;
  public maPhraseAccroche : string;

  champSaisi = new FormControl('');

  public capitale : string;
  public population : string;
  public monnaie : string;
  public langue : string;


  constructor(private http: HttpClient
    ) {
    this.monTitre = "myCapitale";
    this.monIntroduction = "Obtenez les informations sur un pays !";
    this.maPhraseAccroche = "Insérer le pays dans le formulaire ci-dessous.";

  }
 
  public afficherChampSaisi(){
    return this.http.get<any[]>("https://restcountries.com/v3.1/name/" + this.champSaisi.value)
    .subscribe((data) => {
      this.capitale = data[0].capital[0],
      this.population = data[0].population,
      this.monnaie = data[0].currencies[Object.keys(data[0].currencies)[0]].name,
      this.langue = data[0].languages[Object.keys(data[0].languages)[0]];
      });
  }

}

