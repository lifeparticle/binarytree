1.  Fork the repo
2.  Clone your fork
3.  Sync your local master

    3.1.

    ```shell
    git remote add upstream git@github.com:lifeparticle/Houdini.git
    ```

    3.2.

    ```shell
    git fetch upstream
    ```

    3.3.

    ```shell
    git branch --set-upstream-to=upstream/master master
    ```

    3.4.

    ```shell
    git pull
    ```

4.  Run locally

    4.1 Move to the project directory and install dependencies

    ```shell
    cd code
    yarn install
    yarn start
    ```

5.  Create a branch

    ```shell
    git branch issue-2 # use issue_number, replace issue-2 with appropriate branch name
    git checkout issue-2
    ```

6.  Push your changes to your fork with git push
    ```shell
    git add .
    git commit -m"Write a meaningfull commit message"
    git push
    ```
7.  Create a pull request

    7.1 Use the url from the terminal

    ```shell
    remote: Create a pull request for 'issue-2' on GitHub by visiting:
    remote:      https://github.com/........................
    ```

    7.2 If you're having problem finding the url

        a) https://github.com/lifeparticle/Houdini/pulls

        b) Click the button 'New pull request'

        c) Click the link 'compare across forks'

        d) Change head repository to your fork

        e) Change the branch to your branch

        f) Create pull request

8.  Repeat

    ```shell
    git checkout master
    git pull
    ```
