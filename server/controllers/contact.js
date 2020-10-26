let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');

//display contact list
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', 
            {title: 'Company Contact', 
            ContactList: contactList,
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}


//get add contact page
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''})          
}

//post add contact page
module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', 
            {title: 'Edit Contact', 
            contact: contactToEdit,
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

//post edit page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updateConcat = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.emial,
    });

    Contact.updateOne({_id: id}, updateConcat, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the conact list
            res.redirect('/contact-list');
        }
    });
}

//post delect page
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/contact-list');
        }
    });
}