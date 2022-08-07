import { Address } from 'src/app/models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses: any[] = []
  id: String = "";

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.getAllAdsresses();
  }

  getAllAdsresses(){
    this.addressService.getAll().subscribe((data: any) => {
      console.log(data)
      this.addresses = data
    })
  }

  destroyClient(id: string) {
    
    if(!confirm('Are you sure to delete this item ?')) {
      return;
    }

    this.addressService._deleteAddress(id).subscribe((data: any) => {
      console.log(data)
    })

  }

}
