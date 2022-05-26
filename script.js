let num=document.querySelectorAll(".box1");
let inp=document.querySelectorAll(".box2");
let id;
num.forEach((item) => {
    item.ondragstart = function () {
      id = this.id;
    };
  });
  inp.forEach((item) => {
    (item.ondragover = function (e) {
      e.preventDefault();
    }),
      (item.ondrop = function () {
        let num = document.getElementById(id);
        if (id>=1 && id<=4 && this.id=="a1") {
            this.append(num);
        } 
        else if (id>=5 && id<=8 && this.id=="a2") {
            this.append(num); 
          }
        else if (id>=9 && id<=12 && this.id=="a3") {
            this.append(num);
        }
        else{
          alert("wrong");
        }
      });
  });
