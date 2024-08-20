console.log('Question 5');
console.log('---- ---- ---- ----');

const techProjectsData = [
  {
    projectName: 'Project X',
    teamSize: 8,
    budget: 150000,
    client: 'ABC Corp',
    duration: 3,
  },
  {
    projectName: 'Project Y',
    teamSize: 12,
    budget: 200000,
    client: 'XYZ Inc',
    duration: 4,
  },
  {
    projectName: 'Project Z',
    teamSize: 6,
    budget: 120000,
    client: 'LMN Ltd',
    duration: 2,
  },
  {
    projectName: 'Project W',
    teamSize: 10,
    budget: 180000,
    client: 'PQR Co',
    duration: 5,
  },
  {
    projectName: 'Project V',
    teamSize: 15,
    budget: 250000,
    client: 'EFG Enterprises',
    duration: 6,
  },
];

function getHighestBudget(data) {
  let highBudget = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i].budget > highBudget.budget) {
      highBudget = data[i];
    }
  }
  return highBudget;
}

function getAverageDuration(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].duration;
  }
  return total / data.length;
}

function getMoreThanTenTeamSize(data, teamSize) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].teamSize > teamSize) {
      result.push(data[i]);
    }
  }
  return result;
}

function generateReport(data) {
  let highestBudgetProject = getHighestBudget(data);
  let moreTeamSize = getMoreThanTenTeamSize(data, '10');

  let report = 'Budget\n';
  report += 'Highest Budget Project Details\n';
  report += 'Project Name: ' + highestBudgetProject.projectName;
  report += '\nTotal team size: ' + highestBudgetProject.teamSize;
  report += '\nClient: ' + highestBudgetProject.client;
  report += '\nBudget: ' + highestBudgetProject.budget;
  report += '\n';
  report += '\nAverage project duration: ' + getAverageDuration(data);
  report += '\n';
  report += '\n----Team size greater than 10----';
  for (let i = 0; i < moreTeamSize.length; i++) {
    report += '\nName: ' + moreTeamSize[i].projectName;
    report += '\nBudget: ' + moreTeamSize[i].budget;
    report += '\nClient: ' + moreTeamSize[i].client;
    report += '\nDuration: ' + moreTeamSize[i].duration;
    report += '\nTeam size: ' + moreTeamSize[i].teamSize;
    report += '\n';
  }

  return report;
}

console.log(generateReport(techProjectsData));
