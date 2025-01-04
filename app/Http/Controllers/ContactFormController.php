<?php
namespace App\Http\Controllers;

use App\Models\ContactForm;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    // Display all contact forms (read-only)
    public function index()
    {
        $contactForms = ContactForm::all(); // Fetch all contact form entries
        return response()->json($contactForms); // Return the data as JSON response
    }

    // Display a single contact form by ID (read-only)
    public function show($id)
    {
        $contactForm = ContactForm::findOrFail($id); // Find the contact form by ID
        return response()->json($contactForm); // Return the single contact form as JSON response
    }
}
