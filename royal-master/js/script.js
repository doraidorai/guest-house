//fonction pour ajouter client
function singupClient() {
    //recuperation des donnees
    var firstName= document.getElementById("firstName").value;

    var isFirstNameValid = checkLength(firstName,3);
    if (isFirstNameValid==false) {
        document.getElementById('firstNameError').innerHTML = "FN should have at leas";
    } else {
        document.getElementById('firstNameError').innerHTML = '';
    }
    var lastName= document.getElementById("lastName").value;
    
    var Email= document.getElementById("Email").value;
    var Password= document.getElementById("Password").value;
var isPasswordValid = checkLength(Password,6);
if (isPasswordValid==false) {
    document.getElementById('passwordError').innerHTML = "Password should have at leas";
} else {
    document.getElementById('passwordError').innerHTML = '';
}
     var ConfirmPassword = document.getElementById("confirmpassword").value;
     var isconfirmPwdValid = checkPwd (ConfirmPassword ,Password);
     if (isconfirmPwdValid==false) {
        document.getElementById('confirmPwdErr').innerHTML='check pwd';
     } else {
        document.getElementById('confirmPwdErr').innerHTML ='';

     }

     var Tel= document.getElementById("Tel").value;
     var isTelValid = checkLength(Tel,8);
     if (isTelValid==false) {
        document.getElementById('telError').innerHTML="tel should be = 8";
        
     } else {
        document.getElementById('telError').innerHTML='';
     }
     if (isFirstNameValid &&  isPasswordValid  && isconfirmPwdValid && isTelValid) {
        //recuperer le tableau des users deja enregistres ou creer un tab vide pour user n°1

var usersTab =JSON.parse(localStorage.getItem('users') ||"[]");
    //creation de l'objet user
var user= {
    id: genrateId(usersTab)+1,
    FN: firstName,
    LN: lastName,
    Email: Email,
    Password: Password,
    ConfirmPassword: ConfirmPassword,
    Tel: Tel,
    role:'client'
    
}

//save info LS
//recuperer le tableau des users deja enregistres ou creer un tab vide pour user n'1
// var userTab = JSON.parse(localStorage.getItem('users') ||"[]");
//ajout d'un nouveau utilisateur dans le tableau
usersTab.push(user);
//enregistrer le nouveau tableau avec le nouveau obj ajoute
localStorage.setItem("users",JSON.stringify(usersTab));
location.replace('login.html');


}
}
//fonction pour ajouter Owner
function singupOwner() {
    //recuperation des donnees
    var FirstNameOwner= document.getElementById("firstNameOwner").value;

    var isFirstNameOwnerValid = checkLength(FirstNameOwner,3);
    if (isFirstNameOwnerValid==false) {
        document.getElementById('firstNameOwnerError').innerHTML = "FN should have at leas";
    } else {
        document.getElementById('firstNameOwnerError').innerHTML = '';
    }
    var lastNameOwner= document.getElementById("lastNameOwner").value;
    
    var EmailOwner= document.getElementById("EmailOwner").value;
    var PasswordOwner= document.getElementById("PasswordOwner").value;
var isPasswordOwnerValid = checkLength(PasswordOwner,6);
if (isPasswordOwnerValid==false) {
    document.getElementById('passwordOwnerError').innerHTML = "Password should have at leas";
} else {
    document.getElementById('passwordOwnerError').innerHTML = '';
}
     var ConfirmPasswordOwner = document.getElementById("confirmpasswordOwner").value;
     var isconfirmPwdOwnerValid = checkPwd (ConfirmPasswordOwner ,PasswordOwner);
     if (isconfirmPwdOwnerValid==false) {
        document.getElementById('confirmPwdOwnerErr').innerHTML='check pwd';
     } else {
        document.getElementById('confirmPwdOwnerErr').innerHTML ='';

     }

     var TelOwner= document.getElementById("TelOwner").value;
     var isTelOwnerValid = checkLength(TelOwner,8);
     if (isTelOwnerValid==false) {
        document.getElementById('telOwnerError').innerHTML="tel should be = 8";
        
     } else {
        document.getElementById('telOwnerError').innerHTML='';
     }
     if (isFirstNameOwnerValid &&  isPasswordOwnerValid  && isconfirmPwdOwnerValid && isTelOwnerValid) {
        //recuperer le tableau des users deja enregistres ou creer un tab vide pour user n°1

var usersTab =JSON.parse(localStorage.getItem('users') ||"[]");
    //creation de l'objet user
var user= {
    id: genrateId(usersTab)+1,
    FN: FirstNameOwner,
    LN: lastNameOwner,
    Email: EmailOwner,
    Password: PasswordOwner,
    ConfirmPassword: ConfirmPasswordOwner,
    Tel: TelOwner,
    role:'Owner'
    
}

//save info LS
//recuperer le tableau des users deja enregistres ou creer un tab vide pour user n'1
// var userTab = JSON.parse(localStorage.getItem('users') ||"[]");
//ajout d'un nouveau utilisateur dans le tableau
usersTab.push(user);
//enregistrer le nouveau tableau avec le nouveau obj ajoute
localStorage.setItem("users",JSON.stringify(usersTab));
location.replace('login.html');


}
}
//fonction pour ajouter Admin
function singupAdmin() {
    //recuperation des donnees
    var FirstNameAdmin= document.getElementById("firstNameAdmin").value;

    var isFirstNameAdminValid = checkLength(FirstNameAdmin,3);
    if (isFirstNameAdminValid==false) {
        document.getElementById('firstNameAdminError').innerHTML = "FN should have at leas";
    } else {
        document.getElementById('firstNameAdminError').innerHTML = '';
    }
    var lastNameAdmin= document.getElementById("lastNameAdmin").value;
    
    var EmailAdmin= document.getElementById("EmailAdmin").value;
    var PasswordAdmin= document.getElementById("PasswordAdmin").value;
var isPasswordAdminValid = checkLength(PasswordAdmin,6);
if (isPasswordAdminValid==false) {
    document.getElementById('passwordAdminError').innerHTML = "Password should have at leas";
} else {
    document.getElementById('passwordAdminError').innerHTML = '';
}
     var ConfirmPasswordAdmin = document.getElementById("confirmpasswordAdmin").value;
     var isconfirmPwdAdminValid = checkPwd (ConfirmPasswordAdmin ,PasswordAdmin);
     if (isconfirmPwdAdminValid==false) {
        document.getElementById('confirmPwdAdminErr').innerHTML='check pwd';
     } else {
        document.getElementById('confirmPwdAdminErr').innerHTML ='';

     }

     var TelAdmin= document.getElementById("TelAdmin").value;
     var isTelAdminValid = checkLength(TelAdmin,8);
     if (isTelAdminValid==false) {
        document.getElementById('telAdminError').innerHTML="tel should be = 8";
        
     } else {
        document.getElementById('telAdminError').innerHTML='';
     }
     if (isFirstNameAdminValid &&  isPasswordAdminValid  && isconfirmPwdAdminValid && isTelAdminValid) {
        //recuperer le tableau des users deja enregistres ou creer un tab vide pour user n°1

var usersTab =JSON.parse(localStorage.getItem('users') ||"[]");
    //creation de l'objet user
var user= {
    id: genrateId(usersTab)+1,
    FN: FirstNameAdmin,
    LN: lastNameAdmin,
    Email: EmailAdmin,
    Password: PasswordAdmin,
    ConfirmPassword: ConfirmPasswordAdmin,
    Tel: TelAdmin,
    role:'Admin',
    
}

//save info LS
//recuperer le tableau des users deja enregistres ou creer un tab vide pour user n'1
// var userTab = JSON.parse(localStorage.getItem('users') ||"[]");
//ajout d'un nouveau utilisateur dans le tableau
usersTab.push(user);
//enregistrer le nouveau tableau avec le nouveau obj ajoute
localStorage.setItem("users",JSON.stringify(usersTab));
location.replace('login.html');


}
}//fonction pour se connecter a vos comptes
function login() {
    //récupération des données
    var emailValue = document.getElementById('emailValue').value;
    var pwdValue = document.getElementById('pwdValue').value;
     
    //vérifier si email & pw sont correctes et existent dans LS
    // récuperer le tab des users
    var usersTab = JSON.parse(localStorage.getItem('users') );
    var findedUser;
    for (var i = 0; i < usersTab.length; i++) {
        if (emailValue==usersTab[i].Email && pwdValue==usersTab[i].Password) {
        // recuperation l'objet user ayant le meme email & pwd
        findedUser=usersTab[i];
        break;    
        }
        
    }
    //users exist in 'users' key
    if (findedUser) {
        //user is a client in exist in LS
        if (findedUser.role=="client") {
            location.replace("index.html");
            localStorage.setItem('connectedUserId',findedUser.id);
        }
        //user is a owner in exist in LS
        else if (findedUser.role=="Owner") {
                location.replace("Owner.html");
                localStorage.setItem('connectedUserId',findedUser.id);
        }
        // user is a admin  in exist in LS
         else {

            location.replace('admin.html')
            localStorage.setItem('connectedUserId',findedUser.id);
          }
        
    } else{
         document.getElementById('loginError').innerHTML = 'please check email/pwd';
         document.getElementById('loginError').style.color = 'red';
     }
     

}//fonction pour ajouter une maison
function addGuestHouse() {
    var connectedUserId= localStorage.getItem('connectedUserId');
    
    var name = document.getElementById ('name').value;
    var isNameValid = checkLength(name,4);
    if (isNameValid==false) {
        document.getElementById('NameError').innerHTML = "Name should have at least 4 caracters"
    } else {
        document.getElementById('NameError').innerHTML = ""
    }
    var roomNumber = document.getElementById ('roomNumber').value;
    var isroomNumberValid = checkLength(roomNumber,0);
    if (isroomNumberValid==false) {
        document.getElementById('roomNumberError').innerHTML = "roomNumber should be >0"
    } else {
        document.getElementById('roomNumberError').innerHTML = ""
    }

    var category = document.getElementById ('category').value;
    
// création de l'objet et enregistrement dans LS sauf si toutes les conditions vraies
if (isNameValid && isroomNumberValid) {
    
    //save in LS
var GuestHouseTab = JSON.parse(localStorage.getItem('Houses')|| '[]');


    //création de l'obj
    var House ={
        id: genrateId(GuestHouseTab)+1,
        prName:name,
        prroomNumber:roomNumber,
        prCategory:category,
        idOwner:connectedUserId
        
    }
//save in LS

GuestHouseTab.push(House);
localStorage.setItem ('Houses', JSON.stringify(GuestHouseTab));

location.replace('DetailsHouse.html');
}
    
    
    
}//fonction pour ajouter une chambre
function AddProductRoom() {
    var connectedUserId= localStorage.getItem('connectedUserId');
    var Name =document.getElementById('Name').value
    var capacité = document.getElementById ('capacité').value;
    var isCapacitéValid = checkLength(capacité,0);
    if (isCapacitéValid==false) {
        document.getElementById('CapacitéError').innerHTML = "Capacité should be > 0";
    } else {
        document.getElementById('CapacitéError').innerHTML = ""
    }
    var price = document.getElementById ('price').value;
    var ispriceValid = checkLength(price,0);
    if (ispriceValid==false) {
        document.getElementById('priceError').innerHTML = "price should be >0"
    } else {
        document.getElementById('priceError').innerHTML = ""
    }

    
// création de l'objet et enregistrement dans LS sauf si toutes les conditions vraies
if (isCapacitéValid && ispriceValid) {
    
    //save in LS
var RoomTab = JSON.parse(localStorage.getItem('Rooms') || '[]');

    //création de l'obj
    var Room ={
        id: genrateId(RoomTab)+1,
        prName:Name,
        prcapacité:capacité,
        price:price,
        idRoom:connectedUserId,
        
    }
//save in LS

RoomTab.push(Room);
localStorage.setItem ('Rooms', JSON.stringify(RoomTab));
location.replace('DetailsRoom.html');

}
    
    
    
}//fonction poir afficher les details des chambres
function RoomDetails() {
    var AddRoomTab = JSON.parse(localStorage.getItem('Rooms') || '[]');

    var connectedUserId = localStorage.getItem('connectedUserId')
    
    var content='';
    for (var i = 0; i < AddRoomTab.length; i++) {
            content = content +`
            <section class="about_history_area section_gap">
                <div style="margin-left:2%">
                    <div class="row">
                        <div class="col-md-6 d_flex align-items-center">
                            <div class="about_content ">
                            <h1 class="title title_color"> Name: ${AddRoomTab[i].prName}</h1>
                            
                                <h4 style="color:green"> Capacité: ${AddRoomTab[i].prcapacité}</h4>
                                <div>Description:</div>
                                <p style="color:black ;">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.
                                 That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                                 inappropriate behavior is often laughed.</p>
                                 <h4 style="color:black ;">Prix: ${AddRoomTab[i].price}</h4>
                                <a href="Reservation.html" class="button_hover theme_btn succsses"> Add Reservation </a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <img class="img-fluid" src="image/about_bg.jpg" alt="img">
                        </div>
                    </div>
                </div>
            </section>
            
            `
        
            

 
        

 
        document.getElementById('Rooms').innerHTML= content;
        
    }
 
    
}//fonction poir afficher les details des maisons
 function HouseDetailsClient() {
    var usersTab = JSON.parse(localStorage.getItem('users')|| '[]')
 var GuestHouseTab = JSON.parse(localStorage.getItem('Houses') );
 var content='';
 for (var i = 0; i < usersTab.length; i++) {
    if (usersTab[i].role=='client') {
        for (var i = 0; i < GuestHouseTab.length; i++) {
        
            content= content+`
    
            <section class="accomodation_area section_gap">
                    <div >
                        <div class="row mb-30">
                            <div class="col-lg-3 col-sm-6">
                                <div class="accomodation_item text-center">
                                
                                    <div class="hotel_img">
                                 
                                        <img src="image/room2.jpg" alt="">
                                        
                                    </div>
                                    
                                    <a href="#"><h4 class="sec_h4"> Name: ${GuestHouseTab[i].prName}</h4></a>
                                    <h5> Category: ${GuestHouseTab[i].prCategory}</h5>
                                    <h3> Nbres Room: ${GuestHouseTab[i].prroomNumber}</h3>
                                    <a onclick="godisplay(${GuestHouseTab[i].id})" class="btn theme_btn button_hover">Details Room
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                            <div style="color:red">Description House:</div>
                                <p>Dans un beau quartier se trouve une maison très luxe, sa façade donne une impression de beauté de l'intérieur. La maison a deux étages avec une façade inondée par le soleil, la maison à une vue spéciale sur la mer; ce qui donne un environnement Confortable et relaxant qui entoure la maison.
                                la décoration du salon est fortement enrichie de plusieurs détails. Ce qui a donné à l'endroit des touches de luxe.</p>
                                
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                
                            </div>
                        </div>
                    </div>
                </section>
        
            `
   
 
        
    
   
    
    
   
}
    }
    
 }
 
 document.getElementById('Housesclient').innerHTML= content;
 
}
function godisplay(id) {
    localStorage.setItem('displayHouseId',id);
    location.replace('DetailsRoom.html');
}
function HouseDetailsOwner() {
    var GuestHouseTab = JSON.parse(localStorage.getItem('Houses') );
 
   var userId = localStorage.getItem('connectedUserId');
   var content='';
   
    
        for (var i = 0; i < GuestHouseTab.length; i++) {
            if (GuestHouseTab[i].idOwner==userId) {
                 content= content+`

            <section class="accomodation_area section_gap">
                    <div >
                        <div class="row mb-30">
                            <div class="col-lg-3 col-sm-6">
                                <div class="accomodation_item text-center">
                                
                                    <div class="hotel_img">
                                 
                                        <img src="image/room2.jpg" alt="">
                                        
                                    </div>
                                    
                                    <a href="#"><h4 class="sec_h4"> Name: ${GuestHouseTab[i].prName}</h4></a>
                                    <h5> Category: ${GuestHouseTab[i].prCategory}</h5>
                                    <h3> Nbres Room: ${GuestHouseTab[i].prroomNumber}</h3>
                                    <a onclick='godisplayRoom(${GuestHouseTab[i].id})' class="btn theme_btn button_hover">Add Room</a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                            <div style="color:red">Description House:</div>
                                <p>Dans un beau quartier se trouve une maison très luxe, sa façade donne une impression de beauté de l'intérieur. La maison a deux étages avec une façade inondée par le soleil, la maison à une vue spéciale sur la mer; ce qui donne un environnement Confortable et relaxant qui entoure la maison.
                                la décoration du salon est fortement enrichie de plusieurs détails. Ce qui a donné à l'endroit des touches de luxe.</p>
                                
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                
                            </div>
                        </div>
                    </div>
                </section>
        
            `
            }
           
        }

    
    


document.getElementById('Housesowner').innerHTML= content;
}
//fonction pour reserver dans une maison
function addReservation() { 
    //récuperation des données
    var Datecheckin = document.getElementById('checkin').value;
    var Datecheckout = document.getElementById('checkout').value;
    var FN =document.getElementById('first Name').value;
    var LN = document.getElementById('last Name').value;
    //récuperer Id de user connecté dans LS
    var userId = localStorage.getItem('connectedUserId');
    
    //récuperer id du produit selectionné et enregistré dans LS
    var HouseId = localStorage.getItem('displayHouseId');
    var ReservationsTab = JSON.parse(localStorage.getItem('reservations') || '[]');
    var GuestHouseTab = JSON.parse(localStorage.getItem('Houses') || '[]');
    var AddRoomTab= JSON.parse(localStorage.getItem('Rooms')|| '[]');
    var Numberofperson = document.getElementById('Numberofperson').value;
    var nbreroom = document.getElementById('nbreroom').value;
for (var i = 0; i < AddRoomTab.length; i++) {
    if ( Numberofperson>AddRoomTab[i].prcapacité) {
        document.getElementById('capacitéError').innerHTML='Nbre person superieur a capacite'
    }else{
        document.getElementById('capacitéError').innerHTML=''
    }
    
}
    var findedHouse;
    
    for (var i = 0; i < GuestHouseTab.length; i++) {
        if (GuestHouseTab[i].id==HouseId) {
            findedHouse=GuestHouseTab[i];
            break;
        }
        
    }
    
      //création d'obj
    var Reservation = {
        id:genrateId(ReservationsTab) + 1,
        Datecheckin:Datecheckin,
        Datecheckout:Datecheckout,
        userId: userId,
        FN:FN,
        LN:LN,
        HouseId: HouseId,
        prperson:Numberofperson,
        prroom:nbreroom,
        
    }
    
    // save in LS
    ReservationsTab.push(Reservation);
       
    localStorage.setItem('reservations',JSON.stringify(ReservationsTab));
    
}
function DateResv() {
    var startdate = new Date('01-01-2023');
    var Enddate = new Date('30-03-2023');
    var dateTab= '[]';
    var date = startdate;
    if (date<=Enddate) {
        dateTab.push(new Date (date));
    }
    return (dateTab);
}//fonction pour generate header
function generateHeader() {
    var connectedUserId = localStorage.getItem('connectedUserId');
    var content;
   var connectedUser= searchObj(connectedUserId,'users');

    if (connectedUserId) {
        //connected user client
        if (connectedUser.role=='client') {
            content =`
            <header class="header_area">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="Search.html">SearchByprice</a></li> 
                            <li class="nav-item"><a class="nav-link" href="Houses.html">Houses</a></li>
                            <li class="nav-item"><a class="nav-link" onclick="logout()">logout</a></li>
                           
                        </ul>
                    </div> 
                </nav>
            </div>
        </header>
            
            `
        }
        //connected user Owner
        else if (connectedUser.role=='Owner') {
            content=`
            <header class="header_area">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="login.html">login</a></li> 
                            <li class="nav-item"><a class="nav-link" href="addGuestHouse.html">Add House</a></li> 
                            <li class="nav-item"><a class="nav-link" href="addRoom.html">Add Room</a></li>
                            <li class="nav-item"><a class="nav-link" href="Owner.html">Dhashbord</a></li>
                            <li class="nav-item"><a class="nav-link" onclick="logout()">lgout</a></li>
                            
                        </ul>
                    </div> 
                </nav>
            </div>
        </header>
            
            `
        }
        //connected user admin
        else{
            content=`
            <header class="header_area">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="DetailsHouse.html">Home</a></li> 
                            <li class="nav-item"><a class="nav-link" href="Admin.html">Dhashbord admin</a></li>
                            <li class="nav-item"><a class="nav-link" href="login.html">login</a></li>
                            <li class="nav-item"><a class="nav-link" onclick="logout()">logout</a></li>
                            
                        </ul>
                    </div> 
                </nav>
            </div>
        </header>
            
            `

        }
    } 
    
    else {
        //user is not connected
        content=`
        <header class="header_area">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <!-- Brand and toggle get grouped for better mobile display -->
                <a class="navbar-brand logo_h" href="index.html"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li> 
                        <li class="nav-item"><a class="nav-link" href="index.html">Acceuil</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.html">login</a></li>
                        <li class="nav-item"><a class="nav-link" href="singnupClient.html" > Are you client</a></li>
                        <li class="nav-item"><a class="nav-link" href="singnupOwner.html">Are you Owner</a></li>
                        
                        
                       
                        
                    </ul>
                </div> 
            </nav>
        </div>
    </header>
        
        `
    }
    document.getElementById('headerId').innerHTML = content;
}//fonction pour ajouter la maison connecté
function godisplayRoom(id) {
    localStorage.setItem('displayHouseId',id);
    location.replace('addRoom.html');
}
//fonction pour ajouter ID maison
function displayHouse() {
    var id = localStorage.getItem('displayHouseId');
    var GuestHouseTab = JSON.parse(localStorage.getItem('Houses') || '[]');
    var displayHouse;
    for (var i = 0; i < GuestHouseTab.length; i++) {
      if (GuestHouseTab[i].id==id) {
        displayHouse=GuestHouseTab[i];
        break;
      }
        
    }
}//fonction pour afficher les maisons de l'Owner connecté
function displayOwnerHouses() {
    var GuestHouseTab = JSON.parse(localStorage.getItem('Houses') ||'[]');
    var connectedUserId = localStorage.getItem('connectedUserId');
    var myHouses=[];
    var content='';
    
    for (var i = 0; i < GuestHouseTab.length; i++) {
       
        if (GuestHouseTab[i].idOwner==connectedUserId) {
            myHouses.push(GuestHouseTab[i]);
    
        }
    }
    
    for (var i = 0; i < myHouses.length; i++) {
    
        content=    content +`
    <tr>
       <td style="text-align: center;">
       ${myHouses[i].id}  
       </td>
       
       <td style="text-align: center;">
       ${myHouses[i].prCategory}
       </td>
       <td style="text-align: center;">
       ${myHouses[i].prName}
       </td>

       <td style="text-align: center;">
       ${myHouses[i].prroomNumber}  
       </td>
       
   </tr>
       
       `
    }
    
    
       document.getElementById('HousesOwnerDiv').innerHTML = content;

}//fonction pour afficher les chambres de l'Owner connecté
function displayOwnerRooms() {
    var AddRoomTab = JSON.parse(localStorage.getItem('Rooms')||'[]');
    var connectedUserId = localStorage.getItem('connectedUserId')
    var myRooms =[];
    var content='';
    for (var i = 0; i < AddRoomTab.length; i++) {
        if (AddRoomTab[i].idRoom==connectedUserId) {
            myRooms.push(AddRoomTab[i]);
        }
        
    }
    for (var i = 0; i < myRooms.length; i++) {
        content=    content +`
    <tr>
       <td style="text-align: center;" >
       ${myRooms[i].id}  
       </td>
       
       <td style="text-align: center;" >
       ${myRooms[i].prName}
       </td>
       <td style="text-align: center;" >
       ${myRooms[i].prcapacité}
       </td>

       <td style="text-align: center;" >
       ${myRooms[i].price}  
       </td>
       
   </tr>
       
       `
        
    }
    document.getElementById('RoomsOwnerDiv').innerHTML = content;


}//fonction pour afficher les reservations des chambres de l'Owner connecté
function displayOwnerReservation() {
    var ReservationsTab= JSON.parse(localStorage.getItem('reservations')|| '[]');
    var displayHouseId= localStorage.getItem('displayHouseId');
    var usersTab= JSON.parse(localStorage.getItem('users')|| '[]');
    var myReservations=[];
    var content='';
    for (var i = 0; i < ReservationsTab.length; i++) {
        if (ReservationsTab[i].id==displayHouseId) {
         myReservations.push(ReservationsTab[i])
            
        }
        
    }
    for (var i = 0; i < myReservations.length; i++) {
        content=    content +`
        <tr>
           <td style="text-align: center;" >
           ${myReservations[i].id}  
           </td>
           
           <td style="text-align: center;" >
           ${myReservations[i].userId}
           </td>
           <td style="text-align: center;" >
           ${myReservations[i].FN}
           </td>
           <td style="text-align: center;" >
           ${myReservations[i].LN}
           </td>
           
           <td style="text-align: center;" >
           ${myReservations[i].prperson}
           </td>
    
           <td style="text-align: center;" >
           ${myReservations[i].prroom}  
           </td>
           <td >
           ${myReservations[i].Datecheckin}  
           </td>
           <td style="text-align: center;" >
           ${myReservations[i].Datecheckout}  
           </td>
       </tr>
           
           `  
        
    }
    document.getElementById('RervationOwnerDiv').innerHTML = content;

}//fonction pour afficher les clients et les proprietaires pour l'admin
function displayMyusers() {
    var usersTab= JSON.parse(localStorage.getItem('users') || '[]');

    var clientsandOwner=[];
    var content='';
    for (var i = 0; i< usersTab.length; i++) {
        if (usersTab[i].role !='Admin') {
            clientsandOwner.push(usersTab[i]);
        }
        
    }
    for (var i = 0; i < clientsandOwner.length; i++) {
        content=    content +`
        <tr>
           <td style="text-align: center;" >
           ${clientsandOwner[i].id}  
           </td>
           
           <td style="text-align: center;" >
           ${clientsandOwner[i].FN}
           </td>
           <td style="text-align: center;" >
           ${clientsandOwner[i].LN}
           </td>
    
           <td style="text-align: center;" >
           ${clientsandOwner[i].Email}  
           </td>
           <td style="text-align: center;" >
           ${clientsandOwner[i].Tel}  
           </td>
           <td style="text-align: center;"><button class="btn btn-danger" onclick='DeleteUserByAdmin()'>delete</button></td
       </tr>
       
           
           `  
        
    }
    document.getElementById('UsersDiv').innerHTML = content;
}//fonction pour afficher tous les maisons pour l'admin
function displayAllHouses() {
    var GuestHouseTab = JSON.parse(localStorage.getItem('Houses') ||'[]');
    
    var content='';
    
    for (var i = 0; i < GuestHouseTab.length; i++) {
        content=    content +`
        <tr>
           <td style="text-align: center;">
           ${GuestHouseTab[i].id}  
           </td>
           
           <td style="text-align: center;">
           ${GuestHouseTab[i].prCategory}
           </td>
           <td style="text-align: center;">
           ${GuestHouseTab[i].prName}
           </td>
    
           <td style="text-align: center;">
           ${GuestHouseTab[i].prroomNumber}  
           </td>
           <td style="text-align: center;"><button class="btn btn-danger" onclick='DeleteHouseByAdmin()'>delete</button></td
       </tr>
           
           `
    }
    
 
    
    
       document.getElementById('HousesAdminDiv').innerHTML = content;     
}//fonction pour afficher tous les chambres pour l'admin
function displayAllRooms() {
    var AddRoomTab = JSON.parse(localStorage.getItem('Rooms')||'[]');
    
    var content='';
    for (var i = 0; i < AddRoomTab.length; i++) {
       
        content=    content +`
        <tr>
           <td style="text-align: center;" >
           ${AddRoomTab[i].id}  
           </td>
           
           <td style="text-align: center;" >
           ${AddRoomTab[i].prName}
           </td>
           <td style="text-align: center;" >
           ${AddRoomTab[i].prcapacité}
           </td>
    
           <td style="text-align: center;" >
           ${AddRoomTab[i].price}  
           </td>
           
           <td><button style="text-align: center;" class="btn btn-danger" onclick='DeleteRoomByAdmin()'>delete</button>   </td<td><button class="btn btn-warning" onclick='udpdateRoomtsAdmin()'>update</button></td
           
       </tr>
           
           `
    }
  
    document.getElementById('RoomsAdminDiv').innerHTML = content;
}//fonction pour afficher tous les reservations pour l'admin
function displayAllReservations() {
    var ReservationsTab= JSON.parse(localStorage.getItem('reservations')|| '[]');
    
    var content='';
    for (var i = 0; i < ReservationsTab.length; i++) {
        content=    content +`
        <tr>
           <td style="text-align: center;" >
           ${ReservationsTab[i].id}  
           </td>
           <td style="text-align: center;" >
           ${ReservationsTab[i].userId}  
           </td>
           <td style="text-align: center;" >
           ${ReservationsTab[i].FN}
           </td>
           <td style="text-align: center;" >
           ${ReservationsTab[i].LN}
           </td>
           <td style="text-align: center;" >
           ${ReservationsTab[i].prperson}
           </td>
    
           <td style="text-align: center;" >
           ${ReservationsTab[i].prroom}  
           </td>
           <td style="text-align: center;" >
           ${ReservationsTab[i].Datecheckin}  
           </td>
           <td style="text-align: center;" >
           ${ReservationsTab[i].Datecheckout}  
           </td>
           <td style="text-align: center;"><button class="btn btn-danger" onclick=''>delete</button></td
       </tr>
       
           `  
        
    }
    
    document.getElementById('RervationAdminDiv').innerHTML = content;

}//fonction pour comparer ch et nb
function checkLength(ch,nb){
    return (ch.length>nb);
     
}//fonction pour se deconnecter
function logout() {
    localStorage.removeItem('connectedUserId');
    location.replace('index.html')
}//fonction pour genere ID
function genrateId(T) {
    var max;
    if (T.length==0) {
        max=0
    } else {
        max=T[0].id;
        for (var i = 1; i < T.length; i++) {
          if (T[i].id>max) {
            max = T[i].id
          }  
            
        }
    }
    return max;
}
function DeleteUserByAdmin(id) {
    var usersTab=JSON.parse(localStorage.getItem('users') || '[]');
    var pos;
    for (var i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id==id) {
        pos=i;
        break;
    }
        
    }
    usersTab.splice(pos,1);
    localStorage.setItem('users',JSON.stringify(usersTab));
    location.reload();
}
function DeleteHouseByAdmin(id) {
    var GuestHouseTab=JSON.parse(localStorage.getItem('users') || '[]');
    var pos;
    for (var i = 0; i < GuestHouseTab.length; i++) {
    if (GuestHouseTab[i].id==id) {
        pos=i;
        break;
    }
        
    }
    GuestHouseTab.splice(pos,1);
    localStorage.setItem('Houses',JSON.stringify(GuestHouseTab));
    location.reload();
}
function DeleteRoomByAdmin(id) {
    var AddRoomTab=JSON.parse(localStorage.getItem('Rooms') || '[]');
    var pos;
    for (var i = 0; i < AddRoomTab.length; i++) {
    if (AddRoomTab[i].id==id) {
        pos=i;
        break;
    }
        
    }
    AddRoomTab.splice(pos,1);
    localStorage.setItem('Rooms',JSON.stringify(AddRoomTab));
    location.reload();
}
function checkPwd(ch1,ch2) {
    return(ch1==ch2);
}//fonction pour chercher Id et Key
function searchObj(id,key) {
    var T = JSON.parse(localStorage.getItem(key) || '[]');
    var findedObj;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            findedObj=T[i];
            break;
        }
        
    }
    return findedObj;
}

function searchByprice() {
    var AddRoomTab = JSON.parse( localStorage.getItem('Rooms')  || '[]');
    var price = document.getElementById('searchprice').value
    var RoomProduct= []
    var content=``;
    for (var i = 0; i < AddRoomTab.length; i++) {
        if (AddRoomTab[i].price==price) {
            RoomProduct.push(AddRoomTab[i]);
            for (var i = 0; i < RoomProduct.length; i++) {
                if (RoomProduct[i].price==price) {
                  price=RoomProduct[i];
                }
                content = content +`
                <section class="about_history_area section_gap">
                    <div style="margin-left:2%">
                        <div class="row">
                            <div class="col-md-6 d_flex align-items-center">
                                <div class="about_content ">
                                <h1 class="title title_color"> Name: ${RoomProduct[i].prName}</h1>
                                
                                    <h4 style="color:green"> Capacité: ${RoomProduct[i].prcapacité}</h4>
                                    <div>Description:</div>
                                    <p style="color:black ;">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.
                                     That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                                     inappropriate behavior is often laughed.</p>
                                     <h4 style="color:black ;">Prix: ${RoomProduct[i].price}</h4>
                                    <a href="Reservation.html" onclick="godisplay(${[i]})" class="button_hover theme_btn succsses"> Add Reservation </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <img class="img-fluid" src="image/about_bg.jpg" alt="img">
                            </div>
                        </div>
                    </div>
                </section>
                
                ` 
                
            }
        }
      
  
    }
    document.getElementById('searchDiv').innerHTML = content;
}
function udpdateRoomtsAdmin(id) {
   
    var AddRoomTab =searchObj (id,'Rooms');
    var AddRoomTab= JSON.parse(localStorage.getItem('Rooms'));
    var RoomProduct=[];
    var form='';  
      for (var i = 0; i < AddRoomTab.length; i++) {
       if (AddRoomTab[i].id==id) {
        RoomProduct.push(AddRoomTab[i])
       }
       for (var i = 0; i < RoomProduct.length; i++) {
        
        form =  `
    
        <div class="login_form_inner">
        
        <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
            <div class="col-md-12 form-group">
                <input type="email" class="form-control" id="newCapacite"  value= ${RoomProduct[i].prcapacité}>
            </div>
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" id="newPrice"  value= ${RoomProduct[i].price}>
            </div>
            <div class="col-md-12 form-group">
                
            </div>
            <div class="col-md-12 form-group">
                <button  class="btn" onclick='ValidateEdit(${RoomProduct[i].id})'>Validate</button>	
            </div>
            
        </div>
        
    </div>
    
        
        
        ` 
       }
    
      }  
      
   
  
    document.getElementById('formId').innerHTML = form;
}
function ValidateEdit(id) {
    var newCapacite = document.getElementById('newCapacite').value;
    var newPrice = document.getElementById('newPrice').value;
    
    var AddRoomTab= JSON.parse(localStorage.getItem('Rooms')|| '[]');
    for (var i = 0; i < AddRoomTab.length; i++) {
        if (AddRoomTab[i].id==id) {
            AddRoomTab[i].prcapacité=newCapacite;
            AddRoomTab[i].price=newPrice
        
        }
        
    }
         localStorage.setItem('Rooms',JSON.stringify(AddRoomTab));
         location.reload;
}


