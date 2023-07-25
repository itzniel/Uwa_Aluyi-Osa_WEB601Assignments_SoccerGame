# SoccerGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
\








***********************************
*************************
## Project Group2
## Members : Uwaguosa Aluyi-Osa
# PaaS Project Deployment
## Objective 

The objective of this project is to deploy the provided sample code
 on Heroku and ensure it runs smoothly on the platform.

##	App Link: https://paasprojectuwa-fa7a2217b009.herokuapp.com/

## Heroku git URL: https://git.heroku.com/passprojectuwa.git


## Copy the "PaaS_Code" folder to the server.
	
##  To initiate the connection to the Ubuntu server, use the following command with your SSH key:
* `ssh -i "paas.pem" ubuntu@ec2-18-117-94-54.us-east-2.compute.amazonaws.com`

## If you have the "PaaS_Code" folder on your local machine, securely copy it to the server using the scp command.
*   	`scp -i "<SSH KEY>" PaaS_Code.zip`

* Replace "<SSH KEY>" with the file path to your SSH key, and "<server name>" with the hostname or IP address of the server.
    Next, install the "unzip" package on the server.

Utilize the provided command to install the "unzip" package.
* `sudo apt install unzip`

Unzip the "PaaS_Code.zip" file by executing the following command.
* `sudo unzip PaaS_Code.zip`


## `sudo apt-get install software-properties-common`: 
This command facilitates the installation of the software-properties-common package, simplifying the management of software repositories on Ubuntu systems.

## `sudo apt-add-repository -y ppa:rael-gc/rvm`: 
This command enables you to add the RVM (Ruby Version Manager) repository to your system, allowing you to utilize RVM as a powerful tool for managing Ruby installations.

## `sudo apt-get update`: 
This command retrieves the most up-to-date package information and version details from the repositories, ensuring that the local package lists are current.

## `sudo apt-get install rvm`: 
By executing this command, you will install RVM on your system, which enables you to manage multiple Ruby environments on a single machine.

## `sudo usermod -a -G rvm $USER`: 
This command is essential as it adds the current user to the rvm group, granting the necessary permissions to use RVM without requiring sudo access.

## `sudo reboot`: 
Executing this command initiates a server restart, as it is essential for certain system changes to become effective.

## *Go to the pass folder*: 
The text indicates that the instruction is to access a particular directory named "pass." To do this, you can utilize the "cd" command along with the correct file path to navigate to the desired folder.

## `rvm list known`: 
This command provides a list of available Ruby versions that can be installed using RVM. It shows the various Ruby versions that are supported and can be selected for installation.

## `rvm install ruby-2.6.6`: 
This command utilizes RVM to install Ruby version 2.6.6. It automatically downloads the required files and configures the specified Ruby version for use.

## `sudo apt-get install libpq-dev`: 
This command installs the libpq-dev package, which contains essential development files required for interacting with the PostgreSQL database. It is necessary for building Ruby gems that work with PostgreSQL.

## `gem install pg`.: 
This command installs the pg gem, which serves as a bridge between Ruby applications and PostgreSQL databases. It facilitates seamless interaction and manipulation of data, allowing Ruby applications to connect with PostgreSQL databases effortlessly.

## `sudo apt-get install nodejs`: 
This command installs Node.js, which is a JavaScript runtime commonly needed for executing JavaScript-related tasks in Ruby on Rails applications.

## `(cat .ruby-version) && rvm $(cat .ruby-version) do rvm gemset create $(cat .ruby-gemset) && rvm gemset use $(cat .ruby-gemset) && bundle install --jobs=$(nproc)`: 

This command comprises multiple parts that need to be executed. Here's a breakdown of each step:

## (cat .ruby-version): 
This command is used to read the contents of the .ruby-version file, which usually indicates the desired Ruby version for the project.

##	`rvm $(cat. ruby-version) do rvm gemset create $(cat .ruby-gemset)`: 
This command establishes a gemset, which is a self-contained environment for managing gems, tailored to the Ruby version specified in the .ruby-version file.

## `rvm gemset use $(cat .ruby-gemset)`: 
This command sets the previously created gemset as the active gem environment.

##	bundle install --jobs=$(nproc): 
This command installs the Ruby gems specified in the Gemfile of the Rails project. The --jobs=$(nproc) option enables concurrent installation, utilizing all available CPU cores for faster execution.

## `bundle install`: 
This command ensures that all the required Ruby gems specified in the Gemfile of the Rails project are installed, making sure that all the necessary dependencies are ready for use.

## `sudo apt-get install libpq-dev`: 
This command installs the libpq-dev package, which is essential for interfacing with the PostgreSQL database. It may seem redundant if it has already been installed earlier in the process.

## `sudo apt-get update`: 
This command ensures that the local package lists are updated with the latest information about available packages.

## "For testing just run rails server": 
This is a directive to initiate the Rails server for testing. You can typically trigger the server by running the command "rails server" or "rails s" in your Rails application's root directory.

## `rails`: 
The provided command lacks clarity without additional context. It seems to involve the Rails command-line tool used for various actions in a Rails application. However, the exact purpose or context of the command remains unclear from the given sequence of instructions. Further information or clarification is needed to understand its intended use.


## Heroku configuration:

## `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`: 
This command utilizes the curl tool to fetch the installation script for the Heroku CLI (Command Line Interface) designed for Ubuntu. By piping the downloaded script to the sh command, it automatically executes the installation process, enabling the seamless installation of the Heroku CLI on the Ubuntu system.

## `heroku login -I`: 
When using this command in the CLI, you will be prompted to enter your Heroku account credentials, such as your email and password, for authentication. The -I flag ensures that the login process takes place solely within the command-line interface and does not redirect to a web-based login interface.

## "Enter useremail and password as the API key if MFA (Multi-Factor Authentication) is enabled in the account".

## `git config --global user.name "uwaguosa"`.

When configuring Git, setting the global variable user.name to "uwaguosa" associates this name with your Git commits. This ensures that you are identified as the author of the changes made in the Git repository, providing clarity about your contributions.

## `git config --global user.email w0817788@myscc.ca`
This command will configure the global variable user.email to be "w08177882@myscc.ca".

## `heroku create -a passprojectuwa`
The command "heroku create -a passprojectuwa" is utilized to generate a fresh Heroku application, assigned with the given name "passprojectuwa."

## `git remote -v`
The command "git remote -v" enables you to view the remote repositories associated with your Git repository. This command shows the URLs of these remotes, which are frequently used for fetching and pushing changes.
 

## `git config --global safe.directory "/home/ubuntu/paas"`
The command "dcadius" is used to set a configuration variable called "safe.directory." When using the "--global" flag with this command, the configuration variable will be set globally, affecting all Git repositories on the machine.

## `heroku git:remote -a passprojectuwa`

This action involves adding a Git remote called "heroku" to your local Git repository and linking it to the Heroku application named "project2cloud."


## `git init`:  
The command "git init" is employed to set up a new Git repository in the current directory. When executed, Git establishes a fresh repository, complete with the essential data structures required for tracking changes to the files.

## `git add`: 
The purpose of the "git add" command in Git is to include files in the staging area, which acts as an intermediate space allowing you to selectively decide which changes to include in the upcoming commit.

## `git commit -m "message"`: 
The Git commit command is utilized to generate a new commit in Git, capturing a snapshot of the changes you have included in the staging area. This snapshot represents a specific point in the project's history.

## Note: So if you get the error: branch has nothing to commit
Then try to force commit(-f)

## `heroku create --stack heroku-20`
The Heroku create command serves the purpose of generating a fresh Heroku application, while the --stack option provides the flexibility to designate the desired stack or runtime environment for that particular application.

## `heroku stack:set heroku-20`
This command sets the runtime stack of your application to "heroku-20" on Heroku. By doing so, the underlying environment and dependencies used to run the application will be updated accordingly.

## `git push heroku master`
To deploy your local Git repository to a Heroku application's remote repository, you can use the command "git push heroku master." This action will transfer the code from your local repository's master branch to the corresponding Heroku remote repository.

## `heroku addons:create heroku-postgresql`
This command allows you to create a new Heroku Postgres database addon for your application. Heroku Postgres is a dependable and fully managed relational database service.

## `heroku run rake db: migrate`
The command "dcadius" is used to execute the "rake db:migrate" task, a frequently used task in Ruby on Rails applications. Its purpose is to apply any pending database migrations, ensuring that the database schema stays current with the latest changes in the application's codebase.

## `heroku run rake db:migrate`
This command will trigger the execution of migrations on the Heroku application's server, making sure that any pending changes to the database schema are applied.

## So we have already seeded our database and we have to add at least 10 articles with 10 comments on each article for submission.