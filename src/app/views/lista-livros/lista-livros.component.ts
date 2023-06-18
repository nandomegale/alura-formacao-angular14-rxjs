import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { LivroService } from 'src/app/services/livro.service';
import { IGoogleAPIResponse, IItems, ILivro } from '../models/interface';
import { LivroVolumeInfo } from '../models/livroVolumeInfo';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  mensagemErro: string;
  totalDeLivros: number;

  constructor(private service: LivroService) {}

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(300),
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    tap((resultado) => (this.totalDeLivros = resultado.totalItems)),
    map((resultado) => resultado.items ?? []),
    map((items) => this.volumeInfoParaLivros(items)),
    catchError((erro) => {
      // this.mensagemErro = 'Ops, Ocorreu um erro. Recarregue a aplicação!';
      // return EMPTY;
      console.log(erro);
      return throwError(
        () =>
          new Error(
            (this.mensagemErro =
              'Ops, Ocorreu um erro. Recarregue a aplicação!')
          )
      );
    })
  );

  volumeInfoParaLivros(items: IItems[]): LivroVolumeInfo[] {
    return items.map((item) => new LivroVolumeInfo(item));
  }
}
