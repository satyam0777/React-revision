import React from "react";
import ProfileCard from "./components/profilecard";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 p-5">
      <h1 className="text-4x1 text-red font-bold mb-10">Team Profiles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard
          name="Satyam Prajapati"
          age={22}
          image="https://framerusercontent.com/images/ufyPDeKNS6YYBL0nV3ofalgI.png"
          isOnline={true}
          bio="Full Stack Developer | Passionate about Web Technologies"
        />
        <ProfileCard
          name="O P bro"
          age={25}
          image="https://framerusercontent.com/images/ufyPDeKNS6YYBL0nV3ofalgI.png"
          isOnline={false}
          bio="Open Source Contributor | Loves Python & React"
        />
        <ProfileCard
          name="shubham"
          age={28}
          image="https://framerusercontent.com/images/ufyPDeKNS6YYBL0nV3ofalgI.png"
          isOnline={true}
          bio="UI/UX Designer | Creating Stunning Interfaces"
        />
      </div>
    </div>
  );
};

export default App;