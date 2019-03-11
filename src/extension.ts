// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import keyWords from './keyWords';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "sql-autocomplete" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	

	vscode.window.showInformationMessage('Hello sql!');

	const sqlMatcher = {
		scheme: 'file', 
		language: 'sql'
	}
	const provider = vscode.languages.registerCompletionItemProvider(
		sqlMatcher,
		{
			provideCompletionItems(
				document:vscode.TextDocument,
				position: vscode.Position,
				token: vscode.CancellationToken,
				context: vscode.CompletionContext
			){
				

				let completeItems: Array<vscode.CompletionItem> = [];
				keyWords.forEach( item => {
					let completeItem = new vscode.CompletionItem(item.toLocaleLowerCase())
					completeItem.detail="来自vscode群的建议";
					completeItems.push(completeItem);
				})
	
				return completeItems
			}
		},
		...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	)

	context.subscriptions.push(provider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
