# PhazeHQ Monorepo

This monorepo contains the codebase for both the frontend and backend components of the PhazeHQ application. The frontend is built with React and leveraged by Vite, while the backend is a Node.js Express application written in TypeScript.

PhazeHQ is the HR tool of no ones choice. You gonna hate it absolutely.

### Core upcomming features 
- [ ] Most of the HR features
- [ ] Developer Portifolio playes develoepr theme music (CAN'T TURN IT OFF) 
- [ ] Employee Portifolio Skill XP tracker
- [ ] Employee Training by mini projects to level up
- [ ] Admin view of Employee as game cards
- [ ] Admin view of Employees as cluster maps (visualize teams -  skills - relevancy)

## Applications

- `web-app`: The frontend React application.
- `backend`: The backend Express API.

## Getting Started

To get started with development, you'll need to have Node.js and npm installed on your system. Additionally, this project uses Lerna to manage multiple packages within the monorepo.

### Prerequisites

- Node.js (v16 or above)
- npm (included with Node.js)
- Lerna (`npm install -g lerna`)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/PhazeRoOman/phaze-hq.git 
cd phaze-hq
```

#### Install Dependancies
```bash
npm install
lerna bootstrap
```

#### Running the application
```bash
npm run dev
```
make sure you are the project root when running the command

The web-app can be expected to start at:
```bash
 http://localhost:5173/
```

The backend can be expected to start at: 
```bash
http://localhost:3000
```

Run the web-app separatly
```bash
cd packages/web-app
npm run dev
```

Run the backend separetly: 
```bash
cd packages/backend
npm run dev
```


#### Linting and Formatting
Linting and formatting can happen both at the root level or the package/app level
with the following commands:
Format: 
```bash
npm run format
```
Lint:
```bash
npm run lint
```


## Contribution
TBA



