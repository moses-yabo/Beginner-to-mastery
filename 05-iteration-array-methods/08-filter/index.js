const words = [
  'Spray',
  'Desktop',
  'Panic',
  'Button',
  'Hunger',
  'Crazy Bastard',
];
const results = words.filter(function (word) {
  return word.length <= 5;
});
console.log(results);
const res = words.filter((word) => word.length <= 5);
console.log(res);
const wordArr = [];

words.forEach((item) => item.length <= 5 && wordArr.push(item));
console.log(wordArr);
const companies = [
  {
    name: 'NovaEdge Technologies',
    industry: 'Artificial Intelligence',
    founded: 2014,
    employees: 120,
    country: 'Netherlands',
  },
  {
    name: 'BluePeak Logistics',
    industry: 'Transportation & Supply Chain',
    founded: 2008,
    employees: 350,
    country: 'United States',
  },
  {
    name: 'Solaro Energy',
    industry: 'Renewable Energy',
    founded: 2016,
    employees: 85,
    country: 'South Africa',
  },
  {
    name: 'PixelForge Studios',
    industry: 'Creative Design & Animation',
    founded: 2011,
    employees: 40,
    country: 'Canada',
  },
  {
    name: 'Zentrix Biotech',
    industry: 'Biotechnology',
    founded: 2019,
    employees: 60,
    country: 'Germany',
  },
];
//Using For Loop to Filter
const smme = [];
const before2010Companies = [];
console.log('----- USING FOR LOOP TO FILTER -----');

const smallComapanies = companies.forEach((company) => {
  company.employees <= 100 && smme.push(company);
  company.founded <= 2010 && before2010Companies.push(company);
});
console.log('Small Companies', smme);
console.log('Comapnies wer Formed before 2010', before2010Companies);
//Using Filter
console.log('----- USING FILTER METHOD-----');
const companiesSmme = companies.filter((company) => company.employees <= 100);
const companiesBefore2010 = companies.filter(
  (company) => company.founded <= 2010
);
console.log(companiesSmme);
console.log(companiesBefore2010);
