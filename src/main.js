import { createReactApp } from "./create-react-app";
import execa from "execa";

const Listr = require("listr");
const {
  initialiseGit,
  gitAddFiles,
  gitCommit,
  createGitRepo,
  gitRemoteAdd,
  renameBranch,
  gitPush,
} = require("./git");


export async function projectInitiation(args, repo_url, commit_message) {
  const tasks = new Listr([
    {
      title: "initialising git",
      task: () => initialiseGit(args),
    },
    {
      title: "creating react project",
      task: () => execa('touch', ["index.html"]),
    },
    {
      title: "adding files to git",
      task: () => gitAddFiles(args),
    },
    {
      title: "commit files",
      task: () => gitCommit(commit_message),
    },
    // {
    //   title: "creating github repo",
    //   task: () => createGitRepo(username, repo_name),
    // },
    {
      title: "renaming branch to main",
      task: () => renameBranch(),
    },
    {
      title: "git remote add",
      task: () => gitRemoteAdd(repo_url),
    },

    {
      title: "pushing to github",
      task: () => gitPush(),
    },
  ]);

  tasks.run().catch((err) => {
    console.error(err);
  });
}
