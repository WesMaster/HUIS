import { Component, OnInit } from '@angular/core';
import { BegrotingService } from './begroting.service';
import { Begroting } from './begroting';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-begroting',
  templateUrl: './begroting.component.html',
  styleUrls: ['./begroting.component.scss']
})
export class BegrotingComponent implements OnInit
{
  filter: number[] = [];
  buttonText = "Berekenen";
  contracten: Begroting;
  budgetten: Begroting;
  reserveringen: Begroting;
  inkomsten: Begroting;
  afschrijvingen: Begroting;
  spaardoelen: Begroting[] = [];
  resultaat: Begroting;
  uitgaven: Begroting;
  begroting: Begroting[] = [];
  filterOptie: number;
  titel: string = "Begroting";

  faCheck = faCheck;

  constructor(private service: BegrotingService)
  {

  }

  ngOnInit()
  {
    this.getFilter();
  }

  getFilter(): void
  {
    this.service.getFilter().subscribe(item => {
      this.filter = item;
      this.filter.sort((n1, n2)=> n2 - n1);
      this.filterOptie = this.filter[0] ? this.filter[0] : new Date().getFullYear();
    });
  }

  getResultaat(maand: number): number
  {
    var resultaat;
    switch(maand)
    {
      case 0: resultaat = this.resultaat.totaal;
        break;
      case 1: resultaat = this.resultaat.januari;
        break;
      default: resultaat = 0;
    }

    return resultaat;
  }

  berekenen(jaar: number): void
  {
    this.service.get(jaar).subscribe(item => {
      this.resultaat = item["resultaat"];
      this.resultaat.type = "Resultaat";
      this.inkomsten = item["inkomsten"];
      this.inkomsten.type = "Inkomsten";
      this.contracten = item["contracten"];
      this.contracten.type = "Contracten";
      this.budgetten = item["budgetten"];
      this.budgetten.type = "Budgetten";
      this.reserveringen = item["reserveringen"];
      this.reserveringen.type = "Reserveringen";
      this.afschrijvingen = item["afschrijvingen"];
      this.afschrijvingen.type = "Afschrijvingen";
      this.uitgaven = item["uitgaven"];
      this.uitgaven.type = "Uitgaven";
      
      var arraydoel:Begroting[] = item["spaardoelen"];

      this.spaardoelen = [];
      arraydoel["Totaal"].type = "Totaal";
      this.spaardoelen.push(arraydoel["Totaal"]);
      Object.keys(arraydoel).sort((n1, n2)=> n1 > n2 ? -1 : 1).forEach(spaardoel => {
        if(spaardoel != "Totaal")
        {
          arraydoel[spaardoel].type = spaardoel;
          this.spaardoelen.push(arraydoel[spaardoel]);
        }
      });

      this.begroting = [this.resultaat, this.inkomsten, this.uitgaven];
    });
  }
}
