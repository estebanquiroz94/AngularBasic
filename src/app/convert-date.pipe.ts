import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';
import { ANY_STATE } from '@angular/compiler/src/private_import_core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  resultado : string;

  transform(value: Date){

    //Se convierte la fecha para su retorno
    this.resultado =   value.getFullYear()+"-"+value.getMonth()+"-"+value.getDate();
    
    return this.resultado;
  }

}
