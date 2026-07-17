export default function Categories() {
  const categories = [
    "حلاوة المولد",
    "علب الهدايا",
    "المكسرات",
    "الملبن",
  ];

  return (
    <section className="py-24 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#670047] mb-12">
          تصنيفات المنتجات
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-md p-10 text-center hover:shadow-xl transition"
            >
              <div className="w-24 h-24 rounded-full bg-[#F5ECE8] mx-auto mb-5"></div>

              <h3 className="font-bold text-xl">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}