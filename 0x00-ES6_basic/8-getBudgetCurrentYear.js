function getCurrentYear () {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear (income, gdp, capita) {
  this.budget[`income-${getCurrentYear()}`] = income;
  this.budget[`gdp-${getCurrentYear()}`] = gdp;
  this.budget[`capita-${getCurrentYear()}`] = capita;

  return this.budget;
}
