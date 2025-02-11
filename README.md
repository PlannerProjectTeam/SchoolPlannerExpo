# SchoolPlanner

Updating project from remote repository:
```bash
git pull       # Update local reposistory
npm install    # Install dependencies
npm start      # Start development server
```

Working through your branch:
```bash
git pull                                  # Update your local reposistory
git checkout <yourname>_branch            # Switch to your branch 
```

Merging your branch into the main branch:
```bash
git checkout main                         # Switch to main branch 
git pull origin main                      # Get latest changes from main branch

git checkout <yourname>_branch            # Switch to your branch 
git pull origin main                      # Update your branch by integrating latest changes from main branch

git checkout main                         # Switch to main branch 
git merge <yourname>_branch               # Merge your branch changes with main branch
```