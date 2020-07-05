import { Injectable, Injector } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalMensagemComponent } from './modal-mensagem/modal-mensagem.component';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';

enum TituloModal {
  ERRO = 'Erro',
  SUCESSO = 'Sucesso!',
  INFORMACAO = 'Informação',
  ATENCAO = 'Atenção!'
}

enum ClasseComplementarModal {
  ERRO = 'bg-danger',
  SUCESSO = 'bg-success',
  INFORMACAO = 'bg-info',
  ATENCAO = 'bg-warning'
}

@Injectable({
  providedIn: 'root'
})
export class ModalServicoService {

  public bsModalRef: BsModalRef;
  private configPadrao: ModalOptions


  constructor(
    private modalService: BsModalService,
    private injector: Injector
  ) {
    this.configPadrao = {
      animated: true,
      keyboard: true,
      backdrop: "static"
    }
   }

   exibirSucesso(mensagem: string): void {
    this.exibirMensagem(TituloModal.SUCESSO, mensagem, ClasseComplementarModal.SUCESSO);
  }

  exibirErro(mensage: string): void{
    this.exibirMensagem(TituloModal.ERRO, mensage, ClasseComplementarModal.ERRO);
  }

  exibirConfirmacao(mensagem: string, funcaoConfirmado: any, funcaoNaoConfirmado: any): void{
    this.confirmacao(
      mensagem,
      funcaoConfirmado,
      funcaoNaoConfirmado
      );
  }

  private exibirMensagem(titulo: string, mensagem: string, classeComplementar: string): void {
    const initialState = { titulo: titulo, mensagem: mensagem, classeComplementar: classeComplementar };
    this.bsModalRef = this.modalService.show(ModalMensagemComponent, { initialState });
  }

  private confirmacao( mensagem: string, funcaoConfirmado: any, funcaoNaoConfirmado: any){
    const initialState = { 
      mensagem: mensagem,
      funcaoConfirmado: funcaoConfirmado,
      funcaoNaoConfirmado: funcaoNaoConfirmado
    };
    this.bsModalRef = this.modalService.show(ModalConfirmacaoComponent, {initialState})

  }

}
