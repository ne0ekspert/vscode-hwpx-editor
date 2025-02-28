import { defineExtension } from 'reactive-vscode'
import { HWPXEditorProvider } from './provider'

const { activate, deactivate } = defineExtension((context) => {
  context.subscriptions.push(HWPXEditorProvider.register(context))
})

export { activate, deactivate }
