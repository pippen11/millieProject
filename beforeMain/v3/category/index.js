const category_box = document.getElementById("category_box");
category_box.forEach((item) => {
  item.onclick = () => {
    console.log("안녕");
  };
});
