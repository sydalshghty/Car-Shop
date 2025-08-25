import "../css/Navbar-links.css";

function NavbarLinks() {
    return(
        <div className="navbar-Links w-full">
            <div className="container flex gap-20 items-center">
                <div className="all-buttons">
                    <button className="login-btn">تسجيل دخول</button>
                    <button className="register-btn">تقديم طلب</button>
                </div>
                <ul className="flex justify-between items-center gap-20">
                    <li>
                        <a href="#" className="text-white text-2xl active">الرئيسية</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-2xl">كيفية الاستخدام ؟</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-2xl">العروض</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-2xl">تقديم طلب</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-2xl">ماذا عنا</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-2xl">تواصل معنا</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarLinks;