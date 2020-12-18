import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponentComponent } from './form-component/form-component.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DatetimeSingleComponent } from './datetime-single/datetime-single.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { TinymceNgxComponent } from './tinymce-ngx/tinymce-ngx.component';
import { CxPipeModule } from 'src/app/cx-pipe/cx-pipe.module';
import { InputGroupComponent } from './input-group/input-group.component';
import { DatetimeStartEndComponent } from './datetime-start-end/datetime-start-end.component';
import { JudgeConditionComponent } from './judge-condition/judge-condition.component';

@NgModule({
    declarations: [
        FormComponentComponent,
        FileUploadComponent,
        DatetimeSingleComponent,
        FormDetailComponent,
        TinymceNgxComponent,
        InputGroupComponent,
        DatetimeStartEndComponent,
        JudgeConditionComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CxPipeModule,
        NgZorroAntdModule,
    ],
    exports: [
        FormComponentComponent,
        FileUploadComponent,
        DatetimeSingleComponent,
        FormDetailComponent,
        TinymceNgxComponent,
    ],
})
export class CxFormModule {}
