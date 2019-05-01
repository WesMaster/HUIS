import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AfschrijvingService } from '../afschrijving.service';
import { LabelService } from '../../labels/label.service';
import { Label } from '../../labels/label/label';
import { CurrencyPipe } from '../../currency.pipe';
import { faFileUpload, faTimesCircle, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-afschrijving',
  templateUrl: './afschrijving.component.html',
  styleUrls: ['./afschrijving.component.scss']
})
export class AfschrijvingComponent implements OnInit {
  @Input() id: number;
  @Output() getChange = new EventEmitter<number>();

  form: FormGroup;
  labels: Label[] = [];
  titelText: string = "Afschrijving";
  faFileUpload = faFileUpload;
  faTimesCircle = faTimesCircle;
  faDownload = faDownload;

  constructor(private service: AfschrijvingService, private labelService: LabelService, public dialogRef: MatDialogRef<AfschrijvingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private customCurrency: CurrencyPipe)
  {
    this.id = data;

    if(typeof(this.id) == null)
    {
      return;
    }

    delete this.form;
    this.getLabels();
    this.createForm();

    if(this.id == 0)
    {
      this.form.reset({id: 0, laatstGewijzigd: "01-01-1900", label: "", aankoopdatum: "", aankoopbedrag: "", verwachteLevensduur: "", garantie: "", factuur: "", factuurNaam: ""});
    }
    else
    {
      this.get();
    }
  }

  keys(any): Array<string>
  {
      var keys = Object.keys(any);
      return keys.slice(keys.length / 2);
  }

  ngOnInit()
  {
    this.changePosition();
  }

  changePosition()
  {
    this.dialogRef.updatePosition({top: '5%', left: '37%'});
  }

  createForm()
  {
    this.form = new FormGroup({
      id: new FormControl(0),
      laatstGewijzigd: new FormControl(''),
      label: new FormControl('',[
        Validators.required
      ]),
      aankoopdatum: new FormControl('',[
        Validators.required
      ]),
      aankoopbedrag: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9,\.]*')
      ]),
      verwachteLevensduur: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      garantie: new FormControl('',[
        Validators.pattern('[0-9]*')
      ]),
      factuur: new FormControl(''),
      factuurNaam: new FormControl('')
    });
  }

  get(): void
  {
    this.service.get(this.id).subscribe(item => {
      this.form.patchValue(item)
      this.form.patchValue({categorie: item.labelNavigation.categorie})
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('factuur').setValue(reader.result.toString().split(",")[1]);
        alert(file.name);
        this.form.get('factuurNaam').setValue(file.name);
        this.form.markAsDirty();
      };
    }
  }

  async onSubmit()
  {
    this.form.patchValue({aankoopbedrag: this.customCurrency.transformToNumber(this.form.get("aankoopbedrag").value)});
    if(this.id == 0)
    {
      await this.service.add(this.form.value).then(item => {

      });
    }
    else
    {
      await this.service.update(this.form.value).then(item => {

      });
    }

    this.id = null;
    this.dialogRef.close(true);
  }

  getLabels()
  {
    this.labelService.getAll().subscribe(items => this.labels = items);
  }

  verwijderDocument()
  {
    alert("verwijder");
    this.form.get('factuur').reset();
    this.form.get('factuurNaam').reset();
    this.form.markAsDirty();
  }
}
