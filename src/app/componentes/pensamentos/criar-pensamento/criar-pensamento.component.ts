import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBiulder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBiulder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }
}
