function CalElec() {
    var Name = document.getElementById("inpName").value;
    var Elec = Number(document.getElementById("inpElec").value);
    console.log(Name, Elec);
    var PayTotal = 0;

    if (0 < Elec && Elec <= 50) {
        PayTotal = 500 * Elec;
    }
    else if (50 < Elec && Elec <= 100) {
        PayTotal = 500 * 50 + 650 * (Elec - 50);
    }
    else if (100 < Elec && Elec <= 200) {
        PayTotal = 50 * 500 + 50 * 650 + (Elec - 100) * 850;
    } else if (200 < Elec && Elec <= 350) {
        PayTotal = 50 * 500 + 50 * 650 + 100 * 850 + (Elec - 200) * 1100;
    } else if (Elec > 350) {
        PayTotal = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Elec - 350) * 1300;
    }
    else {
        alert("Vui lòng nhập số kw hợp lệ!")
    }

    document.getElementById("txtElec").innerHTML = "Họ tên: " + Name + "<br>" + "Tiền điện: " + PayTotal
}
document.getElementById("btnElec").onclick = CalElec;