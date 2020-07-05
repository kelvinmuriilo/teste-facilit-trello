import { Component, OnInit } from '@angular/core';

//Terceiros
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalServicoService } from '../modal-servico.service';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {
  funcaoConfirmado;
  funcaoNaoConfirmado;
  mensagem;
  constructor(
    private bsModalRef: BsModalRef,
    private modalService: ModalServicoService) { }

  ngOnInit(): void {
  }

  fecharModal(){
    this.bsModalRef.hide();
  }

}
