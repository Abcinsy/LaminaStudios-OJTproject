import React, { useState } from 'react';

const ApplicationForm = () => {
    // State to manage current step
    const [currentStep, setCurrentStep] = useState(1);

    // Function to handle next step
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    // Function to handle previous step (if needed)
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Function to display confirmation message
    const handleSubmit = () => {
        if (window.confirm('Are you sure you want to submit the form?')) {
            console.log('Application sent successfully!');
            setCurrentStep(currentStep + 1);
        } else {
            console.log('Submission cancelled.');
        }
    };

    return (
        <div className="relative h-screen flex items-center justify-center bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 h-1/3">
                <img
                    src="/Art/06.png"
                    alt="Photo"
                    className="object-cover w-full h-full opacity-50"
                />
            </div>

            {/* Form */}
            <div className="relative bg-offwhite px-10 py-10 rounded-lg shadow-lg w-full mx-64">
                <form>




                    {/* Section 1: Introduction */}
                    {currentStep === 1 && (
                        <div>

                            <img
                                src="/Art/lamina-logo.png"
                                alt="Lamina Studios Logo"
                                className="w-30 mx-auto mb-5"
                            />

                            <div className="text-left text-black mb-2">
                                <p> Your journey begins here. <br /><br /></p>
                                <p> At Lamina Studios, we believe in nurturing talent and providing hands-on experience that bridges the gap between academic learning and professional growth. We look forward to reviewing your application and potentially having you join our team. Embark on a journey of growth, learning, and professional development with Lamina Studios.
                                    <br /><br />
                                    Start your application today and take the first step towards a successful career! </p>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="mt-5 bg-amber-300 text-black px-4 py-2 rounded-xl focus:bg-amber-400">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}




                    {/* Section 2: Personal Details */}
                    {currentStep === 2 && (
                        <div>

                            <p className="mb-5 text-left text-xl font-bold font-display">
                                Personal Details </p>

                            <div className="grid grid-cols-2 gap-4">
                                {/* First Name */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your first name" />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your last name" />
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm" />
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Gender</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm">
                                        <option value="">Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your email address" />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your phone number" />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end mt-10">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-amber-300 text-black px-4 py-2 rounded-lg focus:bg-amber-400">
                                    Next
                                </button>
                            </div>
                        </div>
                    )}




                    {/* Section 3: Address Details */}
                    {currentStep === 3 && (
                        <div>

                            <p className="mb-5 text-left text-xl font-bold font-display">
                                Current Address </p>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Street Address */}
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-bold text-black">Street Address</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your street address"
                                    />
                                </div>

                                {/* Postal Code */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Postal Code</label>
                                    <input
                                        type="number"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your postal code"
                                    />
                                </div>

                                {/* City/Municipality */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">City/Municipality</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your city or municipality"
                                    />
                                </div>

                                {/* State/Province */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">State/Province</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                    >
                                        <option value="">Select your state or province</option>
                                        <option value="state1">State 1</option>
                                        <option value="state2">State 2</option>
                                        <option value="state3">State 3</option>
                                    </select>
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Country</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your country"
                                    />
                                </div>
                            </div>


                            {/* Buttons */}
                            <div className="flex justify-between mt-10">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="btn text-black btn-outline-dark d-flex align-items-center">
                                    <i className="bi bi-arrow-left mr-2"></i>
                                    Go Back
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-amber-300 text-black px-4 py-2 rounded-lg focus:bg-amber-400">
                                    Next
                                </button>
                            </div>
                        </div>
                    )}




                    {/* Section 4: OJT Information */}
                    {currentStep === 4 && (
                        <div>

                            <p className="mb-5 text-left text-xl font-bold font-display">
                                OJT Information </p>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Position */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Internship Position</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm">
                                        <option value="">Select your internship position</option>
                                        <option value="state1">Cybersecurity</option>
                                        <option value="state2">Data Analytics</option>
                                        <option value="state3">Financial Management</option>
                                        <option value="state4">Game Development</option>
                                        <option value="state5">IoT System Development</option>
                                        <option value="state6">Web Development</option>
                                        <option value="state7">UX/UI Design</option>
                                    </select>
                                </div>

                                {/* School/Organization */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">School</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your school name"
                                    />
                                </div>

                                {/* Course */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Course</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your current degree"
                                    />
                                </div>

                                {/* Year */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Year</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter your current year"
                                    />
                                </div>

                                {/* Start Date */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">Start Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm" />
                                </div>

                                {/* OJT Hours */}
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-black">OJT Hours</label>
                                    <input
                                        type="number"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        placeholder="Enter the total number of required OJT hours"
                                    />
                                </div>

                                {/* Upload CV/Resume */}
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-bold text-black">Upload CV/Resume</label>
                                    <input
                                        type="file"
                                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-inherit text-sm"
                                        accept=".pdf,.doc,.docx"
                                    />
                                </div>
                            </div>


                            {/* Buttons */}
                            <div className="flex justify-between mt-10">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="btn text-black btn-outline-dark d-flex align-items-center"
                                >
                                    <i className="bi bi-arrow-left mr-2"></i>
                                    Go Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit} // Call handleSubmit function on button click
                                    className="bg-amber-300 text-black px-4 py-2 rounded-lg focus:bg-amber-400"
                                >
                                    Submit All
                                </button>
                            </div>
                        </div>
                    )}





                    {/* Section 5: Briefing */}
                    {currentStep === 5 && (
                        <div>
                            <div className="text-left text-black mb-2">
                                <p className="mb-5 text-left text-xl font-bold font-display">
                                    Application Form Complete </p>
                                <p> Thank you for completing your OJT application form. We will now review the information and let you know if there's anything else we need. <br /><br /></p>
                            </div>

                            <div className="text-left text-black mb-2">
                                <p className="mb-5 text-left text-xl font-bold font-display">
                                    What happens next? </p>
                                <p> Our team will carefully review your application and assess your qualifications and experiences, you will receive an email notification regarding the status of your application. Please allow some time for our review process. To ensure you don’t miss any updates, please check your email regularly. Make sure to add our email address to your contacts to prevent our messages from going to your spam or junk folder.
                                    <br /><br />
                                    If you have any questions or require further assistance, please do not hesitate to contact us. </p>
                            </div>

                            <div className="flex justify-end">
                                <a
                                    href="/internship"
                                    className="mt-5 bg-amber-300 text-black px-4 py-2 rounded-xl focus:bg-amber-400 inline-block text-center"
                                >
                                    Back to Homepage
                                </a>

                            </div>
                        </div>
                    )}

                </form>

            </div>
        </div>
    );
};

export default ApplicationForm;
