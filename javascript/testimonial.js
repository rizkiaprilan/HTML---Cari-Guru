var starflag = 0;
var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");


function star1Hover(){
    star1.src='Images/ratingchecked.png';
    star2.src='Images/rating.png';
    star3.src='Images/rating.png';
    star4.src='Images/rating.png';
    star5.src='Images/rating.png';
}

function star2Hover(){
    star1.src='Images/ratingchecked.png';
    star2.src='Images/ratingchecked.png';
    star3.src='Images/rating.png';
    star4.src='Images/rating.png';
    star5.src='Images/rating.png';
}

function star3Hover(){
    star1.src='Images/ratingchecked.png';
    star2.src='Images/ratingchecked.png';
    star3.src='Images/ratingchecked.png';
    star4.src='Images/rating.png';
    star5.src='Images/rating.png';
}

function star4Hover(){
    star1.src='Images/ratingchecked.png';
    star2.src='Images/ratingchecked.png';
    star3.src='Images/ratingchecked.png';
    star4.src='Images/ratingchecked.png';
    star5.src='Images/rating.png';
}

function star5Hover(){
    star1.src='Images/ratingchecked.png';
    star2.src='Images/ratingchecked.png';
    star3.src='Images/ratingchecked.png';
    star4.src='Images/ratingchecked.png';
    star5.src='Images/ratingchecked.png';
}

function star1Click(){
    starflag = 1;
    star1Hover();
}

function star2Click(){
    starflag = 2;
    star2Hover();
}

function star3Click(){
    starflag = 3;
    star3Hover();
}

function star4Click(){
    starflag = 4;
    star4Hover();
}

function star5Click(){
    starflag = 5;
    star5Hover();
}

function starMouseLeave(){
    if(starflag == 0){
        star1.src='Images/rating.png';
        star2.src='Images/rating.png';
        star3.src='Images/rating.png';
        star4.src='Images/rating.png';
        star5.src='Images/rating.png';
    }

    if(starflag == 1){
        star1Hover();
    }
    if(starflag == 2){
        star2Hover();
    }
    if(starflag == 3){
        star3Hover();
    }
    if(starflag == 4){
        star4Hover();
    }
    if(starflag == 5){
        star5Hover();
    }
    
}

function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var publishConf = document.getElementById("publishConf");


    var errName = document.getElementById("msgName");
    var errEmail = document.getElementById("msgEmail");
    var errRating = document.getElementById("msgRating");
    var errComment = document.getElementById("msgComment");


    var nama = new String(name.value);
    var eml = new String(email.value);
    var komen = new String(comment.value);
    var emlSplit = eml.split("@");


    var errorFlag = 0;
    var emailFlag = 0;
    var nameFlag = 0;
    var ratingFlag = 0;
    var commentFlag = 0;
    

    if(nama.length < 4 || nama.length > 25){
        errorFlag = 1;
        nameFlag = 1;
        errName.innerText = "Name must atleast 4 and maximum 25 characters long";
        errName.style.display = "inline-block";
    }
    if(nama.length < 1){
        errorFlag = 1;
        nameFlag = 1;
        errName.innerText = "Name is required";
        errName.style.display = "inline-block";
    }
    if(eml.indexOf('@') == -1 || eml.indexOf('.') == -1){
        errorFlag = 1;
        emailFlag = 1;
        errEmail.innerText = "Email must have \"@\" and \".\"";
        errEmail.style.display = "inline-block";
    }
    if(emlSplit.length > 2){
        errorFlag = 1;
        emailFlag = 1;
        errEmail.innerText = "Email must only have 1 \"@\"";
        errEmail.style.display = "inline-block";
    }
    if(eml.startsWith("@") || eml.startsWith(".")){
        errorFlag = 1;
        emailFlag = 1;
        errEmail.innerText = "Email can't start with \"@\" or \".\"";
        errEmail.style.display = "inline-block";
    }
    if(eml.endsWith("@") || eml.endsWith(".")){
        errorFlag = 1;
        emailFlag = 1;
        errEmail.innerText = "Email can't end with \"@\" or \".\"";
        errEmail.style.display = "inline-block";
    }
    if(eml.indexOf("@.") != -1 || eml.indexOf(".@") != -1){
        errorFlag = 1;
        emailFlag = 1;
        errEmail.innerText = "\"@\" or \".\" can't be next to each other";
        errEmail.style.display = "inline-block";
    }
    if(eml.length < 1){
        errorFlag = 1;
        emailFlag = 1;
        errEmail.innerText = "Email is required";
        errEmail.style.display = "inline-block";
    }
    if(starflag == 0){
        errorFlag = 1;
        ratingFlag = 1;
        errRating.innerText = "Rating is required";
        errRating.style.display = "inline-block";
    }
    if(komen.length < 1){
        errorFlag = 1;
        commentFlag = 1;
        errComment.innerText = "Comment is required";
        errComment.style.display = "inline-block";
    }
    if(publishConf.checked == false){
        if(!errorFlag){
            document.getElementById("checkBox").style.animationPlayState = "running";
            document.getElementById("checkBoxTxt").innerText = "I agree to publish this testimonial *";
        }
        errorFlag = 1;
    }

    if(errorFlag){
        if(!nameFlag){
            errName.innerText = "";
            errName.style.display = "none";
        }
        if(!emailFlag){
            errEmail.innerText = "";
            errEmail.style.display = "none";
        }
        if(!ratingFlag){
            errRating.innerText = "";
            errRating.style.display = "none";
        }
        if(!commentFlag){
            errComment.innerText = "";
            errComment.style.display = "none";
        }
        return false;
    }
    else{
        return true;
    }
}