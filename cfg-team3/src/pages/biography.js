import React, { useState } from "react";
import "./about.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer.js";
import Aaron from "../images/aaron.jpeg";
import Nadia from "../images/nadia.jpeg";
import Luke from "../images/luke.jpeg";
import Charles from "../images/charles.jpeg";
import Hamza from "../images/hamza.jpeg";
import Vivek from "../images/vivek.jpeg";
import Wilson from "../images/wilson.jpeg";







export default function Courses() {

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl font-semibold py-4 text-center">
        Meet the Developers
        </h1>

    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">

      <img src={Hamza} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Hamza Chaudhry</h2>
        <p class="text-gray-600">CS Major from Salisbury University.</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img src={Luke} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Luke Tao</h2>
        <p class="text-gray-600">CS Major from Cornell University</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img src={Vivek} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Vivek Inumella</h2>
        <p class="text-gray-600">CS Major from Georgia Tech</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img src={Nadia} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Nadia Meyerovich</h2>
        <p class="text-gray-600">CS Major from University of Maryland, College Park </p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img src={Wilson} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Wilson Overfield</h2>
        <p class="text-gray-600">CS Major from University of Nebraska </p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img src={Charles} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Charles Mbakop </h2>
        <p class="text-gray-600">CS Major from University of Maryland, Global Campus </p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img src={Aaron} alt="Card Image" class="w-full md:w-1/2 object-cover h-48 md:h-auto" />
      <div class="p-4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-2">Aaron Lewis </h2>
        <p class="text-gray-600">CS Major from University of Maryland, College Park </p>
      </div>
    </div>
  </div>



    </div>
    );
}