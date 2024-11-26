export function changePage(page, data) {
  console.log(data);
    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(page(data));
  }
  