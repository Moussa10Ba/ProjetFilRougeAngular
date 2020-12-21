import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../Service/profil.service';

@Component({
  selector: 'app-profil-add',
  templateUrl: './profil-add.component.html',
  styleUrls: ['./profil-add.component.css']
})
export class ProfilAddComponent implements OnInit {
  ProfilForm !: FormGroup;
  constructor( private formbuilder: FormBuilder, private profilAddService: ProfilService) { }

  ngOnInit(): void {
    this.ProfilForm = this.formbuilder.group({
      libelle: ['', Validators.required]
    });
  }
  Onsubmit(){
    alert('ok');
    const profil = this.ProfilForm.value;
    profil.archive = false;
    this.profilAddService.addProfil(profil).subscribe(
      data => (
        alert('Saved')
      )

    );
  }

}
