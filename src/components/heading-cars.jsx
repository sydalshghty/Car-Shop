import "../css/heading-cars.css";

function HeadingCars() {
    return(
        <div className="w-full h-full heading-cars pt-10 mb-5">
            <div className="container flex flex-col items-end justify-end w-full h-full">
                <h2 className="text-5xl text-mainColor mb-2">جميع السيارات</h2>
                <p className="text-xl text-end">في هذا القسم نركز على عرض جميع الموديلات المتاحة للشراء وفقاً لمواصفاتها الأساسية،  ليستطيع المستخدم الاطلاع على تفاصيل السيارة بشكل واضح قبل الشراء، وكما يمكنك دوماً إلقاء نظرة شاملة على كافة أنواع السيارات  للاختيار بين العديد من الموديلات المتوفرة</p>
            </div>
        </div>
    )
}
export default HeadingCars;
