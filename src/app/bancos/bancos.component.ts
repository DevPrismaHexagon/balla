import { Component, OnInit } from '@angular/core';
import { ServiceBancosService } from './service-bancos.service';
import { banco } from 'src/models/banco.model';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {

  title = 'Bancos';
  subtitle = 'listado de Bancos';

  search:string="";

  bancos:banco[]=[];

  constructor(private ServiceBancosService:ServiceBancosService) {
    this.bancos=this.ServiceBancosService.bancos;
   }

  ngOnInit(): void {
    
  }

  BorrarBanco(id:number){
    this.ServiceBancosService.DeleteBancoService(id);
  }

  searchbanco(search:string){
    this.search = search;
  }

}