/**
 * title: 富文本组件
 * type: form-element
 */

import {
    Component,
    EventEmitter,
    forwardRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MessageService } from 'src/app/core/service/message.service';
import { RichTextParams } from '../model';
declare var tinymce;

@Component({
    selector: 'app-tinymce-ngx',
    templateUrl: './tinymce-ngx.component.html',
    styleUrls: ['./tinymce-ngx.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TinymceNgxComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => TinymceNgxComponent),
            multi: true,
        },
    ],
})
export class TinymceNgxComponent
    implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() richTextParams: RichTextParams;
    @Input() isDelete: any;
    // 是否在编辑
    @Output() isEdit = new EventEmitter();
    // 富文本实例
    richEditor: any;
    isEditStyle = false;
    isFocus = false;
    // 编辑器内容
    editorContent = '';
    tinymce;

    value = '';
    onChange: Function = () => {};
    onTouched: Function = () => {};
    constructor(private messageService: MessageService) {}
    ngOnInit() {
        console.log(this.richTextParams, 5555555);

        const { height, width, toolbar_mode, toolbar, plugins } = {
            ...{
                height: '300px',
                width: '80%',
                toolbar_mode: 'wrap',
                toolbar:
                    'bullist numlist | forecolor backcolor |formatselect | fontsizeselect | fontselect| bold italic underline strikethrough | undo redo importWord | toc | link | alignleft aligncenter alignjustify alignright lineheight ',
                plugins:
                    'ax_wordlimit advlist anchor autolink autosave code codesample directionality lineheight emoticons fullscreen hr importcss insertdatetime link lists nonbreaking noneditable pagebreak preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars',
            },
            ...this.richTextParams,
        };

        this.tinymce = tinymce.init({
            selector: '#tinymce-ngx',
            base_url: '../../../../assets/tinymce',
            // 功能列表页
            menubar: false,
            // 右下角推广
            branding: false,
            toolbar_mode,
            language: 'zh_CN',
            // 状态栏
            statusbar: false,
            // 区块列表
            block_formats:
                'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;',
            plugins,
            toolbar,
            // 编辑器宽高
            height,
            width,
            elementpath: false,
            resize: false,
            // 字体大小
            fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
            // 表格
            table_toolbar:
                'table tabledelete | tableinsertcolbefore tableinsertcolafter tabledeletecol',
            // 字体列表
            font_formats:
                '微软雅黑=微软雅黑,Microsoft YaHei;宋体=宋体,SimSun;黑体=黑体, SimHei;隶书=隶书, SimLi;楷体=楷体,楷体_GB2312, SimKai;andale mono=andale mono;arial=arial, helvetica,sans-serif;arial black=arial black,avant garde;comic sans ms=comic sans ms;impact=impact,chicago;Arial=Arial;Verdana=Verdana;Georgia=Georgia;Times New Roman=Times New Roman;Trebuchet MS=Trebuchet MS;Courier New=Courier New;Impact=Impact;Comic Sans MS=Comic Sans MS;Calibri=Calibri',
            // importcss_append: true,
            setup: (editor) => {
                this.richEditor = editor;
                if (this.value) {
                    editor.setContent(this.value);
                }
                // 自定义上传图片
                editor.ui.registry.addButton('uploadImg', {
                    icon: 'gallery',
                    tooltip: '上传图片',
                    onAction: () => {
                        console.log('打开弹窗');
                    },
                });
                editor.on('focus', (e) => {
                    this.isEditStyle = true;
                    this.isEdit.emit(true);
                });
            },
            init_instance_callback: (editor) => {
                if (this.value) {
                    this.richEditor.setContent(this.value);
                }
                editor.on('keyup', ($event) => {
                    this.onChange(editor.getContent());
                });
            },
        });
    }
    ngOnDestroy() {
        this.richEditor.remove();
    }

    writeValue(value: any): void {
        if (this.richEditor && value) {
            this.richEditor.setContent(value);
        }
        this.value = value;
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
        if (!this.richEditor.getContent({ format: 'text' }).trim()) {
            return null;
        }
        if (
            this.richEditor.getContent({ format: 'text' }).length >
            this.richTextParams.length
        ) {
            return { maxlength: true };
        } else {
            return null;
        }
    }
}
