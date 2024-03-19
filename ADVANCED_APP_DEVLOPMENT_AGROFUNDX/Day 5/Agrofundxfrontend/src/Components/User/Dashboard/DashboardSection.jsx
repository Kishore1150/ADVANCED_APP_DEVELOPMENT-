import React from "react";
import profile from "../../../Assets/Images/nav/profile.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../useContext/UseStates";


const Dashboardsection = () => {
  const navigate = useNavigate();
  const {user,updateUser}=useUser();
  return (
    <>
      <main className="">
        <aside className=" lg:hidden dash h-screen overflow-y-scroll bg-[#f9f9f9]  fixed  w-[20em] ">
          <div className=" ">
            <div className="flex gap-4 cursor-pointer border-b-2 border-lightwhite p-3 w-full ">
              {user?.profileImage ? (
                <figure className="w-fit  ">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={user?.profileImage}
                    alt=""
                  />
                </figure>
              ) : (
                <figure className="w-fit  ">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={profile}
                    alt=""
                  />
                </figure>
              )}
              <div>
                <p className="text-sm  font-bold text-teal">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-[#779567] text-sm">IN</p>
              </div>
            </div>
            <div className="flex px-3 flex-col gap-2 cursor-pointer ">
              <div
                onClick={() => navigate("/dashboard")}
                className="flex rounded-md bg-hoverteal text-teal items-center justify-between p-3">
                <p className="font-medium ">My Impact</p>
              </div>
              <div className="flex rounded-md p-3 hover:duration-300 hover:bg-hoverteal hover:text-hovergray text-teal items-center justify-between ">
                <p className="font-medium ">My loans</p>
              </div>

              <div
                onClick={() => navigate("/usercampaigndonated")}
                className="flex   rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-[#779567] items-center justify-between p-3">
                <p className="font-medium ">Interest </p>
              </div>
              <div
                onClick={() => navigate("/userbookmarks")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium ">My Bookmarks</p>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal  items-center justify-between p-3">
                <p className="font-medium ">Users follow</p>
              </div>
              <div
                onClick={() => navigate("/userdonations")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium ">Donations</p>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium ">Transactions</p>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium ">Blood Donated</p>
              </div>

              {/* <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">My Campaigns</p>
                <span>
                  <i class="fa-solid fa-folder"></i>
                </span>
              </div> */}

              <div
                onClick={() => navigate("/usereditprofile")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium ">Edit profile</p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Dashboardsection;
