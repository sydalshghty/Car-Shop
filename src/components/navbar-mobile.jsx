import "../css/Navbar-mobile.css";
function NavbarMobile () {
    
    return(
        <div className="navbar-mobile">
            <div className="container absolute left-0 z-50">
                <ul>
                    <li>
                        <a href="#" className="text-2xl text-white active">الرئيسية</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl text-white">كيفية الاستخدام ؟</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl text-white">العروض</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl text-white">تقديم طلب</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl text-white">ماذا عنا</a>
                    </li>
                    <li>
                        <a href="#" className="text-2xl text-white">تواصل معنا</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarMobile;