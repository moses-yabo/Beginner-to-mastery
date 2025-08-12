const button = document.querySelector('button');
const spinner = document.querySelector('.spinner');
const userInfoTemp = (data) => {
  console.log(data);
  if (data.gender === 'female') {
    document.body.style.backgroundColor = 'purple';
  } else {
    document.body.style.backgroundColor = 'cyan';
  }

  document.querySelector('#user').innerHTML = `
<div class="flex justify-between">
<div class="flex">
<img
class="w-48 h-48 rounded-full mr-8"
src="${data.picture.medium}"
/>
<div class="space-y-3">
<p style="color:black;">
<span class="font-bold">Name: </span>${data.name.first} ${data.name.last}  
</p>
<p class="text-xl" style="color:black;">
<span class="font-bold" >Email: </span>${data.email}
</p>
<p class="text-xl" style="color:black;">
<span class="font-bold">Phone: </span> ${data.phone}
</p>
<p class="text-xl"style="color:black;">
<span class="font-bold" style="color:black;">Location: </span>${data.location.city} ${data.location.country}
</p>
<p class="text-xl"><span class="font-bold" style="color:black;">Age: <span>${data.dob.age} </span></p>
</div>
</div>
</div>

`;
};
const getRandomUser = async () => {
  spinner.classList.remove('hidden');
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    data.results.forEach((element) => {
      userInfoTemp(element);
    });
    spinner.classList.add('hidden');
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener('click', getRandomUser);
