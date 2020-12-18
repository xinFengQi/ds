/**
 * title: 使用简单表单时配置表单组件
 * type: form
 */

import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import {
    BreadcrumbBtuData,
    FormSubject,
    CxFromModel,
    CxFormConfig,
    RichTextParams,
    UploadFileParams,
} from '../model';

@Component({
    selector: 'app-form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.less'],
})
export class FormComponentComponent implements OnInit {
    // 表单模型数据
    @Input() formModel: CxFromModel[];

    // 表单元素配置
    @Input() formElementBaseConfig: CxFormConfig;

    // 定制表单元素配置
    @Input() formElementConfig: {
        [key: string]: RichTextParams | UploadFileParams;
    };

    // 表单改变检测
    @Output() formValueChange = new EventEmitter();

    // 表单确认返回
    @Output() ok = new EventEmitter();

    // 表单取消返回
    @Output() cacel = new EventEmitter();

    // 表单构造器
    formBuildCtrl: FormGroup = null;
    // 表单状态管理
    formSub$ = new Subject<FormSubject>();

    // 按钮数据
    buttonData: BreadcrumbBtuData[] = [
        {
            title: '确认',
            type: 'primary',
            onClick: () => {
                console.log(this.formBuildCtrl);
                for (const i in this.formBuildCtrl.controls) {
                    this.formBuildCtrl.controls[i].markAsDirty();
                    this.formBuildCtrl.controls[i].updateValueAndValidity();
                }

                if (!this.formBuildCtrl.valid) {
                    return;
                }
                this.ok.emit(this.formBuildCtrl.value);
            },
        },
        {
            title: '取消',
            type: 'default',
            onClick: () => {
                this.modalService.confirm({
                    nzTitle: '取消',
                    nzContent: '取消将清空新写入的数据',
                    nzOnOk: () => {
                        this.formSub$.next({ type: 'fileDelete' });

                        this.cacel.emit(this.formBuildCtrl.value);
                    },
                });
            },
        },
    ];

    // 数据缓存，上一次表单数据
    changesCache = null;

    // 各种元素的基础配置
    getRichTextParamsBaseConfig: RichTextParams = {};
    getUploadFileParamsBaseConfig: UploadFileParams = {};
    constructor(
        private fb: FormBuilder,
        private modalService: NzModalService
    ) {}

    ngOnInit(): void {
        const fromJson = {};
        this.formModel.forEach((item) => {
            item.__cache = { ...item };
            if (item.noShow) {
                return;
            }
            fromJson[item.key] = [
                item.default,
                item.noRequire ? null : [Validators.required],
            ];

            if (item.extraValidator && item.extraValidator.length > 0) {
                item.extraValidator.forEach((v) => {
                    this.addValidator(fromJson, item.key, v);
                });
            }
        });
        this.formBuildCtrl = this.fb.group(fromJson);
        this.formBuildCtrl.valueChanges.subscribe((changes) => {
            this.formValueChange.emit({
                oldData: this.changesCache,
                data: changes,
            });
            this.changesCache = { ...changes };
        });
        if (this.formElementBaseConfig && this.formElementBaseConfig.richParams) {
            this.getRichTextParamsBaseConfig = this.formElementBaseConfig.richParams;
        }
        if (this.formElementBaseConfig && this.formElementBaseConfig.fileParams) {
            this.getUploadFileParamsBaseConfig =  this.formElementBaseConfig.fileParams;
        }

    }

    // 增加新的校验器
    addValidator(json: any, key: string, valitor: ValidatorFn) {
        if (json[key][1]) {
            json[key][1].push(valitor);
        } else {
            json[key][1] = [valitor];
        }
    }

    // 是否展示lalel 使用占位
    getShow(item: string) {
        return { visibility: item ? 'hidden' : 'visible' };
    }

    // 显示自己的配置数据
    getRichTextParamsConfig(key: string) {
        if (this.formElementConfig && this.formElementConfig[key]) {
           return {...this.getRichTextParamsBaseConfig, ...this.formElementConfig[key]};
        }
        return this.getRichTextParamsBaseConfig;
    }

    getUploadFileParamsConfig(key: string) {
        if (this.formElementConfig && this.formElementConfig[key]) {
            return {...this.getUploadFileParamsBaseConfig, ...this.formElementConfig[key]};
        }
        return this.getUploadFileParamsBaseConfig;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if (!changes.formModel.previousValue) {
            return;
        }
        for (let i = 0; i < changes.formModel.currentValue.length; i++) {
            const elementCurrent = changes.formModel.currentValue[i];
            this.isShowHandler(elementCurrent);
            this.isChangeValue(elementCurrent);
            changes.formModel.currentValue[i].__cache = {
                ...changes.formModel.currentValue[i],
            };
        }
    }

    // 默认值改变
    isChangeValue(elementCurrent: CxFromModel) {
        if (elementCurrent.default !== elementCurrent.__cache.default) {
            if (this.formBuildCtrl.contains(elementCurrent.key)) {
                this.formBuildCtrl.patchValue(
                    { [elementCurrent.key]: elementCurrent.default },
                    { emitEvent: false }
                );
            } else {
                this.addControl(elementCurrent);
            }
        }
    }

    // 显示展示的逻辑
    isShowHandler(elementCurrent: CxFromModel) {
        // 解决表单元素显示问题和表单的加入的时间不一致性报错
        if (elementCurrent.noShow !== elementCurrent.__cache.noShow) {
            if (elementCurrent.noShow) {
                // 从动态表单中删掉元素
                this.formBuildCtrl.removeControl(elementCurrent.key);
            } else {
                this.addControl(elementCurrent);
            }
        }
    }

    // 增加一个表单控制
    addControl(elementCurrent: CxFromModel) {
        const vail = [];
        if (!elementCurrent.noRequire) {
            vail.push(Validators.required);
        }
        // 添加额外的验证器
        if (
            elementCurrent.extraValidator &&
            elementCurrent.extraValidator.length > 0
        ) {
            elementCurrent.extraValidator.forEach((v) => {
                vail.push(v);
            });
        }
        // 向动态表单中加入元素
        this.formBuildCtrl.addControl(
            elementCurrent.key,
            new FormControl(elementCurrent.default, vail)
        );
    }
}
