<?php

$errors = [];
$data = [];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['surname'])) {
    $errors['surname'] = 'Surname is required.';
}

if (empty($_POST['date'])) {
    $errors['date'] = 'Date is required.';
}

if (empty($_POST['phone'])) {
    $errors['phone'] = 'Phone is required.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);
