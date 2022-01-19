let buttons = document.querySelectorAll('button');
const btnRemove = document.querySelectorAll('.remove');


console.log(btnRemove)





buttons[1].addEventListener('click', ()=>{
  let videosFavorites = document.querySelector('.boxVideosFavorites');
  let li = document.createElement('li');
  btnRemove[0].classList.remove('remove');
  

  li.innerHTML = `

              <div>
                <img src="./imagens/img0.jpg" alt="Logo play" />
              </div>

              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>`;

  
  videosFavorites.appendChild(li);

  btnRemove[0].addEventListener('click', ()=>{
    videosFavorites.removeChild(li);
    btnRemove[0].classList.add('remove');
  });

});
buttons[3].addEventListener('click', ()=>{
  let videosFavorites = document.querySelector('.boxVideosFavorites');
  let li = document.createElement('li');
  btnRemove[1].classList.remove('remove');


  li.innerHTML = `

              <div>
                <img src="./imagens/img1.jpg" alt="Logo play" />
              </div>

              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>`;

  
  videosFavorites.appendChild(li);
  btnRemove[1].addEventListener('click', ()=>{
    videosFavorites.removeChild(li);
    btnRemove[1].classList.add('remove');
  });
  
});

buttons[5].addEventListener('click', ()=>{
  let videosFavorites = document.querySelector('.boxVideosFavorites');
  let li = document.createElement('li');
  btnRemove[2].classList.remove('remove');


  li.innerHTML = `

              <div>
                <img src="./imagens/img2.jpg" alt="Logo play" />
              </div>

              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>`;

  
  videosFavorites.appendChild(li);
  btnRemove[2].addEventListener('click', ()=>{
    videosFavorites.removeChild(li);
    btnRemove[2].classList.add('remove');
  });
  
});

buttons[7].addEventListener('click', ()=>{
  let videosFavorites = document.querySelector('.boxVideosFavorites');
  let li = document.createElement('li');
  btnRemove[3].classList.remove('remove');

  li.innerHTML = `

  <div>
      <img src="./imagens/img3.jpg" alt="Logo play" />
      </div>
      
      <div>
      <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      </ul>
  </div>
  `; 
  videosFavorites.appendChild(li);
  btnRemove[3].addEventListener('click', ()=>{
    videosFavorites.removeChild(li);
    btnRemove[3].classList.add('remove');
  });
  
 
});
