const data = [
    { title: "Hotel Bilal", link: "./bilal.html" },
    { title: "Sri Balaji Bhavan", link: "./balaji.html" },
    { title: "Fayaz Restaurant", link: "./fayaz.html" },
    { title: "The Falooda Shop", link: "./falooda.html" },
    { title: "Cakes & Bakes", link: "./cakes.html" },
    { title: "Murai Bombay Sweets", link: "./murari.html" },
    { title: "Grand Inn Restaurant", link: "./grand.html" },
    { title: "Sumaiya Inn", link: "./sumaiya.html" },
    { title: "Dubai Restaurant", link: "./dubai.html" },
    { title: "The Belgium Waffle.co", link: "./belgium.html" },
    { title: "Sri Ganesh Bhavan", link: "./ganesh.html" },
    { title: "IDLY", link: "./idly.html" },
    { title: "DOSA", link: "./dosa.html" },
    { title: "BURGER", link: "./Burger.html" },
    { title: "JUICES", link: "./juice.html" },
    { title: "CHAPATHI", link: "./chapathi.html" },
    { title: "BIRIYANI", link: "./biriyani.html" },
    { title: "PAROTTA", link: "./parotta.html" },
    { title: "TANDOORI", link: "./tandoori.html" },
    { title: "FISH FRY", link: "./ffry.html" },
    { title: "PIZZA", link: "./pizza.html" },
    // Add more data as needed
  ];
  
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const linkContainer = document.getElementById('linkContainer');
  
  function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.textContent = result.title;
      resultElement.classList.add('link');
      resultElement.addEventListener('click', () => {
        window.location.href = result.link;
      });
      searchResults.appendChild(resultElement);
    });
  }
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchTerm));
    displayResults(filteredResults);

    if(searchTerm===''){
      searchResults.style.display='none';
    }
    else{
      searchResults.style.display='block';
    }
  });