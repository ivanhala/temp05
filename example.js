jQuery(document).on( 'wbk_on_form_rendered', function(){
    //predictive address

    var txt = document.getElementById('address1');

    new data8.predictiveaddressui(txt, {

    // Change this to your own API Key

    ajaxKey: '9EM3-92LI-4G36-DDW2',

    fields: [

    { element: 'address1', field: 'line1' },

    { element: 'postcode', field: 'postcode' }

    ]

    });
});
