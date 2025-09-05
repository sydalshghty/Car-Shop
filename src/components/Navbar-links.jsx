import "../css/Navbar-links.css";

function NavbarLinks() {
    return(
        <div className="navbar-Links w-full mt-7">
            <div className="container flex items-center">
                <div className="all-buttons w-2/5">
                    <button className="login-btn w-36 h-11 rounded-lg text-lg text-white cursor-pointer">تسجيل دخول</button>
                    <button className="register-btn w-36 h-11 rounded-lg text-lg text-white cursor-pointer">تقديم طلب</button>
                </div>
                <ul className="flex justify-between items-center gap-5 w-full">
                    <li>
                        <a href="#" className="text-xl text-white">الرئيسية</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-xl">كيفية الاستخدام ؟</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-xl">العروض</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-xl">تقديم طلب</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-xl">ماذا عنا</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-xl">تواصل معنا</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarLinks;