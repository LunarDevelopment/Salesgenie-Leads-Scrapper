var b_name = document.querySelectorAll(".BusinessName a");

var executive_name = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(3)");

var executive_title = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(4)");

var phone = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(5)");

var street_address = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(6)");

var city = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(7)");

var postal_code = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(8)");

var province = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(9)");

var sic_description = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(10)");

var sic_code = document.querySelectorAll("#resultsGridView tbody tr td:nth-child(11)");


var n;

var length = b_name.length;

var leads = [];
		
var serial = 0;

for ( n = 0; n < length ; n++ ) {

	

	executive_name[serial].click();
	filtered_name = String("\"" + b_name[serial].innerText + "\"");
	filtered_ex_name = String("\"" + executive_name[serial].innerText + "\"");
	filtered_ex_title = String("\"" + executive_title[serial].innerText + "\"");
	filtered_phone = String("\"" + phone[serial].innerText + "\""); 
	filtered_st_address = String("\"" + street_address[serial].innerText + "\"");
	filtered_city = String("\"" + city[serial].innerText + "\"");
	filtered_postal_code = String("\"" + postal_code[serial].innerText + "\"");
	filtered_province = String("\"" + province[serial].innerText + "\"");
	filtered_sic_description = String("\"" + sic_description[serial].innerText + "\"");
	filtered_sic_code = String("\"" + sic_code[serial].innerText + "\"");
	
	
	
	var site = document.querySelectorAll("#qvsMainWebSite");
	
	filtered_site = String("\"" + site[0].innerHTML + "\"");
	
	

	leads.push([filtered_name,
		    filtered_ex_name,
		    filtered_ex_title,
		    filtered_phone,
		    filtered_st_address,
		    filtered_city,
		    filtered_postal_code,
		    filtered_province,
		    filtered_sic_description,
		    filtered_sic_code,
		    filtered_site
		    ]);
			
	var csv = '"Business Name";"Executive Name";"Executive Title";"Phone";"Street Address";"City";"Postal Code";"Province";"SIC Description";"SIC Code";"Website"\n';
						 
    leads.forEach(function(row) {
            csv += row.join(';');
            csv += "\n";
    });	
    
	serial = serial + 1;


	
	
}

var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'r47-salesgenie-leads.csv';
    hiddenElement.click();  
