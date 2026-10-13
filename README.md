# FitConnect — Assignment 4

A five-page fitness community website demonstrating forms and validation. All interface text is English. The HTML, CSS, and JavaScript contain no comments.

## Run

Extract the ZIP and open `FitConnect/index.html` in a modern browser. No installation, build step, internet connection, or server is needed. Bootstrap 5.3.3 CSS and the JavaScript bundle are included locally.

## Pages

| Task | File | Implementation |
| --- | --- | --- |
| 0 | `index.html` | Basic contact form: associated labels, name, email, message, submit. No Bootstrap classes on the form fields. |
| 1 | `task1.html` | Native HTML5 validation: required, email type, minlength, maxlength, and name pattern. Browser validation remains enabled. |
| 2 | `task2.html` | Bootstrap form-control, form-label, form-text, row, and responsive columns; placeholders and helper text. |
| 3 | `task3.html` | Explicit is-valid / is-invalid classes, valid-feedback / invalid-feedback, accessible field descriptions, and native validation. Feedback appears on blur or a submission attempt and updates while correcting fields. |
| 4 | `task4.html` | Responsive registration: first and last names, email, password and confirmation, gender radios, hobby checkboxes, country dropdown, submit and reset. |

Every page shares the navbar, `assets/styles.css`, and `assets/app.js`. `index.html` is the Task 0 page, so there are exactly five HTML pages.

## Validation rules

- Contact tasks 1–3: name 2–60 characters, valid email up to 120 characters, message 10–1,000 characters. All required.
- Registration: names 2–40 characters; a valid email; password 8–64 characters containing a letter and number; an exact password match; one gender choice; and a country selection. Hobbies are optional and support multiple selections.
- `setCustomValidity()` checks confirmation and rechecks it when either password changes.
- Native browser validation is enabled on every page. Tasks 3–4 also use Bootstrap feedback and `aria-invalid`; feedback is linked to each control with `aria-describedby`.
- Reset clears inputs, selected options, validation styling, custom password errors, and the status message.

## Demo behavior

Valid submission displays a local success message. No server, account creation, email delivery, cookies, local storage, or data persistence is implemented. Passwords and other form values are never logged or included in URLs. Reloading discards the form data, subject to browser autofill behavior.

## Check manually

1. Visit all five pages through the navbar and test the collapsed mobile menu.
2. On Task 1, submit empty fields, enter an invalid email, and enter a message shorter than 10 characters. Confirm browser validation blocks submission.
3. On Task 3, submit empty fields, then correct them. Red feedback should turn green.
4. On Task 4, try a short password and mismatched passwords. Correct the confirmation, then edit the original password to verify it becomes invalid again.
5. Complete required fields, select multiple hobbies, and submit. Confirm the demo success message.
6. Reset and confirm values, radios, checkboxes, feedback, and success status are cleared.
7. Resize to phone, tablet, and desktop widths. Name and password columns stack on small screens.

See `VERIFICATION.md` for completed browser checks.

## Publish for submission

The assignment document requires a public website and GitHub repository link. This downloadable project does not itself create either.

### GitHub Pages

1. Create a GitHub repository for your individual assignment.
2. Upload the contents of `FitConnect` to the repository root so `index.html` is at the root.
3. In repository Settings → Pages, select Deploy from a branch, choose `main` and `/ (root)`, then save.
4. Wait for deployment and open the website URL shown by GitHub. Check every task page.
5. Submit the repository and published website links according to your course instructions.

### Netlify

Upload the `FitConnect` folder through Netlify's manual deployment interface. No build command is needed. Use the folder containing `index.html` as the publish directory. Keep the same source files in your GitHub repository for submission.

Add your own full name and group to your submission paperwork. Prepare to explain the forms, grid, constraints, feedback classes, and password comparison during the assignment defense.

## References and license

- Assignment source: `assign4_frontend.docx`, Assignment #4, Forms and Validation.
- Bootstrap 5.3: https://getbootstrap.com/docs/5.3/forms/validation/
- Bootstrap license: `assets/BOOTSTRAP-LICENSE.txt`. Vendor comment headers are relocated to this separate notice to keep code comment-free.
