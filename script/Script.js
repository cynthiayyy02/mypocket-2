// JavaScript source code
$(function () {
    $("#loginBtn").on('click', function () {
        window.location.href = "myPocket.html";
    })

    $("#plusSignIcon").on('click', function () {
        window.location.href = "member.html";
    })

    $(".member-card-div").on('click', function () {
        window.location.href = "memberLogin.html";
    })

    $("#MemberLoginBtn").on('click', function () {
        window.location.href = "loginSuccess.html";
    })

    $(".login-success-img-div").on('click', function () {
        window.location.href = "member.html";
    })

    $(".card").on('click', function () {
        window.location.href = "cardDetail.html";
    })

    $("#rewardOneBtn").on('click', function () {
        $("#rewardOne").modal("show");
    })

    $("#couponBtn").on('click', function () {
        $("#couponOne").modal("show");
    })

    $(".goToMyPocket").on('click', function () {
        window.location.href = "myPocket.html";
    })

    $(".icoc-bar-code-div").on('click', function () {
        window.location.href = "barcodeScan.html";
    })

    $(".goToMember").on('click', function () {
        window.location.href = "memberLogin.html";
    })


    $("#SearchCardMyPocket").on('input', function () {
        $(".card").hide();
        var value = $(this).val();
        $(".card").each(function () {
            var id = $(this).attr("id");
            if (id.indexOf(value) >= 0) {
                $(this).show();
            }           
        })
    })

    setTimeout(function () {
        $(".loader").css("animation", "none");
        $(".transform").css("animation", "none");
    }, 2500);
})

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button-tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" button-tab-active", " ");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " button-tab-active";
}

