/*Tableau joueuses*/
/**
 * Highlights all table rows when the user
 * selects the "select all" checkbox.
 */
 function highlightAllTableRows() {
	let row = document.getElementsByClassName("table-row");
	for (let i = 0; i < row.length; i++) {
		// We check that the row is not highlighted
		// and also exclude the first row in the table
		// which contains the "select all" checkbox itself
		if (!row[i].classList.contains("highlighted") && i !== 0) {
			row[i].classList.add("highlighted");
		}
	}
}

/**
 * Remove highlight from the table when the
 * user de-selects the "select all" checkbox.
 */
function removeTableRowsHighlight() {
	let row = document.getElementsByClassName("table-row");
	for (let i = 0; i < row.length; i++) {
		// We check that the row is highlighted
		// and also exclude the first row in the table
		// which contains the "select all" checkbox itself
		if (row[i].classList.contains("highlighted") && i !== 0) {
			row[i].classList.remove("highlighted");
		}
	}
}

/**
 * Highlights a single table row when the user
 * clicks on the checkbox.
 */
function highlightTableRow() {
	let table_row = document.getElementsByClassName("table-row");
	for (let i = 0; i < table_row.length; i++) {
		let row = table_row[i];
		if (i !== 0) {
			row.addEventListener("click", function () {
				if (row.children[0].childNodes[3].checked === true) {
					row.classList.add("highlighted");
				}
			});
		}
	}
}

/**
 * Removes the table row highlight when the user
 * unchecks the checkbox.
 */
function removeTableRowHighlight() {
	let table_row = document.getElementsByClassName("table-row");
	for (let i = 0; i < table_row.length; i++) {
		let row = table_row[i];
		if (i !== 0) {
			row.addEventListener("click", function () {
				if (
					!row.children[0].childNodes[3].checked === true &&
					row.classList.contains("highlighted")
				) {
					row.classList.remove("highlighted");
				}
			});
		}
	}
}

// We check if the multiple_deletion is
// in the current script.
if (document.getElementById("multiple_deletion")) {
	/**
	 * on the initail loading of the script,
	 * set the number of checked checkboxes to zero
	 */
	let checked = 0;

	let multiple_deletion = document.getElementById("multiple_deletion");

	/**
	 * On the initial loading of the script,
	 * hide the button
	 */
	multiple_deletion.style.display = "none";

	let select_all_checkboxes = document.getElementById(
		"select_all_checkboxes"
	);
	let delete_checkbox = document.getElementsByClassName("delete_checkbox");

	// if the user clicks on the 'select_all_checkboxes'
	select_all_checkboxes.addEventListener("click", function () {
		for (let i = 0; i < delete_checkbox.length; i++) {
			if (select_all_checkboxes.checked === true) {
				// Highlight all table rows
				highlightAllTableRows();

				// select all the delete_checkbox
				delete_checkbox[i].checked = true;

				// increment the checked value
				checked++;
			} else {
				// Remove highlight from all table rows
				removeTableRowsHighlight();

				// When the user deselects the checkbox
				// we uncheck all the delete_checkbox
				delete_checkbox[i].checked = false;

				// decrement the checked valuu
				checked--;
			} // end of if(select_all_checkboxes)

			// if the checked value is greater that zero
			if (checked > 0) {
				// Show the button to process multiple
				// deletion
				multiple_deletion.style.display = "block";
			} else {
				// no element is checked

				// Hide the button
				multiple_deletion.style.display = "none";
			} // end if if(checked > 0)
		} // end of for()
	});

	for (let i = 0; i < delete_checkbox.length; i++) {
		delete_checkbox[i].addEventListener("click", function () {
			if (delete_checkbox[i].checked === true) {
				// Highlight the table row
				highlightTableRow();

				// increment the checked variable
				checked += 1;
			} else if (delete_checkbox[i].checked === false) {
				// the user unchecks a checkbox
				// we uncheck the select_all_checkboxes
				select_all_checkboxes.checked = false;

				// Remove the highlight
				removeTableRowHighlight();

				// Decrement the checked counter by one
				checked -= 1;
			} // end of if(delete_checkbox[i])

			/**
			 * When the user click on the select_all_checkboxes
			 * twice without selecting any 'delete_checkbox' it
			 * triggers a bug that decrements the checked value
			 * to a negative number if the user later selects a
			 * delete_checkbox.
			 *
			 * In order to fix that, we set the value of the
			 * checked variable to 1 when it has a negative
			 * value.
			 */
			if (checked < 0) {
				// checked = 1;
			} // end of if(checked())

			/**
			 * When the checked value is greater
			 * than zero, we set the display property
			 * of the multiple_deletion to 'block'
			 * otherwise we set the diplay property to 'none'
			 */
			if (checked > 0) {
				multiple_deletion.style.display = "block";
			} else {
				multiple_deletion.style.display = "none";
			} // end of if(checked())
		});
	}
}
