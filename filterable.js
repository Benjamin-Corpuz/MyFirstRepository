/* FILTERABLE NAMES */

const FilterNames = document.querySelector('#filter-name');
  FilterNames.focus();
  
  FilterNames.addEventListener('keyup', Filter);

function Filter(){
   //Get the value of the input and convert to uppercase
   let FilterValue = document.querySelector('#filter-name').value.toUpperCase();


   //Get the ul and li content
   let UL = document.querySelector('#name-list');
   let LI = UL.querySelectorAll('#name-content');
   //let LiContent = document.querySelectorAll();

   //gives new set of array using spread operator
  //   let names = [...LI]
  //    .map(function(name){
  //       return name.textContent;
  //   })
  //  .filter(function(name){
  //     const regex = new RegExp(`^${FilterValue}`, 'gi');
  //    return name.match(regex);
  // })
//    .join(' ');

  // if(FilterValue.length === 0){
  //   names = [];
  // }
  //  console.log(names);



LI.forEach(function(list){
   let a = list.getElementsByTagName('a')[0].innerHTML; 
  // let a = document.querySelectorAll('#name-content').value;
    const regex = new RegExp(`^${FilterValue}`, 'gi');
if(a.match(regex)){
  list.style.display = 'block';
  }else{
    list.style.display = 'none';

}
});
} 
