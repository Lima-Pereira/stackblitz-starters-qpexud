import { Component, HostListener } from '@angular/core';
import { ApiCepService } from '../../services/api-cep.service';
import { Info } from '../../interfaces/info';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css',
})
export class CepComponent {
  cep: string = '';
  informacoes: Info = {
    bairro: '',
    complemento: '',
    localidade: '',
    logradouro: '',
    uf: '',
  };

  constructor(private apiCepService: ApiCepService) {}

  pesquisar() {
    if (this.cep) {
      this.apiCepService
        .pegarInformacoes(this.cep)
        .subscribe((informacoes: any) => {
          this.informacoes = informacoes;

          if (!informacoes.complemento)
            this.informacoes.complemento = 'Não encontrado';
        });
    }
  }
}
