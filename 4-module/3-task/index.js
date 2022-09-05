function highlight(table) {
  let tbody = table.querySelector ('tbody');
  for (let row of tbody.rows) {
    let age = row.cells[1];
    let sex = row.cells[2];
    let availability = row.cells [3];
  

  if (availability.dataset.available === undefined) {
    row.hidden = true;
    };

  row.classList.add(availability.dataset.available === 'true' ? 'available' : 'unavailable');


  row.classList.add(sex.innerHTML === 'm' ? 'male' : 'female');

  if (parseInt(age.innerHTML) < 18) {
  row.style.textDecoration = 'line-through';
  };
}
}