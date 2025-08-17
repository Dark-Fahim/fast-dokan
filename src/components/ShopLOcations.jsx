import { FaArrowAltCircleRight } from "react-icons/fa";


const ShopLOcations = () => {
    return (
        <div className='px-2 mt-2 space-y-4'>
            <h2 className='text-2xl font-bold mb-3'>Search by Locations</h2>

            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Dhaka <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Dhaka</a></li>
                    <li><a>Gazipur</a></li>
                    <li><a>Narayanganj</a></li>
                    <li><a>Narsingdi</a></li>
                    <li><a>Kishoreganj</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Rajshahi <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Rajshahi</a></li>
                    <li><a>Pabna</a></li>
                    <li><a>Sirajganj</a></li>
                    <li><a>Bogura</a></li>
                    <li><a>Joypurhat</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Chittogong <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Cox’s Bazar</a></li>
                    <li><a>Rangamati</a></li>
                    <li><a>Khagrachhari</a></li>
                    <li><a>Bandarban</a></li>
                    <li><a>Feni</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Rangpur <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Dinajpur</a></li>
                    <li><a>Gaibandha</a></li>
                    <li><a>Lalmonirhat</a></li>
                    <li><a>Kurigram</a></li>
                    <li><a>Thakurgaon</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Khulna <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Bagerhat</a></li>
                    <li><a>Satkhira</a></li>
                    <li><a>Jessore</a></li>
                    <li><a>Narail</a></li>
                    <li><a>Magura</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Barishal <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Patuakhali</a></li>
                    <li><a>Pirojpur</a></li>
                    <li><a>Bhola</a></li>
                    <li><a>Barguna</a></li>
                    <li><a>Jhalokathi</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Sylhet <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Sylhet</a></li>
                    <li><a>Moulvibazar</a></li>
                    <li><a>Habiganj</a></li>
                    <li><a>Sunamganj</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">Mymensingh <FaArrowAltCircleRight  className="text-[#06923E] text-xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Mymensingh</a></li>
                    <li><a>Netrokona</a></li>
                    <li><a>Jamalpur</a></li>
                    <li><a>Sherpur</a></li>
                </ul>
            </div>

        </div>
    );
};

export default ShopLOcations;