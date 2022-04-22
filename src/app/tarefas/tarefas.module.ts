import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Service do CRUD de tarefas
import { TarefaService } from './shared';

// Componentes do CRUD de tarefas
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

// Modulos do NG-ZORRO
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzDividerModule,
    NzCheckboxModule,
    NzEmptyModule,
    NzFormModule,
    NzButtonModule,
    NzMessageModule,
    NzInputModule,
    NzAlertModule,
  ],
  providers: [TarefaService],
})
export class TarefasModule {}
