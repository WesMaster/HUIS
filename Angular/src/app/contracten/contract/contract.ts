import { Label } from "../../labels/label/label";
import { Interval } from "../../interval.enum";
import { formatDate } from '@angular/common';
import { CurrencyPipe } from '../../currency.pipe';

export class Contract
{
    id: number;
    laatstGewijzidgd: Date;
    label: Label[];
    bedrag: number;
    begindatum: Date;
    einddatum: Date;
    interval: Interval;
    document: string;
    documentNaam: string;

    constructor(private customCurrency: CurrencyPipe) {}

    getValue(value: string) : any
    {
      switch(value)
      {
        case "Label": 
            var returnList: string[] = [];
            this.label.forEach(element => {
                returnList.push(element.naam);
            });
            return returnList.join(", ");
          break;
        case "Bedrag": return "€ " + this.customCurrency.transform(this.bedrag);
          break;
        case "Begindatum": return formatDate(this.begindatum, 'dd-MM-yyyy', "nl");
          break;
        case "Einddatum": return this.einddatum ? formatDate(this.einddatum, 'dd-MM-yyyy', "nl") : "";
          break;
        case "Interval": return Interval[this.interval];
          break;
        case "Document": return this.document;
          break;
        case "DocumentNaam": return this.documentNaam;
          break;
        case "Id": return this.id;
          break;
        default: return "";
      }
    }
}