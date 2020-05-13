$(document).ready(function() {


$.get('/api/all', function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var customer = $('<div>');
        customer.addClass('exist');
        customer.attr('id', 'customer-exist-' + i);
        $('#customer-section').append(customer);


        //all the customer info returned
        $('#customer-exist-' + i).append(`<h2>Customer Info:First Name:${data[i].firstName}</h2>`);
        $('#customer-exist-' + i).append(`<h2>Last Name:${data[i].lastName}</h2>`);
        $('#customer-exist-' + i).append(`<h6>Phone Number:${data[i].phone}</h6>`);
        $('#customer-exist-' + i).append(`<h6>Email:${data[i].email}</h6>`);

    };
});

});