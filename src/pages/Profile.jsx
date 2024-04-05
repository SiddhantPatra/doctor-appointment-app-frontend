import { user1 } from "../assets/images";
import DatatableBookings from "../components/DatatableBookings";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Profile() {
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b pt-48 ">
        <div className="flex flex-row max-sm:flex-col max-sm:items-center lg:px-32 ">
          {/* Left */}
          <div className=" flex items-center">
            <div className=" w-64 shadow-2xl rounded-xl bg-white my-2 py-2">
              <ul className="text-center  ">
                <li className="text-center  py-3  hover:bg-teal-500 hover:font-semibold hover:text-white ">
                  Overview
                </li>
                <li className="text-center py-3 hover:bg-teal-500 hover:font-semibold hover:text-white ">
                  Appointments
                </li>
                <li className="text-center py-3 hover:bg-teal-500 hover:font-semibold hover:text-white ">
                  Setting
                </li>
                <li>
                  <button className="bg-red-600 mx-1 my-3 py-2 px-10 rounded-md text-white ">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-1 flex-col max-sm:w-screen mx-10 px-5 divide-y-2">
            <div className="flex flex-row items-center gap-5  my-5 ">
              <div>
                <img src={user1} height={100} width={100} />
              </div>
              <div>
                <h1>Jane Doe</h1>
                <p>jane@doe.com</p>
              </div>
            </div>
            <div className="ring-top">
              <div className=" ">
                <DatatableBookings />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Profile;
