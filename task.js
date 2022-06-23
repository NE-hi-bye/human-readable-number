function toReadable(numberr) {
    const arr = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        "10+": "teen",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    const number = String(numberr).split("");
    console.log(numberr, number.length, number, number.slice(-2).join(""));
    let res;
    const num3 = number.slice(-1).join("");
    const num2 = number.slice(-2, -1).join("");
    const num2teen = num2 + "0";
    const num1 = number.slice(0, 1).join("");
    const num1teen = number.slice(0, 1).join("") + "0";
    const numTo2 = number.slice(-2).join("");

    if (number.length === 3) {
        console.log("Ook");
        if (numTo2 == 00) {
            console.log(arr[num1], arr[100]);
            return arr[num1] + " " + arr[100];
        } else if (numTo2 <= 20) {
            if (numTo2 > 9) {
                console.log(arr[num1], arr[100], arr[numTo2]);
                return arr[num1] + " " + arr[100] + " " + arr[numTo2];
            } else {
                console.log(arr[num1], arr[100], arr[num3]);
                res = arr[num1] + " " + arr[100] + " " + arr[num3];
                return res;
            }
        } else if (num3 == 0) {
            return arr[num1] + " " + arr[100] + " " + arr[num2teen];
        } else {
            console.log(arr[num1], arr[100], arr[num2teen], arr[num3]);
            res =
                arr[num1] +
                " " +
                arr[100] +
                " " +
                arr[num2teen] +
                " " +
                arr[num3];
            return (
                arr[num1] +
                " " +
                arr[100] +
                " " +
                arr[num2teen] +
                " " +
                arr[num3]
            );
        }
    } else if (number.length <= 2) {
        if (numTo2 == 10) {
            console.log(arr[10]);
            return arr[10];
        } else if (numTo2 <= 20) {
            console.log(arr[numTo2]);
            return arr[numTo2];
        } else if (num3 != 0) {
            console.log(arr[num1teen], arr[num3]);
            return arr[num1teen] + " " + arr[num3];
        } else if (num3 == 0) {
            return arr[num1teen];
        }
    }
}

console.log(toReadable(852));
