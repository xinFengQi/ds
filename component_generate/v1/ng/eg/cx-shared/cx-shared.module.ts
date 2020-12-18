import { NgModule } from '@angular/core';
import { CxLayoutModule } from './cx-layout/cx-layout.module';
import { CxFormModule } from './cx-form/cx-form.module';


@NgModule({
    declarations: [],
    imports: [CxLayoutModule, CxFormModule],
    exports: [
        CxLayoutModule, CxFormModule
    ]
})
export class CxSharedModule {
}
