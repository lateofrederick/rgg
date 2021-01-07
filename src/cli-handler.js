import arg from 'arg';
import chalk from 'chalk';
import { createReactApp } from './create-react-app';
import { projectInitiation } from './main';
const { githubAuthentication } = require("./auth");

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
  if (options.git) {
    const userDetails = await githubAuthentication();

    const username = userDetails.username;
    const repo_url = userDetails.repo_url;
    const commit_message = userDetails.commit_message;
  
    await projectInitiation(options, repo_url, commit_message);
  } else {
    console.log(chalk.green("creating react project"));
    await createReactApp(options);
  }
  console.log(options);
}
