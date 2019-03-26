import sketch from 'sketch'
import { spawnSync } from '@skpm/child_process'

export function open(context) {
  var exports = context.actionContext.exports
  var firstExport = exports.objectAtIndex(0)
  spawnSync("/usr/bin/open", [firstExport.path.stringByDeletingLastPathComponent()])
}
