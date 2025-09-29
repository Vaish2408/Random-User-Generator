let eleData = document.querySelector(".data");
let eleLoaderImage = document.querySelector(".loader-image");
document.querySelector(".btn").addEventListener("click", () => {
  getData();
});

async function getData() {
  eleData.style.display = "none";
  eleLoaderImage.style.display = "block";
  let response = await fetch(
    "https://randomuser.me/api/?inc=gender,name,nat,picture"
  );

  let data = await response.json();
  eleData.style.display = "block";
  eleLoaderImage.style.display = "none";

  document.querySelector(".name").innerHTML =
    data.results[0].name.title +
    " " +
    data.results[0].name.first +
    " " +
    data.results[0].name.last;
  console.log(
    data.results[0].name.title +
      data.results[0].name.first +
      data.results[0].name.last
  );

  document.querySelector(".details").innerHTML =
    data.results[0].gender + " " + "from" + " " + data.results[0].nat;
  console.log(data.results[0].gender + data.results[0].nat);

  console.log(data.results[0].picture.large);
  document.querySelector(".user-image").src = data.results[0].picture.medium;
}
