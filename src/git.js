import execa from "execa";
import { directoryExists } from "./file";

// this method requests the device and user verification codes from github
export async function createGitRepo(username, repo_name) {
  try {
    const repoInfo = {
      name: repo_name,
      private: false,
    };

    await execa("curl", [
      "-u",
      username,
      "https://api.github.com/user/repos",
      "-d",
      JSON.stringify(repoInfo),
    ]);
  } catch (error) {
    console.error(error.toString());
  }
}

export async function initialiseGit(args) {
  try {
    if (!directoryExists(".git")) {
      if (args.git) {
        await execa("git", ["init"]);
      }
    }
  } catch (error) {
    console.error(error.toString());
  }
}

export async function changeDirectory(directoryName) {
  try {
    await execa("cd", [directoryName]);
  } catch (error) {
    console.error(error.toString());
  }
}

export async function gitAddFiles(args) {
  try {
    if (!args.project_name) {
      await execa("git", ["add", "."]);
    } else {
      const projectName = args.project_name;
      await changeDirectory(projectName);
      await execa("git", ["add", "."]);
    }
  } catch (error) {
    console.error(error.toString());
  }
}

export async function gitCommit(commit_message) {
  try {
    if (commit_message === "") {
      await execa("git", ["commit", "-m", "initial commit"]);
    } else {
      await execa("git", ["commit", "-m", commit_message]);
    }
  } catch (error) {
    console.error(error.toString());
  }
}

export async function gitRemoteAdd(url) {
  try {
    await execa("git", ["remote", "add", "origin", url]);
  } catch (error) {
    console.error(error.toString());
  }
}

export async function renameBranch() {
  try {
    await execa("git", ["branch", "-M", "main"]);
  } catch (error) {
    console.error(error.toString());
  }
}

export async function gitPush() {
  try {
    await execa("git", ["push", "-u", "origin main"]);
  } catch (error) {
    console.error(error.toString());
  }
}