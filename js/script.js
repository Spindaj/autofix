function loading() {
    document.getElementsByClassName("box-load")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "block";
  }

  function showList() {
    document.getElementById("carBrandList").style.display = "block";
  }

  function filterList() {
    const input = document.getElementById("searchBar");
    const filter = input.value.toLowerCase();
    const ul = document.getElementById("carBrandList");
    const li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName("a")[0];
      const textValue = a.textContent || a.innerText;
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  document.addEventListener("click", function (event) {
    const isClickInside =
      document.getElementById("searchBar").contains(event.target) ||
      document.getElementById("carBrandList").contains(event.target);
    if (!isClickInside) {
      document.getElementById("carBrandList").style.display = "none";
    }
  });