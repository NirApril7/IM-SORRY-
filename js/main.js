
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('HAPPY VALENTINES DAY HONEEYYY I LOVE YOU SO MUCHH').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 100); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };