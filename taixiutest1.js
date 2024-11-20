let min = 1;
let max = 6;
let randomDice1;
let randomDice2;
let randomDice3;
let randomKetqua;
let sumDice;

let cuoc;


document.getElementById("submitCuoc").onclick = function() {



    cuoc = document.getElementById("cuoc").value;


    document.getElementById("roll3dice").onclick = function() {

        randomDice1 = Math.floor(Math.random() * max) + min;
        randomDice2 = Math.floor(Math.random() * max) + min;
        randomDice3 = Math.floor(Math.random() * max) + min;
        randomKetqua = Math.floor(Math.random() * 18) + 3;


        document.getElementById("dice1").textContent = randomDice1;
        document.getElementById("dice2").textContent = randomDice2;
        document.getElementById("dice3").textContent = randomDice3;

        sumDice = randomDice1 + randomDice2 + randomDice3;

        if (randomDice1 + randomDice2 + randomDice3 > 10) {
            document.getElementById("taihayxiu").textContent = "Tai!";
            if (cuoc == sumDice || cuoc.toLowerCase() == "tai" || cuoc.toLowerCase() == "tài") {
                document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Bạn đã thắng!!!";
            } else
                document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Đừng từ bỏ!! Cố lên!\n99% con bạc từ bỏ trước khi chiến thắng!";
        } else {
            document.getElementById("taihayxiu").textContent = "Xiu";
            if (cuoc == sumDice || cuoc.toLowerCase() == "xiu" || cuoc.toLowerCase() == "xỉu") {
                document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Bạn đã thắng!!!";
            } else
                document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Đừng từ bỏ!! Cố lên!\n99% con bạc từ bỏ trước khi chiến thắng!";
        }




    }

}


document.getElementById("chonSo").onclick = function() {



    document.getElementById("submitCuoc").onclick = function() {


        cuoc = document.getElementById("cuoc").value;


        document.getElementById("roll3dice").onclick = function() {

            randomDice1 = Math.floor(Math.random() * max) + min;
            randomDice2 = Math.floor(Math.random() * max) + min;
            randomDice3 = Math.floor(Math.random() * max) + min;
            randomKetqua = Math.floor(Math.random() * 18) + 3;


            document.getElementById("dice1").textContent = randomDice1;
            document.getElementById("dice2").textContent = randomDice2;
            document.getElementById("dice3").textContent = randomDice3;

            sumDice = randomDice1 + randomDice2 + randomDice3;

            if (randomDice1 + randomDice2 + randomDice3 > 10) {
                document.getElementById("taihayxiu").textContent = "Tai!";
                if (cuoc == sumDice || cuoc.toLowerCase() == "tai" || cuoc.toLowerCase() == "tài") {
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Bạn đã thắng!!!";
                } else
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Đừng từ bỏ!! Cố lên!\n99% con bạc từ bỏ trước khi chiến thắng!";
            } else {
                document.getElementById("taihayxiu").textContent = "Xiu";
                if (cuoc == sumDice || cuoc.toLowerCase() == "xiu" || cuoc.toLowerCase() == "xỉu") {
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Bạn đã thắng!!!";
                } else
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Đừng từ bỏ!! Cố lên!\n99% con bạc từ bỏ trước khi chiến thắng!";
            }
        }

    }

}

document.getElementById("chonKhoang").onclick = function() {


    document.getElementById("submitCuoc").onclick = function() {



        cuoc = document.getElementById("cuoc").value;


        document.getElementById("roll3dice").onclick = function() {

            randomDice1 = Math.floor(Math.random() * max) + min;
            randomDice2 = Math.floor(Math.random() * max) + min;
            randomDice3 = Math.floor(Math.random() * max) + min;
            randomKetqua = Math.floor(Math.random() * 18) + 3;


            document.getElementById("dice1").textContent = randomDice1;
            document.getElementById("dice2").textContent = randomDice2;
            document.getElementById("dice3").textContent = randomDice3;

            sumDice = randomDice1 + randomDice2 + randomDice3;

            if (randomDice1 + randomDice2 + randomDice3 > 10) {
                document.getElementById("taihayxiu").textContent = "Tai!";
                if (cuoc == sumDice || cuoc.toLowerCase() == "tai" || cuoc.toLowerCase() == "tài") {
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Bạn đã thắng!!!";
                } else
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Đừng từ bỏ!! Cố lên!\n99% con bạc từ bỏ trước khi chiến thắng!";
            } else {
                document.getElementById("taihayxiu").textContent = "Xiu";
                if (cuoc == sumDice || cuoc.toLowerCase() == "xiu" || cuoc.toLowerCase() == "xỉu") {
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Bạn đã thắng!!!";
                } else
                    document.getElementById("gambleResult").textContent = "Ket qua la " + sumDice + "\n. Đừng từ bỏ!! Cố lên!\n99% con bạc từ bỏ trước khi chiến thắng!";
            }




        }

    }


}