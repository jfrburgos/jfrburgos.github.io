---
title: 'Git commands'
description: 'List of git commands'
pubDate: 'Nov 11 2025'
heroImage: '../../assets/placeholders/git-placeholder.png'
---

### Git Commands Cheatsheet

![Git Cheatsheet](../../assets/cheatsheets/gitCheatsheet.png) 

### Git Commands

```bash
git init                                   # Initialize a new Git repository
git clone <repo-url>                       # Clone an existing repository
git status                                 # Show the status of the working directory
git add <file>                             # Add a file to the staging area
git commit -m "message"                    # Commit staged changes with a message
git push origin <branch>                   # Push changes to a remote repository
git pull origin <branch>                   # Fetch and merge changes from remote
git branch                                 # List all branches in the repository
git checkout <branch>                      # Switch to a different branch
git checkout -b <branch>                   # Create and switch to a new branch
git merge <branch>                         # Merge another branch into the current one
git log                                    # View commit history
git diff                                   # Show differences between commits or working directory
git reset --hard <commit>                  # Reset to a specific commit, discarding changes
git revert <commit>                        # Revert a specific commit, keeping history
git stash                                  # Temporarily save changes without committing
git stash pop                              # Apply the most recent stashed changes
git remote -v                              # View remote repository URLs
git fetch                                  # Fetch latest changes from remote repository
git tag <name>                             # Create a new tag for a commit
git cherry-pick <commit>                   # Apply a specific commit from another branch
git rebase <branch>                        # Reapply commits on top of another branch
git config --global user.name "Your Name"  # Set global username
git config --global user.email "your@email.com" # Set global email address
git rm <file>                              # Remove a file from the repository
```
### External resources

[atlassian git tutorials](https://www.atlassian.com/git/tutorials)

[git guide baeldung](https://www.baeldung.com/ops/git-guide)

[gitkraken tutorials](https://www.gitkraken.com/learn/git/tutorials)

[Git by example](https://antonz.org/git-by-example/)

