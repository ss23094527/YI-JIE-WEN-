import React from "react";
import Header from "../components/Header";
import UserContent from "../components/User";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function User() {
 
  return (
    <div className="">
     <Header />
     <UserContent />
     <Footer />
     <Helmet><title>User Profile</title></Helmet>
    </div>
  );
}

export default User;

