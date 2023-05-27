<?php
    $servername = "localhost";
    $username = "orbla_test_user";
    $password = "REDACTED";
    $dbname = "orbla_or_noy_lior_targil3_php";

	// Create connection
    $connection = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    } 

	function extractField($fieldName) {
		return ( ! empty($_POST[$fieldName]) ? $_POST[$fieldName] : 'NULL' );
	}
	if ($_POST) {
		$idNum = extractField('idNum');
		$taxYear = extractField('taxYear');
		$employerName = extractField('employerName');
		$employerAddress = extractField('employerAddress');
		$employerPhoneNumber = extractField('employerPhoneNumber');
		$deductionsPortfolioID = extractField('deductionsPortfolioID');
		$firstName = extractField('firstName');
		$lastName = extractField('lastName');
		$identifyType = extractField('identifyType');
		$dateOfBirth = extractField('dateOfBirth');
		$dateOfAlia = extractField('dateOfAlia');
		$city = extractField('city');
		$street = extractField('street');
		$houseNum = extractField('houseNum');
		$zipcode = extractField('zipcode');
		$mobilePhoneNumber = extractField('mobilePhoneNumber');
		$landlineNumber = extractField('landlineNumber');
		$email = extractField('email');
		$gender = extractField('gender');
		$martialStatus = extractField('martialStatus');
		$isIsraeli = extractField('isIsraeli');
		$isKibutz = extractField('isKibutz');
		$hmo = extractField('hmo');
		
		$sql = "INSERT INTO form101 VALUES (	
			".$idNum.",
			".$taxYear.",
			'".$employerName."',
			'".$employerAddress."',
			'".$employerPhoneNumber."',
			".$deductionsPortfolioID.",
			'".$firstName."',
			'".$lastName."',
			'".$identifyType."',
			'".$dateOfBirth."',
			'".$dateOfAlia."',
			'".$city."',
			'".$street."',
			".$houseNum.",
			".$zipcode.",
			'".$mobilePhoneNumber."',
			'".$landlineNumber."',
			'".$email."',
			'".$gender."',
			'".$martialStatus."',
			'".$isIsraeli."',
			'".$isKibutz."',
			'".$hmo."'
			) ON DUPLICATE KEY UPDATE 
				idNum = '".$idNum." ',	
				taxYear = ".$taxYear." ,
				employerName = '".$employerName." ',
				employerAddress = '".$employerAddress." ',
				employerPhoneNumber = '".$employerPhoneNumber." ',
				deductionsPortfolioID = ".$deductionsPortfolioID." ,
				firstName = '".$firstName." ',
				lastName = '".$lastName." ',
				identifyType = '".$identifyType." ',
				dateOfBirth = '".$dateOfBirth." ',
				dateOfAlia = '".$dateOfAlia." ',
				city = '".$city." ',
				street = '".$street." ',
				houseNum = ".$houseNum." ,
				zipcode = ".$zipcode." ,
				mobilePhoneNumber = '".$mobilePhoneNumber." ',
				landlineNumber = '".$landlineNumber." ',
				email = '".$email." ',
				gender = '".$gender." ',
				martialStatus = '".$martialStatus." ',
				isIsraeli = '".$isIsraeli." ',
				isKibutz = '".$isKibutz." ',
				hmo = '".$hmo."' 
			;";
		if (! $connection->query($sql) === true) {
            echo ("Failed to apply the form. Error: " . $connection->error);
		}
		else {
			echo "Form applied successfully!";
		}
	}
?>