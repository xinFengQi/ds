/**
 * title: 文件上传组件
 * type: form-element:typr
 */

import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Subject, Subscription } from 'rxjs';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { FormSubject, UploadFileParams } from '../model';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.less'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FileUploadComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => FileUploadComponent),
        multi: true
    }]
})
export class FileUploadComponent implements OnInit, OnDestroy, ControlValueAccessor {
    constructor(
        private http: HttpClient,
        private modal: NzModalService,
        private messageSer: NzMessageService
    ) {
    }


    // 最大上传完文件数
     maxLength = 5;
    // * ds0.0.2
    @Input() systemName = '';

    // 上传图片路径
     uploadFileUrl = '';

    // 查看图片路径
    @Input() reviewFileUrl = '';
    // 删除文件接口
    deleteFileUrl = '';

    // 只读
    @Input() onlyRead = false;

    // 监听Subject
    @Input() formSub: Subject<FormSubject> = new Subject();


    fileSize = 10 * 1024 * 1024;

    @Input() fileUploadParams: UploadFileParams;

    showUploadList = {
        showPreviewIcon: true,
        showRemoveIcon: true,
        showDownloadIcon: true
    };

    fileList = [];
    previewImage: string | undefined = '';
    previewVisible = false;

    // ngmodel值  [urla,urlb]
    private value = '';

    // 监听是否全部删除文件
    formSubDetele: Subscription;
    onChange: Function = () => {
    };
    onTouched: Function = () => {
    };


    ngOnInit() {
        this.fileUploadParams = {
            ...{maxLength: this.maxLength, uploadFileUrl: this.uploadFileUrl, deleteFileUrl: this.deleteFileUrl, fileSize: this.fileSize},
            ...this.fileUploadParams
        }
        if (this.onlyRead) {
            this.showUploadList.showRemoveIcon = false;
        }
        this.formSubDetele = this.formSub.pipe(
            filter(v => v.type === 'fileDelete')
        ).subscribe(item => {
            if (!item.data) {
                this.fileList.forEach(file => {
                    if (file.noDetele) {
                        return
                    }
                //    this.deleteFile(file.response.response.key).then(d => {});
                })
                console.log('删除全部文件');
            }
        });
    }

    ngOnDestroy(): void {
        this.formSubDetele.unsubscribe();

    }

    writeValue(value: any): void {
        if (!value) {
            value = [];
        }
        this.value = value.map(v => v.key).join(',');
        this.onChange(this.value)
        const valueCache = [];
        value.forEach((e, i) => {
            const names = e.key.split('/');
            valueCache.push({
                uid: i - 1,
                name: names[names.length - 1],
                status: 'done',
                noDetele: true,
                response: { response: e },
                url: e.url
            });
        });
        this.fileList = [...valueCache];
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }

    validate(c: FormControl): { [key: string]: any } | null {
        let vResult = null;
        for (let i = 0; i < this.fileList.length; i++) {
            if (this.fileList[i].status === 'error') {
                vResult = { uploadFileError: true }
                break;
            }
            if (this.fileList[i].status === "uploading") {
                vResult = { uploadFileLoadding: true }
                break;
            }
           
        }
        return vResult;
    }

    // 点击图标移除按钮
    remove = (file: NzUploadFile) => {
        console.log('删除', file);
        const obser = new Observable<boolean>(obr => {
            this.modal.confirm({
                nzTitle: '是否确认删除',
                nzOnOk: () => {
                    if (this.fileUploadParams.deleteFileUrl.length === 0 || file.isUploading) {
                        obr.next(true);
                    } else {
                        // 使用接口删除
                        if(file.response) {
                            // this.deleteFile(file.response.response.key).then(
                            //     s => {
                            //         obr.next(true);
                            //     }
                            // );
                            obr.next(true)
                        } else {
                            obr.next(true);
                        }
                       
                    }
                },
                nzOnCancel: () => {
                    obr.next(false);
                }
            });
        });

        return obser;
    };

    handlePreview = (file: NzUploadFile) => {
        console.log('预览', file);
        if (file.isImageUrl) {
            this.previewImage = file.url || file.thumbUrl;
            this.previewVisible = true;
        } else {
            this.messageSer.warning('暂不提供此类型文件预览功能');
        }

    };

    download = (file: NzUploadFile) => {
        console.log('下载', file);
        const down = document.createElement('a');
        down.target = '_blank';
        down.href = file.url || file.response.linkProps;
        down.download = name;
        down.click();
        return true;
    };

    onFileChange(file) {
        console.log(file);
        if (file.type === 'success' || file.type === 'removed') {
            const fileKeys = file.fileList.map(v => v.response && v.response.response && v.response.response.key);
            this.value = fileKeys.join(',');
            this.onChange(this.value);
            this.onTouched();
        }
    }

    // 文件删除功能
    deleteFile = (key: string) => {
        if (this.fileUploadParams.deleteFileUrl.length === 0) {
            this.messageSer.warning('未提供删除url');
            return;
        }
        return new Promise((resolve, reject) => {
            this.http.post(this.fileUploadParams.deleteFileUrl, { key }).subscribe(v => {
                this.messageSer.info('删除成功');
                resolve(true);
                console.log('删除', v);
            }, err => {
                reject(err);
            });
        });

    };

    // 自定义上传接口
    custorRequst = (item) => {
        if (this.fileUploadParams.uploadFileUrl.length === 0) {
            this.messageSer.warning('未提供上传url');
            return;
        }
        const formData: FormData = new FormData();
        formData.append('file', item.file);
        if (this.systemName) {
            formData.append('system', this.systemName);
        }
        // formData.append('type', 'img');
        this.http.post(this.fileUploadParams.uploadFileUrl, formData).subscribe(
            (v: any) => {
                console.log('上传 Response', v);
                item.onSuccess({
                    status: 'done',
                    response: v,
                    linkProps: v.url
                });
            },
            err => {
                item.onError({
                    status: 'error',
                    response: err
                });
                this.messageSer.error('上传文件失败');
                console.log('上传失败', err);
            }
        );
    };

}
