const d = new Date();
const year = d.getFullYear();

//Map
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.map((item, index, arr) => {
  let sum = item * item;
  console.log(`${arr[index]} * ${item} =  ${sum}`);
});

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

const companyIndustry = companies.map((company) => company.industry);
const companyCountry = companies.map((company) => company.country);
const companyYears = companies
  .map((company) => {
    const years = company.founded - year + 'Years old';
    return `${company.name} is ${years}`;
  })
  .forEach((el) => {
    console.log(el);
  });
console.log('Country of origin', companyCountry);

console.log('Industry', companyIndustry);
