import * as vscode from 'vscode';

import * as fs from 'fs';
import * as path from 'path';


export function activate(context: vscode.ExtensionContext) {
    console.log('vscode-extensio-test1 插件开始运行');

	// 消息框子
    vscode.window.showInformationMessage('vscode-extensio-test1 插件开始运行!', '是', '否', '不再提示');
	// 命令执行
	let disposable = vscode.commands.registerCommand(
        'vscode-extensio-test1.helloWorld',
        (uri) => {
			vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
            // 展示一个消息
            vscode.window.showInformationMessage('hello world命令被执行');
        }
    );
    context.subscriptions.push(disposable);

	// 配置获取
    // 如果没有设置，返回undefined
    const result = vscode.workspace
        .getConfiguration()
        .get('vscodePluginDemo.yourName ');

    // 最后一个参数，为true时表示写入全局配置，为false或不传时则只写入工作区配置
    vscode.workspace
        .getConfiguration()
        .update('vscodePluginDemo.yourName', '前端艺术家', true);

	// 打开自定义欢迎页
	context.subscriptions.push(vscode.commands.registerCommand('vscode-extensio-test1.showWelcome', function (uri) {
		const panel = vscode.window.createWebviewPanel(
			'testWelcome', // viewType
			"自定义欢迎页", // 视图标题
			vscode.ViewColumn.One, // 显示在编辑器的哪个部位
			{
				enableScripts: true, // 启用JS，默认禁用
				retainContextWhenHidden: false, // webview被隐藏时保持状态，避免被重置
			}
		);
		let global = { panel};
		panel.webview.html = getWebViewContent(context, 'src/view/src/homepage.html');
		panel.webview.onDidReceiveMessage(message => {
			console.log(message)
			// if (messageHandler[message.cmd]) {
			// 	messageHandler[message.cmd](global, message);
			// } else {
			// 	util.showError(`未找到名为 ${message.cmd} 回调方法!`);
			// }
		}, undefined, context.subscriptions);
	}));



	vscode.commands.executeCommand('vscode-extensio-test1.showWelcome');
}

// this method is called when your extension is deactivated
export function deactivate() {}





/**
 * 从某个HTML文件读取能被Webview加载的HTML内容
 * @param {*} context 上下文
 * @param {*} templatePath 相对于插件根目录的html文件相对路径
 */
 function getWebViewContent(context: any, templatePath: string) {
    const resourcePath = path.join(context.extensionPath, templatePath);
    const dirPath = path.dirname(resourcePath);
    let html = fs.readFileSync(resourcePath, 'utf-8');
    // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
    html = html.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (_m: any, $1: any, $2: any) => {
        return $1 + vscode.Uri.file(path.resolve(dirPath, $2)).with({ scheme: 'vscode-resource' }).toString() + '"';
    });
    return html;
}