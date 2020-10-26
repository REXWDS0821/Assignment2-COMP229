// Hao Wang, 301027664

/**load page terminal log function */
(function () {

    function Start() {

        console.log("App started...");

        let deleteButtons = document.querySelectorAll('.btn-outline-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Please confirm to perfom delete")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);

})();

var contactOjbject = {};
function sendContactObject() {


    $('#contactListModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var type = button.data('type');

        var modal = $(this);
        if(type == "edit"){
            modal.find('.modal-title').text('Edit');
            
            contactOjbject = {};
            var contactOjbject = button.data('detail');
                      
            modal.find('#nameTextField').val(contactOjbject.name);
            modal.find('#numberTextField').val(contactOjbject.number);
            modal.find('#emailTextField').val(contactOjbject.email);
            document.getElementById('modalDeleteBtn').href = "/contact-list/delete/" + contactOjbject._id;
            document.getElementById("modalForm").action = '/contact-list/edit/' + contactOjbject._id;
            document.getElementById('modalDeleteBtn').style.display="inline";
        } 
        if(type == "add") {
            modal.find('.modal-title').text('New');
            modal.find('#nameTextField').val('');
            modal.find('#numberTextField').val('');
            modal.find('#emailTextField').val('');
            document.getElementById("modalForm").action = '/contact-list/add';
            document.getElementById('modalDeleteBtn').style.display="none";
        }
        
    })
}



/*contact submit information */

/* send information for UserProfile object */

var UserProfile = {};
function SendToProfile() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var contactNumber = document.getElementById("contactNumber");
    var email = document.getElementById("emailAddress");
    var message = document.getElementById("message");

    UserProfile.firstName = firstName.value;
    UserProfile.lastName = lastName.value;
    UserProfile.contactNumber = contactNumber.value;
    UserProfile.email = email.value;
    UserProfile.message = message.value;

    window.location.replace("/home");

    console.log("\n User fisrt name: " + UserProfile.firstName +
        "\n User last name: " + UserProfile.lastName +
        "\n User contact number: " + UserProfile.contactNumber +
        "\n User email: " + UserProfile.email +
        "\n User messege: " + UserProfile.message);

    alert("Thank you for your information");

}

/*listen to the button event */

var subBtn = document.getElementById("subBtn");
if (subBtn.addEventListener) {
    subBtn.addEventListener("click", SendToProfile, false);
} else if (subBtn.attachEvent) {
    subBtn.attachEvent("onclick", SendToProfile);
}

