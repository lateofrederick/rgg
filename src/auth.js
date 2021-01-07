import inquirer from 'inquirer';

// this authenticates a user github credentials
export async function githubAuthentication() {
    const userInfo = [
        {
            name: 'username',
            type: 'input',
            message: 'Enter Github username',
            validate: (val) => {
                if (val.length) {
                    return true;
                } else {
                    return 'Please provide your username'
                }
            }
        },
        {
            name: 'repo_url',
            type: 'input',
            message: 'Enter project repo',
            validate: (val) => {
                if (val.length) {
                    return true;
                } else {
                    return 'Please provide your project repo'
                }
            }
        },
        {
            name: 'commit_message',
            type: 'input',
            message: 'Enter your commit message',
            validate: (val) => {
                if (val.length) {
                    return true;
                } else {
                    return 'Please provide your commit message'
                }
            } 
        }
        
    ];
    return await inquirer.prompt(userInfo);
}