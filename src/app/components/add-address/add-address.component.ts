import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  addressForm  = new FormGroup({
    city: new FormControl(null,[Validators.required]),
    country: new FormControl(null,[Validators.required]),
    postal: new FormControl(null,[Validators.required]),
    street: new FormControl(null,[Validators.required]),
    type: new FormControl(null,[Validators.required])
  })

  constructor(
    private addressService: AddressService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addAddress(){
    this.addressService._persistAddress(this.addressForm.value).subscribe(post => this.router.navigateByUrl("/address"))
  }

}
