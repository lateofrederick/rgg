import arg from 'arg';
import { createReactApp } from './main';
// this function parses the arguments passed when
// the rgg command is called
function parseArguments(args) {
  const _args = arg({
    '--git': Boolean,
    '-g' : '--git'
  }, {
    argv: args.slice(2)
  });
  return {
    'git': _args["--git"] || false,
    'project_name': _args._[0] || ''
  }
}
export async function createProject(args) {
  const options = parseArguments(args);
  await createReactApp(options);
  console.log(options);
}
