import execa from 'execa';

// this function creates a react app in the current dir
// if no project name is provided.

export async function createReactApp(args) {
  try {
    // checking if project name was provided
    if(!args.project_name) {
      await execa('npx', ['create-react-app', '.']);
    }
  } catch(e) {
    console.error(e.toString());
  }
}
